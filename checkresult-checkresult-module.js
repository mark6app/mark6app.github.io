(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkresult-checkresult-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/checkresult/checkresult.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkresult/checkresult.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\"  class=\"ion-padding\">\n        <ion-button (click)=\"reset()\">重選</ion-button>\n        <ion-button (click)=\"check()\">核對</ion-button>\n    </ion-buttons>    \n    <ion-title>\n        核對結果\n    </ion-title> \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-grid>\n      <ion-row *ngFor=\"let irow of rows\">\n        <ion-col *ngFor=\"let icol of cols\">\n          <ion-img src=\"./assets/images/no_{{irow * 7 + icol + 1}}.png\" *ngIf=\"balls[irow * 7 + icol]\" (click)=\"toggle(irow * 7 + icol)\"></ion-img>\n          <ion-img src=\"./assets/images/no_{{irow * 7 + icol + 1}}x.png\" *ngIf=\"!balls[irow * 7 + icol]\" (click)=\"toggle(irow * 7 + icol)\"></ion-img>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/checkresult/checkresultlist/checkresultlist.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkresult/checkresultlist/checkresultlist.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>        \n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            最近30期中獎結果\n        </ion-title>    \n  </ion-toolbar>\n</ion-header>\n  \n  <ion-content> \n      <ion-list>        \n          <ion-item *ngFor=\"let m6result of m6results; index as i; last as l\"  (click)=\"showDetail(m6result)\">\n              <ion-grid>\n                  <ion-row style=\"vertical-align: middle; text-align: center;\">\n                      <ion-col>\n                            <img src=\"./assets/images/no_{{m6result.number1}}.png\" class=\"ball\" *ngIf=\"m6result.matched[0]\"/>\n                            <img src=\"./assets/images/no_{{m6result.number1}}x.png\" class=\"ball\" *ngIf=\"!m6result.matched[0]\"/>\n                      </ion-col>\n                      <ion-col>\n                            <img src=\"./assets/images/no_{{m6result.number2}}.png\" class=\"ball\" *ngIf=\"m6result.matched[1]\"/>\n                            <img src=\"./assets/images/no_{{m6result.number2}}x.png\" class=\"ball\" *ngIf=\"!m6result.matched[1]\"/>\n                      </ion-col>\n                      <ion-col>\n                            <img src=\"./assets/images/no_{{m6result.number3}}.png\" class=\"ball\" *ngIf=\"m6result.matched[2]\"/>\n                            <img src=\"./assets/images/no_{{m6result.number3}}x.png\" class=\"ball\" *ngIf=\"!m6result.matched[2]\"/>\n                      </ion-col>\n                      <ion-col>\n                            <img src=\"./assets/images/no_{{m6result.number4}}.png\" class=\"ball\" *ngIf=\"m6result.matched[3]\"/>\n                            <img src=\"./assets/images/no_{{m6result.number4}}x.png\" class=\"ball\" *ngIf=\"!m6result.matched[3]\"/>\n                      </ion-col>\n                      <ion-col>\n                            <img src=\"./assets/images/no_{{m6result.number5}}.png\" class=\"ball\" *ngIf=\"m6result.matched[4]\"/>\n                            <img src=\"./assets/images/no_{{m6result.number5}}x.png\" class=\"ball\" *ngIf=\"!m6result.matched[4]\"/>\n                      </ion-col>\n                      <ion-col>\n                            <img src=\"./assets/images/no_{{m6result.number6}}.png\" class=\"ball\" *ngIf=\"m6result.matched[5]\"/>\n                            <img src=\"./assets/images/no_{{m6result.number6}}x.png\" class=\"ball\" *ngIf=\"!m6result.matched[5]\"/>\n                      </ion-col>\n                      <ion-col style=\"margin-top: 5px\">\n                          +\n                      </ion-col>\n                      <ion-col>\n                            <img src=\"./assets/images/no_{{m6result.numberX}}.png\" class=\"ball\" *ngIf=\"m6result.matched[6]\"/>\n                            <img src=\"./assets/images/no_{{m6result.numberX}}x.png\" class=\"ball\" *ngIf=\"!m6result.matched[6]\"/>\n                      </ion-col>\n                  </ion-row>\n\n                  <ion-row>\n                    <ion-col size=\"4\">\n                        <ion-label>{{m6result.drawNo}}</ion-label>\n                    </ion-col>\n                    <ion-col size=\"8\">\n                        <ion-label>{{toDate(m6result.drawDate)}}</ion-label>\n                    </ion-col>\n                  </ion-row>\n              </ion-grid>\n          </ion-item>\n    </ion-list>\n  </ion-content>\n");

/***/ }),

/***/ "./src/app/checkresult/checkresult.component.scss":
/*!********************************************************!*\
  !*** ./src/app/checkresult/checkresult.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-row {\n  width: 100%;\n  height: auto;\n}\n\nion-col {\n  width: auto;\n  height: 33%;\n}\n\nimg {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGEvcHJvamVjdHMvZWNsaXBzZS13b3Jrc3BhY2UvSEtNNi9IS002L3NyYy9hcHAvY2hlY2tyZXN1bHQvY2hlY2tyZXN1bHQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NoZWNrcmVzdWx0L2NoZWNrcmVzdWx0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQVUsV0FBQTtFQUFZLFlBQUE7QUNDdEI7O0FEQ0E7RUFBVSxXQUFBO0VBQVksV0FBQTtBQ0l0Qjs7QURGQTtFQUFNLFdBQUE7RUFBWSxZQUFBO0FDT2xCIiwiZmlsZSI6InNyYy9hcHAvY2hlY2tyZXN1bHQvY2hlY2tyZXN1bHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZ3JpZC1jb2x1bW5zOiA3ICFkZWZhdWx0O1xyXG5cclxuaW9uLXJvdyB7IHdpZHRoOjEwMCU7IGhlaWdodDphdXRvOyB9XHJcblxyXG5pb24tY29sIHsgd2lkdGg6YXV0bzsgaGVpZ2h0OjMzJTsgfVxyXG5cclxuaW1nIHsgd2lkdGg6MTAwJTsgaGVpZ2h0OjEwMCU7IH0iLCJpb24tcm93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuaW9uLWNvbCB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDMzJTtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/checkresult/checkresult.component.ts":
/*!******************************************************!*\
  !*** ./src/app/checkresult/checkresult.component.ts ***!
  \******************************************************/
/*! exports provided: CheckResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckResultComponent", function() { return CheckResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_mark6_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/mark6.service */ "./src/app/services/mark6.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _models_DataVal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/DataVal */ "./src/app/models/DataVal.ts");
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

//import { resetComponentState } from '@angular/core/src/render3/instructions';





var CheckResultComponent = /** @class */ (function () {
    function CheckResultComponent(commonService, mark6Service, _router, _activeRoute, navCtrl, loadingController, dataVal) {
        this.commonService = commonService;
        this.mark6Service = mark6Service;
        this._router = _router;
        this._activeRoute = _activeRoute;
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.dataVal = dataVal;
        this.rows = [0, 1, 2, 3, 4, 5, 6];
        this.cols = [0, 1, 2, 3, 4, 5, 6];
        this.balls = [
            false, false, false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false, false, // 49
        ];
    }
    CheckResultComponent.prototype.ngOnInit = function () {
        this.commonService.prepareRewardVideoAds();
    };
    CheckResultComponent.prototype.ionViewDidEnter = function () {
    };
    CheckResultComponent.prototype.reset = function () {
        for (var n = 0; n < 49; n++) {
            this.balls[n] = false;
        }
    };
    CheckResultComponent.prototype.toggle = function (num) {
        if (this.balls[num] === true) {
            this.balls[num] = false;
        }
        else {
            this.balls[num] = true;
        }
    };
    CheckResultComponent.prototype.check = function () {
        return __awaiter(this, void 0, void 0, function () {
            var selectedNumber, n, theSelectedNo, loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        selectedNumber = new Array();
                        for (n = 0; n < this.balls.length; n++) {
                            if (this.balls[n]) {
                                theSelectedNo = n + 1;
                                selectedNumber.push(theSelectedNo);
                            }
                        }
                        if (selectedNumber.length < 6) {
                            this.commonService.showAlert('Error', '最少選擇6個字');
                            return [2 /*return*/];
                        }
                        // this.commonService.showAlert('Warning', '此功能尚未完成');
                        this.commonService.showRewardVideoAds();
                        return [4 /*yield*/, this.loadingController.create({
                                message: '核對中...',
                                spinner: 'circles'
                            })];
                    case 1:
                        loading = _a.sent();
                        loading.present().then(function () {
                            _this.mark6Service.getLast30().subscribe(function (result) {
                                var matchedResults = new Array();
                                if (result != null && result.length > 0) {
                                    for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                                        var iResult = result_1[_i];
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
                                    loading.dismiss();
                                    if (matchedResults.length >= 1) {
                                        _this.dataVal.storage = matchedResults;
                                        _this.navCtrl.navigateForward(['checkresult/list']);
                                    }
                                    else {
                                        _this.commonService.showAlert('Info', '閣下輸入的號碼在最近30期沒有中獎');
                                    }
                                }
                                else {
                                    loading.dismiss();
                                }
                            }, function (error) {
                                loading.dismiss();
                                console.log(error);
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CheckResultComponent.ctorParameters = function () { return [
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] },
        { type: _services_mark6_service__WEBPACK_IMPORTED_MODULE_2__["Mark6Service"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _models_DataVal__WEBPACK_IMPORTED_MODULE_5__["DataVal"] }
    ]; };
    CheckResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkresult',
            template: __importDefault(__webpack_require__(/*! raw-loader!./checkresult.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/checkresult/checkresult.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./checkresult.component.scss */ "./src/app/checkresult/checkresult.component.scss")).default]
        })
    ], CheckResultComponent);
    return CheckResultComponent;
}());



/***/ }),

/***/ "./src/app/checkresult/checkresult.module.ts":
/*!***************************************************!*\
  !*** ./src/app/checkresult/checkresult.module.ts ***!
  \***************************************************/
/*! exports provided: CheckResultComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckResultComponentModule", function() { return CheckResultComponentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _checkresult_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkresult.component */ "./src/app/checkresult/checkresult.component.ts");
/* harmony import */ var _checkresultlist_checkresultlist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkresultlist/checkresultlist.component */ "./src/app/checkresult/checkresultlist/checkresultlist.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CheckResultComponentModule = /** @class */ (function () {
    function CheckResultComponentModule() {
    }
    CheckResultComponentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _checkresult_component__WEBPACK_IMPORTED_MODULE_5__["CheckResultComponent"]
                    },
                    {
                        path: 'list',
                        component: _checkresultlist_checkresultlist_component__WEBPACK_IMPORTED_MODULE_6__["CheckResultListComponent"]
                    }
                ])
            ],
            declarations: [_checkresult_component__WEBPACK_IMPORTED_MODULE_5__["CheckResultComponent"], _checkresultlist_checkresultlist_component__WEBPACK_IMPORTED_MODULE_6__["CheckResultListComponent"]]
        })
    ], CheckResultComponentModule);
    return CheckResultComponentModule;
}());



/***/ }),

/***/ "./src/app/checkresult/checkresultlist/checkresultlist.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/checkresult/checkresultlist/checkresultlist.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrcmVzdWx0L2NoZWNrcmVzdWx0bGlzdC9jaGVja3Jlc3VsdGxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/checkresult/checkresultlist/checkresultlist.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/checkresult/checkresultlist/checkresultlist.component.ts ***!
  \**************************************************************************/
/*! exports provided: CheckResultListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckResultListComponent", function() { return CheckResultListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_DataVal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/DataVal */ "./src/app/models/DataVal.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_mark6_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/mark6.service */ "./src/app/services/mark6.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
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






var CheckResultListComponent = /** @class */ (function () {
    function CheckResultListComponent(dataVal, commonService, m6service, _router, navCtrl, loadingController) {
        this.dataVal = dataVal;
        this.commonService = commonService;
        this.m6service = m6service;
        this._router = _router;
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
    }
    CheckResultListComponent.prototype.ngOnInit = function () {
        this.m6results = this.dataVal.storage;
        for (var result in this.m6results) {
            console.log(JSON.stringify(this.m6results[result]));
        }
        if (this.m6results == null) {
            this.navCtrl.navigateRoot('/404');
        }
    };
    CheckResultListComponent.prototype.showDetail = function (val) {
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
    CheckResultListComponent.prototype.toDate = function (val) {
        if (val != null) {
            return this.m6service.toDateStr(Number(val));
        }
        else {
            return '';
        }
        // return this.m6service.toDateStr(Number(val));
    };
    CheckResultListComponent.ctorParameters = function () { return [
        { type: src_app_models_DataVal__WEBPACK_IMPORTED_MODULE_1__["DataVal"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
        { type: src_app_services_mark6_service__WEBPACK_IMPORTED_MODULE_4__["Mark6Service"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
    CheckResultListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkresultlist',
            template: __importDefault(__webpack_require__(/*! raw-loader!./checkresultlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/checkresult/checkresultlist/checkresultlist.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./checkresultlist.component.scss */ "./src/app/checkresult/checkresultlist/checkresultlist.component.scss")).default]
        })
    ], CheckResultListComponent);
    return CheckResultListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=checkresult-checkresult-module.js.map