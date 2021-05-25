(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>        \n      </ion-buttons>\n      <ion-title>\n          關於\n      </ion-title>    \n    </ion-toolbar>\n</ion-header>\n  \n<ion-content class=\"ion-padding\">\n    <ion-row justify-content-center align-items-center>\n        <ion-img  src=\"./assets/images/icon-120.png\" style=\"width: 72px; height: 72px;\"></ion-img>\n    </ion-row>\n     \n    <ion-row justify-content-center align-items-center>\n        <h1 style=\"color: blue\">六合彩資訊</h1>\n    </ion-row>\n    \n    <ion-row justify-content-center align-items-center>\n        <ion-label>{{getAppVersionInfo()}}</ion-label>\n    </ion-row>\n\n\n    <span style=\"height: 10px\">&nbsp;</span>    \n\n    \n    <ion-row justify-content-center align-items-center>\n      <p style=\"color: #E95CB4\">資料只供參考，所有資料以官方公佈為實！</p>\n    </ion-row>\n\n\n    <span style=\"height: 30px\">&nbsp;</span>    \n\n    \n    <ion-row justify-content-center align-items-center>\n      <p style=\"color: green\">&copy; All right reserved by Eric Chow.</p>\n    </ion-row>\n    \n    \n    <ion-row justify-content-center align-items-center>\n      <ion-button (click)=\"shareToFacebook()\">分享到 Facebook</ion-button>\n      <ion-button (click)=\"shareToTwitter()\">分享到 Twitter</ion-button>\n      <ion-button (click)=\"shareToGooglePlus()\">分享到 Google+</ion-button>\n      <ion-button (click)=\"shareToLinkedln()\">分享到 Linkedln</ion-button>\n    </ion-row>\n\n  \n    \n</ion-content>");

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent(commonService) {
        this.commonService = commonService;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.getAppVersionInfo = function () {
        var ver = 'v.1.1.0';
        return ver;
    };
    AboutComponent.prototype.shareToFacebook = function () {
        this.commonService.shareToFacebook();
    };
    AboutComponent.prototype.shareToTwitter = function () {
        this.commonService.shareToTwitter();
    };
    AboutComponent.prototype.shareToGooglePlus = function () {
        this.commonService.shareToGooglePlus();
    };
    AboutComponent.prototype.shareToLinkedln = function () {
        this.commonService.shareToLinkedln();
    };
    AboutComponent.ctorParameters = function () { return [
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] }
    ]; };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __importDefault(__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")).default]
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponentModule", function() { return AboutComponentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about.component */ "./src/app/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AboutComponentModule = /** @class */ (function () {
    function AboutComponentModule() {
    }
    AboutComponentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"]
                    }
                ])
            ],
            providers: [],
            declarations: [_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"]]
        })
    ], AboutComponentModule);
    return AboutComponentModule;
}());



/***/ })

}]);
//# sourceMappingURL=about-about-module.js.map