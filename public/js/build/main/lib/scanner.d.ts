import { ImageSettings } from "./imageSettings";
import { Parser } from "./parser";
import { ParserResult } from "./parserResult";
import { ScanResult } from "./scanResult";
import { ScanSettings } from "./scanSettings";
/**
 * A low-level scanner interacting with the external Scandit Engine library.
 * Used to set up scan / image settings and to process single image frames.
 *
 * The loading of the external Scandit Engine library which takes place on creation can take some time,
 * the [[onReady]] method can be used to set up a listener function to be called when the library is loaded
 * and the [[isReady]] method can return the current status. The scanner will be ready to start scanning when
 * the library is fully loaded.
 *
 * In the special case where a single [[Scanner]] instance is shared between multiple active [[BarcodePicker]]
 * instances, the fairness in resource allocation for processing images between the different pickers is not guaranteed.
 */
export declare class Scanner {
    private scanSettings;
    private imageSettings?;
    private engineSDKWorker;
    private eventEmitter;
    private workerParseRequestId;
    private workerScanRequestId;
    private workerScanQueueLength;
    private isReadyToWork;
    /**
     * Creates a Scanner instance.
     *
     * It is required to having configured the library via [[configure]] before this object can be created.
     *
     * Before processing an image the relative settings must also have been set.
     *
     * If the library has not been correctly configured yet a `LibraryNotConfiguredError` error is thrown.
     *
     * If a browser is incompatible a `UnsupportedBrowserError` error is thrown.
     *
     * @param scanSettings <div class="tsd-signature-symbol">Default =&nbsp;new ScanSettings()</div>
     * The configuration object for scanning options.
     * @param imageSettings <div class="tsd-signature-symbol">Default =&nbsp;undefined</div>
     * The configuration object to define the properties of an image to be scanned.
     */
    constructor({ scanSettings, imageSettings }?: {
        scanSettings?: ScanSettings;
        imageSettings?: ImageSettings;
    });
    /**
     * Stop the internal `WebWorker` and destroy the scanner itself; ensuring complete cleanup.
     *
     * This method should be called after you don't plan to use the scanner anymore,
     * before the object is automatically cleaned up by JavaScript.
     * The barcode picker must not be used in any way after this call.
     */
    destroy(): void;
    /**
     * Applies a new set of scan settings to the scanner (replacing old settings).
     *
     * @param scanSettings The scan configuration object to be applied to the scanner.
     * @returns The updated [[Scanner]] object.
     */
    applyScanSettings(scanSettings: ScanSettings): Scanner;
    /**
     * Applies a new set of image settings to the scanner (replacing old settings).
     *
     * @param imageSettings The image configuration object to be applied to the scanner.
     * @returns The updated [[Scanner]] object.
     */
    applyImageSettings(imageSettings: ImageSettings): Scanner;
    /**
     * Process a given image using the previously set scanner and image settings,
     * recognizing codes and retrieving the result as a list of barcodes (if any).
     *
     * Multiple requests done without waiting for previous results will be queued and handled in order.
     *
     * If *highQualitySingleFrameMode* is enabled the image will be processed with really accurate internal settings,
     * resulting in much slower but more precise scanning results. This should be used only for single images not part
     * of a continuous video stream.
     *
     * Depending on the current image settings, given *imageData* and scanning execution, any of the following errors
     * could be the rejected result of the returned promise:
     * - `NoImageSettings`
     * - `ImageSettingsDataMismatch`
     * - `ScanditEngineError`
     *
     * @param imageData The image data given as a byte array, complying with the previously set image settings.
     * @param highQualitySingleFrameMode Whether to process the image as a high quality single frame.
     * @returns A promise resolving to the [[ScanResult]] object.
     */
    processImage(imageData: Uint8ClampedArray, highQualitySingleFrameMode?: boolean): Promise<ScanResult>;
    /**
     * @returns Whether the scanner is currently busy processing an image.
     */
    isBusyProcessing(): boolean;
    /**
     * @returns Whether the scanner has loaded the external Scandit Engine library and is ready to scan.
     */
    isReady(): boolean;
    /**
     * Add the listener function to the listeners array for the "ready" event, fired when the external
     * Scandit Engine library has been loaded and the scanner can thus start to scan barcodes.
     *
     * No checks are made to see if the listener has already been added.
     * Multiple calls passing the same listener will result in the listener being added, and called, multiple times.
     *
     * @param listener The listener function.
     * @returns The updated [[Scanner]] object.
     */
    onReady(listener: () => void): Scanner;
    /**
     * Create a new parser object.
     *
     * @param dataFormat The format of the input data for the parser.
     * @returns The newly created parser.
     */
    createParserForFormat(dataFormat: Parser.DataFormat): Parser;
    /**
     * @hidden
     *
     * Return the current image settings, this is used automatically by the [[BarcodePickerGui]].
     *
     * @returns The current image settings.
     */
    getImageSettings(): ImageSettings | undefined;
    /**
     * @hidden
     *
     * Return the current scan settings, this is used automatically by the [[BarcodePickerGui]].
     *
     * @returns The current scan settings.
     */
    getScanSettings(): ScanSettings;
    /**
     * @hidden
     *
     * Process a given string using the Scandit Parser library,
     * parsing the data in the given format and retrieving the result as a [[ParserResult]] object.
     *
     * Multiple requests done without waiting for previous results will be queued and handled in order.
     *
     * If parsing of the data fails the returned promise is rejected with a `ScanditEngineError` error.
     *
     * @param dataFormat The format of the given data.
     * @param dataString The string containing the data to be parsed.
     * @param options Options for the specific data format parser.
     * @returns A promise resolving to the [[ParserResult]] object.
     */
    parseString(dataFormat: Parser.DataFormat, dataString: string, options?: any): Promise<ParserResult>;
    private applyLicenseKey;
    private engineWorkerOnMessage;
}