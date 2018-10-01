"use strict";
/* tslint:disable:no-implicit-dependencies */
/**
 * Parser tests
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const scandit_sdk_1 = require("scandit-sdk");
const sinon = require("sinon");
global.Worker = sinon.stub().returns({
    postMessage: sinon.stub(),
    terminate: sinon.stub()
});
URL.createObjectURL = sinon.stub();
async function prepareBrowserAndLibrary() {
    scandit_sdk_1.BrowserHelper.checkBrowserCompatibility = () => {
        return {
            fullSupport: true,
            scannerSupport: true,
            missingFeatures: []
        };
    };
    await scandit_sdk_1.configure("license_key");
}
ava_1.test("constructor", async (t) => {
    await prepareBrowserAndLibrary();
    const s = new scandit_sdk_1.Scanner();
    const p = new scandit_sdk_1.Parser(s, scandit_sdk_1.Parser.DataFormat.DLID);
    t.is(p.scanner, s);
    t.is(p.dataFormat, scandit_sdk_1.Parser.DataFormat.DLID);
    t.is(p.options, undefined);
});
ava_1.test("setOptions", async (t) => {
    await prepareBrowserAndLibrary();
    const s = new scandit_sdk_1.Scanner();
    const p = new scandit_sdk_1.Parser(s, scandit_sdk_1.Parser.DataFormat.DLID);
    t.is(p.options, undefined);
    p.setOptions({});
    t.deepEqual(p.options, {});
    p.setOptions({
        option1: true
    });
    t.deepEqual(p.options, {
        option1: true
    });
});
ava_1.test("parseString", async (t) => {
    await prepareBrowserAndLibrary();
    const s = new scandit_sdk_1.Scanner();
    const p = new scandit_sdk_1.Parser(s, scandit_sdk_1.Parser.DataFormat.DLID);
    const parseStringSpy = sinon.spy(s, "parseString");
    p.parseString("");
    t.is(parseStringSpy.getCalls().length, 1);
    t.deepEqual(parseStringSpy.getCall(0).args, [scandit_sdk_1.Parser.DataFormat.DLID, "", undefined]);
    p.parseString("abcd");
    t.is(parseStringSpy.getCalls().length, 2);
    t.deepEqual(parseStringSpy.getCall(1).args, [scandit_sdk_1.Parser.DataFormat.DLID, "abcd", undefined]);
    p.setOptions({
        option1: true
    });
    p.parseString("abcd");
    t.is(parseStringSpy.getCalls().length, 3);
    t.deepEqual(parseStringSpy.getCall(2).args, [
        scandit_sdk_1.Parser.DataFormat.DLID,
        "abcd",
        {
            option1: true
        }
    ]);
});
ava_1.test("parseRawData", async (t) => {
    await prepareBrowserAndLibrary();
    const s = new scandit_sdk_1.Scanner();
    const p = new scandit_sdk_1.Parser(s, scandit_sdk_1.Parser.DataFormat.DLID);
    const parseStringSpy = sinon.spy(s, "parseString");
    p.parseRawData(new Uint8Array([]));
    t.is(parseStringSpy.getCalls().length, 1);
    t.deepEqual(parseStringSpy.getCall(0).args, [scandit_sdk_1.Parser.DataFormat.DLID, "", undefined]);
    p.parseRawData(new Uint8Array([97, 98, 99, 100]));
    t.is(parseStringSpy.getCalls().length, 2);
    t.deepEqual(parseStringSpy.getCall(1).args, [scandit_sdk_1.Parser.DataFormat.DLID, "abcd", undefined]);
    p.setOptions({
        option1: true
    });
    p.parseRawData(new Uint8Array([97, 98, 99, 100]));
    t.is(parseStringSpy.getCalls().length, 3);
    t.deepEqual(parseStringSpy.getCall(2).args, [
        scandit_sdk_1.Parser.DataFormat.DLID,
        "abcd",
        {
            option1: true
        }
    ]);
    p.parseRawData(new Uint8Array([255]));
    t.is(parseStringSpy.getCalls().length, 4);
    t.deepEqual(parseStringSpy.getCall(0).args, [scandit_sdk_1.Parser.DataFormat.DLID, "", undefined]);
});
//# sourceMappingURL=parser.spec.js.map