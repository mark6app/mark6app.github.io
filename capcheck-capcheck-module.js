(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["capcheck-capcheck-module"],{

/***/ "./node_modules/is-electron/index.js":
/*!*******************************************!*\
  !*** ./node_modules/is-electron/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/electron/electron/issues/2288
function isElectron() {
    // Renderer process
    if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
        return true;
    }

    // Main process
    if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
        return true;
    }

    // Detect the user agent when the `nodeIntegration` option is set to true
    if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
        return true;
    }

    return false;
}

module.exports = isElectron;


/***/ }),

/***/ "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm5/ngx-image-cropper.js":
/*!********************************************************************************!*\
  !*** ./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm5/ngx-image-cropper.js ***!
  \********************************************************************************/
/*! exports provided: ImageCropperComponent, ImageCropperModule, base64ToFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCropperComponent", function() { return ImageCropperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCropperModule", function() { return ImageCropperModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64ToFile", function() { return base64ToFile; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/ngx-image-cropper/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} exifRotationOrBase64Image
 * @return {?}
 */




var _c0 = ["sourceImage"];
function ImageCropperComponent_img_1_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function ImageCropperComponent_img_1_Template_img_load_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.imageLoadedInView(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx_r0.imageVisible ? "visible" : "hidden")("transform", ctx_r0.safeTransformStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.safeImgDataUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ImageCropperComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function ImageCropperComponent_div_3_Template_div_keydown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.keyboardAccess($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_3_Template_div_mousedown_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.startMove($event, "move"); })("touchstart", function ImageCropperComponent_div_3_Template_div_touchstart_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.startMove($event, "move"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_3_Template_span_mousedown_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.startMove($event, "resize", "topleft"); })("touchstart", function ImageCropperComponent_div_3_Template_span_touchstart_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.startMove($event, "resize", "topleft"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_3_Template_span_mousedown_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.startMove($event, "resize", "topright"); })("touchstart", function ImageCropperComponent_div_3_Template_span_touchstart_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.startMove($event, "resize", "topright"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_3_Template_span_mousedown_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.startMove($event, "resize", "bottomright"); })("touchstart", function ImageCropperComponent_div_3_Template_span_touchstart_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.startMove($event, "resize", "bottomright"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_3_Template_span_mousedown_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.startMove($event, "resize", "bottomleft"); })("touchstart", function ImageCropperComponent_div_3_Template_span_touchstart_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.startMove($event, "resize", "bottomleft"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_3_Template_span_mousedown_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.startMove($event, "resize", "top"); })("touchstart", function ImageCropperComponent_div_3_Template_span_touchstart_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.startMove($event, "resize", "top"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_3_Template_span_mousedown_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.startMove($event, "resize", "right"); })("touchstart", function ImageCropperComponent_div_3_Template_span_touchstart_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.startMove($event, "resize", "right"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_3_Template_span_mousedown_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.startMove($event, "resize", "bottom"); })("touchstart", function ImageCropperComponent_div_3_Template_span_touchstart_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.startMove($event, "resize", "bottom"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_3_Template_span_mousedown_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.startMove($event, "resize", "left"); })("touchstart", function ImageCropperComponent_div_3_Template_span_touchstart_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.startMove($event, "resize", "left"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx_r1.cropper.y1, "px")("left", ctx_r1.cropper.x1, "px")("width", ctx_r1.cropper.x2 - ctx_r1.cropper.x1, "px")("height", ctx_r1.cropper.y2 - ctx_r1.cropper.y1, "px")("margin-left", ctx_r1.alignImage === "center" ? ctx_r1.marginLeft : null)("visibility", ctx_r1.imageVisible ? "visible" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("rounded", ctx_r1.roundCropper);
} }
function getTransformationsFromExifData(exifRotationOrBase64Image) {
    if (typeof exifRotationOrBase64Image === 'string') {
        exifRotationOrBase64Image = getExifRotation(exifRotationOrBase64Image);
    }
    switch (exifRotationOrBase64Image) {
        case 2: return { rotate: 0, flip: true };
        case 3: return { rotate: 2, flip: false };
        case 4: return { rotate: 2, flip: true };
        case 5: return { rotate: 1, flip: true };
        case 6: return { rotate: 1, flip: false };
        case 7: return { rotate: 3, flip: true };
        case 8: return { rotate: 3, flip: false };
        default: return { rotate: 0, flip: false };
    }
}
/**
 * @param {?} imageBase64
 * @return {?}
 */
function getExifRotation(imageBase64) {
    /** @type {?} */
    var view = new DataView(base64ToArrayBuffer(imageBase64));
    if (view.getUint16(0, false) != 0xFFD8) {
        return -2;
    }
    /** @type {?} */
    var length = view.byteLength;
    /** @type {?} */
    var offset = 2;
    while (offset < length) {
        if (view.getUint16(offset + 2, false) <= 8)
            return -1;
        /** @type {?} */
        var marker = view.getUint16(offset, false);
        offset += 2;
        if (marker == 0xFFE1) {
            if (view.getUint32(offset += 2, false) != 0x45786966) {
                return -1;
            }
            /** @type {?} */
            var little = view.getUint16(offset += 6, false) == 0x4949;
            offset += view.getUint32(offset + 4, little);
            /** @type {?} */
            var tags = view.getUint16(offset, little);
            offset += 2;
            for (var i = 0; i < tags; i++) {
                if (view.getUint16(offset + (i * 12), little) == 0x0112) {
                    return view.getUint16(offset + (i * 12) + 8, little);
                }
            }
        }
        else if ((marker & 0xFF00) != 0xFF00) {
            break;
        }
        else {
            offset += view.getUint16(offset, false);
        }
    }
    return -1;
}
/**
 * @param {?} imageBase64
 * @return {?}
 */
function base64ToArrayBuffer(imageBase64) {
    imageBase64 = imageBase64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
    /** @type {?} */
    var binaryString = atob(imageBase64);
    /** @type {?} */
    var len = binaryString.length;
    /** @type {?} */
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * Hermite resize - fast image resize/resample using Hermite filter.
 * https://github.com/viliusle/Hermite-resize
 */
/**
 * @param {?} canvas
 * @param {?} width
 * @param {?} height
 * @return {?}
 */
function resizeCanvas(canvas, width, height) {
    /** @type {?} */
    var width_source = canvas.width;
    /** @type {?} */
    var height_source = canvas.height;
    width = Math.round(width);
    height = Math.round(height);
    /** @type {?} */
    var ratio_w = width_source / width;
    /** @type {?} */
    var ratio_h = height_source / height;
    /** @type {?} */
    var ratio_w_half = Math.ceil(ratio_w / 2);
    /** @type {?} */
    var ratio_h_half = Math.ceil(ratio_h / 2);
    /** @type {?} */
    var ctx = canvas.getContext('2d');
    if (ctx) {
        /** @type {?} */
        var img = ctx.getImageData(0, 0, width_source, height_source);
        /** @type {?} */
        var img2 = ctx.createImageData(width, height);
        /** @type {?} */
        var data = img.data;
        /** @type {?} */
        var data2 = img2.data;
        for (var j = 0; j < height; j++) {
            for (var i = 0; i < width; i++) {
                /** @type {?} */
                var x2 = (i + j * width) * 4;
                /** @type {?} */
                var center_y = j * ratio_h;
                /** @type {?} */
                var weight = 0;
                /** @type {?} */
                var weights = 0;
                /** @type {?} */
                var weights_alpha = 0;
                /** @type {?} */
                var gx_r = 0;
                /** @type {?} */
                var gx_g = 0;
                /** @type {?} */
                var gx_b = 0;
                /** @type {?} */
                var gx_a = 0;
                /** @type {?} */
                var xx_start = Math.floor(i * ratio_w);
                /** @type {?} */
                var yy_start = Math.floor(j * ratio_h);
                /** @type {?} */
                var xx_stop = Math.ceil((i + 1) * ratio_w);
                /** @type {?} */
                var yy_stop = Math.ceil((j + 1) * ratio_h);
                xx_stop = Math.min(xx_stop, width_source);
                yy_stop = Math.min(yy_stop, height_source);
                for (var yy = yy_start; yy < yy_stop; yy++) {
                    /** @type {?} */
                    var dy = Math.abs(center_y - yy) / ratio_h_half;
                    /** @type {?} */
                    var center_x = i * ratio_w;
                    /** @type {?} */
                    var w0 = dy * dy;
                    for (var xx = xx_start; xx < xx_stop; xx++) {
                        /** @type {?} */
                        var dx = Math.abs(center_x - xx) / ratio_w_half;
                        /** @type {?} */
                        var w = Math.sqrt(w0 + dx * dx);
                        if (w >= 1) {
                            //pixel too far
                            continue;
                        }
                        //hermite filter
                        weight = 2 * w * w * w - 3 * w * w + 1;
                        /** @type {?} */
                        var pos_x = 4 * (xx + yy * width_source);
                        //alpha
                        gx_a += weight * data[pos_x + 3];
                        weights_alpha += weight;
                        //colors
                        if (data[pos_x + 3] < 255)
                            weight = weight * data[pos_x + 3] / 250;
                        gx_r += weight * data[pos_x];
                        gx_g += weight * data[pos_x + 1];
                        gx_b += weight * data[pos_x + 2];
                        weights += weight;
                    }
                }
                data2[x2] = gx_r / weights;
                data2[x2 + 1] = gx_g / weights;
                data2[x2 + 2] = gx_b / weights;
                data2[x2 + 3] = gx_a / weights_alpha;
            }
        }
        canvas.width = width;
        canvas.height = height;
        //draw
        ctx.putImageData(img2, 0, 0);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ImageCropperComponent = /** @class */ (function () {
    function ImageCropperComponent(sanitizer, cd) {
        this.sanitizer = sanitizer;
        this.cd = cd;
        this.setImageMaxSizeRetries = 0;
        this.cropperScaledMinWidth = 20;
        this.cropperScaledMinHeight = 20;
        this.exifTransform = { rotate: 0, flip: false };
        this.stepSize = 3;
        this.marginLeft = '0px';
        this.imageVisible = false;
        this.format = 'png';
        this.maintainAspectRatio = true;
        this.transform = {};
        this.aspectRatio = 1;
        this.resizeToWidth = 0;
        this.resizeToHeight = 0;
        this.cropperMinWidth = 0;
        this.cropperMinHeight = 0;
        this.canvasRotation = 0;
        this.initialStepSize = 3;
        this.roundCropper = false;
        this.onlyScaleDown = false;
        this.imageQuality = 92;
        this.autoCrop = true;
        this.containWithinAspectRatio = false;
        this.cropper = {
            x1: -100,
            y1: -100,
            x2: 10000,
            y2: 10000
        };
        this.alignImage = 'center';
        this.disabled = false;
        this.imageCropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.startCropImage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.imageLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cropperReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loadImageFailed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.initCropper();
    }
    Object.defineProperty(ImageCropperComponent.prototype, "imageChangedEvent", {
        set: /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.initCropper();
            if (event && event.target && event.target.files && event.target.files.length > 0) {
                this.loadImageFile(event.target.files[0]);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageCropperComponent.prototype, "imageBase64", {
        set: /**
         * @param {?} imageBase64
         * @return {?}
         */
        function (imageBase64) {
            this.initCropper();
            this.checkExifAndLoadBase64Image(imageBase64);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageCropperComponent.prototype, "imageFile", {
        set: /**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            this.initCropper();
            if (file) {
                this.loadImageFile(file);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    ImageCropperComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.originalImage && this.originalImage.complete && this.exifTransform && (changes.containWithinAspectRatio || changes.canvasRotation)) {
            this.transformOriginalImage();
        }
        if (changes.cropper) {
            this.setMaxSize();
            this.setCropperScaledMinSize();
            this.checkCropperPosition(false);
            this.doAutoCrop();
            this.cd.markForCheck();
        }
        if (changes.aspectRatio && this.imageVisible) {
            this.resetCropperPosition();
        }
        if (changes.transform) {
            this.transform = this.transform || {};
            this.setCssTransform();
            this.doAutoCrop();
        }
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.setCssTransform = /**
     * @private
     * @return {?}
     */
    function () {
        this.safeTransformStyle = this.sanitizer.bypassSecurityTrustStyle('scaleX(' + (this.transform.scale || 1) * (this.transform.flipH ? -1 : 1) + ')' +
            'scaleY(' + (this.transform.scale || 1) * (this.transform.flipV ? -1 : 1) + ')' +
            'rotate(' + (this.transform.rotate || 0) + 'deg)');
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.stepSize = this.initialStepSize;
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.initCropper = /**
     * @private
     * @return {?}
     */
    function () {
        this.imageVisible = false;
        this.transformedImage = null;
        this.safeImgDataUrl = 'data:image/png;base64,iVBORw0KGg'
            + 'oAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAU'
            + 'AAarVyFEAAAAASUVORK5CYII=';
        this.moveStart = {
            active: false,
            type: null,
            position: null,
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            clientX: 0,
            clientY: 0
        };
        this.maxSize = {
            width: 0,
            height: 0
        };
        this.originalSize = {
            width: 0,
            height: 0
        };
        this.transformedSize = {
            width: 0,
            height: 0
        };
        this.cropper.x1 = -100;
        this.cropper.y1 = -100;
        this.cropper.x2 = 10000;
        this.cropper.y2 = 10000;
    };
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    ImageCropperComponent.prototype.loadImageFile = /**
     * @private
     * @param {?} file
     * @return {?}
     */
    function (file) {
        var _this = this;
        /** @type {?} */
        var fileReader = new FileReader();
        fileReader.onload = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var imageType = file.type;
            if (_this.isValidImageType(imageType)) {
                _this.checkExifAndLoadBase64Image(event.target.result);
            }
            else {
                _this.loadImageFailed.emit();
            }
        });
        fileReader.readAsDataURL(file);
    };
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    ImageCropperComponent.prototype.isValidImageType = /**
     * @private
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return /image\/(png|jpg|jpeg|bmp|gif|tiff)/.test(type);
    };
    /**
     * @private
     * @param {?} imageBase64
     * @return {?}
     */
    ImageCropperComponent.prototype.checkExifAndLoadBase64Image = /**
     * @private
     * @param {?} imageBase64
     * @return {?}
     */
    function (imageBase64) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            /** @type {?} */
            var fail = (/**
             * @param {?=} ex
             * @return {?}
             */
            function (ex) {
                _this.originalImage = null;
                _this.originalBase64 = null;
                reject(ex);
            });
            _this.originalImage = new Image();
            _this.originalImage.onload = (/**
             * @return {?}
             */
            function () {
                _this.originalBase64 = imageBase64;
                _this.exifTransform = getTransformationsFromExifData(imageBase64);
                _this.originalSize.width = _this.originalImage.naturalWidth;
                _this.originalSize.height = _this.originalImage.naturalHeight;
                _this.transformOriginalImage()
                    .then((/**
                 * @return {?}
                 */
                function () { return resolve(); }))
                    .catch(fail);
            });
            _this.originalImage.onerror = fail;
            _this.originalImage.src = imageBase64;
        }));
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.getTransformedSize = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var canvasRotation = this.canvasRotation + this.exifTransform.rotate;
        if (this.containWithinAspectRatio) {
            if (canvasRotation % 2) {
                /** @type {?} */
                var minWidthToContain = this.originalSize.width * this.aspectRatio;
                /** @type {?} */
                var minHeightToContain = this.originalSize.height / this.aspectRatio;
                return {
                    width: Math.max(this.originalSize.height, minWidthToContain),
                    height: Math.max(this.originalSize.width, minHeightToContain),
                };
            }
            else {
                /** @type {?} */
                var minWidthToContain = this.originalSize.height * this.aspectRatio;
                /** @type {?} */
                var minHeightToContain = this.originalSize.width / this.aspectRatio;
                return {
                    width: Math.max(this.originalSize.width, minWidthToContain),
                    height: Math.max(this.originalSize.height, minHeightToContain),
                };
            }
        }
        if (canvasRotation % 2) {
            return {
                height: this.originalSize.width,
                width: this.originalSize.height,
            };
        }
        return {
            width: this.originalSize.width,
            height: this.originalSize.height,
        };
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.transformImageBase64 = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var canvasRotation = this.canvasRotation + this.exifTransform.rotate;
        /** @type {?} */
        var transformedSize = this.getTransformedSize();
        /** @type {?} */
        var canvas = document.createElement('canvas');
        canvas.width = transformedSize.width;
        canvas.height = transformedSize.height;
        /** @type {?} */
        var ctx = canvas.getContext('2d');
        ctx.setTransform(this.exifTransform.flip ? -1 : 1, 0, 0, 1, canvas.width / 2, canvas.height / 2);
        ctx.rotate(Math.PI * (canvasRotation / 2));
        ctx.drawImage(this.originalImage, -this.originalSize.width / 2, -this.originalSize.height / 2);
        return Promise.resolve(canvas.toDataURL());
    };
    /**
     * @private
     * @param {?} transformedBase64
     * @return {?}
     */
    ImageCropperComponent.prototype.setTransformedImage = /**
     * @private
     * @param {?} transformedBase64
     * @return {?}
     */
    function (transformedBase64) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            _this.transformedBase64 = transformedBase64;
            _this.safeImgDataUrl = _this.sanitizer.bypassSecurityTrustResourceUrl(transformedBase64);
            _this.transformedImage = new Image();
            _this.transformedImage.onload = (/**
             * @return {?}
             */
            function () {
                _this.transformedSize.width = _this.transformedImage.naturalWidth;
                _this.transformedSize.height = _this.transformedImage.naturalHeight;
                resolve();
                _this.cd.markForCheck();
            });
            _this.transformedImage.onerror = (/**
             * @return {?}
             */
            function () {
                _this.transformedImage = null;
                reject();
            });
            _this.transformedImage.src = _this.transformedBase64;
        }));
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.transformOriginalImage = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.originalImage || !this.originalImage.complete || !this.exifTransform) {
            return Promise.reject(new Error('No Image Loaded'));
        }
        return this.transformImageBase64()
            .then((/**
         * @param {?} transformedBase64
         * @return {?}
         */
        function (transformedBase64) { return _this.setTransformedImage(transformedBase64); }));
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.imageLoadedInView = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.transformedImage != null) {
            this.imageLoaded.emit();
            this.setImageMaxSizeRetries = 0;
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.checkImageMaxSizeRecursively(); }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.checkImageMaxSizeRecursively = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.setImageMaxSizeRetries > 40) {
            this.loadImageFailed.emit();
        }
        else if (this.sourceImage && this.sourceImage.nativeElement && this.sourceImage.nativeElement.offsetWidth > 0) {
            this.setMaxSize();
            this.setCropperScaledMinSize();
            this.resetCropperPosition();
            this.cropperReady.emit(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, this.maxSize));
            this.cd.markForCheck();
        }
        else {
            this.setImageMaxSizeRetries++;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.checkImageMaxSizeRecursively();
            }), 50);
        }
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.onResize = /**
     * @return {?}
     */
    function () {
        this.resizeCropperPosition();
        this.setMaxSize();
        this.setCropperScaledMinSize();
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.resizeCropperPosition = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var sourceImageElement = this.sourceImage.nativeElement;
        if (this.maxSize.width !== sourceImageElement.offsetWidth || this.maxSize.height !== sourceImageElement.offsetHeight) {
            this.cropper.x1 = this.cropper.x1 * sourceImageElement.offsetWidth / this.maxSize.width;
            this.cropper.x2 = this.cropper.x2 * sourceImageElement.offsetWidth / this.maxSize.width;
            this.cropper.y1 = this.cropper.y1 * sourceImageElement.offsetHeight / this.maxSize.height;
            this.cropper.y2 = this.cropper.y2 * sourceImageElement.offsetHeight / this.maxSize.height;
        }
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.resetCropperPosition = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var sourceImageElement = this.sourceImage.nativeElement;
        if (!this.maintainAspectRatio) {
            this.cropper.x1 = 0;
            this.cropper.x2 = sourceImageElement.offsetWidth;
            this.cropper.y1 = 0;
            this.cropper.y2 = sourceImageElement.offsetHeight;
        }
        else if (sourceImageElement.offsetWidth / this.aspectRatio < sourceImageElement.offsetHeight) {
            this.cropper.x1 = 0;
            this.cropper.x2 = sourceImageElement.offsetWidth;
            /** @type {?} */
            var cropperHeight = sourceImageElement.offsetWidth / this.aspectRatio;
            this.cropper.y1 = (sourceImageElement.offsetHeight - cropperHeight) / 2;
            this.cropper.y2 = this.cropper.y1 + cropperHeight;
        }
        else {
            this.cropper.y1 = 0;
            this.cropper.y2 = sourceImageElement.offsetHeight;
            /** @type {?} */
            var cropperWidth = sourceImageElement.offsetHeight * this.aspectRatio;
            this.cropper.x1 = (sourceImageElement.offsetWidth - cropperWidth) / 2;
            this.cropper.x2 = this.cropper.x1 + cropperWidth;
        }
        this.doAutoCrop();
        this.imageVisible = true;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ImageCropperComponent.prototype.keyboardAccess = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.changeKeyboardStepSize(event);
        this.keyboardMoveCropper(event);
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    ImageCropperComponent.prototype.changeKeyboardStepSize = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.key >= '1' && event.key <= '9') {
            this.stepSize = +event.key;
            return;
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    ImageCropperComponent.prototype.keyboardMoveCropper = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var keyboardWhiteList = ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'];
        if (!(keyboardWhiteList.includes(event.key))) {
            return;
        }
        /** @type {?} */
        var moveType = event.shiftKey ? 'resize' : 'move';
        /** @type {?} */
        var position = event.altKey ? this.getInvertedPositionForKey(event.key) : this.getPositionForKey(event.key);
        /** @type {?} */
        var moveEvent = this.getEventForKey(event.key, this.stepSize);
        event.preventDefault();
        event.stopPropagation();
        this.startMove({ clientX: 0, clientY: 0 }, moveType, position);
        this.moveImg(moveEvent);
        this.moveStop();
    };
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    ImageCropperComponent.prototype.getPositionForKey = /**
     * @private
     * @param {?} key
     * @return {?}
     */
    function (key) {
        switch (key) {
            case 'ArrowUp':
                return 'top';
            case 'ArrowRight':
                return 'right';
            case 'ArrowDown':
                return 'bottom';
            case 'ArrowLeft':
            default:
                return 'left';
        }
    };
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    ImageCropperComponent.prototype.getInvertedPositionForKey = /**
     * @private
     * @param {?} key
     * @return {?}
     */
    function (key) {
        switch (key) {
            case 'ArrowUp':
                return 'bottom';
            case 'ArrowRight':
                return 'left';
            case 'ArrowDown':
                return 'top';
            case 'ArrowLeft':
            default:
                return 'right';
        }
    };
    /**
     * @private
     * @param {?} key
     * @param {?} stepSize
     * @return {?}
     */
    ImageCropperComponent.prototype.getEventForKey = /**
     * @private
     * @param {?} key
     * @param {?} stepSize
     * @return {?}
     */
    function (key, stepSize) {
        switch (key) {
            case 'ArrowUp':
                return { clientX: 0, clientY: stepSize * -1 };
            case 'ArrowRight':
                return { clientX: stepSize, clientY: 0 };
            case 'ArrowDown':
                return { clientX: 0, clientY: stepSize };
            case 'ArrowLeft':
            default:
                return { clientX: stepSize * -1, clientY: 0 };
        }
    };
    /**
     * @param {?} event
     * @param {?} moveType
     * @param {?=} position
     * @return {?}
     */
    ImageCropperComponent.prototype.startMove = /**
     * @param {?} event
     * @param {?} moveType
     * @param {?=} position
     * @return {?}
     */
    function (event, moveType, position) {
        if (position === void 0) { position = null; }
        if (event.preventDefault) {
            event.preventDefault();
        }
        this.moveStart = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({ active: true, type: moveType, position: position, clientX: this.getClientX(event), clientY: this.getClientY(event) }, this.cropper);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ImageCropperComponent.prototype.moveImg = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.moveStart.active) {
            if (event.stopPropagation) {
                event.stopPropagation();
            }
            if (event.preventDefault) {
                event.preventDefault();
            }
            if (this.moveStart.type === 'move') {
                this.move(event);
                this.checkCropperPosition(true);
            }
            else if (this.moveStart.type === 'resize') {
                this.resize(event);
                this.checkCropperPosition(false);
            }
            this.cd.detectChanges();
        }
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.setMaxSize = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.sourceImage) {
            /** @type {?} */
            var sourceImageElement = this.sourceImage.nativeElement;
            this.maxSize.width = sourceImageElement.offsetWidth;
            this.maxSize.height = sourceImageElement.offsetHeight;
            this.marginLeft = this.sanitizer.bypassSecurityTrustStyle('calc(50% - ' + this.maxSize.width / 2 + 'px)');
        }
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.setCropperScaledMinSize = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.transformedImage) {
            this.setCropperScaledMinWidth();
            this.setCropperScaledMinHeight();
        }
        else {
            this.cropperScaledMinWidth = 20;
            this.cropperScaledMinHeight = 20;
        }
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.setCropperScaledMinWidth = /**
     * @private
     * @return {?}
     */
    function () {
        this.cropperScaledMinWidth = this.cropperMinWidth > 0
            ? Math.max(20, this.cropperMinWidth / this.transformedImage.width * this.maxSize.width)
            : 20;
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.setCropperScaledMinHeight = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.maintainAspectRatio) {
            this.cropperScaledMinHeight = Math.max(20, this.cropperScaledMinWidth / this.aspectRatio);
        }
        else if (this.cropperMinHeight > 0) {
            this.cropperScaledMinHeight = Math.max(20, this.cropperMinHeight / this.transformedImage.height * this.maxSize.height);
        }
        else {
            this.cropperScaledMinHeight = 20;
        }
    };
    /**
     * @private
     * @param {?=} maintainSize
     * @return {?}
     */
    ImageCropperComponent.prototype.checkCropperPosition = /**
     * @private
     * @param {?=} maintainSize
     * @return {?}
     */
    function (maintainSize) {
        if (maintainSize === void 0) { maintainSize = false; }
        if (this.cropper.x1 < 0) {
            this.cropper.x2 -= maintainSize ? this.cropper.x1 : 0;
            this.cropper.x1 = 0;
        }
        if (this.cropper.y1 < 0) {
            this.cropper.y2 -= maintainSize ? this.cropper.y1 : 0;
            this.cropper.y1 = 0;
        }
        if (this.cropper.x2 > this.maxSize.width) {
            this.cropper.x1 -= maintainSize ? (this.cropper.x2 - this.maxSize.width) : 0;
            this.cropper.x2 = this.maxSize.width;
        }
        if (this.cropper.y2 > this.maxSize.height) {
            this.cropper.y1 -= maintainSize ? (this.cropper.y2 - this.maxSize.height) : 0;
            this.cropper.y2 = this.maxSize.height;
        }
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.moveStop = /**
     * @return {?}
     */
    function () {
        if (this.moveStart.active) {
            this.moveStart.active = false;
            this.doAutoCrop();
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    ImageCropperComponent.prototype.move = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var diffX = this.getClientX(event) - this.moveStart.clientX;
        /** @type {?} */
        var diffY = this.getClientY(event) - this.moveStart.clientY;
        this.cropper.x1 = this.moveStart.x1 + diffX;
        this.cropper.y1 = this.moveStart.y1 + diffY;
        this.cropper.x2 = this.moveStart.x2 + diffX;
        this.cropper.y2 = this.moveStart.y2 + diffY;
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    ImageCropperComponent.prototype.resize = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var diffX = this.getClientX(event) - this.moveStart.clientX;
        /** @type {?} */
        var diffY = this.getClientY(event) - this.moveStart.clientY;
        switch (this.moveStart.position) {
            case 'left':
                this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - this.cropperScaledMinWidth);
                break;
            case 'topleft':
                this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - this.cropperScaledMinWidth);
                this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - this.cropperScaledMinHeight);
                break;
            case 'top':
                this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - this.cropperScaledMinHeight);
                break;
            case 'topright':
                this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + this.cropperScaledMinWidth);
                this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - this.cropperScaledMinHeight);
                break;
            case 'right':
                this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + this.cropperScaledMinWidth);
                break;
            case 'bottomright':
                this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + this.cropperScaledMinWidth);
                this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + this.cropperScaledMinHeight);
                break;
            case 'bottom':
                this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + this.cropperScaledMinHeight);
                break;
            case 'bottomleft':
                this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - this.cropperScaledMinWidth);
                this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + this.cropperScaledMinHeight);
                break;
        }
        if (this.maintainAspectRatio) {
            this.checkAspectRatio();
        }
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.checkAspectRatio = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var overflowX = 0;
        /** @type {?} */
        var overflowY = 0;
        switch (this.moveStart.position) {
            case 'top':
                this.cropper.x2 = this.cropper.x1 + (this.cropper.y2 - this.cropper.y1) * this.aspectRatio;
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(0 - this.cropper.y1, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x2 -= (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                    this.cropper.y1 += (overflowY * this.aspectRatio) > overflowX ? overflowY : overflowX / this.aspectRatio;
                }
                break;
            case 'bottom':
                this.cropper.x2 = this.cropper.x1 + (this.cropper.y2 - this.cropper.y1) * this.aspectRatio;
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x2 -= (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                    this.cropper.y2 -= (overflowY * this.aspectRatio) > overflowX ? overflowY : (overflowX / this.aspectRatio);
                }
                break;
            case 'topleft':
                this.cropper.y1 = this.cropper.y2 - (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                overflowX = Math.max(0 - this.cropper.x1, 0);
                overflowY = Math.max(0 - this.cropper.y1, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x1 += (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                    this.cropper.y1 += (overflowY * this.aspectRatio) > overflowX ? overflowY : overflowX / this.aspectRatio;
                }
                break;
            case 'topright':
                this.cropper.y1 = this.cropper.y2 - (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(0 - this.cropper.y1, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x2 -= (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                    this.cropper.y1 += (overflowY * this.aspectRatio) > overflowX ? overflowY : overflowX / this.aspectRatio;
                }
                break;
            case 'right':
            case 'bottomright':
                this.cropper.y2 = this.cropper.y1 + (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x2 -= (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                    this.cropper.y2 -= (overflowY * this.aspectRatio) > overflowX ? overflowY : overflowX / this.aspectRatio;
                }
                break;
            case 'left':
            case 'bottomleft':
                this.cropper.y2 = this.cropper.y1 + (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                overflowX = Math.max(0 - this.cropper.x1, 0);
                overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x1 += (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                    this.cropper.y2 -= (overflowY * this.aspectRatio) > overflowX ? overflowY : overflowX / this.aspectRatio;
                }
                break;
        }
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.doAutoCrop = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.autoCrop) {
            this.crop();
        }
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.crop = /**
     * @return {?}
     */
    function () {
        if (this.sourceImage && this.sourceImage.nativeElement && this.transformedImage != null) {
            this.startCropImage.emit();
            /** @type {?} */
            var imagePosition = this.getImagePosition();
            /** @type {?} */
            var width = imagePosition.x2 - imagePosition.x1;
            /** @type {?} */
            var height = imagePosition.y2 - imagePosition.y1;
            /** @type {?} */
            var cropCanvas = (/** @type {?} */ (document.createElement('canvas')));
            cropCanvas.width = width;
            cropCanvas.height = height;
            /** @type {?} */
            var ctx = cropCanvas.getContext('2d');
            if (ctx) {
                if (this.backgroundColor != null) {
                    ctx.fillStyle = this.backgroundColor;
                    ctx.fillRect(0, 0, width, height);
                }
                /** @type {?} */
                var scaleX = (this.transform.scale || 1) * (this.transform.flipH ? -1 : 1);
                /** @type {?} */
                var scaleY = (this.transform.scale || 1) * (this.transform.flipV ? -1 : 1);
                ctx.setTransform(scaleX, 0, 0, scaleY, this.transformedSize.width / 2, this.transformedSize.height / 2);
                ctx.translate(-imagePosition.x1 / scaleX, -imagePosition.y1 / scaleY);
                ctx.rotate((this.transform.rotate || 0) * Math.PI / 180);
                ctx.drawImage(this.transformedImage, -this.transformedSize.width / 2, -this.transformedSize.height / 2);
                /** @type {?} */
                var output = {
                    width: width, height: height,
                    imagePosition: imagePosition,
                    cropperPosition: Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, this.cropper)
                };
                if (this.containWithinAspectRatio) {
                    output.offsetImagePosition = this.getOffsetImagePosition();
                }
                /** @type {?} */
                var resizeRatio = this.getResizeRatio(width, height);
                if (resizeRatio !== 1) {
                    output.width = Math.round(width * resizeRatio);
                    output.height = this.maintainAspectRatio
                        ? Math.round(output.width / this.aspectRatio)
                        : Math.round(height * resizeRatio);
                    resizeCanvas(cropCanvas, output.width, output.height);
                }
                output.base64 = this.cropToBase64(cropCanvas);
                this.imageCropped.emit(output);
                return output;
            }
        }
        return null;
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.getImagePosition = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var sourceImageElement = this.sourceImage.nativeElement;
        /** @type {?} */
        var ratio = this.transformedSize.width / sourceImageElement.offsetWidth;
        /** @type {?} */
        var out = {
            x1: Math.round(this.cropper.x1 * ratio),
            y1: Math.round(this.cropper.y1 * ratio),
            x2: Math.round(this.cropper.x2 * ratio),
            y2: Math.round(this.cropper.y2 * ratio)
        };
        if (!this.containWithinAspectRatio) {
            out.x1 = Math.max(out.x1, 0);
            out.y1 = Math.max(out.y1, 0);
            out.x2 = Math.min(out.x2, this.transformedSize.width);
            out.y2 = Math.min(out.y2, this.transformedSize.height);
        }
        return out;
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.getOffsetImagePosition = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var canvasRotation = this.canvasRotation + this.exifTransform.rotate;
        /** @type {?} */
        var sourceImageElement = this.sourceImage.nativeElement;
        /** @type {?} */
        var ratio = this.transformedSize.width / sourceImageElement.offsetWidth;
        /** @type {?} */
        var offsetX;
        /** @type {?} */
        var offsetY;
        if (canvasRotation % 2) {
            offsetX = (this.transformedSize.width - this.originalSize.height) / 2;
            offsetY = (this.transformedSize.height - this.originalSize.width) / 2;
        }
        else {
            offsetX = (this.transformedSize.width - this.originalSize.width) / 2;
            offsetY = (this.transformedSize.height - this.originalSize.height) / 2;
        }
        /** @type {?} */
        var out = {
            x1: Math.round(this.cropper.x1 * ratio) - offsetX,
            y1: Math.round(this.cropper.y1 * ratio) - offsetY,
            x2: Math.round(this.cropper.x2 * ratio) - offsetX,
            y2: Math.round(this.cropper.y2 * ratio) - offsetY
        };
        if (!this.containWithinAspectRatio) {
            out.x1 = Math.max(out.x1, 0);
            out.y1 = Math.max(out.y1, 0);
            out.x2 = Math.min(out.x2, this.transformedSize.width);
            out.y2 = Math.min(out.y2, this.transformedSize.height);
        }
        return out;
    };
    /**
     * @private
     * @param {?} cropCanvas
     * @return {?}
     */
    ImageCropperComponent.prototype.cropToBase64 = /**
     * @private
     * @param {?} cropCanvas
     * @return {?}
     */
    function (cropCanvas) {
        return cropCanvas.toDataURL('image/' + this.format, this.getQuality());
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.getQuality = /**
     * @private
     * @return {?}
     */
    function () {
        return Math.min(1, Math.max(0, this.imageQuality / 100));
    };
    /**
     * @private
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    ImageCropperComponent.prototype.getResizeRatio = /**
     * @private
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    function (width, height) {
        if (this.resizeToWidth > 0) {
            if (!this.onlyScaleDown || width > this.resizeToWidth) {
                return this.resizeToWidth / width;
            }
        }
        else if (this.resizeToHeight > 0) {
            if (!this.onlyScaleDown || height > this.resizeToHeight) {
                return this.resizeToHeight / height;
            }
        }
        return 1;
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    ImageCropperComponent.prototype.getClientX = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return (event.touches && event.touches[0] ? event.touches[0].clientX : event.clientX) || 0;
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    ImageCropperComponent.prototype.getClientY = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return (event.touches && event.touches[0] ? event.touches[0].clientY : event.clientY) || 0;
    };
    /** @nocollapse */
    ImageCropperComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    ImageCropperComponent.propDecorators = {
        sourceImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['sourceImage', { static: false },] }],
        imageChangedEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        imageBase64: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        imageFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        format: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maintainAspectRatio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        transform: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        aspectRatio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        resizeToWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        resizeToHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cropperMinWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cropperMinHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        canvasRotation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        initialStepSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        roundCropper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onlyScaleDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        imageQuality: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        autoCrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        backgroundColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        containWithinAspectRatio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cropper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        alignImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.text-align',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.disabled',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        imageCropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        startCropImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        imageLoaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        cropperReady: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        loadImageFailed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:resize',] }],
        moveImg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:mousemove', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:touchmove', ['$event'],] }],
        moveStop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:mouseup',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:touchend',] }]
    };
ImageCropperComponent.ɵfac = function ImageCropperComponent_Factory(t) { return new (t || ImageCropperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
ImageCropperComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageCropperComponent, selectors: [["image-cropper"]], viewQuery: function ImageCropperComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sourceImage = _t.first);
    } }, hostVars: 4, hostBindings: function ImageCropperComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function ImageCropperComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("mousemove", function ImageCropperComponent_mousemove_HostBindingHandler($event) { return ctx.moveImg($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("touchmove", function ImageCropperComponent_touchmove_HostBindingHandler($event) { return ctx.moveImg($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("mouseup", function ImageCropperComponent_mouseup_HostBindingHandler() { return ctx.moveStop(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("touchend", function ImageCropperComponent_touchend_HostBindingHandler() { return ctx.moveStop(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx.alignImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.disabled);
    } }, inputs: { format: "format", maintainAspectRatio: "maintainAspectRatio", transform: "transform", aspectRatio: "aspectRatio", resizeToWidth: "resizeToWidth", resizeToHeight: "resizeToHeight", cropperMinWidth: "cropperMinWidth", cropperMinHeight: "cropperMinHeight", canvasRotation: "canvasRotation", initialStepSize: "initialStepSize", roundCropper: "roundCropper", onlyScaleDown: "onlyScaleDown", imageQuality: "imageQuality", autoCrop: "autoCrop", containWithinAspectRatio: "containWithinAspectRatio", cropper: "cropper", alignImage: "alignImage", disabled: "disabled", imageChangedEvent: "imageChangedEvent", imageBase64: "imageBase64", imageFile: "imageFile", backgroundColor: "backgroundColor" }, outputs: { imageCropped: "imageCropped", startCropImage: "startCropImage", imageLoaded: "imageLoaded", cropperReady: "cropperReady", loadImageFailed: "loadImageFailed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 10, consts: [["class", "source-image", 3, "src", "visibility", "transform", "load", 4, "ngIf"], [1, "overlay"], ["class", "cropper", "tabindex", "0", 3, "rounded", "top", "left", "width", "height", "margin-left", "visibility", "keydown", 4, "ngIf"], [1, "source-image", 3, "src", "load"], ["sourceImage", ""], ["tabindex", "0", 1, "cropper", 3, "keydown"], [1, "move", 3, "mousedown", "touchstart"], [1, "resize", "topleft", 3, "mousedown", "touchstart"], [1, "square"], [1, "resize", "top"], [1, "resize", "topright", 3, "mousedown", "touchstart"], [1, "resize", "right"], [1, "resize", "bottomright", 3, "mousedown", "touchstart"], [1, "resize", "bottom"], [1, "resize", "bottomleft", 3, "mousedown", "touchstart"], [1, "resize", "left"], [1, "resize-bar", "top", 3, "mousedown", "touchstart"], [1, "resize-bar", "right", 3, "mousedown", "touchstart"], [1, "resize-bar", "bottom", 3, "mousedown", "touchstart"], [1, "resize-bar", "left", 3, "mousedown", "touchstart"]], template: function ImageCropperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImageCropperComponent_img_1_Template, 2, 5, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ImageCropperComponent_div_3_Template, 23, 14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.imageVisible && ctx.backgroundColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.safeImgDataUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.maxSize.width, "px")("height", ctx.maxSize.height, "px")("margin-left", ctx.alignImage === "center" ? ctx.marginLeft : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["[_nghost-%COMP%]{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{position:relative;width:100%}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   img.source-image[_ngcontent-%COMP%]{max-width:100%;max-height:100%;transform-origin:center}[_nghost-%COMP%]   .overlay[_ngcontent-%COMP%]{position:absolute;pointer-events:none;touch-action:none;top:0;left:0;outline:#fff solid 100vw}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]{position:absolute;display:flex;color:#53535c;background:0 0;touch-action:none;outline:rgba(255,255,255,.3) solid 100vw}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]:after{position:absolute;content:\"\";top:0;bottom:0;left:0;right:0;pointer-events:none;border:1px dashed;opacity:.75;color:inherit;z-index:1}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]{width:100%;cursor:move;border:1px solid rgba(255,255,255,.5)}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]:focus   .move[_ngcontent-%COMP%]{border-color:#1e90ff;border-width:2px}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%]{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%]   .square[_ngcontent-%COMP%]{display:inline-block;background:#53535c;width:6px;height:6px;border:1px solid rgba(255,255,255,.5);box-sizing:content-box}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.topleft[_ngcontent-%COMP%]{top:-12px;left:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.top[_ngcontent-%COMP%]{top:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.topright[_ngcontent-%COMP%]{top:-12px;right:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.right[_ngcontent-%COMP%]{top:calc(50% - 12px);right:-12px;cursor:ew-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.bottomright[_ngcontent-%COMP%]{bottom:-12px;right:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.bottom[_ngcontent-%COMP%]{bottom:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.bottomleft[_ngcontent-%COMP%]{bottom:-12px;left:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.left[_ngcontent-%COMP%]{top:calc(50% - 12px);left:-12px;cursor:ew-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar[_ngcontent-%COMP%]{position:absolute;z-index:1}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.top[_ngcontent-%COMP%]{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.right[_ngcontent-%COMP%]{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.bottom[_ngcontent-%COMP%]{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.left[_ngcontent-%COMP%]{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]{outline-color:transparent}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]:after{border-radius:100%;box-shadow:0 0 0 100vw rgba(255,255,255,.3)}@media (orientation:portrait){[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]{outline-width:100vh}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]:after{box-shadow:0 0 0 100vh rgba(255,255,255,.3)}}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]{border-radius:100%}.disabled[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar[_ngcontent-%COMP%]{display:none}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageCropperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'image-cropper',
                template: "<div [style.background]=\"imageVisible && backgroundColor\">\n    <img\n        #sourceImage\n        class=\"source-image\"\n        *ngIf=\"safeImgDataUrl\"\n        [src]=\"safeImgDataUrl\"\n        [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\"\n        [style.transform]=\"safeTransformStyle\"\n        (load)=\"imageLoadedInView()\"\n    />\n    <div\n        class=\"overlay\"\n        [style.width.px]=\"maxSize.width\"\n        [style.height.px]=\"maxSize.height\"\n        [style.margin-left]=\"alignImage === 'center' ? marginLeft : null\"\n    ></div>\n    <div class=\"cropper\"\n         *ngIf=\"imageVisible\"\n         [class.rounded]=\"roundCropper\"\n         [style.top.px]=\"cropper.y1\"\n         [style.left.px]=\"cropper.x1\"\n         [style.width.px]=\"cropper.x2 - cropper.x1\"\n         [style.height.px]=\"cropper.y2 - cropper.y1\"\n         [style.margin-left]=\"alignImage === 'center' ? marginLeft : null\"\n         [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\"\n         (keydown)=\"keyboardAccess($event)\"\n         tabindex=\"0\"\n    >\n        <div\n                (mousedown)=\"startMove($event, 'move')\"\n                (touchstart)=\"startMove($event, 'move')\"\n                class=\"move\"\n        >&nbsp;</div>\n        <span\n                class=\"resize topleft\"\n                (mousedown)=\"startMove($event, 'resize', 'topleft')\"\n                (touchstart)=\"startMove($event, 'resize', 'topleft')\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize top\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize topright\"\n                (mousedown)=\"startMove($event, 'resize', 'topright')\"\n                (touchstart)=\"startMove($event, 'resize', 'topright')\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize right\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize bottomright\"\n                (mousedown)=\"startMove($event, 'resize', 'bottomright')\"\n                (touchstart)=\"startMove($event, 'resize', 'bottomright')\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize bottom\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize bottomleft\"\n                (mousedown)=\"startMove($event, 'resize', 'bottomleft')\"\n                (touchstart)=\"startMove($event, 'resize', 'bottomleft')\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize left\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize-bar top\"\n                (mousedown)=\"startMove($event, 'resize', 'top')\"\n                (touchstart)=\"startMove($event, 'resize', 'top')\"\n        ></span>\n        <span\n                class=\"resize-bar right\"\n                (mousedown)=\"startMove($event, 'resize', 'right')\"\n                (touchstart)=\"startMove($event, 'resize', 'right')\"\n        ></span>\n        <span\n                class=\"resize-bar bottom\"\n                (mousedown)=\"startMove($event, 'resize', 'bottom')\"\n                (touchstart)=\"startMove($event, 'resize', 'bottom')\"\n        ></span>\n        <span\n                class=\"resize-bar left\"\n                (mousedown)=\"startMove($event, 'resize', 'left')\"\n                (touchstart)=\"startMove($event, 'resize', 'left')\"\n        ></span>\n    </div>\n</div>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styles: [":host{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host>div{position:relative;width:100%}:host>div img.source-image{max-width:100%;max-height:100%;transform-origin:center}:host .overlay{position:absolute;pointer-events:none;touch-action:none;top:0;left:0;outline:#fff solid 100vw}:host .cropper{position:absolute;display:flex;color:#53535c;background:0 0;touch-action:none;outline:rgba(255,255,255,.3) solid 100vw}:host .cropper:after{position:absolute;content:\"\";top:0;bottom:0;left:0;right:0;pointer-events:none;border:1px dashed;opacity:.75;color:inherit;z-index:1}:host .cropper .move{width:100%;cursor:move;border:1px solid rgba(255,255,255,.5)}:host .cropper:focus .move{border-color:#1e90ff;border-width:2px}:host .cropper .resize{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}:host .cropper .resize .square{display:inline-block;background:#53535c;width:6px;height:6px;border:1px solid rgba(255,255,255,.5);box-sizing:content-box}:host .cropper .resize.topleft{top:-12px;left:-12px;cursor:nwse-resize}:host .cropper .resize.top{top:-12px;left:calc(50% - 12px);cursor:ns-resize}:host .cropper .resize.topright{top:-12px;right:-12px;cursor:nesw-resize}:host .cropper .resize.right{top:calc(50% - 12px);right:-12px;cursor:ew-resize}:host .cropper .resize.bottomright{bottom:-12px;right:-12px;cursor:nwse-resize}:host .cropper .resize.bottom{bottom:-12px;left:calc(50% - 12px);cursor:ns-resize}:host .cropper .resize.bottomleft{bottom:-12px;left:-12px;cursor:nesw-resize}:host .cropper .resize.left{top:calc(50% - 12px);left:-12px;cursor:ew-resize}:host .cropper .resize-bar{position:absolute;z-index:1}:host .cropper .resize-bar.top{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}:host .cropper .resize-bar.right{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}:host .cropper .resize-bar.bottom{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}:host .cropper .resize-bar.left{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}:host .cropper.rounded{outline-color:transparent}:host .cropper.rounded:after{border-radius:100%;box-shadow:0 0 0 100vw rgba(255,255,255,.3)}@media (orientation:portrait){:host .cropper{outline-width:100vh}:host .cropper.rounded:after{box-shadow:0 0 0 100vh rgba(255,255,255,.3)}}:host .cropper.rounded .move{border-radius:100%}:host.disabled .cropper .move,:host.disabled .cropper .resize,:host.disabled .cropper .resize-bar{display:none}"]
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { format: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maintainAspectRatio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], transform: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], aspectRatio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], resizeToWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], resizeToHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cropperMinWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cropperMinHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], canvasRotation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], initialStepSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], roundCropper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onlyScaleDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], imageQuality: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], autoCrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], containWithinAspectRatio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cropper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], alignImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.text-align']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.disabled']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], imageCropped: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], startCropImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], imageLoaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cropperReady: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], loadImageFailed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], imageChangedEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], imageBase64: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], imageFile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize']
        }], moveImg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:mousemove', ['$event']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:touchmove', ['$event']]
        }], moveStop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:mouseup']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:touchend']
        }], sourceImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sourceImage', { static: false }]
        }], backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return ImageCropperComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ImageCropperModule = /** @class */ (function () {
    function ImageCropperModule() {
    }
ImageCropperModule.ɵfac = function ImageCropperModule_Factory(t) { return new (t || ImageCropperModule)(); };
ImageCropperModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ImageCropperModule });
ImageCropperModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageCropperModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [
                    ImageCropperComponent
                ],
                exports: [
                    ImageCropperComponent
                ]
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ImageCropperModule, { declarations: function () { return [ImageCropperComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [ImageCropperComponent]; } }); })();
    return ImageCropperModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} base64Image
 * @return {?}
 */
function base64ToFile(base64Image) {
    /** @type {?} */
    var split = base64Image.split(',');
    /** @type {?} */
    var type = split[0].replace('data:', '').replace(';base64', '');
    /** @type {?} */
    var byteString = atob(split[1]);
    /** @type {?} */
    var ab = new ArrayBuffer(byteString.length);
    /** @type {?} */
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i += 1) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: type });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-image-cropper.js.map

/***/ }),

/***/ "./node_modules/ngx-image-cropper/node_modules/tslib/tslib.es6.js":
/*!************************************************************************!*\
  !*** ./node_modules/ngx-image-cropper/node_modules/tslib/tslib.es6.js ***!
  \************************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/ngx-page-scroll-core/__ivy_ngcc__/fesm5/ngx-page-scroll-core.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/ngx-page-scroll-core/__ivy_ngcc__/fesm5/ngx-page-scroll-core.js ***!
  \**************************************************************************************/
/*! exports provided: NGXPS_CONFIG, NgxPageScrollCoreModule, PageScrollInstance, PageScrollService, defaultPageScrollConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGXPS_CONFIG", function() { return NGXPS_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPageScrollCoreModule", function() { return NgxPageScrollCoreModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageScrollInstance", function() { return PageScrollInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageScrollService", function() { return PageScrollService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultPageScrollConfig", function() { return defaultPageScrollConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/ngx-page-scroll-core/node_modules/tslib/tslib.es6.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An Interface specifying the possible options to be passed into the newInstance() factory method
 * @record
 */

function PageScrollOptions() { }
if (false) {}
/**
 * Represents a scrolling action
 */
var  /**
 * Represents a scrolling action
 */
PageScrollInstance = /** @class */ (function () {
    /**
     * Private constructor, requires the properties assumed to be the bare minimum.
     * Use the factory methods to create instances:
     *      {@link PageScrollService#create}
     */
    function PageScrollInstance(pageScrollOptions) {
        /**
         * These properties will be set/manipulated if the scroll animation starts
         */
        /* The initial value of the scrollTop or scrollLeft position when the animation starts */
        this.startScrollPosition = 0;
        /* Whether an interrupt listener is attached to the body or not */
        this.interruptListenersAttached = false;
        /* References to the timer instance that is used to perform the scroll animation to be
           able to clear it on animation end*/
        this.timer = null;
        if (!pageScrollOptions.scrollViews || pageScrollOptions.scrollViews.length === 0) {
            pageScrollOptions.scrollViews = [
                pageScrollOptions.document.documentElement,
                pageScrollOptions.document.body,
                pageScrollOptions.document.body.parentNode,
            ];
            this.isInlineScrolling = false;
        }
        else {
            this.isInlineScrolling = true;
        }
        this.pageScrollOptions = pageScrollOptions;
    }
    /**
     * @private
     * @param {?} pageScrollOptions
     * @param {?} scrollTargetElement
     * @return {?}
     */
    PageScrollInstance.getScrollingTargetPosition = /**
     * @private
     * @param {?} pageScrollOptions
     * @param {?} scrollTargetElement
     * @return {?}
     */
    function (pageScrollOptions, scrollTargetElement) {
        /** @type {?} */
        var body = pageScrollOptions.document.body;
        /** @type {?} */
        var docEl = pageScrollOptions.document.documentElement;
        /** @type {?} */
        var windowPageYOffset = pageScrollOptions.document.defaultView &&
            pageScrollOptions.document.defaultView.pageYOffset || undefined;
        /** @type {?} */
        var windowPageXOffset = pageScrollOptions.document.defaultView &&
            pageScrollOptions.document.defaultView.pageXOffset || undefined;
        /** @type {?} */
        var scrollTop = windowPageYOffset || docEl.scrollTop || body.scrollTop;
        /** @type {?} */
        var scrollLeft = windowPageXOffset || docEl.scrollLeft || body.scrollLeft;
        /** @type {?} */
        var clientTop = docEl.clientTop || body.clientTop || 0;
        /** @type {?} */
        var clientLeft = docEl.clientLeft || body.clientLeft || 0;
        if (scrollTargetElement === undefined || scrollTargetElement === null) {
            // No element found, so return the current position to not cause any change in scroll position
            return { top: scrollTop, left: scrollLeft };
        }
        /** @type {?} */
        var box = scrollTargetElement.getBoundingClientRect();
        /** @type {?} */
        var top = box.top + scrollTop - clientTop;
        /** @type {?} */
        var left = box.left + scrollLeft - clientLeft;
        return { top: Math.round(top), left: Math.round(left) };
    };
    /**
     * @private
     * @param {?} pageScrollOptions
     * @param {?} scrollTargetElement
     * @return {?}
     */
    PageScrollInstance.getInlineScrollingTargetPosition = /**
     * @private
     * @param {?} pageScrollOptions
     * @param {?} scrollTargetElement
     * @return {?}
     */
    function (pageScrollOptions, scrollTargetElement) {
        /** @type {?} */
        var position = { top: scrollTargetElement.offsetTop, left: scrollTargetElement.offsetLeft };
        if (pageScrollOptions.advancedInlineOffsetCalculation && pageScrollOptions.scrollViews.length === 1) {
            /** @type {?} */
            var accumulatedParentsPos = { top: 0, left: 0 };
            // not named window to make sure we're not getting the global window variable by accident
            /** @type {?} */
            var theWindow = scrollTargetElement.ownerDocument.defaultView;
            /** @type {?} */
            var parentFound = false;
            // Start parent is the immediate parent
            /** @type {?} */
            var parent_1 = scrollTargetElement.parentElement;
            // Iterate upwards all parents
            while (!parentFound && parent_1 !== undefined && parent_1 !== null) {
                if (theWindow.getComputedStyle(parent_1).getPropertyValue('position') === 'relative') {
                    accumulatedParentsPos.top += parent_1.offsetTop;
                    accumulatedParentsPos.left += parent_1.offsetLeft;
                }
                // Next iteration
                parent_1 = parent_1.parentElement;
                parentFound = parent_1 === pageScrollOptions.scrollViews[0];
            }
            if (parentFound) {
                // Only use the results if we found the parent, otherwise we accumulated too much anyway
                position.top += accumulatedParentsPos.top;
                position.left += accumulatedParentsPos.left;
            }
            else {
                /* TODO Uncomment
                if (PageScrollConfig._logLevel >= 2 || (PageScrollConfig._logLevel >= 1 && isDevMode())) {
                  console.warn('Unable to find nested scrolling targets parent!');
                }*/
            }
        }
        return position;
    };
    /**
     * @param {?} scrollingView
     * @return {?}
     */
    PageScrollInstance.prototype.getScrollPropertyValue = /**
     * @param {?} scrollingView
     * @return {?}
     */
    function (scrollingView) {
        if (!this.pageScrollOptions.verticalScrolling) {
            return scrollingView.scrollLeft;
        }
        return scrollingView.scrollTop;
    };
    /**
     * @param {?} scrollingView
     * @return {?}
     */
    PageScrollInstance.prototype.getScrollClientPropertyValue = /**
     * @param {?} scrollingView
     * @return {?}
     */
    function (scrollingView) {
        if (!this.pageScrollOptions.verticalScrolling) {
            return scrollingView.clientWidth;
        }
        return scrollingView.clientHeight;
    };
    /**
     * Extract the exact location of the scrollTarget element.
     *
     * Extract the scrollTarget HTMLElement from the given PageScrollTarget object. The latter one may be
     * a string like "#heading2", then this method returns the corresponding DOM element for that id.
     *
     */
    /**
     * Extract the exact location of the scrollTarget element.
     *
     * Extract the scrollTarget HTMLElement from the given PageScrollTarget object. The latter one may be
     * a string like "#heading2", then this method returns the corresponding DOM element for that id.
     *
     * @return {?}
     */
    PageScrollInstance.prototype.extractScrollTargetPosition = /**
     * Extract the exact location of the scrollTarget element.
     *
     * Extract the scrollTarget HTMLElement from the given PageScrollTarget object. The latter one may be
     * a string like "#heading2", then this method returns the corresponding DOM element for that id.
     *
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scrollTargetElement = this.getScrollTargetElement();
        if (scrollTargetElement === null || scrollTargetElement === undefined) {
            // Scroll target not found
            return { top: NaN, left: NaN };
        }
        if (this.isInlineScrolling) {
            return PageScrollInstance.getInlineScrollingTargetPosition(this.pageScrollOptions, scrollTargetElement);
        }
        return PageScrollInstance.getScrollingTargetPosition(this.pageScrollOptions, scrollTargetElement);
    };
    /**
     * Get the top offset of the scroll animation.
     * This automatically takes the offset location of the scrolling container/scrolling view
     * into account (for nested/inline scrolling).
     */
    /**
     * Get the top offset of the scroll animation.
     * This automatically takes the offset location of the scrolling container/scrolling view
     * into account (for nested/inline scrolling).
     * @return {?}
     */
    PageScrollInstance.prototype.getCurrentOffset = /**
     * Get the top offset of the scroll animation.
     * This automatically takes the offset location of the scrolling container/scrolling view
     * into account (for nested/inline scrolling).
     * @return {?}
     */
    function () {
        return this.pageScrollOptions.scrollOffset;
    };
    /**
     * Sets the "scrollTop" or "scrollLeft" property for all scrollViews to the provided value
     * @return true if at least for one ScrollTopSource the scrollTop/scrollLeft value could be set and it kept the new value.
     *          false if it failed for all ScrollViews, meaning that we should stop the animation
     *          (probably because we're at the end of the scrolling region)
     */
    /**
     * Sets the "scrollTop" or "scrollLeft" property for all scrollViews to the provided value
     * @param {?} position
     * @return {?} true if at least for one ScrollTopSource the scrollTop/scrollLeft value could be set and it kept the new value.
     *          false if it failed for all ScrollViews, meaning that we should stop the animation
     *          (probably because we're at the end of the scrolling region)
     */
    PageScrollInstance.prototype.setScrollPosition = /**
     * Sets the "scrollTop" or "scrollLeft" property for all scrollViews to the provided value
     * @param {?} position
     * @return {?} true if at least for one ScrollTopSource the scrollTop/scrollLeft value could be set and it kept the new value.
     *          false if it failed for all ScrollViews, meaning that we should stop the animation
     *          (probably because we're at the end of the scrolling region)
     */
    function (position) {
        var _this = this;
        // Set the new scrollTop/scrollLeft to all scrollViews elements
        return this.pageScrollOptions.scrollViews.reduce((/**
         * @param {?} oneAlreadyWorked
         * @param {?} scrollingView
         * @return {?}
         */
        function (oneAlreadyWorked, scrollingView) {
            /** @type {?} */
            var startScrollPropertyValue = _this.getScrollPropertyValue(scrollingView);
            if (scrollingView && startScrollPropertyValue !== undefined && startScrollPropertyValue !== null) {
                /** @type {?} */
                var scrollDistance = Math.abs(startScrollPropertyValue - position);
                // The movement we need to perform is less than 2px
                // This we consider a small movement which some browser may not perform when
                // changing the scrollTop/scrollLeft property
                // Thus in this cases we do not stop the scroll animation, although setting the
                // scrollTop/scrollLeft value "fails"
                /** @type {?} */
                var isSmallMovement = scrollDistance < _this.pageScrollOptions._minScrollDistance;
                if (!_this.pageScrollOptions.verticalScrolling) {
                    scrollingView.scrollLeft = position;
                }
                else {
                    scrollingView.scrollTop = position;
                }
                // Return true if setting the new scrollTop/scrollLeft value worked
                // We consider that it worked if the new scrollTop/scrollLeft value is closer to the
                // desired scrollTop/scrollLeft than before (it might not be exactly the value we
                // set due to dpi or rounding irregularities)
                if (isSmallMovement || scrollDistance > Math.abs(_this.getScrollPropertyValue(scrollingView) - position)) {
                    return true;
                }
            }
            return oneAlreadyWorked;
        }), false);
    };
    /**
     * Trigger firing a animation finish event
     * @param value Whether the animation finished at the target (true) or got interrupted (false)
     */
    /**
     * Trigger firing a animation finish event
     * @param {?} value Whether the animation finished at the target (true) or got interrupted (false)
     * @return {?}
     */
    PageScrollInstance.prototype.fireEvent = /**
     * Trigger firing a animation finish event
     * @param {?} value Whether the animation finished at the target (true) or got interrupted (false)
     * @return {?}
     */
    function (value) {
        if (this.pageScrollOptions.scrollFinishListener) {
            this.pageScrollOptions.scrollFinishListener.emit(value);
        }
    };
    /**
     * Attach the interrupt listeners to the PageScrollInstance body. The given interruptReporter
     * will be called if any of the attached events is fired.
     *
     * Possibly attached interruptListeners are automatically removed from the body before the new one will be attached.
     */
    /**
     * Attach the interrupt listeners to the PageScrollInstance body. The given interruptReporter
     * will be called if any of the attached events is fired.
     *
     * Possibly attached interruptListeners are automatically removed from the body before the new one will be attached.
     * @param {?} interruptReporter
     * @return {?}
     */
    PageScrollInstance.prototype.attachInterruptListeners = /**
     * Attach the interrupt listeners to the PageScrollInstance body. The given interruptReporter
     * will be called if any of the attached events is fired.
     *
     * Possibly attached interruptListeners are automatically removed from the body before the new one will be attached.
     * @param {?} interruptReporter
     * @return {?}
     */
    function (interruptReporter) {
        var _this = this;
        if (this.interruptListenersAttached) {
            // Detach possibly existing listeners first
            this.detachInterruptListeners();
        }
        this.interruptListener = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            interruptReporter.report(event, _this);
        });
        this.pageScrollOptions.interruptEvents.forEach((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.pageScrollOptions.document.body.addEventListener(event, _this.interruptListener); }));
        this.interruptListenersAttached = true;
    };
    /**
     * Remove event listeners from the body and stop listening for events that might be treated as "animation
     * interrupt" events.
     */
    /**
     * Remove event listeners from the body and stop listening for events that might be treated as "animation
     * interrupt" events.
     * @return {?}
     */
    PageScrollInstance.prototype.detachInterruptListeners = /**
     * Remove event listeners from the body and stop listening for events that might be treated as "animation
     * interrupt" events.
     * @return {?}
     */
    function () {
        var _this = this;
        this.pageScrollOptions.interruptEvents.forEach((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.pageScrollOptions.document.body.removeEventListener(event, _this.interruptListener); }));
        this.interruptListenersAttached = false;
    };
    /**
     * @private
     * @return {?}
     */
    PageScrollInstance.prototype.getScrollTargetElement = /**
     * @private
     * @return {?}
     */
    function () {
        if (typeof this.pageScrollOptions.scrollTarget === 'string') {
            /** @type {?} */
            var targetSelector = (/** @type {?} */ (this.pageScrollOptions.scrollTarget));
            if (targetSelector.match(/^#[^\s]+$/g) !== null) {
                // It's an id selector and a valid id, as it does not contain any white space characters
                return this.pageScrollOptions.document.getElementById(targetSelector.substr(1));
            }
            return (/** @type {?} */ (this.pageScrollOptions.document.querySelector(targetSelector)));
        }
        return (/** @type {?} */ (this.pageScrollOptions.scrollTarget));
    };
    return PageScrollInstance;
}());
if (false) {}
/**
 * An Interface a listener should implement to be notified about possible interrupt events
 * that happened due to user interaction while a scroll animation takes place.
 *
 * The PageScrollService provides an implementation to a PageScrollInstance to be notified
 * about scroll animation interrupts and stop related animations.
 * @record
 */
function InterruptReporter() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NGXPS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('ngxps_config');
var ɵ0 = /**
 * @param {?} t
 * @param {?} b
 * @param {?} c
 * @param {?} d
 * @return {?}
 */
function (t, b, c, d) {
    // Linear easing
    return c * t / d + b;
};
/** @type {?} */
var defaultPageScrollConfig = {
    _interval: 10,
    _minScrollDistance: 2,
    _logLevel: 1,
    namespace: 'default',
    verticalScrolling: true,
    duration: 1250,
    scrollOffset: 0,
    advancedInlineOffsetCalculation: false,
    interruptEvents: ['mousedown', 'wheel', 'DOMMouseScroll', 'mousewheel', 'keyup', 'touchmove'],
    interruptKeys: [' ', 'Escape', 'Tab', 'Enter', 'PageUp', 'PageDown', 'Home', 'End', 'ArrowUp', 'ArrowRight', 'ArrowLeft', 'ArrowDown'],
    interruptible: true,
    scrollInView: true,
    easingLogic: (ɵ0),
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PageScrollService = /** @class */ (function () {
    function PageScrollService(customConfig) {
        var _this = this;
        this.runningInstances = [];
        this.onInterrupted = {
            report: (/**
             * @param {?} event
             * @param {?} pageScrollInstance
             * @return {?}
             */
            function (event, pageScrollInstance) {
                if (!pageScrollInstance.pageScrollOptions.interruptible) {
                    // Non-interruptible anyway, so do not stop anything
                    return;
                }
                /** @type {?} */
                var shouldStop = true;
                if (event.type === 'keyup') {
                    // Only stop if specific keys have been pressed, for all others don't stop anything
                    if (_this.config.interruptKeys.indexOf(((/** @type {?} */ (event))).key) === -1) {
                        // The pressed key is not in the list of interrupting keys
                        shouldStop = false;
                    }
                }
                else if (event.type === 'mousedown') {
                    // For mousedown events we only stop the scroll animation of the mouse has
                    // been clicked inside the scrolling container
                    if (!pageScrollInstance.pageScrollOptions.scrollViews.some((/**
                     * @param {?} scrollingView
                     * @return {?}
                     */
                    function (scrollingView) { return scrollingView.contains((/** @type {?} */ (event.target))); }))) {
                        // Mouse clicked an element which is not inside any of the the scrolling containers
                        shouldStop = false;
                    }
                }
                if (shouldStop) {
                    _this.stopAll(pageScrollInstance.pageScrollOptions.namespace);
                }
            }),
        };
        this.config = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, defaultPageScrollConfig, customConfig);
        if (PageScrollService.instanceCounter > 0 &&
            (this.config._logLevel >= 2 || (this.config._logLevel >= 1 && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()))) {
            console.warn('An instance of PageScrollService already exists, usually ' +
                'including one provider should be enough, so double check.');
        }
        PageScrollService.instanceCounter++;
    }
    /**
     * @private
     * @param {?} interrupted
     * @param {?} pageScrollInstance
     * @return {?}
     */
    PageScrollService.prototype.stopInternal = /**
     * @private
     * @param {?} interrupted
     * @param {?} pageScrollInstance
     * @return {?}
     */
    function (interrupted, pageScrollInstance) {
        /** @type {?} */
        var index = this.runningInstances.indexOf(pageScrollInstance);
        if (index >= 0) {
            this.runningInstances.splice(index, 1);
        }
        if (pageScrollInstance.interruptListenersAttached) {
            pageScrollInstance.detachInterruptListeners();
        }
        if (pageScrollInstance.timer) {
            // Clear/Stop the timer
            clearInterval(pageScrollInstance.timer);
            // Clear the reference to this timer
            pageScrollInstance.timer = undefined;
            pageScrollInstance.fireEvent(!interrupted);
            return true;
        }
        return false;
    };
    /**
     * @param {?} options
     * @return {?}
     */
    PageScrollService.prototype.create = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return new PageScrollInstance((/** @type {?} */ (Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, this.config, options))));
    };
    /**
     * Start a scroll animation. All properties of the animation are stored in the given {@link PageScrollInstance} object.
     *
     * This is the core functionality of the whole library.
     */
    // tslint:disable-next-line:cyclomatic-complexity
    /**
     * Start a scroll animation. All properties of the animation are stored in the given {\@link PageScrollInstance} object.
     *
     * This is the core functionality of the whole library.
     * @param {?} pageScrollInstance
     * @return {?}
     */
    // tslint:disable-next-line:cyclomatic-complexity
    PageScrollService.prototype.start = /**
     * Start a scroll animation. All properties of the animation are stored in the given {\@link PageScrollInstance} object.
     *
     * This is the core functionality of the whole library.
     * @param {?} pageScrollInstance
     * @return {?}
     */
    // tslint:disable-next-line:cyclomatic-complexity
    function (pageScrollInstance) {
        var _this = this;
        // Merge the default options in the pageScrollInstance options
        pageScrollInstance.pageScrollOptions = (/** @type {?} */ (Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, this.config, pageScrollInstance.pageScrollOptions)));
        // Stop all possibly running scroll animations in the same namespace
        this.stopAll(pageScrollInstance.pageScrollOptions.namespace);
        if (pageScrollInstance.pageScrollOptions.scrollViews === null || pageScrollInstance.pageScrollOptions.scrollViews.length === 0) {
            // No scrollViews specified, thus we can't animate anything
            if (this.config._logLevel >= 2 || (this.config._logLevel >= 1 && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])())) {
                console.warn('No scrollViews specified, thus ngx-page-scroll does not know which DOM elements to scroll');
            }
            return;
        }
        /** @type {?} */
        var startScrollPositionFound = false;
        /** @type {?} */
        var scrollRange = pageScrollInstance.getScrollClientPropertyValue(pageScrollInstance.pageScrollOptions.scrollViews[0]);
        // Reset start scroll position to 0. If any of the scrollViews has a different one, it will be extracted next
        pageScrollInstance.startScrollPosition = 0;
        // Get the start scroll position from the scrollViews (e.g. if the user already scrolled down the content)
        pageScrollInstance.pageScrollOptions.scrollViews.forEach((/**
         * @param {?} scrollingView
         * @return {?}
         */
        function (scrollingView) {
            if (scrollingView === undefined || scrollingView === null) {
                return;
            }
            // Get the scrollTop or scrollLeft value of the first scrollingView that returns a value for its "scrollTop"
            // or "scrollLeft" property that is not undefined and unequal to 0
            /** @type {?} */
            var scrollPosition = pageScrollInstance.getScrollPropertyValue(scrollingView);
            if (!startScrollPositionFound && scrollPosition) {
                // We found a scrollingView that does not have scrollTop or scrollLeft 0
                // Return the scroll position value, as this will be our startScrollPosition
                pageScrollInstance.startScrollPosition = scrollPosition;
                startScrollPositionFound = true;
                // Remember te scrollRange of this scrollingView
                scrollRange = pageScrollInstance.getScrollClientPropertyValue(scrollingView);
            }
        }));
        /** @type {?} */
        var pageScrollOffset = pageScrollInstance.getCurrentOffset();
        // Calculate the target position that the scroll animation should go to
        /** @type {?} */
        var scrollTargetPosition = pageScrollInstance.extractScrollTargetPosition();
        pageScrollInstance.targetScrollPosition = Math.round((pageScrollInstance.pageScrollOptions.verticalScrolling ? scrollTargetPosition.top : scrollTargetPosition.left) - pageScrollOffset);
        // Calculate the distance we need to go in total
        pageScrollInstance.distanceToScroll = pageScrollInstance.targetScrollPosition - pageScrollInstance.startScrollPosition;
        if (isNaN(pageScrollInstance.distanceToScroll)) {
            // We weren't able to find the target position, maybe the element does not exist?
            if (this.config._logLevel >= 2 || (this.config._logLevel >= 1 && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])())) {
                console.log('Scrolling not possible, as we can\'t find the specified target');
            }
            pageScrollInstance.fireEvent(false);
            return;
        }
        // We're at the final destination already
        // OR we need to scroll down but are already at the end
        // OR we need to scroll up but are at the top already
        /** @type {?} */
        var allReadyAtDestination = Math.abs(pageScrollInstance.distanceToScroll) < pageScrollInstance.pageScrollOptions._minScrollDistance;
        // Check how long we need to scroll if a speed option is given
        // Default executionDuration is the specified duration
        pageScrollInstance.executionDuration = pageScrollInstance.pageScrollOptions.duration;
        // Maybe we need to pay attention to the speed option?
        if ((pageScrollInstance.pageScrollOptions.speed !== undefined && pageScrollInstance.pageScrollOptions.speed !== null) &&
            (pageScrollInstance.pageScrollOptions.duration === undefined || pageScrollInstance.pageScrollOptions.duration === null)) {
            // Speed option is set and no duration => calculate duration based on speed and scroll distance
            pageScrollInstance.executionDuration =
                Math.abs(pageScrollInstance.distanceToScroll) / pageScrollInstance.pageScrollOptions.speed * 1000;
        }
        // We should go there directly, as our "animation" would have one big step
        // only anyway and this way we save the interval stuff
        /** @type {?} */
        var tooShortInterval = pageScrollInstance.executionDuration <= pageScrollInstance.pageScrollOptions._interval;
        if (allReadyAtDestination || tooShortInterval) {
            if (this.config._logLevel >= 2 || (this.config._logLevel >= 1 && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])())) {
                if (allReadyAtDestination) {
                    console.log('Scrolling not possible, as we can\'t get any closer to the destination');
                }
                else {
                    console.log('Scroll duration shorter that interval length, jumping to target');
                }
            }
            pageScrollInstance.setScrollPosition(pageScrollInstance.targetScrollPosition);
            pageScrollInstance.fireEvent(true);
            return;
        }
        if (!pageScrollInstance.pageScrollOptions.scrollInView) {
            /** @type {?} */
            var alreadyInView = pageScrollInstance.targetScrollPosition > pageScrollInstance.startScrollPosition &&
                pageScrollInstance.targetScrollPosition <= pageScrollInstance.startScrollPosition + scrollRange;
            if (alreadyInView) {
                if (this.config._logLevel >= 2 || (this.config._logLevel >= 1 && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])())) {
                    console.log('Not scrolling, as target already in view');
                }
                pageScrollInstance.fireEvent(true);
                return;
            }
        }
        // Register the interrupt listeners if we want an interruptible scroll animation
        if (pageScrollInstance.pageScrollOptions.interruptible) {
            pageScrollInstance.attachInterruptListeners(this.onInterrupted);
        }
        // Let's get started, get the start time...
        pageScrollInstance.startTime = new Date().getTime();
        // .. and calculate the end time (when we need to finish at last)
        pageScrollInstance.endTime = pageScrollInstance.startTime + pageScrollInstance.executionDuration;
        pageScrollInstance.timer = setInterval((/**
         * @param {?} _pageScrollInstance
         * @return {?}
         */
        function (_pageScrollInstance) {
            // Take the current time
            /** @type {?} */
            var currentTime = new Date().getTime();
            // Determine the new scroll position
            /** @type {?} */
            var newScrollPosition;
            /** @type {?} */
            var stopNow = false;
            if (_pageScrollInstance.endTime <= currentTime) {
                // We're over the time already, so go the targetScrollPosition (aka destination)
                newScrollPosition = _pageScrollInstance.targetScrollPosition;
                stopNow = true;
            }
            else {
                // Calculate the scroll position based on the current time using the easing function
                newScrollPosition = Math.round(_pageScrollInstance.pageScrollOptions.easingLogic(currentTime - _pageScrollInstance.startTime, _pageScrollInstance.startScrollPosition, _pageScrollInstance.distanceToScroll, _pageScrollInstance.executionDuration));
            }
            if (_this.config._logLevel >= 5 && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()) {
                console.warn('Scroll Position: ' + newScrollPosition);
            }
            // Set the new scrollPosition to all scrollViews elements
            if (!_pageScrollInstance.setScrollPosition(newScrollPosition)) {
                // Setting the new scrollTop/scrollLeft value failed for all ScrollViews
                // early stop the scroll animation to save resources
                stopNow = true;
            }
            // At the end do the internal stop maintenance and fire the pageScrollFinish event
            // (otherwise the event might arrive at "too early")
            if (stopNow) {
                _this.stopInternal(false, _pageScrollInstance);
            }
        }), this.config._interval, pageScrollInstance);
        // Register the instance as running one
        this.runningInstances.push(pageScrollInstance);
    };
    /**
     * @param {?} options
     * @return {?}
     */
    PageScrollService.prototype.scroll = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.start(this.create(options));
    };
    /**
     * Stop all running scroll animations. Optionally limit to stop only the ones of specific namespace.
     */
    /**
     * Stop all running scroll animations. Optionally limit to stop only the ones of specific namespace.
     * @param {?=} namespace
     * @return {?}
     */
    PageScrollService.prototype.stopAll = /**
     * Stop all running scroll animations. Optionally limit to stop only the ones of specific namespace.
     * @param {?=} namespace
     * @return {?}
     */
    function (namespace) {
        if (this.runningInstances.length > 0) {
            /** @type {?} */
            var stoppedSome = false;
            for (var i = 0; i < this.runningInstances.length; ++i) {
                /** @type {?} */
                var pageScrollInstance = this.runningInstances[i];
                if (!namespace || pageScrollInstance.pageScrollOptions.namespace === namespace) {
                    stoppedSome = true;
                    this.stopInternal(true, pageScrollInstance);
                    // Decrease the counter, as we removed an item from the array we iterate over
                    i--;
                }
            }
            return stoppedSome;
        }
        return false;
    };
    /**
     * @param {?} pageScrollInstance
     * @return {?}
     */
    PageScrollService.prototype.stop = /**
     * @param {?} pageScrollInstance
     * @return {?}
     */
    function (pageScrollInstance) {
        return this.stopInternal(true, pageScrollInstance);
    };
    PageScrollService.instanceCounter = 0;
    /** @nocollapse */
    PageScrollService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NGXPS_CONFIG,] }] }
    ]; };
    /** @nocollapse */ PageScrollService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function PageScrollService_Factory() { return new PageScrollService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(NGXPS_CONFIG)); }, token: PageScrollService, providedIn: "root" });
PageScrollService.ɵfac = function PageScrollService_Factory(t) { return new (t || PageScrollService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NGXPS_CONFIG)); };
PageScrollService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PageScrollService, factory: function (t) { return PageScrollService.ɵfac(t); }, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageScrollService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [NGXPS_CONFIG]
            }] }]; }, null); })();
    return PageScrollService;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ɵ0$1 = {};
var NgxPageScrollCoreModule = /** @class */ (function () {
    function NgxPageScrollCoreModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    NgxPageScrollCoreModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: NgxPageScrollCoreModule,
            providers: [PageScrollService, { provide: NGXPS_CONFIG, useValue: config }],
        };
    };
NgxPageScrollCoreModule.ɵfac = function NgxPageScrollCoreModule_Factory(t) { return new (t || NgxPageScrollCoreModule)(); };
NgxPageScrollCoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxPageScrollCoreModule });
NgxPageScrollCoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
        PageScrollService,
        { provide: NGXPS_CONFIG, useValue: ɵ0$1 },
    ] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxPageScrollCoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [
                    PageScrollService,
                    { provide: NGXPS_CONFIG, useValue: ɵ0$1 },
                ]
            }]
    }], function () { return []; }, null); })();
    return NgxPageScrollCoreModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function PageScrollConfig() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-page-scroll-core.js.map

/***/ }),

/***/ "./node_modules/ngx-page-scroll-core/node_modules/tslib/tslib.es6.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ngx-page-scroll-core/node_modules/tslib/tslib.es6.js ***!
  \***************************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/ngx-textarea-autosize/__ivy_ngcc__/fesm5/ngx-textarea-autosize.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/ngx-textarea-autosize/__ivy_ngcc__/fesm5/ngx-textarea-autosize.js ***!
  \****************************************************************************************/
/*! exports provided: TextareaAutosizeModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaAutosizeModule", function() { return TextareaAutosizeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return AutosizeDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/ngx-textarea-autosize/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





var AutosizeDirective = /** @class */ (function () {
    function AutosizeDirective(elem, renderer) {
        this.elem = elem;
        this.renderer = renderer;
        this.overflow = 'hidden';
        this.rows = 1;
    }
    AutosizeDirective.prototype.ngAfterViewInit = function () {
        this.resize();
    };
    AutosizeDirective.prototype.ngDoCheck = function () {
        this.resize();
    };
    AutosizeDirective.prototype.resize = function () {
        var textarea = this.elem.nativeElement;
        // Calculate border height which is not included in scrollHeight
        var borderHeight = textarea.offsetHeight - textarea.clientHeight;
        // Reset textarea height to auto that correctly calculate the new height
        this.setHeight('auto');
        // Set new height
        this.setHeight(textarea.scrollHeight + borderHeight + "px");
    };
    AutosizeDirective.prototype.setHeight = function (value) {
        this.renderer.setStyle(this.elem.nativeElement, 'height', value);
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.overflow'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], AutosizeDirective.prototype, "overflow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('rows'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], AutosizeDirective.prototype, "rows", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], AutosizeDirective.prototype, "resize", null);
    AutosizeDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], AutosizeDirective);
AutosizeDirective.ɵfac = function AutosizeDirective_Factory(t) { return new (t || AutosizeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"])); };
AutosizeDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AutosizeDirective, selectors: [["textarea", "autosize", ""]], hostVars: 3, hostBindings: function AutosizeDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function AutosizeDirective_input_HostBindingHandler() { return ctx.resize(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("rows", ctx.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("overflow", ctx.overflow);
    } }, inputs: { rows: "rows" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AutosizeDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'textarea[autosize]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }]; }, { overflow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.overflow']
        }], rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['rows']
        }], resize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['input']
        }] }); })();
    return AutosizeDirective;
}());

var TextareaAutosizeModule = /** @class */ (function () {
    function TextareaAutosizeModule() {
    }
TextareaAutosizeModule.ɵfac = function TextareaAutosizeModule_Factory(t) { return new (t || TextareaAutosizeModule)(); };
TextareaAutosizeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TextareaAutosizeModule });
TextareaAutosizeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TextareaAutosizeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                declarations: [AutosizeDirective],
                exports: [AutosizeDirective]
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TextareaAutosizeModule, { declarations: function () { return [AutosizeDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; }, exports: function () { return [AutosizeDirective]; } }); })();
    return TextareaAutosizeModule;
}());

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-textarea-autosize.js.map

/***/ }),

/***/ "./node_modules/ngx-textarea-autosize/node_modules/tslib/tslib.es6.js":
/*!****************************************************************************!*\
  !*** ./node_modules/ngx-textarea-autosize/node_modules/tslib/tslib.es6.js ***!
  \****************************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/ngx-webcam/__ivy_ngcc__/fesm5/ngx-webcam.js":
/*!******************************************************************!*\
  !*** ./node_modules/ngx-webcam/__ivy_ngcc__/fesm5/ngx-webcam.js ***!
  \******************************************************************/
/*! exports provided: WebcamComponent, WebcamImage, WebcamInitError, WebcamMirrorProperties, WebcamModule, WebcamUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcamComponent", function() { return WebcamComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcamImage", function() { return WebcamImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcamInitError", function() { return WebcamInitError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcamMirrorProperties", function() { return WebcamMirrorProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcamModule", function() { return WebcamModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcamUtil", function() { return WebcamUtil; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/ngx-webcam/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





/**
 * Container class for a captured webcam image
 * @author basst314, davidshen84
 */



var _c0 = ["video"];
var _c1 = ["canvas"];
function WebcamComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WebcamComponent_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.rotateVideoInput(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
var WebcamImage = /** @class */ (function () {
    function WebcamImage(imageAsDataUrl, mimeType, imageData) {
        this._mimeType = null;
        this._imageAsBase64 = null;
        this._imageAsDataUrl = null;
        this._imageData = null;
        this._mimeType = mimeType;
        this._imageAsDataUrl = imageAsDataUrl;
        this._imageData = imageData;
    }
    /**
     * Extracts the Base64 data out of the given dataUrl.
     * @param dataUrl the given dataUrl
     * @param mimeType the mimeType of the data
     */
    WebcamImage.getDataFromDataUrl = function (dataUrl, mimeType) {
        return dataUrl.replace("data:" + mimeType + ";base64,", '');
    };
    Object.defineProperty(WebcamImage.prototype, "imageAsBase64", {
        /**
         * Get the base64 encoded image data
         * @returns base64 data of the image
         */
        get: function () {
            return this._imageAsBase64 ? this._imageAsBase64
                : this._imageAsBase64 = WebcamImage.getDataFromDataUrl(this._imageAsDataUrl, this._mimeType);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebcamImage.prototype, "imageAsDataUrl", {
        /**
         * Get the encoded image as dataUrl
         * @returns the dataUrl of the image
         */
        get: function () {
            return this._imageAsDataUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebcamImage.prototype, "imageData", {
        /**
         * Get the ImageData object associated with the canvas' 2d context.
         * @returns the ImageData of the canvas's 2d context.
         */
        get: function () {
            return this._imageData;
        },
        enumerable: true,
        configurable: true
    });
    return WebcamImage;
}());

var WebcamUtil = /** @class */ (function () {
    function WebcamUtil() {
    }
    /**
     * Lists available videoInput devices
     * @returns a list of media device info.
     */
    WebcamUtil.getAvailableVideoInputs = function () {
        if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
            return Promise.reject('enumerateDevices() not supported.');
        }
        return new Promise(function (resolve, reject) {
            navigator.mediaDevices.enumerateDevices()
                .then(function (devices) {
                resolve(devices.filter(function (device) { return device.kind === 'videoinput'; }));
            })
                .catch(function (err) {
                reject(err.message || err);
            });
        });
    };
    return WebcamUtil;
}());

var WebcamComponent = /** @class */ (function () {
    function WebcamComponent() {
        /** Defines the max width of the webcam area in px */
        this.width = 640;
        /** Defines the max height of the webcam area in px */
        this.height = 480;
        /** Defines base constraints to apply when requesting video track from UserMedia */
        this.videoOptions = WebcamComponent_1.DEFAULT_VIDEO_OPTIONS;
        /** Flag to enable/disable camera switch. If enabled, a switch icon will be displayed if multiple cameras were found */
        this.allowCameraSwitch = true;
        /** Flag to control whether an ImageData object is stored into the WebcamImage object. */
        this.captureImageData = false;
        /** The image type to use when capturing snapshots */
        this.imageType = WebcamComponent_1.DEFAULT_IMAGE_TYPE;
        /** The image quality to use when capturing snapshots (number between 0 and 1) */
        this.imageQuality = WebcamComponent_1.DEFAULT_IMAGE_QUALITY;
        /** EventEmitter which fires when an image has been captured */
        this.imageCapture = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Emits a mediaError if webcam cannot be initialized (e.g. missing user permissions) */
        this.initError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Emits when the webcam video was clicked */
        this.imageClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Emits the active deviceId after the active video device was switched */
        this.cameraSwitched = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** available video devices */
        this.availableVideoInputs = [];
        /** Indicates whether the video device is ready to be switched */
        this.videoInitialized = false;
        /** Index of active video in availableVideoInputs */
        this.activeVideoInputIndex = -1;
        /** MediaStream object in use for streaming UserMedia data */
        this.mediaStream = null;
        /** width and height of the active video stream */
        this.activeVideoSettings = null;
    }
    WebcamComponent_1 = WebcamComponent;
    Object.defineProperty(WebcamComponent.prototype, "trigger", {
        /**
         * If the given Observable emits, an image will be captured and emitted through 'imageCapture' EventEmitter
         */
        set: function (trigger) {
            var _this = this;
            if (this.triggerSubscription) {
                this.triggerSubscription.unsubscribe();
            }
            // Subscribe to events from this Observable to take snapshots
            this.triggerSubscription = trigger.subscribe(function () {
                _this.takeSnapshot();
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebcamComponent.prototype, "switchCamera", {
        /**
         * If the given Observable emits, the active webcam will be switched to the one indicated by the emitted value.
         * @param switchCamera Indicates which webcam to switch to
         *   true: cycle forwards through available webcams
         *   false: cycle backwards through available webcams
         *   string: activate the webcam with the given id
         */
        set: function (switchCamera) {
            var _this = this;
            if (this.switchCameraSubscription) {
                this.switchCameraSubscription.unsubscribe();
            }
            // Subscribe to events from this Observable to switch video device
            this.switchCameraSubscription = switchCamera.subscribe(function (value) {
                if (typeof value === 'string') {
                    // deviceId was specified
                    _this.switchToVideoInput(value);
                }
                else {
                    // direction was specified
                    _this.rotateVideoInput(value !== false);
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get MediaTrackConstraints to request streaming the given device
     * @param deviceId
     * @param baseMediaTrackConstraints base constraints to merge deviceId-constraint into
     * @returns
     */
    WebcamComponent.getMediaConstraintsForDevice = function (deviceId, baseMediaTrackConstraints) {
        var result = baseMediaTrackConstraints ? baseMediaTrackConstraints : this.DEFAULT_VIDEO_OPTIONS;
        if (deviceId) {
            result.deviceId = { exact: deviceId };
        }
        return result;
    };
    /**
     * Tries to harvest the deviceId from the given mediaStreamTrack object.
     * Browsers populate this object differently; this method tries some different approaches
     * to read the id.
     * @param mediaStreamTrack
     * @returns deviceId if found in the mediaStreamTrack
     */
    WebcamComponent.getDeviceIdFromMediaStreamTrack = function (mediaStreamTrack) {
        if (mediaStreamTrack.getSettings && mediaStreamTrack.getSettings() && mediaStreamTrack.getSettings().deviceId) {
            return mediaStreamTrack.getSettings().deviceId;
        }
        else if (mediaStreamTrack.getConstraints && mediaStreamTrack.getConstraints() && mediaStreamTrack.getConstraints().deviceId) {
            var deviceIdObj = mediaStreamTrack.getConstraints().deviceId;
            return WebcamComponent_1.getValueFromConstrainDOMString(deviceIdObj);
        }
    };
    /**
     * Tries to harvest the facingMode from the given mediaStreamTrack object.
     * Browsers populate this object differently; this method tries some different approaches
     * to read the value.
     * @param mediaStreamTrack
     * @returns facingMode if found in the mediaStreamTrack
     */
    WebcamComponent.getFacingModeFromMediaStreamTrack = function (mediaStreamTrack) {
        if (mediaStreamTrack) {
            if (mediaStreamTrack.getSettings && mediaStreamTrack.getSettings() && mediaStreamTrack.getSettings().facingMode) {
                return mediaStreamTrack.getSettings().facingMode;
            }
            else if (mediaStreamTrack.getConstraints && mediaStreamTrack.getConstraints() && mediaStreamTrack.getConstraints().facingMode) {
                var facingModeConstraint = mediaStreamTrack.getConstraints().facingMode;
                return WebcamComponent_1.getValueFromConstrainDOMString(facingModeConstraint);
            }
        }
    };
    /**
     * Determines whether the given mediaStreamTrack claims itself as user facing
     * @param mediaStreamTrack
     */
    WebcamComponent.isUserFacing = function (mediaStreamTrack) {
        var facingMode = WebcamComponent_1.getFacingModeFromMediaStreamTrack(mediaStreamTrack);
        return facingMode ? 'user' === facingMode.toLowerCase() : false;
    };
    /**
     * Extracts the value from the given ConstrainDOMString
     * @param constrainDOMString
     */
    WebcamComponent.getValueFromConstrainDOMString = function (constrainDOMString) {
        if (constrainDOMString) {
            if (constrainDOMString instanceof String) {
                return String(constrainDOMString);
            }
            else if (Array.isArray(constrainDOMString) && Array(constrainDOMString).length > 0) {
                return String(constrainDOMString[0]);
            }
            else if (typeof constrainDOMString === 'object') {
                if (constrainDOMString['exact']) {
                    return String(constrainDOMString['exact']);
                }
                else if (constrainDOMString['ideal']) {
                    return String(constrainDOMString['ideal']);
                }
            }
        }
        return null;
    };
    WebcamComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.detectAvailableDevices()
            .then(function () {
            // start video
            _this.switchToVideoInput(null);
        })
            .catch(function (err) {
            _this.initError.next({ message: err });
            // fallback: still try to load webcam, even if device enumeration failed
            _this.switchToVideoInput(null);
        });
    };
    WebcamComponent.prototype.ngOnDestroy = function () {
        this.stopMediaTracks();
        this.unsubscribeFromSubscriptions();
    };
    /**
     * Takes a snapshot of the current webcam's view and emits the image as an event
     */
    WebcamComponent.prototype.takeSnapshot = function () {
        // set canvas size to actual video size
        var _video = this.nativeVideoElement;
        var dimensions = { width: this.width, height: this.height };
        if (_video.videoWidth) {
            dimensions.width = _video.videoWidth;
            dimensions.height = _video.videoHeight;
        }
        var _canvas = this.canvas.nativeElement;
        _canvas.width = dimensions.width;
        _canvas.height = dimensions.height;
        // paint snapshot image to canvas
        var context2d = _canvas.getContext('2d');
        context2d.drawImage(_video, 0, 0);
        // read canvas content as image
        var mimeType = this.imageType ? this.imageType : WebcamComponent_1.DEFAULT_IMAGE_TYPE;
        var quality = this.imageQuality ? this.imageQuality : WebcamComponent_1.DEFAULT_IMAGE_QUALITY;
        var dataUrl = _canvas.toDataURL(mimeType, quality);
        // get the ImageData object from the canvas' context.
        var imageData = null;
        if (this.captureImageData) {
            imageData = context2d.getImageData(0, 0, _canvas.width, _canvas.height);
        }
        this.imageCapture.next(new WebcamImage(dataUrl, mimeType, imageData));
    };
    /**
     * Switches to the next/previous video device
     * @param forward
     */
    WebcamComponent.prototype.rotateVideoInput = function (forward) {
        if (this.availableVideoInputs && this.availableVideoInputs.length > 1) {
            var increment = forward ? 1 : (this.availableVideoInputs.length - 1);
            var nextInputIndex = (this.activeVideoInputIndex + increment) % this.availableVideoInputs.length;
            this.switchToVideoInput(this.availableVideoInputs[nextInputIndex].deviceId);
        }
    };
    /**
     * Switches the camera-view to the specified video device
     */
    WebcamComponent.prototype.switchToVideoInput = function (deviceId) {
        this.videoInitialized = false;
        this.stopMediaTracks();
        this.initWebcam(deviceId, this.videoOptions);
    };
    /**
     * Event-handler for video resize event.
     * Triggers Angular change detection so that new video dimensions get applied
     */
    WebcamComponent.prototype.videoResize = function () {
        // here to trigger Angular change detection
    };
    Object.defineProperty(WebcamComponent.prototype, "videoWidth", {
        get: function () {
            var videoRatio = this.getVideoAspectRatio();
            return Math.min(this.width, this.height * videoRatio);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebcamComponent.prototype, "videoHeight", {
        get: function () {
            var videoRatio = this.getVideoAspectRatio();
            return Math.min(this.height, this.width / videoRatio);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebcamComponent.prototype, "videoStyleClasses", {
        get: function () {
            var classes = '';
            if (this.isMirrorImage()) {
                classes += 'mirrored ';
            }
            return classes.trim();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebcamComponent.prototype, "nativeVideoElement", {
        get: function () {
            return this.video.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the video aspect ratio of the active video stream
     */
    WebcamComponent.prototype.getVideoAspectRatio = function () {
        // calculate ratio from video element dimensions if present
        var videoElement = this.nativeVideoElement;
        if (videoElement.videoWidth && videoElement.videoWidth > 0 &&
            videoElement.videoHeight && videoElement.videoHeight > 0) {
            return videoElement.videoWidth / videoElement.videoHeight;
        }
        // nothing present - calculate ratio based on width/height params
        return this.width / this.height;
    };
    /**
     * Init webcam live view
     */
    WebcamComponent.prototype.initWebcam = function (deviceId, userVideoTrackConstraints) {
        var _this = this;
        var _video = this.nativeVideoElement;
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            // merge deviceId -> userVideoTrackConstraints
            var videoTrackConstraints = WebcamComponent_1.getMediaConstraintsForDevice(deviceId, userVideoTrackConstraints);
            navigator.mediaDevices.getUserMedia({ video: videoTrackConstraints })
                .then(function (stream) {
                _this.mediaStream = stream;
                _video.srcObject = stream;
                _video.play();
                _this.activeVideoSettings = stream.getVideoTracks()[0].getSettings();
                var activeDeviceId = WebcamComponent_1.getDeviceIdFromMediaStreamTrack(stream.getVideoTracks()[0]);
                _this.cameraSwitched.next(activeDeviceId);
                // Initial detect may run before user gave permissions, returning no deviceIds. This prevents later camera switches. (#47)
                // Run detect once again within getUserMedia callback, to make sure this time we have permissions and get deviceIds.
                _this.detectAvailableDevices()
                    .then(function () {
                    _this.activeVideoInputIndex = activeDeviceId ? _this.availableVideoInputs
                        .findIndex(function (mediaDeviceInfo) { return mediaDeviceInfo.deviceId === activeDeviceId; }) : -1;
                    _this.videoInitialized = true;
                })
                    .catch(function () {
                    _this.activeVideoInputIndex = -1;
                    _this.videoInitialized = true;
                });
            })
                .catch(function (err) {
                _this.initError.next({ message: err.message, mediaStreamError: err });
            });
        }
        else {
            this.initError.next({ message: 'Cannot read UserMedia from MediaDevices.' });
        }
    };
    WebcamComponent.prototype.getActiveVideoTrack = function () {
        return this.mediaStream ? this.mediaStream.getVideoTracks()[0] : null;
    };
    WebcamComponent.prototype.isMirrorImage = function () {
        if (!this.getActiveVideoTrack()) {
            return false;
        }
        // check for explicit mirror override parameter
        {
            var mirror = 'auto';
            if (this.mirrorImage) {
                if (typeof this.mirrorImage === 'string') {
                    mirror = String(this.mirrorImage).toLowerCase();
                }
                else {
                    // WebcamMirrorProperties
                    if (this.mirrorImage.x) {
                        mirror = this.mirrorImage.x.toLowerCase();
                    }
                }
            }
            switch (mirror) {
                case 'always':
                    return true;
                case 'never':
                    return false;
            }
        }
        // default: enable mirroring if webcam is user facing
        return WebcamComponent_1.isUserFacing(this.getActiveVideoTrack());
    };
    /**
     * Stops all active media tracks.
     * This prevents the webcam from being indicated as active,
     * even if it is no longer used by this component.
     */
    WebcamComponent.prototype.stopMediaTracks = function () {
        if (this.mediaStream && this.mediaStream.getTracks) {
            // getTracks() returns all media tracks (video+audio)
            this.mediaStream.getTracks()
                .forEach(function (track) { return track.stop(); });
        }
    };
    /**
     * Unsubscribe from all open subscriptions
     */
    WebcamComponent.prototype.unsubscribeFromSubscriptions = function () {
        if (this.triggerSubscription) {
            this.triggerSubscription.unsubscribe();
        }
        if (this.switchCameraSubscription) {
            this.switchCameraSubscription.unsubscribe();
        }
    };
    /**
     * Reads available input devices
     */
    WebcamComponent.prototype.detectAvailableDevices = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            WebcamUtil.getAvailableVideoInputs()
                .then(function (devices) {
                _this.availableVideoInputs = devices;
                resolve(devices);
            })
                .catch(function (err) {
                _this.availableVideoInputs = [];
                reject(err);
            });
        });
    };
    var WebcamComponent_1;
    WebcamComponent.DEFAULT_VIDEO_OPTIONS = { facingMode: 'environment' };
    WebcamComponent.DEFAULT_IMAGE_TYPE = 'image/jpeg';
    WebcamComponent.DEFAULT_IMAGE_QUALITY = 0.92;
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], WebcamComponent.prototype, "width", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], WebcamComponent.prototype, "height", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], WebcamComponent.prototype, "videoOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], WebcamComponent.prototype, "allowCameraSwitch", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], WebcamComponent.prototype, "mirrorImage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], WebcamComponent.prototype, "captureImageData", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], WebcamComponent.prototype, "imageType", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], WebcamComponent.prototype, "imageQuality", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebcamComponent.prototype, "imageCapture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebcamComponent.prototype, "initError", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebcamComponent.prototype, "imageClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebcamComponent.prototype, "cameraSwitched", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('video', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], WebcamComponent.prototype, "video", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], WebcamComponent.prototype, "canvas", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]])
    ], WebcamComponent.prototype, "trigger", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]])
    ], WebcamComponent.prototype, "switchCamera", null);
WebcamComponent.ɵfac = function WebcamComponent_Factory(t) { return new (t || WebcamComponent)(); };
WebcamComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WebcamComponent, selectors: [["webcam"]], viewQuery: function WebcamComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 7);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.video = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    } }, inputs: { width: "width", height: "height", videoOptions: "videoOptions", allowCameraSwitch: "allowCameraSwitch", captureImageData: "captureImageData", imageType: "imageType", imageQuality: "imageQuality", trigger: "trigger", switchCamera: "switchCamera", mirrorImage: "mirrorImage" }, outputs: { imageCapture: "imageCapture", initError: "initError", imageClick: "imageClick", cameraSwitched: "cameraSwitched" }, decls: 6, vars: 7, consts: [[1, "webcam-wrapper", 3, "click"], ["autoplay", "", "muted", "", "playsinline", "", 3, "width", "height", "resize"], ["video", ""], ["class", "camera-switch", 3, "click", 4, "ngIf"], [3, "width", "height"], ["canvas", ""], [1, "camera-switch", 3, "click"]], template: function WebcamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WebcamComponent_Template_div_click_0_listener() { return ctx.imageClick.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "video", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function WebcamComponent_Template_video_resize_1_listener() { return ctx.videoResize(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, WebcamComponent_div_3_Template, 1, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "canvas", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.videoStyleClasses);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", ctx.videoWidth)("height", ctx.videoHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.allowCameraSwitch && ctx.availableVideoInputs.length > 1 && ctx.videoInitialized);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", ctx.width)("height", ctx.height);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".webcam-wrapper[_ngcontent-%COMP%]{display:inline-block;position:relative;line-height:0}.webcam-wrapper[_ngcontent-%COMP%]   video.mirrored[_ngcontent-%COMP%]{transform:scale(-1,1)}.webcam-wrapper[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{display:none}.webcam-wrapper[_ngcontent-%COMP%]   .camera-switch[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.1);background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE9UlEQVR42u2aT2hdRRTGf+cRQqghSqihdBFDkRISK2KDfzDWxHaRQHEhaINKqa1gKQhd6EZLN+IidCH+Q0oWIkVRC21BQxXRitVaSbKoJSGtYGoK2tQ/tU1jY5v0c5F54Xl7b/KSO/PyEt+3e5f75p7zzZwzZ74zUEIJJfyfYaEGllQGVAGZlENdBy6Z2cSiYFTSKkkfS/pH/nBF0kFJdUW9AiRVASeAukD8DgNrzOySrwEzng18KaDzALXuG8W3AiStAvqBisBRNg40mtlPxbYCOgvgPO4bncWW+JpVeDQXRQhIygDfA00F5r0XuNfMrgclQFI98DDQCNQA5ZFXqoCWBVp8XwHRHeEqcN7loy/NbHBesyqpQ1KfFj/6nC+ZvFaApFrgPaCZpYVvgCfNbDiRAElNwGFg+RIt/X8H2s2s9wYCJDUAR4HqJX7++RN40MwGpgmQVAH0AQ2BPz4AHHPl8nBOAqtyFWQjsA6oL4Ada81sPDv7uwImod8kvSJp9RyS8O2SXnb/DYVd2Y9VSroQ4ANXJO2WVJmixqh0kzMWwL4LkiqRtDnA4D1zmfE8j9g9AezcnAHaPcfXdbfdnPZ2Yps6+DwAvO/Z1naTdApY7Xng48BDZnY1MpMVQBuw3iXc5Tnb0wBwBPjUzP6eoezuArZ6svM0geJLkvZEYnl3nkntoqROSbckSW2Suj3ZOIangc7GPJuUtNGdFIfmMeavktoSSKiW9LMPw30Q8JqkekmjCbOZRhuclLQjgYSNxUBAj6RyZ9ATgUJpUtJTCSR8vpAEXHAyWK5BXYFIGHOlepSAloUk4NEYgyoknQhEwhFJ0e8h6VSaQeerCb5uZgdi9utxYBNwOUD93hIVXswM4INCi6K9wAszFC2DwLOBDjHbYp59karIUnRdzYy/3ClqVklaUhfwTICj7K25OqA7a4wWagVsm4Me/xzwg2cCqqONFzO7DPxSCAJi436GUBgHHguQD2oTlJ55oSzP9ybccsttSJw1szdjFOSnI/8dTCGZHwcORp4Nx7y3B1iZ8/sm4MW8/Euxg5wIsS/HaAp3zeP4/G7obRDXI4jiTIA22H7Xdc7X+S3A5lC7QBQ357aq3VAjCeSkwUfAJrfvz+R8A9ADLAtZB+TinpjC5JMA+//jwPZZnF8G7J+L8z4IWB/zbG+gIujVWfLBW/NStVMmqaG4POJRsIjix7h8IGnLQuoBbQki5sVAJHyYm7YkNaRRtXwQ8G1cHpX0iKRrgUjYno17Sf0LrQhJUkdCeHWkVITGJI0k1QeS3ikGSUzOyJUJJNznYneuOCnpTldcxa2kP3xJYqOeSDjqZG8ShJLnE8TTuMS6Iyu1BW7djZqkfo9N0QOuYJmYQddfB7RG+gLTNzqAY9FrL+5/nwEbvDdJJe3zzOrhNP3AWRqmk55t3ZcBuj3b2gb0Sbrbo/NNzk7fFzu7s/E5EiC+rrmeQU0Kx2skvRFoOx2ZzlmSdgbsw49JetvtBpk8nM64d/cGbNtJ0s7cGyJlwHeEv+t3nqnLSgPAUOSGyG3AHUxdzqoJbEcvcL+ZTeTeEapzJKxgaeOcc/7Mf06D7kFrguS0VDAMtGadv+E47DT9tcChJej8ISfpD+abgTe45uOkFi8mnQ+JBVQ+d4VXuOptjavcyot8pq86mfwk8LWZnaOEEkoooYQSSojDv8AhQNeGfe0jAAAAAElFTkSuQmCC);background-repeat:no-repeat;border-radius:5px;position:absolute;right:13px;top:10px;height:48px;width:48px;background-size:80%;cursor:pointer;background-position:center;transition:background-color .2s}.webcam-wrapper[_ngcontent-%COMP%]   .camera-switch[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.18)}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WebcamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'webcam',
                template: "<div class=\"webcam-wrapper\" (click)=\"imageClick.next();\">\r\n  <video #video [width]=\"videoWidth\" [height]=\"videoHeight\" [class]=\"videoStyleClasses\" autoplay muted playsinline (resize)=\"videoResize()\"></video>\r\n  <div class=\"camera-switch\" *ngIf=\"allowCameraSwitch && availableVideoInputs.length > 1 && videoInitialized\" (click)=\"rotateVideoInput(true)\"></div>\r\n  <canvas #canvas [width]=\"width\" [height]=\"height\"></canvas>\r\n</div>\r\n",
                styles: [".webcam-wrapper{display:inline-block;position:relative;line-height:0}.webcam-wrapper video.mirrored{transform:scale(-1,1)}.webcam-wrapper canvas{display:none}.webcam-wrapper .camera-switch{background-color:rgba(0,0,0,.1);background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE9UlEQVR42u2aT2hdRRTGf+cRQqghSqihdBFDkRISK2KDfzDWxHaRQHEhaINKqa1gKQhd6EZLN+IidCH+Q0oWIkVRC21BQxXRitVaSbKoJSGtYGoK2tQ/tU1jY5v0c5F54Xl7b/KSO/PyEt+3e5f75p7zzZwzZ74zUEIJJfyfYaEGllQGVAGZlENdBy6Z2cSiYFTSKkkfS/pH/nBF0kFJdUW9AiRVASeAukD8DgNrzOySrwEzng18KaDzALXuG8W3AiStAvqBisBRNg40mtlPxbYCOgvgPO4bncWW+JpVeDQXRQhIygDfA00F5r0XuNfMrgclQFI98DDQCNQA5ZFXqoCWBVp8XwHRHeEqcN7loy/NbHBesyqpQ1KfFj/6nC+ZvFaApFrgPaCZpYVvgCfNbDiRAElNwGFg+RIt/X8H2s2s9wYCJDUAR4HqJX7++RN40MwGpgmQVAH0AQ2BPz4AHHPl8nBOAqtyFWQjsA6oL4Ada81sPDv7uwImod8kvSJp9RyS8O2SXnb/DYVd2Y9VSroQ4ANXJO2WVJmixqh0kzMWwL4LkiqRtDnA4D1zmfE8j9g9AezcnAHaPcfXdbfdnPZ2Yps6+DwAvO/Z1naTdApY7Xng48BDZnY1MpMVQBuw3iXc5Tnb0wBwBPjUzP6eoezuArZ6svM0geJLkvZEYnl3nkntoqROSbckSW2Suj3ZOIangc7GPJuUtNGdFIfmMeavktoSSKiW9LMPw30Q8JqkekmjCbOZRhuclLQjgYSNxUBAj6RyZ9ATgUJpUtJTCSR8vpAEXHAyWK5BXYFIGHOlepSAloUk4NEYgyoknQhEwhFJ0e8h6VSaQeerCb5uZgdi9utxYBNwOUD93hIVXswM4INCi6K9wAszFC2DwLOBDjHbYp59karIUnRdzYy/3ClqVklaUhfwTICj7K25OqA7a4wWagVsm4Me/xzwg2cCqqONFzO7DPxSCAJi436GUBgHHguQD2oTlJ55oSzP9ybccsttSJw1szdjFOSnI/8dTCGZHwcORp4Nx7y3B1iZ8/sm4MW8/Euxg5wIsS/HaAp3zeP4/G7obRDXI4jiTIA22H7Xdc7X+S3A5lC7QBQ357aq3VAjCeSkwUfAJrfvz+R8A9ADLAtZB+TinpjC5JMA+//jwPZZnF8G7J+L8z4IWB/zbG+gIujVWfLBW/NStVMmqaG4POJRsIjix7h8IGnLQuoBbQki5sVAJHyYm7YkNaRRtXwQ8G1cHpX0iKRrgUjYno17Sf0LrQhJUkdCeHWkVITGJI0k1QeS3ikGSUzOyJUJJNznYneuOCnpTldcxa2kP3xJYqOeSDjqZG8ShJLnE8TTuMS6Iyu1BW7djZqkfo9N0QOuYJmYQddfB7RG+gLTNzqAY9FrL+5/nwEbvDdJJe3zzOrhNP3AWRqmk55t3ZcBuj3b2gb0Sbrbo/NNzk7fFzu7s/E5EiC+rrmeQU0Kx2skvRFoOx2ZzlmSdgbsw49JetvtBpk8nM64d/cGbNtJ0s7cGyJlwHeEv+t3nqnLSgPAUOSGyG3AHUxdzqoJbEcvcL+ZTeTeEapzJKxgaeOcc/7Mf06D7kFrguS0VDAMtGadv+E47DT9tcChJej8ISfpD+abgTe45uOkFi8mnQ+JBVQ+d4VXuOptjavcyot8pq86mfwk8LWZnaOEEkoooYQSSojDv8AhQNeGfe0jAAAAAElFTkSuQmCC);background-repeat:no-repeat;border-radius:5px;position:absolute;right:13px;top:10px;height:48px;width:48px;background-size:80%;cursor:pointer;background-position:center;transition:background-color .2s}.webcam-wrapper .camera-switch:hover{background-color:rgba(0,0,0,.18)}"]
            }]
    }], function () { return []; }, { width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], videoOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], allowCameraSwitch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], captureImageData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], imageType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], imageQuality: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], imageCapture: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], initError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], imageClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], cameraSwitched: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], trigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], switchCamera: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], mirrorImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], video: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['video', { static: true }]
        }], canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['canvas', { static: true }]
        }] }); })();
    return WebcamComponent;
}());

var COMPONENTS = [
    WebcamComponent
];
var WebcamModule = /** @class */ (function () {
    function WebcamModule() {
    }
WebcamModule.ɵfac = function WebcamModule_Factory(t) { return new (t || WebcamModule)(); };
WebcamModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: WebcamModule });
WebcamModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WebcamModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                ],
                declarations: [
                    COMPONENTS
                ],
                exports: [
                    COMPONENTS
                ]
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WebcamModule, { declarations: function () { return [WebcamComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; }, exports: function () { return [WebcamComponent]; } }); })();
    return WebcamModule;
}());

var WebcamInitError = /** @class */ (function () {
    function WebcamInitError() {
        this.message = null;
        this.mediaStreamError = null;
    }
    return WebcamInitError;
}());

var WebcamMirrorProperties = /** @class */ (function () {
    function WebcamMirrorProperties() {
    }
    return WebcamMirrorProperties;
}());



//# sourceMappingURL=ngx-webcam.js.map

/***/ }),

/***/ "./node_modules/ngx-webcam/node_modules/tslib/tslib.es6.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ngx-webcam/node_modules/tslib/tslib.es6.js ***!
  \*****************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/capcheck/capcheck.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/capcheck/capcheck.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\"  class=\"ion-padding\">\n        <!--\n        <ion-button (click)=\"reset()\">重選</ion-button>\n        -->\n        <!--\n        <ion-button (click)=\"check()\">彩票號碼辨識</ion-button>\n        -->\n        <ion-button (click)=\"openActionSheet()\"><ion-icon name=\"chevron-down-circle-outline\"></ion-icon></ion-button>\n    </ion-buttons>    \n    <ion-title>\n      一拍即對\n    </ion-title> \n  </ion-toolbar>\n</ion-header>\n\n  <ion-content class=\"ion-padding\">\n    \n\n    <div id='contentID' style=\"text-align: center;\">\n      <label for=\"m6pic\" style=\"color: blue;\">1.[選取/拍照彩票]，2.剪裁到只有號碼部份，3.[辨識號碼]，4.[核對彩票]！<br/><span style=\"color: green\">(暫不支持核對膽拖彩票)</span></label>\n      <!--\n      <input id=\"m6pic\" type=\"file\" (change)=\"fileChangeEvent($event)\"/>\n      -->\n      <br/>\n        <ion-button #fileButtonClick id=\"fileButtonClick\" (click)=\"fileInput.click()\" color=\"warning\" style=\"display: none;\">按這裏選取你的彩票</ion-button>\n        <input #fileInput type=\"file\" (change)=\"fileChangeEvent($event)\" style=\"display:none;\" />\n      \n      <!--\n      \n      <webcam [height]=\"200\" [width]=\"screenWidth\" [trigger]=\"triggerObservable\" (imageCapture)=\"handleImage($event)\" *ngIf=\"showWebcam\"\n      [allowCameraSwitch]=\"allowCameraSwitch\" [switchCamera]=\"nextWebcamObservable\"\n      [videoOptions]=\"videoOptions\"\n      [imageQuality]=\"1\"\n      (cameraSwitched)=\"cameraWasSwitched($event)\"\n      (initError)=\"handleInitError($event)\">      \n      </webcam>\n      \n        \n      <div class=\"row\">\n        <div class=\"col text-center\">\n          <ion-button (click)=\"takePhoto()\" style=\"text-align: center;\">拍照</ion-button> \n        </div>\n      </div>\n      -->\n      <div class=\"cropper-container\">        \n      <image-cropper\n        [imageChangedEvent]=\"imageChangedEvent\"\n        [maintainAspectRatio]=\"false\"\n        [cropperMinHeight]=\"30\"\n        format=\"png\"\n        (imageCropped)=\"imageCropped($event)\"\n        (imageLoaded)=\"imageLoaded()\"\n        (cropperReady)=\"cropperReady()\"\n        (loadImageFailed)=\"loadImageFailed()\"        \n        [canvasRotation]=\"rotateVal\"\n        style=\"width: 300px; height: 50x; text-align: left;\"\n      ></image-cropper>\n      </div>\n      \n      <img [src]=\"croppedImage\"/>\n\n      <br/>\n      <ion-list *ngIf=\"resultList.length !== 0\">        \n        <ion-item *ngFor=\"let num of resultList; index as i; last as l\">\n                <ion-row style=\"vertical-align: middle; text-align: center; width: 100%;\">\n                    <ion-col style=\"width: 100%;\">                        \n                        <textarea #inputNums id=\"num{{i}}\" autosize style=\"width: 100%; background-color: navajowhite;\">{{num}}</textarea>\n                    </ion-col>\n                </ion-row>\n        </ion-item>\n      </ion-list>\n      \n      <ion-text color=\"primary\" *ngIf=\"resultList.length !== 0\">\n        共 <strong>{{resultList.length}}</strong> 注\u0013\n      </ion-text>\n      <ion-text color=\"danger\" *ngIf=\"resultList.length !== 0\">\n        若有號碼辨識有誤，請自行修正！\n      </ion-text>\n      <!--\n      <br/>      \n      <ion-button #resultCheckBtn (click)=\"doCheck()\" color=\"success\" *ngIf=\"resultList.length !== 0\">\n        按這裏確定上面號碼正確 (共 <span color='red'>{{resultList.length}}</span> 注\u0013)\n      </ion-button>\n      -->\n      <div class=\"theEnd\"></div>\n    </div>\n    \n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/capcheck/capchecklist/capchecklist.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/capcheck/capchecklist/capchecklist.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>        \n      <ion-buttons slot=\"start\">\n          <ion-back-button [text]=\"\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>\n          最近30期中獎結果\n      </ion-title>    \n</ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row style=\"vertical-align: middle; text-align: center; background-color: burlywood;\">\n    <ion-col>\n      <ion-label class=\"wrap\">{{m6results.numbers}}</ion-label>\n    </ion-col>                   \n</ion-row>\n    \n    <ion-list>        \n        <ion-item *ngFor=\"let m6result of m6results.matchedResults; index as i; last as l\"  (click)=\"showDetail(m6result)\">\n            <ion-grid>\n                <ion-row style=\"vertical-align: middle; text-align: center;\">\n                    <ion-col>\n                          <img src=\"./assets/images/no_{{m6result.number1}}.png\" class=\"ball\" *ngIf=\"m6result.matched[0]\"/>\n                          <img src=\"./assets/images/no_{{m6result.number1}}x.png\" class=\"ball\" *ngIf=\"!m6result.matched[0]\"/>\n                    </ion-col>\n                    <ion-col>\n                          <img src=\"./assets/images/no_{{m6result.number2}}.png\" class=\"ball\" *ngIf=\"m6result.matched[1]\"/>\n                          <img src=\"./assets/images/no_{{m6result.number2}}x.png\" class=\"ball\" *ngIf=\"!m6result.matched[1]\"/>\n                    </ion-col>\n                    <ion-col>\n                          <img src=\"./assets/images/no_{{m6result.number3}}.png\" class=\"ball\" *ngIf=\"m6result.matched[2]\"/>\n                          <img src=\"./assets/images/no_{{m6result.number3}}x.png\" class=\"ball\" *ngIf=\"!m6result.matched[2]\"/>\n                    </ion-col>\n                    <ion-col>\n                          <img src=\"./assets/images/no_{{m6result.number4}}.png\" class=\"ball\" *ngIf=\"m6result.matched[3]\"/>\n                          <img src=\"./assets/images/no_{{m6result.number4}}x.png\" class=\"ball\" *ngIf=\"!m6result.matched[3]\"/>\n                    </ion-col>\n                    <ion-col>\n                          <img src=\"./assets/images/no_{{m6result.number5}}.png\" class=\"ball\" *ngIf=\"m6result.matched[4]\"/>\n                          <img src=\"./assets/images/no_{{m6result.number5}}x.png\" class=\"ball\" *ngIf=\"!m6result.matched[4]\"/>\n                    </ion-col>\n                    <ion-col>\n                          <img src=\"./assets/images/no_{{m6result.number6}}.png\" class=\"ball\" *ngIf=\"m6result.matched[5]\"/>\n                          <img src=\"./assets/images/no_{{m6result.number6}}x.png\" class=\"ball\" *ngIf=\"!m6result.matched[5]\"/>\n                    </ion-col>\n                    <ion-col style=\"margin-top: 5px\">\n                        +\n                    </ion-col>\n                    <ion-col>\n                          <img src=\"./assets/images/no_{{m6result.numberX}}.png\" class=\"ball\" *ngIf=\"m6result.matched[6]\"/>\n                          <img src=\"./assets/images/no_{{m6result.numberX}}x.png\" class=\"ball\" *ngIf=\"!m6result.matched[6]\"/>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row>\n                  <ion-col size=\"4\">\n                      <ion-label>{{m6result.drawNo}}</ion-label>\n                  </ion-col>\n                  <ion-col size=\"8\">\n                      <ion-label>{{toDate(m6result.drawDate)}}</ion-label>\n                  </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/capcheck/capcheckresult/capcheckresult.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/capcheck/capcheckresult/capcheckresult.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>        \n      <ion-buttons slot=\"start\">          \n          <ion-back-button [text]=\"\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>\n          最近30期中獎摘要\n      </ion-title>    \n</ion-toolbar>\n</ion-header>\n\n<ion-content> \n    <ion-list>        \n        <ion-item *ngFor=\"let m6result of results; index as i; last as l\"  (click)=\"showDetail(m6result)\" detail-push>\n            <ion-grid>\n                <ion-row style=\"vertical-align: middle; text-align: left; background-color: burlywood;\">\n                    <ion-col>\n                      <ion-label class=\"wrap\">{{m6result.numbers}}</ion-label>\n                    </ion-col>                   \n                </ion-row>\n\n                <ion-row style=\"background-color: lightcoral; vertical-align: middle;\">\n                    <ion-col style=\"vertical-align: middle;\">                                        \n                        <ion-label style=\"vertical-align: middle;\">中獎期數： {{m6result.matchedResults.length}}</ion-label>\n                    </ion-col>  \n                    <ion-col style=\"text-align: right; vertical-align: middle;\">\n                        <ion-icon name=\"arrow-dropright\" *ngIf=\"m6result.matchedResults.length !== 0\"></ion-icon>\n                    </ion-col>                \n                </ion-row>\n            </ion-grid>\n        </ion-item>\n  </ion-list>  \n</ion-content>\n");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/resolve-url/resolve-url.js":
/*!*************************************************!*\
  !*** ./node_modules/resolve-url/resolve-url.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;// Copyright 2014 Simon Lydell
// X11 (“MIT”) Licensed. (See LICENSE.)

void (function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else {}
}(this, function() {

  function resolveUrl(/* ...urls */) {
    var numUrls = arguments.length

    if (numUrls === 0) {
      throw new Error("resolveUrl requires at least one argument; got none.")
    }

    var base = document.createElement("base")
    base.href = arguments[0]

    if (numUrls === 1) {
      return base.href
    }

    var head = document.getElementsByTagName("head")[0]
    head.insertBefore(base, head.firstChild)

    var a = document.createElement("a")
    var resolved

    for (var index = 1; index < numUrls; index++) {
      a.href = arguments[index]
      resolved = a.href
      base.href = resolved
    }

    head.removeChild(base)

    return resolved
  }

  return resolveUrl

}));


/***/ }),

/***/ "./node_modules/tesseract.js/package.json":
/*!************************************************!*\
  !*** ./node_modules/tesseract.js/package.json ***!
  \************************************************/
/*! exports provided: name, version, description, main, types, unpkg, jsdelivr, scripts, browser, author, contributors, license, devDependencies, dependencies, repository, bugs, homepage, collective, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"tesseract.js\",\"version\":\"2.0.2\",\"description\":\"Pure Javascript Multilingual OCR\",\"main\":\"src/index.js\",\"types\":\"src/index.d.ts\",\"unpkg\":\"dist/tesseract.min.js\",\"jsdelivr\":\"dist/tesseract.min.js\",\"scripts\":{\"start\":\"node scripts/server.js\",\"build\":\"rimraf dist && webpack --config scripts/webpack.config.prod.js\",\"profile:tesseract\":\"webpack-bundle-analyzer dist/tesseract-stats.json\",\"profile:worker\":\"webpack-bundle-analyzer dist/worker-stats.json\",\"prepublishOnly\":\"npm run build\",\"wait\":\"rimraf dist && wait-on http://localhost:3000/dist/tesseract.dev.js\",\"test\":\"npm-run-all -p -r start test:all\",\"test:all\":\"npm-run-all wait test:browser:* test:node:all\",\"test:node\":\"nyc mocha --exit --bail --require ./scripts/test-helper.js\",\"test:node:all\":\"npm run test:node -- ./tests/*.test.js\",\"test:browser-tpl\":\"mocha-headless-chrome -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000\",\"test:browser:detect\":\"npm run test:browser-tpl -- -f ./tests/detect.test.html\",\"test:browser:recognize\":\"npm run test:browser-tpl -- -f ./tests/recognize.test.html\",\"test:browser:scheduler\":\"npm run test:browser-tpl -- -f ./tests/scheduler.test.html\",\"lint\":\"eslint src\",\"postinstall\":\"opencollective-postinstall || true\"},\"browser\":{\"./src/worker/node/index.js\":\"./src/worker/browser/index.js\"},\"author\":\"\",\"contributors\":[\"jeromewu\"],\"license\":\"Apache-2.0\",\"devDependencies\":{\"@babel/core\":\"^7.7.7\",\"@babel/preset-env\":\"^7.7.7\",\"acorn\":\"^6.4.0\",\"babel-loader\":\"^8.0.6\",\"cors\":\"^2.8.5\",\"eslint\":\"^5.16.0\",\"eslint-config-airbnb\":\"^17.1.1\",\"eslint-plugin-import\":\"^2.19.1\",\"eslint-plugin-jsx-a11y\":\"^6.2.3\",\"eslint-plugin-react\":\"^7.17.0\",\"expect.js\":\"^0.3.1\",\"express\":\"^4.17.1\",\"mocha\":\"^5.2.0\",\"mocha-headless-chrome\":\"^2.0.3\",\"npm-run-all\":\"^4.1.5\",\"nyc\":\"^13.3.0\",\"rimraf\":\"^2.7.1\",\"wait-on\":\"^3.3.0\",\"webpack\":\"^4.41.4\",\"webpack-bundle-analyzer\":\"^3.6.0\",\"webpack-cli\":\"^3.3.10\",\"webpack-dev-middleware\":\"^3.7.2\"},\"dependencies\":{\"bmp-js\":\"^0.1.0\",\"file-type\":\"^12.4.1\",\"idb-keyval\":\"^3.2.0\",\"is-electron\":\"^2.2.0\",\"is-url\":\"^1.2.4\",\"node-fetch\":\"^2.6.0\",\"opencollective-postinstall\":\"^2.0.2\",\"regenerator-runtime\":\"^0.13.3\",\"resolve-url\":\"^0.2.1\",\"tesseract.js-core\":\"^2.0.0\",\"zlibjs\":\"^0.3.1\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/naptha/tesseract.js.git\"},\"bugs\":{\"url\":\"https://github.com/naptha/tesseract.js/issues\"},\"homepage\":\"https://github.com/naptha/tesseract.js\",\"collective\":{\"type\":\"opencollective\",\"url\":\"https://opencollective.com/tesseractjs\"}}");

/***/ }),

/***/ "./node_modules/tesseract.js/src/Tesseract.js":
/*!****************************************************!*\
  !*** ./node_modules/tesseract.js/src/Tesseract.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const createWorker = __webpack_require__(/*! ./createWorker */ "./node_modules/tesseract.js/src/createWorker.js");

const recognize = async (image, langs, options) => {
  const worker = createWorker(options);
  await worker.load();
  await worker.loadLanguage(langs);
  await worker.initialize(langs);
  return worker.recognize(image)
    .finally(async () => {
      await worker.terminate();
    });
};

const detect = async (image, options) => {
  const worker = createWorker(options);
  await worker.load();
  await worker.loadLanguage('osd');
  await worker.initialize('osd');
  return worker.detect(image)
    .finally(async () => {
      await worker.terminate();
    });
};

module.exports = {
  recognize,
  detect,
};


/***/ }),

/***/ "./node_modules/tesseract.js/src/constants/OEM.js":
/*!********************************************************!*\
  !*** ./node_modules/tesseract.js/src/constants/OEM.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * OEM = OCR Engine Mode, and there are 4 possible modes.
 *
 * By default tesseract.js uses LSTM_ONLY mode.
 *
 */
module.exports = {
  TESSERACT_ONLY: 0,
  LSTM_ONLY: 1,
  TESSERACT_LSTM_COMBINED: 2,
  DEFAULT: 3,
};


/***/ }),

/***/ "./node_modules/tesseract.js/src/constants/PSM.js":
/*!********************************************************!*\
  !*** ./node_modules/tesseract.js/src/constants/PSM.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * PSM = Page Segmentation Mode
 */
module.exports = {
  OSD_ONLY: '0',
  AUTO_OSD: '1',
  AUTO_ONLY: '2',
  AUTO: '3',
  SINGLE_COLUMN: '4',
  SINGLE_BLOCK_VERT_TEXT: '5',
  SINGLE_BLOCK: '6',
  SINGLE_LINE: '7',
  SINGLE_WORD: '8',
  CIRCLE_WORD: '9',
  SINGLE_CHAR: '10',
  SPARSE_TEXT: '11',
  SPARSE_TEXT_OSD: '12',
};


/***/ }),

/***/ "./node_modules/tesseract.js/src/constants/config.js":
/*!***********************************************************!*\
  !*** ./node_modules/tesseract.js/src/constants/config.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const OEM = __webpack_require__(/*! ./OEM */ "./node_modules/tesseract.js/src/constants/OEM.js");

module.exports = {
  defaultOEM: OEM.DEFAULT,
};


/***/ }),

/***/ "./node_modules/tesseract.js/src/constants/defaultOptions.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tesseract.js/src/constants/defaultOptions.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  /*
   * default path for downloading *.traineddata
   */
  langPath: 'https://tessdata.projectnaptha.com/4.0.0',
  /*
   * Use BlobURL for worker script by default
   * TODO: remove this option
   *
   */
  workerBlobURL: true,
  logger: () => {},
};


/***/ }),

/***/ "./node_modules/tesseract.js/src/createJob.js":
/*!****************************************************!*\
  !*** ./node_modules/tesseract.js/src/createJob.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const getId = __webpack_require__(/*! ./utils/getId */ "./node_modules/tesseract.js/src/utils/getId.js");

let jobCounter = 0;

module.exports = ({
  id: _id,
  action,
  payload = {},
}) => {
  let id = _id;
  if (typeof id === 'undefined') {
    id = getId('Job', jobCounter);
    jobCounter += 1;
  }

  return {
    id,
    action,
    payload,
  };
};


/***/ }),

/***/ "./node_modules/tesseract.js/src/createScheduler.js":
/*!**********************************************************!*\
  !*** ./node_modules/tesseract.js/src/createScheduler.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const createJob = __webpack_require__(/*! ./createJob */ "./node_modules/tesseract.js/src/createJob.js");
const { log } = __webpack_require__(/*! ./utils/log */ "./node_modules/tesseract.js/src/utils/log.js");
const getId = __webpack_require__(/*! ./utils/getId */ "./node_modules/tesseract.js/src/utils/getId.js");

let schedulerCounter = 0;

module.exports = () => {
  const id = getId('Scheduler', schedulerCounter);
  const workers = {};
  const runningWorkers = {};
  let jobQueue = [];

  schedulerCounter += 1;

  const getQueueLen = () => jobQueue.length;
  const getNumWorkers = () => Object.keys(workers).length;

  const dequeue = () => {
    if (jobQueue.length !== 0) {
      const wIds = Object.keys(workers);
      for (let i = 0; i < wIds.length; i += 1) {
        if (typeof runningWorkers[wIds[i]] === 'undefined') {
          jobQueue[0](workers[wIds[i]]);
          break;
        }
      }
    }
  };

  const queue = (action, payload) => (
    new Promise((resolve, reject) => {
      const job = createJob({ action, payload });
      jobQueue.push(async (w) => {
        jobQueue.shift();
        runningWorkers[w.id] = job;
        try {
          resolve(await w[action].apply(this, [...payload, job.id]));
        } catch (err) {
          reject(err);
        } finally {
          delete runningWorkers[w.id];
          dequeue();
        }
      });
      log(`[${id}]: Add ${job.id} to JobQueue`);
      log(`[${id}]: JobQueue length=${jobQueue.length}`);
      dequeue();
    })
  );

  const addWorker = (w) => {
    workers[w.id] = w;
    log(`[${id}]: Add ${w.id}`);
    log(`[${id}]: Number of workers=${getNumWorkers()}`);
    dequeue();
    return w.id;
  };

  const addJob = async (action, ...payload) => {
    if (getNumWorkers() === 0) {
      throw Error(`[${id}]: You need to have at least one worker before adding jobs`);
    }
    return queue(action, payload);
  };

  const terminate = async () => {
    Object.keys(workers).forEach(async (wid) => {
      await workers[wid].terminate();
    });
    jobQueue = [];
  };

  return {
    addWorker,
    addJob,
    terminate,
    getQueueLen,
    getNumWorkers,
  };
};


/***/ }),

/***/ "./node_modules/tesseract.js/src/createWorker.js":
/*!*******************************************************!*\
  !*** ./node_modules/tesseract.js/src/createWorker.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const resolvePaths = __webpack_require__(/*! ./utils/resolvePaths */ "./node_modules/tesseract.js/src/utils/resolvePaths.js");
const circularize = __webpack_require__(/*! ./utils/circularize */ "./node_modules/tesseract.js/src/utils/circularize.js");
const createJob = __webpack_require__(/*! ./createJob */ "./node_modules/tesseract.js/src/createJob.js");
const { log } = __webpack_require__(/*! ./utils/log */ "./node_modules/tesseract.js/src/utils/log.js");
const getId = __webpack_require__(/*! ./utils/getId */ "./node_modules/tesseract.js/src/utils/getId.js");
const { defaultOEM } = __webpack_require__(/*! ./constants/config */ "./node_modules/tesseract.js/src/constants/config.js");
const {
  defaultOptions,
  spawnWorker,
  terminateWorker,
  onMessage,
  loadImage,
  send,
} = __webpack_require__(/*! ./worker/node */ "./node_modules/tesseract.js/src/worker/browser/index.js");

let workerCounter = 0;

module.exports = (_options = {}) => {
  const id = getId('Worker', workerCounter);
  const {
    logger,
    errorHandler,
    ...options
  } = resolvePaths({
    ...defaultOptions,
    ..._options,
  });
  const resolves = {};
  const rejects = {};
  let worker = spawnWorker(options);

  workerCounter += 1;

  const setResolve = (action, res) => {
    resolves[action] = res;
  };

  const setReject = (action, rej) => {
    rejects[action] = rej;
  };

  const startJob = ({ id: jobId, action, payload }) => (
    new Promise((resolve, reject) => {
      log(`[${id}]: Start ${jobId}, action=${action}`);
      setResolve(action, resolve);
      setReject(action, reject);
      send(worker, {
        workerId: id,
        jobId,
        action,
        payload,
      });
    })
  );

  const load = jobId => (
    startJob(createJob({
      id: jobId, action: 'load', payload: { options },
    }))
  );

  const loadLanguage = (langs = 'eng', jobId) => (
    startJob(createJob({
      id: jobId,
      action: 'loadLanguage',
      payload: { langs, options },
    }))
  );

  const initialize = (langs = 'eng', oem = defaultOEM, jobId) => (
    startJob(createJob({
      id: jobId,
      action: 'initialize',
      payload: { langs, oem },
    }))
  );

  const setParameters = (params = {}, jobId) => (
    startJob(createJob({
      id: jobId,
      action: 'setParameters',
      payload: { params },
    }))
  );

  const recognize = async (image, opts = {}, jobId) => (
    startJob(createJob({
      id: jobId,
      action: 'recognize',
      payload: { image: await loadImage(image), options: opts },
    }))
  );

  const getPDF = (title = 'Tesseract OCR Result', textonly = false, jobId) => (
    startJob(createJob({
      id: jobId,
      action: 'getPDF',
      payload: { title, textonly },
    }))
  );

  const detect = async (image, jobId) => (
    startJob(createJob({
      id: jobId,
      action: 'detect',
      payload: { image: await loadImage(image) },
    }))
  );

  const terminate = async () => {
    if (worker !== null) {
      /*
      await startJob(createJob({
        id: jobId,
        action: 'terminate',
      }));
      */
      terminateWorker(worker);
      worker = null;
    }
    return Promise.resolve();
  };

  onMessage(worker, ({
    workerId, jobId, status, action, data,
  }) => {
    if (status === 'resolve') {
      log(`[${workerId}]: Complete ${jobId}`);
      let d = data;
      if (action === 'recognize') {
        d = circularize(data);
      } else if (action === 'getPDF') {
        d = Array.from({ ...data, length: Object.keys(data).length });
      }
      resolves[action]({ jobId, data: d });
    } else if (status === 'reject') {
      rejects[action](data);
      if (errorHandler) {
        errorHandler(data);
      } else {
        throw Error(data);
      }
    } else if (status === 'progress') {
      logger(data);
    }
  });

  return {
    id,
    worker,
    setResolve,
    setReject,
    load,
    loadLanguage,
    initialize,
    setParameters,
    recognize,
    getPDF,
    detect,
    terminate,
  };
};


/***/ }),

/***/ "./node_modules/tesseract.js/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/tesseract.js/src/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 *
 * Entry point for tesseract.js, should be the entry when bundling.
 *
 * @fileoverview entry point for tesseract.js
 * @author Kevin Kwok <antimatter15@gmail.com>
 * @author Guillermo Webster <gui@mit.edu>
 * @author Jerome Wu <jeromewus@gmail.com>
 */
__webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
const createScheduler = __webpack_require__(/*! ./createScheduler */ "./node_modules/tesseract.js/src/createScheduler.js");
const createWorker = __webpack_require__(/*! ./createWorker */ "./node_modules/tesseract.js/src/createWorker.js");
const Tesseract = __webpack_require__(/*! ./Tesseract */ "./node_modules/tesseract.js/src/Tesseract.js");
const OEM = __webpack_require__(/*! ./constants/OEM */ "./node_modules/tesseract.js/src/constants/OEM.js");
const PSM = __webpack_require__(/*! ./constants/PSM */ "./node_modules/tesseract.js/src/constants/PSM.js");
const { setLogging } = __webpack_require__(/*! ./utils/log */ "./node_modules/tesseract.js/src/utils/log.js");

module.exports = {
  OEM,
  PSM,
  createScheduler,
  createWorker,
  setLogging,
  ...Tesseract,
};


/***/ }),

/***/ "./node_modules/tesseract.js/src/utils/circularize.js":
/*!************************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/circularize.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * In the recognition result of tesseract, there
 * is a deep JSON object for details, it has around
 *
 * The result of dump.js is a big JSON tree
 * which can be easily serialized (for instance
 * to be sent from a webworker to the main app
 * or through Node's IPC), but we want
 * a (circular) DOM-like interface for walking
 * through the data.
 *
 * @fileoverview DOM-like interface for walking through data
 * @author Kevin Kwok <antimatter15@gmail.com>
 * @author Guillermo Webster <gui@mit.edu>
 * @author Jerome Wu <jeromewus@gmail.com>
 */

module.exports = (page) => {
  const blocks = [];
  const paragraphs = [];
  const lines = [];
  const words = [];
  const symbols = [];

  page.blocks.forEach((block) => {
    block.paragraphs.forEach((paragraph) => {
      paragraph.lines.forEach((line) => {
        line.words.forEach((word) => {
          word.symbols.forEach((sym) => {
            symbols.push({
              ...sym, page, block, paragraph, line, word,
            });
          });
          words.push({
            ...word, page, block, paragraph, line,
          });
        });
        lines.push({
          ...line, page, block, paragraph,
        });
      });
      paragraphs.push({
        ...paragraph, page, block,
      });
    });
    blocks.push({
      ...block, page,
    });
  });

  return {
    ...page, blocks, paragraphs, lines, words, symbols,
  };
};


/***/ }),

/***/ "./node_modules/tesseract.js/src/utils/getEnvironment.js":
/*!***************************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/getEnvironment.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const isElectron = __webpack_require__(/*! is-electron */ "./node_modules/is-electron/index.js");

module.exports = (key) => {
  const env = {};

  if (isElectron()) {
    env.type = 'electron';
  } else if (typeof window === 'object') {
    env.type = 'browser';
  } else if (typeof importScripts === 'function') {
    env.type = 'webworker';
  } else if (typeof process === 'object' && "function" === 'function') {
    env.type = 'node';
  }

  if (typeof key === 'undefined') {
    return env;
  }

  return env[key];
};


/***/ }),

/***/ "./node_modules/tesseract.js/src/utils/getId.js":
/*!******************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/getId.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = (prefix, cnt) => (
  `${prefix}-${cnt}-${Math.random().toString(16).slice(3, 8)}`
);


/***/ }),

/***/ "./node_modules/tesseract.js/src/utils/log.js":
/*!****************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/log.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

let logging = false;

exports.logging = logging;

exports.setLogging = (_logging) => {
  logging = _logging;
};

exports.log = (...args) => (logging ? console.log.apply(this, args) : null);


/***/ }),

/***/ "./node_modules/tesseract.js/src/utils/resolvePaths.js":
/*!*************************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/resolvePaths.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const isBrowser = __webpack_require__(/*! ./getEnvironment */ "./node_modules/tesseract.js/src/utils/getEnvironment.js")('type') === 'browser';
const resolveURL = isBrowser ? __webpack_require__(/*! resolve-url */ "./node_modules/resolve-url/resolve-url.js") : s => s; // eslint-disable-line

module.exports = (options) => {
  const opts = { ...options };
  ['corePath', 'workerPath', 'langPath'].forEach((key) => {
    if (typeof options[key] !== 'undefined') {
      opts[key] = resolveURL(opts[key]);
    }
  });
  return opts;
};


/***/ }),

/***/ "./node_modules/tesseract.js/src/worker/browser/defaultOptions.js":
/*!************************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/defaultOptions.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const resolveURL = __webpack_require__(/*! resolve-url */ "./node_modules/resolve-url/resolve-url.js");
const { version, dependencies } = __webpack_require__(/*! ../../../package.json */ "./node_modules/tesseract.js/package.json");
const defaultOptions = __webpack_require__(/*! ../../constants/defaultOptions */ "./node_modules/tesseract.js/src/constants/defaultOptions.js");

/*
 * Default options for browser worker
 */
module.exports = {
  ...defaultOptions,
  workerPath: (typeof process !== 'undefined' && process.env.TESS_ENV === 'development')
    ? resolveURL(`/dist/worker.dev.js?nocache=${Math.random().toString(36).slice(3)}`)
    : `https://unpkg.com/tesseract.js@v${version}/dist/worker.min.js`,
  /*
   * If browser doesn't support WebAssembly,
   * load ASM version instead
   */
  corePath: `https://unpkg.com/tesseract.js-core@v${dependencies['tesseract.js-core'].substring(1)}/tesseract-core.${typeof WebAssembly === 'object' ? 'wasm' : 'asm'}.js`,
};


/***/ }),

/***/ "./node_modules/tesseract.js/src/worker/browser/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 *
 * Tesseract Worker adapter for browser
 *
 * @fileoverview Tesseract Worker adapter for browser
 * @author Kevin Kwok <antimatter15@gmail.com>
 * @author Guillermo Webster <gui@mit.edu>
 * @author Jerome Wu <jeromewus@gmail.com>
 */
const defaultOptions = __webpack_require__(/*! ./defaultOptions */ "./node_modules/tesseract.js/src/worker/browser/defaultOptions.js");
const spawnWorker = __webpack_require__(/*! ./spawnWorker */ "./node_modules/tesseract.js/src/worker/browser/spawnWorker.js");
const terminateWorker = __webpack_require__(/*! ./terminateWorker */ "./node_modules/tesseract.js/src/worker/browser/terminateWorker.js");
const onMessage = __webpack_require__(/*! ./onMessage */ "./node_modules/tesseract.js/src/worker/browser/onMessage.js");
const send = __webpack_require__(/*! ./send */ "./node_modules/tesseract.js/src/worker/browser/send.js");
const loadImage = __webpack_require__(/*! ./loadImage */ "./node_modules/tesseract.js/src/worker/browser/loadImage.js");

module.exports = {
  defaultOptions,
  spawnWorker,
  terminateWorker,
  onMessage,
  send,
  loadImage,
};


/***/ }),

/***/ "./node_modules/tesseract.js/src/worker/browser/loadImage.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/loadImage.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const resolveURL = __webpack_require__(/*! resolve-url */ "./node_modules/resolve-url/resolve-url.js");

/**
 * readFromBlobOrFile
 *
 * @name readFromBlobOrFile
 * @function
 * @access private
 */
const readFromBlobOrFile = blob => (
  new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = ({ target: { error: { code } } }) => {
      reject(Error(`File could not be read! Code=${code}`));
    };
    fileReader.readAsArrayBuffer(blob);
  })
);

/**
 * loadImage
 *
 * @name loadImage
 * @function load image from different source
 * @access private
 */
const loadImage = async (image) => {
  let data = image;
  if (typeof image === 'undefined') {
    return 'undefined';
  }

  if (typeof image === 'string') {
    // Base64 Image
    if (/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(image)) {
      data = atob(image.split(',')[1])
        .split('')
        .map(c => c.charCodeAt(0));
    } else {
      const resp = await fetch(resolveURL(image));
      data = await resp.arrayBuffer();
    }
  } else if (image instanceof HTMLElement) {
    if (image.tagName === 'IMG') {
      data = await loadImage(image.src);
    }
    if (image.tagName === 'VIDEO') {
      data = await loadImage(image.poster);
    }
    if (image.tagName === 'CANVAS') {
      await new Promise((resolve) => {
        image.toBlob(async (blob) => {
          data = await readFromBlobOrFile(blob);
          resolve();
        });
      });
    }
  } else if (image instanceof File || image instanceof Blob) {
    data = await readFromBlobOrFile(image);
  }

  return new Uint8Array(data);
};

module.exports = loadImage;


/***/ }),

/***/ "./node_modules/tesseract.js/src/worker/browser/onMessage.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/onMessage.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = (worker, handler) => {
  worker.onmessage = ({ data }) => { // eslint-disable-line
    handler(data);
  };
};


/***/ }),

/***/ "./node_modules/tesseract.js/src/worker/browser/send.js":
/*!**************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/send.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * send
 *
 * @name send
 * @function send packet to worker and create a job
 * @access public
 */
module.exports = async (worker, packet) => {
  worker.postMessage(packet);
};


/***/ }),

/***/ "./node_modules/tesseract.js/src/worker/browser/spawnWorker.js":
/*!*********************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/spawnWorker.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * spawnWorker
 *
 * @name spawnWorker
 * @function create a new Worker in browser
 * @access public
 */
module.exports = ({ workerPath, workerBlobURL }) => {
  let worker;
  if (Blob && URL && workerBlobURL) {
    const blob = new Blob([`importScripts("${workerPath}");`], {
      type: 'application/javascript',
    });
    worker = new Worker(URL.createObjectURL(blob));
  } else {
    worker = new Worker(workerPath);
  }

  return worker;
};


/***/ }),

/***/ "./node_modules/tesseract.js/src/worker/browser/terminateWorker.js":
/*!*************************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/terminateWorker.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * terminateWorker
 *
 * @name terminateWorker
 * @function terminate worker
 * @access public
 */
module.exports = (worker) => {
  worker.terminate();
};


/***/ }),

/***/ "./src/app/capcheck/capcheck.component.scss":
/*!**************************************************!*\
  !*** ./src/app/capcheck/capcheck.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cropper-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  width: 100%;\n}\n\nimage-cropper {\n  max-height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGEvcHJvamVjdHMvZWNsaXBzZS13b3Jrc3BhY2UvSEtNNi9IS002L3NyYy9hcHAvY2FwY2hlY2svY2FwY2hlY2suY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhcGNoZWNrL2NhcGNoZWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NhcGNoZWNrL2NhcGNoZWNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyb3BwZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4gIFxuaW1hZ2UtY3JvcHBlciB7XG4gICAgbWF4LWhlaWdodDogNDAwcHg7XG59XG4gIFxuXG4udGhlRW5kIHtcblxufSIsIi5jcm9wcGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmltYWdlLWNyb3BwZXIge1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/capcheck/capcheck.component.ts":
/*!************************************************!*\
  !*** ./src/app/capcheck/capcheck.component.ts ***!
  \************************************************/
/*! exports provided: CapCheckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapCheckComponent", function() { return CapCheckComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/__ivy_ngcc__/fesm5/ngx-webcam.js");
/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tesseract.js */ "./node_modules/tesseract.js/src/index.js");
/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tesseract_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _services_mark6_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/mark6.service */ "./src/app/services/mark6.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _models_DataVal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/DataVal */ "./src/app/models/DataVal.ts");
/* harmony import */ var _models_common_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/common.model */ "./src/app/models/common.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-page-scroll-core */ "./node_modules/ngx-page-scroll-core/__ivy_ngcc__/fesm5/ngx-page-scroll-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};












var CapCheckComponent = /** @class */ (function () {
    function CapCheckComponent(commonService, mark6Service, _router, _activeRoute, navCtrl, loadingController, dataVal, pageScrollService, actionCtrl, document) {
        this.commonService = commonService;
        this.mark6Service = mark6Service;
        this._router = _router;
        this._activeRoute = _activeRoute;
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.dataVal = dataVal;
        this.pageScrollService = pageScrollService;
        this.actionCtrl = actionCtrl;
        this.document = document;
        this.MAX_NUM = 49;
        this.screenWidth = window.innerWidth;
        this.resultList = new Array();
        this.result = '-';
        this.result1 = '-';
        this.analysisClick = false;
        // toggle webcam on/off
        this.showWebcam = true;
        this.allowCameraSwitch = true;
        this.multipleWebcamsAvailable = false;
        this.videoOptions = {
        // width: {ideal: 1024},
        // height: {ideal: 576}
        };
        this.errors = [];
        // latest snapshot
        this.webcamImage = null;
        this.rotateVal = 0;
        // webcam snapshot trigger
        this.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
        this.nextWebcam = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.imageChangedEvent = '';
        this.croppedImage = '';
    }
    CapCheckComponent.prototype.ngOnInit = function () {
        var _this = this;
        ngx_webcam__WEBPACK_IMPORTED_MODULE_2__["WebcamUtil"].getAvailableVideoInputs()
            .then(function (mediaDevices) {
            _this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
        });
    };
    CapCheckComponent.prototype.ionViewDidEnter = function () {
        this.commonService.prepareInterstitialAds();
    };
    CapCheckComponent.prototype.ngAfterViewChecked = function () {
    };
    CapCheckComponent.prototype.triggerSnapshot = function () {
        this.trigger.next();
    };
    CapCheckComponent.prototype.toggleWebcam = function () {
        this.showWebcam = !this.showWebcam;
    };
    CapCheckComponent.prototype.handleInitError = function (error) {
        this.errors.push(error);
        if (!this.showError) {
            this.commonService.showAlert('ERROR', 'iPhone(iOS) 用户請使用 Safari 開啟!');
        }
    };
    CapCheckComponent.prototype.showNextWebcam = function (directionOrDeviceId) {
        // true => move forward through devices
        // false => move backwards through devices
        // string => move to device with given deviceId
        this.nextWebcam.next(directionOrDeviceId);
    };
    CapCheckComponent.prototype.handleImage = function (webcamImage) {
        console.info('received webcam image', webcamImage);
        this.webcamImage = webcamImage;
        this.theCamImage = this.webcamImage.imageAsDataUrl;
    };
    CapCheckComponent.prototype.cameraWasSwitched = function (deviceId) {
        console.log('active device: ' + deviceId);
        this.deviceId = deviceId;
    };
    Object.defineProperty(CapCheckComponent.prototype, "triggerObservable", {
        get: function () {
            return this.trigger.asObservable();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapCheckComponent.prototype, "nextWebcamObservable", {
        get: function () {
            return this.nextWebcam.asObservable();
        },
        enumerable: false,
        configurable: true
    });
    CapCheckComponent.prototype.takePhoto = function () {
        this.result = '-';
        this.croppedImage = null;
        this.trigger.next();
    };
    CapCheckComponent.prototype.check = function () {
        this.resultList.length = 0;
        this.resultList = [];
        if (this.croppedImage) {
            this.doOCR();
        }
        else {
            this.commonService.showAlert('Error', '請先 [選取彩票]，然後裁剪彩票至只有投注號碼！');
        }
    };
    CapCheckComponent.prototype.doRotate = function () {
        this.rotateVal = this.rotateVal + 1;
        if (this.rotateVal == 4) {
            this.rotateVal = 0;
        }
    };
    CapCheckComponent.prototype.reset = function () {
        this.result = '-';
        this.croppedImage = null;
        this.resultList.length = 0;
        this.resultList = [];
        this.analysisClick = false;
    };
    CapCheckComponent.prototype.fileChangeEvent = function (event) {
        this.reset();
        this.imageChangedEvent = event;
    };
    CapCheckComponent.prototype.imageCropped = function (event) {
        this.croppedImage = event.base64;
    };
    CapCheckComponent.prototype.imageLoaded = function () {
        //console.log('cropper image loaded');
    };
    CapCheckComponent.prototype.cropperReady = function () {
        // cropper ready
        //console.log('cropper ready');
    };
    CapCheckComponent.prototype.loadImageFailed = function () {
        // show message
        //console.log('cropper loadImageFailed');
    };
    CapCheckComponent.prototype.doOCR = function () {
        return __awaiter(this, void 0, void 0, function () {
            var worker, loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        worker = Object(tesseract_js__WEBPACK_IMPORTED_MODULE_3__["createWorker"])({
                            logger: function (m) { return console.log(m); }
                        });
                        return [4 /*yield*/, this.loadingController.create({
                                message: '號碼辨識中...',
                                spinner: 'circles'
                            })];
                    case 1:
                        loading = _a.sent();
                        loading.present().then(function () {
                            worker.load().then(function () {
                                worker.loadLanguage('eng').then(function () {
                                    worker.initialize('eng').then(function () {
                                        worker.setParameters({
                                            tessedit_char_whitelist: '0123456789+/',
                                        }).then(function () {
                                            worker.recognize(_this.croppedImage).then(function (resultData) {
                                                //console.log(resultData.data.text);
                                                _this.result = resultData.data.text;
                                                worker.terminate();
                                                /*
                                                this.doCheck(loading).subscribe((data) => {
                                                  console.log('CHECK RESULT: ' + JSON.stringify(data));
                                                  this.result1 = JSON.stringify(data);
                                                  loading.dismiss();
                                                });
                                                */
                                                if (_this.result != null && _this.result.length > 0) {
                                                    var nums = _this.result.split('/');
                                                    // tslint:disable-next-line: forin
                                                    for (var n in nums) {
                                                        var theNum = nums[n].replace(/(\r\n|\n|\r)/gm, '').replace(/\s/g, '');
                                                        _this.resultList.push(theNum);
                                                    }
                                                }
                                                loading.dismiss();
                                                setTimeout(function () { _this.content.scrollToBottom(); }, 300);
                                            });
                                        });
                                    });
                                });
                            });
                        }).finally(function () {
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CapCheckComponent.prototype.doCheck = function () {
        return __awaiter(this, void 0, void 0, function () {
            var finalResult, loading_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        finalResult = new Array();
                        if (!(this.resultList.length !== 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loadingController.create({
                                message: '核對中...',
                                spinner: 'circles'
                            })];
                    case 1:
                        loading_1 = _a.sent();
                        loading_1.present().then(function () {
                            _this.mark6Service.getLast30().subscribe(function (result30) {
                                if (result30 != null && result30.length > 0) {
                                    var inUums = _this.inputNums.toArray();
                                    _this.resultList.length = 0;
                                    _this.resultList = [];
                                    // tslint:disable-next-line: forin
                                    for (var inu in inUums) {
                                        _this.resultList.push(inUums[inu].nativeElement.value);
                                    }
                                    //const nums = this.result.split('/');
                                    // tslint:disable-next-line: forin
                                    //for (const n in nums) {
                                    for (var n in _this.resultList) {
                                        var bNoVal = Number(n) + 1;
                                        //const theNum = nums[n].replace(/(\r\n|\n|\r)/gm, '');
                                        var theNum = _this.resultList[n].replace(/(\r\n|\n|\r)/gm, '');
                                        var bankerList = theNum.split('+');
                                        var selectedNumber = new Array();
                                        // tslint:disable-next-line: forin
                                        for (var bNo in bankerList) {
                                            // console.log(Number(bankerList[bNo]));
                                            var theBNumber = Number(bankerList[bNo]);
                                            if (theBNumber > _this.MAX_NUM || theBNumber <= 0 || !Object(_models_common_model__WEBPACK_IMPORTED_MODULE_9__["isNumberVal"])(bankerList[bNo])) {
                                                _this.commonService.showAlert('ERROR', "\u7B2C " + bNoVal + " \u6CE8\u542B\u6709\u932F\u8AA4\u865F\u78BC\uFF0C\u8ACB\u4FEE\u6B63\uFF01");
                                                loading_1.dismiss();
                                                finalResult.length = 0;
                                                finalResult = [];
                                                return;
                                            }
                                            else {
                                                selectedNumber.push(theBNumber);
                                            }
                                        }
                                        if (selectedNumber.length < 6) {
                                            _this.commonService.showAlert('Error', "\u7B2C " + bNoVal + " \u6CE8\u6700\u5C11\u8981\u67096\u500B\u5B57\uFF0C\u8ACB\u4FEE\u6B63\uFF01");
                                            loading_1.dismiss();
                                            finalResult.length = 0;
                                            finalResult = [];
                                            return;
                                        }
                                        if (Object(_models_common_model__WEBPACK_IMPORTED_MODULE_9__["hasDuplicates"])(selectedNumber)) {
                                            _this.commonService.showAlert('Error', "\u7B2C " + bNoVal + " \u6CE8\u542B\u6709\u91CD\u8986\u865F\u78BC\uFF0C\u8ACB\u4FEE\u6B63\uFF01");
                                            loading_1.dismiss();
                                            finalResult.length = 0;
                                            finalResult = [];
                                            return;
                                        }
                                        if (selectedNumber.length > _this.MAX_NUM) {
                                            _this.commonService.showAlert('Error', "\u7B2C {bNoVal} \u6CE8\u4E0D\u80FD\u591A\u65BC " + _this.MAX_NUM + " \u500B\u5B57\uFF0C\u8ACB\u4FEE\u6B63\uFF01");
                                            loading_1.dismiss();
                                            finalResult.length = 0;
                                            finalResult = [];
                                            return;
                                        }
                                        var iCheckResult = new _models_common_model__WEBPACK_IMPORTED_MODULE_9__["M6CheckResult"]();
                                        iCheckResult.numbers = theNum;
                                        var matchedResults = new Array();
                                        for (var _i = 0, result30_1 = result30; _i < result30_1.length; _i++) {
                                            var tmpResult30 = result30_1[_i];
                                            var iResult = new _models_common_model__WEBPACK_IMPORTED_MODULE_9__["MarkSixResult"]();
                                            iResult = JSON.parse(JSON.stringify(tmpResult30));
                                            var matchCount = 0;
                                            for (var _a = 0, selectedNumber_1 = selectedNumber; _a < selectedNumber_1.length; _a++) {
                                                var selNo = selectedNumber_1[_a];
                                                if (selNo === iResult.number1) {
                                                    iResult.matched[0] = true;
                                                    matchCount++;
                                                }
                                                else if (selNo === iResult.number2) {
                                                    iResult.matched[1] = true;
                                                    matchCount++;
                                                }
                                                else if (selNo === iResult.number3) {
                                                    iResult.matched[2] = true;
                                                    matchCount++;
                                                }
                                                else if (selNo === iResult.number4) {
                                                    iResult.matched[3] = true;
                                                    matchCount++;
                                                }
                                                else if (selNo === iResult.number5) {
                                                    iResult.matched[4] = true;
                                                    matchCount++;
                                                }
                                                else if (selNo === iResult.number6) {
                                                    iResult.matched[5] = true;
                                                    matchCount++;
                                                }
                                                if (selNo === iResult.numberX) {
                                                    iResult.matched[6] = true;
                                                    matchCount = matchCount + 0.5;
                                                }
                                            }
                                            if (matchCount >= 3) {
                                                matchedResults.push(iResult);
                                            }
                                        }
                                        iCheckResult.matchedResults = matchedResults;
                                        finalResult.push(iCheckResult);
                                    }
                                    _this.result1 = JSON.stringify(finalResult);
                                    loading_1.dismiss();
                                    if (finalResult.length >= 1) {
                                        _this.dataVal.storage = finalResult;
                                        _this.navCtrl.navigateForward(['capcheck/result']);
                                    }
                                    else {
                                        _this.commonService.showAlert('Info', '閣下的彩票在最近30期沒有中獎');
                                    }
                                }
                                else {
                                    //console.log('>>>> no result:::');
                                    loading_1.dismiss();
                                    finalResult.length = 0;
                                    finalResult = [];
                                    return;
                                }
                            }, function (error) {
                                loading_1.dismiss();
                                console.log(error);
                                finalResult.length = 0;
                                finalResult = [];
                                return;
                            });
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        //console.log('ELSE::::' + JSON.stringify(finalResult));
                        this.commonService.showAlert('Error', '請先 [選取彩票]，然後裁剪彩票至只有投注號碼！');
                        return [2 /*return*/];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CapCheckComponent.prototype.openActionSheet = function () {
        var _this = this;
        this.actionCtrl.create({
            buttons: [
                {
                    text: '選取彩票',
                    icon: 'camera',
                    handler: function () {
                        var el = document.getElementById('fileButtonClick');
                        el.click();
                    }
                },
                {
                    text: '辨識號碼',
                    icon: 'barcode',
                    handler: function () {
                        _this.check();
                    }
                },
                {
                    text: '核對彩票',
                    icon: 'contract',
                    handler: function () {
                        _this.commonService.showInterstitialAds();
                        _this.doCheck();
                    }
                },
                {
                    text: '旋轉',
                    icon: 'return-up-forward-outline',
                    handler: function () {
                        _this.doRotate();
                    }
                },
                {
                    text: "取消",
                    role: 'cancel'
                }
            ]
        }).then(function (ac) { return ac.present(); });
    };
    CapCheckComponent.ctorParameters = function () { return [
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
        { type: _services_mark6_service__WEBPACK_IMPORTED_MODULE_6__["Mark6Service"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
        { type: _models_DataVal__WEBPACK_IMPORTED_MODULE_8__["DataVal"] },
        { type: ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_11__["PageScrollService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"],] }] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('inputNums')
    ], CapCheckComponent.prototype, "inputNums", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fileButtonClick', { static: true })
    ], CapCheckComponent.prototype, "fileButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: true })
    ], CapCheckComponent.prototype, "content", void 0);
    CapCheckComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-capcheck',
            template: __importDefault(__webpack_require__(/*! raw-loader!./capcheck.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/capcheck/capcheck.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./capcheck.component.scss */ "./src/app/capcheck/capcheck.component.scss")).default]
        }),
        __param(9, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]))
    ], CapCheckComponent);
    return CapCheckComponent;
}());



/***/ }),

/***/ "./src/app/capcheck/capcheck.module.ts":
/*!*********************************************!*\
  !*** ./src/app/capcheck/capcheck.module.ts ***!
  \*********************************************/
/*! exports provided: CapCheckComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapCheckComponentModule", function() { return CapCheckComponentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _capcheck_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./capcheck.component */ "./src/app/capcheck/capcheck.component.ts");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/__ivy_ngcc__/fesm5/ngx-webcam.js");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm5/ngx-image-cropper.js");
/* harmony import */ var ngx_textarea_autosize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-textarea-autosize */ "./node_modules/ngx-textarea-autosize/__ivy_ngcc__/fesm5/ngx-textarea-autosize.js");
/* harmony import */ var _capcheckresult_capcheckresult_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./capcheckresult/capcheckresult.component */ "./src/app/capcheck/capcheckresult/capcheckresult.component.ts");
/* harmony import */ var _capchecklist_capchecklist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./capchecklist/capchecklist.component */ "./src/app/capcheck/capchecklist/capchecklist.component.ts");
/* harmony import */ var ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-page-scroll-core */ "./node_modules/ngx-page-scroll-core/__ivy_ngcc__/fesm5/ngx-page-scroll-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var CapCheckComponentModule = /** @class */ (function () {
    function CapCheckComponentModule() {
    }
    CapCheckComponentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                ngx_webcam__WEBPACK_IMPORTED_MODULE_6__["WebcamModule"],
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__["ImageCropperModule"],
                ngx_textarea_autosize__WEBPACK_IMPORTED_MODULE_8__["TextareaAutosizeModule"],
                ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_11__["NgxPageScrollCoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _capcheck_component__WEBPACK_IMPORTED_MODULE_5__["CapCheckComponent"]
                    },
                    {
                        path: 'result',
                        component: _capcheckresult_capcheckresult_component__WEBPACK_IMPORTED_MODULE_9__["CapCheckResultComponent"]
                    },
                    {
                        path: 'list',
                        component: _capchecklist_capchecklist_component__WEBPACK_IMPORTED_MODULE_10__["CapcheckListComponent"]
                    }
                ])
            ],
            declarations: [_capcheck_component__WEBPACK_IMPORTED_MODULE_5__["CapCheckComponent"], _capcheckresult_capcheckresult_component__WEBPACK_IMPORTED_MODULE_9__["CapCheckResultComponent"], _capchecklist_capchecklist_component__WEBPACK_IMPORTED_MODULE_10__["CapcheckListComponent"]]
        })
    ], CapCheckComponentModule);
    return CapCheckComponentModule;
}());



/***/ }),

/***/ "./src/app/capcheck/capchecklist/capchecklist.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/capcheck/capchecklist/capchecklist.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcGNoZWNrL2NhcGNoZWNrbGlzdC9jYXBjaGVja2xpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/capcheck/capchecklist/capchecklist.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/capcheck/capchecklist/capchecklist.component.ts ***!
  \*****************************************************************/
/*! exports provided: CapcheckListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapcheckListComponent", function() { return CapcheckListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_DataVal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/DataVal */ "./src/app/models/DataVal.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_mark6_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/mark6.service */ "./src/app/services/mark6.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var CapcheckListComponent = /** @class */ (function () {
    function CapcheckListComponent(dataVal, commonService, m6service, _router, navCtrl, loadingController) {
        this.dataVal = dataVal;
        this.commonService = commonService;
        this.m6service = m6service;
        this._router = _router;
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
    }
    CapcheckListComponent.prototype.ngOnInit = function () {
        this.m6results = this.dataVal.storage;
        if (this.m6results == null) {
            this.navCtrl.navigateRoot('/404');
        }
    };
    CapcheckListComponent.prototype.showDetail = function (val) {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Loading',
                            spinner: 'circles'
                        })];
                    case 1:
                        loading = _a.sent();
                        loading.present().then(function () {
                            _this.navCtrl.navigateForward(['last30/detail', val]);
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CapcheckListComponent.prototype.toDate = function (val) {
        if (val != null) {
            return this.m6service.toDateStr(Number(val));
        }
        else {
            return '';
        }
        // return this.m6service.toDateStr(Number(val));
    };
    CapcheckListComponent.ctorParameters = function () { return [
        { type: src_app_models_DataVal__WEBPACK_IMPORTED_MODULE_1__["DataVal"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
        { type: src_app_services_mark6_service__WEBPACK_IMPORTED_MODULE_3__["Mark6Service"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
    ]; };
    CapcheckListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-capchecklist',
            template: __importDefault(__webpack_require__(/*! raw-loader!./capchecklist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/capcheck/capchecklist/capchecklist.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./capchecklist.component.scss */ "./src/app/capcheck/capchecklist/capchecklist.component.scss")).default]
        })
    ], CapcheckListComponent);
    return CapcheckListComponent;
}());



/***/ }),

/***/ "./src/app/capcheck/capcheckresult/capcheckresult.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/capcheck/capcheckresult/capcheckresult.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrap {\n  white-space: pre-wrap;\n  /* CSS3 */\n  white-space: -moz-pre-wrap;\n  /* Firefox */\n  white-space: -pre-wrap;\n  /* Opera <7 */\n  white-space: -o-pre-wrap;\n  /* Opera 7 */\n  word-wrap: break-word;\n  /* IE */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGEvcHJvamVjdHMvZWNsaXBzZS13b3Jrc3BhY2UvSEtNNi9IS002L3NyYy9hcHAvY2FwY2hlY2svY2FwY2hlY2tyZXN1bHQvY2FwY2hlY2tyZXN1bHQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhcGNoZWNrL2NhcGNoZWNrcmVzdWx0L2NhcGNoZWNrcmVzdWx0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFBNEIsU0FBQTtFQUM1QiwwQkFBQTtFQUE0QixZQUFBO0VBQzVCLHNCQUFBO0VBQTRCLGFBQUE7RUFDNUIsd0JBQUE7RUFBNEIsWUFBQTtFQUM1QixxQkFBQTtFQUE0QixPQUFBO0FDTWhDIiwiZmlsZSI6InNyYy9hcHAvY2FwY2hlY2svY2FwY2hlY2tyZXN1bHQvY2FwY2hlY2tyZXN1bHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcCB7IFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDsgICAgICAvKiBDU1MzICovICAgXG4gICAgd2hpdGUtc3BhY2U6IC1tb3otcHJlLXdyYXA7IC8qIEZpcmVmb3ggKi8gICAgXG4gICAgd2hpdGUtc3BhY2U6IC1wcmUtd3JhcDsgICAgIC8qIE9wZXJhIDw3ICovICAgXG4gICAgd2hpdGUtc3BhY2U6IC1vLXByZS13cmFwOyAgIC8qIE9wZXJhIDcgKi8gICAgXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkOyAgICAgIC8qIElFICovXG4gfVxuICIsIi53cmFwIHtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAvKiBDU1MzICovXG4gIHdoaXRlLXNwYWNlOiAtbW96LXByZS13cmFwO1xuICAvKiBGaXJlZm94ICovXG4gIHdoaXRlLXNwYWNlOiAtcHJlLXdyYXA7XG4gIC8qIE9wZXJhIDw3ICovXG4gIHdoaXRlLXNwYWNlOiAtby1wcmUtd3JhcDtcbiAgLyogT3BlcmEgNyAqL1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIC8qIElFICovXG59Il19 */");

/***/ }),

/***/ "./src/app/capcheck/capcheckresult/capcheckresult.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/capcheck/capcheckresult/capcheckresult.component.ts ***!
  \*********************************************************************/
/*! exports provided: CapCheckResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapCheckResultComponent", function() { return CapCheckResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_DataVal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/DataVal */ "./src/app/models/DataVal.ts");
/* harmony import */ var src_app_services_mark6_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/mark6.service */ "./src/app/services/mark6.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var CapCheckResultComponent = /** @class */ (function () {
    function CapCheckResultComponent(dataVal, commonService, m6service, _router, navCtrl, loadingController) {
        this.dataVal = dataVal;
        this.commonService = commonService;
        this.m6service = m6service;
        this._router = _router;
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
    }
    CapCheckResultComponent.prototype.ngOnInit = function () {
        var tmpResults = this.dataVal.storage;
        this.results = [];
        // tslint:disable-next-line: forin
        for (var iResult in tmpResults) {
            var iRes = tmpResults[iResult];
            iRes.numbers = iRes.numbers.replace(/([+])/g, ' $1 ');
            this.results.push(iRes);
        }
    };
    CapCheckResultComponent.prototype.showDetail = function (m6Result) {
        if (m6Result.matchedResults.length > 0) {
            this.dataVal.storage = m6Result;
            this.navCtrl.navigateForward(['capcheck/list']);
        }
    };
    CapCheckResultComponent.ctorParameters = function () { return [
        { type: src_app_models_DataVal__WEBPACK_IMPORTED_MODULE_1__["DataVal"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
        { type: src_app_services_mark6_service__WEBPACK_IMPORTED_MODULE_2__["Mark6Service"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
    ]; };
    CapCheckResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-capcheckresult',
            template: __importDefault(__webpack_require__(/*! raw-loader!./capcheckresult.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/capcheck/capcheckresult/capcheckresult.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./capcheckresult.component.scss */ "./src/app/capcheck/capcheckresult/capcheckresult.component.scss")).default]
        })
    ], CapCheckResultComponent);
    return CapCheckResultComponent;
}());



/***/ })

}]);
//# sourceMappingURL=capcheck-capcheck-module.js.map