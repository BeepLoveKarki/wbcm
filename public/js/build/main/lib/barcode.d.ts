import { BarcodeEncodingRange } from "./barcodeEncodingRange";
import { Quadrilateral } from "./quadrilateral";
/**
 * A barcode result.
 */
export interface Barcode {
    /**
     * The symbology type.
     */
    readonly symbology: Barcode.Symbology;
    /**
     * The data encoded in the barcode interpreted as a UTF-8 string.
     * If the raw data is not a valid UTF-8 string, this field will be an empty string.
     */
    readonly data: string;
    /**
     * The raw data encoded in the barcode, given as an array of bytes.
     * To interpret this correctly you may have to use the information contained in encodingArray.
     */
    readonly rawData: Uint8Array;
    /**
     * The location of the barcode.
     */
    readonly location: Quadrilateral;
    /**
     * Whether the barcode is part of a composite code.
     */
    readonly compositeFlag: Barcode.CompositeFlag;
    /**
     * Whether the barcode is a GS1 data carrier.
     */
    readonly isGs1DataCarrier: boolean;
    /**
     * The data encoding of the data in the barcode, given as an array of encoding ranges.
     */
    readonly encodingArray: BarcodeEncodingRange[];
}
export declare namespace Barcode {
    /**
     * @hidden
     *
     * Create a [[Barcode]] object from a partial object returned by the external Scandit Engine library.
     * The *rawData* and *data* fields are computed and stored.
     *
     * @param result The barcode result coming from the external Scandit Engine library.
     * @returns The generated [[Barcode]] object.
     */
    function createFromWASMResult(result: any): Barcode;
    /**
     * Barcode symbology type.
     */
    enum Symbology {
        EAN13 = "ean13",
        EAN8 = "ean8",
        UPCA = "upca",
        UPCE = "upce",
        CODE128 = "code128",
        CODE39 = "code39",
        CODE93 = "code93",
        INTERLEAVED_2_OF_5 = "itf",
        QR = "qr",
        DATA_MATRIX = "data-matrix",
        PDF417 = "pdf417",
        MSI_PLESSEY = "msi-plessey",
        GS1_DATABAR = "databar",
        GS1_DATABAR_EXPANDED = "databar-expanded",
        CODABAR = "codabar",
        AZTEC = "aztec",
        TWO_DIGIT_ADD_ON = "two-digit-add-on",
        FIVE_DIGIT_ADD_ON = "five-digit-add-on",
        MAXICODE = "maxicode",
        CODE11 = "code11",
        GS1_DATABAR_LIMITED = "databar-limited",
        CODE25 = "code25",
        MICRO_PDF417 = "micropdf417",
        RM4SCC = "rm4scc",
        KIX = "kix",
        DOTCODE = "dotcode"
    }
    /**
     * Flags to hint that two codes form a composite code.
     */
    enum CompositeFlag {
        /**
         * Code is not part of a composite code.
         */
        NONE = 0,
        /**
         * Code could be part of a composite code. This flag is set by linear (1D) symbologies that have
         * no composite flag support but can be part of a composite code like the EAN/UPC symbology family.
         */
        UNKNOWN = 1,
        /**
         * Code is the linear component of a composite code. This flag can be set by GS1 DataBar or GS1-128 (Code 128).
         */
        LINKED = 2,
        /**
         * Code is a GS1 Composite Code Type A (CC - A).This flag can be set by MicroPDF417 codes.
         */
        GS1_A = 4,
        /**
         * Code is a GS1 Composite Code Type B (CC-B). This flag can be set by MicroPDF417 codes.
         */
        GS1_B = 8,
        /**
         * Code is a GS1 Composite Code Type C (CC-C). This flag can be set by PDF417 codes.
         */
        GS1_C = 16
    }
    namespace Symbology {
        /**
         * Get the humanized name of a symbology.
         *
         * @param symbology The symbology for which to retrieve the name.
         * @returns The humanized name of the symbology.
         */
        function toHumanizedName(symbology: Symbology): string;
        /**
         * Get the JSON key name of a symbology, used for JSON-formatted ScanSettings and Scandit Engine library.
         *
         * @param symbology The symbology for which to retrieve the name.
         * @returns The json key name of the symbology.
         */
        function toJSONName(symbology: Symbology): string;
    }
}