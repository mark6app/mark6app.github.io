(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"\"></ion-back-button>\n        </ion-buttons>\n      <ion-title>\n          結果詳情\n      </ion-title>    \n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content class=\"ion-padding\"> \n    <span *ngIf=\"loaded\">日期 &nbsp;&nbsp; {{toDate(result.drawDate)}}</span>&nbsp;&nbsp; &nbsp;<span *ngIf=\"loaded\" style=\"color: green\">{{result.drawNo}}</span>\n    \n    <ion-button *ngIf=\"!loaded\" [routerLink]=\"['/result']\">返回主頁</ion-button>\n  \n    <ion-grid *ngIf=\"loaded\">\n        <ion-row style=\"vertical-align: middle; text-align: center;\">\n            <ion-col>\n                <img src=\"./assets/images/no_{{result.number1}}.png\" class=\"ball\" *ngIf=\"loaded\"/>\n                <img src=\"./assets/images/redno.png\" class=\"ball\" *ngIf=\"!loaded\"/>\n            </ion-col>\n            <ion-col>\n                <img src=\"./assets/images/no_{{result.number2}}.png\" class=\"ball\" *ngIf=\"loaded\"/>\n                <img src=\"./assets/images/redno.png\" class=\"ball\" *ngIf=\"!loaded\"/>\n            </ion-col>\n            <ion-col>\n                <img src=\"./assets/images/no_{{result.number3}}.png\" class=\"ball\" *ngIf=\"loaded\"/>\n                <img src=\"./assets/images/redno.png\" class=\"ball\" *ngIf=\"!loaded\"/>\n            </ion-col>\n            <ion-col>\n                <img src=\"./assets/images/no_{{result.number4}}.png\" class=\"ball\" *ngIf=\"loaded\"/>\n                <img src=\"./assets/images/redno.png\" class=\"ball\" *ngIf=\"!loaded\"/>\n            </ion-col>\n            <ion-col>\n                <img src=\"./assets/images/no_{{result.number5}}.png\" class=\"ball\" *ngIf=\"loaded\"/>\n                <img src=\"./assets/images/redno.png\" class=\"ball\" *ngIf=\"!loaded\"/>\n            </ion-col>\n            <ion-col>\n                <img src=\"./assets/images/no_{{result.number6}}.png\" class=\"ball\" *ngIf=\"loaded\"/>\n                <img src=\"./assets/images/redno.png\" class=\"ball\" *ngIf=\"!loaded\"/>\n            </ion-col>\n            <ion-col style=\"margin-top: 5px\">\n                +\n            </ion-col>\n            <ion-col>\n                <img src=\"./assets/images/no_{{result.numberX}}.png\" class=\"ball\" *ngIf=\"loaded\"/>\n                <img src=\"./assets/images/redno.png\" class=\"ball\" *ngIf=\"!loaded\"/>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n      \n    <ion-grid *ngIf=\"loaded\">\n        <ion-row style=\"vertical-align: middle;\">\n            <ion-col>\n                &nbsp;\n            </ion-col>\n            <ion-col size=\"5\">\n                中獎注數\n            </ion-col>\n            <ion-col size=\"5\">\n                獎金\n            </ion-col>\n        </ion-row>\n  \n        <ion-row style=\"vertical-align: middle;\">\n          <ion-col>\n              頭獎\n          </ion-col>\n          <ion-col size=\"5\">\n              <span *ngIf=\"loaded\">{{result.prize1Qty}}</span>\n              <span *ngIf=\"!loaded\">-</span>\n          </ion-col>\n          <ion-col size=\"5\">\n              <span *ngIf=\"loaded\">{{result.prize1Amount}}</span>\n              <span *ngIf=\"!loaded\">-</span>\n          </ion-col>\n        </ion-row>\n  \n        <ion-row style=\"vertical-align: middle;\">\n            <ion-col>\n              二獎\n            </ion-col>\n            <ion-col size=\"5\">\n              <span *ngIf=\"loaded\">{{result.prize2Qty}}</span>\n              <span *ngIf=\"!loaded\">-</span>\n            </ion-col>\n            <ion-col size=\"5\">\n              <span *ngIf=\"loaded\">{{result.prize2Amount}}</span>\n              <span *ngIf=\"!loaded\">-</span>\n            </ion-col>\n        </ion-row>\n  \n        <ion-row style=\"vertical-align: middle;\">\n            <ion-col>\n                三獎\n            </ion-col>\n            <ion-col size=\"5\">\n                <span *ngIf=\"loaded\">{{result.prize3Qty}}</span>\n                <span *ngIf=\"!loaded\">-</span>\n              </ion-col>\n              <ion-col size=\"5\">\n                <span *ngIf=\"loaded\">{{result.prize3Amount}}</span>\n                <span *ngIf=\"!loaded\">-</span>\n            </ion-col>\n        </ion-row>\n  \n        <ion-row style=\"vertical-align: middle;\">\n            <ion-col>\n                四獎\n            </ion-col>\n            <ion-col size=\"5\">\n                <span *ngIf=\"loaded\">{{result.prize4Qty}}</span>\n                <span *ngIf=\"!loaded\">-</span>\n              </ion-col>\n              <ion-col size=\"5\">\n                <span *ngIf=\"loaded\">${{result.prize4Amount}}</span>\n                <span *ngIf=\"!loaded\">-</span>\n              </ion-col>\n        </ion-row>\n  \n        <ion-row style=\"vertical-align: middle;\">\n            <ion-col>\n                五獎\n            </ion-col>\n            <ion-col size=\"5\">\n                <span *ngIf=\"loaded\">{{result.prize5Qty}}</span>\n                <span *ngIf=\"!loaded\">-</span>\n              </ion-col>\n              <ion-col size=\"5\">\n                <span *ngIf=\"loaded\">${{result.prize5Amount}}</span>\n                <span *ngIf=\"!loaded\">-</span>\n              </ion-col>\n        </ion-row>\n  \n        <ion-row style=\"vertical-align: middle;\">\n            <ion-col>\n                六獎\n            </ion-col>\n            <ion-col size=\"5\">\n                <span *ngIf=\"loaded\">{{result.prize6Qty}}</span>\n                <span *ngIf=\"!loaded\">-</span>\n              </ion-col>\n              <ion-col size=\"5\">\n                <span *ngIf=\"loaded\">${{result.prize6Amount}}</span>\n                <span *ngIf=\"!loaded\">-</span>\n              </ion-col>\n        </ion-row>\n  \n        <ion-row style=\"vertical-align: middle;\">\n            <ion-col>\n                七獎\n            </ion-col>\n            <ion-col size=\"5\">\n                <span *ngIf=\"loaded\">{{result.prize7Qty}}</span>\n                <span *ngIf=\"!loaded\">-</span>\n              </ion-col>\n              <ion-col size=\"5\">\n                <span *ngIf=\"loaded\">${{result.prize7Amount }}</span>\n                <span *ngIf=\"!loaded\">-</span>\n              </ion-col>\n        </ion-row>\n    </ion-grid>\n  </ion-content>\n  ");

/***/ }),

/***/ "./src/app/detail/detail.component.scss":
/*!**********************************************!*\
  !*** ./src/app/detail/detail.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/detail/detail.component.ts":
/*!********************************************!*\
  !*** ./src/app/detail/detail.component.ts ***!
  \********************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_mark6_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/mark6.service */ "./src/app/services/mark6.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var DetailComponent = /** @class */ (function () {
    function DetailComponent(m6service, commonService, _router, _activeRoute) {
        this.m6service = m6service;
        this.commonService = commonService;
        this._router = _router;
        this._activeRoute = _activeRoute;
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaded = false;
        if (this._activeRoute.params != null) {
            this._activeRoute.params.subscribe(function (params) {
                if (params != null) {
                    _this.result = params;
                    _this.loaded = true;
                }
                else {
                    _this.loaded = false;
                }
                if (_this.result.drawNo == null || _this.result.number1 == null || _this.result.number2 == null || _this.result.number3 == null
                    || _this.result.number4 == null || _this.result.number5 == null || _this.result.number6 == null || _this.result.numberX == null) {
                    _this.loaded = false;
                    // this._router.navigate(['']);
                }
            });
        }
        else {
            this.loaded = true;
        }
    };
    DetailComponent.prototype.ngOnDestroy = function () {
    };
    DetailComponent.prototype.toDate = function (val) {
        if (val != null) {
            return this.m6service.toDateStr(Number(val));
        }
        else {
            return '';
        }
    };
    DetailComponent.ctorParameters = function () { return [
        { type: _services_mark6_service__WEBPACK_IMPORTED_MODULE_2__["Mark6Service"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ]; };
    DetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail',
            template: __importDefault(__webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./detail.component.scss */ "./src/app/detail/detail.component.scss")).default]
        })
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/detail/detail.module.ts":
/*!*****************************************!*\
  !*** ./src/app/detail/detail.module.ts ***!
  \*****************************************/
/*! exports provided: DetailComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponentModule", function() { return DetailComponentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail.component */ "./src/app/detail/detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DetailComponentModule = /** @class */ (function () {
    function DetailComponentModule() {
    }
    DetailComponentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"]
                    }
                ])
            ],
            declarations: [_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"]]
        })
    ], DetailComponentModule);
    return DetailComponentModule;
}());



/***/ })

}]);
//# sourceMappingURL=detail-detail-module.js.map