"use strict";
/* tslint:disable:no-implicit-dependencies */
/**
 * Index tests
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const ScanditSDK = require("scandit-sdk");
const sinon = require("sinon");
global.Worker = sinon.stub().returns({
    postMessage: sinon.stub(),
    terminate: sinon.stub()
});
URL.createObjectURL = sinon.stub();
// Set inside setupBrowserEnv.js
const baseUrl = "https://example.com/";
const processImageStub = sinon.stub(ScanditSDK.Scanner.prototype, "processImage");
const getCamerasStub = sinon.stub(ScanditSDK.CameraAccess, "getCameras");
ava_1.test.serial("configure", async (t) => {
    processImageStub.resetHistory();
    getCamerasStub.resetHistory();
    let error = await t.throws(ScanditSDK.configure(""));
    t.is(error.name, "UnsupportedBrowserError");
    ScanditSDK.BrowserHelper.checkBrowserCompatibility = () => {
        return {
            fullSupport: true,
            scannerSupport: true,
            missingFeatures: []
        };
    };
    error = await t.throws(ScanditSDK.configure(null));
    t.is(error.name, "NoLicenseKeyError");
    error = await t.throws(ScanditSDK.configure(""));
    t.is(error.name, "NoLicenseKeyError");
    error = await t.throws(ScanditSDK.configure(" "));
    t.is(error.name, "NoLicenseKeyError");
    t.false(processImageStub.called);
    t.false(getCamerasStub.called);
    processImageStub.callsFake(() => {
        return Promise.resolve({
            barcodes: []
        });
    });
    getCamerasStub.callsFake(() => {
        return Promise.resolve([]);
    });
    await t.notThrows(ScanditSDK.configure("license_key"));
    t.is(ScanditSDK.userLicenseKey, "license_key");
    t.is(ScanditSDK.scanditEngineLocation, baseUrl);
    await t.notThrows(ScanditSDK.configure("license_key", { engineLocation: "" }));
    t.is(ScanditSDK.scanditEngineLocation, baseUrl);
    await t.notThrows(ScanditSDK.configure("license_key", { engineLocation: "/" }));
    t.is(ScanditSDK.scanditEngineLocation, baseUrl);
    await t.notThrows(ScanditSDK.configure("license_key", { engineLocation: "test" }));
    t.is(ScanditSDK.scanditEngineLocation, `${baseUrl}test/`);
    await t.notThrows(ScanditSDK.configure("license_key", { engineLocation: "https://another_example.com" }));
    t.is(ScanditSDK.scanditEngineLocation, "https://another_example.com/");
    await t.notThrows(ScanditSDK.configure("license_key", { engineLocation: "https://another_example.com/" }));
    t.is(ScanditSDK.scanditEngineLocation, "https://another_example.com/");
    await t.notThrows(ScanditSDK.configure("license_key", { preloadEngineLibrary: true }));
    t.true(processImageStub.called);
    t.false(getCamerasStub.called);
    processImageStub.resetHistory();
    getCamerasStub.resetHistory();
    await t.notThrows(ScanditSDK.configure("license_key", { preloadCameras: true }));
    t.false(processImageStub.called);
    t.true(getCamerasStub.called);
    processImageStub.resetHistory();
    getCamerasStub.resetHistory();
    await t.notThrows(ScanditSDK.configure("license_key", { preloadCameras: true, preloadEngineLibrary: true }));
    t.true(processImageStub.called);
    t.true(getCamerasStub.called);
    processImageStub.callsFake(() => {
        return Promise.reject(new Error("Test error"));
    });
    error = await t.throws(ScanditSDK.configure("license_key", { preloadEngineLibrary: true }));
    t.is(error.message, "Test error");
    processImageStub.resetBehavior();
    getCamerasStub.callsFake(() => {
        return Promise.reject(new Error("Test error 2"));
    });
    error = await t.throws(ScanditSDK.configure("license_key", { preloadCameras: true }));
    t.is(error.message, "Test error 2");
    getCamerasStub.resetBehavior();
});
ava_1.test.serial("loadEngineLibrary", async (t) => {
    processImageStub.resetHistory();
    processImageStub.callsFake(() => {
        return Promise.resolve({
            barcodes: []
        });
    });
    await t.notThrows(ScanditSDK.loadEngineLibrary());
    t.true(processImageStub.called);
    processImageStub.callsFake(() => {
        return Promise.reject(new Error("Test error"));
    });
    let error = await t.throws(ScanditSDK.loadEngineLibrary());
    t.is(error.message, "Test error");
    ScanditSDK.BrowserHelper.checkBrowserCompatibility = () => {
        return {
            fullSupport: false,
            scannerSupport: false,
            missingFeatures: [ScanditSDK.BrowserCompatibility.Feature.MEDIA_DEVICES]
        };
    };
    error = await t.throws(ScanditSDK.loadEngineLibrary());
    t.is(error.name, "UnsupportedBrowserError");
});
//# sourceMappingURL=index.spec.js.map