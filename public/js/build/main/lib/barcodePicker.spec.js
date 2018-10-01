"use strict";
/* tslint:disable:no-implicit-dependencies */
/**
 * BarcodePicker tests
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const scandit_sdk_1 = require("scandit-sdk");
const webworker_threads_1 = require("webworker-threads");
function fakePartialCompatibleBrowser() {
    navigator.mediaDevices = undefined;
    window.Worker = () => {
        return;
    };
    window.WebAssembly = {};
    window.Blob = () => {
        return;
    };
    window.URL = {
        createObjectURL: () => {
            return;
        }
    };
}
function fakeFullCompatibleBrowser() {
    navigator.mediaDevices = {
        getUserMedia: () => {
            return;
        }
    };
    window.Worker = () => {
        return;
    };
    window.WebAssembly = {};
    window.Blob = () => {
        return;
    };
    window.URL = {
        createObjectURL: () => {
            return;
        }
    };
}
global.Worker = webworker_threads_1.Worker;
global.URL = {
    createObjectURL: () => {
        return scandit_sdk_1.engineSDKWorkerFunction;
    }
};
ava_1.test("constructor & destroy", async (t) => {
    let error = await t.throws(scandit_sdk_1.BarcodePicker.create(document.createElement("div")));
    t.is(error.name, "UnsupportedBrowserError");
    fakeFullCompatibleBrowser();
    error = await t.throws(scandit_sdk_1.BarcodePicker.create(document.createElement("div")));
    t.is(error.name, "LibraryNotConfiguredError");
    await scandit_sdk_1.configure("license_key");
    error = await t.throws(scandit_sdk_1.BarcodePicker.create(0));
    t.is(error.name, "NoOriginElementError");
    let barcodePicker = await scandit_sdk_1.BarcodePicker.create(document.createElement("div"), {
        singleImageMode: {
            desktop: { always: true, allowFallback: true },
            mobile: { always: true, allowFallback: true }
        }
    });
    barcodePicker.destroy();
    fakePartialCompatibleBrowser();
    barcodePicker = await scandit_sdk_1.BarcodePicker.create(document.createElement("div"), {
        singleImageMode: {
            desktop: { always: false, allowFallback: true },
            mobile: { always: false, allowFallback: true }
        }
    });
    barcodePicker.destroy();
    barcodePicker = await scandit_sdk_1.BarcodePicker.create(document.createElement("div"));
    barcodePicker.destroy(false);
    barcodePicker.getScanner().destroy();
    error = await t.throws(scandit_sdk_1.BarcodePicker.create(document.createElement("div"), {
        singleImageMode: {
            desktop: { always: false, allowFallback: false },
            mobile: { always: false, allowFallback: false }
        }
    }));
    t.is(error.name, "UnsupportedBrowserError");
    barcodePicker = await scandit_sdk_1.BarcodePicker.create(document.createElement("div"), {
        targetScanningFPS: -1
    });
    barcodePicker.destroy();
    barcodePicker = await scandit_sdk_1.BarcodePicker.create(document.createElement("div"), {
        scanner: new scandit_sdk_1.Scanner()
    });
    barcodePicker.destroy();
    barcodePicker = await scandit_sdk_1.BarcodePicker.create(document.createElement("div"), {
        accessCamera: false
    });
    barcodePicker.destroy();
});
//# sourceMappingURL=barcodePicker.spec.js.map