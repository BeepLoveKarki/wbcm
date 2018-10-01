"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cameraManager_1 = require("./cameraManager");
/**
 * @hidden
 *
 * A dummy barcode picker utility class used to (not) handle camera interaction.
 */
// istanbul ignore next
class DummyCameraManager extends cameraManager_1.CameraManager {
    setInteractionOptions(_1, _2, _3, _4) {
        return;
    }
    isCameraSwitcherEnabled() {
        return false;
    }
    setCameraSwitcherEnabled(_1) {
        return;
    }
    isTorchToggleEnabled() {
        return false;
    }
    setTorchToggleEnabled(_1) {
        return;
    }
    isTapToFocusEnabled() {
        return false;
    }
    setTapToFocusEnabled(_1) {
        return;
    }
    isPinchToZoomEnabled() {
        return false;
    }
    setPinchToZoomEnabled(_1) {
        return;
    }
    setSelectedCamera(_1) {
        return;
    }
    setSelectedCameraSettings(_1) {
        return;
    }
    setupCameras() {
        return Promise.resolve();
    }
    stopStream() {
        return;
    }
    applyCameraSettings(_1) {
        return Promise.resolve();
    }
    reinitializeCamera(_1) {
        return Promise.resolve();
    }
    initializeCameraWithSettings(_1, _2) {
        return Promise.resolve();
    }
    setTorchEnabled(_1) {
        return;
    }
    toggleTorch() {
        return;
    }
    setZoom(_1, _2) {
        return;
    }
}
exports.DummyCameraManager = DummyCameraManager;
//# sourceMappingURL=dummyCameraManager.js.map