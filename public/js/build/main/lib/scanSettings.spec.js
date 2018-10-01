"use strict";
/* tslint:disable:no-implicit-dependencies */
/**
 * ScanSettings tests
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const scandit_sdk_1 = require("scandit-sdk");
ava_1.test("constructor", t => {
    let ss = new scandit_sdk_1.ScanSettings();
    t.deepEqual(ss.symbologySettings, new Map());
    t.deepEqual(ss.codeDuplicateFilter, 0);
    t.deepEqual(ss.maxNumberOfCodesPerFrame, 1);
    t.deepEqual(ss.getSearchArea(), { height: 1, width: 1, x: 0, y: 0 });
    ss = new scandit_sdk_1.ScanSettings({ enabledSymbologies: scandit_sdk_1.Barcode.Symbology.QR });
    t.deepEqual(ss.symbologySettings, new Map([[scandit_sdk_1.Barcode.Symbology.QR, new scandit_sdk_1.SymbologySettings({ enabled: true })]]));
    t.deepEqual(ss.codeDuplicateFilter, 0);
    t.deepEqual(ss.maxNumberOfCodesPerFrame, 1);
    t.deepEqual(ss.getSearchArea(), { height: 1, width: 1, x: 0, y: 0 });
    ss = new scandit_sdk_1.ScanSettings({ enabledSymbologies: [scandit_sdk_1.Barcode.Symbology.QR] });
    t.deepEqual(ss.symbologySettings, new Map([[scandit_sdk_1.Barcode.Symbology.QR, new scandit_sdk_1.SymbologySettings({ enabled: true })]]));
    t.deepEqual(ss.codeDuplicateFilter, 0);
    t.deepEqual(ss.maxNumberOfCodesPerFrame, 1);
    t.deepEqual(ss.getSearchArea(), { height: 1, width: 1, x: 0, y: 0 });
    ss = new scandit_sdk_1.ScanSettings({ enabledSymbologies: new Set([scandit_sdk_1.Barcode.Symbology.QR]) });
    t.deepEqual(ss.symbologySettings, new Map([[scandit_sdk_1.Barcode.Symbology.QR, new scandit_sdk_1.SymbologySettings({ enabled: true })]]));
    t.deepEqual(ss.codeDuplicateFilter, 0);
    t.deepEqual(ss.maxNumberOfCodesPerFrame, 1);
    t.deepEqual(ss.getSearchArea(), { height: 1, width: 1, x: 0, y: 0 });
    ss = new scandit_sdk_1.ScanSettings({ enabledSymbologies: scandit_sdk_1.Barcode.Symbology.QR, codeDuplicateFilter: 10 });
    t.deepEqual(ss.symbologySettings, new Map([[scandit_sdk_1.Barcode.Symbology.QR, new scandit_sdk_1.SymbologySettings({ enabled: true })]]));
    t.deepEqual(ss.codeDuplicateFilter, 10);
    t.deepEqual(ss.maxNumberOfCodesPerFrame, 1);
    t.deepEqual(ss.getSearchArea(), { height: 1, width: 1, x: 0, y: 0 });
    ss = new scandit_sdk_1.ScanSettings({ enabledSymbologies: scandit_sdk_1.Barcode.Symbology.QR, maxNumberOfCodesPerFrame: 10 });
    t.deepEqual(ss.symbologySettings, new Map([[scandit_sdk_1.Barcode.Symbology.QR, new scandit_sdk_1.SymbologySettings({ enabled: true })]]));
    t.deepEqual(ss.codeDuplicateFilter, 0);
    t.deepEqual(ss.maxNumberOfCodesPerFrame, 10);
    t.deepEqual(ss.getSearchArea(), { height: 1, width: 1, x: 0, y: 0 });
    ss = new scandit_sdk_1.ScanSettings({
        enabledSymbologies: scandit_sdk_1.Barcode.Symbology.QR,
        codeDuplicateFilter: 10,
        maxNumberOfCodesPerFrame: 10
    });
    t.deepEqual(ss.symbologySettings, new Map([[scandit_sdk_1.Barcode.Symbology.QR, new scandit_sdk_1.SymbologySettings({ enabled: true })]]));
    t.deepEqual(ss.codeDuplicateFilter, 10);
    t.deepEqual(ss.maxNumberOfCodesPerFrame, 10);
    t.deepEqual(ss.getSearchArea(), { height: 1, width: 1, x: 0, y: 0 });
    ss = new scandit_sdk_1.ScanSettings({
        enabledSymbologies: scandit_sdk_1.Barcode.Symbology.QR,
        codeDuplicateFilter: 10,
        maxNumberOfCodesPerFrame: 10,
        searchArea: { x: 0.5, y: 0.5, width: 0.5, height: 0.1 }
    });
    t.deepEqual(ss.symbologySettings, new Map([[scandit_sdk_1.Barcode.Symbology.QR, new scandit_sdk_1.SymbologySettings({ enabled: true })]]));
    t.deepEqual(ss.codeDuplicateFilter, 10);
    t.deepEqual(ss.maxNumberOfCodesPerFrame, 10);
    t.deepEqual(ss.getSearchArea(), { height: 0.1, width: 0.5, x: 0.5, y: 0.5 });
});
ava_1.test("constructor (strings)", t => {
    let ss = new scandit_sdk_1.ScanSettings();
    t.deepEqual(ss.symbologySettings, new Map());
    t.deepEqual(ss.codeDuplicateFilter, 0);
    t.deepEqual(ss.maxNumberOfCodesPerFrame, 1);
    t.deepEqual(ss.getSearchArea(), { height: 1, width: 1, x: 0, y: 0 });
    ss = new scandit_sdk_1.ScanSettings({ enabledSymbologies: "qr" });
    t.deepEqual(ss.symbologySettings, new Map([[scandit_sdk_1.Barcode.Symbology.QR, new scandit_sdk_1.SymbologySettings({ enabled: true })]]));
    t.deepEqual(ss.codeDuplicateFilter, 0);
    t.deepEqual(ss.maxNumberOfCodesPerFrame, 1);
    t.deepEqual(ss.getSearchArea(), { height: 1, width: 1, x: 0, y: 0 });
    ss = new scandit_sdk_1.ScanSettings({ enabledSymbologies: ["qr"] });
    t.deepEqual(ss.symbologySettings, new Map([[scandit_sdk_1.Barcode.Symbology.QR, new scandit_sdk_1.SymbologySettings({ enabled: true })]]));
    t.deepEqual(ss.codeDuplicateFilter, 0);
    t.deepEqual(ss.maxNumberOfCodesPerFrame, 1);
    t.deepEqual(ss.getSearchArea(), { height: 1, width: 1, x: 0, y: 0 });
    ss = new scandit_sdk_1.ScanSettings({ enabledSymbologies: new Set(["qr"]) });
    t.deepEqual(ss.symbologySettings, new Map([[scandit_sdk_1.Barcode.Symbology.QR, new scandit_sdk_1.SymbologySettings({ enabled: true })]]));
    t.deepEqual(ss.codeDuplicateFilter, 0);
    t.deepEqual(ss.maxNumberOfCodesPerFrame, 1);
    t.deepEqual(ss.getSearchArea(), { height: 1, width: 1, x: 0, y: 0 });
    t.throws(() => {
        return new scandit_sdk_1.ScanSettings({ enabledSymbologies: "i_dont_exist" });
    }, TypeError, "i_dont_exist");
    t.throws(() => {
        return new scandit_sdk_1.ScanSettings({ enabledSymbologies: Array.from(["i_dont_exist"]) });
    }, TypeError, "i_dont_exist");
    t.throws(() => {
        return new scandit_sdk_1.ScanSettings({ enabledSymbologies: new Set(["i_dont_exist"]) });
    }, TypeError, "i_dont_exist");
});
ava_1.test("getSymbologySettings", t => {
    let ss = new scandit_sdk_1.ScanSettings();
    t.deepEqual(ss.getSymbologySettings(scandit_sdk_1.Barcode.Symbology.QR), new scandit_sdk_1.SymbologySettings());
    ss = new scandit_sdk_1.ScanSettings({ enabledSymbologies: scandit_sdk_1.Barcode.Symbology.QR });
    t.deepEqual(ss.getSymbologySettings(scandit_sdk_1.Barcode.Symbology.QR), new scandit_sdk_1.SymbologySettings({ enabled: true }));
    ss = new scandit_sdk_1.ScanSettings();
    ss.getSymbologySettings(scandit_sdk_1.Barcode.Symbology.QR).setColorInvertedEnabled(true);
    t.deepEqual(ss.getSymbologySettings(scandit_sdk_1.Barcode.Symbology.QR), new scandit_sdk_1.SymbologySettings({ colorInvertedEnabled: true }));
});
ava_1.test("getSymbologySettings (strings)", t => {
    let ss = new scandit_sdk_1.ScanSettings();
    t.throws(() => {
        ss.getSymbologySettings("i_dont_exist");
    }, TypeError, "i_dont_exist");
    t.deepEqual(ss.getSymbologySettings("qr"), new scandit_sdk_1.SymbologySettings());
    ss = new scandit_sdk_1.ScanSettings({ enabledSymbologies: scandit_sdk_1.Barcode.Symbology.QR });
    t.deepEqual(ss.getSymbologySettings("qr"), new scandit_sdk_1.SymbologySettings({ enabled: true }));
    ss = new scandit_sdk_1.ScanSettings();
    ss.getSymbologySettings(scandit_sdk_1.Barcode.Symbology.QR).setColorInvertedEnabled(true);
    t.deepEqual(ss.getSymbologySettings("qr"), new scandit_sdk_1.SymbologySettings({ colorInvertedEnabled: true }));
});
ava_1.test("isSymbologyEnabled & enableSymbologies & disableSymbologies", t => {
    let ss = new scandit_sdk_1.ScanSettings();
    t.false(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.QR));
    ss = new scandit_sdk_1.ScanSettings({ enabledSymbologies: scandit_sdk_1.Barcode.Symbology.QR });
    t.true(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.QR));
    // Set
    ss = new scandit_sdk_1.ScanSettings();
    ss.enableSymbologies(new Set([scandit_sdk_1.Barcode.Symbology.QR]));
    t.false(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.CODE128));
    t.false(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.EAN13));
    t.true(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.QR));
    ss.enableSymbologies(new Set([scandit_sdk_1.Barcode.Symbology.CODE128, scandit_sdk_1.Barcode.Symbology.EAN13]));
    t.true(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.CODE128));
    t.true(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.EAN13));
    t.true(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.QR));
    ss.disableSymbologies(new Set([scandit_sdk_1.Barcode.Symbology.QR]));
    t.true(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.CODE128));
    t.true(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.EAN13));
    t.false(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.QR));
    ss.disableSymbologies(new Set([scandit_sdk_1.Barcode.Symbology.CODE128, scandit_sdk_1.Barcode.Symbology.EAN13]));
    t.false(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.CODE128));
    t.false(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.EAN13));
    t.false(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.QR));
    // Array
    ss = new scandit_sdk_1.ScanSettings();
    ss.enableSymbologies([scandit_sdk_1.Barcode.Symbology.QR]);
    t.false(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.CODE128));
    t.false(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.EAN13));
    t.true(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.QR));
    ss.enableSymbologies([scandit_sdk_1.Barcode.Symbology.CODE128, scandit_sdk_1.Barcode.Symbology.EAN13]);
    t.true(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.CODE128));
    t.true(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.EAN13));
    t.true(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.QR));
    ss.disableSymbologies([scandit_sdk_1.Barcode.Symbology.QR]);
    t.true(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.CODE128));
    t.true(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.EAN13));
    t.false(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.QR));
    ss.disableSymbologies([scandit_sdk_1.Barcode.Symbology.CODE128, scandit_sdk_1.Barcode.Symbology.EAN13]);
    t.false(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.CODE128));
    t.false(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.EAN13));
    t.false(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.QR));
    // Single
    ss = new scandit_sdk_1.ScanSettings();
    ss.enableSymbologies(scandit_sdk_1.Barcode.Symbology.QR);
    t.false(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.CODE128));
    t.true(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.QR));
    ss.enableSymbologies(scandit_sdk_1.Barcode.Symbology.CODE128);
    t.true(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.CODE128));
    t.true(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.QR));
    ss.disableSymbologies(scandit_sdk_1.Barcode.Symbology.QR);
    t.true(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.CODE128));
    t.false(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.QR));
    ss.disableSymbologies(scandit_sdk_1.Barcode.Symbology.CODE128);
    t.false(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.CODE128));
    t.false(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.QR));
});
ava_1.test("isSymbologyEnabled & enableSymbologies & disableSymbologies (strings)", t => {
    let ss = new scandit_sdk_1.ScanSettings();
    t.false(ss.isSymbologyEnabled("qr"));
    ss = new scandit_sdk_1.ScanSettings({ enabledSymbologies: scandit_sdk_1.Barcode.Symbology.QR });
    t.true(ss.isSymbologyEnabled("qr"));
    ss = new scandit_sdk_1.ScanSettings();
    t.throws(() => {
        ss.enableSymbologies("i_dont_exist");
    }, TypeError, "i_dont_exist");
    t.deepEqual(ss.symbologySettings, new Map());
    t.throws(() => {
        ss.enableSymbologies(Array.from(["i_dont_exist"]));
    }, TypeError, "i_dont_exist");
    t.deepEqual(ss.symbologySettings, new Map());
    t.throws(() => {
        ss.enableSymbologies(new Set(["i_dont_exist"]));
    }, TypeError, "i_dont_exist");
    t.deepEqual(ss.symbologySettings, new Map());
    // Set
    ss = new scandit_sdk_1.ScanSettings();
    ss.enableSymbologies(new Set(["qr"]));
    t.false(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.CODE128));
    t.false(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.EAN13));
    t.true(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.QR));
    ss.enableSymbologies(new Set(["code128", "ean13"]));
    t.true(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.CODE128));
    t.true(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.EAN13));
    t.true(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.QR));
    ss.disableSymbologies(new Set(["qr"]));
    t.true(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.CODE128));
    t.true(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.EAN13));
    t.false(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.QR));
    ss.disableSymbologies(new Set(["code128", "ean13"]));
    t.false(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.CODE128));
    t.false(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.EAN13));
    t.false(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.QR));
    // Array
    ss = new scandit_sdk_1.ScanSettings();
    ss.enableSymbologies(["qr"]);
    t.false(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.CODE128));
    t.false(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.EAN13));
    t.true(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.QR));
    ss.enableSymbologies(["code128", "ean13"]);
    t.true(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.CODE128));
    t.true(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.EAN13));
    t.true(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.QR));
    ss.disableSymbologies(["qr"]);
    t.true(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.CODE128));
    t.true(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.EAN13));
    t.false(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.QR));
    ss.disableSymbologies(["code128", "ean13"]);
    t.false(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.CODE128));
    t.false(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.EAN13));
    t.false(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.QR));
    // Single
    ss = new scandit_sdk_1.ScanSettings();
    ss.enableSymbologies("qr");
    t.false(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.CODE128));
    t.true(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.QR));
    ss.enableSymbologies("code128");
    t.true(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.CODE128));
    t.true(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.QR));
    ss.disableSymbologies("qr");
    t.true(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.CODE128));
    t.false(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.QR));
    ss.disableSymbologies("code128");
    t.false(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.CODE128));
    t.false(ss.isSymbologyEnabled(scandit_sdk_1.Barcode.Symbology.QR));
});
ava_1.test("getCodeDuplicateFilter & setCodeDuplicateFilter", t => {
    const ss = new scandit_sdk_1.ScanSettings();
    t.deepEqual(ss.getCodeDuplicateFilter(), 0);
    ss.setCodeDuplicateFilter(100);
    t.deepEqual(ss.getCodeDuplicateFilter(), 100);
});
ava_1.test("getMaxNumberOfCodesPerFrame & setMaxNumberOfCodesPerFrame", t => {
    const ss = new scandit_sdk_1.ScanSettings();
    t.deepEqual(ss.getMaxNumberOfCodesPerFrame(), 1);
    ss.setMaxNumberOfCodesPerFrame(10);
    t.deepEqual(ss.getMaxNumberOfCodesPerFrame(), 10);
});
ava_1.test("getSearchArea & setSearchArea", t => {
    const ss = new scandit_sdk_1.ScanSettings();
    t.deepEqual(ss.getSearchArea(), { height: 1, width: 1, x: 0, y: 0 });
    ss.setSearchArea({ x: 0.5, y: 0.5, width: 0.5, height: 0.1 });
    t.deepEqual(ss.getSearchArea(), { height: 0.1, width: 0.5, x: 0.5, y: 0.5 });
});
ava_1.test("toJSONString", t => {
    let ss = new scandit_sdk_1.ScanSettings();
    t.deepEqual(ss.toJSONString(), JSON.stringify({
        symbologies: {},
        codeDuplicateFilter: 0,
        maxNumberOfCodesPerFrame: 1,
        searchArea: ss.getSearchArea()
    }));
    ss = new scandit_sdk_1.ScanSettings({ enabledSymbologies: scandit_sdk_1.Barcode.Symbology.QR });
    t.deepEqual(ss.toJSONString(), JSON.stringify({
        symbologies: { [scandit_sdk_1.Barcode.Symbology.QR]: new scandit_sdk_1.SymbologySettings({ enabled: true }) },
        codeDuplicateFilter: 0,
        maxNumberOfCodesPerFrame: 1,
        searchArea: ss.getSearchArea()
    }));
    ss = new scandit_sdk_1.ScanSettings({ enabledSymbologies: [scandit_sdk_1.Barcode.Symbology.QR] });
    t.deepEqual(ss.toJSONString(), JSON.stringify({
        symbologies: { [scandit_sdk_1.Barcode.Symbology.QR]: new scandit_sdk_1.SymbologySettings({ enabled: true }) },
        codeDuplicateFilter: 0,
        maxNumberOfCodesPerFrame: 1,
        searchArea: ss.getSearchArea()
    }));
    ss = new scandit_sdk_1.ScanSettings({ enabledSymbologies: new Set([scandit_sdk_1.Barcode.Symbology.QR]) });
    t.deepEqual(ss.toJSONString(), JSON.stringify({
        symbologies: { [scandit_sdk_1.Barcode.Symbology.QR]: new scandit_sdk_1.SymbologySettings({ enabled: true }) },
        codeDuplicateFilter: 0,
        maxNumberOfCodesPerFrame: 1,
        searchArea: ss.getSearchArea()
    }));
    ss = new scandit_sdk_1.ScanSettings({ enabledSymbologies: scandit_sdk_1.Barcode.Symbology.QR, codeDuplicateFilter: 10 });
    t.deepEqual(ss.toJSONString(), JSON.stringify({
        symbologies: { [scandit_sdk_1.Barcode.Symbology.QR]: new scandit_sdk_1.SymbologySettings({ enabled: true }) },
        codeDuplicateFilter: 10,
        maxNumberOfCodesPerFrame: 1,
        searchArea: ss.getSearchArea()
    }));
    ss = new scandit_sdk_1.ScanSettings({ enabledSymbologies: scandit_sdk_1.Barcode.Symbology.QR, maxNumberOfCodesPerFrame: 10 });
    t.deepEqual(ss.toJSONString(), JSON.stringify({
        symbologies: { [scandit_sdk_1.Barcode.Symbology.QR]: new scandit_sdk_1.SymbologySettings({ enabled: true }) },
        codeDuplicateFilter: 0,
        maxNumberOfCodesPerFrame: 10,
        searchArea: ss.getSearchArea()
    }));
    ss = new scandit_sdk_1.ScanSettings({
        enabledSymbologies: scandit_sdk_1.Barcode.Symbology.QR,
        codeDuplicateFilter: 10,
        maxNumberOfCodesPerFrame: 10
    });
    t.deepEqual(ss.toJSONString(), JSON.stringify({
        symbologies: { [scandit_sdk_1.Barcode.Symbology.QR]: new scandit_sdk_1.SymbologySettings({ enabled: true }) },
        codeDuplicateFilter: 10,
        maxNumberOfCodesPerFrame: 10,
        searchArea: ss.getSearchArea()
    }));
    ss = new scandit_sdk_1.ScanSettings({
        enabledSymbologies: scandit_sdk_1.Barcode.Symbology.QR,
        codeDuplicateFilter: 10,
        maxNumberOfCodesPerFrame: 10,
        searchArea: { x: 0.5, y: 0.5, width: 0.5, height: 0.1 }
    });
    t.deepEqual(ss.toJSONString(), JSON.stringify({
        symbologies: { [scandit_sdk_1.Barcode.Symbology.QR]: new scandit_sdk_1.SymbologySettings({ enabled: true }) },
        codeDuplicateFilter: 10,
        maxNumberOfCodesPerFrame: 10,
        searchArea: ss.getSearchArea(),
        codeLocation1d: {
            area: {
                x: ss.getSearchArea().x,
                y: ss.getSearchArea().y + (ss.getSearchArea().height * 0.75) / 2,
                width: ss.getSearchArea().width,
                height: ss.getSearchArea().height * 0.25
            }
        },
        codeLocation2d: { area: ss.getSearchArea() }
    }));
});
ava_1.test("getBaseSearchArea & setBaseSearchArea", t => {
    const ss = new scandit_sdk_1.ScanSettings({
        enabledSymbologies: scandit_sdk_1.Barcode.Symbology.QR,
        codeDuplicateFilter: 10,
        maxNumberOfCodesPerFrame: 10,
        searchArea: { x: 0.5, y: 0.5, width: 0.5, height: 0.1 }
    });
    t.deepEqual(ss.getBaseSearchArea(), { height: 1, width: 1, x: 0, y: 0 });
    t.deepEqual(ss.toJSONString(), JSON.stringify({
        symbologies: { [scandit_sdk_1.Barcode.Symbology.QR]: new scandit_sdk_1.SymbologySettings({ enabled: true }) },
        codeDuplicateFilter: 10,
        maxNumberOfCodesPerFrame: 10,
        searchArea: ss.getSearchArea(),
        codeLocation1d: {
            area: {
                x: ss.getSearchArea().x,
                y: ss.getSearchArea().y + (ss.getSearchArea().height * 0.75) / 2,
                width: ss.getSearchArea().width,
                height: ss.getSearchArea().height * 0.25
            }
        },
        codeLocation2d: { area: ss.getSearchArea() }
    }));
    ss.setBaseSearchArea({ x: 0.5, y: 0.5, width: 0.5, height: 0.1 });
    const baseSearchArea = ss.getBaseSearchArea();
    const searchArea = ss.getSearchArea();
    t.deepEqual(baseSearchArea, { x: 0.5, y: 0.5, width: 0.5, height: 0.1 });
    const combinedSearchArea = {
        x: baseSearchArea.x + searchArea.x * baseSearchArea.width,
        y: baseSearchArea.y + searchArea.y * baseSearchArea.height,
        width: baseSearchArea.width * searchArea.width,
        height: baseSearchArea.height * searchArea.height
    };
    t.deepEqual(ss.toJSONString(), JSON.stringify({
        symbologies: { [scandit_sdk_1.Barcode.Symbology.QR]: new scandit_sdk_1.SymbologySettings({ enabled: true }) },
        codeDuplicateFilter: 10,
        maxNumberOfCodesPerFrame: 10,
        searchArea: combinedSearchArea,
        codeLocation1d: {
            area: {
                x: combinedSearchArea.x,
                y: combinedSearchArea.y + (combinedSearchArea.height * 0.75) / 2,
                width: combinedSearchArea.width,
                height: combinedSearchArea.height * 0.25
            }
        },
        codeLocation2d: { area: combinedSearchArea }
    }));
});
//# sourceMappingURL=scanSettings.spec.js.map