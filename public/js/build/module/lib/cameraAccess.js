import { BrowserCompatibility } from "./browserCompatibility";
import { BrowserHelper } from "./browserHelper";
import { Camera } from "./camera";
import { CustomError } from "./customError";
/**
 * A helper object to interact with cameras.
 */
export var CameraAccess;
(function (CameraAccess) {
    /**
     * @hidden
     *
     * Handle localized camera labels. Supported languages:
     * English, German, French, Spanish (spain), Portuguese (brasil), Portuguese (portugal), Italian,
     * Chinese (simplified), Chinese (traditional), Japanese, Russian, Turkish, Dutch, Arabic, Thai, Swedish,
     * Danish, Vietnamese, Norwegian, Polish, Finnish, Indonesian, Hebrew, Greek, Romanian, Hungarian, Czech,
     * Catalan, Slovak, Ukraininan, Croatian, Malay, Hindi.
     */
    const backCameraKeywords = [
        "rear",
        "back",
        "rück",
        "arrière",
        "trasera",
        "trás",
        "traseira",
        "posteriore",
        "后面",
        "後面",
        "背面",
        "后置",
        "後置",
        "背置",
        "задней",
        "الخلفية",
        "후",
        "arka",
        "achterzijde",
        "หลัง",
        "baksidan",
        "bagside",
        "sau",
        "bak",
        "tylny",
        "takakamera",
        "belakang",
        "אחורית",
        "πίσω",
        "spate",
        "hátsó",
        "zadní",
        "darrere",
        "zadná",
        "задня",
        "stražnja",
        "belakang",
        "बैक"
    ];
    const cameraObjects = new Map();
    /**
     * Get a list of cameras (if any) available on the device, a camera access permission is requested to the user
     * the first time this method is called if needed.
     *
     * Depending on device features and user permissions for camera access, any of the following errors
     * could be the rejected result of the returned promise:
     * - `UnsupportedBrowserError`
     * - `PermissionDeniedError`
     * - `NotAllowedError`
     * - `NotFoundError`
     * - `AbortError`
     * - `NotReadableError`
     * - `InternalError`
     *
     * @returns A promise resolving to the array of available [[Camera]] objects (could be empty).
     */
    function getCameras() {
        return new Promise((resolve, reject) => {
            const browserCompatibility = BrowserHelper.checkBrowserCompatibility();
            if (!browserCompatibility.fullSupport) {
                return reject(new CustomError({
                    name: "UnsupportedBrowserError",
                    message: "This OS / Browser has one or more missing features preventing it from working correctly",
                    data: browserCompatibility
                }));
            }
            let accessPermissionPromise = Promise.resolve();
            if (CameraAccess.mediaStream == null) {
                accessPermissionPromise = navigator.mediaDevices.getUserMedia({
                    video: true,
                    audio: false
                });
            }
            accessPermissionPromise
                .then(stream => {
                if (stream != null) {
                    CameraAccess.mediaStream = stream;
                }
                return enumerateDevices()
                    .then(devices => {
                    const cameras = devices
                        .filter(device => {
                        return device.kind === "videoinput";
                    })
                        .map(videoDevice => {
                        if (cameraObjects.has(videoDevice.deviceId)) {
                            return cameraObjects.get(videoDevice.deviceId);
                        }
                        const label = videoDevice.label != null ? videoDevice.label : "";
                        const lowercaseLabel = label.toLowerCase();
                        const camera = {
                            deviceId: videoDevice.deviceId,
                            label: label,
                            cameraType: backCameraKeywords.some(keyword => {
                                return lowercaseLabel.indexOf(keyword) !== -1;
                            })
                                ? Camera.Type.BACK
                                : Camera.Type.FRONT
                        };
                        if (label !== "") {
                            cameraObjects.set(videoDevice.deviceId, camera);
                        }
                        return camera;
                    });
                    if (cameras.length > 1 &&
                        !cameras.some(camera => {
                            return camera.cameraType === Camera.Type.BACK;
                        })) {
                        const camera = cameras.slice(-1)[0];
                        cameras[cameras.length - 1] = {
                            deviceId: camera.deviceId,
                            label: camera.label,
                            cameraType: Camera.Type.BACK
                        };
                    }
                    CameraAccess.mediaStream.getVideoTracks().forEach(track => {
                        track.stop();
                    });
                    console.debug("Camera list: ", ...cameras);
                    return resolve(cameras);
                })
                    .catch(error => {
                    CameraAccess.mediaStream.getVideoTracks().forEach(track => {
                        track.stop();
                    });
                    return reject(error);
                });
            })
                .catch(error => {
                return reject(error);
            });
        });
    }
    CameraAccess.getCameras = getCameras;
    /**
     * @hidden
     *
     * Try to access a given camera for video input at the given resolution level.
     *
     * @param resolutionFallbackLevel The number representing the wanted resolution, from 0 to 6,
     * resulting in higher to lower video resolutions.
     * @param camera The camera to try to access for video input.
     * @returns A promise resolving to the `MediaStream` object coming from the accessed camera.
     */
    function accessCameraStream(resolutionFallbackLevel, camera) {
        const getUserMediaParams = {
            audio: false,
            video: {}
        };
        if (resolutionFallbackLevel === 0) {
            getUserMediaParams.video = {
                width: {
                    min: 1400,
                    ideal: 1920,
                    max: 1920
                },
                height: {
                    min: 900,
                    ideal: 1440,
                    max: 1440
                }
            };
        }
        else if (resolutionFallbackLevel === 1) {
            getUserMediaParams.video = {
                width: {
                    min: 1200,
                    ideal: 1920,
                    max: 1920
                },
                height: {
                    min: 900,
                    ideal: 1200,
                    max: 1200
                }
            };
        }
        else if (resolutionFallbackLevel === 2) {
            getUserMediaParams.video = {
                width: {
                    min: 1080,
                    ideal: 1920,
                    max: 1920
                },
                height: {
                    min: 900,
                    ideal: 1080,
                    max: 1080
                }
            };
        }
        else if (resolutionFallbackLevel === 3) {
            getUserMediaParams.video = {
                width: {
                    min: 960,
                    ideal: 1280,
                    max: 1440
                },
                height: {
                    min: 480,
                    ideal: 960,
                    max: 960
                }
            };
        }
        else if (resolutionFallbackLevel === 4) {
            getUserMediaParams.video = {
                width: {
                    min: 720,
                    ideal: 1280,
                    max: 1440
                },
                height: {
                    min: 480,
                    ideal: 720,
                    max: 768
                }
            };
        }
        else if (resolutionFallbackLevel === 5) {
            getUserMediaParams.video = {
                width: {
                    min: 640,
                    ideal: 960,
                    max: 1440
                },
                height: {
                    min: 480,
                    ideal: 720,
                    max: 720
                }
            };
        }
        if (camera === undefined) {
            getUserMediaParams.video = true;
        }
        else {
            getUserMediaParams.video.deviceId = {
                exact: camera.deviceId
            };
        }
        console.debug("Camera access:", camera);
        return navigator.mediaDevices.getUserMedia(getUserMediaParams);
    }
    CameraAccess.accessCameraStream = accessCameraStream;
    /**
     * @hidden
     *
     * Get a list of available devices in a cross-browser compatible way.
     *
     * @returns A promise resolving to the `MediaDeviceInfo` array of all available devices.
     */
    function enumerateDevices() {
        if (typeof navigator.enumerateDevices === "function") {
            return navigator.enumerateDevices();
        }
        else if (typeof navigator.mediaDevices === "object" &&
            typeof navigator.mediaDevices.enumerateDevices === "function") {
            return navigator.mediaDevices.enumerateDevices();
        }
        else {
            return new Promise((resolve, reject) => {
                try {
                    window.MediaStreamTrack.getSources((devices) => {
                        resolve(devices
                            .filter(device => {
                            return device.kind.toLowerCase() === "video" || device.kind.toLowerCase() === "videoinput";
                        })
                            .map(device => {
                            return {
                                deviceId: device.deviceId != null ? device.deviceId : "",
                                groupId: device.groupId,
                                kind: "videoinput",
                                label: device.label
                            };
                        }));
                    });
                }
                catch (error) {
                    const browserCompatiblity = {
                        fullSupport: false,
                        scannerSupport: true,
                        missingFeatures: [BrowserCompatibility.Feature.MEDIA_DEVICES]
                    };
                    return reject(new CustomError({
                        name: "UnsupportedBrowserError",
                        message: "This OS / Browser has one or more missing features preventing it from working correctly",
                        data: browserCompatiblity
                    }));
                }
            });
        }
    }
})(CameraAccess || (CameraAccess = {}));
//# sourceMappingURL=cameraAccess.js.map