"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("objectFitPolyfill");
require("webrtc-adapter");
const browserHelper_1 = require("./lib/browserHelper");
const cameraAccess_1 = require("./lib/cameraAccess");
const customError_1 = require("./lib/customError");
const imageSettings_1 = require("./lib/imageSettings");
const scanner_1 = require("./lib/scanner");
require("./styles/styles.scss");
tslib_1.__exportStar(require("./lib/barcode"), exports);
tslib_1.__exportStar(require("./lib/barcodePicker"), exports);
tslib_1.__exportStar(require("./lib/browserCompatibility"), exports);
tslib_1.__exportStar(require("./lib/browserHelper"), exports);
tslib_1.__exportStar(require("./lib/camera"), exports);
tslib_1.__exportStar(require("./lib/cameraAccess"), exports);
tslib_1.__exportStar(require("./lib/cameraSettings"), exports);
tslib_1.__exportStar(require("./lib/customError"), exports);
tslib_1.__exportStar(require("./lib/imageSettings"), exports);
tslib_1.__exportStar(require("./lib/parser"), exports);
tslib_1.__exportStar(require("./lib/scanner"), exports);
tslib_1.__exportStar(require("./lib/scanSettings"), exports);
tslib_1.__exportStar(require("./lib/symbologySettings"), exports);
tslib_1.__exportStar(require("./lib/workers/engineSDKWorker"), exports);
/**
 * @hidden
 */
exports.deviceId = browserHelper_1.BrowserHelper.getDeviceId();
/**
 * Initialize and configure the Scandit Barcode Scanner SDK library. This function must be called as first thing
 * before using any other function of the library.
 *
 * Depending on parameters, device features and user permissions for camera access, any of the following errors
 * could be the rejected result of the returned promise:
 * - `NoLicenseKeyError`
 * - `UnsupportedBrowserError`
 * - `PermissionDeniedError`
 * - `NotAllowedError`
 * - `NotFoundError`
 * - `AbortError`
 * - `NotReadableError`
 * - `InternalError`
 *
 * If the external Scandit Engine library is not loaded now, it can later be loaded via [[loadEngineLibrary]],
 * or it will be downloaded and prepared automatically when needed by other objects/functions.
 *
 * If the cameras are not accessed now, they can later be loaded via [[CameraAccess.getCameras]],
 * or they will be accessed automatically when needed by other objects/functions.
 *
 * Please note that preloading the Scandit Engine library only downloads the library and puts it in a local cache
 * if available (then loads it and verifies the license key). When the library is then required and used by a
 * [[BarcodePicker]] instance the external Scandit Engine library needs to be parsed and executed again and thus still
 * requires some time to be ready. To make the process faster it's recommended, if possible, to instead prepare
 * in advance library and cameras via a hidden [[BarcodePicker]] instead.
 *
 * @param licenseKey The Scandit license key to be used by the library.
 * @param engineLocation <div class="tsd-signature-symbol">Default =&nbsp;"/"</div>
 * The location of the folder containing the external scandit-engine-sdk.min.js and
 * scandit-engine-sdk.wasm files (external Scandit Engine library).
 * By default they are retrieved from the root of the web application.
 * Can be a full URL to folder or an absolute folder path.
 * @param preloadEngineLibrary <div class="tsd-signature-symbol">Default =&nbsp;false</div>
 * Whether to eagerly download and prepare the external Scandit Engine library with this call (see documentation note).
 * @param preloadCameras <div class="tsd-signature-symbol">Default =&nbsp;false</div>
 * Whether to eagerly request access (if needed) and access available cameras with this call.
 * @returns A promise resolving when the library has loaded and the available cameras are loaded (if selected).
 */
function configure(licenseKey, { engineLocation = "/", preloadEngineLibrary = false, preloadCameras = false } = {}) {
    const browserCompatibility = browserHelper_1.BrowserHelper.checkBrowserCompatibility();
    if (!browserCompatibility.fullSupport && !browserCompatibility.scannerSupport) {
        return Promise.reject(new customError_1.CustomError({
            name: "UnsupportedBrowserError",
            message: "This OS / Browser has one or more missing features preventing it from working correctly",
            data: browserCompatibility
        }));
    }
    if (licenseKey == null || licenseKey.trim() === "") {
        return Promise.reject(new customError_1.CustomError({ name: "NoLicenseKeyError", message: "No license key provided" }));
    }
    exports.userLicenseKey = licenseKey;
    engineLocation += engineLocation.slice(-1) === "/" ? "" : "/";
    if (/^https?:\/\//.test(engineLocation)) {
        exports.scanditEngineLocation = `${engineLocation}`;
    }
    else {
        engineLocation = engineLocation
            .split("/")
            .filter(s => {
            return s.length > 0;
        })
            .join("/");
        if (engineLocation === "") {
            engineLocation = "/";
        }
        else {
            engineLocation = `/${engineLocation}/`;
        }
        exports.scanditEngineLocation = `${location.origin}${engineLocation}`;
    }
    const promises = [];
    if (preloadEngineLibrary) {
        promises.push(loadEngineLibrary());
    }
    if (preloadCameras) {
        promises.push(cameraAccess_1.CameraAccess.getCameras());
    }
    return Promise.all(promises)
        .then(() => {
        return;
    })
        .catch(error => {
        return Promise.reject(error);
    });
}
exports.configure = configure;
/**
 * Download and prepare in memory the external Scandit Engine library.
 * If this method isn't called manually the library will be automatically loaded the first
 * time it's required by another of this library's components.
 *
 * Please note that preloading the Scandit Engine library only downloads the library and puts it in a local cache
 * if available (then loads it and verifies the license key). When the library is then required and used by a
 * [[BarcodePicker]] instance the external Scandit Engine library needs to be parsed and executed again and thus still
 * requires some time to be ready. To make the process faster it's recommended, if possible, to instead prepare
 * in advance library and cameras via a hidden [[BarcodePicker]] instead.
 *
 * Usually this method should not be called and a [[BarcodePicker]] object should be created instead.
 *
 * @returns A promise resolving when the external Scandit Engine library has been loaded and is ready.
 */
function loadEngineLibrary() {
    try {
        const scanner = new scanner_1.Scanner();
        scanner.applyImageSettings({ width: 2, height: 2, format: imageSettings_1.ImageSettings.Format.GRAY_8U });
        return scanner.processImage(new Uint8ClampedArray(4)).then(() => {
            return;
        });
    }
    catch (error) {
        return Promise.reject(error);
    }
}
exports.loadEngineLibrary = loadEngineLibrary;
//# sourceMappingURL=index.js.map