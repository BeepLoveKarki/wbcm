"use strict";
/* tslint:disable:no-implicit-dependencies */
/**
 * CameraAccess tests
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const scandit_sdk_1 = require("scandit-sdk");
const sinon = require("sinon");
const getUserMediaStub = sinon.stub();
const getVideoTracksStub = sinon.stub();
const applyConstraintsStub = sinon.stub();
const getCapabilitiesStub = sinon.stub();
const getConstraintsStub = sinon.stub();
const getSettingsStub = sinon.stub();
const stopStub = sinon.stub();
const getSourcesStub = sinon.stub();
const enumerateDevicesStub = sinon.stub();
const stubs = [
    getUserMediaStub,
    getVideoTracksStub,
    applyConstraintsStub,
    getCapabilitiesStub,
    getConstraintsStub,
    getSettingsStub,
    stopStub,
    getSourcesStub,
    enumerateDevicesStub
];
const fakeCamera1 = {
    deviceId: "1",
    groupId: "1",
    kind: "videoinput",
    label: "Fake Camera Device (back)"
};
const fakeCamera2 = {
    deviceId: "2",
    groupId: "1",
    kind: "videoinput",
    label: "Fake Camera Device (front)"
};
const fakeCamera3 = {
    deviceId: "3",
    groupId: "1",
    kind: "videoinput",
    label: "Fake Camera Device (posteriore)"
};
const fakeCamera4 = {
    deviceId: "4",
    groupId: "1",
    kind: "videoinput",
    label: "Fake Camera Device (unknown)"
};
const fakeCamera5 = {
    deviceId: "5",
    groupId: "1",
    kind: "videoinput",
    label: "Fake Camera Device (unknown)"
};
const illegalFakeCamera1 = {
    deviceId: "10",
    groupId: "1",
    kind: "videoinput"
};
const legacyFakeCamera1 = {
    groupId: "1",
    kind: "videoinput",
    label: "Fake Camera Device (back)"
};
const legacyFakeCamera2 = {
    deviceId: "100",
    groupId: "1",
    kind: "video",
    label: "Fake Camera Device (front)"
};
const fakeMicrophone = {
    deviceId: "1000",
    groupId: "1",
    kind: "audioinput",
    label: "Fake Microhpone Device #2"
};
function fakeCompatibleBrowser() {
    navigator.mediaDevices = {
        getUserMedia: getUserMediaStub.resolves({
            getTracks: getVideoTracksStub,
            getVideoTracks: getVideoTracksStub
        })
    };
    getVideoTracksStub.returns([
        {
            applyConstraints: applyConstraintsStub.resolves(),
            getCapabilities: getCapabilitiesStub.returns(123),
            getConstraints: getConstraintsStub.returns(456),
            getSettings: getSettingsStub.returns(789),
            stop: stopStub
        }
    ]);
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
function resetStubs() {
    stubs.forEach(mock => {
        mock.resetHistory();
    });
}
ava_1.test.beforeEach(() => {
    scandit_sdk_1.CameraAccess.mediaStream = undefined;
    window.MediaStreamTrack = undefined;
    navigator.enumerateDevices = undefined;
});
ava_1.test.serial("getCameras (errors)", async (t) => {
    resetStubs();
    let error = await t.throws(scandit_sdk_1.CameraAccess.getCameras());
    t.is(error.name, "UnsupportedBrowserError");
    t.false(getUserMediaStub.called);
    t.false(getSourcesStub.called);
    fakeCompatibleBrowser();
    navigator.mediaDevices.getUserMedia = getUserMediaStub.rejects(new Error("Test error"));
    resetStubs();
    error = await t.throws(scandit_sdk_1.CameraAccess.getCameras());
    t.is(error.message, "Test error");
    t.true(getUserMediaStub.called);
    t.false(getSourcesStub.called);
});
ava_1.test.serial("getCameras (MediaStreamTrack.getSources)", async (t) => {
    fakeCompatibleBrowser();
    // Intentionally wrong legacy method
    window.MediaStreamTrack = {
        getSources: getSourcesStub.callsArgWith(0, null)
    };
    resetStubs();
    const error = await t.throws(scandit_sdk_1.CameraAccess.getCameras());
    t.is(error.name, "UnsupportedBrowserError");
    t.true(getUserMediaStub.called);
    t.true(getSourcesStub.called);
    window.MediaStreamTrack = {
        getSources: getSourcesStub.callsArgWith(0, [
            fakeCamera1,
            fakeCamera2,
            legacyFakeCamera1,
            legacyFakeCamera2,
            fakeMicrophone
        ])
    };
    resetStubs();
    const cameras = await scandit_sdk_1.CameraAccess.getCameras();
    t.false(getUserMediaStub.called);
    t.true(getSourcesStub.called);
    t.not(cameras, null);
    t.is(cameras.length, 4);
    resetStubs();
    const newCameras = await scandit_sdk_1.CameraAccess.getCameras();
    t.false(getUserMediaStub.called);
    t.true(getSourcesStub.called);
    t.deepEqual(cameras, newCameras);
    t.is(cameras[0].deviceId, fakeCamera1.deviceId);
    t.is(cameras[0].label, fakeCamera1.label);
    t.is(cameras[0].cameraType, scandit_sdk_1.Camera.Type.BACK);
    t.is(cameras[0].currentResolution, undefined);
    t.is(cameras[1].deviceId, fakeCamera2.deviceId);
    t.is(cameras[1].label, fakeCamera2.label);
    t.is(cameras[1].cameraType, scandit_sdk_1.Camera.Type.FRONT);
    t.is(cameras[1].currentResolution, undefined);
    t.is(cameras[2].deviceId, "");
    t.is(cameras[2].label, legacyFakeCamera1.label);
    t.is(cameras[2].cameraType, scandit_sdk_1.Camera.Type.BACK);
    t.is(cameras[2].currentResolution, undefined);
    t.is(cameras[3].deviceId, legacyFakeCamera2.deviceId);
    t.is(cameras[3].label, legacyFakeCamera2.label);
    t.is(cameras[3].cameraType, scandit_sdk_1.Camera.Type.FRONT);
    t.is(cameras[3].currentResolution, undefined);
});
ava_1.test.serial("getCameras (navigator.mediaDevices.enumerateDevices)", async (t) => {
    fakeCompatibleBrowser();
    navigator.mediaDevices.enumerateDevices = enumerateDevicesStub.resolves([
        fakeCamera1,
        fakeCamera2,
        illegalFakeCamera1,
        fakeMicrophone
    ]);
    window.MediaStreamTrack = {
        getSources: getSourcesStub
    };
    resetStubs();
    const cameras = await scandit_sdk_1.CameraAccess.getCameras();
    t.true(getUserMediaStub.called);
    t.true(enumerateDevicesStub.called);
    t.false(getSourcesStub.called);
    t.not(cameras, null);
    t.is(cameras.length, 3);
    resetStubs();
    const newCameras = await scandit_sdk_1.CameraAccess.getCameras();
    t.false(getUserMediaStub.called);
    t.true(enumerateDevicesStub.called);
    t.false(getSourcesStub.called);
    t.deepEqual(cameras, newCameras);
    t.is(cameras[0].deviceId, fakeCamera1.deviceId);
    t.is(cameras[0].label, fakeCamera1.label);
    t.is(cameras[0].cameraType, scandit_sdk_1.Camera.Type.BACK);
    t.is(cameras[0].currentResolution, undefined);
    t.is(cameras[1].deviceId, fakeCamera2.deviceId);
    t.is(cameras[1].label, fakeCamera2.label);
    t.is(cameras[1].cameraType, scandit_sdk_1.Camera.Type.FRONT);
    t.is(cameras[1].currentResolution, undefined);
    t.is(cameras[2].deviceId, illegalFakeCamera1.deviceId);
    t.is(cameras[2].label, "");
    t.is(cameras[2].cameraType, scandit_sdk_1.Camera.Type.FRONT);
    t.is(cameras[2].currentResolution, undefined);
});
ava_1.test.serial("getCameras (navigator.enumerateDevices)", async (t) => {
    fakeCompatibleBrowser();
    navigator.enumerateDevices = enumerateDevicesStub.resolves([
        fakeCamera1,
        fakeCamera2,
        illegalFakeCamera1,
        fakeMicrophone
    ]);
    navigator.mediaDevices.enumerateDevices = enumerateDevicesStub.resolves([
        fakeCamera1,
        fakeCamera2,
        illegalFakeCamera1,
        fakeMicrophone
    ]);
    window.MediaStreamTrack = {
        getSources: getSourcesStub
    };
    resetStubs();
    const cameras = await scandit_sdk_1.CameraAccess.getCameras();
    t.true(getUserMediaStub.called);
    t.true(enumerateDevicesStub.called);
    t.false(getSourcesStub.called);
    t.not(cameras, null);
    t.is(cameras.length, 3);
    resetStubs();
    const newCameras = await scandit_sdk_1.CameraAccess.getCameras();
    t.false(getUserMediaStub.called);
    t.true(enumerateDevicesStub.called);
    t.false(getSourcesStub.called);
    t.deepEqual(cameras, newCameras);
    t.is(cameras[0].deviceId, fakeCamera1.deviceId);
    t.is(cameras[0].label, fakeCamera1.label);
    t.is(cameras[0].cameraType, scandit_sdk_1.Camera.Type.BACK);
    t.is(cameras[0].currentResolution, undefined);
    t.is(cameras[1].deviceId, fakeCamera2.deviceId);
    t.is(cameras[1].label, fakeCamera2.label);
    t.is(cameras[1].cameraType, scandit_sdk_1.Camera.Type.FRONT);
    t.is(cameras[1].currentResolution, undefined);
    t.is(cameras[2].deviceId, illegalFakeCamera1.deviceId);
    t.is(cameras[2].label, "");
    t.is(cameras[2].cameraType, scandit_sdk_1.Camera.Type.FRONT);
    t.is(cameras[2].currentResolution, undefined);
});
ava_1.test.serial("getCameras (internationalized label)", async (t) => {
    fakeCompatibleBrowser();
    navigator.mediaDevices.enumerateDevices = enumerateDevicesStub.resolves([fakeCamera3]);
    resetStubs();
    const cameras = await scandit_sdk_1.CameraAccess.getCameras();
    t.not(cameras, null);
    t.is(cameras.length, 1);
    t.is(cameras[0].deviceId, fakeCamera3.deviceId);
    t.is(cameras[0].label, fakeCamera3.label);
    t.is(cameras[0].cameraType, scandit_sdk_1.Camera.Type.BACK);
    t.is(cameras[0].currentResolution, undefined);
});
ava_1.test.serial("getCameras (no front/back label information)", async (t) => {
    fakeCompatibleBrowser();
    navigator.mediaDevices.enumerateDevices = enumerateDevicesStub.resolves([fakeCamera4, fakeCamera5]);
    resetStubs();
    const cameras = await scandit_sdk_1.CameraAccess.getCameras();
    t.not(cameras, null);
    t.is(cameras.length, 2);
    t.is(cameras[0].deviceId, fakeCamera4.deviceId);
    t.is(cameras[0].label, fakeCamera4.label);
    t.is(cameras[0].cameraType, scandit_sdk_1.Camera.Type.FRONT);
    t.is(cameras[0].currentResolution, undefined);
    t.is(cameras[1].deviceId, fakeCamera5.deviceId);
    t.is(cameras[1].label, fakeCamera5.label);
    t.is(cameras[1].cameraType, scandit_sdk_1.Camera.Type.BACK);
    t.is(cameras[1].currentResolution, undefined);
});
// tslint:disable-next-line:max-func-body-length
ava_1.test.serial("accessCameraStream", async (t) => {
    fakeCompatibleBrowser();
    resetStubs();
    let mediaStream = await scandit_sdk_1.CameraAccess.accessCameraStream(0);
    t.true(getUserMediaStub.called);
    t.deepEqual(getUserMediaStub.args[0][0], {
        audio: false,
        video: true
    });
    t.not(mediaStream, null);
    const fakeCamera = {
        deviceId: fakeCamera1.deviceId,
        label: fakeCamera1.label,
        cameraType: scandit_sdk_1.Camera.Type.BACK
    };
    resetStubs();
    mediaStream = await scandit_sdk_1.CameraAccess.accessCameraStream(0, fakeCamera);
    t.true(getUserMediaStub.called);
    t.deepEqual(getUserMediaStub.args[0][0], {
        audio: false,
        video: {
            deviceId: {
                exact: fakeCamera.deviceId
            },
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
        }
    });
    t.not(mediaStream, null);
    resetStubs();
    mediaStream = await scandit_sdk_1.CameraAccess.accessCameraStream(1, fakeCamera);
    t.true(getUserMediaStub.called);
    t.deepEqual(getUserMediaStub.args[0][0], {
        audio: false,
        video: {
            deviceId: {
                exact: fakeCamera.deviceId
            },
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
        }
    });
    t.not(mediaStream, null);
    resetStubs();
    mediaStream = await scandit_sdk_1.CameraAccess.accessCameraStream(2, fakeCamera);
    t.true(getUserMediaStub.called);
    t.deepEqual(getUserMediaStub.args[0][0], {
        audio: false,
        video: {
            deviceId: {
                exact: fakeCamera.deviceId
            },
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
        }
    });
    t.not(mediaStream, null);
    resetStubs();
    mediaStream = await scandit_sdk_1.CameraAccess.accessCameraStream(3, fakeCamera);
    t.true(getUserMediaStub.called);
    t.deepEqual(getUserMediaStub.args[0][0], {
        audio: false,
        video: {
            deviceId: {
                exact: fakeCamera.deviceId
            },
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
        }
    });
    t.not(mediaStream, null);
    resetStubs();
    mediaStream = await scandit_sdk_1.CameraAccess.accessCameraStream(4, fakeCamera);
    t.true(getUserMediaStub.called);
    t.deepEqual(getUserMediaStub.args[0][0], {
        audio: false,
        video: {
            deviceId: {
                exact: fakeCamera.deviceId
            },
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
        }
    });
    t.not(mediaStream, null);
    resetStubs();
    mediaStream = await scandit_sdk_1.CameraAccess.accessCameraStream(5, fakeCamera);
    t.true(getUserMediaStub.called);
    t.deepEqual(getUserMediaStub.args[0][0], {
        audio: false,
        video: {
            deviceId: {
                exact: fakeCamera.deviceId
            },
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
        }
    });
    t.not(mediaStream, null);
    resetStubs();
    mediaStream = await scandit_sdk_1.CameraAccess.accessCameraStream(6, fakeCamera);
    t.true(getUserMediaStub.called);
    t.deepEqual(getUserMediaStub.args[0][0], {
        audio: false,
        video: {
            deviceId: {
                exact: fakeCamera.deviceId
            }
        }
    });
});
//# sourceMappingURL=cameraAccess.spec.js.map