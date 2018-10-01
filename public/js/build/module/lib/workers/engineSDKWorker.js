/**
 * @hidden
 */
// tslint:disable-next-line:max-func-body-length
export function engineSDKWorkerFunction() {
    let imageBufferPointer;
    let licenseKey;
    let settings;
    let imageSettings;
    let wasmLoaded = false;
    let scannerSettingsReady = false;
    let scannerImageSettingsReady = false;
    const scanQueue = [];
    const parseQueue = [];
    let contextAvailable = false;
    let scanWorkSubmitted = false;
    let parseWorkSubmitted = false;
    let blurryDecodingEnabled = false;
    // Adapted from: https://github.com/mdn/webassembly-examples/blob/master/wasm-utils.js
    function instantiateWasmWithCache(wasmURI, wasmVersion, importObject, successCallback) {
        const dbName = "scandit_wasm_cache";
        const storeName = "scandit_wasm_cache";
        const key = "wasm";
        let db;
        function loadDatabase(resolve, reject) {
            let openDBRequest;
            try {
                openDBRequest = indexedDB.open(dbName, wasmVersion);
            }
            catch (error) {
                return reject(`Failed to open scandit-sdk WebAssembly cache database: ${error}`);
            }
            openDBRequest.onerror = () => {
                return reject("Failed to open scandit-sdk WebAssembly cache database");
            };
            openDBRequest.onsuccess = () => {
                db = openDBRequest.result;
                const store = db.transaction([storeName]).objectStore(storeName);
                const request = store.get(key);
                request.onerror = () => {
                    return reject("Failed to open scandit-sdk WebAssembly cache database");
                };
                request.onsuccess = () => {
                    if (request.result != null) {
                        return resolve(request.result);
                    }
                    else {
                        return reject("No cached version of the scandit-sdk WebAssembly code has been found");
                    }
                };
            };
            openDBRequest.onupgradeneeded = () => {
                db = openDBRequest.result;
                if (db.objectStoreNames.contains(storeName)) {
                    db.deleteObjectStore(storeName);
                }
                db.createObjectStore(storeName);
            };
        }
        function storeInDatabase(moduleObject) {
            try {
                const store = db.transaction([storeName], "readwrite").objectStore(storeName);
                const request = store.put(moduleObject, key);
                request.onerror = error => {
                    console.debug(`Failed to cache scandit-sdk WebAssembly code: ${error}`);
                };
                request.onsuccess = () => {
                    console.debug("Successfully cached scandit-sdk WebAssembly code");
                };
            }
            catch (error) {
                if (error.name === "DataCloneError") {
                    console.debug("Failed to cache scandit-sdk WebAssembly code: This browser doesn't support this feature yet");
                }
                else {
                    console.debug(`Failed to cache scandit-sdk WebAssembly code: ${error}`);
                }
            }
        }
        loadDatabase(moduleObject => {
            console.debug("Found cached scandit-sdk WebAssembly code");
            // Note that here instantiate() returns the instance directly, not inside another object
            self.WebAssembly.instantiate(moduleObject, importObject).then((instance) => {
                successCallback(instance);
            });
        }, errMsg => {
            console.debug(errMsg);
            function instantiate() {
                fetch(wasmURI)
                    .then(response => response.arrayBuffer())
                    .then(bytes => {
                    self.WebAssembly.instantiate(bytes, importObject).then((results) => {
                        if (db != null) {
                            storeInDatabase(results.module);
                        }
                        successCallback(results.instance);
                    });
                });
            }
            function instantiateStreaming() {
                self.WebAssembly.instantiateStreaming(fetch(wasmURI), importObject)
                    .then((results) => {
                    if (db != null) {
                        storeInDatabase(results.module);
                    }
                    successCallback(results.instance);
                })
                    .catch((error) => {
                    console.warn(`wasm streaming compile failed: ${error}, falling back to ArrayBuffer instantiation`);
                    instantiate();
                });
            }
            if (typeof self.WebAssembly.instantiateStreaming === "function") {
                instantiateStreaming();
            }
            else {
                instantiate();
            }
        });
    }
    function loadLibrary(deviceId, libraryLocation) {
        const customModule = {
            arguments: [deviceId],
            instantiateWasm: (importObject, successCallback) => {
                const wasmURI = `${libraryLocation}scandit-engine-sdk.wasm?v=3.1.2`;
                const wasmVersion = "3.1.2"
                    .split(".")
                    .map((n, i) => parseInt(n, 10) * Math.pow(10, 6 - i * 3))
                    .reduce((a, b) => a + b);
                instantiateWasmWithCache(wasmURI, wasmVersion, importObject, successCallback);
                return {};
            },
            noInitialRun: true,
            preRun: () => {
                try {
                    FS.mkdir("/scandit_sync_folder");
                }
                catch (error) {
                    if (error.code !== "EEXIST") {
                        throw error;
                    }
                }
                FS.mount(IDBFS, {}, "/scandit_sync_folder");
                FS.syncfs(true, () => {
                    Module.callMain();
                    wasmLoaded = true;
                    postMessage(["status", "ready"]);
                    workOnScanQueue();
                    workOnParseQueue();
                });
            }
        };
        self.Module = customModule;
        if (typeof importScripts === "function") {
            try {
                importScripts(`${libraryLocation}scandit-engine-sdk.min.js?v=3.1.2`);
            }
            catch (error) {
                console.warn(error);
                console.error(`Couldn't retrieve Scandit SDK Engine library at ${libraryLocation}scandit-engine-sdk.min.js, ` +
                    "did you configure the path for it correctly?");
            }
        }
    }
    function createContext() {
        if (contextAvailable || licenseKey == null || !wasmLoaded) {
            return;
        }
        const licenseKeyLength = Module.lengthBytesUTF8(licenseKey) + 1;
        const licenseKeyPointer = Module._malloc(licenseKeyLength);
        Module.stringToUTF8(licenseKey, licenseKeyPointer, licenseKeyLength);
        Module.asm._create_context(licenseKeyPointer, false);
        Module._free(licenseKeyPointer);
        contextAvailable = true;
    }
    function setupSettings(highQualitySingleFrameMode = false) {
        if (settings == null || !contextAvailable || !wasmLoaded) {
            return;
        }
        scannerSettingsReady = false;
        if (licenseKey == null) {
            console.error("No license key found, the library must be set up before the scanning engine can be used");
            return;
        }
        const parsedSettings = JSON.parse(settings);
        const settingsLength = Module.lengthBytesUTF8(settings) + 1;
        const settingsPointer = Module._malloc(settingsLength);
        Module.stringToUTF8(settings, settingsPointer, settingsLength);
        const resultPointer = Module.asm._scanner_settings_new_from_json(settingsPointer, blurryDecodingEnabled ? 1 : 0, parsedSettings.matrixScanEnabled ? 1 : 0, highQualitySingleFrameMode);
        Module._free(settingsPointer);
        const result = Module.UTF8ToString(resultPointer);
        if (result !== "") {
            scannerSettingsReady = true;
            postMessage(["status", "scan-settings-updated"]);
            console.debug(JSON.parse(result));
        }
    }
    function setupImageSettings() {
        if (imageSettings == null || !wasmLoaded) {
            return;
        }
        scannerImageSettingsReady = false;
        // We allocate for a grayscale image only as we will do a conversion here in the worker before passing it
        Module.asm._scanner_image_settings_new(imageSettings.width, imageSettings.height, 1);
        if (imageBufferPointer != null) {
            Module._free(imageBufferPointer);
            imageBufferPointer = undefined;
        }
        imageBufferPointer = Module._malloc(imageSettings.width * imageSettings.height);
        scannerImageSettingsReady = true;
    }
    function scanImage(imageData) {
        Module.HEAPU8.set(imageData, imageBufferPointer);
        return Module.UTF8ToString(Module.asm._scanner_scan(imageBufferPointer));
    }
    function parseString(dataFormat, dataString, options) {
        const dataStringLength = Module.lengthBytesUTF8(dataString) + 1;
        const dataStringPointer = Module._malloc(dataStringLength);
        Module.stringToUTF8(dataString, dataStringPointer, dataStringLength);
        const optionsLength = Module.lengthBytesUTF8(options) + 1;
        const optionsPointer = Module._malloc(optionsLength);
        Module.stringToUTF8(options, optionsPointer, optionsLength);
        const resultPointer = Module.asm._parser_parse_string(dataFormat.valueOf(), dataStringPointer, dataStringLength - 1, optionsPointer);
        Module._free(dataStringPointer);
        Module._free(optionsPointer);
        return Module.UTF8ToString(resultPointer);
    }
    function workOnScanQueue() {
        if ((!scannerSettingsReady || !scannerImageSettingsReady) && scanQueue.length !== 0) {
            createContext();
            setupSettings();
            setupImageSettings();
        }
        if (!scannerSettingsReady || !scannerImageSettingsReady) {
            return;
        }
        let currentScanWorkUnit;
        let resultData;
        while (scanQueue.length !== 0) {
            currentScanWorkUnit = scanQueue.shift();
            if (currentScanWorkUnit.highQualitySingleFrameMode) {
                setupSettings(true);
            }
            // TODO: For now it's not possible to use imported variables as the worker doesn't have access at runtime
            if (imageSettings.format.valueOf() === 1) {
                // RGB_8U
                resultData = scanImage(convertImageDataToGrayscale(currentScanWorkUnit.data, 3));
            }
            else if (imageSettings.format.valueOf() === 2) {
                // RGBA_8U
                resultData = scanImage(convertImageDataToGrayscale(currentScanWorkUnit.data, 4));
            }
            else {
                resultData = scanImage(currentScanWorkUnit.data);
            }
            if (currentScanWorkUnit.highQualitySingleFrameMode) {
                setupSettings(false);
            }
            const result = JSON.parse(resultData);
            if (result.error != null) {
                postMessage([
                    "work-error",
                    {
                        requestId: currentScanWorkUnit.requestId,
                        error: result.error
                    }
                ]);
            }
            else if (result.scanResult != null) {
                postMessage([
                    "work-result",
                    {
                        requestId: currentScanWorkUnit.requestId,
                        result: result
                    }
                ]);
            }
            else {
                console.error("Unrecognized Scandit Engine result:", result);
                postMessage([""], [currentScanWorkUnit.data.buffer]);
            }
        }
    }
    function workOnParseQueue() {
        if (!contextAvailable && parseQueue.length !== 0) {
            createContext();
        }
        if (!contextAvailable || !wasmLoaded) {
            return;
        }
        let currentParseWorkUnit;
        let resultData;
        while (parseQueue.length !== 0) {
            currentParseWorkUnit = parseQueue.shift();
            resultData = parseString(currentParseWorkUnit.dataFormat, currentParseWorkUnit.dataString, currentParseWorkUnit.options);
            const result = JSON.parse(resultData);
            if (result.error != null) {
                postMessage([
                    "parse-string-error",
                    {
                        requestId: currentParseWorkUnit.requestId,
                        error: result.error
                    }
                ]);
            }
            else if (result.result != null) {
                postMessage([
                    "parse-string-result",
                    {
                        requestId: currentParseWorkUnit.requestId,
                        result: result.result
                    }
                ]);
            }
            else {
                console.error("Unrecognized Scandit Parser result:", result);
                postMessage([
                    "parse-string-error",
                    {
                        requestId: currentParseWorkUnit.requestId,
                        error: {
                            errorCode: -1,
                            errorMessage: "Unknown Scandit Parser error"
                        }
                    }
                ]);
            }
        }
    }
    function convertImageDataToGrayscale(imageData, channels) {
        const grayscaleImageData = new Uint8ClampedArray(imageData.length / channels);
        let grayscaleImageDataIndex = imageData.length / channels - 1;
        let imageDataIndex = imageData.length - channels;
        while (imageDataIndex >= 0) {
            grayscaleImageData[grayscaleImageDataIndex--] =
                imageData[imageDataIndex] * 0.299 +
                    imageData[imageDataIndex + 1] * 0.587 +
                    imageData[imageDataIndex + 2] * 0.114;
            imageDataIndex -= channels;
        }
        return grayscaleImageData;
    }
    onmessage = e => {
        // Setting settings triggers license verification and activation: delay until first frame processed
        const data = e.data;
        switch (data.type) {
            case "enable-blurry-decoding":
                blurryDecodingEnabled = true;
                if (scanWorkSubmitted) {
                    setupSettings();
                    workOnScanQueue();
                }
                break;
            case "load-library":
                loadLibrary(data.deviceId, data.libraryLocation);
                self.path = data.path; // Used by the Internal Scandit Engine
                break;
            case "license-key":
                licenseKey = data.licenseKey;
                createContext();
                if (parseWorkSubmitted) {
                    workOnParseQueue();
                }
                break;
            case "settings":
                settings = data.settings;
                if (scanWorkSubmitted) {
                    setupSettings();
                    workOnScanQueue();
                }
                break;
            case "image-settings":
                imageSettings = data.imageSettings;
                if (scanWorkSubmitted) {
                    setupImageSettings();
                    workOnScanQueue();
                }
                break;
            case "work":
                scanWorkSubmitted = true;
                scanQueue.push({
                    requestId: data.requestId,
                    data: data.data,
                    highQualitySingleFrameMode: data.highQualitySingleFrameMode
                });
                workOnScanQueue();
                break;
            case "parse-string":
                parseWorkSubmitted = true;
                parseQueue.push({
                    requestId: data.requestId,
                    dataFormat: data.dataFormat,
                    dataString: data.dataString,
                    options: data.options
                });
                workOnParseQueue();
                break;
            default:
                break;
        }
    };
}
/**
 * @hidden
 */
export const engineSDKWorker = new Blob([`(${engineSDKWorkerFunction.toString()})()`], {
    type: "text/javascript"
});
//# sourceMappingURL=engineSDKWorker.js.map