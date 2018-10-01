"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const browserHelper_1 = require("./browserHelper");
const camera_1 = require("./camera");
const cameraAccess_1 = require("./cameraAccess");
const cameraManager_1 = require("./cameraManager");
const cameraSettings_1 = require("./cameraSettings");
const customError_1 = require("./customError");
/**
 * @hidden
 *
 * A barcode picker utility class used to handle camera interaction.
 */
class BarcodePickerCameraManager extends cameraManager_1.CameraManager {
    constructor(triggerFatalError, barcodePickerGui) {
        super();
        this.postStreamInitializationListener = this.postStreamInitialization.bind(this);
        this.videoTrackUnmuteListener = this.videoTrackUnmuteRecovery.bind(this);
        this.triggerManualFocusListener = this.triggerManualFocus.bind(this);
        this.triggerZoomStartListener = this.triggerZoomStart.bind(this);
        this.triggerZoomMoveListener = this.triggerZoomMove.bind(this);
        this.triggerFatalError = triggerFatalError;
        this.barcodePickerGui = barcodePickerGui;
    }
    setInteractionOptions(cameraSwitcherEnabled, torchToggleEnabled, tapToFocusEnabled, pinchToZoomEnabled) {
        this.cameraSwitcherEnabled = cameraSwitcherEnabled;
        this.torchToggleEnabled = torchToggleEnabled;
        this.tapToFocusEnabled = tapToFocusEnabled;
        this.pinchToZoomEnabled = pinchToZoomEnabled;
    }
    isCameraSwitcherEnabled() {
        return this.cameraSwitcherEnabled;
    }
    setCameraSwitcherEnabled(enabled) {
        this.cameraSwitcherEnabled = enabled;
        if (this.cameraSwitcherEnabled) {
            cameraAccess_1.CameraAccess.getCameras().then(cameras => {
                if (cameras.length > 1) {
                    this.barcodePickerGui.setCameraSwitcherVisible(true);
                }
            });
        }
        else {
            this.barcodePickerGui.setCameraSwitcherVisible(false);
        }
    }
    isTorchToggleEnabled() {
        return this.torchToggleEnabled;
    }
    setTorchToggleEnabled(enabled) {
        this.torchToggleEnabled = enabled;
        if (this.torchToggleEnabled) {
            if (this.mediaStream != null && this.mediaTrackCapabilities != null && this.mediaTrackCapabilities.torch) {
                this.barcodePickerGui.setTorchTogglerVisible(true);
            }
        }
        else {
            this.barcodePickerGui.setTorchTogglerVisible(false);
        }
    }
    isTapToFocusEnabled() {
        return this.tapToFocusEnabled;
    }
    setTapToFocusEnabled(enabled) {
        this.tapToFocusEnabled = enabled;
        if (this.mediaStream != null) {
            if (this.tapToFocusEnabled) {
                this.enableTapToFocusListeners();
            }
            else {
                this.disableTapToFocusListeners();
            }
        }
    }
    isPinchToZoomEnabled() {
        return this.pinchToZoomEnabled;
    }
    setPinchToZoomEnabled(enabled) {
        this.pinchToZoomEnabled = enabled;
        if (this.mediaStream != null) {
            if (this.pinchToZoomEnabled) {
                this.enablePinchToZoomListeners();
            }
            else {
                this.disablePinchToZoomListeners();
            }
        }
    }
    setSelectedCamera(camera) {
        this.selectedCamera = camera;
    }
    setSelectedCameraSettings(cameraSettings) {
        this.selectedCameraSettings = cameraSettings;
    }
    setupCameras() {
        return cameraAccess_1.CameraAccess.getCameras().then(cameras => {
            if (this.cameraSwitcherEnabled && cameras.length > 1) {
                this.barcodePickerGui.setCameraSwitcherVisible(true);
            }
            if (this.selectedCamera == null) {
                let autoselectedCamera = cameras.find(currentCamera => {
                    return currentCamera.cameraType === camera_1.Camera.Type.BACK;
                });
                if (autoselectedCamera === undefined) {
                    autoselectedCamera = cameras[0];
                }
                if (autoselectedCamera === undefined) {
                    return Promise.reject(new customError_1.CustomError({ name: "NoCameraAvailableError", message: "No camera available" }));
                }
                return this.initializeCameraWithSettings(autoselectedCamera, this.selectedCameraSettings);
            }
            else {
                return this.initializeCameraWithSettings(this.selectedCamera, this.selectedCameraSettings);
            }
        });
    }
    stopStream() {
        if (this.activeCamera != null) {
            this.activeCamera.currentResolution = undefined;
        }
        this.activeCamera = undefined;
        if (this.mediaStream != null) {
            window.clearTimeout(this.cameraAccessTimeout);
            window.clearInterval(this.cameraMetadataCheckInterval);
            window.clearTimeout(this.getCapabilitiesTimeout);
            window.clearTimeout(this.manualFocusWaitTimeout);
            window.clearTimeout(this.manualToAutofocusResumeTimeout);
            window.clearInterval(this.autofocusInterval);
            this.mediaStream.getVideoTracks().forEach(track => {
                track.stop();
            });
            this.mediaStream = undefined;
            this.mediaTrackCapabilities = undefined;
        }
    }
    applyCameraSettings(cameraSettings) {
        this.selectedCameraSettings = cameraSettings;
        if (this.activeCamera == null) {
            return Promise.reject(new customError_1.CustomError({ name: "NoCameraAvailableError", message: "No camera available" }));
        }
        return this.initializeCameraWithSettings(this.activeCamera, cameraSettings);
    }
    reinitializeCamera(camera) {
        if (this.activeCamera == null && camera == null) {
            return Promise.reject(new customError_1.CustomError({ name: "NoCameraAvailableError", message: "No camera available" }));
        }
        return this.initializeCameraWithSettings(camera == null ? this.activeCamera : camera, this.activeCameraSettings).catch(this.triggerFatalError);
    }
    initializeCameraWithSettings(camera, cameraSettings) {
        this.selectedCamera = camera;
        this.selectedCameraSettings = this.activeCameraSettings = cameraSettings;
        if (cameraSettings != null && cameraSettings.resolutionPreference === cameraSettings_1.CameraSettings.ResolutionPreference.FULL_HD) {
            return this.initializeCameraAndCheckUpdatedSettings(camera);
        }
        else {
            return this.initializeCameraAndCheckUpdatedSettings(camera, 3);
        }
    }
    setTorchEnabled(enabled) {
        if (this.mediaStream != null && this.mediaTrackCapabilities != null && this.mediaTrackCapabilities.torch) {
            this.torchEnabled = enabled;
            const videoTracks = this.mediaStream.getVideoTracks();
            if (videoTracks.length !== 0 && typeof videoTracks[0].applyConstraints === "function") {
                videoTracks[0].applyConstraints({ advanced: [{ torch: enabled }] });
            }
        }
    }
    toggleTorch() {
        this.torchEnabled = !this.torchEnabled;
        this.setTorchEnabled(this.torchEnabled);
    }
    setZoom(zoomPercentage, currentZoom) {
        if (this.mediaStream != null && this.mediaTrackCapabilities != null && this.mediaTrackCapabilities.zoom) {
            const videoTracks = this.mediaStream.getVideoTracks();
            if (videoTracks.length !== 0 && typeof videoTracks[0].applyConstraints === "function") {
                const zoomRange = this.mediaTrackCapabilities.zoom.max - this.mediaTrackCapabilities.zoom.min;
                if (currentZoom == null) {
                    currentZoom = this.mediaTrackCapabilities.zoom.min;
                }
                const targetZoom = Math.max(this.mediaTrackCapabilities.zoom.min, Math.min(currentZoom + zoomRange * zoomPercentage, this.mediaTrackCapabilities.zoom.max));
                videoTracks[0].applyConstraints({ advanced: [{ zoom: targetZoom }] });
            }
        }
    }
    postStreamInitialization() {
        window.clearTimeout(this.getCapabilitiesTimeout);
        this.getCapabilitiesTimeout = window.setTimeout(() => {
            this.storeStreamCapabilities();
            this.setupAutofocus();
            if (this.torchToggleEnabled &&
                this.mediaStream != null &&
                this.mediaTrackCapabilities != null &&
                this.mediaTrackCapabilities.torch) {
                this.barcodePickerGui.setTorchTogglerVisible(true);
            }
        }, BarcodePickerCameraManager.getCapabilitiesTimeoutMs);
    }
    videoTrackUnmuteRecovery() {
        this.reinitializeCamera();
    }
    triggerManualFocus(event) {
        if (event != null) {
            event.preventDefault();
            if (event.type === "touchend" && event.touches.length !== 0) {
                return;
            }
            // Check if we were using pinch-to-zoom
            if (this.pinchToZoomDistance != null) {
                this.pinchToZoomDistance = undefined;
                return;
            }
        }
        window.clearTimeout(this.manualFocusWaitTimeout);
        window.clearTimeout(this.manualToAutofocusResumeTimeout);
        if (this.mediaStream != null && this.mediaTrackCapabilities != null) {
            const focusModeCapability = this.mediaTrackCapabilities.focusMode;
            if (focusModeCapability instanceof Array && focusModeCapability.indexOf("single-shot") !== -1) {
                if (focusModeCapability.indexOf("continuous") !== -1 && focusModeCapability.indexOf("manual") !== -1) {
                    this.triggerFocusMode("continuous")
                        .then(() => {
                        this.manualFocusWaitTimeout = window.setTimeout(() => {
                            this.triggerFocusMode("manual");
                        }, BarcodePickerCameraManager.manualFocusWaitTimeoutMs);
                    })
                        .catch(() => {
                        // Ignored
                    });
                    this.manualToAutofocusResumeTimeout = window.setTimeout(() => {
                        this.triggerFocusMode("continuous");
                    }, BarcodePickerCameraManager.manualToAutofocusResumeTimeoutMs);
                }
                else if (focusModeCapability.indexOf("continuous") === -1) {
                    window.clearInterval(this.autofocusInterval);
                    this.triggerFocusMode("single-shot").catch(() => {
                        // Ignored
                    });
                    this.manualToAutofocusResumeTimeout = window.setTimeout(() => {
                        this.autofocusInterval = window.setInterval(this.triggerAutoFocus.bind(this), BarcodePickerCameraManager.autofocusIntervalMs);
                    }, BarcodePickerCameraManager.manualToAutofocusResumeTimeoutMs);
                }
            }
        }
    }
    triggerZoomStart(event) {
        if (event == null || event.touches.length !== 2) {
            return;
        }
        event.preventDefault();
        this.pinchToZoomDistance = Math.hypot((event.touches[1].screenX - event.touches[0].screenX) / screen.width, (event.touches[1].screenY - event.touches[0].screenY) / screen.height);
        if (this.mediaStream != null && this.mediaTrackCapabilities != null && this.mediaTrackCapabilities.zoom) {
            const videoTracks = this.mediaStream.getVideoTracks();
            if (videoTracks.length !== 0 && typeof videoTracks[0].getConstraints === "function") {
                this.pinchToZoomInitialZoom = this.mediaTrackCapabilities.zoom.min;
                const currentConstraints = videoTracks[0].getConstraints();
                if (currentConstraints.advanced != null) {
                    const currentZoomConstraint = currentConstraints.advanced.find(constraint => {
                        return "zoom" in constraint;
                    });
                    if (currentZoomConstraint != null) {
                        this.pinchToZoomInitialZoom = currentZoomConstraint.zoom;
                    }
                }
            }
        }
    }
    triggerZoomMove(event) {
        if (this.pinchToZoomDistance == null || event == null || event.touches.length !== 2) {
            return;
        }
        event.preventDefault();
        this.setZoom((Math.hypot((event.touches[1].screenX - event.touches[0].screenX) / screen.width, (event.touches[1].screenY - event.touches[0].screenY) / screen.height) -
            this.pinchToZoomDistance) *
            2, this.pinchToZoomInitialZoom);
    }
    storeStreamCapabilities() {
        if (this.mediaStream != null) {
            const videoTracks = this.mediaStream.getVideoTracks();
            if (videoTracks.length !== 0 && typeof videoTracks[0].getCapabilities === "function") {
                this.mediaTrackCapabilities = videoTracks[0].getCapabilities();
            }
        }
    }
    setupAutofocus() {
        window.clearTimeout(this.manualFocusWaitTimeout);
        window.clearTimeout(this.manualToAutofocusResumeTimeout);
        if (this.mediaStream != null && this.mediaTrackCapabilities != null) {
            const focusModeCapability = this.mediaTrackCapabilities.focusMode;
            if (focusModeCapability instanceof Array &&
                focusModeCapability.indexOf("continuous") === -1 &&
                focusModeCapability.indexOf("single-shot") !== -1) {
                window.clearInterval(this.autofocusInterval);
                this.autofocusInterval = window.setInterval(this.triggerAutoFocus.bind(this), BarcodePickerCameraManager.autofocusIntervalMs);
            }
        }
    }
    triggerAutoFocus() {
        this.triggerFocusMode("single-shot").catch(() => {
            // Ignored
        });
    }
    triggerFocusMode(focusMode) {
        if (this.mediaStream != null) {
            const videoTracks = this.mediaStream.getVideoTracks();
            if (videoTracks.length !== 0 && typeof videoTracks[0].applyConstraints === "function") {
                return videoTracks[0].applyConstraints({ advanced: [{ focusMode }] });
            }
        }
        return Promise.reject(undefined);
    }
    enableTapToFocusListeners() {
        ["touchend", "mousedown"].forEach(eventName => {
            this.barcodePickerGui.videoElement.addEventListener(eventName, this.triggerManualFocusListener);
        });
    }
    enablePinchToZoomListeners() {
        this.barcodePickerGui.videoElement.addEventListener("touchstart", this.triggerZoomStartListener);
        this.barcodePickerGui.videoElement.addEventListener("touchmove", this.triggerZoomMoveListener);
    }
    disableTapToFocusListeners() {
        ["touchend", "mousedown"].forEach(eventName => {
            this.barcodePickerGui.videoElement.removeEventListener(eventName, this.triggerManualFocusListener);
        });
    }
    disablePinchToZoomListeners() {
        this.barcodePickerGui.videoElement.removeEventListener("touchstart", this.triggerZoomStartListener);
        this.barcodePickerGui.videoElement.removeEventListener("touchmove", this.triggerZoomMoveListener);
    }
    initializeCameraAndCheckUpdatedSettings(camera, resolutionFallbackLevel) {
        return this.initializeCamera(camera, resolutionFallbackLevel)
            .then(() => {
            // Check if due to asynchronous behaviour camera settings were changed while camera was initialized
            if (this.selectedCameraSettings !== this.activeCameraSettings &&
                (this.selectedCameraSettings == null ||
                    this.activeCameraSettings == null ||
                    Object.keys(this.selectedCameraSettings).some(cameraSettingsProperty => {
                        return (this.selectedCameraSettings[cameraSettingsProperty] !==
                            this.activeCameraSettings[cameraSettingsProperty]);
                    }))) {
                this.activeCameraSettings = this.selectedCameraSettings;
                return this.initializeCameraAndCheckUpdatedSettings(camera, resolutionFallbackLevel);
            }
            return Promise.resolve();
        })
            .catch(error => {
            return Promise.reject(error);
        });
    }
    retryInitializeCameraIfNeeded(camera, resolutionFallbackLevel, resolve, reject, error) {
        if (resolutionFallbackLevel < 6) {
            return this.initializeCamera(camera, resolutionFallbackLevel + 1)
                .then(resolve)
                .catch(reject);
        }
        else {
            return reject(error);
        }
    }
    initializeCamera(camera, resolutionFallbackLevel = 0) {
        if (camera == null) {
            return Promise.reject(new customError_1.CustomError({ name: "NoCameraAvailableError", message: "No camera available" }));
        }
        this.stopStream();
        this.torchEnabled = false;
        this.barcodePickerGui.setTorchTogglerVisible(false);
        return new Promise((resolve, reject) => {
            cameraAccess_1.CameraAccess.accessCameraStream(resolutionFallbackLevel, camera)
                .then(stream => {
                // Detect weird browser behaviour that on unsupported resolution returns a 2x2 video instead
                if (typeof stream.getTracks()[0].getSettings === "function") {
                    const mediaTrackSettings = stream.getTracks()[0].getSettings();
                    if (mediaTrackSettings.width != null &&
                        mediaTrackSettings.height != null &&
                        (mediaTrackSettings.width === 2 || mediaTrackSettings.height === 2)) {
                        if (resolutionFallbackLevel === 6) {
                            return reject(new customError_1.CustomError({ name: "NotReadableError", message: "Could not initialize camera correctly" }));
                        }
                        else {
                            return this.initializeCamera(camera, resolutionFallbackLevel + 1)
                                .then(resolve)
                                .catch(reject);
                        }
                    }
                }
                this.mediaStream = stream;
                this.mediaStream.getVideoTracks().forEach(track => {
                    // Reinitialize camera on weird pause/resumption coming from the OS
                    // This will add the listener only once in the case of multiple calls, identical listeners are ignored
                    track.addEventListener("unmute", this.videoTrackUnmuteListener);
                });
                // This will add the listener only once in the case of multiple calls, identical listeners are ignored
                this.barcodePickerGui.videoElement.addEventListener("loadedmetadata", this.postStreamInitializationListener);
                if (this.tapToFocusEnabled) {
                    this.enableTapToFocusListeners();
                }
                if (this.pinchToZoomEnabled) {
                    this.enablePinchToZoomListeners();
                }
                this.resolveInitializeCamera(camera, resolve, reject);
                this.barcodePickerGui.videoElement.srcObject = stream;
                this.barcodePickerGui.videoElement.load();
                const playPromise = this.barcodePickerGui.videoElement.play();
                if (playPromise != null) {
                    playPromise.catch(() => {
                        // Can sometimes cause an incorrect rejection (all is good, ignore).
                    });
                }
            })
                .catch(error => {
                if (error.name === "SourceUnavailableError") {
                    error.name = "NotReadableError";
                }
                if (error.message === "Invalid constraint" ||
                    (error.name === "OverconstrainedError" && error.constraint === "deviceId")) {
                    // Camera might have changed deviceId: check for new cameras with same label and type but different deviceId
                    return cameraAccess_1.CameraAccess.getCameras().then(cameras => {
                        const newCamera = cameras.find(currentCamera => {
                            return (currentCamera.label === camera.label &&
                                currentCamera.cameraType === camera.cameraType &&
                                currentCamera.deviceId !== camera.deviceId);
                        });
                        if (newCamera == null) {
                            return this.retryInitializeCameraIfNeeded(camera, resolutionFallbackLevel, resolve, reject, error);
                        }
                        else {
                            return this.initializeCamera(newCamera, resolutionFallbackLevel)
                                .then(resolve)
                                .catch(reject);
                        }
                    });
                }
                if (error.name === "PermissionDeniedError" ||
                    error.name === "PermissionDismissedError" ||
                    error.name === "NotAllowedError" ||
                    error.name === "NotFoundError" ||
                    error.name === "AbortError" ||
                    error.name === "NotReadableError") {
                    // Camera is not accessible at all
                    return reject(error);
                }
                return this.retryInitializeCameraIfNeeded(camera, resolutionFallbackLevel, resolve, reject, error);
            });
        });
    }
    resolveInitializeCamera(camera, resolve, reject) {
        const cameraNotReadableError = new customError_1.CustomError({
            name: "NotReadableError",
            message: "Could not initialize camera correctly"
        });
        window.clearTimeout(this.cameraAccessTimeout);
        this.cameraAccessTimeout = window.setTimeout(() => {
            this.stopStream();
            reject(cameraNotReadableError);
        }, BarcodePickerCameraManager.cameraAccessTimeoutMs);
        if (browserHelper_1.BrowserHelper.userAgentInfo.getOS().name === "iOS") {
            // iOS camera access should always work but can fail to call "later" video callbacks, so we check loadstart
            this.barcodePickerGui.videoElement.onloadstart = () => {
                this.barcodePickerGui.videoElement.onloadstart = null;
                window.clearTimeout(this.cameraAccessTimeout);
                this.activeCamera = camera;
                this.barcodePickerGui.videoElement.dispatchEvent(new Event("canplay"));
                resolve();
            };
        }
        else {
            this.barcodePickerGui.videoElement.onloadeddata = () => {
                this.barcodePickerGui.videoElement.onloadeddata = null;
                window.clearTimeout(this.cameraAccessTimeout);
                // Detect weird browser behaviour that on unsupported resolution returns a 2x2 video instead
                // Also detect failed camera access with no error but also no video stream provided
                if (this.barcodePickerGui.videoElement.videoWidth > 2 &&
                    this.barcodePickerGui.videoElement.videoHeight > 2 &&
                    this.barcodePickerGui.videoElement.currentTime > 0) {
                    this.activeCamera = camera;
                    this.barcodePickerGui.videoElement.dispatchEvent(new Event("canplay"));
                    return resolve();
                }
                const cameraMetadataCheckStartTime = performance.now();
                window.clearInterval(this.cameraMetadataCheckInterval);
                this.cameraMetadataCheckInterval = window.setInterval(() => {
                    if (this.barcodePickerGui.videoElement.videoWidth === 2 ||
                        this.barcodePickerGui.videoElement.videoHeight === 2 ||
                        this.barcodePickerGui.videoElement.currentTime === 0) {
                        if (performance.now() - cameraMetadataCheckStartTime >
                            BarcodePickerCameraManager.cameraMetadataCheckTimeoutMs) {
                            window.clearInterval(this.cameraMetadataCheckInterval);
                            this.stopStream();
                            return reject(cameraNotReadableError);
                        }
                        return;
                    }
                    window.clearInterval(this.cameraMetadataCheckInterval);
                    this.activeCamera = camera;
                    this.barcodePickerGui.videoElement.dispatchEvent(new Event("canplay"));
                    return resolve();
                }, BarcodePickerCameraManager.cameraMetadataCheckIntervalMs);
            };
        }
    }
}
BarcodePickerCameraManager.cameraAccessTimeoutMs = 4000;
BarcodePickerCameraManager.cameraMetadataCheckTimeoutMs = 4000;
BarcodePickerCameraManager.cameraMetadataCheckIntervalMs = 50;
BarcodePickerCameraManager.getCapabilitiesTimeoutMs = 500;
BarcodePickerCameraManager.autofocusIntervalMs = 1500;
BarcodePickerCameraManager.manualToAutofocusResumeTimeoutMs = 5000;
BarcodePickerCameraManager.manualFocusWaitTimeoutMs = 400;
exports.BarcodePickerCameraManager = BarcodePickerCameraManager;
//# sourceMappingURL=barcodePickerCameraManager.js.map