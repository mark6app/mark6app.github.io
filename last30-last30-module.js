(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["last30-last30-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/last30/last30.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/last30/last30.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" (click)=\"doRefresh()\" class=\"ion-padding\">\n      <ion-icon name=\"refresh\"></ion-icon>      \n    </ion-buttons>    \n    <ion-title>\n        最近30期結果\n    </ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content> \n    <ion-list>        \n          <ion-item *ngFor=\"let m6result of m6results; index as i; last as l\"  (click)=\"showDetail(m6result)\">\n              <ion-grid>\n                  <ion-row style=\"vertical-align: middle; text-align: center;\">\n                      <ion-col>\n                          <img src=\"./assets/images/no_{{m6result.number1}}.png\" class=\"ball\" *ngIf=\"loaded\"/>\n                          <img src=\"./assets/images/redno.png\" class=\"ball\" *ngIf=\"!loaded\"/>\n                      </ion-col>\n                      <ion-col>\n                          <img src=\"./assets/images/no_{{m6result.number2}}.png\" class=\"ball\" *ngIf=\"loaded\"/>\n                          <img src=\"./assets/images/redno.png\" class=\"ball\" *ngIf=\"!loaded\"/>\n                      </ion-col>\n                      <ion-col>\n                          <img src=\"./assets/images/no_{{m6result.number3}}.png\" class=\"ball\" *ngIf=\"loaded\"/>\n                          <img src=\"./assets/images/redno.png\" class=\"ball\" *ngIf=\"!loaded\"/>\n                      </ion-col>\n                      <ion-col>\n                          <img src=\"./assets/images/no_{{m6result.number4}}.png\" class=\"ball\" *ngIf=\"loaded\"/>\n                          <img src=\"./assets/images/redno.png\" class=\"ball\" *ngIf=\"!loaded\"/>\n                      </ion-col>\n                      <ion-col>\n                          <img src=\"./assets/images/no_{{m6result.number5}}.png\" class=\"ball\" *ngIf=\"loaded\"/>\n                          <img src=\"./assets/images/redno.png\" class=\"ball\" *ngIf=\"!loaded\"/>\n                      </ion-col>\n                      <ion-col>\n                          <img src=\"./assets/images/no_{{m6result.number6}}.png\" class=\"ball\" *ngIf=\"loaded\"/>\n                          <img src=\"./assets/images/redno.png\" class=\"ball\" *ngIf=\"!loaded\"/>\n                      </ion-col>\n                      <ion-col style=\"margin-top: 5px\">\n                          +\n                      </ion-col>\n                      <ion-col>\n                          <img src=\"./assets/images/no_{{m6result.numberX}}.png\" class=\"ball\" *ngIf=\"loaded\"/>\n                          <img src=\"./assets/images/redno.png\" class=\"ball\" *ngIf=\"!loaded\"/>\n                      </ion-col>\n                  </ion-row>\n\n                  <ion-row>\n                    <ion-col size=\"4\">\n                        <ion-label>{{m6result.drawNo}}</ion-label>\n                    </ion-col>\n                    <ion-col size=\"8\">\n                        <ion-label>{{toDate(m6result.drawDate)}}</ion-label>\n                    </ion-col>\n                  </ion-row>\n              </ion-grid>\n          </ion-item>\n    </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/last30/last30.component.scss":
/*!**********************************************!*\
  !*** ./src/app/last30/last30.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhc3QzMC9sYXN0MzAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/last30/last30.component.ts":
/*!********************************************!*\
  !*** ./src/app/last30/last30.component.ts ***!
  \********************************************/
/*! exports provided: Last30Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Last30Component", function() { return Last30Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_mark6_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/mark6.service */ "./src/app/services/mark6.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
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





var Last30Component = /** @class */ (function () {
    function Last30Component(commonService, m6service, _router, navCtrl, loadingController) {
        this.commonService = commonService;
        this.m6service = m6service;
        this._router = _router;
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.loaded = false;
    }
    Last30Component.prototype.ngOnInit = function () {
        this.doRefresh();
    };
    Last30Component.prototype.doRefresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loaded = false;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Loading',
                                spinner: 'circles'
                            })];
                    case 1:
                        loading = _a.sent();
                        loading.present().then(function () {
                            _this.m6service.getLast30().subscribe(function (result) {
                                _this.m6results = result;
                                _this.loaded = true;
                                _this.m6service.result = result;
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
    Last30Component.prototype.showDetail = function (val) {
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
    Last30Component.prototype.toDate = function (val) {
        if (val != null) {
            return this.m6service.toDateStr(val);
        }
        else {
            return '';
        }
    };
    Last30Component.ctorParameters = function () { return [
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] },
        { type: _services_mark6_service__WEBPACK_IMPORTED_MODULE_2__["Mark6Service"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
    ]; };
    Last30Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-last30',
            template: __importDefault(__webpack_require__(/*! raw-loader!./last30.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/last30/last30.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./last30.component.scss */ "./src/app/last30/last30.component.scss")).default]
        })
    ], Last30Component);
    return Last30Component;
}());



/***/ }),

/***/ "./src/app/last30/last30.module.ts":
/*!*****************************************!*\
  !*** ./src/app/last30/last30.module.ts ***!
  \*****************************************/
/*! exports provided: Last30ComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Last30ComponentModule", function() { return Last30ComponentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _last30_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./last30.component */ "./src/app/last30/last30.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var Last30ComponentModule = /** @class */ (function () {
    function Last30ComponentModule() {
    }
    Last30ComponentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _last30_component__WEBPACK_IMPORTED_MODULE_5__["Last30Component"]
                    }
                ])
            ],
            declarations: [_last30_component__WEBPACK_IMPORTED_MODULE_5__["Last30Component"]]
        })
    ], Last30ComponentModule);
    return Last30ComponentModule;
}());



/***/ })

}]);
//# sourceMappingURL=last30-last30-module.js.map