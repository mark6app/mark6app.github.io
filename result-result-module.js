(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["result-result-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/result/result.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/result/result.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\" (click)=\"shareToFacebook()\" class=\"ion-padding\">\n        <ion-img src=\"./assets/icon/facebook.png\" width=\"16\" height=\"16\"></ion-img>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\" (click)=\"doRefresh()\" class=\"ion-padding\">\n      <ion-icon name=\"refresh\"></ion-icon>\n    </ion-buttons>\n\n    <ion-title>\n      最新結果\n    </ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\"> \n  <span *ngIf=\"loaded\">日期 &nbsp;&nbsp; {{toDate(m6result.drawDate)}}</span>&nbsp;&nbsp; &nbsp;<span *ngIf=\"loaded\" style=\"color: green\">{{m6result.drawNo}}</span>\n\n\n  <ion-grid>\n      <ion-row style=\"vertical-align: middle; text-align: center;\">\n          <ion-col>\n              <img src=\"./assets/images/no_{{m6result.number1}}.png\" class=\"ball\" *ngIf=\"loaded\"/>\n              <img src=\"./assets/images/redno.png\" class=\"ball\" *ngIf=\"!loaded\"/>\n          </ion-col>\n          <ion-col>\n              <img src=\"./assets/images/no_{{m6result.number2}}.png\" class=\"ball\" *ngIf=\"loaded\"/>\n              <img src=\"./assets/images/redno.png\" class=\"ball\" *ngIf=\"!loaded\"/>\n          </ion-col>\n          <ion-col>\n              <img src=\"./assets/images/no_{{m6result.number3}}.png\" class=\"ball\" *ngIf=\"loaded\"/>\n              <img src=\"./assets/images/redno.png\" class=\"ball\" *ngIf=\"!loaded\"/>\n          </ion-col>\n          <ion-col>\n              <img src=\"./assets/images/no_{{m6result.number4}}.png\" class=\"ball\" *ngIf=\"loaded\"/>\n              <img src=\"./assets/images/redno.png\" class=\"ball\" *ngIf=\"!loaded\"/>\n          </ion-col>\n          <ion-col>\n              <img src=\"./assets/images/no_{{m6result.number5}}.png\" class=\"ball\" *ngIf=\"loaded\"/>\n              <img src=\"./assets/images/redno.png\" class=\"ball\" *ngIf=\"!loaded\"/>\n          </ion-col>\n          <ion-col>\n              <img src=\"./assets/images/no_{{m6result.number6}}.png\" class=\"ball\" *ngIf=\"loaded\"/>\n              <img src=\"./assets/images/redno.png\" class=\"ball\" *ngIf=\"!loaded\"/>\n          </ion-col>\n          <ion-col style=\"margin-top: 5px\">\n              +\n          </ion-col>\n          <ion-col>\n              <img src=\"./assets/images/no_{{m6result.numberX}}.png\" class=\"ball\" *ngIf=\"loaded\"/>\n              <img src=\"./assets/images/redno.png\" class=\"ball\" *ngIf=\"!loaded\"/>\n          </ion-col>\n      </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n      <ion-row style=\"vertical-align: middle;\">\n          <ion-col>\n              &nbsp;\n          </ion-col>\n          <ion-col size=\"5\">\n              中獎注數\n          </ion-col>\n          <ion-col size=\"5\">\n              獎金\n          </ion-col>\n      </ion-row>\n\n      <ion-row style=\"vertical-align: middle;\">\n        <ion-col>\n            頭獎\n        </ion-col>\n        <ion-col size=\"5\">\n            <span *ngIf=\"loaded\">{{m6result.prize1Qty}}</span>\n            <span *ngIf=\"!loaded\">-</span>\n        </ion-col>\n        <ion-col size=\"5\">\n            <span *ngIf=\"loaded\">{{m6result.prize1Amount}}</span>\n            <span *ngIf=\"!loaded\">-</span>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"vertical-align: middle;\">\n          <ion-col>\n            二獎\n          </ion-col>\n          <ion-col size=\"5\">\n            <span *ngIf=\"loaded\">{{m6result.prize2Qty}}</span>\n            <span *ngIf=\"!loaded\">-</span>\n          </ion-col>\n          <ion-col size=\"5\">\n            <span *ngIf=\"loaded\">{{m6result.prize2Amount}}</span>\n            <span *ngIf=\"!loaded\">-</span>\n          </ion-col>\n      </ion-row>\n\n      <ion-row style=\"vertical-align: middle;\">\n          <ion-col>\n              三獎\n          </ion-col>\n          <ion-col size=\"5\">\n              <span *ngIf=\"loaded\">{{m6result.prize3Qty}}</span>\n              <span *ngIf=\"!loaded\">-</span>\n            </ion-col>\n            <ion-col size=\"5\">\n              <span *ngIf=\"loaded\">{{m6result.prize3Amount}}</span>\n              <span *ngIf=\"!loaded\">-</span>\n          </ion-col>\n      </ion-row>\n\n      <ion-row style=\"vertical-align: middle;\">\n          <ion-col>\n              四獎\n          </ion-col>\n          <ion-col size=\"5\">\n              <span *ngIf=\"loaded\">{{m6result.prize4Qty}}</span>\n              <span *ngIf=\"!loaded\">-</span>\n            </ion-col>\n            <ion-col size=\"5\">\n              <span *ngIf=\"loaded\">${{m6result.prize4Amount}}</span>\n              <span *ngIf=\"!loaded\">-</span>\n            </ion-col>\n      </ion-row>\n\n      <ion-row style=\"vertical-align: middle;\">\n          <ion-col>\n              五獎\n          </ion-col>\n          <ion-col size=\"5\">\n              <span *ngIf=\"loaded\">{{m6result.prize5Qty}}</span>\n              <span *ngIf=\"!loaded\">-</span>\n            </ion-col>\n            <ion-col size=\"5\">\n              <span *ngIf=\"loaded\">${{m6result.prize5Amount}}</span>\n              <span *ngIf=\"!loaded\">-</span>\n            </ion-col>\n      </ion-row>\n\n      <ion-row style=\"vertical-align: middle;\">\n          <ion-col>\n              六獎\n          </ion-col>\n          <ion-col size=\"5\">\n              <span *ngIf=\"loaded\">{{m6result.prize6Qty}}</span>\n              <span *ngIf=\"!loaded\">-</span>\n            </ion-col>\n            <ion-col size=\"5\">\n              <span *ngIf=\"loaded\">${{m6result.prize6Amount}}</span>\n              <span *ngIf=\"!loaded\">-</span>\n            </ion-col>\n      </ion-row>\n\n      <ion-row style=\"vertical-align: middle;\">\n          <ion-col>\n              七獎\n          </ion-col>\n          <ion-col size=\"5\">\n              <span *ngIf=\"loaded\">{{m6result.prize7Qty}}</span>\n              <span *ngIf=\"!loaded\">-</span>\n            </ion-col>\n            <ion-col size=\"5\">\n              <span *ngIf=\"loaded\">${{m6result.prize7Amount }}</span>\n              <span *ngIf=\"!loaded\">-</span>\n            </ion-col>\n      </ion-row>\n  </ion-grid>\n\n  <ion-grid style=\"font-size: 85%\">\n        <ion-row style=\"vertical-align: middle;\">\n            <ion-col>\n                下次攪珠\n            </ion-col>\n            <ion-col size=\"6\">\n                <span *ngIf=\"loaded\">{{getNextDrawDate(m6result)}}</span>\n                <span *ngIf=\"!loaded\">-</span>\n            </ion-col>\n            <ion-col size=\"3\" style=\"color: green\">\n                <span *ngIf=\"loaded\">{{getNextDrawNo(m6result)}}</span>\n                <span *ngIf=\"!loaded\">-</span>\n            </ion-col>\n            \n        </ion-row>\n        <ion-row>\n            <ion-col>\n                估計頭獎\n            </ion-col>\n            <ion-col size=\"9\" style=\"color: red; vertical-align: top; text-align: left; font-weight: bold; font-size: 110%\">\n                <span *ngIf=\"loaded\">{{getNextJackpot(m6result)}}</span>\n                <span *ngIf=\"!loaded\">-</span>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/result/result.component.scss":
/*!**********************************************!*\
  !*** ./src/app/result/result.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/result/result.component.ts":
/*!********************************************!*\
  !*** ./src/app/result/result.component.ts ***!
  \********************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_mark6_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/mark6.service */ "./src/app/services/mark6.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
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




var ResultComponent = /** @class */ (function () {
    function ResultComponent(loadingController, commonService, m6service) {
        this.loadingController = loadingController;
        this.commonService = commonService;
        this.m6service = m6service;
        this.firstTime = true;
        this.loaded = false;
    }
    ResultComponent.prototype.ngOnInit = function () {
        this.commonService.hideBannerAd();
        this.doRefresh();
    };
    ResultComponent.prototype.ionViewDidEnter = function () {
        //this.commonService.prepareInterstitialAds();
        this.commonService.showInterstitialAds();
        this.commonService.hideBannerAd();
    };
    ResultComponent.prototype.ionViewWillLeave = function () {
        this.commonService.showBannerAd();
    };
    ResultComponent.prototype.doRefresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.firstTime === false) {
                            this.commonService.showInterstitialAds();
                        }
                        this.firstTime = false;
                        this.loaded = false;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Loading',
                                spinner: 'circles'
                            })];
                    case 1:
                        loading = _a.sent();
                        loading.present().then(function () {
                            _this.m6service.getResult().subscribe(function (result) {
                                _this.m6result = result.parameters.result;
                                _this.loaded = true;
                                loading.dismiss();
                            }, function (error) {
                                loading.dismiss();
                                _this.loaded = false;
                                console.log(error);
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ResultComponent.prototype.toDate = function (val) {
        if (val != null) {
            return this.m6service.toDateStr(val);
        }
        else {
            return '';
        }
    };
    ResultComponent.prototype.getNextDrawDate = function (m6result) {
        if (m6result.nextInfo != null && m6result.nextInfo.drawDate != null) {
            return this.toDate(m6result.nextInfo.drawDate);
        }
        else {
            return '';
        }
    };
    ResultComponent.prototype.getNextDrawNo = function (m6result) {
        if (m6result.nextInfo != null && m6result.nextInfo.drawNo != null) {
            return m6result.nextInfo.drawNo;
        }
        else {
            return '';
        }
    };
    ResultComponent.prototype.getNextJackpot = function (m6result) {
        if (m6result.nextInfo != null && m6result.nextInfo.jackpot != null) {
            return m6result.nextInfo.jackpot;
        }
        else {
            return '';
        }
    };
    ResultComponent.prototype.shareToFacebook = function () {
        this.commonService.shareToFacebook();
    };
    ResultComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] },
        { type: _services_mark6_service__WEBPACK_IMPORTED_MODULE_2__["Mark6Service"] }
    ]; };
    ResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-result',
            template: __importDefault(__webpack_require__(/*! raw-loader!./result.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/result/result.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./result.component.scss */ "./src/app/result/result.component.scss")).default]
        })
    ], ResultComponent);
    return ResultComponent;
}());



/***/ }),

/***/ "./src/app/result/result.module.ts":
/*!*****************************************!*\
  !*** ./src/app/result/result.module.ts ***!
  \*****************************************/
/*! exports provided: ResultComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponentModule", function() { return ResultComponentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _result_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./result.component */ "./src/app/result/result.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ResultComponentModule = /** @class */ (function () {
    function ResultComponentModule() {
    }
    ResultComponentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _result_component__WEBPACK_IMPORTED_MODULE_5__["ResultComponent"]
                    }
                ])
            ],
            declarations: [_result_component__WEBPACK_IMPORTED_MODULE_5__["ResultComponent"]]
        })
    ], ResultComponentModule);
    return ResultComponentModule;
}());



/***/ })

}]);
//# sourceMappingURL=result-result-module.js.map