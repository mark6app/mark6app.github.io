(self["webpackChunkHKM6"] = self["webpackChunkHKM6"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ 43019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




var routes = [
    {
        path: '',
        redirectTo: 'result',
        pathMatch: 'full'
    },
    {
        path: 'result',
        loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_result_result_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./result/result.module */ 73637)).then(function (m) { return m.ResultComponentModule; }); }
    },
    {
        path: 'last30',
        loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_last30_last30_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./last30/last30.module */ 85263)).then(function (m) { return m.Last30ComponentModule; }); }
    },
    {
        path: 'last30/detail',
        loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_detail_detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./detail/detail.module */ 9251)).then(function (m) { return m.DetailComponentModule; }); }
    },
    {
        path: 'topnum',
        loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_topnum_topnum_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./topnum/topnum.module */ 12033)).then(function (m) { return m.TopNumComponentModule; }); }
    },
    {
        path: 'multical',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_multical_multical_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./multical/multical.module */ 7996)).then(function (m) { return m.MultiCalComponentModule; }); }
    },
    {
        path: 'bankercal',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_bankercal_bankercal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./bankercal/bankercal.module */ 7244)).then(function (m) { return m.BankerCalComponentModule; }); }
    },
    {
        path: 'checkresult',
        loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_checkresult_checkresult_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./checkresult/checkresult.module */ 25501)).then(function (m) { return m.CheckResultComponentModule; }); }
    },
    {
        path: 'checkresult/list',
        loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_checkresult_checkresult_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./checkresult/checkresult.module */ 25501)).then(function (m) { return m.CheckResultComponentModule; }); }
    },
    {
        path: 'capcheck',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_capcheck_capcheck_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./capcheck/capcheck.module */ 71053)).then(function (m) { return m.CapCheckComponentModule; }); }
    },
    {
        path: 'capcheck/result',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_capcheck_capcheck_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./capcheck/capcheck.module */ 71053)).then(function (m) { return m.CapCheckComponentModule; }); }
    },
    {
        path: 'capcheck/list',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_capcheck_capcheck_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./capcheck/capcheck.module */ 71053)).then(function (m) { return m.CapCheckComponentModule; }); }
    },
    {
        path: 'about',
        loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./about/about.module */ 46985)).then(function (m) { return m.AboutComponentModule; }); }
    },
    {
        path: '404',
        component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_0__.PageNotFoundComponent
    },
    {
        path: '**', redirectTo: '/404'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
    AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { enableTracing: false, useHash: true, relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 19539);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 31494);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/common.service */ 5620);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);







var _c0 = function (a0) { return [a0]; };
function AppComponent_ion_menu_toggle_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-menu-toggle", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "ion-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerDirection", "root")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c0, p_r1.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", p_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", p_r1.title, " ");
} }
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, commonService) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.commonService = commonService;
        this.appPages = [
            {
                title: '最新結果',
                url: '/result',
                icon: 'newspaper-outline'
            },
            {
                title: '最近30期結果',
                url: '/last30',
                icon: 'list'
            },
            {
                title: '熱門號碼',
                url: '/topnum',
                icon: 'flash'
            },
            {
                title: '複式計算器',
                url: '/multical',
                icon: 'calculator'
            },
            {
                title: '膽拖計算器',
                url: '/bankercal',
                icon: 'options'
            },
            {
                title: '核對結果',
                url: '/checkresult',
                icon: 'checkmark-circle'
            },
            {
                title: '一拍即對',
                url: '/capcheck',
                icon: 'camera'
            },
            {
                title: '關於',
                url: '/about',
                icon: 'information-circle'
            },
        ];
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            if (_this.platform.is('capacitor') || _this.platform.is('cordova')) {
                _this.commonService.initAdMob().then(function () {
                    _this.commonService.prepareInterstitialAds();
                    _this.commonService.prepareRewardVideoAds();
                });
            }
        });
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__.SplashScreen), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__.StatusBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService)); };
    AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 12, vars: 1, consts: [["contentId", "main-content"], ["src", "assets/icon/favicon.png", 2, "width", "24px", "height", "24px"], ["auto-hide", "false", 4, "ngFor", "ngForOf"], ["id", "main-content"], ["auto-hide", "false"], [3, "routerDirection", "routerLink"], ["slot", "start", 3, "name"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-app");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-split-pane", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-menu", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "ion-img", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\u516D\u5408\u5F69\u8CC7\u8A0A");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ion-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, AppComponent_ion_menu_toggle_10_Template, 5, 6, "ion-menu-toggle", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "ion-router-outlet", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.appPages);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonApp, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonSplitPane, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonMenu, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonList, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRouterOutlet, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonMenuToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel], encapsulation: 2 });
    return AppComponent;
}());



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 19539);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 31494);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/common.service */ 5620);
/* harmony import */ var _services_mark6_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/mark6.service */ 36263);
/* harmony import */ var _models_DataVal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/DataVal */ 82845);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ 43019);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/service-worker */ 72249);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var angular_gtag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-gtag */ 75185);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
    AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
    AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__.StatusBar,
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__.SplashScreen,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicRouteStrategy },
            _services_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService,
            _services_mark6_service__WEBPACK_IMPORTED_MODULE_5__.Mark6Service,
            _models_DataVal__WEBPACK_IMPORTED_MODULE_6__.DataVal
        ], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
                _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule.forRoot(),
                angular_gtag__WEBPACK_IMPORTED_MODULE_9__.GtagModule.forRoot({ trackingId: 'UA-41754398-12', trackPageviews: true }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__.ServiceWorkerModule.register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.production }),
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_7__.PageNotFoundComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule, angular_gtag__WEBPACK_IMPORTED_MODULE_9__.GtagModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__.ServiceWorkerModule] }); })();


/***/ }),

/***/ 82845:
/*!***********************************!*\
  !*** ./src/app/models/DataVal.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataVal": function() { return /* binding */ DataVal; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

var DataVal = /** @class */ (function () {
    function DataVal() {
    }
    DataVal.ɵfac = function DataVal_Factory(t) { return new (t || DataVal)(); };
    DataVal.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataVal, factory: DataVal.ɵfac, providedIn: 'root' });
    return DataVal;
}());



/***/ }),

/***/ 43019:
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundComponent": function() { return /* binding */ PageNotFoundComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



var _c0 = function () { return ["/result"]; };
var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
    PageNotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-pagenotfound"]], decls: 8, vars: 2, consts: [[1, "ion-padding"], [2, "text-align", "center"], [3, "routerLink"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " 404 Page Not Found ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-content", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u8FD4\u56DE\u4E3B\u9801");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlbm90Zm91bmQuY29tcG9uZW50LnNjc3MifQ== */"] });
    return PageNotFoundComponent;
}());



/***/ }),

/***/ 5620:
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonService": function() { return /* binding */ CommonService; }
/* harmony export */ });
/* harmony import */ var _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor-community/admob */ 15453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
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



//const { AdMob, Toast } = Plugins;
var CommonService = /** @class */ (function () {
    function CommonService(platform, alertController) {
        this.platform = platform;
        this.alertController = alertController;
        this.h = 'https://ericmacau.github.io';
        this.r = 'mark6';
        this.shareURL = 'http%3A//bit.ly/mark6apps';
    }
    CommonService.prototype.isMobileDevice = function () {
        /*
        if (!this.platform.is('desktop') && !this.platform.is('mobileweb')) {
          return false;
        } else {
          return true;
        }
        */
        if (this.platform.is('hybrid') || this.platform.is('cordova') || this.platform.is('capacitor')) {
            return true;
        }
        else {
            return false;
        }
    };
    CommonService.prototype.showAlert = function (alertTitle, alertMessage) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: alertTitle,
                            message: alertMessage,
                            buttons: ['Dismiss']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CommonService.prototype.shareToFacebook = function () {
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + this.shareURL, '_system', 'location=yes');
    };
    CommonService.prototype.shareToTwitter = function () {
        // window.open('https://twitter.com/home?status=' + this.shareURL, '_system', 'location=yes');
        window.open('https://twitter.com/intent/tweet?text=' + this.shareURL, '_system', 'location=yes');
    };
    CommonService.prototype.shareToGooglePlus = function () {
        window.open('https://plus.google.com/share?url=' + this.shareURL, '_system', 'location=yes');
    };
    CommonService.prototype.shareToLinkedln = function () {
        var theHost = 'https://www.linkedin.com/shareArticle';
        var theUrl = '?mini=true&url=' + this.shareURL + '&title=%E5%85%AD%E5%90%88%E5%BD%A9%E8%B3%87%E8%A8%8A&summary=&source=';
        var theSite = theHost + theUrl;
        window.open(theSite, '_system', 'location=yes');
    };
    CommonService.prototype.initAdMob = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.platform.is('android')) {
                    console.log('...........................isAndroid:');
                    // old adMob plugin
                    //AdMob.initialize('ca-app-pub-5815961570110548~3459867081');
                    _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_0__.AdMob.initialize({
                        requestTrackingAuthorization: true,
                        testingDevices: ['2ca-app-pub-5815961570110548~3459867081'],
                        initializeForTesting: false,
                    });
                }
                else if (this.platform.is('ios')) {
                    console.log('...........................isIOS:');
                    //AdMob.initialize('ca-app-pub-5815961570110548~3124459944');
                    _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_0__.AdMob.initialize({
                        requestTrackingAuthorization: true,
                        testingDevices: ['a-app-pub-5815961570110548~3124459944'],
                        initializeForTesting: false,
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    /*
    async showBannerAdOld() {
      if (this.isMobileDevice()) {
  
        const optionsAndroid: AdOptions = {
          adId: 'ca-app-pub-5815961570110548/7734277726',
          //adId: 'ca-app-pub-3940256099942544/6300978111', // test app_id
          autoShow: true,
          //isTesting: true,
          adSize: AdSize.SMART_BANNER,
          position: AdPosition.BOTTOM_CENTER,
          hasTabBar: false,  // make it true if you have TabBar Layout.
          //tabBarHeight: 56  // you can assign custom margin in pixel default is 56
        };
  
        const optionsIos: AdOptions = {
          adId: 'ca-app-pub-5815961570110548/3795032715',
          autoShow: true,
          //isTesting: true,
          adSize: AdSize.SMART_BANNER,
          position: AdPosition.BOTTOM_CENTER,
          hasTabBar: false,  // make it true if you have TabBar Layout.
          //tabBarHeight: 56  // you can assign custom margin in pixel default is 56
        };
  
        if (this.platform.is('android')) {
          // Show Banner Ad
          AdMob.showBanner(optionsAndroid)
              .then(
                  async (value) => {
                    
                   console.log('showBanner ..........................' + value);  // true
                  },
                  (error) => {
                    console.error(error); // show error
                  }
              );
        } else if (this.platform.is('ios')) {
            // Show Banner Ad
            AdMob.showBanner(optionsIos)
            .then(
                async (value) => {
                 
                },
                (error) => {
                  console.error(error); // show error
                }
            );
        }
  
      }
    }
    */
    CommonService.prototype.showBannerAd = function () {
        return __awaiter(this, void 0, void 0, function () {
            var optionsAndroid, optionsIos;
            var _this = this;
            return __generator(this, function (_a) {
                _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_0__.AdMob.addListener(_capacitor_community_admob__WEBPACK_IMPORTED_MODULE_0__.BannerAdPluginEvents.Loaded, function () {
                    // Subscribe Banner Event Listener
                });
                _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_0__.AdMob.addListener(_capacitor_community_admob__WEBPACK_IMPORTED_MODULE_0__.BannerAdPluginEvents.SizeChanged, function (size) {
                    // Subscribe Change Banner Size
                });
                if (this.isMobileDevice()) {
                    optionsAndroid = {
                        adId: 'ca-app-pub-5815961570110548/7734277726',
                        //adId: 'ca-app-pub-3940256099942544/6300978111', // test app_id
                        adSize: _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_0__.BannerAdSize.BANNER,
                        position: _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_0__.BannerAdPosition.BOTTOM_CENTER,
                        margin: 0,
                        // isTesting: true
                        // npa: true
                    };
                    optionsIos = {
                        adId: 'ca-app-pub-5815961570110548/3795032715',
                        adSize: _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_0__.BannerAdSize.BANNER,
                        position: _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_0__.BannerAdPosition.BOTTOM_CENTER,
                        margin: 0,
                        // isTesting: true
                        // npa: true
                    };
                    if (this.platform.is('android')) {
                        // Show Banner Ad
                        _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_0__.AdMob.showBanner(optionsAndroid);
                    }
                    else if (this.platform.is('ios')) {
                        // Show Banner Ad
                        _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_0__.AdMob.showBanner(optionsIos)
                            .then(function (value) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                return [2 /*return*/];
                            });
                        }); }, function (error) {
                            console.error(error); // show error
                        });
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    /*
    async hideBannerAd() {
      if (this.isMobileDevice()) {
        AdMob.hideBanner().then(
          async (value) => {
            
              //await Toast.show({
              //  text: 'Banner AD Hidden'
              //});
              
              console.log(value);  // true
          },
          (error) => {
              console.error(error); // show error
          }
        );
      }
    }
    */
    CommonService.prototype.hideBannerAd = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.isMobileDevice()) {
                    _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_0__.AdMob.hideBanner().then(function (value) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            //await Toast.show({
                            //  text: 'Banner AD Hidden'
                            //});
                            console.log(value); // true
                            return [2 /*return*/];
                        });
                    }); }, function (error) {
                        console.error(error); // show error
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    /*
    async prepareInterstitialAds() {
      if (this.isMobileDevice()) {
        const optionsAndroid: AdOptions = {
          adId: 'ca-app-pub-5815961570110548/2541537089',
          autoShow: false,
          //isTesting: true
        };
  
        const optionsIos: AdOptions = {
          adId: 'ca-app-pub-5815961570110548/6607283918',
          autoShow: false,
          //isTesting: true
        };
  
  
        if (this.platform.is('android')) {
          AdMob.prepareInterstitial(optionsAndroid)
            .then(
                async (value) => {
                    console.log('Interstitial AD Loaded...............' + value);  // true
                },
                (error) => {
                    console.error('Interstitial AD Prepared...............' + error); // show error
                }
            );
        } else if (this.platform.is('ios')) {
          AdMob.prepareInterstitial(optionsIos)
            .then(
                async (value) => {
                    console.log('Interstitial AD Loaded...............' + value);  // true
                    //this.showInterstitial();
                },
                (error) => {
                    console.error(error); // show error
                }
            );
        }
      }
    }
    */
    CommonService.prototype.prepareInterstitialAds = function () {
        return __awaiter(this, void 0, void 0, function () {
            var optionsAndroid, optionsIos;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isMobileDevice()) return [3 /*break*/, 4];
                        _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_0__.AdMob.addListener(_capacitor_community_admob__WEBPACK_IMPORTED_MODULE_0__.InterstitialAdPluginEvents.Loaded, function (info) {
                            // Subscribe prepared interstitial
                        });
                        optionsAndroid = {
                            adId: 'ca-app-pub-5815961570110548/2541537089',
                            //isTesting: true
                            // npa: true
                        };
                        optionsIos = {
                            adId: 'ca-app-pub-5815961570110548/6607283918',
                            //isTesting: true
                        };
                        if (!this.platform.is('android')) return [3 /*break*/, 2];
                        return [4 /*yield*/, _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_0__.AdMob.prepareInterstitial(optionsAndroid)
                                .then(function (value) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    console.log('Interstitial AD Loaded...............' + value); // true
                                    return [2 /*return*/];
                                });
                            }); }, function (error) {
                                console.error('Interstitial AD Prepared...............' + error); // show error
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        if (!this.platform.is('ios')) return [3 /*break*/, 4];
                        return [4 /*yield*/, _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_0__.AdMob.prepareInterstitial(optionsIos)
                                .then(function (value) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    console.log('Interstitial AD Loaded...............' + value); // true
                                    return [2 /*return*/];
                                });
                            }); }, function (error) {
                                console.error(error); // show error
                            })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CommonService.prototype.showInterstitialAds = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_0__.AdMob.showInterstitial().then(function (value) {
                    console.log('Interstitial AD Showed...............' + value); // true
                    _this.prepareInterstitialAds();
                }, function (error) {
                    console.error(error); // show error
                });
                this.prepareInterstitialAds();
                return [2 /*return*/];
            });
        });
    };
    CommonService.prototype.prepareRewardVideoAds = function () {
        return __awaiter(this, void 0, void 0, function () {
            var optionsAndroid, optionsIos;
            var _this = this;
            return __generator(this, function (_a) {
                if (this.isMobileDevice()) {
                    optionsAndroid = {
                        adId: 'ca-app-pub-5815961570110548/2349965398',
                        //autoShow: false
                    };
                    optionsIos = {
                        adId: 'ca-app-pub-5815961570110548/5701396356',
                        //autoShow: false
                    };
                    if (this.platform.is('android')) {
                        _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_0__.AdMob.prepareInterstitial(optionsAndroid)
                            .then(function (value) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                /*
                                if(value) {
                                  await Toast.show({
                                    text: 'Interstitial AD Loaded'
                                  });
                                }
                                */
                                console.log(value); // true
                                return [2 /*return*/];
                            });
                        }); }, function (error) {
                            console.error(error); // show error
                        });
                    }
                    else if (this.platform.is('ios')) {
                        _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_0__.AdMob.prepareInterstitial(optionsIos)
                            .then(function (value) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                /*
                                if(value) {
                                  await Toast.show({
                                    text: 'Interstitial AD Loaded'
                                  });
                                }
                                */
                                console.log(value); // true
                                return [2 /*return*/];
                            });
                        }); }, function (error) {
                            console.error(error); // show error
                        });
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    CommonService.prototype.showRewardVideoAds = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // Show a RewardVideo AD
                _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_0__.AdMob.showRewardVideoAd().then(function (value) {
                    console.log(value); // true
                }, function (error) {
                    console.error(error); // show error
                });
                this.prepareRewardVideoAds();
                return [2 /*return*/];
            });
        });
    };
    CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController)); };
    CommonService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CommonService, factory: CommonService.ɵfac, providedIn: 'root' });
    return CommonService;
}());



/***/ }),

/***/ 36263:
/*!*******************************************!*\
  !*** ./src/app/services/mark6.service.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mark6Service": function() { return /* binding */ Mark6Service; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.service */ 5620);



var Mark6Service = /** @class */ (function () {
    function Mark6Service(http, commonService) {
        this.http = http;
        this.commonService = commonService;
        this.TOTAL_NUM = 49;
        this.BONUS = [-1, -1, -1, 9600, 640, 320, 40];
    }
    Mark6Service.prototype.getResult = function () {
        return this.http.get(this.getServiceURL('result.json') + '?' + (new Date()).getTime());
    };
    Mark6Service.prototype.getLast30 = function () {
        return this.http.get(this.getServiceURL('last30.json') + '?' + (new Date()).getTime());
    };
    Mark6Service.prototype.toDateStr = function (dateVal) {
        var WEEK = [
            '星期日',
            '星期一',
            '星期二',
            '星期三',
            '星期四',
            '星期五',
            '星期六',
        ];
        var d = new Date(Number(dateVal));
        var mm = d.getMonth() + 1;
        var dd = d.getDate();
        var mmVal = mm + '';
        var ddVal = dd + '';
        if (mm < 10) {
            mmVal = '0' + mm;
        }
        if (dd < 10) {
            ddVal = '0' + dd;
        }
        return d.getFullYear() + '-' + mmVal + '-' + ddVal + ' (' + WEEK[d.getDay()] + ')';
    };
    Mark6Service.prototype.getServiceURL = function (data) {
        return this.commonService.h + '/' + this.commonService.r + '/' + data;
    };
    Mark6Service.prototype.calBonusAmount = function (prizeNo) {
        return this.BONUS[prizeNo];
    };
    Mark6Service.prototype.nCr = function (n, r) {
        var numerator = 1, denominator = 1;
        if (r > n - r) {
            r = n - r;
        }
        for (var i = 1; i <= r; ++i) {
            denominator *= i;
        }
        for (var i = n - r + 1; i <= n; ++i) {
            numerator *= i;
        }
        return numerator / denominator;
    };
    Mark6Service.prototype.getMultiplePrizeType = function (matchLegs, includeExtraNumber) {
        var result = 0;
        if (matchLegs >= 3) {
            switch (matchLegs) {
                case 3:
                    if (includeExtraNumber === true) {
                        result = 0;
                    }
                    else {
                        result = 7;
                    }
                    break;
                case 4:
                    if (includeExtraNumber === true) {
                        result = 6;
                    }
                    else {
                        result = 5;
                    }
                    break;
                case 5:
                    if (includeExtraNumber === true) {
                        result = 4;
                    }
                    else {
                        result = 3;
                    }
                    break;
                case 6:
                    if (includeExtraNumber === true) {
                        result = 2;
                    }
                    else {
                        result = 1;
                    }
                    break;
                case 7:
                    if (includeExtraNumber === true) {
                        result = 1;
                    }
                    else {
                        result = 1;
                    }
                    break;
                default:
                    result = 0;
            }
        }
        return result;
    };
    Mark6Service.prototype.calMultipleChance = function (iTotalLegs, matchLegs, includeExtraNumber) {
        var result = new Array();
        if (matchLegs < 3) {
            return result;
        }
        var legs = matchLegs;
        var totalBetLegs = iTotalLegs;
        var remainLegs = totalBetLegs - legs;
        if (totalBetLegs > 6) {
            if (includeExtraNumber === true) {
                if (legs === 7) {
                    legs = legs - 1;
                }
                // include extra no
                for (var i = legs; i >= 1; i--) {
                    var prizeType = this.getMultiplePrizeType(i, true);
                    if (prizeType === 0) {
                        break;
                    }
                    var currentLeg = i - 1;
                    var totalLegs = matchLegs - 1;
                    var totalBets = this.nCr(totalLegs, currentLeg);
                    totalBets = Math.round(totalBets);
                    var matchBets = totalBets;
                    if (6 - currentLeg > 1) {
                        matchBets = matchBets * this.nCr(remainLegs, (6 - currentLeg - 1));
                    }
                    var prize = {
                        'PRIZE': prizeType,
                        'MATCH': matchBets
                    };
                    result.push(prize);
                }
                // not include extra no
                legs = matchLegs - 1;
                // for(var i : Int32 = legs; i > 0; i--) {
                // for i in stride(from: legs, to: 1, by: -1) {
                for (var i = legs; i >= 1; i--) {
                    if (i + remainLegs < 6) {
                        break;
                    }
                    var prizeType = this.getMultiplePrizeType(i, false);
                    if (prizeType === 0) {
                        break;
                    }
                    var currentLeg = i;
                    var totalLegs = legs;
                    // long matchBets = (long)nCr(totalLegs, currentLeg).longValue();
                    var totalBets = this.nCr(totalLegs, currentLeg);
                    totalBets = Math.round(totalBets);
                    matchBets = totalBets;
                    if (6 - currentLeg > 0) {
                        // matchBets = matchBets * (long)nCr(remainLegs, 6 - currentLeg).longValue();
                        matchBets = matchBets * this.nCr(remainLegs, (6 - currentLeg));
                    }
                    else {
                        matchBets = 0;
                    }
                    if (matchBets > 0) {
                        var prize = {
                            'PRIZE': prizeType,
                            'MATCH': matchBets
                        };
                        console.log(totalLegs, 'include2: prizeType=', i, prize);
                        result.push(prize);
                    }
                }
            }
            else {
                if (legs <= 6) {
                    // for(var i : Int32 = legs; i > 0; i--) {
                    // for i in stride(from: legs, to: 1, by: -1) {
                    for (var i = legs; i >= 1; i--) {
                        var prizeType = this.getMultiplePrizeType(i, false);
                        if (prizeType === 0) {
                            break;
                        }
                        var currentLeg = i;
                        var totalLegs = legs;
                        // long matchBets = nCr(totalLegs, currentLeg).longValue();
                        var totalBets = this.nCr(totalLegs, currentLeg);
                        totalBets = Math.round(totalBets);
                        var matchBets_1 = totalBets;
                        if (6 - currentLeg > 0) {
                            // matchBets = matchBets * nCr(remainLegs, 6 - currentLeg).longValue();
                            matchBets_1 = matchBets_1 * this.nCr(remainLegs, (6 - currentLeg));
                        }
                        if (matchBets_1 > 0) {
                            var prize = {
                                'PRIZE': prizeType,
                                'MATCH': matchBets_1
                            };
                            result.push(prize);
                        }
                    }
                }
            }
        }
        else {
            var prizeType = this.getMultiplePrizeType(legs, includeExtraNumber);
            if (prizeType > 0) {
                var prize = {
                    'PRIZE': prizeType,
                    'MATCH': 1
                };
                result.push(prize);
            }
        }
        // ascending
        result = result.sort(function (a, b) {
            return Number(a['PRIZE']) - Number(b['PRIZE']);
        });
        return result;
    };
    Mark6Service.prototype.calBankerLegChance = function (totalBankerNos, matchBankers, matchBankerNoIncludeExtraNo, totalLegNos, matchLegs, matchLegNoIncludeExtraNo) {
        var result = new Array();
        var totalBetBankers = totalBankerNos;
        var totalBetLegs = totalLegNos;
        var availableLegs = 6 - totalBetBankers;
        if (matchBankerNoIncludeExtraNo || matchLegNoIncludeExtraNo) {
            if (matchBankerNoIncludeExtraNo) {
                if (matchBankers - 1 + availableLegs >= 3 && matchBankers - 1 + matchLegs >= 3) {
                    var currentMatchLegs = (matchLegs > availableLegs) ? availableLegs : matchLegs;
                    var notMatchLegs = totalBetLegs - matchLegs;
                    // include extra no
                    // for i in stride(from: matchBankers, to: 1, by: -1) {
                    for (var i = matchBankers; i > 0; i--) {
                        var prizeNo = matchBankers + currentMatchLegs;
                        var prizeType = this.getMultiplePrizeType(prizeNo, true);
                        if (prizeType === 0) {
                            break;
                        }
                        var notMatchTakenNo = availableLegs - currentMatchLegs;
                        var totalBets1 = this.nCr(matchLegs, currentMatchLegs);
                        var totalBets2 = this.nCr(notMatchLegs, notMatchTakenNo);
                        var totalBets = totalBets1 * totalBets2;
                        totalBets = Math.round(totalBets);
                        var matchBets = totalBets;
                        currentMatchLegs = currentMatchLegs - 1;
                        if (matchBets > 0) {
                            var prize = {
                                'PRIZE': prizeType,
                                'MATCH': matchBets
                            };
                            result.push(prize);
                        }
                    }
                }
            }
            else { // matchLegIncludeExtraNo
                if (matchBankers + availableLegs >= 3 && matchBankers + matchLegs - 1 >= 3) {
                    var currentMatchLegs_1 = (matchLegs > availableLegs) ? availableLegs : matchLegs;
                    var notMatchLegs = totalBetLegs - matchLegs;
                    // include extra no
                    // for i in stride(from: matchBankers, to: 1, by: -1) {
                    for (var i = matchBankers; i >= 1; i--) {
                        var prizeNo = matchBankers + currentMatchLegs_1;
                        var prizeType = this.getMultiplePrizeType(prizeNo, true);
                        if (prizeType === 0) {
                            break;
                        }
                        var notMatchTakenNo = availableLegs - currentMatchLegs_1;
                        currentMatchLegs_1 = currentMatchLegs_1 - 1;
                        var totalBets1 = this.nCr((matchLegs - 1), currentMatchLegs_1);
                        var totalBets2 = this.nCr(notMatchLegs, notMatchTakenNo);
                        var totalBets_1 = totalBets1 * totalBets2;
                        var matchBets = totalBets_1;
                        if (matchBets > 0) {
                            var prize = {
                                'PRIZE': prizeType,
                                'MATCH': matchBets
                            };
                            result.push(prize);
                        }
                    }
                    currentMatchLegs_1 = (matchLegs - 1 > availableLegs) ? availableLegs : matchLegs - 1;
                    // not include extra no
                    // for(var i : Int32 = matchBankers; i > 0; i--) {
                    // for i in stride(from: matchBankers, to: 1, by: -1) {
                    for (var i = matchBankers; i > 0; i--) {
                        var prizeNo = matchBankers + currentMatchLegs_1;
                        var prizeType = this.getMultiplePrizeType(prizeNo, false);
                        if (prizeType === 0) {
                            break;
                        }
                        var notMatchTakenNo = availableLegs - currentMatchLegs_1;
                        var totalBets1 = this.nCr((matchLegs - 1), currentMatchLegs_1);
                        var totalBets2 = this.nCr(notMatchLegs, notMatchTakenNo);
                        var totalBets_2 = totalBets1 * totalBets2;
                        var matchBets = totalBets_2;
                        currentMatchLegs_1 = currentMatchLegs_1 - 1;
                        if (matchBets > 0) {
                            var prize = {
                                'PRIZE': prizeType,
                                'MATCH': matchBets
                            };
                            result.push(prize);
                        }
                    }
                }
            }
        }
        else {
            if (matchBankers >= 3 || (matchLegs >= availableLegs && matchBankers + availableLegs >= 3) || (matchBankers + matchLegs >= 3)) {
                var currentMatchLegs = matchLegs > availableLegs ? availableLegs : matchLegs;
                var notMatchLegs = totalBetLegs - matchLegs;
                //for(var i : Int32 = availableLegs; i >= 0; i--) {
                // for i in stride(from: availableLegs, to: 0, by: -1) {
                for (var i = availableLegs; i >= 0; i--) {
                    var prizeNo = matchBankers + currentMatchLegs;
                    var prizeType = this.getMultiplePrizeType(prizeNo, false);
                    if (prizeType === 0) {
                        break;
                    }
                    var notMatchTakenNo = availableLegs - currentMatchLegs;
                    var totalBets1 = this.nCr(matchLegs, currentMatchLegs);
                    var totalBets2 = this.nCr(notMatchLegs, notMatchTakenNo);
                    var totalBets_3 = totalBets1 * totalBets2;
                    var matchBets = totalBets_3;
                    currentMatchLegs = currentMatchLegs - 1;
                    if (matchBets > 0) {
                        var prize = {
                            'PRIZE': prizeType,
                            'MATCH': matchBets
                        };
                        result.push(prize);
                    }
                }
            }
        }
        // ascending
        result = result.sort(function (a, b) {
            return Number(a['PRIZE']) - Number(b['PRIZE']);
        });
        return result;
    };
    Mark6Service.prototype.formatNumber = function (value) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    Mark6Service.prototype.getTopNumbers = function (m6results) {
        var result = [];
        for (var i = 0; i < 49; i++) {
            result[i] = [];
            result[i][0] = 0;
            result[i][1] = (i + 1);
        }
        if (m6results && m6results.length > 0) {
            m6results.forEach(function (m6result) {
                result[m6result.number1 - 1][0]++;
                result[m6result.number1 - 1][1] = m6result.number1;
                result[m6result.number2 - 1][0]++;
                result[m6result.number2 - 1][1] = m6result.number2;
                result[m6result.number3 - 1][0]++;
                result[m6result.number3 - 1][1] = m6result.number3;
                result[m6result.number4 - 1][0]++;
                result[m6result.number4 - 1][1] = m6result.number4;
                result[m6result.number5 - 1][0]++;
                result[m6result.number5 - 1][1] = m6result.number5;
                result[m6result.number6 - 1][0]++;
                result[m6result.number6 - 1][1] = m6result.number6;
                result[m6result.numberX - 1][0]++;
                result[m6result.numberX - 1][1] = m6result.numberX;
            });
        }
        // descending
        result = result.sort(function (a, b) {
            return b[0] - a[0];
        });
        return result;
    };
    Mark6Service.ɵfac = function Mark6Service_Factory(t) { return new (t || Mark6Service)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService)); };
    Mark6Service.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Mark6Service, factory: Mark6Service.ɵfac, providedIn: 'root' });
    return Mark6Service;
}());



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		47321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		31489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		10305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		15830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		37757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		30392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		66911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		30937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		78695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		16034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		68837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		34195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		41709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33087,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		84513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		58056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		10862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		76272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		71855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		38708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		23527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		24694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		19222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		25277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		39921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		83122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		51602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		76164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		20592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		27162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		81374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		97896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		25043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		77802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		29072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		32191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		40801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		67110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		10431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map