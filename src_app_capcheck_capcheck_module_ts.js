(self["webpackChunkHKM6"] = self["webpackChunkHKM6"] || []).push([["src_app_capcheck_capcheck_module_ts"],{

/***/ 11497:
/*!*******************************************!*\
  !*** ./node_modules/is-electron/index.js ***!
  \*******************************************/
/***/ (function(module) {

// https://github.com/electron/electron/issues/2288
function isElectron() {
  // Renderer process
  if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
    return true;
  } // Main process


  if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
    return true;
  } // Detect the user agent when the `nodeIntegration` option is set to true


  if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
    return true;
  }

  return false;
}

module.exports = isElectron;

/***/ }),

/***/ 55819:
/*!***********************************************************************************!*\
  !*** ./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageCropperComponent": function() { return /* binding */ ImageCropperComponent; },
/* harmony export */   "ImageCropperModule": function() { return /* binding */ ImageCropperModule; },
/* harmony export */   "base64ToFile": function() { return /* binding */ base64ToFile; }
/* harmony export */ });
/* harmony import */ var _Volumes_Data_projects_eclipse_workspace_HKM6_HKM6_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var _Volumes_Data_projects_eclipse_workspace_HKM6_HKM6_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 39075);





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} exifRotationOrBase64Image
 * @return {?}
 */




var _c0 = ["sourceImage"];

function ImageCropperComponent_img_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "img", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("load", function ImageCropperComponent_img_1_Template_img_load_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r3.imageLoadedInView();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("visibility", ctx_r0.imageVisible ? "visible" : "hidden")("transform", ctx_r0.safeTransformStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.safeImgDataUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}

function ImageCropperComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function ImageCropperComponent_div_3_Template_div_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r5.keyboardAccess($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_3_Template_div_mousedown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r7.startMove($event, "move");
    })("touchstart", function ImageCropperComponent_div_3_Template_div_touchstart_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r8.startMove($event, "move");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\xA0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_3_Template_span_mousedown_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r9.startMove($event, "resize", "topleft");
    })("touchstart", function ImageCropperComponent_div_3_Template_span_touchstart_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r10.startMove($event, "resize", "topleft");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_3_Template_span_mousedown_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r11.startMove($event, "resize", "topright");
    })("touchstart", function ImageCropperComponent_div_3_Template_span_touchstart_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r12.startMove($event, "resize", "topright");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_3_Template_span_mousedown_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r13.startMove($event, "resize", "bottomright");
    })("touchstart", function ImageCropperComponent_div_3_Template_span_touchstart_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r14.startMove($event, "resize", "bottomright");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_3_Template_span_mousedown_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r15.startMove($event, "resize", "bottomleft");
    })("touchstart", function ImageCropperComponent_div_3_Template_span_touchstart_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r16.startMove($event, "resize", "bottomleft");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_3_Template_span_mousedown_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r17.startMove($event, "resize", "top");
    })("touchstart", function ImageCropperComponent_div_3_Template_span_touchstart_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r18.startMove($event, "resize", "top");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_3_Template_span_mousedown_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r19.startMove($event, "resize", "right");
    })("touchstart", function ImageCropperComponent_div_3_Template_span_touchstart_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r20.startMove($event, "resize", "right");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_3_Template_span_mousedown_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r21.startMove($event, "resize", "bottom");
    })("touchstart", function ImageCropperComponent_div_3_Template_span_touchstart_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r22.startMove($event, "resize", "bottom");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_3_Template_span_mousedown_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r23.startMove($event, "resize", "left");
    })("touchstart", function ImageCropperComponent_div_3_Template_span_touchstart_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r24.startMove($event, "resize", "left");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("top", ctx_r1.cropper.y1, "px")("left", ctx_r1.cropper.x1, "px")("width", ctx_r1.cropper.x2 - ctx_r1.cropper.x1, "px")("height", ctx_r1.cropper.y2 - ctx_r1.cropper.y1, "px")("margin-left", ctx_r1.alignImage === "center" ? ctx_r1.marginLeft : null)("visibility", ctx_r1.imageVisible ? "visible" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("rounded", ctx_r1.roundCropper);
  }
}

function getTransformationsFromExifData(exifRotationOrBase64Image) {
  if (typeof exifRotationOrBase64Image === 'string') {
    exifRotationOrBase64Image = getExifRotation(exifRotationOrBase64Image);
  }

  switch (exifRotationOrBase64Image) {
    case 2:
      return {
        rotate: 0,
        flip: true
      };

    case 3:
      return {
        rotate: 2,
        flip: false
      };

    case 4:
      return {
        rotate: 2,
        flip: true
      };

    case 5:
      return {
        rotate: 1,
        flip: true
      };

    case 6:
      return {
        rotate: 1,
        flip: false
      };

    case 7:
      return {
        rotate: 3,
        flip: true
      };

    case 8:
      return {
        rotate: 3,
        flip: false
      };

    default:
      return {
        rotate: 0,
        flip: false
      };
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
    if (view.getUint16(offset + 2, false) <= 8) return -1;
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
        if (view.getUint16(offset + i * 12, little) == 0x0112) {
          return view.getUint16(offset + i * 12 + 8, little);
        }
      }
    } else if ((marker & 0xFF00) != 0xFF00) {
      break;
    } else {
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
            } //hermite filter


            weight = 2 * w * w * w - 3 * w * w + 1;
            /** @type {?} */

            var pos_x = 4 * (xx + yy * width_source); //alpha

            gx_a += weight * data[pos_x + 3];
            weights_alpha += weight; //colors

            if (data[pos_x + 3] < 255) weight = weight * data[pos_x + 3] / 250;
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
    canvas.height = height; //draw

    ctx.putImageData(img2, 0, 0);
  }
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var ImageCropperComponent = /*#__PURE__*/function () {
  /**
   * @param {?} sanitizer
   * @param {?} cd
   */
  function ImageCropperComponent(sanitizer, cd) {
    (0,_Volumes_Data_projects_eclipse_workspace_HKM6_HKM6_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, ImageCropperComponent);

    this.sanitizer = sanitizer;
    this.cd = cd;
    this.setImageMaxSizeRetries = 0;
    this.cropperScaledMinWidth = 20;
    this.cropperScaledMinHeight = 20;
    this.exifTransform = {
      rotate: 0,
      flip: false
    };
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
    this.imageCropped = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.startCropImage = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.imageLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.cropperReady = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.loadImageFailed = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.initCropper();
  }
  /**
   * @param {?} event
   * @return {?}
   */


  (0,_Volumes_Data_projects_eclipse_workspace_HKM6_HKM6_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(ImageCropperComponent, [{
    key: "imageChangedEvent",
    set: function set(event) {
      this.initCropper();

      if (event && event.target && event.target.files && event.target.files.length > 0) {
        this.loadImageFile(event.target.files[0]);
      }
    }
    /**
     * @param {?} imageBase64
     * @return {?}
     */

  }, {
    key: "imageBase64",
    set: function set(imageBase64) {
      this.initCropper();
      this.checkExifAndLoadBase64Image(imageBase64);
    }
    /**
     * @param {?} file
     * @return {?}
     */

  }, {
    key: "imageFile",
    set: function set(file) {
      this.initCropper();

      if (file) {
        this.loadImageFile(file);
      }
    }
    /**
     * @param {?} changes
     * @return {?}
     */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
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
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "setCssTransform",
    value: function setCssTransform() {
      this.safeTransformStyle = this.sanitizer.bypassSecurityTrustStyle('scaleX(' + (this.transform.scale || 1) * (this.transform.flipH ? -1 : 1) + ')' + 'scaleY(' + (this.transform.scale || 1) * (this.transform.flipV ? -1 : 1) + ')' + 'rotate(' + (this.transform.rotate || 0) + 'deg)');
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this.stepSize = this.initialStepSize;
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "initCropper",
    value: function initCropper() {
      this.imageVisible = false;
      this.transformedImage = null;
      this.safeImgDataUrl = 'data:image/png;base64,iVBORw0KGg' + 'oAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAU' + 'AAarVyFEAAAAASUVORK5CYII=';
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
    }
    /**
     * @private
     * @param {?} file
     * @return {?}
     */

  }, {
    key: "loadImageFile",
    value: function loadImageFile(file) {
      var _this = this;

      /** @type {?} */
      var fileReader = new FileReader();

      fileReader.onload =
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        /** @type {?} */
        var imageType = file.type;

        if (_this.isValidImageType(imageType)) {
          _this.checkExifAndLoadBase64Image(event.target.result);
        } else {
          _this.loadImageFailed.emit();
        }
      };

      fileReader.readAsDataURL(file);
    }
    /**
     * @private
     * @param {?} type
     * @return {?}
     */

  }, {
    key: "isValidImageType",
    value: function isValidImageType(type) {
      return /image\/(png|jpg|jpeg|bmp|gif|tiff)/.test(type);
    }
    /**
     * @private
     * @param {?} imageBase64
     * @return {?}
     */

  }, {
    key: "checkExifAndLoadBase64Image",
    value: function checkExifAndLoadBase64Image(imageBase64) {
      var _this2 = this;

      return new Promise(
      /**
      * @param {?} resolve
      * @param {?} reject
      * @return {?}
      */
      function (resolve, reject) {
        /** @type {?} */
        var fail =
        /**
        * @param {?=} ex
        * @return {?}
        */
        function fail(ex) {
          _this2.originalImage = null;
          _this2.originalBase64 = null;
          reject(ex);
        };

        _this2.originalImage = new Image();

        _this2.originalImage.onload =
        /**
        * @return {?}
        */
        function () {
          _this2.originalBase64 = imageBase64;
          _this2.exifTransform = getTransformationsFromExifData(imageBase64);
          _this2.originalSize.width = _this2.originalImage.naturalWidth;
          _this2.originalSize.height = _this2.originalImage.naturalHeight;

          _this2.transformOriginalImage().then(
          /**
          * @return {?}
          */
          function () {
            return resolve();
          }).catch(fail);
        };

        _this2.originalImage.onerror = fail;
        _this2.originalImage.src = imageBase64;
      });
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "getTransformedSize",
    value: function getTransformedSize() {
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
            height: Math.max(this.originalSize.width, minHeightToContain)
          };
        } else {
          /** @type {?} */
          var _minWidthToContain = this.originalSize.height * this.aspectRatio;
          /** @type {?} */


          var _minHeightToContain = this.originalSize.width / this.aspectRatio;

          return {
            width: Math.max(this.originalSize.width, _minWidthToContain),
            height: Math.max(this.originalSize.height, _minHeightToContain)
          };
        }
      }

      if (canvasRotation % 2) {
        return {
          height: this.originalSize.width,
          width: this.originalSize.height
        };
      }

      return {
        width: this.originalSize.width,
        height: this.originalSize.height
      };
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "transformImageBase64",
    value: function transformImageBase64() {
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
    }
    /**
     * @private
     * @param {?} transformedBase64
     * @return {?}
     */

  }, {
    key: "setTransformedImage",
    value: function setTransformedImage(transformedBase64) {
      var _this3 = this;

      return new Promise(
      /**
      * @param {?} resolve
      * @param {?} reject
      * @return {?}
      */
      function (resolve, reject) {
        _this3.transformedBase64 = transformedBase64;
        _this3.safeImgDataUrl = _this3.sanitizer.bypassSecurityTrustResourceUrl(transformedBase64);
        _this3.transformedImage = new Image();

        _this3.transformedImage.onload =
        /**
        * @return {?}
        */
        function () {
          _this3.transformedSize.width = _this3.transformedImage.naturalWidth;
          _this3.transformedSize.height = _this3.transformedImage.naturalHeight;
          resolve();

          _this3.cd.markForCheck();
        };

        _this3.transformedImage.onerror =
        /**
        * @return {?}
        */
        function () {
          _this3.transformedImage = null;
          reject();
        };

        _this3.transformedImage.src = _this3.transformedBase64;
      });
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "transformOriginalImage",
    value: function transformOriginalImage() {
      var _this4 = this;

      if (!this.originalImage || !this.originalImage.complete || !this.exifTransform) {
        return Promise.reject(new Error('No Image Loaded'));
      }

      return this.transformImageBase64().then(
      /**
      * @param {?} transformedBase64
      * @return {?}
      */
      function (transformedBase64) {
        return _this4.setTransformedImage(transformedBase64);
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "imageLoadedInView",
    value: function imageLoadedInView() {
      var _this5 = this;

      if (this.transformedImage != null) {
        this.imageLoaded.emit();
        this.setImageMaxSizeRetries = 0;
        setTimeout(
        /**
        * @return {?}
        */
        function () {
          return _this5.checkImageMaxSizeRecursively();
        });
      }
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "checkImageMaxSizeRecursively",
    value: function checkImageMaxSizeRecursively() {
      var _this6 = this;

      if (this.setImageMaxSizeRetries > 40) {
        this.loadImageFailed.emit();
      } else if (this.sourceImage && this.sourceImage.nativeElement && this.sourceImage.nativeElement.offsetWidth > 0) {
        this.setMaxSize();
        this.setCropperScaledMinSize();
        this.resetCropperPosition();
        this.cropperReady.emit(Object.assign({}, this.maxSize));
        this.cd.markForCheck();
      } else {
        this.setImageMaxSizeRetries++;
        setTimeout(
        /**
        * @return {?}
        */
        function () {
          _this6.checkImageMaxSizeRecursively();
        }, 50);
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "onResize",
    value: function onResize() {
      this.resizeCropperPosition();
      this.setMaxSize();
      this.setCropperScaledMinSize();
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "resizeCropperPosition",
    value: function resizeCropperPosition() {
      /** @type {?} */
      var sourceImageElement = this.sourceImage.nativeElement;

      if (this.maxSize.width !== sourceImageElement.offsetWidth || this.maxSize.height !== sourceImageElement.offsetHeight) {
        this.cropper.x1 = this.cropper.x1 * sourceImageElement.offsetWidth / this.maxSize.width;
        this.cropper.x2 = this.cropper.x2 * sourceImageElement.offsetWidth / this.maxSize.width;
        this.cropper.y1 = this.cropper.y1 * sourceImageElement.offsetHeight / this.maxSize.height;
        this.cropper.y2 = this.cropper.y2 * sourceImageElement.offsetHeight / this.maxSize.height;
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "resetCropperPosition",
    value: function resetCropperPosition() {
      /** @type {?} */
      var sourceImageElement = this.sourceImage.nativeElement;

      if (!this.maintainAspectRatio) {
        this.cropper.x1 = 0;
        this.cropper.x2 = sourceImageElement.offsetWidth;
        this.cropper.y1 = 0;
        this.cropper.y2 = sourceImageElement.offsetHeight;
      } else if (sourceImageElement.offsetWidth / this.aspectRatio < sourceImageElement.offsetHeight) {
        this.cropper.x1 = 0;
        this.cropper.x2 = sourceImageElement.offsetWidth;
        /** @type {?} */

        var cropperHeight = sourceImageElement.offsetWidth / this.aspectRatio;
        this.cropper.y1 = (sourceImageElement.offsetHeight - cropperHeight) / 2;
        this.cropper.y2 = this.cropper.y1 + cropperHeight;
      } else {
        this.cropper.y1 = 0;
        this.cropper.y2 = sourceImageElement.offsetHeight;
        /** @type {?} */

        var cropperWidth = sourceImageElement.offsetHeight * this.aspectRatio;
        this.cropper.x1 = (sourceImageElement.offsetWidth - cropperWidth) / 2;
        this.cropper.x2 = this.cropper.x1 + cropperWidth;
      }

      this.doAutoCrop();
      this.imageVisible = true;
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "keyboardAccess",
    value: function keyboardAccess(event) {
      this.changeKeyboardStepSize(event);
      this.keyboardMoveCropper(event);
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "changeKeyboardStepSize",
    value: function changeKeyboardStepSize(event) {
      if (event.key >= '1' && event.key <= '9') {
        this.stepSize = +event.key;
        return;
      }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "keyboardMoveCropper",
    value: function keyboardMoveCropper(event) {
      /** @type {?} */
      var keyboardWhiteList = ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'];

      if (!keyboardWhiteList.includes(event.key)) {
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
      this.startMove({
        clientX: 0,
        clientY: 0
      }, moveType, position);
      this.moveImg(moveEvent);
      this.moveStop();
    }
    /**
     * @private
     * @param {?} key
     * @return {?}
     */

  }, {
    key: "getPositionForKey",
    value: function getPositionForKey(key) {
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
    }
    /**
     * @private
     * @param {?} key
     * @return {?}
     */

  }, {
    key: "getInvertedPositionForKey",
    value: function getInvertedPositionForKey(key) {
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
    }
    /**
     * @private
     * @param {?} key
     * @param {?} stepSize
     * @return {?}
     */

  }, {
    key: "getEventForKey",
    value: function getEventForKey(key, stepSize) {
      switch (key) {
        case 'ArrowUp':
          return {
            clientX: 0,
            clientY: stepSize * -1
          };

        case 'ArrowRight':
          return {
            clientX: stepSize,
            clientY: 0
          };

        case 'ArrowDown':
          return {
            clientX: 0,
            clientY: stepSize
          };

        case 'ArrowLeft':
        default:
          return {
            clientX: stepSize * -1,
            clientY: 0
          };
      }
    }
    /**
     * @param {?} event
     * @param {?} moveType
     * @param {?=} position
     * @return {?}
     */

  }, {
    key: "startMove",
    value: function startMove(event, moveType) {
      var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      if (event.preventDefault) {
        event.preventDefault();
      }

      this.moveStart = Object.assign({
        active: true,
        type: moveType,
        position: position,
        clientX: this.getClientX(event),
        clientY: this.getClientY(event)
      }, this.cropper);
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "moveImg",
    value: function moveImg(event) {
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
        } else if (this.moveStart.type === 'resize') {
          this.resize(event);
          this.checkCropperPosition(false);
        }

        this.cd.detectChanges();
      }
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "setMaxSize",
    value: function setMaxSize() {
      if (this.sourceImage) {
        /** @type {?} */
        var sourceImageElement = this.sourceImage.nativeElement;
        this.maxSize.width = sourceImageElement.offsetWidth;
        this.maxSize.height = sourceImageElement.offsetHeight;
        this.marginLeft = this.sanitizer.bypassSecurityTrustStyle('calc(50% - ' + this.maxSize.width / 2 + 'px)');
      }
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "setCropperScaledMinSize",
    value: function setCropperScaledMinSize() {
      if (this.transformedImage) {
        this.setCropperScaledMinWidth();
        this.setCropperScaledMinHeight();
      } else {
        this.cropperScaledMinWidth = 20;
        this.cropperScaledMinHeight = 20;
      }
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "setCropperScaledMinWidth",
    value: function setCropperScaledMinWidth() {
      this.cropperScaledMinWidth = this.cropperMinWidth > 0 ? Math.max(20, this.cropperMinWidth / this.transformedImage.width * this.maxSize.width) : 20;
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "setCropperScaledMinHeight",
    value: function setCropperScaledMinHeight() {
      if (this.maintainAspectRatio) {
        this.cropperScaledMinHeight = Math.max(20, this.cropperScaledMinWidth / this.aspectRatio);
      } else if (this.cropperMinHeight > 0) {
        this.cropperScaledMinHeight = Math.max(20, this.cropperMinHeight / this.transformedImage.height * this.maxSize.height);
      } else {
        this.cropperScaledMinHeight = 20;
      }
    }
    /**
     * @private
     * @param {?=} maintainSize
     * @return {?}
     */

  }, {
    key: "checkCropperPosition",
    value: function checkCropperPosition() {
      var maintainSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.cropper.x1 < 0) {
        this.cropper.x2 -= maintainSize ? this.cropper.x1 : 0;
        this.cropper.x1 = 0;
      }

      if (this.cropper.y1 < 0) {
        this.cropper.y2 -= maintainSize ? this.cropper.y1 : 0;
        this.cropper.y1 = 0;
      }

      if (this.cropper.x2 > this.maxSize.width) {
        this.cropper.x1 -= maintainSize ? this.cropper.x2 - this.maxSize.width : 0;
        this.cropper.x2 = this.maxSize.width;
      }

      if (this.cropper.y2 > this.maxSize.height) {
        this.cropper.y1 -= maintainSize ? this.cropper.y2 - this.maxSize.height : 0;
        this.cropper.y2 = this.maxSize.height;
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "moveStop",
    value: function moveStop() {
      if (this.moveStart.active) {
        this.moveStart.active = false;
        this.doAutoCrop();
      }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "move",
    value: function move(event) {
      /** @type {?} */
      var diffX = this.getClientX(event) - this.moveStart.clientX;
      /** @type {?} */

      var diffY = this.getClientY(event) - this.moveStart.clientY;
      this.cropper.x1 = this.moveStart.x1 + diffX;
      this.cropper.y1 = this.moveStart.y1 + diffY;
      this.cropper.x2 = this.moveStart.x2 + diffX;
      this.cropper.y2 = this.moveStart.y2 + diffY;
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "resize",
    value: function resize(event) {
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
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "checkAspectRatio",
    value: function checkAspectRatio() {
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
            this.cropper.x2 -= overflowY * this.aspectRatio > overflowX ? overflowY * this.aspectRatio : overflowX;
            this.cropper.y1 += overflowY * this.aspectRatio > overflowX ? overflowY : overflowX / this.aspectRatio;
          }

          break;

        case 'bottom':
          this.cropper.x2 = this.cropper.x1 + (this.cropper.y2 - this.cropper.y1) * this.aspectRatio;
          overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
          overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);

          if (overflowX > 0 || overflowY > 0) {
            this.cropper.x2 -= overflowY * this.aspectRatio > overflowX ? overflowY * this.aspectRatio : overflowX;
            this.cropper.y2 -= overflowY * this.aspectRatio > overflowX ? overflowY : overflowX / this.aspectRatio;
          }

          break;

        case 'topleft':
          this.cropper.y1 = this.cropper.y2 - (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
          overflowX = Math.max(0 - this.cropper.x1, 0);
          overflowY = Math.max(0 - this.cropper.y1, 0);

          if (overflowX > 0 || overflowY > 0) {
            this.cropper.x1 += overflowY * this.aspectRatio > overflowX ? overflowY * this.aspectRatio : overflowX;
            this.cropper.y1 += overflowY * this.aspectRatio > overflowX ? overflowY : overflowX / this.aspectRatio;
          }

          break;

        case 'topright':
          this.cropper.y1 = this.cropper.y2 - (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
          overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
          overflowY = Math.max(0 - this.cropper.y1, 0);

          if (overflowX > 0 || overflowY > 0) {
            this.cropper.x2 -= overflowY * this.aspectRatio > overflowX ? overflowY * this.aspectRatio : overflowX;
            this.cropper.y1 += overflowY * this.aspectRatio > overflowX ? overflowY : overflowX / this.aspectRatio;
          }

          break;

        case 'right':
        case 'bottomright':
          this.cropper.y2 = this.cropper.y1 + (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
          overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
          overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);

          if (overflowX > 0 || overflowY > 0) {
            this.cropper.x2 -= overflowY * this.aspectRatio > overflowX ? overflowY * this.aspectRatio : overflowX;
            this.cropper.y2 -= overflowY * this.aspectRatio > overflowX ? overflowY : overflowX / this.aspectRatio;
          }

          break;

        case 'left':
        case 'bottomleft':
          this.cropper.y2 = this.cropper.y1 + (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
          overflowX = Math.max(0 - this.cropper.x1, 0);
          overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);

          if (overflowX > 0 || overflowY > 0) {
            this.cropper.x1 += overflowY * this.aspectRatio > overflowX ? overflowY * this.aspectRatio : overflowX;
            this.cropper.y2 -= overflowY * this.aspectRatio > overflowX ? overflowY : overflowX / this.aspectRatio;
          }

          break;
      }
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "doAutoCrop",
    value: function doAutoCrop() {
      if (this.autoCrop) {
        this.crop();
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "crop",
    value: function crop() {
      if (this.sourceImage && this.sourceImage.nativeElement && this.transformedImage != null) {
        this.startCropImage.emit();
        /** @type {?} */

        var imagePosition = this.getImagePosition();
        /** @type {?} */

        var width = imagePosition.x2 - imagePosition.x1;
        /** @type {?} */

        var height = imagePosition.y2 - imagePosition.y1;
        /** @type {?} */

        var cropCanvas =
        /** @type {?} */
        document.createElement('canvas');
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
            width: width,
            height: height,
            imagePosition: imagePosition,
            cropperPosition: Object.assign({}, this.cropper)
          };

          if (this.containWithinAspectRatio) {
            output.offsetImagePosition = this.getOffsetImagePosition();
          }
          /** @type {?} */


          var resizeRatio = this.getResizeRatio(width, height);

          if (resizeRatio !== 1) {
            output.width = Math.round(width * resizeRatio);
            output.height = this.maintainAspectRatio ? Math.round(output.width / this.aspectRatio) : Math.round(height * resizeRatio);
            resizeCanvas(cropCanvas, output.width, output.height);
          }

          output.base64 = this.cropToBase64(cropCanvas);
          this.imageCropped.emit(output);
          return output;
        }
      }

      return null;
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "getImagePosition",
    value: function getImagePosition() {
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
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "getOffsetImagePosition",
    value: function getOffsetImagePosition() {
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
      } else {
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
    }
    /**
     * @private
     * @param {?} cropCanvas
     * @return {?}
     */

  }, {
    key: "cropToBase64",
    value: function cropToBase64(cropCanvas) {
      return cropCanvas.toDataURL('image/' + this.format, this.getQuality());
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "getQuality",
    value: function getQuality() {
      return Math.min(1, Math.max(0, this.imageQuality / 100));
    }
    /**
     * @private
     * @param {?} width
     * @param {?} height
     * @return {?}
     */

  }, {
    key: "getResizeRatio",
    value: function getResizeRatio(width, height) {
      if (this.resizeToWidth > 0) {
        if (!this.onlyScaleDown || width > this.resizeToWidth) {
          return this.resizeToWidth / width;
        }
      } else if (this.resizeToHeight > 0) {
        if (!this.onlyScaleDown || height > this.resizeToHeight) {
          return this.resizeToHeight / height;
        }
      }

      return 1;
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "getClientX",
    value: function getClientX(event) {
      return (event.touches && event.touches[0] ? event.touches[0].clientX : event.clientX) || 0;
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "getClientY",
    value: function getClientY(event) {
      return (event.touches && event.touches[0] ? event.touches[0].clientY : event.clientY) || 0;
    }
  }]);

  return ImageCropperComponent;
}();

ImageCropperComponent.ɵfac = function ImageCropperComponent_Factory(t) {
  return new (t || ImageCropperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
};

ImageCropperComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ImageCropperComponent,
  selectors: [["image-cropper"]],
  viewQuery: function ImageCropperComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sourceImage = _t.first);
    }
  },
  hostVars: 4,
  hostBindings: function ImageCropperComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function ImageCropperComponent_resize_HostBindingHandler() {
        return ctx.onResize();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("mousemove", function ImageCropperComponent_mousemove_HostBindingHandler($event) {
        return ctx.moveImg($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"])("touchmove", function ImageCropperComponent_touchmove_HostBindingHandler($event) {
        return ctx.moveImg($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"])("mouseup", function ImageCropperComponent_mouseup_HostBindingHandler() {
        return ctx.moveStop();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"])("touchend", function ImageCropperComponent_touchend_HostBindingHandler() {
        return ctx.moveStop();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("text-align", ctx.alignImage);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("disabled", ctx.disabled);
    }
  },
  inputs: {
    format: "format",
    maintainAspectRatio: "maintainAspectRatio",
    transform: "transform",
    aspectRatio: "aspectRatio",
    resizeToWidth: "resizeToWidth",
    resizeToHeight: "resizeToHeight",
    cropperMinWidth: "cropperMinWidth",
    cropperMinHeight: "cropperMinHeight",
    canvasRotation: "canvasRotation",
    initialStepSize: "initialStepSize",
    roundCropper: "roundCropper",
    onlyScaleDown: "onlyScaleDown",
    imageQuality: "imageQuality",
    autoCrop: "autoCrop",
    containWithinAspectRatio: "containWithinAspectRatio",
    cropper: "cropper",
    alignImage: "alignImage",
    disabled: "disabled",
    imageChangedEvent: "imageChangedEvent",
    imageBase64: "imageBase64",
    imageFile: "imageFile",
    backgroundColor: "backgroundColor"
  },
  outputs: {
    imageCropped: "imageCropped",
    startCropImage: "startCropImage",
    imageLoaded: "imageLoaded",
    cropperReady: "cropperReady",
    loadImageFailed: "loadImageFailed"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
  decls: 4,
  vars: 10,
  consts: [["class", "source-image", 3, "src", "visibility", "transform", "load", 4, "ngIf"], [1, "overlay"], ["class", "cropper", "tabindex", "0", 3, "rounded", "top", "left", "width", "height", "margin-left", "visibility", "keydown", 4, "ngIf"], [1, "source-image", 3, "src", "load"], ["sourceImage", ""], ["tabindex", "0", 1, "cropper", 3, "keydown"], [1, "move", 3, "mousedown", "touchstart"], [1, "resize", "topleft", 3, "mousedown", "touchstart"], [1, "square"], [1, "resize", "top"], [1, "resize", "topright", 3, "mousedown", "touchstart"], [1, "resize", "right"], [1, "resize", "bottomright", 3, "mousedown", "touchstart"], [1, "resize", "bottom"], [1, "resize", "bottomleft", 3, "mousedown", "touchstart"], [1, "resize", "left"], [1, "resize-bar", "top", 3, "mousedown", "touchstart"], [1, "resize-bar", "right", 3, "mousedown", "touchstart"], [1, "resize-bar", "bottom", 3, "mousedown", "touchstart"], [1, "resize-bar", "left", 3, "mousedown", "touchstart"]],
  template: function ImageCropperComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ImageCropperComponent_img_1_Template, 2, 5, "img", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ImageCropperComponent_div_3_Template, 23, 14, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background", ctx.imageVisible && ctx.backgroundColor);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.safeImgDataUrl);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx.maxSize.width, "px")("height", ctx.maxSize.height, "px")("margin-left", ctx.alignImage === "center" ? ctx.marginLeft : null);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.imageVisible);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
  styles: ["[_nghost-%COMP%]{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{position:relative;width:100%}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   img.source-image[_ngcontent-%COMP%]{max-width:100%;max-height:100%;transform-origin:center}[_nghost-%COMP%]   .overlay[_ngcontent-%COMP%]{position:absolute;pointer-events:none;touch-action:none;top:0;left:0;outline:#fff solid 100vw}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]{position:absolute;display:flex;color:#53535c;background:0 0;touch-action:none;outline:rgba(255,255,255,.3) solid 100vw}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]:after{position:absolute;content:\"\";top:0;bottom:0;left:0;right:0;pointer-events:none;border:1px dashed;opacity:.75;color:inherit;z-index:1}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]{width:100%;cursor:move;border:1px solid rgba(255,255,255,.5)}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]:focus   .move[_ngcontent-%COMP%]{border-color:#1e90ff;border-width:2px}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%]{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%]   .square[_ngcontent-%COMP%]{display:inline-block;background:#53535c;width:6px;height:6px;border:1px solid rgba(255,255,255,.5);box-sizing:content-box}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.topleft[_ngcontent-%COMP%]{top:-12px;left:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.top[_ngcontent-%COMP%]{top:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.topright[_ngcontent-%COMP%]{top:-12px;right:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.right[_ngcontent-%COMP%]{top:calc(50% - 12px);right:-12px;cursor:ew-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.bottomright[_ngcontent-%COMP%]{bottom:-12px;right:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.bottom[_ngcontent-%COMP%]{bottom:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.bottomleft[_ngcontent-%COMP%]{bottom:-12px;left:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.left[_ngcontent-%COMP%]{top:calc(50% - 12px);left:-12px;cursor:ew-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar[_ngcontent-%COMP%]{position:absolute;z-index:1}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.top[_ngcontent-%COMP%]{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.right[_ngcontent-%COMP%]{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.bottom[_ngcontent-%COMP%]{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.left[_ngcontent-%COMP%]{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]{outline-color:transparent}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]:after{border-radius:100%;box-shadow:0 0 0 100vw rgba(255,255,255,.3)}@media (orientation:portrait){[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]{outline-width:100vh}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]:after{box-shadow:0 0 0 100vh rgba(255,255,255,.3)}}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]{border-radius:100%}.disabled[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar[_ngcontent-%COMP%]{display:none}"],
  changeDetection: 0
});
/** @nocollapse */

ImageCropperComponent.ctorParameters = function () {
  return [{
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef
  }];
};

ImageCropperComponent.propDecorators = {
  sourceImage: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
    args: ['sourceImage', {
      static: false
    }]
  }],
  imageChangedEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  imageBase64: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  imageFile: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  format: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  maintainAspectRatio: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  transform: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  aspectRatio: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  resizeToWidth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  resizeToHeight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  cropperMinWidth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  cropperMinHeight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  canvasRotation: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  initialStepSize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  roundCropper: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  onlyScaleDown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  imageQuality: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  autoCrop: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  backgroundColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  containWithinAspectRatio: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  cropper: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  alignImage: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostBinding,
    args: ['style.text-align']
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostBinding,
    args: ['class.disabled']
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  imageCropped: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  startCropImage: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  imageLoaded: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  cropperReady: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  loadImageFailed: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  onResize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
    args: ['window:resize']
  }],
  moveImg: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
    args: ['document:mousemove', ['$event']]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
    args: ['document:touchmove', ['$event']]
  }],
  moveStop: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
    args: ['document:mouseup']
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
    args: ['document:touchend']
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ImageCropperComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'image-cropper',
      template: "<div [style.background]=\"imageVisible && backgroundColor\">\n    <img\n        #sourceImage\n        class=\"source-image\"\n        *ngIf=\"safeImgDataUrl\"\n        [src]=\"safeImgDataUrl\"\n        [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\"\n        [style.transform]=\"safeTransformStyle\"\n        (load)=\"imageLoadedInView()\"\n    />\n    <div\n        class=\"overlay\"\n        [style.width.px]=\"maxSize.width\"\n        [style.height.px]=\"maxSize.height\"\n        [style.margin-left]=\"alignImage === 'center' ? marginLeft : null\"\n    ></div>\n    <div class=\"cropper\"\n         *ngIf=\"imageVisible\"\n         [class.rounded]=\"roundCropper\"\n         [style.top.px]=\"cropper.y1\"\n         [style.left.px]=\"cropper.x1\"\n         [style.width.px]=\"cropper.x2 - cropper.x1\"\n         [style.height.px]=\"cropper.y2 - cropper.y1\"\n         [style.margin-left]=\"alignImage === 'center' ? marginLeft : null\"\n         [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\"\n         (keydown)=\"keyboardAccess($event)\"\n         tabindex=\"0\"\n    >\n        <div\n                (mousedown)=\"startMove($event, 'move')\"\n                (touchstart)=\"startMove($event, 'move')\"\n                class=\"move\"\n        >&nbsp;</div>\n        <span\n                class=\"resize topleft\"\n                (mousedown)=\"startMove($event, 'resize', 'topleft')\"\n                (touchstart)=\"startMove($event, 'resize', 'topleft')\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize top\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize topright\"\n                (mousedown)=\"startMove($event, 'resize', 'topright')\"\n                (touchstart)=\"startMove($event, 'resize', 'topright')\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize right\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize bottomright\"\n                (mousedown)=\"startMove($event, 'resize', 'bottomright')\"\n                (touchstart)=\"startMove($event, 'resize', 'bottomright')\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize bottom\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize bottomleft\"\n                (mousedown)=\"startMove($event, 'resize', 'bottomleft')\"\n                (touchstart)=\"startMove($event, 'resize', 'bottomleft')\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize left\"\n        ><span class=\"square\"></span></span>\n        <span\n                class=\"resize-bar top\"\n                (mousedown)=\"startMove($event, 'resize', 'top')\"\n                (touchstart)=\"startMove($event, 'resize', 'top')\"\n        ></span>\n        <span\n                class=\"resize-bar right\"\n                (mousedown)=\"startMove($event, 'resize', 'right')\"\n                (touchstart)=\"startMove($event, 'resize', 'right')\"\n        ></span>\n        <span\n                class=\"resize-bar bottom\"\n                (mousedown)=\"startMove($event, 'resize', 'bottom')\"\n                (touchstart)=\"startMove($event, 'resize', 'bottom')\"\n        ></span>\n        <span\n                class=\"resize-bar left\"\n                (mousedown)=\"startMove($event, 'resize', 'left')\"\n                (touchstart)=\"startMove($event, 'resize', 'left')\"\n        ></span>\n    </div>\n</div>\n",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
      styles: [":host{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host>div{position:relative;width:100%}:host>div img.source-image{max-width:100%;max-height:100%;transform-origin:center}:host .overlay{position:absolute;pointer-events:none;touch-action:none;top:0;left:0;outline:#fff solid 100vw}:host .cropper{position:absolute;display:flex;color:#53535c;background:0 0;touch-action:none;outline:rgba(255,255,255,.3) solid 100vw}:host .cropper:after{position:absolute;content:\"\";top:0;bottom:0;left:0;right:0;pointer-events:none;border:1px dashed;opacity:.75;color:inherit;z-index:1}:host .cropper .move{width:100%;cursor:move;border:1px solid rgba(255,255,255,.5)}:host .cropper:focus .move{border-color:#1e90ff;border-width:2px}:host .cropper .resize{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}:host .cropper .resize .square{display:inline-block;background:#53535c;width:6px;height:6px;border:1px solid rgba(255,255,255,.5);box-sizing:content-box}:host .cropper .resize.topleft{top:-12px;left:-12px;cursor:nwse-resize}:host .cropper .resize.top{top:-12px;left:calc(50% - 12px);cursor:ns-resize}:host .cropper .resize.topright{top:-12px;right:-12px;cursor:nesw-resize}:host .cropper .resize.right{top:calc(50% - 12px);right:-12px;cursor:ew-resize}:host .cropper .resize.bottomright{bottom:-12px;right:-12px;cursor:nwse-resize}:host .cropper .resize.bottom{bottom:-12px;left:calc(50% - 12px);cursor:ns-resize}:host .cropper .resize.bottomleft{bottom:-12px;left:-12px;cursor:nesw-resize}:host .cropper .resize.left{top:calc(50% - 12px);left:-12px;cursor:ew-resize}:host .cropper .resize-bar{position:absolute;z-index:1}:host .cropper .resize-bar.top{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}:host .cropper .resize-bar.right{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}:host .cropper .resize-bar.bottom{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}:host .cropper .resize-bar.left{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}:host .cropper.rounded{outline-color:transparent}:host .cropper.rounded:after{border-radius:100%;box-shadow:0 0 0 100vw rgba(255,255,255,.3)}@media (orientation:portrait){:host .cropper{outline-width:100vh}:host .cropper.rounded:after{box-shadow:0 0 0 100vh rgba(255,255,255,.3)}}:host .cropper.rounded .move{border-radius:100%}:host.disabled .cropper .move,:host.disabled .cropper .resize,:host.disabled .cropper .resize-bar{display:none}"]
    }]
  }], function () {
    return [{
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef
    }];
  }, {
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    maintainAspectRatio: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    transform: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    aspectRatio: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    resizeToWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    resizeToHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cropperMinWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cropperMinHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    canvasRotation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    initialStepSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    roundCropper: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    onlyScaleDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    imageQuality: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    autoCrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    containWithinAspectRatio: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cropper: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    alignImage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostBinding,
      args: ['style.text-align']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostBinding,
      args: ['class.disabled']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    imageCropped: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    startCropImage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    imageLoaded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    cropperReady: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    loadImageFailed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    imageChangedEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    imageBase64: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    imageFile: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],

    /**
     * @return {?}
     */
    onResize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
      args: ['window:resize']
    }],

    /**
     * @param {?} event
     * @return {?}
     */
    moveImg: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
      args: ['document:mousemove', ['$event']]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
      args: ['document:touchmove', ['$event']]
    }],

    /**
     * @return {?}
     */
    moveStop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
      args: ['document:mouseup']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
      args: ['document:touchend']
    }],
    sourceImage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
      args: ['sourceImage', {
        static: false
      }]
    }],
    backgroundColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  });
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var ImageCropperModule = function ImageCropperModule() {
  (0,_Volumes_Data_projects_eclipse_workspace_HKM6_HKM6_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, ImageCropperModule);
};

ImageCropperModule.ɵfac = function ImageCropperModule_Factory(t) {
  return new (t || ImageCropperModule)();
};

ImageCropperModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ImageCropperModule
});
ImageCropperModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ImageCropperModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
      declarations: [ImageCropperComponent],
      exports: [ImageCropperComponent]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ImageCropperModule, {
    declarations: function declarations() {
      return [ImageCropperComponent];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule];
    },
    exports: function exports() {
      return [ImageCropperComponent];
    }
  });
})();
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

  return new Blob([ab], {
    type: type
  });
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

/***/ 26903:
/*!*****************************************************************************************!*\
  !*** ./node_modules/ngx-page-scroll-core/__ivy_ngcc__/fesm2015/ngx-page-scroll-core.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NGXPS_CONFIG": function() { return /* binding */ NGXPS_CONFIG; },
/* harmony export */   "NgxPageScrollCoreModule": function() { return /* binding */ NgxPageScrollCoreModule; },
/* harmony export */   "PageScrollInstance": function() { return /* binding */ PageScrollInstance; },
/* harmony export */   "PageScrollService": function() { return /* binding */ PageScrollService; },
/* harmony export */   "defaultPageScrollConfig": function() { return /* binding */ defaultPageScrollConfig; }
/* harmony export */ });
/* harmony import */ var _Volumes_Data_projects_eclipse_workspace_HKM6_HKM6_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var _Volumes_Data_projects_eclipse_workspace_HKM6_HKM6_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * An Interface specifying the possible options to be passed into the newInstance() factory method
 * @record
 */



function PageScrollOptions() {}

if (false) {}
/**
 * Represents a scrolling action
 */


var PageScrollInstance = /*#__PURE__*/function () {
  /**
   * Private constructor, requires the properties assumed to be the bare minimum.
   * Use the factory methods to create instances:
   *      {\@link PageScrollService#create}
   * @param {?} pageScrollOptions
   */
  function PageScrollInstance(pageScrollOptions) {
    (0,_Volumes_Data_projects_eclipse_workspace_HKM6_HKM6_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, PageScrollInstance);

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
      pageScrollOptions.scrollViews = [pageScrollOptions.document.documentElement, pageScrollOptions.document.body, pageScrollOptions.document.body.parentNode];
      this.isInlineScrolling = false;
    } else {
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


  (0,_Volumes_Data_projects_eclipse_workspace_HKM6_HKM6_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(PageScrollInstance, [{
    key: "getScrollPropertyValue",
    value:
    /**
     * @param {?} scrollingView
     * @return {?}
     */
    function getScrollPropertyValue(scrollingView) {
      if (!this.pageScrollOptions.verticalScrolling) {
        return scrollingView.scrollLeft;
      }

      return scrollingView.scrollTop;
    }
    /**
     * @param {?} scrollingView
     * @return {?}
     */

  }, {
    key: "getScrollClientPropertyValue",
    value: function getScrollClientPropertyValue(scrollingView) {
      if (!this.pageScrollOptions.verticalScrolling) {
        return scrollingView.clientWidth;
      }

      return scrollingView.clientHeight;
    }
    /**
     * Extract the exact location of the scrollTarget element.
     *
     * Extract the scrollTarget HTMLElement from the given PageScrollTarget object. The latter one may be
     * a string like "#heading2", then this method returns the corresponding DOM element for that id.
     *
     * @return {?}
     */

  }, {
    key: "extractScrollTargetPosition",
    value: function extractScrollTargetPosition() {
      /** @type {?} */
      var scrollTargetElement = this.getScrollTargetElement();

      if (scrollTargetElement === null || scrollTargetElement === undefined) {
        // Scroll target not found
        return {
          top: NaN,
          left: NaN
        };
      }

      if (this.isInlineScrolling) {
        return PageScrollInstance.getInlineScrollingTargetPosition(this.pageScrollOptions, scrollTargetElement);
      }

      return PageScrollInstance.getScrollingTargetPosition(this.pageScrollOptions, scrollTargetElement);
    }
    /**
     * Get the top offset of the scroll animation.
     * This automatically takes the offset location of the scrolling container/scrolling view
     * into account (for nested/inline scrolling).
     * @return {?}
     */

  }, {
    key: "getCurrentOffset",
    value: function getCurrentOffset() {
      return this.pageScrollOptions.scrollOffset;
    }
    /**
     * Sets the "scrollTop" or "scrollLeft" property for all scrollViews to the provided value
     * @param {?} position
     * @return {?} true if at least for one ScrollTopSource the scrollTop/scrollLeft value could be set and it kept the new value.
     *          false if it failed for all ScrollViews, meaning that we should stop the animation
     *          (probably because we're at the end of the scrolling region)
     */

  }, {
    key: "setScrollPosition",
    value: function setScrollPosition(position) {
      var _this = this;

      // Set the new scrollTop/scrollLeft to all scrollViews elements
      return this.pageScrollOptions.scrollViews.reduce(
      /**
      * @param {?} oneAlreadyWorked
      * @param {?} scrollingView
      * @return {?}
      */
      function (oneAlreadyWorked, scrollingView) {
        /** @type {?} */
        var startScrollPropertyValue = _this.getScrollPropertyValue(scrollingView);

        if (scrollingView && startScrollPropertyValue !== undefined && startScrollPropertyValue !== null) {
          /** @type {?} */
          var scrollDistance = Math.abs(startScrollPropertyValue - position); // The movement we need to perform is less than 2px
          // This we consider a small movement which some browser may not perform when
          // changing the scrollTop/scrollLeft property
          // Thus in this cases we do not stop the scroll animation, although setting the
          // scrollTop/scrollLeft value "fails"

          /** @type {?} */

          var isSmallMovement = scrollDistance < _this.pageScrollOptions._minScrollDistance;

          if (!_this.pageScrollOptions.verticalScrolling) {
            scrollingView.scrollLeft = position;
          } else {
            scrollingView.scrollTop = position;
          } // Return true if setting the new scrollTop/scrollLeft value worked
          // We consider that it worked if the new scrollTop/scrollLeft value is closer to the
          // desired scrollTop/scrollLeft than before (it might not be exactly the value we
          // set due to dpi or rounding irregularities)


          if (isSmallMovement || scrollDistance > Math.abs(_this.getScrollPropertyValue(scrollingView) - position)) {
            return true;
          }
        }

        return oneAlreadyWorked;
      }, false);
    }
    /**
     * Trigger firing a animation finish event
     * @param {?} value Whether the animation finished at the target (true) or got interrupted (false)
     * @return {?}
     */

  }, {
    key: "fireEvent",
    value: function fireEvent(value) {
      if (this.pageScrollOptions.scrollFinishListener) {
        this.pageScrollOptions.scrollFinishListener.emit(value);
      }
    }
    /**
     * Attach the interrupt listeners to the PageScrollInstance body. The given interruptReporter
     * will be called if any of the attached events is fired.
     *
     * Possibly attached interruptListeners are automatically removed from the body before the new one will be attached.
     * @param {?} interruptReporter
     * @return {?}
     */

  }, {
    key: "attachInterruptListeners",
    value: function attachInterruptListeners(interruptReporter) {
      var _this2 = this;

      if (this.interruptListenersAttached) {
        // Detach possibly existing listeners first
        this.detachInterruptListeners();
      }

      this.interruptListener =
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        interruptReporter.report(event, _this2);
      };

      this.pageScrollOptions.interruptEvents.forEach(
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        return _this2.pageScrollOptions.document.body.addEventListener(event, _this2.interruptListener);
      });
      this.interruptListenersAttached = true;
    }
    /**
     * Remove event listeners from the body and stop listening for events that might be treated as "animation
     * interrupt" events.
     * @return {?}
     */

  }, {
    key: "detachInterruptListeners",
    value: function detachInterruptListeners() {
      var _this3 = this;

      this.pageScrollOptions.interruptEvents.forEach(
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        return _this3.pageScrollOptions.document.body.removeEventListener(event, _this3.interruptListener);
      });
      this.interruptListenersAttached = false;
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "getScrollTargetElement",
    value: function getScrollTargetElement() {
      if (typeof this.pageScrollOptions.scrollTarget === 'string') {
        /** @type {?} */
        var targetSelector =
        /** @type {?} */
        this.pageScrollOptions.scrollTarget;

        if (targetSelector.match(/^#[^\s]+$/g) !== null) {
          // It's an id selector and a valid id, as it does not contain any white space characters
          return this.pageScrollOptions.document.getElementById(targetSelector.substr(1));
        }

        return (
          /** @type {?} */
          this.pageScrollOptions.document.querySelector(targetSelector)
        );
      }

      return (
        /** @type {?} */
        this.pageScrollOptions.scrollTarget
      );
    }
  }], [{
    key: "getScrollingTargetPosition",
    value: function getScrollingTargetPosition(pageScrollOptions, scrollTargetElement) {
      /** @type {?} */
      var body = pageScrollOptions.document.body;
      /** @type {?} */

      var docEl = pageScrollOptions.document.documentElement;
      /** @type {?} */

      var windowPageYOffset = pageScrollOptions.document.defaultView && pageScrollOptions.document.defaultView.pageYOffset || undefined;
      /** @type {?} */

      var windowPageXOffset = pageScrollOptions.document.defaultView && pageScrollOptions.document.defaultView.pageXOffset || undefined;
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
        return {
          top: scrollTop,
          left: scrollLeft
        };
      }
      /** @type {?} */


      var box = scrollTargetElement.getBoundingClientRect();
      /** @type {?} */

      var top = box.top + scrollTop - clientTop;
      /** @type {?} */

      var left = box.left + scrollLeft - clientLeft;
      return {
        top: Math.round(top),
        left: Math.round(left)
      };
    }
    /**
     * @private
     * @param {?} pageScrollOptions
     * @param {?} scrollTargetElement
     * @return {?}
     */

  }, {
    key: "getInlineScrollingTargetPosition",
    value: function getInlineScrollingTargetPosition(pageScrollOptions, scrollTargetElement) {
      /** @type {?} */
      var position = {
        top: scrollTargetElement.offsetTop,
        left: scrollTargetElement.offsetLeft
      };

      if (pageScrollOptions.advancedInlineOffsetCalculation && pageScrollOptions.scrollViews.length === 1) {
        /** @type {?} */
        var accumulatedParentsPos = {
          top: 0,
          left: 0
        }; // not named window to make sure we're not getting the global window variable by accident

        /** @type {?} */

        var theWindow = scrollTargetElement.ownerDocument.defaultView;
        /** @type {?} */

        var parentFound = false; // Start parent is the immediate parent

        /** @type {?} */

        var parent = scrollTargetElement.parentElement; // Iterate upwards all parents

        while (!parentFound && parent !== undefined && parent !== null) {
          if (theWindow.getComputedStyle(parent).getPropertyValue('position') === 'relative') {
            accumulatedParentsPos.top += parent.offsetTop;
            accumulatedParentsPos.left += parent.offsetLeft;
          } // Next iteration


          parent = parent.parentElement;
          parentFound = parent === pageScrollOptions.scrollViews[0];
        }

        if (parentFound) {
          // Only use the results if we found the parent, otherwise we accumulated too much anyway
          position.top += accumulatedParentsPos.top;
          position.left += accumulatedParentsPos.left;
        } else {
          /* TODO Uncomment
          if (PageScrollConfig._logLevel >= 2 || (PageScrollConfig._logLevel >= 1 && isDevMode())) {
            console.warn('Unable to find nested scrolling targets parent!');
          }*/
        }
      }

      return position;
    }
  }]);

  return PageScrollInstance;
}();

if (false) {}
/**
 * An Interface a listener should implement to be notified about possible interrupt events
 * that happened due to user interaction while a scroll animation takes place.
 *
 * The PageScrollService provides an implementation to a PageScrollInstance to be notified
 * about scroll animation interrupts and stop related animations.
 * @record
 */


function InterruptReporter() {}

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */


var NGXPS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('ngxps_config');

var ɵ0 =
/**
* @param {?} t
* @param {?} b
* @param {?} c
* @param {?} d
* @return {?}
*/
function ɵ0(t, b, c, d) {
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
  easingLogic: ɵ0
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var PageScrollService = /*#__PURE__*/function () {
  /**
   * @param {?} customConfig
   */
  function PageScrollService(customConfig) {
    var _this4 = this;

    (0,_Volumes_Data_projects_eclipse_workspace_HKM6_HKM6_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, PageScrollService);

    this.runningInstances = [];
    this.onInterrupted = {
      report:
      /**
      * @param {?} event
      * @param {?} pageScrollInstance
      * @return {?}
      */
      function report(event, pageScrollInstance) {
        if (!pageScrollInstance.pageScrollOptions.interruptible) {
          // Non-interruptible anyway, so do not stop anything
          return;
        }
        /** @type {?} */


        var shouldStop = true;

        if (event.type === 'keyup') {
          // Only stop if specific keys have been pressed, for all others don't stop anything
          if (_this4.config.interruptKeys.indexOf(
          /** @type {?} */
          event.key) === -1) {
            // The pressed key is not in the list of interrupting keys
            shouldStop = false;
          }
        } else if (event.type === 'mousedown') {
          // For mousedown events we only stop the scroll animation of the mouse has
          // been clicked inside the scrolling container
          if (!pageScrollInstance.pageScrollOptions.scrollViews.some(
          /**
          * @param {?} scrollingView
          * @return {?}
          */
          function (scrollingView) {
            return scrollingView.contains(
            /** @type {?} */
            event.target);
          })) {
            // Mouse clicked an element which is not inside any of the the scrolling containers
            shouldStop = false;
          }
        }

        if (shouldStop) {
          _this4.stopAll(pageScrollInstance.pageScrollOptions.namespace);
        }
      }
    };
    this.config = Object.assign({}, defaultPageScrollConfig, customConfig);

    if (PageScrollService.instanceCounter > 0 && (this.config._logLevel >= 2 || this.config._logLevel >= 1 && (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.isDevMode)())) {
      console.warn('An instance of PageScrollService already exists, usually ' + 'including one provider should be enough, so double check.');
    }

    PageScrollService.instanceCounter++;
  }
  /**
   * @private
   * @param {?} interrupted
   * @param {?} pageScrollInstance
   * @return {?}
   */


  (0,_Volumes_Data_projects_eclipse_workspace_HKM6_HKM6_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(PageScrollService, [{
    key: "stopInternal",
    value: function stopInternal(interrupted, pageScrollInstance) {
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
        clearInterval(pageScrollInstance.timer); // Clear the reference to this timer

        pageScrollInstance.timer = undefined;
        pageScrollInstance.fireEvent(!interrupted);
        return true;
      }

      return false;
    }
    /**
     * @param {?} options
     * @return {?}
     */

  }, {
    key: "create",
    value: function create(options) {
      return new PageScrollInstance(
      /** @type {?} */
      Object.assign({}, this.config, options));
    }
    /**
     * Start a scroll animation. All properties of the animation are stored in the given {\@link PageScrollInstance} object.
     *
     * This is the core functionality of the whole library.
     * @param {?} pageScrollInstance
     * @return {?}
     */
    // tslint:disable-next-line:cyclomatic-complexity

  }, {
    key: "start",
    value: function start(pageScrollInstance) {
      var _this5 = this;

      // Merge the default options in the pageScrollInstance options
      pageScrollInstance.pageScrollOptions =
      /** @type {?} */
      Object.assign({}, this.config, pageScrollInstance.pageScrollOptions); // Stop all possibly running scroll animations in the same namespace

      this.stopAll(pageScrollInstance.pageScrollOptions.namespace);

      if (pageScrollInstance.pageScrollOptions.scrollViews === null || pageScrollInstance.pageScrollOptions.scrollViews.length === 0) {
        // No scrollViews specified, thus we can't animate anything
        if (this.config._logLevel >= 2 || this.config._logLevel >= 1 && (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.isDevMode)()) {
          console.warn('No scrollViews specified, thus ngx-page-scroll does not know which DOM elements to scroll');
        }

        return;
      }
      /** @type {?} */


      var startScrollPositionFound = false;
      /** @type {?} */

      var scrollRange = pageScrollInstance.getScrollClientPropertyValue(pageScrollInstance.pageScrollOptions.scrollViews[0]); // Reset start scroll position to 0. If any of the scrollViews has a different one, it will be extracted next

      pageScrollInstance.startScrollPosition = 0; // Get the start scroll position from the scrollViews (e.g. if the user already scrolled down the content)

      pageScrollInstance.pageScrollOptions.scrollViews.forEach(
      /**
      * @param {?} scrollingView
      * @return {?}
      */
      function (scrollingView) {
        if (scrollingView === undefined || scrollingView === null) {
          return;
        } // Get the scrollTop or scrollLeft value of the first scrollingView that returns a value for its "scrollTop"
        // or "scrollLeft" property that is not undefined and unequal to 0

        /** @type {?} */


        var scrollPosition = pageScrollInstance.getScrollPropertyValue(scrollingView);

        if (!startScrollPositionFound && scrollPosition) {
          // We found a scrollingView that does not have scrollTop or scrollLeft 0
          // Return the scroll position value, as this will be our startScrollPosition
          pageScrollInstance.startScrollPosition = scrollPosition;
          startScrollPositionFound = true; // Remember te scrollRange of this scrollingView

          scrollRange = pageScrollInstance.getScrollClientPropertyValue(scrollingView);
        }
      });
      /** @type {?} */

      var pageScrollOffset = pageScrollInstance.getCurrentOffset(); // Calculate the target position that the scroll animation should go to

      /** @type {?} */

      var scrollTargetPosition = pageScrollInstance.extractScrollTargetPosition();
      pageScrollInstance.targetScrollPosition = Math.round((pageScrollInstance.pageScrollOptions.verticalScrolling ? scrollTargetPosition.top : scrollTargetPosition.left) - pageScrollOffset); // Calculate the distance we need to go in total

      pageScrollInstance.distanceToScroll = pageScrollInstance.targetScrollPosition - pageScrollInstance.startScrollPosition;

      if (isNaN(pageScrollInstance.distanceToScroll)) {
        // We weren't able to find the target position, maybe the element does not exist?
        if (this.config._logLevel >= 2 || this.config._logLevel >= 1 && (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.isDevMode)()) {
          console.log('Scrolling not possible, as we can\'t find the specified target');
        }

        pageScrollInstance.fireEvent(false);
        return;
      } // We're at the final destination already
      // OR we need to scroll down but are already at the end
      // OR we need to scroll up but are at the top already

      /** @type {?} */


      var allReadyAtDestination = Math.abs(pageScrollInstance.distanceToScroll) < pageScrollInstance.pageScrollOptions._minScrollDistance; // Check how long we need to scroll if a speed option is given
      // Default executionDuration is the specified duration


      pageScrollInstance.executionDuration = pageScrollInstance.pageScrollOptions.duration; // Maybe we need to pay attention to the speed option?

      if (pageScrollInstance.pageScrollOptions.speed !== undefined && pageScrollInstance.pageScrollOptions.speed !== null && (pageScrollInstance.pageScrollOptions.duration === undefined || pageScrollInstance.pageScrollOptions.duration === null)) {
        // Speed option is set and no duration => calculate duration based on speed and scroll distance
        pageScrollInstance.executionDuration = Math.abs(pageScrollInstance.distanceToScroll) / pageScrollInstance.pageScrollOptions.speed * 1000;
      } // We should go there directly, as our "animation" would have one big step
      // only anyway and this way we save the interval stuff

      /** @type {?} */


      var tooShortInterval = pageScrollInstance.executionDuration <= pageScrollInstance.pageScrollOptions._interval;

      if (allReadyAtDestination || tooShortInterval) {
        if (this.config._logLevel >= 2 || this.config._logLevel >= 1 && (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.isDevMode)()) {
          if (allReadyAtDestination) {
            console.log('Scrolling not possible, as we can\'t get any closer to the destination');
          } else {
            console.log('Scroll duration shorter that interval length, jumping to target');
          }
        }

        pageScrollInstance.setScrollPosition(pageScrollInstance.targetScrollPosition);
        pageScrollInstance.fireEvent(true);
        return;
      }

      if (!pageScrollInstance.pageScrollOptions.scrollInView) {
        /** @type {?} */
        var alreadyInView = pageScrollInstance.targetScrollPosition > pageScrollInstance.startScrollPosition && pageScrollInstance.targetScrollPosition <= pageScrollInstance.startScrollPosition + scrollRange;

        if (alreadyInView) {
          if (this.config._logLevel >= 2 || this.config._logLevel >= 1 && (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.isDevMode)()) {
            console.log('Not scrolling, as target already in view');
          }

          pageScrollInstance.fireEvent(true);
          return;
        }
      } // Register the interrupt listeners if we want an interruptible scroll animation


      if (pageScrollInstance.pageScrollOptions.interruptible) {
        pageScrollInstance.attachInterruptListeners(this.onInterrupted);
      } // Let's get started, get the start time...


      pageScrollInstance.startTime = new Date().getTime(); // .. and calculate the end time (when we need to finish at last)

      pageScrollInstance.endTime = pageScrollInstance.startTime + pageScrollInstance.executionDuration;
      pageScrollInstance.timer = setInterval(
      /**
      * @param {?} _pageScrollInstance
      * @return {?}
      */
      function (_pageScrollInstance) {
        // Take the current time

        /** @type {?} */
        var currentTime = new Date().getTime(); // Determine the new scroll position

        /** @type {?} */

        var newScrollPosition;
        /** @type {?} */

        var stopNow = false;

        if (_pageScrollInstance.endTime <= currentTime) {
          // We're over the time already, so go the targetScrollPosition (aka destination)
          newScrollPosition = _pageScrollInstance.targetScrollPosition;
          stopNow = true;
        } else {
          // Calculate the scroll position based on the current time using the easing function
          newScrollPosition = Math.round(_pageScrollInstance.pageScrollOptions.easingLogic(currentTime - _pageScrollInstance.startTime, _pageScrollInstance.startScrollPosition, _pageScrollInstance.distanceToScroll, _pageScrollInstance.executionDuration));
        }

        if (_this5.config._logLevel >= 5 && (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.isDevMode)()) {
          console.warn('Scroll Position: ' + newScrollPosition);
        } // Set the new scrollPosition to all scrollViews elements


        if (!_pageScrollInstance.setScrollPosition(newScrollPosition)) {
          // Setting the new scrollTop/scrollLeft value failed for all ScrollViews
          // early stop the scroll animation to save resources
          stopNow = true;
        } // At the end do the internal stop maintenance and fire the pageScrollFinish event
        // (otherwise the event might arrive at "too early")


        if (stopNow) {
          _this5.stopInternal(false, _pageScrollInstance);
        }
      }, this.config._interval, pageScrollInstance); // Register the instance as running one

      this.runningInstances.push(pageScrollInstance);
    }
    /**
     * @param {?} options
     * @return {?}
     */

  }, {
    key: "scroll",
    value: function scroll(options) {
      this.start(this.create(options));
    }
    /**
     * Stop all running scroll animations. Optionally limit to stop only the ones of specific namespace.
     * @param {?=} namespace
     * @return {?}
     */

  }, {
    key: "stopAll",
    value: function stopAll(namespace) {
      if (this.runningInstances.length > 0) {
        /** @type {?} */
        var stoppedSome = false;

        for (var i = 0; i < this.runningInstances.length; ++i) {
          /** @type {?} */
          var pageScrollInstance = this.runningInstances[i];

          if (!namespace || pageScrollInstance.pageScrollOptions.namespace === namespace) {
            stoppedSome = true;
            this.stopInternal(true, pageScrollInstance); // Decrease the counter, as we removed an item from the array we iterate over

            i--;
          }
        }

        return stoppedSome;
      }

      return false;
    }
    /**
     * @param {?} pageScrollInstance
     * @return {?}
     */

  }, {
    key: "stop",
    value: function stop(pageScrollInstance) {
      return this.stopInternal(true, pageScrollInstance);
    }
  }]);

  return PageScrollService;
}();

PageScrollService.ɵfac = function PageScrollService_Factory(t) {
  return new (t || PageScrollService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](NGXPS_CONFIG));
};

PageScrollService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: PageScrollService,
  factory: PageScrollService.ɵfac,
  providedIn: 'root'
});
PageScrollService.instanceCounter = 0;
/** @nocollapse */

PageScrollService.ctorParameters = function () {
  return [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
      args: [NGXPS_CONFIG]
    }]
  }];
};
/** @nocollapse */


PageScrollService.ngInjectableDef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({
  factory: function PageScrollService_Factory() {
    return new PageScrollService((0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(NGXPS_CONFIG));
  },
  token: PageScrollService,
  providedIn: "root"
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PageScrollService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [NGXPS_CONFIG]
      }]
    }];
  }, null);
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var ɵ0$1 = {};

var NgxPageScrollCoreModule = /*#__PURE__*/function () {
  function NgxPageScrollCoreModule() {
    (0,_Volumes_Data_projects_eclipse_workspace_HKM6_HKM6_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, NgxPageScrollCoreModule);
  }

  (0,_Volumes_Data_projects_eclipse_workspace_HKM6_HKM6_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(NgxPageScrollCoreModule, null, [{
    key: "forRoot",
    value:
    /**
     * @param {?=} config
     * @return {?}
     */
    function forRoot(config) {
      return {
        ngModule: NgxPageScrollCoreModule,
        providers: [PageScrollService, {
          provide: NGXPS_CONFIG,
          useValue: config
        }]
      };
    }
  }]);

  return NgxPageScrollCoreModule;
}();

NgxPageScrollCoreModule.ɵfac = function NgxPageScrollCoreModule_Factory(t) {
  return new (t || NgxPageScrollCoreModule)();
};

NgxPageScrollCoreModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: NgxPageScrollCoreModule
});
NgxPageScrollCoreModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  providers: [PageScrollService, {
    provide: NGXPS_CONFIG,
    useValue: ɵ0$1
  }]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NgxPageScrollCoreModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      providers: [PageScrollService, {
        provide: NGXPS_CONFIG,
        useValue: ɵ0$1
      }]
    }]
  }], null, null);
})();
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


function PageScrollConfig() {}

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

/***/ 17964:
/*!*******************************************************************************************!*\
  !*** ./node_modules/ngx-textarea-autosize/__ivy_ngcc__/fesm2015/ngx-textarea-autosize.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextareaAutosizeModule": function() { return /* binding */ TextareaAutosizeModule; },
/* harmony export */   "ɵa": function() { return /* binding */ AutosizeDirective; }
/* harmony export */ });
/* harmony import */ var _Volumes_Data_projects_eclipse_workspace_HKM6_HKM6_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var _Volumes_Data_projects_eclipse_workspace_HKM6_HKM6_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 95833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);







var AutosizeDirective = /*#__PURE__*/function () {
  function AutosizeDirective(elem, renderer) {
    (0,_Volumes_Data_projects_eclipse_workspace_HKM6_HKM6_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, AutosizeDirective);

    this.elem = elem;
    this.renderer = renderer;
    this.overflow = 'hidden';
    this.rows = 1;
  }

  (0,_Volumes_Data_projects_eclipse_workspace_HKM6_HKM6_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(AutosizeDirective, [{
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      this.resize();
    }
  }, {
    key: "ngDoCheck",
    value: function ngDoCheck() {
      this.resize();
    }
  }, {
    key: "resize",
    value: function resize() {
      var textarea = this.elem.nativeElement; // Calculate border height which is not included in scrollHeight

      var borderHeight = textarea.offsetHeight - textarea.clientHeight; // Reset textarea height to auto that correctly calculate the new height

      this.setHeight('auto'); // Set new height

      this.setHeight("".concat(textarea.scrollHeight + borderHeight, "px"));
    }
  }, {
    key: "setHeight",
    value: function setHeight(value) {
      this.renderer.setStyle(this.elem.nativeElement, 'height', value);
    }
  }]);

  return AutosizeDirective;
}();

AutosizeDirective.ɵfac = function AutosizeDirective_Factory(t) {
  return new (t || AutosizeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2));
};

AutosizeDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: AutosizeDirective,
  selectors: [["textarea", "autosize", ""]],
  hostVars: 3,
  hostBindings: function AutosizeDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AutosizeDirective_input_HostBindingHandler() {
        return ctx.resize();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵhostProperty"]("rows", ctx.rows);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("overflow", ctx.overflow);
    }
  },
  inputs: {
    rows: "rows"
  }
});

(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostBinding)('style.overflow'), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Object)], AutosizeDirective.prototype, "overflow", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostBinding)('rows'), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Object)], AutosizeDirective.prototype, "rows", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('input'), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", []), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:returntype", void 0)], AutosizeDirective.prototype, "resize", null);

AutosizeDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2])], AutosizeDirective);

var TextareaAutosizeModule = function TextareaAutosizeModule() {
  (0,_Volumes_Data_projects_eclipse_workspace_HKM6_HKM6_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, TextareaAutosizeModule);
};

TextareaAutosizeModule.ɵfac = function TextareaAutosizeModule_Factory(t) {
  return new (t || TextareaAutosizeModule)();
};

TextareaAutosizeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: TextareaAutosizeModule
});
TextareaAutosizeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AutosizeDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: 'textarea[autosize]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2
    }];
  }, {
    overflow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostBinding,
      args: ['style.overflow']
    }],
    rows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostBinding,
      args: ['rows']
    }],
    resize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
      args: ['input']
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TextareaAutosizeModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
      declarations: [AutosizeDirective],
      exports: [AutosizeDirective]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TextareaAutosizeModule, {
    declarations: function declarations() {
      return [AutosizeDirective];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule];
    },
    exports: function exports() {
      return [AutosizeDirective];
    }
  });
})();
/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=ngx-textarea-autosize.js.map

/***/ }),

/***/ 74187:
/*!*********************************************************************!*\
  !*** ./node_modules/ngx-webcam/__ivy_ngcc__/fesm2015/ngx-webcam.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebcamComponent": function() { return /* binding */ WebcamComponent; },
/* harmony export */   "WebcamImage": function() { return /* binding */ WebcamImage; },
/* harmony export */   "WebcamInitError": function() { return /* binding */ WebcamInitError; },
/* harmony export */   "WebcamMirrorProperties": function() { return /* binding */ WebcamMirrorProperties; },
/* harmony export */   "WebcamModule": function() { return /* binding */ WebcamModule; },
/* harmony export */   "WebcamUtil": function() { return /* binding */ WebcamUtil; }
/* harmony export */ });
/* harmony import */ var _Volumes_Data_projects_eclipse_workspace_HKM6_HKM6_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var _Volumes_Data_projects_eclipse_workspace_HKM6_HKM6_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 37232);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 69165);






/**
 * Container class for a captured webcam image
 * @author basst314, davidshen84
 */



var _c0 = ["video"];
var _c1 = ["canvas"];

function WebcamComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WebcamComponent_div_3_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r3.rotateVideoInput(true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

var WebcamImage = /*#__PURE__*/function () {
  function WebcamImage(imageAsDataUrl, mimeType, imageData) {
    (0,_Volumes_Data_projects_eclipse_workspace_HKM6_HKM6_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, WebcamImage);

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


  (0,_Volumes_Data_projects_eclipse_workspace_HKM6_HKM6_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(WebcamImage, [{
    key: "imageAsBase64",
    get:
    /**
     * Get the base64 encoded image data
     * @returns base64 data of the image
     */
    function get() {
      return this._imageAsBase64 ? this._imageAsBase64 : this._imageAsBase64 = WebcamImage.getDataFromDataUrl(this._imageAsDataUrl, this._mimeType);
    }
    /**
     * Get the encoded image as dataUrl
     * @returns the dataUrl of the image
     */

  }, {
    key: "imageAsDataUrl",
    get: function get() {
      return this._imageAsDataUrl;
    }
    /**
     * Get the ImageData object associated with the canvas' 2d context.
     * @returns the ImageData of the canvas's 2d context.
     */

  }, {
    key: "imageData",
    get: function get() {
      return this._imageData;
    }
  }], [{
    key: "getDataFromDataUrl",
    value: function getDataFromDataUrl(dataUrl, mimeType) {
      return dataUrl.replace("data:".concat(mimeType, ";base64,"), '');
    }
  }]);

  return WebcamImage;
}();

var WebcamUtil = /*#__PURE__*/function () {
  function WebcamUtil() {
    (0,_Volumes_Data_projects_eclipse_workspace_HKM6_HKM6_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, WebcamUtil);
  }

  (0,_Volumes_Data_projects_eclipse_workspace_HKM6_HKM6_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(WebcamUtil, null, [{
    key: "getAvailableVideoInputs",
    value:
    /**
     * Lists available videoInput devices
     * @returns a list of media device info.
     */
    function getAvailableVideoInputs() {
      if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
        return Promise.reject('enumerateDevices() not supported.');
      }

      return new Promise(function (resolve, reject) {
        navigator.mediaDevices.enumerateDevices().then(function (devices) {
          resolve(devices.filter(function (device) {
            return device.kind === 'videoinput';
          }));
        }).catch(function (err) {
          reject(err.message || err);
        });
      });
    }
  }]);

  return WebcamUtil;
}();

var WebcamComponent_1;

var WebcamComponent = WebcamComponent_1 = /*#__PURE__*/function () {
  function WebcamComponent() {
    (0,_Volumes_Data_projects_eclipse_workspace_HKM6_HKM6_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, WebcamComponent);

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

    this.imageCapture = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /** Emits a mediaError if webcam cannot be initialized (e.g. missing user permissions) */

    this.initError = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /** Emits when the webcam video was clicked */

    this.imageClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /** Emits the active deviceId after the active video device was switched */

    this.cameraSwitched = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
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
  /**
   * If the given Observable emits, an image will be captured and emitted through 'imageCapture' EventEmitter
   */


  (0,_Volumes_Data_projects_eclipse_workspace_HKM6_HKM6_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(WebcamComponent, [{
    key: "trigger",
    set: function set(trigger) {
      var _this = this;

      if (this.triggerSubscription) {
        this.triggerSubscription.unsubscribe();
      } // Subscribe to events from this Observable to take snapshots


      this.triggerSubscription = trigger.subscribe(function () {
        _this.takeSnapshot();
      });
    }
    /**
     * If the given Observable emits, the active webcam will be switched to the one indicated by the emitted value.
     * @param switchCamera Indicates which webcam to switch to
     *   true: cycle forwards through available webcams
     *   false: cycle backwards through available webcams
     *   string: activate the webcam with the given id
     */

  }, {
    key: "switchCamera",
    set: function set(switchCamera) {
      var _this2 = this;

      if (this.switchCameraSubscription) {
        this.switchCameraSubscription.unsubscribe();
      } // Subscribe to events from this Observable to switch video device


      this.switchCameraSubscription = switchCamera.subscribe(function (value) {
        if (typeof value === 'string') {
          // deviceId was specified
          _this2.switchToVideoInput(value);
        } else {
          // direction was specified
          _this2.rotateVideoInput(value !== false);
        }
      });
    }
    /**
     * Get MediaTrackConstraints to request streaming the given device
     * @param deviceId
     * @param baseMediaTrackConstraints base constraints to merge deviceId-constraint into
     * @returns
     */

  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this3 = this;

      this.detectAvailableDevices().then(function () {
        // start video
        _this3.switchToVideoInput(null);
      }).catch(function (err) {
        _this3.initError.next({
          message: err
        }); // fallback: still try to load webcam, even if device enumeration failed


        _this3.switchToVideoInput(null);
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.stopMediaTracks();
      this.unsubscribeFromSubscriptions();
    }
    /**
     * Takes a snapshot of the current webcam's view and emits the image as an event
     */

  }, {
    key: "takeSnapshot",
    value: function takeSnapshot() {
      // set canvas size to actual video size
      var _video = this.nativeVideoElement;
      var dimensions = {
        width: this.width,
        height: this.height
      };

      if (_video.videoWidth) {
        dimensions.width = _video.videoWidth;
        dimensions.height = _video.videoHeight;
      }

      var _canvas = this.canvas.nativeElement;
      _canvas.width = dimensions.width;
      _canvas.height = dimensions.height; // paint snapshot image to canvas

      var context2d = _canvas.getContext('2d');

      context2d.drawImage(_video, 0, 0); // read canvas content as image

      var mimeType = this.imageType ? this.imageType : WebcamComponent_1.DEFAULT_IMAGE_TYPE;
      var quality = this.imageQuality ? this.imageQuality : WebcamComponent_1.DEFAULT_IMAGE_QUALITY;

      var dataUrl = _canvas.toDataURL(mimeType, quality); // get the ImageData object from the canvas' context.


      var imageData = null;

      if (this.captureImageData) {
        imageData = context2d.getImageData(0, 0, _canvas.width, _canvas.height);
      }

      this.imageCapture.next(new WebcamImage(dataUrl, mimeType, imageData));
    }
    /**
     * Switches to the next/previous video device
     * @param forward
     */

  }, {
    key: "rotateVideoInput",
    value: function rotateVideoInput(forward) {
      if (this.availableVideoInputs && this.availableVideoInputs.length > 1) {
        var increment = forward ? 1 : this.availableVideoInputs.length - 1;
        var nextInputIndex = (this.activeVideoInputIndex + increment) % this.availableVideoInputs.length;
        this.switchToVideoInput(this.availableVideoInputs[nextInputIndex].deviceId);
      }
    }
    /**
     * Switches the camera-view to the specified video device
     */

  }, {
    key: "switchToVideoInput",
    value: function switchToVideoInput(deviceId) {
      this.videoInitialized = false;
      this.stopMediaTracks();
      this.initWebcam(deviceId, this.videoOptions);
    }
    /**
     * Event-handler for video resize event.
     * Triggers Angular change detection so that new video dimensions get applied
     */

  }, {
    key: "videoResize",
    value: function videoResize() {// here to trigger Angular change detection
    }
  }, {
    key: "videoWidth",
    get: function get() {
      var videoRatio = this.getVideoAspectRatio();
      return Math.min(this.width, this.height * videoRatio);
    }
  }, {
    key: "videoHeight",
    get: function get() {
      var videoRatio = this.getVideoAspectRatio();
      return Math.min(this.height, this.width / videoRatio);
    }
  }, {
    key: "videoStyleClasses",
    get: function get() {
      var classes = '';

      if (this.isMirrorImage()) {
        classes += 'mirrored ';
      }

      return classes.trim();
    }
  }, {
    key: "nativeVideoElement",
    get: function get() {
      return this.video.nativeElement;
    }
    /**
     * Returns the video aspect ratio of the active video stream
     */

  }, {
    key: "getVideoAspectRatio",
    value: function getVideoAspectRatio() {
      // calculate ratio from video element dimensions if present
      var videoElement = this.nativeVideoElement;

      if (videoElement.videoWidth && videoElement.videoWidth > 0 && videoElement.videoHeight && videoElement.videoHeight > 0) {
        return videoElement.videoWidth / videoElement.videoHeight;
      } // nothing present - calculate ratio based on width/height params


      return this.width / this.height;
    }
    /**
     * Init webcam live view
     */

  }, {
    key: "initWebcam",
    value: function initWebcam(deviceId, userVideoTrackConstraints) {
      var _this4 = this;

      var _video = this.nativeVideoElement;

      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // merge deviceId -> userVideoTrackConstraints
        var videoTrackConstraints = WebcamComponent_1.getMediaConstraintsForDevice(deviceId, userVideoTrackConstraints);
        navigator.mediaDevices.getUserMedia({
          video: videoTrackConstraints
        }).then(function (stream) {
          _this4.mediaStream = stream;
          _video.srcObject = stream;

          _video.play();

          _this4.activeVideoSettings = stream.getVideoTracks()[0].getSettings();
          var activeDeviceId = WebcamComponent_1.getDeviceIdFromMediaStreamTrack(stream.getVideoTracks()[0]);

          _this4.cameraSwitched.next(activeDeviceId); // Initial detect may run before user gave permissions, returning no deviceIds. This prevents later camera switches. (#47)
          // Run detect once again within getUserMedia callback, to make sure this time we have permissions and get deviceIds.


          _this4.detectAvailableDevices().then(function () {
            _this4.activeVideoInputIndex = activeDeviceId ? _this4.availableVideoInputs.findIndex(function (mediaDeviceInfo) {
              return mediaDeviceInfo.deviceId === activeDeviceId;
            }) : -1;
            _this4.videoInitialized = true;
          }).catch(function () {
            _this4.activeVideoInputIndex = -1;
            _this4.videoInitialized = true;
          });
        }).catch(function (err) {
          _this4.initError.next({
            message: err.message,
            mediaStreamError: err
          });
        });
      } else {
        this.initError.next({
          message: 'Cannot read UserMedia from MediaDevices.'
        });
      }
    }
  }, {
    key: "getActiveVideoTrack",
    value: function getActiveVideoTrack() {
      return this.mediaStream ? this.mediaStream.getVideoTracks()[0] : null;
    }
  }, {
    key: "isMirrorImage",
    value: function isMirrorImage() {
      if (!this.getActiveVideoTrack()) {
        return false;
      } // check for explicit mirror override parameter


      {
        var mirror = 'auto';

        if (this.mirrorImage) {
          if (typeof this.mirrorImage === 'string') {
            mirror = String(this.mirrorImage).toLowerCase();
          } else {
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
      } // default: enable mirroring if webcam is user facing

      return WebcamComponent_1.isUserFacing(this.getActiveVideoTrack());
    }
    /**
     * Stops all active media tracks.
     * This prevents the webcam from being indicated as active,
     * even if it is no longer used by this component.
     */

  }, {
    key: "stopMediaTracks",
    value: function stopMediaTracks() {
      if (this.mediaStream && this.mediaStream.getTracks) {
        // getTracks() returns all media tracks (video+audio)
        this.mediaStream.getTracks().forEach(function (track) {
          return track.stop();
        });
      }
    }
    /**
     * Unsubscribe from all open subscriptions
     */

  }, {
    key: "unsubscribeFromSubscriptions",
    value: function unsubscribeFromSubscriptions() {
      if (this.triggerSubscription) {
        this.triggerSubscription.unsubscribe();
      }

      if (this.switchCameraSubscription) {
        this.switchCameraSubscription.unsubscribe();
      }
    }
    /**
     * Reads available input devices
     */

  }, {
    key: "detectAvailableDevices",
    value: function detectAvailableDevices() {
      var _this5 = this;

      return new Promise(function (resolve, reject) {
        WebcamUtil.getAvailableVideoInputs().then(function (devices) {
          _this5.availableVideoInputs = devices;
          resolve(devices);
        }).catch(function (err) {
          _this5.availableVideoInputs = [];
          reject(err);
        });
      });
    }
  }], [{
    key: "getMediaConstraintsForDevice",
    value: function getMediaConstraintsForDevice(deviceId, baseMediaTrackConstraints) {
      var result = baseMediaTrackConstraints ? baseMediaTrackConstraints : this.DEFAULT_VIDEO_OPTIONS;

      if (deviceId) {
        result.deviceId = {
          exact: deviceId
        };
      }

      return result;
    }
    /**
     * Tries to harvest the deviceId from the given mediaStreamTrack object.
     * Browsers populate this object differently; this method tries some different approaches
     * to read the id.
     * @param mediaStreamTrack
     * @returns deviceId if found in the mediaStreamTrack
     */

  }, {
    key: "getDeviceIdFromMediaStreamTrack",
    value: function getDeviceIdFromMediaStreamTrack(mediaStreamTrack) {
      if (mediaStreamTrack.getSettings && mediaStreamTrack.getSettings() && mediaStreamTrack.getSettings().deviceId) {
        return mediaStreamTrack.getSettings().deviceId;
      } else if (mediaStreamTrack.getConstraints && mediaStreamTrack.getConstraints() && mediaStreamTrack.getConstraints().deviceId) {
        var deviceIdObj = mediaStreamTrack.getConstraints().deviceId;
        return WebcamComponent_1.getValueFromConstrainDOMString(deviceIdObj);
      }
    }
    /**
     * Tries to harvest the facingMode from the given mediaStreamTrack object.
     * Browsers populate this object differently; this method tries some different approaches
     * to read the value.
     * @param mediaStreamTrack
     * @returns facingMode if found in the mediaStreamTrack
     */

  }, {
    key: "getFacingModeFromMediaStreamTrack",
    value: function getFacingModeFromMediaStreamTrack(mediaStreamTrack) {
      if (mediaStreamTrack) {
        if (mediaStreamTrack.getSettings && mediaStreamTrack.getSettings() && mediaStreamTrack.getSettings().facingMode) {
          return mediaStreamTrack.getSettings().facingMode;
        } else if (mediaStreamTrack.getConstraints && mediaStreamTrack.getConstraints() && mediaStreamTrack.getConstraints().facingMode) {
          var facingModeConstraint = mediaStreamTrack.getConstraints().facingMode;
          return WebcamComponent_1.getValueFromConstrainDOMString(facingModeConstraint);
        }
      }
    }
    /**
     * Determines whether the given mediaStreamTrack claims itself as user facing
     * @param mediaStreamTrack
     */

  }, {
    key: "isUserFacing",
    value: function isUserFacing(mediaStreamTrack) {
      var facingMode = WebcamComponent_1.getFacingModeFromMediaStreamTrack(mediaStreamTrack);
      return facingMode ? 'user' === facingMode.toLowerCase() : false;
    }
    /**
     * Extracts the value from the given ConstrainDOMString
     * @param constrainDOMString
     */

  }, {
    key: "getValueFromConstrainDOMString",
    value: function getValueFromConstrainDOMString(constrainDOMString) {
      if (constrainDOMString) {
        if (constrainDOMString instanceof String) {
          return String(constrainDOMString);
        } else if (Array.isArray(constrainDOMString) && Array(constrainDOMString).length > 0) {
          return String(constrainDOMString[0]);
        } else if (typeof constrainDOMString === 'object') {
          if (constrainDOMString['exact']) {
            return String(constrainDOMString['exact']);
          } else if (constrainDOMString['ideal']) {
            return String(constrainDOMString['ideal']);
          }
        }
      }

      return null;
    }
  }]);

  return WebcamComponent;
}();

WebcamComponent.ɵfac = function WebcamComponent_Factory(t) {
  return new (t || WebcamComponent)();
};

WebcamComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: WebcamComponent,
  selectors: [["webcam"]],
  viewQuery: function WebcamComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 7);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.video = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    }
  },
  inputs: {
    width: "width",
    height: "height",
    videoOptions: "videoOptions",
    allowCameraSwitch: "allowCameraSwitch",
    captureImageData: "captureImageData",
    imageType: "imageType",
    imageQuality: "imageQuality",
    trigger: "trigger",
    switchCamera: "switchCamera",
    mirrorImage: "mirrorImage"
  },
  outputs: {
    imageCapture: "imageCapture",
    initError: "initError",
    imageClick: "imageClick",
    cameraSwitched: "cameraSwitched"
  },
  decls: 6,
  vars: 7,
  consts: [[1, "webcam-wrapper", 3, "click"], ["autoplay", "", "muted", "", "playsinline", "", 3, "width", "height", "resize"], ["video", ""], ["class", "camera-switch", 3, "click", 4, "ngIf"], [3, "width", "height"], ["canvas", ""], [1, "camera-switch", 3, "click"]],
  template: function WebcamComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WebcamComponent_Template_div_click_0_listener() {
        return ctx.imageClick.next();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "video", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function WebcamComponent_Template_video_resize_1_listener() {
        return ctx.videoResize();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, WebcamComponent_div_3_Template, 1, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "canvas", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.videoStyleClasses);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", ctx.videoWidth)("height", ctx.videoHeight);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.allowCameraSwitch && ctx.availableVideoInputs.length > 1 && ctx.videoInitialized);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", ctx.width)("height", ctx.height);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: [".webcam-wrapper[_ngcontent-%COMP%]{display:inline-block;position:relative;line-height:0}.webcam-wrapper[_ngcontent-%COMP%]   video.mirrored[_ngcontent-%COMP%]{transform:scale(-1,1)}.webcam-wrapper[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{display:none}.webcam-wrapper[_ngcontent-%COMP%]   .camera-switch[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.1);background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE9UlEQVR42u2aT2hdRRTGf+cRQqghSqihdBFDkRISK2KDfzDWxHaRQHEhaINKqa1gKQhd6EZLN+IidCH+Q0oWIkVRC21BQxXRitVaSbKoJSGtYGoK2tQ/tU1jY5v0c5F54Xl7b/KSO/PyEt+3e5f75p7zzZwzZ74zUEIJJfyfYaEGllQGVAGZlENdBy6Z2cSiYFTSKkkfS/pH/nBF0kFJdUW9AiRVASeAukD8DgNrzOySrwEzng18KaDzALXuG8W3AiStAvqBisBRNg40mtlPxbYCOgvgPO4bncWW+JpVeDQXRQhIygDfA00F5r0XuNfMrgclQFI98DDQCNQA5ZFXqoCWBVp8XwHRHeEqcN7loy/NbHBesyqpQ1KfFj/6nC+ZvFaApFrgPaCZpYVvgCfNbDiRAElNwGFg+RIt/X8H2s2s9wYCJDUAR4HqJX7++RN40MwGpgmQVAH0AQ2BPz4AHHPl8nBOAqtyFWQjsA6oL4Ada81sPDv7uwImod8kvSJp9RyS8O2SXnb/DYVd2Y9VSroQ4ANXJO2WVJmixqh0kzMWwL4LkiqRtDnA4D1zmfE8j9g9AezcnAHaPcfXdbfdnPZ2Yps6+DwAvO/Z1naTdApY7Xng48BDZnY1MpMVQBuw3iXc5Tnb0wBwBPjUzP6eoezuArZ6svM0geJLkvZEYnl3nkntoqROSbckSW2Suj3ZOIangc7GPJuUtNGdFIfmMeavktoSSKiW9LMPw30Q8JqkekmjCbOZRhuclLQjgYSNxUBAj6RyZ9ATgUJpUtJTCSR8vpAEXHAyWK5BXYFIGHOlepSAloUk4NEYgyoknQhEwhFJ0e8h6VSaQeerCb5uZgdi9utxYBNwOUD93hIVXswM4INCi6K9wAszFC2DwLOBDjHbYp59karIUnRdzYy/3ClqVklaUhfwTICj7K25OqA7a4wWagVsm4Me/xzwg2cCqqONFzO7DPxSCAJi436GUBgHHguQD2oTlJ55oSzP9ybccsttSJw1szdjFOSnI/8dTCGZHwcORp4Nx7y3B1iZ8/sm4MW8/Euxg5wIsS/HaAp3zeP4/G7obRDXI4jiTIA22H7Xdc7X+S3A5lC7QBQ357aq3VAjCeSkwUfAJrfvz+R8A9ADLAtZB+TinpjC5JMA+//jwPZZnF8G7J+L8z4IWB/zbG+gIujVWfLBW/NStVMmqaG4POJRsIjix7h8IGnLQuoBbQki5sVAJHyYm7YkNaRRtXwQ8G1cHpX0iKRrgUjYno17Sf0LrQhJUkdCeHWkVITGJI0k1QeS3ikGSUzOyJUJJNznYneuOCnpTldcxa2kP3xJYqOeSDjqZG8ShJLnE8TTuMS6Iyu1BW7djZqkfo9N0QOuYJmYQddfB7RG+gLTNzqAY9FrL+5/nwEbvDdJJe3zzOrhNP3AWRqmk55t3ZcBuj3b2gb0Sbrbo/NNzk7fFzu7s/E5EiC+rrmeQU0Kx2skvRFoOx2ZzlmSdgbsw49JetvtBpk8nM64d/cGbNtJ0s7cGyJlwHeEv+t3nqnLSgPAUOSGyG3AHUxdzqoJbEcvcL+ZTeTeEapzJKxgaeOcc/7Mf06D7kFrguS0VDAMtGadv+E47DT9tcChJej8ISfpD+abgTe45uOkFi8mnQ+JBVQ+d4VXuOptjavcyot8pq86mfwk8LWZnaOEEkoooYQSSojDv8AhQNeGfe0jAAAAAElFTkSuQmCC);background-repeat:no-repeat;border-radius:5px;position:absolute;right:13px;top:10px;height:48px;width:48px;background-size:80%;cursor:pointer;background-position:center;transition:background-color .2s}.webcam-wrapper[_ngcontent-%COMP%]   .camera-switch[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.18)}"]
});
WebcamComponent.DEFAULT_VIDEO_OPTIONS = {
  facingMode: 'environment'
};
WebcamComponent.DEFAULT_IMAGE_TYPE = 'image/jpeg';
WebcamComponent.DEFAULT_IMAGE_QUALITY = 0.92;

(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], WebcamComponent.prototype, "width", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], WebcamComponent.prototype, "height", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], WebcamComponent.prototype, "videoOptions", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)], WebcamComponent.prototype, "allowCameraSwitch", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], WebcamComponent.prototype, "mirrorImage", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)], WebcamComponent.prototype, "captureImageData", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], WebcamComponent.prototype, "imageType", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], WebcamComponent.prototype, "imageQuality", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter)], WebcamComponent.prototype, "imageCapture", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter)], WebcamComponent.prototype, "initError", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter)], WebcamComponent.prototype, "imageClick", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter)], WebcamComponent.prototype, "cameraSwitched", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild)('video', {
  static: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], WebcamComponent.prototype, "video", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild)('canvas', {
  static: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], WebcamComponent.prototype, "canvas", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable])], WebcamComponent.prototype, "trigger", null);

(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable])], WebcamComponent.prototype, "switchCamera", null);

var COMPONENTS = [WebcamComponent];

var WebcamModule = function WebcamModule() {
  (0,_Volumes_Data_projects_eclipse_workspace_HKM6_HKM6_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, WebcamModule);
};

WebcamModule.ɵfac = function WebcamModule_Factory(t) {
  return new (t || WebcamModule)();
};

WebcamModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: WebcamModule
});
WebcamModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](WebcamComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'webcam',
      template: "<div class=\"webcam-wrapper\" (click)=\"imageClick.next();\">\r\n  <video #video [width]=\"videoWidth\" [height]=\"videoHeight\" [class]=\"videoStyleClasses\" autoplay muted playsinline (resize)=\"videoResize()\"></video>\r\n  <div class=\"camera-switch\" *ngIf=\"allowCameraSwitch && availableVideoInputs.length > 1 && videoInitialized\" (click)=\"rotateVideoInput(true)\"></div>\r\n  <canvas #canvas [width]=\"width\" [height]=\"height\"></canvas>\r\n</div>\r\n",
      styles: [".webcam-wrapper{display:inline-block;position:relative;line-height:0}.webcam-wrapper video.mirrored{transform:scale(-1,1)}.webcam-wrapper canvas{display:none}.webcam-wrapper .camera-switch{background-color:rgba(0,0,0,.1);background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE9UlEQVR42u2aT2hdRRTGf+cRQqghSqihdBFDkRISK2KDfzDWxHaRQHEhaINKqa1gKQhd6EZLN+IidCH+Q0oWIkVRC21BQxXRitVaSbKoJSGtYGoK2tQ/tU1jY5v0c5F54Xl7b/KSO/PyEt+3e5f75p7zzZwzZ74zUEIJJfyfYaEGllQGVAGZlENdBy6Z2cSiYFTSKkkfS/pH/nBF0kFJdUW9AiRVASeAukD8DgNrzOySrwEzng18KaDzALXuG8W3AiStAvqBisBRNg40mtlPxbYCOgvgPO4bncWW+JpVeDQXRQhIygDfA00F5r0XuNfMrgclQFI98DDQCNQA5ZFXqoCWBVp8XwHRHeEqcN7loy/NbHBesyqpQ1KfFj/6nC+ZvFaApFrgPaCZpYVvgCfNbDiRAElNwGFg+RIt/X8H2s2s9wYCJDUAR4HqJX7++RN40MwGpgmQVAH0AQ2BPz4AHHPl8nBOAqtyFWQjsA6oL4Ada81sPDv7uwImod8kvSJp9RyS8O2SXnb/DYVd2Y9VSroQ4ANXJO2WVJmixqh0kzMWwL4LkiqRtDnA4D1zmfE8j9g9AezcnAHaPcfXdbfdnPZ2Yps6+DwAvO/Z1naTdApY7Xng48BDZnY1MpMVQBuw3iXc5Tnb0wBwBPjUzP6eoezuArZ6svM0geJLkvZEYnl3nkntoqROSbckSW2Suj3ZOIangc7GPJuUtNGdFIfmMeavktoSSKiW9LMPw30Q8JqkekmjCbOZRhuclLQjgYSNxUBAj6RyZ9ATgUJpUtJTCSR8vpAEXHAyWK5BXYFIGHOlepSAloUk4NEYgyoknQhEwhFJ0e8h6VSaQeerCb5uZgdi9utxYBNwOUD93hIVXswM4INCi6K9wAszFC2DwLOBDjHbYp59karIUnRdzYy/3ClqVklaUhfwTICj7K25OqA7a4wWagVsm4Me/xzwg2cCqqONFzO7DPxSCAJi436GUBgHHguQD2oTlJ55oSzP9ybccsttSJw1szdjFOSnI/8dTCGZHwcORp4Nx7y3B1iZ8/sm4MW8/Euxg5wIsS/HaAp3zeP4/G7obRDXI4jiTIA22H7Xdc7X+S3A5lC7QBQ357aq3VAjCeSkwUfAJrfvz+R8A9ADLAtZB+TinpjC5JMA+//jwPZZnF8G7J+L8z4IWB/zbG+gIujVWfLBW/NStVMmqaG4POJRsIjix7h8IGnLQuoBbQki5sVAJHyYm7YkNaRRtXwQ8G1cHpX0iKRrgUjYno17Sf0LrQhJUkdCeHWkVITGJI0k1QeS3ikGSUzOyJUJJNznYneuOCnpTldcxa2kP3xJYqOeSDjqZG8ShJLnE8TTuMS6Iyu1BW7djZqkfo9N0QOuYJmYQddfB7RG+gLTNzqAY9FrL+5/nwEbvDdJJe3zzOrhNP3AWRqmk55t3ZcBuj3b2gb0Sbrbo/NNzk7fFzu7s/E5EiC+rrmeQU0Kx2skvRFoOx2ZzlmSdgbsw49JetvtBpk8nM64d/cGbNtJ0s7cGyJlwHeEv+t3nqnLSgPAUOSGyG3AHUxdzqoJbEcvcL+ZTeTeEapzJKxgaeOcc/7Mf06D7kFrguS0VDAMtGadv+E47DT9tcChJej8ISfpD+abgTe45uOkFi8mnQ+JBVQ+d4VXuOptjavcyot8pq86mfwk8LWZnaOEEkoooYQSSojDv8AhQNeGfe0jAAAAAElFTkSuQmCC);background-repeat:no-repeat;border-radius:5px;position:absolute;right:13px;top:10px;height:48px;width:48px;background-size:80%;cursor:pointer;background-position:center;transition:background-color .2s}.webcam-wrapper .camera-switch:hover{background-color:rgba(0,0,0,.18)}"]
    }]
  }], function () {
    return [];
  }, {
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    videoOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    allowCameraSwitch: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    captureImageData: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    imageType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    imageQuality: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    imageCapture: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    initError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    imageClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    cameraSwitched: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    trigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    switchCamera: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    mirrorImage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    video: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
      args: ['video', {
        static: true
      }]
    }],
    canvas: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
      args: ['canvas', {
        static: true
      }]
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](WebcamModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
      declarations: [COMPONENTS],
      exports: [COMPONENTS]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WebcamModule, {
    declarations: function declarations() {
      return [WebcamComponent];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule];
    },
    exports: function exports() {
      return [WebcamComponent];
    }
  });
})();

var WebcamInitError = function WebcamInitError() {
  (0,_Volumes_Data_projects_eclipse_workspace_HKM6_HKM6_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, WebcamInitError);

  this.message = null;
  this.mediaStreamError = null;
};

var WebcamMirrorProperties = function WebcamMirrorProperties() {
  (0,_Volumes_Data_projects_eclipse_workspace_HKM6_HKM6_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, WebcamMirrorProperties);
};

 //# sourceMappingURL=ngx-webcam.js.map

/***/ }),

/***/ 89811:
/*!*************************************************!*\
  !*** ./node_modules/resolve-url/resolve-url.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;// Copyright 2014 Simon Lydell
// X11 (“MIT”) Licensed. (See LICENSE.)
void function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function () {
  function resolveUrl()
  /* ...urls */
  {
    var numUrls = arguments.length;

    if (numUrls === 0) {
      throw new Error("resolveUrl requires at least one argument; got none.");
    }

    var base = document.createElement("base");
    base.href = arguments[0];

    if (numUrls === 1) {
      return base.href;
    }

    var head = document.getElementsByTagName("head")[0];
    head.insertBefore(base, head.firstChild);
    var a = document.createElement("a");
    var resolved;

    for (var index = 1; index < numUrls; index++) {
      a.href = arguments[index];
      resolved = a.href;
      base.href = resolved;
    }

    head.removeChild(base);
    return resolved;
  }

  return resolveUrl;
});

/***/ }),

/***/ 2141:
/*!****************************************************!*\
  !*** ./node_modules/tesseract.js/src/Tesseract.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 88774);

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator */ 91052).default;

var createWorker = __webpack_require__(/*! ./createWorker */ 75766);

var recognize = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(image, langs, options) {
    var worker;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            worker = createWorker(options);
            _context2.next = 3;
            return worker.load();

          case 3:
            _context2.next = 5;
            return worker.loadLanguage(langs);

          case 5:
            _context2.next = 7;
            return worker.initialize(langs);

          case 7:
            return _context2.abrupt("return", worker.recognize(image).finally( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
              return _regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return worker.terminate();

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }))));

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function recognize(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var detect = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(image, options) {
    var worker;
    return _regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            worker = createWorker(options);
            _context4.next = 3;
            return worker.load();

          case 3:
            _context4.next = 5;
            return worker.loadLanguage('osd');

          case 5:
            _context4.next = 7;
            return worker.initialize('osd');

          case 7:
            return _context4.abrupt("return", worker.detect(image).finally( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
              return _regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return worker.terminate();

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }))));

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function detect(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();

module.exports = {
  recognize: recognize,
  detect: detect
};

/***/ }),

/***/ 19927:
/*!********************************************************!*\
  !*** ./node_modules/tesseract.js/src/constants/OEM.js ***!
  \********************************************************/
/***/ (function(module) {

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
  DEFAULT: 3
};

/***/ }),

/***/ 9213:
/*!********************************************************!*\
  !*** ./node_modules/tesseract.js/src/constants/PSM.js ***!
  \********************************************************/
/***/ (function(module) {

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
  SPARSE_TEXT_OSD: '12'
};

/***/ }),

/***/ 49298:
/*!***********************************************************!*\
  !*** ./node_modules/tesseract.js/src/constants/config.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var OEM = __webpack_require__(/*! ./OEM */ 19927);

module.exports = {
  defaultOEM: OEM.DEFAULT
};

/***/ }),

/***/ 5457:
/*!*******************************************************************!*\
  !*** ./node_modules/tesseract.js/src/constants/defaultOptions.js ***!
  \*******************************************************************/
/***/ (function(module) {

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
  logger: function logger() {}
};

/***/ }),

/***/ 82173:
/*!****************************************************!*\
  !*** ./node_modules/tesseract.js/src/createJob.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getId = __webpack_require__(/*! ./utils/getId */ 81306);

var jobCounter = 0;

module.exports = function (_ref) {
  var _id = _ref.id,
      action = _ref.action,
      _ref$payload = _ref.payload,
      payload = _ref$payload === void 0 ? {} : _ref$payload;
  var id = _id;

  if (typeof id === 'undefined') {
    id = getId('Job', jobCounter);
    jobCounter += 1;
  }

  return {
    id: id,
    action: action,
    payload: payload
  };
};

/***/ }),

/***/ 65310:
/*!**********************************************************!*\
  !*** ./node_modules/tesseract.js/src/createScheduler.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 88774);

var _toConsumableArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/toConsumableArray */ 59545).default;

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator */ 91052).default;

var _this = this;

var createJob = __webpack_require__(/*! ./createJob */ 82173);

var _require = __webpack_require__(/*! ./utils/log */ 30066),
    log = _require.log;

var getId = __webpack_require__(/*! ./utils/getId */ 81306);

var schedulerCounter = 0;

module.exports = function () {
  var id = getId('Scheduler', schedulerCounter);
  var workers = {};
  var runningWorkers = {};
  var jobQueue = [];
  schedulerCounter += 1;

  var getQueueLen = function getQueueLen() {
    return jobQueue.length;
  };

  var getNumWorkers = function getNumWorkers() {
    return Object.keys(workers).length;
  };

  var dequeue = function dequeue() {
    if (jobQueue.length !== 0) {
      var wIds = Object.keys(workers);

      for (var i = 0; i < wIds.length; i += 1) {
        if (typeof runningWorkers[wIds[i]] === 'undefined') {
          jobQueue[0](workers[wIds[i]]);
          break;
        }
      }
    }
  };

  var queue = function queue(action, payload) {
    return new Promise(function (resolve, reject) {
      var job = createJob({
        action: action,
        payload: payload
      });
      jobQueue.push( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(w) {
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  jobQueue.shift();
                  runningWorkers[w.id] = job;
                  _context.prev = 2;
                  _context.t0 = resolve;
                  _context.next = 6;
                  return w[action].apply(_this, [].concat(_toConsumableArray(payload), [job.id]));

                case 6:
                  _context.t1 = _context.sent;
                  (0, _context.t0)(_context.t1);
                  _context.next = 13;
                  break;

                case 10:
                  _context.prev = 10;
                  _context.t2 = _context["catch"](2);
                  reject(_context.t2);

                case 13:
                  _context.prev = 13;
                  delete runningWorkers[w.id];
                  dequeue();
                  return _context.finish(13);

                case 17:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[2, 10, 13, 17]]);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      log("[".concat(id, "]: Add ").concat(job.id, " to JobQueue"));
      log("[".concat(id, "]: JobQueue length=").concat(jobQueue.length));
      dequeue();
    });
  };

  var addWorker = function addWorker(w) {
    workers[w.id] = w;
    log("[".concat(id, "]: Add ").concat(w.id));
    log("[".concat(id, "]: Number of workers=").concat(getNumWorkers()));
    dequeue();
    return w.id;
  };

  var addJob = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(action) {
      var _len,
          payload,
          _key,
          _args2 = arguments;

      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(getNumWorkers() === 0)) {
                _context2.next = 2;
                break;
              }

              throw Error("[".concat(id, "]: You need to have at least one worker before adding jobs"));

            case 2:
              for (_len = _args2.length, payload = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                payload[_key - 1] = _args2[_key];
              }

              return _context2.abrupt("return", queue(action, payload));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function addJob(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var terminate = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
      return _regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              Object.keys(workers).forEach( /*#__PURE__*/function () {
                var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(wid) {
                  return _regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.next = 2;
                          return workers[wid].terminate();

                        case 2:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                }));

                return function (_x3) {
                  return _ref4.apply(this, arguments);
                };
              }());
              jobQueue = [];

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function terminate() {
      return _ref3.apply(this, arguments);
    };
  }();

  return {
    addWorker: addWorker,
    addJob: addJob,
    terminate: terminate,
    getQueueLen: getQueueLen,
    getNumWorkers: getNumWorkers
  };
};

/***/ }),

/***/ 75766:
/*!*******************************************************!*\
  !*** ./node_modules/tesseract.js/src/createWorker.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 88774);

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator */ 91052).default;

var _objectSpread = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/objectSpread2 */ 84539).default;

var _objectWithoutProperties = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/objectWithoutProperties */ 48764).default;

var resolvePaths = __webpack_require__(/*! ./utils/resolvePaths */ 50318);

var circularize = __webpack_require__(/*! ./utils/circularize */ 39136);

var createJob = __webpack_require__(/*! ./createJob */ 82173);

var _require = __webpack_require__(/*! ./utils/log */ 30066),
    log = _require.log;

var getId = __webpack_require__(/*! ./utils/getId */ 81306);

var _require2 = __webpack_require__(/*! ./constants/config */ 49298),
    defaultOEM = _require2.defaultOEM;

var _require3 = __webpack_require__(/*! ./worker/node */ 20638),
    defaultOptions = _require3.defaultOptions,
    spawnWorker = _require3.spawnWorker,
    terminateWorker = _require3.terminateWorker,
    onMessage = _require3.onMessage,
    loadImage = _require3.loadImage,
    send = _require3.send;

var workerCounter = 0;

module.exports = function () {
  var _options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var id = getId('Worker', workerCounter);

  var _resolvePaths = resolvePaths(_objectSpread(_objectSpread({}, defaultOptions), _options)),
      logger = _resolvePaths.logger,
      errorHandler = _resolvePaths.errorHandler,
      options = _objectWithoutProperties(_resolvePaths, ["logger", "errorHandler"]);

  var resolves = {};
  var rejects = {};
  var worker = spawnWorker(options);
  workerCounter += 1;

  var setResolve = function setResolve(action, res) {
    resolves[action] = res;
  };

  var setReject = function setReject(action, rej) {
    rejects[action] = rej;
  };

  var startJob = function startJob(_ref) {
    var jobId = _ref.id,
        action = _ref.action,
        payload = _ref.payload;
    return new Promise(function (resolve, reject) {
      log("[".concat(id, "]: Start ").concat(jobId, ", action=").concat(action));
      setResolve(action, resolve);
      setReject(action, reject);
      send(worker, {
        workerId: id,
        jobId: jobId,
        action: action,
        payload: payload
      });
    });
  };

  var load = function load(jobId) {
    return startJob(createJob({
      id: jobId,
      action: 'load',
      payload: {
        options: options
      }
    }));
  };

  var loadLanguage = function loadLanguage() {
    var langs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'eng';
    var jobId = arguments.length > 1 ? arguments[1] : undefined;
    return startJob(createJob({
      id: jobId,
      action: 'loadLanguage',
      payload: {
        langs: langs,
        options: options
      }
    }));
  };

  var initialize = function initialize() {
    var langs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'eng';
    var oem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOEM;
    var jobId = arguments.length > 2 ? arguments[2] : undefined;
    return startJob(createJob({
      id: jobId,
      action: 'initialize',
      payload: {
        langs: langs,
        oem: oem
      }
    }));
  };

  var setParameters = function setParameters() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var jobId = arguments.length > 1 ? arguments[1] : undefined;
    return startJob(createJob({
      id: jobId,
      action: 'setParameters',
      payload: {
        params: params
      }
    }));
  };

  var recognize = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(image) {
      var opts,
          jobId,
          _args = arguments;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              opts = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
              jobId = _args.length > 2 ? _args[2] : undefined;
              _context.t0 = startJob;
              _context.t1 = createJob;
              _context.t2 = jobId;
              _context.next = 7;
              return loadImage(image);

            case 7:
              _context.t3 = _context.sent;
              _context.t4 = opts;
              _context.t5 = {
                image: _context.t3,
                options: _context.t4
              };
              _context.t6 = {
                id: _context.t2,
                action: 'recognize',
                payload: _context.t5
              };
              _context.t7 = (0, _context.t1)(_context.t6);
              return _context.abrupt("return", (0, _context.t0)(_context.t7));

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function recognize(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var getPDF = function getPDF() {
    var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Tesseract OCR Result';
    var textonly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var jobId = arguments.length > 2 ? arguments[2] : undefined;
    return startJob(createJob({
      id: jobId,
      action: 'getPDF',
      payload: {
        title: title,
        textonly: textonly
      }
    }));
  };

  var detect = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(image, jobId) {
      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.t0 = startJob;
              _context2.t1 = createJob;
              _context2.t2 = jobId;
              _context2.next = 5;
              return loadImage(image);

            case 5:
              _context2.t3 = _context2.sent;
              _context2.t4 = {
                image: _context2.t3
              };
              _context2.t5 = {
                id: _context2.t2,
                action: 'detect',
                payload: _context2.t4
              };
              _context2.t6 = (0, _context2.t1)(_context2.t5);
              return _context2.abrupt("return", (0, _context2.t0)(_context2.t6));

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function detect(_x2, _x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  var terminate = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
      return _regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
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

              return _context3.abrupt("return", Promise.resolve());

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function terminate() {
      return _ref4.apply(this, arguments);
    };
  }();

  onMessage(worker, function (_ref5) {
    var workerId = _ref5.workerId,
        jobId = _ref5.jobId,
        status = _ref5.status,
        action = _ref5.action,
        data = _ref5.data;

    if (status === 'resolve') {
      log("[".concat(workerId, "]: Complete ").concat(jobId));
      var d = data;

      if (action === 'recognize') {
        d = circularize(data);
      } else if (action === 'getPDF') {
        d = Array.from(_objectSpread(_objectSpread({}, data), {}, {
          length: Object.keys(data).length
        }));
      }

      resolves[action]({
        jobId: jobId,
        data: d
      });
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
    id: id,
    worker: worker,
    setResolve: setResolve,
    setReject: setReject,
    load: load,
    loadLanguage: loadLanguage,
    initialize: initialize,
    setParameters: setParameters,
    recognize: recognize,
    getPDF: getPDF,
    detect: detect,
    terminate: terminate
  };
};

/***/ }),

/***/ 86682:
/*!************************************************!*\
  !*** ./node_modules/tesseract.js/src/index.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _objectSpread = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/objectSpread2 */ 84539).default;

/**
 *
 * Entry point for tesseract.js, should be the entry when bundling.
 *
 * @fileoverview entry point for tesseract.js
 * @author Kevin Kwok <antimatter15@gmail.com>
 * @author Guillermo Webster <gui@mit.edu>
 * @author Jerome Wu <jeromewus@gmail.com>
 */
__webpack_require__(/*! regenerator-runtime/runtime */ 67941);

var createScheduler = __webpack_require__(/*! ./createScheduler */ 65310);

var createWorker = __webpack_require__(/*! ./createWorker */ 75766);

var Tesseract = __webpack_require__(/*! ./Tesseract */ 2141);

var OEM = __webpack_require__(/*! ./constants/OEM */ 19927);

var PSM = __webpack_require__(/*! ./constants/PSM */ 9213);

var _require = __webpack_require__(/*! ./utils/log */ 30066),
    setLogging = _require.setLogging;

module.exports = _objectSpread({
  OEM: OEM,
  PSM: PSM,
  createScheduler: createScheduler,
  createWorker: createWorker,
  setLogging: setLogging
}, Tesseract);

/***/ }),

/***/ 39136:
/*!************************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/circularize.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _objectSpread = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/objectSpread2 */ 84539).default;

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
module.exports = function (page) {
  var blocks = [];
  var paragraphs = [];
  var lines = [];
  var words = [];
  var symbols = [];
  page.blocks.forEach(function (block) {
    block.paragraphs.forEach(function (paragraph) {
      paragraph.lines.forEach(function (line) {
        line.words.forEach(function (word) {
          word.symbols.forEach(function (sym) {
            symbols.push(_objectSpread(_objectSpread({}, sym), {}, {
              page: page,
              block: block,
              paragraph: paragraph,
              line: line,
              word: word
            }));
          });
          words.push(_objectSpread(_objectSpread({}, word), {}, {
            page: page,
            block: block,
            paragraph: paragraph,
            line: line
          }));
        });
        lines.push(_objectSpread(_objectSpread({}, line), {}, {
          page: page,
          block: block,
          paragraph: paragraph
        }));
      });
      paragraphs.push(_objectSpread(_objectSpread({}, paragraph), {}, {
        page: page,
        block: block
      }));
    });
    blocks.push(_objectSpread(_objectSpread({}, block), {}, {
      page: page
    }));
  });
  return _objectSpread(_objectSpread({}, page), {}, {
    blocks: blocks,
    paragraphs: paragraphs,
    lines: lines,
    words: words,
    symbols: symbols
  });
};

/***/ }),

/***/ 80967:
/*!***************************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/getEnvironment.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isElectron = __webpack_require__(/*! is-electron */ 11497);

module.exports = function (key) {
  var env = {};

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

/***/ 81306:
/*!******************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/getId.js ***!
  \******************************************************/
/***/ (function(module) {

module.exports = function (prefix, cnt) {
  return "".concat(prefix, "-").concat(cnt, "-").concat(Math.random().toString(16).slice(3, 8));
};

/***/ }),

/***/ 30066:
/*!****************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/log.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports) {

var _this = this;

var logging = false;
exports.logging = logging;

exports.setLogging = function (_logging) {
  logging = _logging;
};

exports.log = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return logging ? console.log.apply(_this, args) : null;
};

/***/ }),

/***/ 50318:
/*!*************************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/resolvePaths.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _objectSpread = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/objectSpread2 */ 84539).default;

var isBrowser = __webpack_require__(/*! ./getEnvironment */ 80967)('type') === 'browser';
var resolveURL = isBrowser ? __webpack_require__(/*! resolve-url */ 89811) : function (s) {
  return s;
}; // eslint-disable-line

module.exports = function (options) {
  var opts = _objectSpread({}, options);

  ['corePath', 'workerPath', 'langPath'].forEach(function (key) {
    if (typeof options[key] !== 'undefined') {
      opts[key] = resolveURL(opts[key]);
    }
  });
  return opts;
};

/***/ }),

/***/ 75734:
/*!************************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/defaultOptions.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _objectSpread = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/objectSpread2 */ 84539).default;

var resolveURL = __webpack_require__(/*! resolve-url */ 89811);

var _require = __webpack_require__(/*! ../../../package.json */ 22413),
    version = _require.version,
    dependencies = _require.dependencies;

var defaultOptions = __webpack_require__(/*! ../../constants/defaultOptions */ 5457);
/*
 * Default options for browser worker
 */


module.exports = _objectSpread(_objectSpread({}, defaultOptions), {}, {
  workerPath: typeof process !== 'undefined' && process.env.TESS_ENV === 'development' ? resolveURL("/dist/worker.dev.js?nocache=".concat(Math.random().toString(36).slice(3))) : "https://unpkg.com/tesseract.js@v".concat(version, "/dist/worker.min.js"),

  /*
   * If browser doesn't support WebAssembly,
   * load ASM version instead
   */
  corePath: "https://unpkg.com/tesseract.js-core@v".concat(dependencies['tesseract.js-core'].substring(1), "/tesseract-core.").concat(typeof WebAssembly === 'object' ? 'wasm' : 'asm', ".js")
});

/***/ }),

/***/ 20638:
/*!***************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/index.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 *
 * Tesseract Worker adapter for browser
 *
 * @fileoverview Tesseract Worker adapter for browser
 * @author Kevin Kwok <antimatter15@gmail.com>
 * @author Guillermo Webster <gui@mit.edu>
 * @author Jerome Wu <jeromewus@gmail.com>
 */
var defaultOptions = __webpack_require__(/*! ./defaultOptions */ 75734);

var spawnWorker = __webpack_require__(/*! ./spawnWorker */ 99038);

var terminateWorker = __webpack_require__(/*! ./terminateWorker */ 77273);

var onMessage = __webpack_require__(/*! ./onMessage */ 40093);

var send = __webpack_require__(/*! ./send */ 78072);

var loadImage = __webpack_require__(/*! ./loadImage */ 76922);

module.exports = {
  defaultOptions: defaultOptions,
  spawnWorker: spawnWorker,
  terminateWorker: terminateWorker,
  onMessage: onMessage,
  send: send,
  loadImage: loadImage
};

/***/ }),

/***/ 76922:
/*!*******************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/loadImage.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 88774);

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator */ 91052).default;

var resolveURL = __webpack_require__(/*! resolve-url */ 89811);
/**
 * readFromBlobOrFile
 *
 * @name readFromBlobOrFile
 * @function
 * @access private
 */


var readFromBlobOrFile = function readFromBlobOrFile(blob) {
  return new Promise(function (resolve, reject) {
    var fileReader = new FileReader();

    fileReader.onload = function () {
      resolve(fileReader.result);
    };

    fileReader.onerror = function (_ref) {
      var code = _ref.target.error.code;
      reject(Error("File could not be read! Code=".concat(code)));
    };

    fileReader.readAsArrayBuffer(blob);
  });
};
/**
 * loadImage
 *
 * @name loadImage
 * @function load image from different source
 * @access private
 */


var loadImage = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(image) {
    var data, resp;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            data = image;

            if (!(typeof image === 'undefined')) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", 'undefined');

          case 3:
            if (!(typeof image === 'string')) {
              _context2.next = 16;
              break;
            }

            if (!/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(image)) {
              _context2.next = 8;
              break;
            }

            data = atob(image.split(',')[1]).split('').map(function (c) {
              return c.charCodeAt(0);
            });
            _context2.next = 14;
            break;

          case 8:
            _context2.next = 10;
            return fetch(resolveURL(image));

          case 10:
            resp = _context2.sent;
            _context2.next = 13;
            return resp.arrayBuffer();

          case 13:
            data = _context2.sent;

          case 14:
            _context2.next = 34;
            break;

          case 16:
            if (!(image instanceof HTMLElement)) {
              _context2.next = 30;
              break;
            }

            if (!(image.tagName === 'IMG')) {
              _context2.next = 21;
              break;
            }

            _context2.next = 20;
            return loadImage(image.src);

          case 20:
            data = _context2.sent;

          case 21:
            if (!(image.tagName === 'VIDEO')) {
              _context2.next = 25;
              break;
            }

            _context2.next = 24;
            return loadImage(image.poster);

          case 24:
            data = _context2.sent;

          case 25:
            if (!(image.tagName === 'CANVAS')) {
              _context2.next = 28;
              break;
            }

            _context2.next = 28;
            return new Promise(function (resolve) {
              image.toBlob( /*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(blob) {
                  return _regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return readFromBlobOrFile(blob);

                        case 2:
                          data = _context.sent;
                          resolve();

                        case 4:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x2) {
                  return _ref3.apply(this, arguments);
                };
              }());
            });

          case 28:
            _context2.next = 34;
            break;

          case 30:
            if (!(image instanceof File || image instanceof Blob)) {
              _context2.next = 34;
              break;
            }

            _context2.next = 33;
            return readFromBlobOrFile(image);

          case 33:
            data = _context2.sent;

          case 34:
            return _context2.abrupt("return", new Uint8Array(data));

          case 35:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function loadImage(_x) {
    return _ref2.apply(this, arguments);
  };
}();

module.exports = loadImage;

/***/ }),

/***/ 40093:
/*!*******************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/onMessage.js ***!
  \*******************************************************************/
/***/ (function(module) {

module.exports = function (worker, handler) {
  worker.onmessage = function (_ref) {
    var data = _ref.data;
    // eslint-disable-line
    handler(data);
  };
};

/***/ }),

/***/ 78072:
/*!**************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/send.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 88774);

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator */ 91052).default;

/**
 * send
 *
 * @name send
 * @function send packet to worker and create a job
 * @access public
 */
module.exports = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(worker, packet) {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            worker.postMessage(packet);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ 99038:
/*!*********************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/spawnWorker.js ***!
  \*********************************************************************/
/***/ (function(module) {

/**
 * spawnWorker
 *
 * @name spawnWorker
 * @function create a new Worker in browser
 * @access public
 */
module.exports = function (_ref) {
  var workerPath = _ref.workerPath,
      workerBlobURL = _ref.workerBlobURL;
  var worker;

  if (Blob && URL && workerBlobURL) {
    var blob = new Blob(["importScripts(\"".concat(workerPath, "\");")], {
      type: 'application/javascript'
    });
    worker = new Worker(URL.createObjectURL(blob));
  } else {
    worker = new Worker(workerPath);
  }

  return worker;
};

/***/ }),

/***/ 77273:
/*!*************************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/terminateWorker.js ***!
  \*************************************************************************/
/***/ (function(module) {

/**
 * terminateWorker
 *
 * @name terminateWorker
 * @function terminate worker
 * @access public
 */
module.exports = function (worker) {
  worker.terminate();
};

/***/ }),

/***/ 6248:
/*!************************************************!*\
  !*** ./src/app/capcheck/capcheck.component.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapCheckComponent": function() { return /* binding */ CapCheckComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-webcam */ 74187);
/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tesseract.js */ 86682);
/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tesseract_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _models_common_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/common.model */ 72241);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common.service */ 5620);
/* harmony import */ var _services_mark6_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/mark6.service */ 36263);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _models_DataVal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/DataVal */ 82845);
/* harmony import */ var ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-page-scroll-core */ 26903);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-image-cropper */ 55819);
/* harmony import */ var ngx_textarea_autosize__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-textarea-autosize */ 17964);
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
















var _c0 = ["fileButtonClick"];
var _c1 = ["inputNums"];
function CapCheckComponent_ion_list_26_ion_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-row", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-col", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "textarea", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var num_r6 = ctx.$implicit;
    var i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "num", i_r7, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](num_r6);
} }
function CapCheckComponent_ion_list_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CapCheckComponent_ion_list_26_ion_item_1_Template, 6, 2, "ion-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.resultList);
} }
function CapCheckComponent_ion_text_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-text", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " \u5171 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " \u6CE8\u0013 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.resultList.length);
} }
function CapCheckComponent_ion_text_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-text", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " \u82E5\u6709\u865F\u78BC\u8FA8\u8B58\u6709\u8AA4\uFF0C\u8ACB\u81EA\u884C\u4FEE\u6B63\uFF01 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
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
        this.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
        this.nextWebcam = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.imageChangedEvent = '';
        this.croppedImage = '';
    }
    CapCheckComponent.prototype.ngOnInit = function () {
        var _this = this;
        ngx_webcam__WEBPACK_IMPORTED_MODULE_7__.WebcamUtil.getAvailableVideoInputs()
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
                        worker = (0,tesseract_js__WEBPACK_IMPORTED_MODULE_0__.createWorker)({
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
                                            if (theBNumber > _this.MAX_NUM || theBNumber <= 0 || !(0,_models_common_model__WEBPACK_IMPORTED_MODULE_1__.isNumberVal)(bankerList[bNo])) {
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
                                        if ((0,_models_common_model__WEBPACK_IMPORTED_MODULE_1__.hasDuplicates)(selectedNumber)) {
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
                                        var iCheckResult = new _models_common_model__WEBPACK_IMPORTED_MODULE_1__.M6CheckResult();
                                        iCheckResult.numbers = theNum;
                                        var matchedResults = new Array();
                                        for (var _i = 0, result30_1 = result30; _i < result30_1.length; _i++) {
                                            var tmpResult30 = result30_1[_i];
                                            var iResult = new _models_common_model__WEBPACK_IMPORTED_MODULE_1__.MarkSixResult();
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
    CapCheckComponent.ɵfac = function CapCheckComponent_Factory(t) { return new (t || CapCheckComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_mark6_service__WEBPACK_IMPORTED_MODULE_3__.Mark6Service), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_models_DataVal__WEBPACK_IMPORTED_MODULE_4__.DataVal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_10__.PageScrollService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ActionSheetController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT)); };
    CapCheckComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CapCheckComponent, selectors: [["app-capcheck"]], viewQuery: function CapCheckComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.fileButton = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.inputNums = _t);
        } }, decls: 30, vars: 8, consts: [["slot", "start"], ["slot", "end", 1, "ion-padding"], [3, "click"], ["name", "chevron-down-circle-outline"], [1, "ion-padding"], ["id", "contentID", 2, "text-align", "center"], ["for", "m6pic", 2, "color", "blue"], [2, "color", "green"], ["id", "fileButtonClick", "color", "warning", 2, "display", "none", 3, "click"], ["fileButtonClick", ""], ["type", "file", 2, "display", "none", 3, "change"], ["fileInput", ""], [1, "cropper-container"], ["format", "png", 2, "width", "300px", "height", "50x", "text-align", "left", 3, "imageChangedEvent", "maintainAspectRatio", "cropperMinHeight", "canvasRotation", "imageCropped", "imageLoaded", "cropperReady", "loadImageFailed"], [3, "src"], [4, "ngIf"], ["color", "primary", 4, "ngIf"], ["color", "danger", 4, "ngIf"], [1, "theEnd"], [4, "ngFor", "ngForOf"], [2, "vertical-align", "middle", "text-align", "center", "width", "100%"], [2, "width", "100%"], ["autosize", "", 2, "width", "100%", "background-color", "navajowhite", 3, "id"], ["inputNums", ""], ["color", "primary"], ["color", "danger"]], template: function CapCheckComponent_Template(rf, ctx) { if (rf & 1) {
            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-buttons", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-menu-button");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CapCheckComponent_Template_ion_button_click_5_listener() { return ctx.openActionSheet(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " \u4E00\u62CD\u5373\u5C0D ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-content", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "label", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "1.[\u9078\u53D6/\u62CD\u7167\u5F69\u7968]\uFF0C2.\u526A\u88C1\u5230\u53EA\u6709\u865F\u78BC\u90E8\u4EFD\uFF0C3.[\u8FA8\u8B58\u865F\u78BC]\uFF0C4.[\u6838\u5C0D\u5F69\u7968]\uFF01");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "(\u66AB\u4E0D\u652F\u6301\u6838\u5C0D\u81BD\u62D6\u5F69\u7968)");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "ion-button", 8, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CapCheckComponent_Template_ion_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](21); return _r1.click(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "\u6309\u9019\u88CF\u9078\u53D6\u4F60\u7684\u5F69\u7968");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "input", 10, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CapCheckComponent_Template_input_change_20_listener($event) { return ctx.fileChangeEvent($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "image-cropper", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("imageCropped", function CapCheckComponent_Template_image_cropper_imageCropped_23_listener($event) { return ctx.imageCropped($event); })("imageLoaded", function CapCheckComponent_Template_image_cropper_imageLoaded_23_listener() { return ctx.imageLoaded(); })("cropperReady", function CapCheckComponent_Template_image_cropper_cropperReady_23_listener() { return ctx.cropperReady(); })("loadImageFailed", function CapCheckComponent_Template_image_cropper_loadImageFailed_23_listener() { return ctx.loadImageFailed(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "img", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, CapCheckComponent_ion_list_26_Template, 2, 1, "ion-list", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, CapCheckComponent_ion_text_27_Template, 5, 1, "ion-text", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, CapCheckComponent_ion_text_28_Template, 2, 0, "ion-text", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("imageChangedEvent", ctx.imageChangedEvent)("maintainAspectRatio", false)("cropperMinHeight", 30)("canvasRotation", ctx.rotateVal);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx.croppedImage, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.resultList.length !== 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.resultList.length !== 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.resultList.length !== 0);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent, ngx_image_cropper__WEBPACK_IMPORTED_MODULE_12__.ImageCropperComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonList, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonCol, ngx_textarea_autosize__WEBPACK_IMPORTED_MODULE_13__["ɵa"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonText], styles: [".cropper-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  width: 100%;\n}\n\nimage-cropper[_ngcontent-%COMP%] {\n  max-height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcGNoZWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJjYXBjaGVjay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcm9wcGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuICBcbmltYWdlLWNyb3BwZXIge1xuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xufVxuICBcblxuLnRoZUVuZCB7XG5cbn0iXX0= */"] });
    return CapCheckComponent;
}());



/***/ }),

/***/ 71053:
/*!*********************************************!*\
  !*** ./src/app/capcheck/capcheck.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapCheckComponentModule": function() { return /* binding */ CapCheckComponentModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _capcheck_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capcheck.component */ 6248);
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-webcam */ 74187);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-image-cropper */ 55819);
/* harmony import */ var ngx_textarea_autosize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-textarea-autosize */ 17964);
/* harmony import */ var _capcheckresult_capcheckresult_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./capcheckresult/capcheckresult.component */ 45179);
/* harmony import */ var _capchecklist_capchecklist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./capchecklist/capchecklist.component */ 64191);
/* harmony import */ var ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-page-scroll-core */ 26903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);













var CapCheckComponentModule = /** @class */ (function () {
    function CapCheckComponentModule() {
    }
    CapCheckComponentModule.ɵfac = function CapCheckComponentModule_Factory(t) { return new (t || CapCheckComponentModule)(); };
    CapCheckComponentModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CapCheckComponentModule });
    CapCheckComponentModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
                ngx_webcam__WEBPACK_IMPORTED_MODULE_7__.WebcamModule,
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_8__.ImageCropperModule,
                ngx_textarea_autosize__WEBPACK_IMPORTED_MODULE_9__.TextareaAutosizeModule,
                ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_10__.NgxPageScrollCoreModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild([
                    {
                        path: '',
                        component: _capcheck_component__WEBPACK_IMPORTED_MODULE_0__.CapCheckComponent
                    },
                    {
                        path: 'result',
                        component: _capcheckresult_capcheckresult_component__WEBPACK_IMPORTED_MODULE_1__.CapCheckResultComponent
                    },
                    {
                        path: 'list',
                        component: _capchecklist_capchecklist_component__WEBPACK_IMPORTED_MODULE_2__.CapcheckListComponent
                    }
                ])
            ]] });
    return CapCheckComponentModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CapCheckComponentModule, { declarations: [_capcheck_component__WEBPACK_IMPORTED_MODULE_0__.CapCheckComponent, _capcheckresult_capcheckresult_component__WEBPACK_IMPORTED_MODULE_1__.CapCheckResultComponent, _capchecklist_capchecklist_component__WEBPACK_IMPORTED_MODULE_2__.CapcheckListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        ngx_webcam__WEBPACK_IMPORTED_MODULE_7__.WebcamModule,
        ngx_image_cropper__WEBPACK_IMPORTED_MODULE_8__.ImageCropperModule,
        ngx_textarea_autosize__WEBPACK_IMPORTED_MODULE_9__.TextareaAutosizeModule,
        ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_10__.NgxPageScrollCoreModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] }); })();


/***/ }),

/***/ 64191:
/*!*****************************************************************!*\
  !*** ./src/app/capcheck/capchecklist/capchecklist.component.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapcheckListComponent": function() { return /* binding */ CapcheckListComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_models_DataVal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/DataVal */ 82845);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common.service */ 5620);
/* harmony import */ var src_app_services_mark6_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/mark6.service */ 36263);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
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







function CapcheckListComponent_ion_item_12_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    var m6result_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "./assets/images/no_", m6result_r1.number1, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function CapcheckListComponent_ion_item_12_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    var m6result_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "./assets/images/no_", m6result_r1.number1, "x.png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function CapcheckListComponent_ion_item_12_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    var m6result_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "./assets/images/no_", m6result_r1.number2, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function CapcheckListComponent_ion_item_12_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    var m6result_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "./assets/images/no_", m6result_r1.number2, "x.png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function CapcheckListComponent_ion_item_12_img_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    var m6result_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "./assets/images/no_", m6result_r1.number3, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function CapcheckListComponent_ion_item_12_img_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    var m6result_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "./assets/images/no_", m6result_r1.number3, "x.png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function CapcheckListComponent_ion_item_12_img_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    var m6result_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "./assets/images/no_", m6result_r1.number4, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function CapcheckListComponent_ion_item_12_img_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    var m6result_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "./assets/images/no_", m6result_r1.number4, "x.png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function CapcheckListComponent_ion_item_12_img_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    var m6result_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "./assets/images/no_", m6result_r1.number5, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function CapcheckListComponent_ion_item_12_img_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    var m6result_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "./assets/images/no_", m6result_r1.number5, "x.png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function CapcheckListComponent_ion_item_12_img_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    var m6result_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "./assets/images/no_", m6result_r1.number6, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function CapcheckListComponent_ion_item_12_img_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    var m6result_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "./assets/images/no_", m6result_r1.number6, "x.png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function CapcheckListComponent_ion_item_12_img_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    var m6result_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "./assets/images/no_", m6result_r1.numberX, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function CapcheckListComponent_ion_item_12_img_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    var m6result_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "./assets/images/no_", m6result_r1.numberX, "x.png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function CapcheckListComponent_ion_item_12_Template(rf, ctx) { if (rf & 1) {
    var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CapcheckListComponent_ion_item_12_Template_ion_item_click_0_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33); var m6result_r1 = restoredCtx.$implicit; var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r32.showDetail(m6result_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-row", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CapcheckListComponent_ion_item_12_img_4_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CapcheckListComponent_ion_item_12_img_5_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CapcheckListComponent_ion_item_12_img_7_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, CapcheckListComponent_ion_item_12_img_8_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, CapcheckListComponent_ion_item_12_img_10_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, CapcheckListComponent_ion_item_12_img_11_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, CapcheckListComponent_ion_item_12_img_13_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, CapcheckListComponent_ion_item_12_img_14_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, CapcheckListComponent_ion_item_12_img_16_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, CapcheckListComponent_ion_item_12_img_17_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, CapcheckListComponent_ion_item_12_img_19_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, CapcheckListComponent_ion_item_12_img_20_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "ion-col", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " + ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, CapcheckListComponent_ion_item_12_img_24_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, CapcheckListComponent_ion_item_12_img_25_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "ion-col", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "ion-col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var m6result_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", m6result_r1.matched[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !m6result_r1.matched[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", m6result_r1.matched[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !m6result_r1.matched[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", m6result_r1.matched[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !m6result_r1.matched[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", m6result_r1.matched[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !m6result_r1.matched[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", m6result_r1.matched[4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !m6result_r1.matched[4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", m6result_r1.matched[5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !m6result_r1.matched[5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", m6result_r1.matched[6]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !m6result_r1.matched[6]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](m6result_r1.drawNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.toDate(m6result_r1.drawDate));
} }
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
    CapcheckListComponent.ɵfac = function CapcheckListComponent_Factory(t) { return new (t || CapcheckListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_models_DataVal__WEBPACK_IMPORTED_MODULE_0__.DataVal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_mark6_service__WEBPACK_IMPORTED_MODULE_2__.Mark6Service), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController)); };
    CapcheckListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CapcheckListComponent, selectors: [["app-capchecklist"]], decls: 13, vars: 2, consts: [["slot", "start"], [3, "text"], [2, "vertical-align", "middle", "text-align", "center", "background-color", "burlywood"], [1, "wrap"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [2, "vertical-align", "middle", "text-align", "center"], ["class", "ball", 3, "src", 4, "ngIf"], [2, "margin-top", "5px"], ["size", "4"], ["size", "8"], [1, "ball", 3, "src"]], template: function CapcheckListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-buttons", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-back-button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " \u6700\u8FD130\u671F\u4E2D\u734E\u7D50\u679C ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-row", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-col");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ion-label", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ion-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, CapcheckListComponent_ion_item_12_Template, 33, 16, "ion-item", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.m6results.numbers);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.m6results.matchedResults);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButtonDelegate, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonList, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonGrid, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXBjaGVja2xpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
    return CapcheckListComponent;
}());



/***/ }),

/***/ 45179:
/*!*********************************************************************!*\
  !*** ./src/app/capcheck/capcheckresult/capcheckresult.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapCheckResultComponent": function() { return /* binding */ CapCheckResultComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_models_DataVal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/DataVal */ 82845);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common.service */ 5620);
/* harmony import */ var src_app_services_mark6_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/mark6.service */ 36263);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);







function CapCheckResultComponent_ion_item_8_ion_icon_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-icon", 10);
} }
function CapCheckResultComponent_ion_item_8_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CapCheckResultComponent_ion_item_8_Template_ion_item_click_0_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); var m6result_r1 = restoredCtx.$implicit; var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.showDetail(m6result_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-row", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-row", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-col", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-col", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, CapCheckResultComponent_ion_item_8_ion_icon_11_Template, 1, 0, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var m6result_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](m6result_r1.numbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u4E2D\u734E\u671F\u6578\uFF1A ", m6result_r1.matchedResults.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", m6result_r1.matchedResults.length !== 0);
} }
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
    CapCheckResultComponent.ɵfac = function CapCheckResultComponent_Factory(t) { return new (t || CapCheckResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_models_DataVal__WEBPACK_IMPORTED_MODULE_0__.DataVal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_mark6_service__WEBPACK_IMPORTED_MODULE_2__.Mark6Service), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController)); };
    CapCheckResultComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CapCheckResultComponent, selectors: [["app-capcheckresult"]], decls: 9, vars: 1, consts: [["slot", "start"], [3, "text"], ["detail-push", "", 3, "click", 4, "ngFor", "ngForOf"], ["detail-push", "", 3, "click"], [2, "vertical-align", "middle", "text-align", "left", "background-color", "burlywood"], [1, "wrap"], [2, "background-color", "lightcoral", "vertical-align", "middle"], [2, "vertical-align", "middle"], [2, "text-align", "right", "vertical-align", "middle"], ["name", "arrow-dropright", 4, "ngIf"], ["name", "arrow-dropright"]], template: function CapCheckResultComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-buttons", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-back-button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " \u6700\u8FD130\u671F\u4E2D\u734E\u6458\u8981 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, CapCheckResultComponent_ion_item_8_Template, 12, 3, "ion-item", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.results);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButtonDelegate, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonList, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon], styles: [".wrap[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  \n  white-space: -moz-pre-wrap;\n  \n  white-space: -pre-wrap;\n  \n  white-space: -o-pre-wrap;\n  \n  word-wrap: break-word;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcGNoZWNrcmVzdWx0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFBNEIsU0FBQTtFQUM1QiwwQkFBQTtFQUE0QixZQUFBO0VBQzVCLHNCQUFBO0VBQTRCLGFBQUE7RUFDNUIsd0JBQUE7RUFBNEIsWUFBQTtFQUM1QixxQkFBQTtFQUE0QixPQUFBO0FBTWhDIiwiZmlsZSI6ImNhcGNoZWNrcmVzdWx0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXAgeyBcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7ICAgICAgLyogQ1NTMyAqLyAgIFxuICAgIHdoaXRlLXNwYWNlOiAtbW96LXByZS13cmFwOyAvKiBGaXJlZm94ICovICAgIFxuICAgIHdoaXRlLXNwYWNlOiAtcHJlLXdyYXA7ICAgICAvKiBPcGVyYSA8NyAqLyAgIFxuICAgIHdoaXRlLXNwYWNlOiAtby1wcmUtd3JhcDsgICAvKiBPcGVyYSA3ICovICAgIFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDsgICAgICAvKiBJRSAqL1xuIH1cbiAiXX0= */"] });
    return CapCheckResultComponent;
}());



/***/ }),

/***/ 80795:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/***/ (function(module) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 64141:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 80795);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 91052:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/***/ (function(module) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 53837:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ (function(module) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 45351:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/***/ (function(module) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 87265:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/***/ (function(module) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 84539:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread2.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty.js */ 53837);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

module.exports = _objectSpread2;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 48764:
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ 7113);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 7113:
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/***/ (function(module) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 59545:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ 64141);

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ 45351);

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 34466);

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ 87265);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 34466:
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 80795);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 95833:
/*!*************!*\
  !*** tslib ***!
  \*************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": function() { return /* binding */ __extends; },
/* harmony export */   "__assign": function() { return /* binding */ __assign; },
/* harmony export */   "__rest": function() { return /* binding */ __rest; },
/* harmony export */   "__decorate": function() { return /* binding */ __decorate; },
/* harmony export */   "__param": function() { return /* binding */ __param; },
/* harmony export */   "__metadata": function() { return /* binding */ __metadata; },
/* harmony export */   "__awaiter": function() { return /* binding */ __awaiter; },
/* harmony export */   "__generator": function() { return /* binding */ __generator; },
/* harmony export */   "__createBinding": function() { return /* binding */ __createBinding; },
/* harmony export */   "__exportStar": function() { return /* binding */ __exportStar; },
/* harmony export */   "__values": function() { return /* binding */ __values; },
/* harmony export */   "__read": function() { return /* binding */ __read; },
/* harmony export */   "__spread": function() { return /* binding */ __spread; },
/* harmony export */   "__spreadArrays": function() { return /* binding */ __spreadArrays; },
/* harmony export */   "__await": function() { return /* binding */ __await; },
/* harmony export */   "__asyncGenerator": function() { return /* binding */ __asyncGenerator; },
/* harmony export */   "__asyncDelegator": function() { return /* binding */ __asyncDelegator; },
/* harmony export */   "__asyncValues": function() { return /* binding */ __asyncValues; },
/* harmony export */   "__makeTemplateObject": function() { return /* binding */ __makeTemplateObject; },
/* harmony export */   "__importStar": function() { return /* binding */ __importStar; },
/* harmony export */   "__importDefault": function() { return /* binding */ __importDefault; },
/* harmony export */   "__classPrivateFieldGet": function() { return /* binding */ __classPrivateFieldGet; },
/* harmony export */   "__classPrivateFieldSet": function() { return /* binding */ __classPrivateFieldSet; }
/* harmony export */ });
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

/***/ 37232:
/*!*************!*\
  !*** tslib ***!
  \*************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": function() { return /* binding */ __extends; },
/* harmony export */   "__assign": function() { return /* binding */ __assign; },
/* harmony export */   "__rest": function() { return /* binding */ __rest; },
/* harmony export */   "__decorate": function() { return /* binding */ __decorate; },
/* harmony export */   "__param": function() { return /* binding */ __param; },
/* harmony export */   "__metadata": function() { return /* binding */ __metadata; },
/* harmony export */   "__awaiter": function() { return /* binding */ __awaiter; },
/* harmony export */   "__generator": function() { return /* binding */ __generator; },
/* harmony export */   "__createBinding": function() { return /* binding */ __createBinding; },
/* harmony export */   "__exportStar": function() { return /* binding */ __exportStar; },
/* harmony export */   "__values": function() { return /* binding */ __values; },
/* harmony export */   "__read": function() { return /* binding */ __read; },
/* harmony export */   "__spread": function() { return /* binding */ __spread; },
/* harmony export */   "__spreadArrays": function() { return /* binding */ __spreadArrays; },
/* harmony export */   "__await": function() { return /* binding */ __await; },
/* harmony export */   "__asyncGenerator": function() { return /* binding */ __asyncGenerator; },
/* harmony export */   "__asyncDelegator": function() { return /* binding */ __asyncDelegator; },
/* harmony export */   "__asyncValues": function() { return /* binding */ __asyncValues; },
/* harmony export */   "__makeTemplateObject": function() { return /* binding */ __makeTemplateObject; },
/* harmony export */   "__importStar": function() { return /* binding */ __importStar; },
/* harmony export */   "__importDefault": function() { return /* binding */ __importDefault; },
/* harmony export */   "__classPrivateFieldGet": function() { return /* binding */ __classPrivateFieldGet; },
/* harmony export */   "__classPrivateFieldSet": function() { return /* binding */ __classPrivateFieldSet; }
/* harmony export */ });
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

/***/ 22413:
/*!************************************************!*\
  !*** ./node_modules/tesseract.js/package.json ***!
  \************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"name":"tesseract.js","version":"2.0.2","description":"Pure Javascript Multilingual OCR","main":"src/index.js","types":"src/index.d.ts","unpkg":"dist/tesseract.min.js","jsdelivr":"dist/tesseract.min.js","scripts":{"start":"node scripts/server.js","build":"rimraf dist && webpack --config scripts/webpack.config.prod.js","profile:tesseract":"webpack-bundle-analyzer dist/tesseract-stats.json","profile:worker":"webpack-bundle-analyzer dist/worker-stats.json","prepublishOnly":"npm run build","wait":"rimraf dist && wait-on http://localhost:3000/dist/tesseract.dev.js","test":"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:* test:node:all","test:node":"nyc mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser-tpl":"mocha-headless-chrome -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:detect":"npm run test:browser-tpl -- -f ./tests/detect.test.html","test:browser:recognize":"npm run test:browser-tpl -- -f ./tests/recognize.test.html","test:browser:scheduler":"npm run test:browser-tpl -- -f ./tests/scheduler.test.html","lint":"eslint src","postinstall":"opencollective-postinstall || true"},"browser":{"./src/worker/node/index.js":"./src/worker/browser/index.js"},"author":"","contributors":["jeromewu"],"license":"Apache-2.0","devDependencies":{"@babel/core":"^7.7.7","@babel/preset-env":"^7.7.7","acorn":"^6.4.0","babel-loader":"^8.0.6","cors":"^2.8.5","eslint":"^5.16.0","eslint-config-airbnb":"^17.1.1","eslint-plugin-import":"^2.19.1","eslint-plugin-jsx-a11y":"^6.2.3","eslint-plugin-react":"^7.17.0","expect.js":"^0.3.1","express":"^4.17.1","mocha":"^5.2.0","mocha-headless-chrome":"^2.0.3","npm-run-all":"^4.1.5","nyc":"^13.3.0","rimraf":"^2.7.1","wait-on":"^3.3.0","webpack":"^4.41.4","webpack-bundle-analyzer":"^3.6.0","webpack-cli":"^3.3.10","webpack-dev-middleware":"^3.7.2"},"dependencies":{"bmp-js":"^0.1.0","file-type":"^12.4.1","idb-keyval":"^3.2.0","is-electron":"^2.2.0","is-url":"^1.2.4","node-fetch":"^2.6.0","opencollective-postinstall":"^2.0.2","regenerator-runtime":"^0.13.3","resolve-url":"^0.2.1","tesseract.js-core":"^2.0.0","zlibjs":"^0.3.1"},"repository":{"type":"git","url":"https://github.com/naptha/tesseract.js.git"},"bugs":{"url":"https://github.com/naptha/tesseract.js/issues"},"homepage":"https://github.com/naptha/tesseract.js","collective":{"type":"opencollective","url":"https://opencollective.com/tesseractjs"}}');

/***/ })

}]);
//# sourceMappingURL=src_app_capcheck_capcheck_module_ts.js.map