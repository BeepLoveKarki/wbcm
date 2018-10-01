"use strict";
/* tslint:disable:no-implicit-dependencies */
/**
 * BrowserHelper tests
 */
Object.defineProperty(exports, "__esModule", { value: true });
Object.defineProperty(navigator, "platform", {
    value: "iPhone",
    writable: true
});
const ava_1 = require("ava");
const scandit_sdk_1 = require("scandit-sdk");
ava_1.test("checkBrowserCompatibility", t => {
    window.Blob = null;
    t.deepEqual(scandit_sdk_1.BrowserHelper.checkBrowserCompatibility(), {
        fullSupport: false,
        missingFeatures: ["mediaDevices", "webWorkers", "webAssembly", "blob", "urlObject"],
        scannerSupport: false
    });
    navigator.mediaDevices = {
        getUserMedia: () => {
            return;
        }
    };
    t.deepEqual(scandit_sdk_1.BrowserHelper.checkBrowserCompatibility(), {
        fullSupport: false,
        missingFeatures: ["webWorkers", "webAssembly", "blob", "urlObject"],
        scannerSupport: false
    });
    window.Worker = () => {
        return;
    };
    t.deepEqual(scandit_sdk_1.BrowserHelper.checkBrowserCompatibility(), {
        fullSupport: false,
        missingFeatures: ["webAssembly", "blob", "urlObject"],
        scannerSupport: false
    });
    window.WebAssembly = {};
    t.deepEqual(scandit_sdk_1.BrowserHelper.checkBrowserCompatibility(), {
        fullSupport: false,
        missingFeatures: ["blob", "urlObject"],
        scannerSupport: false
    });
    window.Blob = () => {
        return;
    };
    t.deepEqual(scandit_sdk_1.BrowserHelper.checkBrowserCompatibility(), {
        fullSupport: false,
        missingFeatures: ["urlObject"],
        scannerSupport: false
    });
    window.URL = {
        createObjectURL: () => {
            return;
        }
    };
    t.deepEqual(scandit_sdk_1.BrowserHelper.checkBrowserCompatibility(), {
        fullSupport: true,
        missingFeatures: [],
        scannerSupport: true
    });
    scandit_sdk_1.BrowserHelper.userAgentInfo.setUA("Mozilla/5.0 (iPhone; CPU iPhone OS 11_2_5 like Mac OS X) " +
        "AppleWebKit/604.5.6 (KHTML, like Gecko) Version/11.0 Mobile/15D60 Safari/604.1");
    t.deepEqual(scandit_sdk_1.BrowserHelper.checkBrowserCompatibility(), {
        fullSupport: false,
        missingFeatures: ["webAssemblyErrorFree"],
        scannerSupport: false
    });
    scandit_sdk_1.BrowserHelper.userAgentInfo.setUA("Mozilla/5.0 (iPhone; CPU iPhone OS 11_3 like Mac OS X) " +
        "AppleWebKit/605.1.15 (KHTML, like Gecko) Version / 11.0 Mobile / 15E148 Safari / 604.1");
    t.deepEqual(scandit_sdk_1.BrowserHelper.checkBrowserCompatibility(), {
        fullSupport: true,
        missingFeatures: [],
        scannerSupport: true
    });
    navigator.mediaDevices = undefined;
    t.deepEqual(scandit_sdk_1.BrowserHelper.checkBrowserCompatibility(), {
        fullSupport: false,
        missingFeatures: ["mediaDevices"],
        scannerSupport: true
    });
});
ava_1.test("getDeviceId", t => {
    const currentDeviceId = scandit_sdk_1.BrowserHelper.getDeviceId();
    t.regex(currentDeviceId, /[0-9a-f]{40}/);
    t.deepEqual(scandit_sdk_1.BrowserHelper.getDeviceId(), currentDeviceId);
});
//# sourceMappingURL=browserHelper.spec.js.map