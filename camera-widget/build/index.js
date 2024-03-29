'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var reactWebcam = createCommonjsModule(function (module, exports) {
(function webpackUniversalModuleDefinition(root, factory) {
	module.exports = factory(React__default);
})(commonjsGlobal, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/react-webcam.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/react-webcam.tsx":
/*!******************************!*\
  !*** ./src/react-webcam.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __rest = (undefined && undefined.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\n\nfunction hasGetUserMedia() {\n    return !!((navigator.mediaDevices && navigator.mediaDevices.getUserMedia) ||\n        navigator.webkitGetUserMedia ||\n        navigator.mozGetUserMedia ||\n        navigator.msGetUserMedia);\n}\nvar Webcam = /** @class */ (function (_super) {\n    __extends(Webcam, _super);\n    function Webcam(props) {\n        var _this = _super.call(this, props) || this;\n        _this.ctx = null;\n        _this.state = {\n            hasUserMedia: false\n        };\n        return _this;\n    }\n    Webcam.prototype.componentDidMount = function () {\n        if (!hasGetUserMedia())\n            return;\n        var state = this.state;\n        Webcam.mountedInstances.push(this);\n        if (!state.hasUserMedia && !Webcam.userMediaRequested) {\n            this.requestUserMedia();\n        }\n    };\n    Webcam.prototype.componentDidUpdate = function (nextProps) {\n        var props = this.props;\n        if (JSON.stringify(nextProps.audioConstraints) !==\n            JSON.stringify(props.audioConstraints) ||\n            JSON.stringify(nextProps.videoConstraints) !==\n                JSON.stringify(props.videoConstraints)) {\n            this.requestUserMedia();\n        }\n    };\n    Webcam.prototype.componentWillUnmount = function () {\n        var state = this.state;\n        var index = Webcam.mountedInstances.indexOf(this);\n        Webcam.mountedInstances.splice(index, 1);\n        Webcam.userMediaRequested = false;\n        if (Webcam.mountedInstances.length === 0 && state.hasUserMedia) {\n            if (this.stream.getVideoTracks && this.stream.getAudioTracks) {\n                this.stream.getVideoTracks().map(function (track) { return track.stop(); });\n                this.stream.getAudioTracks().map(function (track) { return track.stop(); });\n            }\n            else {\n                this.stream.stop();\n            }\n            if (state.src) {\n                window.URL.revokeObjectURL(state.src);\n            }\n        }\n    };\n    Webcam.prototype.getScreenshot = function () {\n        var _a = this, state = _a.state, props = _a.props;\n        if (!state.hasUserMedia)\n            return null;\n        var canvas = this.getCanvas();\n        return (canvas &&\n            canvas.toDataURL(props.screenshotFormat, props.screenshotQuality));\n    };\n    Webcam.prototype.getCanvas = function () {\n        var _a = this, state = _a.state, props = _a.props;\n        if (!this.video) {\n            return null;\n        }\n        if (!state.hasUserMedia || !this.video.videoHeight)\n            return null;\n        if (!this.ctx) {\n            var canvas_1 = document.createElement(\"canvas\");\n            var aspectRatio = this.video.videoWidth / this.video.videoHeight;\n            var canvasWidth = props.minScreenshotWidth || this.video.clientWidth;\n            var canvasHeight = canvasWidth / aspectRatio;\n            if (props.minScreenshotHeight &&\n                canvasHeight < props.minScreenshotHeight) {\n                canvasHeight = props.minScreenshotHeight;\n                canvasWidth = canvasHeight * aspectRatio;\n            }\n            canvas_1.width = canvasWidth;\n            canvas_1.height = canvasHeight;\n            this.canvas = canvas_1;\n            this.ctx = canvas_1.getContext(\"2d\");\n        }\n        var _b = this, ctx = _b.ctx, canvas = _b.canvas;\n        if (ctx) {\n            if (props.mirrored) {\n                ctx.translate(canvas.width, 0);\n                ctx.scale(-1, 1);\n            }\n            else {\n                ctx.translate(0, 0);\n                ctx.scale(1, 1);\n            }\n            ctx.imageSmoothingEnabled = props.imageSmoothing;\n            ctx.drawImage(this.video, 0, 0, canvas.width, canvas.height);\n        }\n        return canvas;\n    };\n    Webcam.prototype.requestUserMedia = function () {\n        var props = this.props;\n        navigator.getUserMedia =\n            navigator.mediaDevices.getUserMedia ||\n                navigator.webkitGetUserMedia ||\n                navigator.mozGetUserMedia ||\n                navigator.msGetUserMedia;\n        var sourceSelected = function (audioConstraints, videoConstraints) {\n            var constraints = {\n                video: typeof videoConstraints !== \"undefined\" ? videoConstraints : true\n            };\n            if (props.audio) {\n                constraints.audio =\n                    typeof audioConstraints !== \"undefined\" ? audioConstraints : true;\n            }\n            navigator.mediaDevices\n                .getUserMedia(constraints)\n                .then(function (stream) {\n                Webcam.mountedInstances.forEach(function (instance) {\n                    return instance.handleUserMedia(null, stream);\n                });\n            })\n                .catch(function (e) {\n                Webcam.mountedInstances.forEach(function (instance) {\n                    return instance.handleUserMedia(e);\n                });\n            });\n        };\n        if (\"mediaDevices\" in navigator) {\n            sourceSelected(props.audioConstraints, props.videoConstraints);\n        }\n        else {\n            var optionalSource_1 = function (id) { return ({ optional: [{ sourceId: id }] }); };\n            var constraintToSourceId_1 = function (constraint) {\n                var deviceId = constraint.deviceId;\n                if (typeof deviceId === \"string\") {\n                    return deviceId;\n                }\n                if (Array.isArray(deviceId) && deviceId.length > 0) {\n                    return deviceId[0];\n                }\n                if (typeof deviceId === \"object\" && deviceId.ideal) {\n                    return deviceId.ideal;\n                }\n                return null;\n            };\n            // @ts-ignore: deprecated api\n            MediaStreamTrack.getSources(function (sources) {\n                var audioSource = null;\n                var videoSource = null;\n                sources.forEach(function (source) {\n                    if (source.kind === \"audio\") {\n                        audioSource = source.id;\n                    }\n                    else if (source.kind === \"video\") {\n                        videoSource = source.id;\n                    }\n                });\n                var audioSourceId = constraintToSourceId_1(props.audioConstraints);\n                if (audioSourceId) {\n                    audioSource = audioSourceId;\n                }\n                var videoSourceId = constraintToSourceId_1(props.videoConstraints);\n                if (videoSourceId) {\n                    videoSource = videoSourceId;\n                }\n                sourceSelected(optionalSource_1(audioSource), optionalSource_1(videoSource));\n            });\n        }\n        Webcam.userMediaRequested = true;\n    };\n    Webcam.prototype.handleUserMedia = function (err, stream) {\n        var props = this.props;\n        if (err || !stream) {\n            this.setState({ hasUserMedia: false });\n            props.onUserMediaError(err);\n            return;\n        }\n        this.stream = stream;\n        try {\n            if (this.video) {\n                this.video.srcObject = stream;\n            }\n            this.setState({ hasUserMedia: true });\n        }\n        catch (error) {\n            this.setState({\n                hasUserMedia: true,\n                src: window.URL.createObjectURL(stream)\n            });\n        }\n        props.onUserMedia();\n    };\n    Webcam.prototype.render = function () {\n        var _this = this;\n        var _a = this, state = _a.state, props = _a.props;\n        var audio = props.audio, onUserMedia = props.onUserMedia, onUserMediaError = props.onUserMediaError, screenshotFormat = props.screenshotFormat, screenshotQuality = props.screenshotQuality, minScreenshotWidth = props.minScreenshotWidth, minScreenshotHeight = props.minScreenshotHeight, audioConstraints = props.audioConstraints, videoConstraints = props.videoConstraints, imageSmoothing = props.imageSmoothing, mirrored = props.mirrored, _b = props.style, style = _b === void 0 ? {} : _b, rest = __rest(props, [\"audio\", \"onUserMedia\", \"onUserMediaError\", \"screenshotFormat\", \"screenshotQuality\", \"minScreenshotWidth\", \"minScreenshotHeight\", \"audioConstraints\", \"videoConstraints\", \"imageSmoothing\", \"mirrored\", \"style\"]);\n        var videoStyle = mirrored ? __assign(__assign({}, style), { transform: (style.transform || \"\") + \" scaleX(-1)\" }) : style;\n        return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"video\", __assign({ autoPlay: true, src: state.src, muted: audio, playsInline: true, ref: function (ref) {\n                _this.video = ref;\n            }, style: videoStyle }, rest)));\n    };\n    Webcam.defaultProps = {\n        audio: true,\n        imageSmoothing: true,\n        mirrored: false,\n        onUserMedia: function () { },\n        onUserMediaError: function () { },\n        screenshotFormat: \"image/webp\",\n        screenshotQuality: 0.92,\n    };\n    Webcam.mountedInstances = [];\n    Webcam.userMediaRequested = false;\n    return Webcam;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Webcam);\n\n\n//# sourceURL=webpack://Webcam/./src/react-webcam.tsx?");

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://Webcam/external_%7B%22root%22:%22React%22,%22commonjs2%22:%22react%22,%22commonjs%22:%22react%22,%22amd%22:%22react%22%7D?");

/***/ })

/******/ })["default"];
});
});

var Webcam = unwrapExports(reactWebcam);

/**
 * @class ExampleComponent
 */
class CameraWidget extends React.Component {
    render() {
        const { coreAPI } = this.props;
        // @ts-ignore
        return React.createElement(Webcam, { audio: coreAPI.audio, height: coreAPI.height, ref: coreAPI.webcamRef, screenshotFormat: "image/jpeg", width: coreAPI.width, videoConstraints: coreAPI.videoConstraints });
    }
}

exports.default = CameraWidget;
//# sourceMappingURL=index.js.map
