/* tslint:disable:no-implicit-dependencies */
/**
 * BarcodePicker tests
 */
import { test } from "ava";
import { BarcodePicker, configure, engineSDKWorkerFunction, Scanner } from "scandit-sdk";
import { Worker } from "webworker-threads";
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
global.Worker = Worker;
global.URL = {
    createObjectURL: () => {
        return engineSDKWorkerFunction;
    }
};
test("constructor & destroy", async (t) => {
    let error = await t.throws(BarcodePicker.create(document.createElement("div")));
    t.is(error.name, "UnsupportedBrowserError");
    fakeFullCompatibleBrowser();
    error = await t.throws(BarcodePicker.create(document.createElement("div")));
    t.is(error.name, "LibraryNotConfiguredError");
    await configure("license_key");
    error = await t.throws(BarcodePicker.create(0));
    t.is(error.name, "NoOriginElementError");
    let barcodePicker = await BarcodePicker.create(document.createElement("div"), {
        singleImageMode: {
            desktop: { always: true, allowFallback: true },
            mobile: { always: true, allowFallback: true }
        }
    });
    barcodePicker.destroy();
    fakePartialCompatibleBrowser();
    barcodePicker = await BarcodePicker.create(document.createElement("div"), {
        singleImageMode: {
            desktop: { always: false, allowFallback: true },
            mobile: { always: false, allowFallback: true }
        }
    });
    barcodePicker.destroy();
    barcodePicker = await BarcodePicker.create(document.createElement("div"));
    barcodePicker.destroy(false);
    barcodePicker.getScanner().destroy();
    error = await t.throws(BarcodePicker.create(document.createElement("div"), {
        singleImageMode: {
            desktop: { always: false, allowFallback: false },
            mobile: { always: false, allowFallback: false }
        }
    }));
    t.is(error.name, "UnsupportedBrowserError");
    barcodePicker = await BarcodePicker.create(document.createElement("div"), {
        targetScanningFPS: -1
    });
    barcodePicker.destroy();
    barcodePicker = await BarcodePicker.create(document.createElement("div"), {
        scanner: new Scanner()
    });
    barcodePicker.destroy();
    barcodePicker = await BarcodePicker.create(document.createElement("div"), {
        accessCamera: false
    });
    barcodePicker.destroy();
});
//# sourceMappingURL=barcodePicker.spec.js.map