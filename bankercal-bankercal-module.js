(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bankercal-bankercal-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bankercal/bankercal.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bankercal/bankercal.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>        \n      </ion-buttons>\n      \n      <ion-buttons slot=\"end\" class=\"ion-padding\">\n          <ion-button (click)=\"onClearClick()\">清除</ion-button>\n          <ion-button (click)=\"onCalClick()\">計算</ion-button>\n      </ion-buttons>\n      <ion-title>\n          膽拖計算器\n      </ion-title>    \n    </ion-toolbar>\n</ion-header>\n  \n<ion-content class=\"ion-padding\"> \n    \n    <ion-row>\n        <ion-col>\n            <ion-item>\n                <ion-label stacked>買膽字數:</ion-label>\n                <ion-input required type=\"number\" [(ngModel)]=\"totalBankerNo\" (input)=\"onTotalBetNoChange()\" (ionChange)=\"onTotalBetNoChange()\"></ion-input>\n            </ion-item>\n        </ion-col>\n        <ion-col>\n            <ion-item>\n                <ion-label stacked>拖字數:</ion-label>\n                <ion-input required type=\"number\" [(ngModel)]=\"totalLegNo\" (input)=\"onTotalBetNoChange()\" (ionChange)=\"onTotalBetNoChange()\"></ion-input>\n            </ion-item>\n        </ion-col>\n    </ion-row>\n\n\n\n    <ion-row>\n        <ion-col size=\"4\">\n            <ion-label>總注數: </ion-label>\n        </ion-col>\n\n        <ion-col>\n                <ion-label>{{totalBets}}</ion-label>\n            </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-col size=\"4\">\n            <ion-label>HK$10: </ion-label>\n        </ion-col>\n\n        <ion-col>\n                <ion-label><span *ngIf=\"amount10 > 0\">$</span>{{amount10 | number:'2.'}}</ion-label>\n            </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-col size=\"4\">\n            <ion-label>HK$5: </ion-label>\n        </ion-col>\n\n        <ion-col>\n                <ion-label><span *ngIf=\"amount5 > 0\">$</span>{{amount5 | number:'2.' }}</ion-label>\n            </ion-col>\n    </ion-row>\n    \n\n    \n    <ion-row>\n        <ion-col>\n            <ion-item>\n                <ion-label floating>中出膽數:</ion-label>\n                <ion-input type=\"number\" [(ngModel)]=\"bankerWinNum\"></ion-input>\n            </ion-item>\n        </ion-col>\n        \n        <ion-col>\n            <ion-item>\n                <ion-label floating>包括特別號碼:</ion-label>\n                <ion-toggle [(ngModel)]=\"bankerWinNoIncludeX\"></ion-toggle>\n            </ion-item>\n        </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-col>\n            <ion-item>\n                <ion-label floating>中出拖數:</ion-label>\n                <ion-input type=\"number\" [(ngModel)]=\"legWinNum\"></ion-input>\n            </ion-item>\n        </ion-col>\n        \n        <ion-col>\n            <ion-item>\n                <ion-label floating>包括特別號碼:</ion-label>\n                <ion-toggle [(ngModel)]=\"legWinNoIncludeX\"></ion-toggle>\n            </ion-item>\n        </ion-col>\n    </ion-row>\n\n    <ion-grid>\n        <ion-row>\n            <ion-col>&nbsp;</ion-col>\n            <ion-col>中獎注數</ion-col>\n            <ion-col>獎金</ion-col>\n        </ion-row>       \n\n        <ion-row>\n            <ion-col>頭獎</ion-col>\n            <ion-col>\n                <span *ngIf=\"loaded\">{{m6result.prize1Qty}}</span>\n                <span *ngIf=\"!loaded\">-</span>\n            </ion-col>\n            <ion-col>馬會公佈</ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col>二獎</ion-col>\n            <ion-col>\n                <span *ngIf=\"loaded\">{{m6result.prize2Qty}}</span>\n                <span *ngIf=\"!loaded\">-</span>\n            </ion-col>\n            <ion-col>馬會公佈</ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col>三獎</ion-col>\n            <ion-col>\n                <span *ngIf=\"loaded\">{{m6result.prize3Qty}}</span>\n                <span *ngIf=\"!loaded\">-</span>\n            </ion-col>\n            <ion-col>馬會公佈</ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col>四獎</ion-col>\n            <ion-col>\n                <span *ngIf=\"loaded\">{{m6result.prize4Qty}}</span>\n                <span *ngIf=\"!loaded\">-</span>\n            </ion-col>\n            <ion-col>\n                <span *ngIf=\"loaded\">{{m6result.prize4Amount}}</span>\n                <span *ngIf=\"!loaded\">-</span>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col>五獎</ion-col>\n            <ion-col>\n                <span *ngIf=\"loaded\">{{m6result.prize5Qty}}</span>\n                <span *ngIf=\"!loaded\">-</span>\n            </ion-col>\n            <ion-col>\n                <span *ngIf=\"loaded\">{{m6result.prize5Amount}}</span>\n                <span *ngIf=\"!loaded\">-</span>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col>六獎</ion-col>\n            <ion-col>\n                <span *ngIf=\"loaded\">{{m6result.prize6Qty}}</span>\n                <span *ngIf=\"!loaded\">-</span>\n            </ion-col>\n            <ion-col>\n                <span *ngIf=\"loaded\">{{m6result.prize6Amount}}</span>\n                <span *ngIf=\"!loaded\">-</span>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col>七獎</ion-col>\n            <ion-col>\n                <span *ngIf=\"loaded\">{{m6result.prize7Qty}}</span>\n                <span *ngIf=\"!loaded\">-</span>\n            </ion-col>\n            <ion-col>\n                <span *ngIf=\"loaded\">{{m6result.prize7Amount}}</span>\n                <span *ngIf=\"!loaded\">-</span>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/bankercal/bankercal.component.scss":
/*!****************************************************!*\
  !*** ./src/app/bankercal/bankercal.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhbmtlcmNhbC9iYW5rZXJjYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/bankercal/bankercal.component.ts":
/*!**************************************************!*\
  !*** ./src/app/bankercal/bankercal.component.ts ***!
  \**************************************************/
/*! exports provided: BankerCalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankerCalComponent", function() { return BankerCalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_mark6_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/mark6.service */ "./src/app/services/mark6.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _models_common_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/common.model */ "./src/app/models/common.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var BankerCalComponent = /** @class */ (function () {
    function BankerCalComponent(m6service, commonService) {
        this.m6service = m6service;
        this.commonService = commonService;
        this.loaded = false;
        this.totalLegs = 0;
        this.bankerWinNoIncludeX = false;
        this.legWinNoIncludeX = false;
    }
    BankerCalComponent.prototype.ngOnInit = function () {
    };
    BankerCalComponent.prototype.onTotalBetNoChange = function () {
        this.totalBets = null;
        this.amount10 = null;
        this.amount5 = null;
        if (this.totalBankerNo == null || this.totalLegNo == null) {
            return;
        }
        var sum = this.totalBankerNo + this.totalLegNo;
        if (this.totalBankerNo >= 1 && this.totalBankerNo <= 5 && this.totalLegNo >= 1 && this.totalLegNo <= 48 && (sum >= 6)) {
            this.totalBets = Math.round(this.m6service.nCr(this.totalLegNo, 6 - this.totalBankerNo));
            this.amount10 = this.totalBets * 10;
            this.amount5 = this.totalBets * 5;
        }
    };
    BankerCalComponent.prototype.onCalClick = function () {
        this.m6result = new _models_common_model__WEBPACK_IMPORTED_MODULE_3__["MarkSixResult"]();
        this.m6result.prize1Qty = '-';
        this.m6result.prize2Qty = '-';
        this.m6result.prize3Qty = '-';
        this.m6result.prize4Qty = '-';
        this.m6result.prize4Amount = '-';
        this.m6result.prize5Qty = '-';
        this.m6result.prize5Amount = '-';
        this.m6result.prize6Qty = '-';
        this.m6result.prize6Amount = '-';
        this.m6result.prize7Qty = '-';
        this.m6result.prize7Amount = '-';
        var results = this.m6service.calBankerLegChance(this.totalBankerNo, this.bankerWinNum, this.bankerWinNoIncludeX, this.totalLegNo, this.legWinNum, this.legWinNoIncludeX);
        if (results != null && results.length > 0) {
            for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
                var obj = results_1[_i];
                var prize = obj;
                var prizeNo = prize['PRIZE'];
                var matchCount = prize['MATCH'];
                var pNo = Number(prizeNo);
                var pCnt = Number(matchCount);
                var pNoVal = String(matchCount);
                //int nval = BONUS[(pNo - 1)];
                var pNoValx = pNo - 1;
                var nval = this.m6service.calBonusAmount(Number(pNoValx));
                var namt = nval * Number(pCnt);
                var amtStr = '$' + this.m6service.formatNumber(namt);
                switch (prizeNo) {
                    case 1:
                        this.m6result.prize1Qty = pNoVal;
                        break;
                    case 2:
                        this.m6result.prize2Qty = pNoVal;
                        break;
                    case 3:
                        this.m6result.prize3Qty = pNoVal;
                        break;
                    case 4:
                        this.m6result.prize4Amount = amtStr;
                        this.m6result.prize4Qty = pNoVal;
                        break;
                    case 5:
                        this.m6result.prize5Amount = amtStr;
                        this.m6result.prize5Qty = pNoVal;
                        break;
                    case 6:
                        this.m6result.prize6Amount = amtStr;
                        this.m6result.prize6Qty = pNoVal;
                        break;
                    case 7:
                        this.m6result.prize7Amount = amtStr;
                        this.m6result.prize7Qty = pNoVal;
                        break;
                }
            }
        }
        this.loaded = true;
    };
    BankerCalComponent.prototype.onClearClick = function () {
        this.totalLegs = 0;
        this.totalBankerNo = null;
        this.totalLegNo = null;
        this.bankerWinNum = 0;
        this.legWinNum = 0;
        this.bankerWinNoIncludeX = false;
        this.legWinNoIncludeX = false;
        this.totalBets = null;
        this.amount10 = null;
        this.amount5 = null;
        this.loaded = false;
        this.m6result = null;
    };
    BankerCalComponent.ctorParameters = function () { return [
        { type: _services_mark6_service__WEBPACK_IMPORTED_MODULE_1__["Mark6Service"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }
    ]; };
    BankerCalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bankercal',
            template: __importDefault(__webpack_require__(/*! raw-loader!./bankercal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bankercal/bankercal.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./bankercal.component.scss */ "./src/app/bankercal/bankercal.component.scss")).default]
        })
    ], BankerCalComponent);
    return BankerCalComponent;
}());



/***/ }),

/***/ "./src/app/bankercal/bankercal.module.ts":
/*!***********************************************!*\
  !*** ./src/app/bankercal/bankercal.module.ts ***!
  \***********************************************/
/*! exports provided: BankerCalComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankerCalComponentModule", function() { return BankerCalComponentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _bankercal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bankercal.component */ "./src/app/bankercal/bankercal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var BankerCalComponentModule = /** @class */ (function () {
    function BankerCalComponentModule() {
    }
    BankerCalComponentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _bankercal_component__WEBPACK_IMPORTED_MODULE_5__["BankerCalComponent"]
                    }
                ])
            ],
            declarations: [_bankercal_component__WEBPACK_IMPORTED_MODULE_5__["BankerCalComponent"]]
        })
    ], BankerCalComponentModule);
    return BankerCalComponentModule;
}());



/***/ })

}]);
//# sourceMappingURL=bankercal-bankercal-module.js.map