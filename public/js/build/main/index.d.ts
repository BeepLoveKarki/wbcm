import "objectFitPolyfill";
import "webrtc-adapter";
import "./styles/styles.scss";
export * from "./lib/barcode";
export * from "./lib/barcodeEncodingRange";
export * from "./lib/barcodePicker";
export * from "./lib/browserCompatibility";
export * from "./lib/browserHelper";
export * from "./lib/camera";
export * from "./lib/cameraAccess";
export * from "./lib/cameraSettings";
export * from "./lib/customError";
export * from "./lib/imageSettings";
export * from "./lib/point";
export * from "./lib/quadrilateral";
export * from "./lib/parser";
export * from "./lib/parserField";
export * from "./lib/parserResult";
export * from "./lib/scanResult";
export * from "./lib/scanner";
export * from "./lib/scanSettings";
export * from "./lib/searchArea";
export * from "./lib/symbologySettings";
export * from "./lib/workers/engineSDKWorker";
/**
 * @hidden
 */
export declare let deviceId: string;
/**
 * @hidden
 */
export declare let userLicenseKey: string;
/**
 * @hidden
 */
export declare let scanditEngineLocation: string;
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
export declare function configure(licenseKey: string, { engineLocation, preloadEngineLibrary, preloadCameras }?: {
    engineLocation?: string;
    preloadEngineLibrary?: boolean;
    preloadCameras?: boolean;
}): Promise<void>;
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
export declare function loadEngineLibrary(): Promise<void>;