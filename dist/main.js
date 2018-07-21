(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard ></app-dashboard>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: ToolbarModule, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarModule", function() { return ToolbarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_lineale_lineale_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/lineale/lineale.component */ "./src/app/dashboard/lineale/lineale.component.ts");
/* harmony import */ var _dashboard_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/grid/grid.component */ "./src/app/dashboard/grid/grid.component.ts");
/* harmony import */ var _dashboard_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/toolbar/toolbar.component */ "./src/app/dashboard/toolbar/toolbar.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dashboard_toolbar_html_objekt_details_html_objekt_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/toolbar/html-objekt-details/html-objekt-details.component */ "./src/app/dashboard/toolbar/html-objekt-details/html-objekt-details.component.ts");
/* harmony import */ var _dashboard_grid_html_objekt_draggable_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/grid/html-objekt-draggable.directive */ "./src/app/dashboard/grid/html-objekt-draggable.directive.ts");
/* harmony import */ var _dashboard_toolbar_drag_and_drop_toolbox_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/toolbar/drag-and-drop-toolbox.directive */ "./src/app/dashboard/toolbar/drag-and-drop-toolbox.directive.ts");
/* harmony import */ var _dashboard_grid_html_elemente_html_elemente_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/grid/html-elemente/html-elemente.component */ "./src/app/dashboard/grid/html-elemente/html-elemente.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _dashboard_toolbar_import_json_import_json_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/toolbar/import-json/import-json.component */ "./src/app/dashboard/toolbar/import-json/import-json.component.ts");
/* harmony import */ var _dashboard_toolbar_import_xml_import_xml_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard/toolbar/import-xml/import-xml.component */ "./src/app/dashboard/toolbar/import-xml/import-xml.component.ts");
/* harmony import */ var _dashboard_toolbar_html_objekt_details_html_attribute_html_attribute_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard/toolbar/html-objekt-details/html-attribute/html-attribute.component */ "./src/app/dashboard/toolbar/html-objekt-details/html-attribute/html-attribute.component.ts");
/* harmony import */ var _dashboard_toolbar_code_inspector_code_inspector_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/toolbar/code-inspector/code-inspector.component */ "./src/app/dashboard/toolbar/code-inspector/code-inspector.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var ToolbarModule = /** @class */ (function () {
    function ToolbarModule() {
    }
    ToolbarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"]
            ],
            declarations: [_dashboard_toolbar_import_json_import_json_component__WEBPACK_IMPORTED_MODULE_14__["ImportJSONComponent"], _dashboard_toolbar_import_xml_import_xml_component__WEBPACK_IMPORTED_MODULE_15__["ImportXmlComponent"]],
        })
    ], ToolbarModule);
    return ToolbarModule;
}());

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                _dashboard_lineale_lineale_component__WEBPACK_IMPORTED_MODULE_5__["LinealeComponent"],
                _dashboard_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"],
                _dashboard_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__["ToolbarComponent"],
                _dashboard_toolbar_html_objekt_details_html_objekt_details_component__WEBPACK_IMPORTED_MODULE_9__["HTMLObjektDetailsComponent"],
                _dashboard_grid_html_objekt_draggable_directive__WEBPACK_IMPORTED_MODULE_10__["HtmlObjektDraggableDirective"],
                _dashboard_toolbar_drag_and_drop_toolbox_directive__WEBPACK_IMPORTED_MODULE_11__["DragAndDropToolboxDirective"],
                _dashboard_grid_html_elemente_html_elemente_component__WEBPACK_IMPORTED_MODULE_12__["HtmlElementeComponent"],
                _dashboard_toolbar_html_objekt_details_html_attribute_html_attribute_component__WEBPACK_IMPORTED_MODULE_16__["HtmlAttributeComponent"],
                _dashboard_toolbar_code_inspector_code_inspector_component__WEBPACK_IMPORTED_MODULE_17__["CodeInspectorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ToolbarModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            entryComponents: [_dashboard_lineale_lineale_component__WEBPACK_IMPORTED_MODULE_5__["LinealeComponent"], _dashboard_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"], _dashboard_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__["ToolbarComponent"], _dashboard_toolbar_import_json_import_json_component__WEBPACK_IMPORTED_MODULE_14__["ImportJSONComponent"], _dashboard_toolbar_import_xml_import_xml_component__WEBPACK_IMPORTED_MODULE_15__["ImportXmlComponent"], _dashboard_toolbar_code_inspector_code_inspector_component__WEBPACK_IMPORTED_MODULE_17__["CodeInspectorComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/aufloesung.service.ts":
/*!***************************************!*\
  !*** ./src/app/aufloesung.service.ts ***!
  \***************************************/
/*! exports provided: AufloesungService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AufloesungService", function() { return AufloesungService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bildschirm_qhd_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bildschirm-qhd.enum */ "./src/app/bildschirm-qhd.enum.ts");
/* harmony import */ var _bildschirm_hd_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bildschirm-hd.enum */ "./src/app/bildschirm-hd.enum.ts");
/* harmony import */ var _bildschirm_uhd_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bildschirm-uhd.enum */ "./src/app/bildschirm-uhd.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
*    Diese Klasse ermittelt die aktuelle Breite des Broswer und gibt
*    ein Enum zurück, welches Informationen zu der Auflösung bereit hält.
*
*    @author Samuel Werner <samuel.werner@iem.thm.de>
*/
var AufloesungService = /** @class */ (function () {
    function AufloesungService() {
    }
    // Gibt die Auflösung anhand der Browser-Weite zurück
    // noinspection JSMethodCanBeStatic
    AufloesungService.prototype.getAufloesung = function () {
        var weiteBildschirm = window.innerWidth;
        if (weiteBildschirm < _bildschirm_qhd_enum__WEBPACK_IMPORTED_MODULE_1__["BildschirmQHD"].maximaleWeite) {
            return _bildschirm_qhd_enum__WEBPACK_IMPORTED_MODULE_1__["BildschirmQHD"];
        }
        else if (weiteBildschirm < _bildschirm_hd_enum__WEBPACK_IMPORTED_MODULE_2__["BildschirmHD"].maximaleWeite) {
            return _bildschirm_hd_enum__WEBPACK_IMPORTED_MODULE_2__["BildschirmHD"];
        }
        else if (weiteBildschirm < _bildschirm_uhd_enum__WEBPACK_IMPORTED_MODULE_3__["BildschirmUHD"].maximaleWeite) {
            return _bildschirm_uhd_enum__WEBPACK_IMPORTED_MODULE_3__["BildschirmUHD"];
        }
        return _bildschirm_uhd_enum__WEBPACK_IMPORTED_MODULE_3__["BildschirmUHD"];
    };
    AufloesungService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AufloesungService);
    return AufloesungService;
}());



/***/ }),

/***/ "./src/app/bildschirm-hd.enum.ts":
/*!***************************************!*\
  !*** ./src/app/bildschirm-hd.enum.ts ***!
  \***************************************/
/*! exports provided: BildschirmHD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BildschirmHD", function() { return BildschirmHD; });
var BildschirmHD;
(function (BildschirmHD) {
    BildschirmHD["bezeichnung"] = "HD";
    BildschirmHD[BildschirmHD["aufteilungLineal"] = 24] = "aufteilungLineal";
    BildschirmHD[BildschirmHD["weiteAufteilungLineal"] = 100] = "weiteAufteilungLineal";
    BildschirmHD[BildschirmHD["maximaleWeite"] = 2400] = "maximaleWeite";
    BildschirmHD[BildschirmHD["gridBorderBreit"] = 2] = "gridBorderBreit";
    BildschirmHD[BildschirmHD["gridBorderFein"] = 1] = "gridBorderFein";
})(BildschirmHD || (BildschirmHD = {}));


/***/ }),

/***/ "./src/app/bildschirm-qhd.enum.ts":
/*!****************************************!*\
  !*** ./src/app/bildschirm-qhd.enum.ts ***!
  \****************************************/
/*! exports provided: BildschirmQHD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BildschirmQHD", function() { return BildschirmQHD; });
var BildschirmQHD;
(function (BildschirmQHD) {
    BildschirmQHD["bezeichnung"] = "QHD";
    BildschirmQHD[BildschirmQHD["aufteilungLineal"] = 18] = "aufteilungLineal";
    BildschirmQHD[BildschirmQHD["weiteAufteilungLineal"] = 50] = "weiteAufteilungLineal";
    BildschirmQHD[BildschirmQHD["maximaleWeite"] = 900] = "maximaleWeite";
    BildschirmQHD[BildschirmQHD["gridBorderBreit"] = 1] = "gridBorderBreit";
    BildschirmQHD[BildschirmQHD["gridBorderFein"] = 0.5] = "gridBorderFein";
})(BildschirmQHD || (BildschirmQHD = {}));


/***/ }),

/***/ "./src/app/bildschirm-uhd.enum.ts":
/*!****************************************!*\
  !*** ./src/app/bildschirm-uhd.enum.ts ***!
  \****************************************/
/*! exports provided: BildschirmUHD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BildschirmUHD", function() { return BildschirmUHD; });
var BildschirmUHD;
(function (BildschirmUHD) {
    BildschirmUHD["bezeichnung"] = "UHD";
    BildschirmUHD[BildschirmUHD["aufteilungLineal"] = 18] = "aufteilungLineal";
    BildschirmUHD[BildschirmUHD["weiteAufteilungLineal"] = 300] = "weiteAufteilungLineal";
    BildschirmUHD[BildschirmUHD["maximaleWeite"] = 5000] = "maximaleWeite";
    BildschirmUHD[BildschirmUHD["gridBorderBreit"] = 4] = "gridBorderBreit";
    BildschirmUHD[BildschirmUHD["gridBorderFein"] = 2] = "gridBorderFein";
})(BildschirmUHD || (BildschirmUHD = {}));


/***/ }),

/***/ "./src/app/dashboard/dashboard-animations.ts":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard-animations.ts ***!
  \***************************************************/
/*! exports provided: DashboardAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardAnimations", function() { return DashboardAnimations; });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/esm/index.js");

/*
*   Diese Component verwaltet die Animationen auf dem Dashboard.
*
*   @author Florian Andreas Schaefer  <florian.andreas.schaefer@iem.thm.de>
*/
var DashboardAnimations = /** @class */ (function () {
    function DashboardAnimations() {
    }
    // Methode um das zu Löschende Objekt unsichtbar werden zu lassen, bevor es gelöscht wird.
    DashboardAnimations.animiereLoeschendesObjekt = function () {
        var elementId = document.getElementsByClassName('selected');
        var JelementId = JSON.stringify(document.getElementsByClassName('selected'));
        var buttonclass = JSON.stringify(document.getElementsByClassName('button selected'));
        // JSON Stringify um zu überprüfen ob das ausgewählte Objekt aus der Toolbox stammt.
        if (JelementId !== buttonclass) {
            gsap__WEBPACK_IMPORTED_MODULE_0__["TweenMax"].to(elementId, 0.5, {
                opacity: 0,
            });
        }
    };
    DashboardAnimations.animiereBeiKlickDrag = function (elementId) {
        gsap__WEBPACK_IMPORTED_MODULE_0__["TweenMax"].to(elementId, 0.1, {
            css: {
                boxShadow: '8px 8px 8px 8px rgba(0,0,0,0.50)',
            },
            yoyo: false
        });
    };
    DashboardAnimations.animiereBeiKlickDrop = function (elementId) {
        gsap__WEBPACK_IMPORTED_MODULE_0__["TweenMax"].to(elementId, 0.2, {
            css: {
                boxShadow: '0px 0px 0px 0px'
            }
        });
    };
    return DashboardAnimations;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-settings.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/dashboard-settings.service.ts ***!
  \*********************************************************/
/*! exports provided: DashboardSettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardSettingsService", function() { return DashboardSettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings */ "./src/app/dashboard/settings.ts");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Created by Sabrina Adam <sabrina.adam@iem.thm.de>  on 07.06.2018
 * Diese Komponente gewähleistet das weiterreichen der Nutzereinstellungen aus der Toolbox (siehe html-objekt-details)
 * an die jeweilig anzupassende Komponente
 * Damit ein Initialwert für die Einstellungen übergeben werden kann wird hier anstatt einem normalen Subject
 * ein BehaviourSubject verwendet.
 */
var DashboardSettingsService = /** @class */ (function () {
    function DashboardSettingsService() {
        this.myMethodSubject = new rxjs_index__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new _settings__WEBPACK_IMPORTED_MODULE_1__["settings"]());
        this.myMethod$ = this.myMethodSubject.asObservable();
    }
    DashboardSettingsService.prototype.settingsVerteilen = function (data) {
        // An alle verteilen die sich am Service angemeldet haben
        this.myMethodSubject.next(data);
    };
    DashboardSettingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DashboardSettingsService);
    return DashboardSettingsService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* @author Samuel Werner <samuel.werner@iem.thm.de> */\r\n#dashboard {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  border: 0;\r\n  overflow: hidden;\r\n  z-index: 1;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- @author Samuel Werner <samuel.werner@iem.thm.de -->\r\n<div id=\"dashboard\">\r\n\r\n    <span #lineale></span>\r\n  <span #grid></span>\r\n  <div #toolbar></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lineale_lineale_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lineale/lineale.component */ "./src/app/dashboard/lineale/lineale.component.ts");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/dashboard/grid/grid.component.ts");
/* harmony import */ var _aufloesung_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../aufloesung.service */ "./src/app/aufloesung.service.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/dashboard/toolbar/toolbar.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
*   Diese Klasse führt alle Teil-Komponenten dynamisch zusammen.
*   Dynamisch bedeutet in diesem Fall, dass die Klasse auf Änderungen
*   der Browser-Fenster Größe reagiert und die Komponenten neu lädt
*
*   @author Samuel Werner <samuel.werner@iem.thm.de>
*/
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(aufloesungService, // Auflösung des Bildschirms ermitteln
    componentFactoryResolver, meta) {
        this.aufloesungService = aufloesungService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.meta = meta;
        this.meta.addTag({
            name: 'Content-Security-Policy',
            content: 'connect-src \'self\' file: data: blob: filesystem:; default-src *; style-src \'self\' \'unsafe-inline\';' +
                ' script-src \'self\' \'unsafe-inline\' \'unsafe-eval\''
        });
    }
    DashboardComponent.prototype.onResize = function (event) {
        if (this.oldWidth !== event.target.innerWidth) {
            this.oldWidth = event.target.innerWidth;
            this.dashboardErstellen();
        }
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.dashboardErstellen();
        this.oldWidth = window.innerWidth;
    };
    DashboardComponent.prototype.dashboardErstellen = function () {
        // Lineale dynmaisch laden
        var componentFactoryLineale = this.componentFactoryResolver.resolveComponentFactory(_lineale_lineale_component__WEBPACK_IMPORTED_MODULE_1__["LinealeComponent"]);
        var viewContainerRefLineale = this.linealeComponentHost;
        viewContainerRefLineale.clear();
        viewContainerRefLineale.createComponent(componentFactoryLineale);
        // Dashboard Grid dynamisch laden.
        var componentFactoryGrid = this.componentFactoryResolver.resolveComponentFactory(_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"]);
        var viewContainerRefGrid = this.gridComponentHost;
        viewContainerRefGrid.clear();
        viewContainerRefGrid.createComponent(componentFactoryGrid);
        // Toolbar dynamisch laden.
        var componentFactoryToolbar = this.componentFactoryResolver.resolveComponentFactory(_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_4__["ToolbarComponent"]);
        var viewContainerRefToolbar = this.toolbarComponentHost;
        viewContainerRefToolbar.clear();
        viewContainerRefToolbar.createComponent(componentFactoryToolbar);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('lineale', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", Object)
    ], DashboardComponent.prototype, "linealeComponentHost", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('grid', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", Object)
    ], DashboardComponent.prototype, "gridComponentHost", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('toolbar', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", Object)
    ], DashboardComponent.prototype, "toolbarComponentHost", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DashboardComponent.prototype, "onResize", null);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_aufloesung_service__WEBPACK_IMPORTED_MODULE_3__["AufloesungService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Meta"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/grid-objekte.service.ts":
/*!***************************************************!*\
  !*** ./src/app/dashboard/grid-objekte.service.ts ***!
  \***************************************************/
/*! exports provided: GridObjekteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridObjekteService", function() { return GridObjekteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
*   Diese Klasse verwaltet alle Objekte die auf dem Dashboard liegen.
*   @author Samuel Werner <samuel.werner@iem.thm.de>
*   @Bearbeitet von Florian Andreas Schäfer <florian.andreas.schaefer@iem.thm.de>
*   @Bearbeitet von Yavuz Bulunmaz
*/
var GridObjekteService = /** @class */ (function () {
    function GridObjekteService() {
        this.htmlObjekte = Array();
        this.globalObjektID = 0;
        this.aktuelleSeitenId = 'homepage';
    }
    GridObjekteService.prototype.htmlObjektHinzufuegen = function (neuesObjekt) {
        this.globalObjektID++;
        neuesObjekt.id = this.globalObjektID;
        this.htmlObjekte.push(neuesObjekt);
        this.abspeichern(this.aktuelleSeitenId);
        if (neuesObjekt.innereHTMLObjekte.length > 0) {
            this.rekursivGlobalIDVergeben(neuesObjekt);
        }
    };
    GridObjekteService.prototype.rekursivGlobalIDVergeben = function (obj) {
        if (null == obj.id) {
            this.globalObjektID++;
            obj.id = this.globalObjektID;
        }
        if (obj.innereHTMLObjekte.length > 0) {
            for (var _i = 0, _a = obj.innereHTMLObjekte; _i < _a.length; _i++) {
                var htmlObj = _a[_i];
                this.rekursivGlobalIDVergeben(htmlObj);
            }
        }
    };
    GridObjekteService.prototype.htmlObjektGlobalIDFuerInnereElementeErzeugen = function (obj) {
        if (obj.innereHTMLObjekte.length > 0) {
            this.rekursivGlobalIDVergeben(obj);
        }
    };
    GridObjekteService.prototype.getGridHtmlObjekte = function () {
        if (this.htmlObjekte.length === 0) {
            this.laden();
        }
        return this.htmlObjekte;
    };
    GridObjekteService.prototype.objektAnhandDerIDHolen = function (id) {
        return this.objektAnhandDerIDHolenRekursiv(id, this.htmlObjekte);
    };
    GridObjekteService.prototype.objektAnhandDerIDHolenRekursiv = function (id, objekte) {
        for (var _i = 0, objekte_1 = objekte; _i < objekte_1.length; _i++) {
            var htmlObjekt = objekte_1[_i];
            if (htmlObjekt.id + '' === id + '') {
                return htmlObjekt;
            }
            else if (htmlObjekt.innereHTMLObjekte != null && htmlObjekt.innereHTMLObjekte.length > 0) {
                var match = this.objektAnhandDerIDHolenRekursiv(id, htmlObjekt.innereHTMLObjekte);
                if (match != null) {
                    return (match);
                }
            }
        }
    };
    GridObjekteService.prototype.htmlObjekteLoeschen = function () {
        this.htmlObjekte.splice(0, this.htmlObjekte.length);
        this.globalObjektID = 0;
        this.abspeichern(this.aktuelleSeitenId);
    };
    GridObjekteService.prototype.einzelnesHtmlObjektLoeschen = function (obj) {
        this.einzelnesHtmlObjektLoeschenRekursiv(obj, this.htmlObjekte);
    };
    GridObjekteService.prototype.einzelnesHtmlObjektLoeschenRekursiv = function (obj, htmlObjekte) {
        var index = -1;
        if (null != htmlObjekte) {
            index = htmlObjekte.indexOf(obj);
        }
        if (index !== -1) {
            htmlObjekte.splice(index, 1);
            this.abspeichern(this.aktuelleSeitenId);
        }
        else {
            if (null != htmlObjekte) {
                for (var _i = 0, htmlObjekte_1 = htmlObjekte; _i < htmlObjekte_1.length; _i++) {
                    var htmlObjekt = htmlObjekte_1[_i];
                    this.einzelnesHtmlObjektLoeschenRekursiv(obj, htmlObjekt.innereHTMLObjekte);
                }
            }
        }
    };
    GridObjekteService.prototype.abspeichern = function (gewaehlteSeite) {
        localStorage.setItem(gewaehlteSeite, JSON.stringify(this.htmlObjekte));
    };
    GridObjekteService.prototype.laden = function () {
        var Id = localStorage.getItem('aktuelleSeitenId');
        this.setzeAktuelleSeitenId(Id);
        var eintraegeArray = localStorage.getItem(Id);
        if (null != eintraegeArray) {
            this.htmlObjekte = JSON.parse(eintraegeArray);
        }
        if (null == this.htmlObjekte) {
            this.htmlObjekte = new Array();
        }
        this.globalIdEinlesen();
    };
    GridObjekteService.prototype.setzeAktuelleSeitenId = function (eigeneId) {
        this.aktuelleSeitenId = eigeneId;
    };
    GridObjekteService.prototype.holeAktuelleSeitenId = function () {
        return this.aktuelleSeitenId;
    };
    /*
    Die Methode ruft die rekursive Methode alleElementeAlsXMLRekursiv(..)
    auf um alle HTMLObjekte auf dem Grid in ein XML Format zu parsen.
    Dabei wird auf die inneren HTML Objekte rekursiv zugegriffen.
     */
    GridObjekteService.prototype.alleElementeAlsXML = function () {
        var result = '';
        result += '<grid>' + this.alleElementeAlsXMLRekursiv(this.htmlObjekte) + '</grid>';
        return result;
    };
    GridObjekteService.prototype.alleElementeAlsXMLRekursiv = function (objekte) {
        var result = '';
        for (var _i = 0, objekte_2 = objekte; _i < objekte_2.length; _i++) {
            var htmlObjekt = objekte_2[_i];
            if (htmlObjekt.innereHTMLObjekte == null || htmlObjekt.innereHTMLObjekte.length <= 0) {
                result += '<htmlObjekt>' + '' +
                    '<innereHTMLObjekte></innereHTMLObjekte>' +
                    this.jsonObjectToXml(htmlObjekt) +
                    '<' + '/' + 'htmlObjekt>';
            }
            else {
                result += '<htmlObjekt>' + this.jsonObjectToXml(htmlObjekt) +
                    '<innereHTMLObjekte>' +
                    this.alleElementeAlsXMLRekursiv(htmlObjekt.innereHTMLObjekte) +
                    '</innereHTMLObjekte>' + '<' + '/' + 'htmlObjekt>';
            }
        }
        return result;
    };
    GridObjekteService.prototype.xmlInJSONumwandelnUndInGridLaden = function (text) {
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(text, 'text/xml');
        var x = xmlDoc.documentElement.childNodes;
        localStorage.setItem(this.aktuelleSeitenId, '[' + this.xmlInJsonUmwandelnRekursiv(x) + ']');
        window.location.reload();
    };
    GridObjekteService.prototype.JSONInGridLaden = function (text) {
        localStorage.setItem(this.aktuelleSeitenId, text);
        window.location.reload();
    };
    GridObjekteService.prototype.xmlInJsonUmwandelnRekursiv = function (kindKnoten) {
        var result = '';
        for (var i = 0; i < kindKnoten.length; i++) {
            if ((null != kindKnoten[i].nodeName)) {
                // Abfrage testet ob das HTMLObjekt Kinder hat. Falls ja, wird das Element mit Kindern anders behandelt und
                // alle Kinder werden dabei in das Eltern-Element gelegt.
                if (kindKnoten[i].nodeName === 'htmlObjekt' || kindKnoten[i].nodeName === 'grid') {
                    // grid und htmlObjekt werden ignoriert und durch eine öffnende und schließende geschweifte Klammer ersetzt.
                    result += '{' + this.xmlInJsonUmwandelnRekursiv(kindKnoten[i].childNodes) + '}';
                }
                else if (kindKnoten[i].nodeName === 'innereHTMLObjekte') {
                    // Kinder von dem Knoten erkannt und innerhalb von dem Knoten innereHTMLObjekte aufbauen
                    result += '"innereHTMLObjekte":[' + this.xmlInJsonUmwandelnRekursiv(kindKnoten[i].childNodes) + ']';
                }
                else if (null != kindKnoten[i].childNodes && null != kindKnoten[i].childNodes[0]) {
                    // Ansonsten die Werte des Knotens auslesen und innerhalb des Knotens ausgeben
                    if (kindKnoten[i].childNodes[0].nodeValue === 'false' || kindKnoten[i].childNodes[0].nodeValue === 'true') {
                        // Bei true oder false keine Hochkommata
                        result += '"' + kindKnoten[i].nodeName + '":' + kindKnoten[i].childNodes[0].nodeValue;
                    }
                    else {
                        result += '"' + kindKnoten[i].nodeName + '":"' + kindKnoten[i].childNodes[0].nodeValue + '"';
                    }
                    this.xmlInJsonUmwandelnRekursiv(kindKnoten[i].childNodes);
                }
                else {
                    continue;
                }
                if (i !== (kindKnoten.length - 1)) {
                    result += ',';
                }
            }
        }
        return result;
    };
    // Die Methode wandelt ein HTMLObjekt in eine XML Struktur um
    GridObjekteService.prototype.jsonObjectToXml = function (obj) {
        var xml = '';
        for (var prop in obj) {
            if (!obj.hasOwnProperty(prop)) {
                continue;
            }
            if (obj[prop] === undefined) {
                continue;
            }
            if (prop === 'innereHTMLObjekte') {
                continue;
            }
            xml += '<' + prop + '>';
            if (typeof obj[prop] !== 'object') {
                xml += obj[prop];
            }
            xml += '</' + prop + '>';
        }
        return xml;
    };
    // Beim Laden muss die aktuell höchste globale ID ermittelt werden
    // Damit neu erstellte Objekte wieder eine korrekte ID bekommen.
    GridObjekteService.prototype.globalIdEinlesen = function () {
        return this.globalIdEinlesenRekursiv(this.htmlObjekte);
    };
    GridObjekteService.prototype.globalIdEinlesenRekursiv = function (objekte) {
        for (var _i = 0, objekte_3 = objekte; _i < objekte_3.length; _i++) {
            var obj = objekte_3[_i];
            if (obj.id >= this.globalObjektID) {
                this.globalObjektID = obj.id;
            }
            if (obj.innereHTMLObjekte != null && obj.innereHTMLObjekte.length > 0) {
                this.globalIdEinlesenRekursiv(obj.innereHTMLObjekte);
            }
        }
    };
    GridObjekteService.prototype.animationZueruecksetzen = function () {
        for (var _i = 0, _a = this.htmlObjekte; _i < _a.length; _i++) {
            var obj = _a[_i];
            obj.animationStatus = 'stop';
        }
    };
    GridObjekteService.prototype.positionAllerObjekteAufDemGridVeraendern = function (position, widthAussschalten) {
        for (var _i = 0, _a = this.htmlObjekte; _i < _a.length; _i++) {
            var obj = _a[_i];
            obj.animationStatus = 'change';
            obj.position = position;
            obj.widthAusschalten = widthAussschalten;
        }
    };
    GridObjekteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], GridObjekteService);
    return GridObjekteService;
}());



/***/ }),

/***/ "./src/app/dashboard/grid/grid.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/grid/grid.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* @author Sabrina Adam <sabrina.adam@iem.thm.de>*/\r\n\r\n/*noinspection ALL*/\r\n\r\n.dropzoneBoxHD {\r\n  display: inline-block;\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\n/*noinspection CssUnusedSymbol*/\r\n\r\n.dropzoneBoxHD:hover {\r\n  background-color: rgba(103, 255, 45, 0.28);\r\n}\r\n\r\n/*noinspection CssUnusedSymbol*/\r\n\r\n.dropzoneBoxUHD {\r\n  display: inline-block;\r\n  width: 100px;\r\n  height: 100px;\r\n}\r\n\r\n/*noinspection ALL*/\r\n\r\n.dropzoneBoxUHD:hover {\r\n  background-color: rgba(103, 255, 45, 0.28);\r\n}\r\n\r\n/*noinspection CssUnusedSymbol*/\r\n\r\n.dropzoneDashboardUHD {\r\n  top: 58px !important;\r\n  left: 58px !important;\r\n  position: absolute;\r\n}\r\n\r\n/*noinspection CssUnusedSymbol*/\r\n\r\n.dropzoneDashboardHD {\r\n  top: 19px !important;\r\n  left: 19px !important;\r\n  position: absolute;\r\n}\r\n\r\n/*noinspection CssUnusedSymbol*/\r\n\r\n.dropzoneDashboardQHD {\r\n  top: 19px !important;\r\n  left: 19px !important;\r\n  position: absolute;\r\n}\r\n\r\n#dropzoneDashboard{\r\n  overflow:scroll;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/dashboard/grid/grid.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/grid/grid.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  @author Sabrina Adam <sabrina.adam@iem.thm.de>\r\n      @author Samuel Werner <samuel.werner@iem.thm.de>-->\r\n<div #gridWrapper [ngStyle]='styles'\r\n      id=\"dropzoneDashboard\"\r\n     #grid (click)=\"htmlElementEinfuegen($event, 'dropzoneDashboard');\">\r\n<div app-html-elemente></div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/grid/grid.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/grid/grid.component.ts ***!
  \**************************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _aufloesung_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../aufloesung.service */ "./src/app/aufloesung.service.ts");
/* harmony import */ var _html_objekte_HTMLObjekt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../html-objekte/HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
/* harmony import */ var _grid_objekte_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../grid-objekte.service */ "./src/app/dashboard/grid-objekte.service.ts");
/* harmony import */ var _html_objekt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../html-objekt.service */ "./src/app/dashboard/html-objekt.service.ts");
/* harmony import */ var _dashboard_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dashboard-settings.service */ "./src/app/dashboard/dashboard-settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
*   Diese Klasse erstellt das Grid des Dahsboards.
*   Mithilfe des Auflösungsservice wird das Grid dynamisch an die Auflösung angepasst.
*
*   @author Samuel Werner <samuel.werner@iem.thm.de>
*   @author Sabrina Adam <sabrina.adam@iem.thm.de>
*/
/*  Draggable von GreenSock wird in der Clariframer/src/index.html global eingebunden.
*   Die Draggable Variable ermöglicht es uns von TypeScript aus auf eine Javascript
*   Bibliothek zuzugreifen. Dabei muss die Variable den Namen einer Klasse in der Bibliothek besitzen.
*   In diesem Fall nutzen wir also die gleichlautende Klasse aus der GreenSock Bibliothek.
*/
var GridComponent = /** @class */ (function () {
    function GridComponent(aufloesungService, // Auflösung des Bildschirms ermitteln
    renderer, // Wird zur DOM-Manipulation benötigt
    htmlObjektService, gridObjekteService, dashboardSettingsService) {
        var _this = this;
        this.aufloesungService = aufloesungService;
        this.renderer = renderer;
        this.htmlObjektService = htmlObjektService;
        this.gridObjekteService = gridObjekteService;
        this.dashboardSettingsService = dashboardSettingsService;
        this.linealTeil = this.aufloesungService.getAufloesung().weiteAufteilungLineal;
        this.linealUnterteilung = this.aufloesungService.getAufloesung().weiteAufteilungLineal / 10;
        this.gridLinieBreit = this.aufloesungService.getAufloesung().gridBorderBreit;
        this.gridLinieFein = this.aufloesungService.getAufloesung().gridBorderFein;
        // An dem HTML-Objekt Service anmelden und über Änderungen informiert werden
        this.htmlObjektService.myMethod$.subscribe(function (data) {
            _this.ausgewaehltesObjekt = data;
        });
        // An dem DashboardSettings Service anmelden und über Änderungen informiert werden
        this.dashboardSettingsService.myMethod$.subscribe(function (data) {
            _this.settings = data;
            _this.gridCSSerstellen();
        });
    }
    GridComponent.prototype.ngOnInit = function () {
        this.gridCSSerstellen();
        // Abstand zu den Linealen je nach Auflösung
        this.renderer.addClass(this.gridWrapper.nativeElement, 'dropzoneDashboard' + this.aufloesungService.getAufloesung().bezeichnung);
        this.gridCSSerstellen();
    };
    GridComponent.prototype.htmlElementEinfuegen = function (event, targetID) {
        if (this.testenObObjektAufDemGridEingefuegtWerdenDarf(targetID)) {
            var neuesInneresObjekt = Object.assign([], this.ausgewaehltesObjekt.innereHTMLObjekte);
            var neuesObjekt = Object.assign(new _html_objekte_HTMLObjekt__WEBPACK_IMPORTED_MODULE_2__["HTMLObjekt"](), this.ausgewaehltesObjekt); // Deep Copy
            neuesObjekt.innereHTMLObjekte = neuesInneresObjekt;
            neuesObjekt.position_x = Math.round(event.layerX / this.linealUnterteilung) * this.linealUnterteilung + 'px';
            neuesObjekt.position_y = Math.round(event.layerY / this.linealUnterteilung) * this.linealUnterteilung + 'px';
            neuesObjekt.liegtAufDemGrid = true;
            this.gridObjekteService.htmlObjektHinzufuegen(neuesObjekt);
        }
    };
    GridComponent.prototype.testenObObjektAufDemGridEingefuegtWerdenDarf = function (targetID) {
        if (null != this.ausgewaehltesObjekt) {
            // Element darf nur auf der dropzone eingefuegt werden
            if ((targetID === 'dropzoneDashboard')) {
                // Verhindern das Elemente von Grid wieder in das Grid eingefügt werden können
                if (!this.ausgewaehltesObjekt.liegtAufDemGrid) {
                    return true;
                }
            }
        }
        return false;
    };
    GridComponent.prototype.gridCSSerstellen = function () {
        if (this.settings.zeigeGrid && this.settings.gridFarbe !== 'white') {
            this.gridFarbe = this.settings.gridFarbe;
        }
        else if (this.settings.zeigeGrid && this.settings.gridFarbe === 'white') {
            this.gridFarbe = '#d8d8d8';
        }
        else {
            this.gridFarbe = 'white';
        }
        this.styles = {
            'margin': '0px auto',
            'width': '100vw',
            'height': '100vh',
            'background-color': 'white',
            'background-image': 'linear-gradient(' + this.gridFarbe + ' ' + this.gridLinieBreit + 'px, transparent 2px),' +
                'linear-gradient(90deg,' + this.gridFarbe + ' ' + this.gridLinieBreit + 'px, transparent 2px),' +
                'linear-gradient(' + this.gridFarbe + ' ' + this.gridLinieFein + 'px, transparent 1px),' +
                'linear-gradient(90deg,' + this.gridFarbe + ' ' + this.gridLinieFein + 'px, transparent 1px)',
            'background-size': this.linealTeil + 'px ' + this.linealTeil + 'px, ' +
                this.linealTeil + 'px ' + this.linealTeil + 'px, ' +
                this.linealUnterteilung + 'px ' + this.linealUnterteilung + 'px, ' +
                this.linealUnterteilung + 'px ' + this.linealUnterteilung + 'px'
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('grid'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], GridComponent.prototype, "grid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gridWrapper'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], GridComponent.prototype, "gridWrapper", void 0);
    GridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grid',
            template: __webpack_require__(/*! ./grid.component.html */ "./src/app/dashboard/grid/grid.component.html"),
            styles: [__webpack_require__(/*! ./grid.component.css */ "./src/app/dashboard/grid/grid.component.css")]
        }),
        __metadata("design:paramtypes", [_aufloesung_service__WEBPACK_IMPORTED_MODULE_1__["AufloesungService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _html_objekt_service__WEBPACK_IMPORTED_MODULE_4__["HtmlObjektService"],
            _grid_objekte_service__WEBPACK_IMPORTED_MODULE_3__["GridObjekteService"],
            _dashboard_settings_service__WEBPACK_IMPORTED_MODULE_5__["DashboardSettingsService"]])
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/grid/html-elemente/html-elemente.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/grid/html-elemente/html-elemente.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".zeigerDrop {\r\n  position: absolute !important;\r\n  left: -7px !important;\r\n  top: -7px !important;\r\n  width: 25px !important;\r\n  height: 25px !important;\r\n  content: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAACZCAYAAACsT+F1AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH4gYBCBoC8JRIowAAATVJREFUeNrt1CEOACAQA8FC+P+XiycoDGZGnmw2N5I08Nk0AUIEISJEOKzbse0wDT4iQgQhIkQQIkI0AUIEISJEECJCBCEiRBAiQgQhIkQQIkIEISJEECJCBCEiRBAiQgQhIkQQIkIEISJEECJCBCEiRBAiCBEhghARIggRIYIQESIIESGCEBEiCBEhghARIggRIYIQESIIESGCEBEiCBEhghARIggRIYIQESIIEYSIEEGICBGEiBBBiAgRhIgQQYgIEYSIEEGICBGEiBBBiAgRhIgQQYgIEYSIEEGICBGEiBBBiCBEhAhCRIggRIQIQkSIIESECEJEiCBEhAhCRIggRIQIQkSIIESECEJEiCBEhAhCRIggRIQIQkSIIEQQIkIEISJEECJCBCEiRBAiQgQhIkR4sAFu5gUxLa5w9QAAAABJRU5ErkJggg==\");\r\n}\r\n\r\n.selected, .markiertesElement {\r\n  outline: 0.3rem dotted rgba(0, 0, 0, 0.69) !important;\r\n  outline-offset: -3px;\r\n}\r\n\r\n/deep/ .unterSeiteLink {\r\n  cursor: pointer;\r\n}\r\n\r\n/* Formular ######################################################################\r\n\r\ninput{\r\n  font-size: 20px;\r\n}\r\n\r\nselect{\r\n  width:200px;\r\n  height:26px;\r\n  font-size: 18px;\r\n}\r\n\r\ntextarea{\r\n  font-size: 18px;\r\n}\r\n\r\nfieldset{\r\n  font-size: 18px;\r\n}\r\n\r\n.containerFormular{\r\n  margin:0px 20px;\r\n}\r\n\r\ndiv > label{\r\n  width: 100%;\r\n}\r\n\r\nform {\r\n  padding:10px 10px;\r\n  margin:auto;\r\n  background-color: #eee;\r\n  width: 100%;  Breite des Formulars\r\n  min-width:350px;\r\n  max-width: 546px;\r\n  border: 0em solid #8c8c8c;\r\n}\r\n\r\nfieldset{\r\n  border:none;\r\n}\r\n\r\n.center{\r\n  vertical-align: center;\r\n  text-align: center;\r\n  font-size:30px;\r\n  margin-top:30px;\r\n  margin-bottom:30px;\r\n}\r\n\r\n.inputWidth{\r\n  width:100%;\r\n  max-width:400px;\r\n}\r\n\r\n\r\n.buttonRow{\r\n  font-size: 1.2em;\r\n  text-align: right;\r\n  width:100%;\r\n}\r\n\r\nbutton{\r\n  font-family: 'Roboto', sans-serif;\r\n  font-size: 0.8em;\r\n  margin:25px;\r\n  border-radius: 10px;\r\n  border-color:none;\r\n  background-color: blue;\r\n  color:white;\r\n  padding:6px;\r\n  cursor:pointer;\r\n}\r\n\r\n\r\n.boxsizingBorder {\r\n  width:100%;\r\n  height:180px;\r\n  top:210px;\r\n  left:100px;\r\n  max-width: 400px;\r\n}\r\n\r\n.row {\r\n  display: inline-flex;\r\n  width:100%;\r\n}\r\n\r\n.col{\r\n  width:100%;\r\n  margin:10px;\r\n}\r\n\r\n.leftside{\r\n  width:120px;\r\n  font-size:14px;\r\n\r\n  display: -ms-flexbox;\r\n  display: -webkit-flex;\r\n  display: flex;\r\n\r\n  -ms-flex-align: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-align: center;\r\n\r\n  align-items: center;\r\n}\r\n*/\r\n"

/***/ }),

/***/ "./src/app/dashboard/grid/html-elemente/html-elemente.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/grid/html-elemente/html-elemente.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"innerText\">{{innerText}}</ng-container>\r\n\r\n<ng-container *ngFor=\"let htmlObj of htmlObjekte\">\r\n\r\n  <div *ngIf=\"htmlObj.tagName=='div'\"\r\n       [@flyInOut]=\"htmlObj.animationStatus\"\r\n       (@flyInOut.done)=\"animationBeendet($event)\"\r\n       [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n       (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n       (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj)\"\r\n       appHtmlObjektDraggable\r\n       [id]=\"htmlObj.id\"\r\n       [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n       (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n       app-html-elemente\r\n       [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n       [innerText]=\"htmlObj.innererText\"\r\n       [hidden]=\"htmlObj.hidden\"\r\n       [class]=\"htmlObj.class\"\r\n       [dir]=\"htmlObj.dir\"\r\n       [draggable]=\"htmlObj.draggable\"\r\n       [lang]=\"htmlObj.lang\"\r\n       [spellcheck]=\"htmlObj.spellcheck\"\r\n       [tabindex]=\"htmlObj.tabindex\"\r\n       [title]=\"htmlObj.title\"\r\n       [translate]=\"htmlObj.translate\"\r\n       [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n       [attr.dropzone]=\"htmlObj.dropzone\"\r\n       [attr.accesskey]=\"htmlObj.accesskey\">\r\n  </div>\r\n\r\n  <span *ngIf=\"htmlObj.tagName=='span'\"\r\n        [@flyInOut]=\"htmlObj.animationStatus\"\r\n        (@flyInOut.done)=\"animationBeendet($event)\"\r\n        [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n        (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n        (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj);\"\r\n        appHtmlObjektDraggable\r\n        [id]=\"htmlObj.id\"\r\n        [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n        (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n        app-html-elemente\r\n        [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n        [innerText]=\"htmlObj.innererText\"\r\n        [hidden]=\"htmlObj.hidden\"\r\n        [class]=\"htmlObj.class\"\r\n        [dir]=\"htmlObj.dir\"\r\n        [draggable]=\"htmlObj.draggable\"\r\n        [lang]=\"htmlObj.lang\"\r\n        [spellcheck]=\"htmlObj.spellcheck\"\r\n        [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n        [attr.dropzone]=\"htmlObj.dropzone\"\r\n        [attr.accesskey]=\"htmlObj.accesskey\"\r\n        [tabindex]=\"htmlObj.tabindex\"\r\n        [title]=\"htmlObj.title\"\r\n        [translate]=\"htmlObj.translate\">\r\n  </span>\r\n\r\n  <table *ngIf=\"htmlObj.tagName=='table'\"\r\n         [@flyInOut]=\"htmlObj.animationStatus\"\r\n         (@flyInOut.done)=\"animationBeendet($event)\"\r\n         [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n         (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n         (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj)\"\r\n         appHtmlObjektDraggable\r\n         [id]=\"htmlObj.id\"\r\n         [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n         (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n         app-html-elemente\r\n         [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n         [hidden]=\"htmlObj.hidden\"\r\n         [class]=\"htmlObj.class\"\r\n         [dir]=\"htmlObj.dir\"\r\n         [draggable]=\"htmlObj.draggable\"\r\n         [lang]=\"htmlObj.lang\"\r\n         [spellcheck]=\"htmlObj.spellcheck\"\r\n         [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n         [attr.dropzone]=\"htmlObj.dropzone\"\r\n         [attr.accesskey]=\"htmlObj.accesskey\"\r\n         [tabindex]=\"htmlObj.tabindex\"\r\n         [title]=\"htmlObj.title\"\r\n         [translate]=\"htmlObj.translate\">\r\n  </table>\r\n\r\n  <tr *ngIf=\"htmlObj.tagName=='tr'\"\r\n      app-html-elemente\r\n      [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n      [hidden]=\"htmlObj.hidden\"\r\n      [class]=\"htmlObj.class\"\r\n      [dir]=\"htmlObj.dir\"\r\n      [draggable]=\"htmlObj.draggable\"\r\n      [lang]=\"htmlObj.lang\"\r\n      [spellcheck]=\"htmlObj.spellcheck\"\r\n      [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n      [attr.dropzone]=\"htmlObj.dropzone\"\r\n      [attr.accesskey]=\"htmlObj.accesskey\"\r\n      [tabindex]=\"htmlObj.tabindex\"\r\n      [title]=\"htmlObj.title\"\r\n      [translate]=\"htmlObj.translate\">\r\n  </tr>\r\n\r\n  <td *ngIf=\"htmlObj.tagName=='td'\"\r\n      [id]=\"htmlObj.id\"\r\n      [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n      [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n      (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n      app-html-elemente\r\n      [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n      [innerText]=\"htmlObj.innererText\"\r\n      [hidden]=\"htmlObj.hidden\"\r\n      [class]=\"htmlObj.class\"\r\n      [dir]=\"htmlObj.dir\"\r\n      [draggable]=\"htmlObj.draggable\"\r\n      [lang]=\"htmlObj.lang\"\r\n      [spellcheck]=\"htmlObj.spellcheck\"\r\n      [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n      [attr.dropzone]=\"htmlObj.dropzone\"\r\n      [attr.accesskey]=\"htmlObj.accesskey\"\r\n      [tabindex]=\"htmlObj.tabindex\"\r\n      [title]=\"htmlObj.title\"\r\n      [translate]=\"htmlObj.translate\"\r\n      [attr.colspan]=\"htmlObj.colspan\"\r\n      [attr.rowspan]=\"htmlObj.rowspan\"\r\n      [headers]=\"htmlObj.headers\">\r\n  </td>\r\n\r\n  <th *ngIf=\"htmlObj.tagName=='th'\"\r\n      [id]=\"htmlObj.id\"\r\n      [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n      [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n      (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n      app-html-elemente\r\n      [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n      [innerText]=\"htmlObj.innererText\"\r\n      [hidden]=\"htmlObj.hidden\"\r\n      [class]=\"htmlObj.class\"\r\n      [dir]=\"htmlObj.dir\"\r\n      [draggable]=\"htmlObj.draggable\"\r\n      [lang]=\"htmlObj.lang\"\r\n      [spellcheck]=\"htmlObj.spellcheck\"\r\n      [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n      [attr.dropzone]=\"htmlObj.dropzone\"\r\n      [attr.accesskey]=\"htmlObj.accesskey\"\r\n      [tabindex]=\"htmlObj.tabindex\"\r\n      [title]=\"htmlObj.title\"\r\n      [translate]=\"htmlObj.translate\"\r\n      [attr.colspan]=\"htmlObj.colspan\"\r\n      [attr.rowspan]=\"htmlObj.rowspan\"\r\n      [headers]=\"htmlObj.headers\">\r\n  </th>\r\n\r\n  <thead *ngIf=\"htmlObj.tagName=='thead'\"\r\n         [id]=\"htmlObj.id\"\r\n         [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n         [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n         (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n         app-html-elemente\r\n         [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n         [innerText]=\"htmlObj.innererText\"\r\n         [hidden]=\"htmlObj.hidden\"\r\n         [class]=\"htmlObj.class\"\r\n         [dir]=\"htmlObj.dir\"\r\n         [draggable]=\"htmlObj.draggable\"\r\n         [lang]=\"htmlObj.lang\"\r\n         [spellcheck]=\"htmlObj.spellcheck\"\r\n         [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n         [attr.dropzone]=\"htmlObj.dropzone\"\r\n         [attr.accesskey]=\"htmlObj.accesskey\"\r\n         [tabindex]=\"htmlObj.tabindex\"\r\n         [title]=\"htmlObj.title\"\r\n         [translate]=\"htmlObj.translate\">\r\n  </thead>\r\n\r\n  <tfoot *ngIf=\"htmlObj.tagName=='tfoot'\"\r\n         [id]=\"htmlObj.id\"\r\n         [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n         [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n         (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n         app-html-elemente\r\n         [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n         [innerText]=\"htmlObj.innererText\"\r\n         [hidden]=\"htmlObj.hidden\"\r\n         [class]=\"htmlObj.class\"\r\n         [dir]=\"htmlObj.dir\"\r\n         [draggable]=\"htmlObj.draggable\"\r\n         [lang]=\"htmlObj.lang\"\r\n         [spellcheck]=\"htmlObj.spellcheck\"\r\n         [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n         [attr.dropzone]=\"htmlObj.dropzone\"\r\n         [attr.accesskey]=\"htmlObj.accesskey\"\r\n         [tabindex]=\"htmlObj.tabindex\"\r\n         [title]=\"htmlObj.title\"\r\n         [translate]=\"htmlObj.translate\">\r\n  </tfoot>\r\n\r\n  <tbody *ngIf=\"htmlObj.tagName=='tbody'\"\r\n         [id]=\"htmlObj.id\"\r\n         [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n         [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n         (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n         app-html-elemente\r\n         [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n         [innerText]=\"htmlObj.innererText\"\r\n         [hidden]=\"htmlObj.hidden\"\r\n         [class]=\"htmlObj.class\"\r\n         [dir]=\"htmlObj.dir\"\r\n         [draggable]=\"htmlObj.draggable\"\r\n         [lang]=\"htmlObj.lang\"\r\n         [spellcheck]=\"htmlObj.spellcheck\"\r\n         [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n         [attr.dropzone]=\"htmlObj.dropzone\"\r\n         [attr.accesskey]=\"htmlObj.accesskey\"\r\n         [tabindex]=\"htmlObj.tabindex\"\r\n         [title]=\"htmlObj.title\"\r\n         [translate]=\"htmlObj.translate\">\r\n  </tbody>\r\n\r\n  <caption *ngIf=\"htmlObj.tagName=='caption'\"\r\n           [id]=\"htmlObj.id\"\r\n           [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n           [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n           (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n           app-html-elemente\r\n           [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n           [innerText]=\"htmlObj.innererText\"\r\n           [hidden]=\"htmlObj.hidden\"\r\n           [class]=\"htmlObj.class\"\r\n           [dir]=\"htmlObj.dir\"\r\n           [draggable]=\"htmlObj.draggable\"\r\n           [lang]=\"htmlObj.lang\"\r\n           [spellcheck]=\"htmlObj.spellcheck\"\r\n           [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n           [attr.dropzone]=\"htmlObj.dropzone\"\r\n           [attr.accesskey]=\"htmlObj.accesskey\"\r\n           [tabindex]=\"htmlObj.tabindex\"\r\n           [title]=\"htmlObj.title\"\r\n           [translate]=\"htmlObj.translate\">\r\n  </caption>\r\n\r\n  <colgroup *ngIf=\"htmlObj.tagName=='colgroup'\"\r\n            [id]=\"htmlObj.id\"\r\n            [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n            [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n            (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n            app-html-elemente\r\n            [htmlObjekte]=\"htmlObj.innereHTMLObjekte\">\r\n  </colgroup>\r\n\r\n  <col *ngIf=\"htmlObj.tagName=='col'\"\r\n       [id]=\"htmlObj.id\"\r\n       [span]=\"htmlObj.span\">\r\n\r\n\r\n  <div *ngIf=\"htmlObj.tagName=='form'\"\r\n       [@flyInOut]=\"htmlObj.animationStatus\"\r\n       (@flyInOut.done)=\"animationBeendet($event)\"\r\n       [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n       (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n       (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj)\"\r\n       appHtmlObjektDraggable\r\n       [id]=\"htmlObj.id\"\r\n       [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n       (click)=\"htmlElementAuswaehlen($event,htmlObj)\">\r\n\r\n    <form ngNoForm [method]=\"htmlObj.method\"\r\n          [action]=\"htmlObj.action\"\r\n          app-html-elemente\r\n          [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n          [hidden]=\"htmlObj.hidden\"\r\n          [class]=\"htmlObj.class\"\r\n          [dir]=\"htmlObj.dir\"\r\n          [draggable]=\"htmlObj.draggable\"\r\n          [lang]=\"htmlObj.lang\"\r\n          [spellcheck]=\"htmlObj.spellcheck\"\r\n          [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n          [attr.dropzone]=\"htmlObj.dropzone\"\r\n          [attr.accesskey]=\"htmlObj.accesskey\"\r\n          [tabindex]=\"htmlObj.tabindex\"\r\n          [title]=\"htmlObj.title\"\r\n          [translate]=\"htmlObj.translate\"\r\n          [attr.accept-charset]=\"htmlObj.accept_charset\"\r\n          [autocomplete]=\"htmlObj.autocomplete\"\r\n          [enctype]=\"htmlObj.enctype\"\r\n          [name]=\"htmlObj.name\"\r\n          [attr.novalidate]=\"htmlObj.novalidate\"\r\n          [target]=\"htmlObj.target\"\r\n    >\r\n    </form>\r\n  </div>\r\n\r\n  <label *ngIf=\"htmlObj.tagName=='label'\"\r\n         [id]=\"htmlObj.id\"\r\n         [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n         [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n         (dblclick)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n         [for]=\"htmlObj.for\"\r\n         [attr.form]=\"htmlObj.form\"\r\n         [innerText]=\"htmlObj.innererText\"\r\n         [hidden]=\"htmlObj.hidden\"\r\n         [class]=\"htmlObj.class\"\r\n         [dir]=\"htmlObj.dir\"\r\n         [draggable]=\"htmlObj.draggable\"\r\n         [lang]=\"htmlObj.lang\"\r\n         [spellcheck]=\"htmlObj.spellcheck\"\r\n         [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n         [attr.dropzone]=\"htmlObj.dropzone\"\r\n         [attr.accesskey]=\"htmlObj.accesskey\"\r\n         [tabindex]=\"htmlObj.tabindex\"\r\n         [title]=\"htmlObj.title\"\r\n         [translate]=\"htmlObj.translate\">\r\n  </label>\r\n\r\n  <output *ngIf=\"htmlObj.tagName=='output'\"\r\n          [@flyInOut]=\"htmlObj.animationStatus\"\r\n          (@flyInOut.done)=\"animationBeendet($event)\"\r\n          [id]=\"htmlObj.id\"\r\n          [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n          [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n          (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n          [for]=\"htmlObj.for\"\r\n          [attr.form]=\"htmlObj.form\"\r\n          [innerText]=\"htmlObj.innererText\"\r\n          [hidden]=\"htmlObj.hidden\"\r\n          [class]=\"htmlObj.class\"\r\n          [dir]=\"htmlObj.dir\"\r\n          [draggable]=\"htmlObj.draggable\"\r\n          [lang]=\"htmlObj.lang\"\r\n          [spellcheck]=\"htmlObj.spellcheck\"\r\n          [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n          [attr.dropzone]=\"htmlObj.dropzone\"\r\n          [attr.accesskey]=\"htmlObj.accesskey\"\r\n          [tabindex]=\"htmlObj.tabindex\"\r\n          [title]=\"htmlObj.title\"\r\n          [translate]=\"htmlObj.translate\">\r\n  </output>\r\n\r\n  <input *ngIf=\"htmlObj.tagName=='input'\"\r\n         [@flyInOut]=\"htmlObj.animationStatus\"\r\n         (@flyInOut.done)=\"animationBeendet($event)\"\r\n         [value]=\"htmlObj.value\"\r\n         [required]=\"htmlObj.required\"\r\n         [id]=\"htmlObj.id\"\r\n         app-html-elemente\r\n         [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n         [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n         [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n         (dblclick)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n         [name]=\"htmlObj.name\"\r\n         [type]=\"htmlObj.type\"\r\n         [pattern]=\"htmlObj.pattern\"\r\n         [attr.required]=\"htmlObj.required\"\r\n         [hidden]=\"htmlObj.hidden\"\r\n         [class]=\"htmlObj.class\"\r\n         [dir]=\"htmlObj.dir\"\r\n         [draggable]=\"htmlObj.draggable\"\r\n         [lang]=\"htmlObj.lang\"\r\n         [spellcheck]=\"htmlObj.spellcheck\"\r\n         [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n         [attr.dropzone]=\"htmlObj.dropzone\"\r\n         [attr.accesskey]=\"htmlObj.accesskey\"\r\n         [tabindex]=\"htmlObj.tabindex\"\r\n         [title]=\"htmlObj.title\"\r\n         [translate]=\"htmlObj.translate\"\r\n         [accept]=\"htmlObj.accept\"\r\n         [alt]=\"htmlObj.alt\"\r\n         [autocomplete]=\"htmlObj.autocomplete\"\r\n         [autofocus]=\"htmlObj.autofocus\"\r\n         [checked]=\"htmlObj.checked\"\r\n         [attr.dirname]=\"htmlObj.dirname\"\r\n         [disabled]=\"htmlObj.disabled\"\r\n         [attr.form]=\"htmlObj.form\"\r\n         [formaction]=\"htmlObj.formaction\"\r\n         [attr.formenctype]=\"htmlObj.formenctype\"\r\n         [attr.formnovalidate]=\"htmlObj.formnovalidate\"\r\n         [attr.formtarget]=\"htmlObj.formtarget\"\r\n         [height]=\"htmlObj.height\"\r\n         [attr.list]=\"htmlObj.list\"\r\n         [max]=\"htmlObj.max\"\r\n         [attr.maxlength]=\"htmlObj.maxlength\"\r\n         [min]=\"htmlObj.min\"\r\n         [multiple]=\"htmlObj.multiple\"\r\n         [placeholder]=\"htmlObj.placeholder\"\r\n         [readonly]=\"htmlObj.readonly\"\r\n         [size]=\"htmlObj.size\"\r\n         [src]=\"htmlObj.src\"\r\n         [step]=\"htmlObj.step\"\r\n         [width]=\"htmlObj.width\"\r\n  >\r\n\r\n  <button *ngIf=\"htmlObj.tagName=='button'\"\r\n          [@flyInOut]=\"htmlObj.animationStatus\"\r\n          (@flyInOut.done)=\"animationBeendet($event)\"\r\n          [id]=\"htmlObj.id\"\r\n          [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n          [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n          (dblclick)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n          [type]=\"htmlObj.type\"\r\n          [hidden]=\"htmlObj.hidden\"\r\n          [class]=\"htmlObj.class\"\r\n          [dir]=\"htmlObj.dir\"\r\n          [draggable]=\"htmlObj.draggable\"\r\n          [lang]=\"htmlObj.lang\"\r\n          [spellcheck]=\"htmlObj.spellcheck\"\r\n          [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n          [attr.dropzone]=\"htmlObj.dropzone\"\r\n          [attr.accesskey]=\"htmlObj.accesskey\"\r\n          [tabindex]=\"htmlObj.tabindex\"\r\n          [title]=\"htmlObj.title\"\r\n          [translate]=\"htmlObj.translate\"\r\n          [autofocus]=\"htmlObj.autofocus\"\r\n          [disabled]=\"htmlObj.disabled\"\r\n\r\n          [name]=\"htmlObj.name\"\r\n  >\r\n    {{htmlObj.innererText}}\r\n  </button>\r\n\r\n  <fieldset *ngIf=\"htmlObj.tagName=='fieldset'\"\r\n            [@flyInOut]=\"htmlObj.animationStatus\"\r\n            (@flyInOut.done)=\"animationBeendet($event)\"\r\n            [id]=\"htmlObj.id\"\r\n            [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n            [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n            (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n            app-html-elemente\r\n            [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n            [hidden]=\"htmlObj.hidden\"\r\n            [class]=\"htmlObj.class\"\r\n            [dir]=\"htmlObj.dir\"\r\n            [draggable]=\"htmlObj.draggable\"\r\n            [lang]=\"htmlObj.lang\"\r\n            [spellcheck]=\"htmlObj.spellcheck\"\r\n            [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n            [attr.dropzone]=\"htmlObj.dropzone\"\r\n            [attr.accesskey]=\"htmlObj.accesskey\"\r\n            [tabindex]=\"htmlObj.tabindex\"\r\n            [title]=\"htmlObj.title\"\r\n            [translate]=\"htmlObj.translate\"\r\n            [disabled]=\"htmlObj.disabled\"\r\n            [attr.form]=\"htmlObj.form\"\r\n            [name]=\"htmlObj.name\">\r\n  </fieldset>\r\n\r\n  <legend *ngIf=\"htmlObj.tagName=='legend'\"\r\n          [@flyInOut]=\"htmlObj.animationStatus\"\r\n          (@flyInOut.done)=\"animationBeendet($event)\"\r\n          [id]=\"htmlObj.id\"\r\n          [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n          [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n          (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n          [hidden]=\"htmlObj.hidden\"\r\n          [class]=\"htmlObj.class\"\r\n          [dir]=\"htmlObj.dir\"\r\n          [draggable]=\"htmlObj.draggable\"\r\n          [lang]=\"htmlObj.lang\"\r\n          [spellcheck]=\"htmlObj.spellcheck\"\r\n          [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n          [attr.dropzone]=\"htmlObj.dropzone\"\r\n          [attr.accesskey]=\"htmlObj.accesskey\"\r\n          [tabindex]=\"htmlObj.tabindex\"\r\n          [title]=\"htmlObj.title\"\r\n          [translate]=\"htmlObj.translate\">\r\n    {{htmlObj.innererText}}\r\n  </legend>\r\n\r\n  <select *ngIf=\"htmlObj.tagName=='select'\"\r\n          [@flyInOut]=\"htmlObj.animationStatus\"\r\n          (@flyInOut.done)=\"animationBeendet($event)\"\r\n          [id]=\"htmlObj.id\"\r\n          [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n          [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n          (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n          [name]=\"htmlObj.name\"\r\n          [attr.multiple]=\"htmlObj.multiple == 'An' ? '' : null\"\r\n          [hidden]=\"htmlObj.hidden\"\r\n          [class]=\"htmlObj.class\"\r\n          [dir]=\"htmlObj.dir\"\r\n          [draggable]=\"htmlObj.draggable\"\r\n          [lang]=\"htmlObj.lang\"\r\n          [spellcheck]=\"htmlObj.spellcheck\"\r\n          [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n          [attr.dropzone]=\"htmlObj.dropzone\"\r\n          [attr.accesskey]=\"htmlObj.accesskey\"\r\n          [tabindex]=\"htmlObj.tabindex\"\r\n          [title]=\"htmlObj.title\"\r\n          [translate]=\"htmlObj.translate\"\r\n          [autofocus]=\"htmlObj.autofocus\"\r\n          [disabled]=\"htmlObj.disabled\"\r\n          [attr.form]=\"htmlObj.form\"\r\n          [required]=\"htmlObj.required\">\r\n    <ng-container *ngFor=\"let innerObj of htmlObj.innereHTMLObjekte\">\r\n      <ng-container *ngIf=\"innerObj.tagName == 'optgroup'\">\r\n        <optgroup [disabled]=\"innerObj.disabled\"\r\n                  [label]=\"innerObj.label\">\r\n          <option *ngFor=\"let opt of innerObj.innereHTMLObjekte\"\r\n                  value={{opt.id}}\r\n                  [id]=\"opt.id\">\r\n            {{opt.innererText}}\r\n          </option>\r\n        </optgroup>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"innerObj.tagName == 'option'\">\r\n        <option value={{innerObj.id}}\r\n                [id]=\"innerObj.id\">\r\n          {{innerObj.innererText}}\r\n        </option>\r\n      </ng-container>\r\n    </ng-container>\r\n  </select>\r\n\r\n\r\n  <datalist *ngIf=\"htmlObj.tagName=='datalist'\"\r\n            [@flyInOut]=\"htmlObj.animationStatus\"\r\n            (@flyInOut.done)=\"animationBeendet($event)\"\r\n            [id]=\"htmlObj.id\"\r\n            [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n            [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n            (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n            [hidden]=\"htmlObj.hidden\"\r\n            [class]=\"htmlObj.class\"\r\n            [dir]=\"htmlObj.dir\"\r\n            [draggable]=\"htmlObj.draggable\"\r\n            [lang]=\"htmlObj.lang\"\r\n            [spellcheck]=\"htmlObj.spellcheck\"\r\n            [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n            [attr.dropzone]=\"htmlObj.dropzone\"\r\n            [attr.accesskey]=\"htmlObj.accesskey\"\r\n            [tabindex]=\"htmlObj.tabindex\"\r\n            [title]=\"htmlObj.title\"\r\n            [translate]=\"htmlObj.translate\">\r\n    <option *ngFor=\"let opt of htmlObj.innereHTMLObjekte\"\r\n            value={{opt.id}} [id]=\"opt.id\">\r\n      {{opt.innererText}}\r\n    </option>\r\n  </datalist>\r\n\r\n\r\n  <textarea *ngIf=\"htmlObj.tagName=='textarea'\"\r\n            [@flyInOut]=\"htmlObj.animationStatus\"\r\n            (@flyInOut.done)=\"animationBeendet($event)\"\r\n            [id]=\"htmlObj.id\"\r\n            [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n            [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n            (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n            [rows]=\"htmlObj.rows\"\r\n            [cols]=\"htmlObj.cols\"\r\n            [name]=\"'textarea' + htmlObj.id\"\r\n            [hidden]=\"htmlObj.hidden\"\r\n            [class]=\"htmlObj.class\"\r\n            [dir]=\"htmlObj.dir\"\r\n            [draggable]=\"htmlObj.draggable\"\r\n            [lang]=\"htmlObj.lang\"\r\n            [spellcheck]=\"htmlObj.spellcheck\"\r\n            [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n            [attr.dropzone]=\"htmlObj.dropzone\"\r\n            [attr.accesskey]=\"htmlObj.accesskey\"\r\n            [tabindex]=\"htmlObj.tabindex\"\r\n            [title]=\"htmlObj.title\"\r\n            [translate]=\"htmlObj.translate\"\r\n            [autofocus]=\"htmlObj.autofocus\"\r\n            [attr.dirname]=\"htmlObj.dirname\"\r\n            [disabled]=\"htmlObj.disabled\"\r\n            [attr.form]=\"htmlObj.form\"\r\n            [attr.maxlength]=\"htmlObj.maxlength\"\r\n            [placeholder]=\"htmlObj.placeholder\"\r\n            [readonly]=\"htmlObj.readonly\"\r\n            [required]=\"htmlObj.required\"\r\n            [wrap]=\"htmlObj.wrap\"\r\n  >\r\n    {{htmlObj.innererText}}\r\n  </textarea>\r\n\r\n  <img *ngIf=\"htmlObj.tagName=='img'\"\r\n       [@flyInOut]=\"htmlObj.animationStatus\"\r\n       (@flyInOut.done)=\"animationBeendet($event)\"\r\n       (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n       (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj)\"\r\n       appHtmlObjektDraggable\r\n       app-html-elemente\r\n       [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n       [id]=\"htmlObj.id\"\r\n       [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n       [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n       (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n       [src]=\"htmlObj.src\"\r\n       [alt]=\"htmlObj.alt\"\r\n       [hidden]=\"htmlObj.hidden\"\r\n       [class]=\"htmlObj.class\"\r\n       [dir]=\"htmlObj.dir\"\r\n       [draggable]=\"htmlObj.draggable\"\r\n       [lang]=\"htmlObj.lang\"\r\n       [spellcheck]=\"htmlObj.spellcheck\"\r\n       [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n       [attr.dropzone]=\"htmlObj.dropzone\"\r\n       [attr.accesskey]=\"htmlObj.accesskey\"\r\n       [tabindex]=\"htmlObj.tabindex\"\r\n       [title]=\"htmlObj.title\"\r\n       [translate]=\"htmlObj.translate\"\r\n       [attr.crossorigin]=\"htmlObj.crossorigin\"\r\n       [height]=\"htmlObj.height\"\r\n       [attr.ismap]=\"htmlObj.ismap\"\r\n       [attr.longdesc]=\"htmlObj.longdesc\"\r\n       [sizes]=\"htmlObj.sizes\"\r\n       [attr.usemap]=\"htmlObj.usemap\"\r\n       [width]=\"htmlObj.width\"\r\n  >\r\n\r\n  <p *ngIf=\"htmlObj.tagName=='p' && htmlObj.class !== 'detailsP'\"\r\n     [@flyInOut]=\"htmlObj.animationStatus\"\r\n     (@flyInOut.done)=\"animationBeendet($event)\"\r\n     [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n     (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n     (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj)\"\r\n     appHtmlObjektDraggable\r\n     [id]=\"htmlObj.id\"\r\n     [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n     (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n     app-html-elemente\r\n     [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n     [innerText]=\"htmlObj.innererText\"\r\n     [hidden]=\"htmlObj.hidden\"\r\n     [class]=\"htmlObj.class\"\r\n     [dir]=\"htmlObj.dir\"\r\n     [draggable]=\"htmlObj.draggable\"\r\n     [lang]=\"htmlObj.lang\"\r\n     [spellcheck]=\"htmlObj.spellcheck\"\r\n     [tabindex]=\"htmlObj.tabindex\"\r\n     [title]=\"htmlObj.title\"\r\n     [translate]=\"htmlObj.translate\"\r\n     [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n     [attr.dropzone]=\"htmlObj.dropzone\"\r\n     [attr.accesskey]=\"htmlObj.accesskey\">\r\n  </p>\r\n\r\n  <span *ngIf=\"htmlObj.tagName=='a' && htmlObj.class !== 'innerA' && !htmlObj.istEinInternerLink\"\r\n        [@flyInOut]=\"htmlObj.animationStatus\"\r\n        (@flyInOut.done)=\"animationBeendet($event)\"\r\n        [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n        (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n        (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj);\"\r\n        appHtmlObjektDraggable\r\n        [id]=\"htmlObj.id\"\r\n        [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n        (click)=\"htmlElementAuswaehlen($event,htmlObj)\">\r\n     <a [href]=\"htmlObj.href\" [target]=\"htmlObj.target\"\r\n        [hidden]=\"htmlObj.hidden\"\r\n        [class]=\"htmlObj.class\"\r\n        [dir]=\"htmlObj.dir\"\r\n        [draggable]=\"htmlObj.draggable\"\r\n        [lang]=\"htmlObj.lang\"\r\n        [spellcheck]=\"htmlObj.spellcheck\"\r\n        [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n        [attr.dropzone]=\"htmlObj.dropzone\"\r\n        [attr.accesskey]=\"htmlObj.accesskey\"\r\n        [tabindex]=\"htmlObj.tabindex\"\r\n        [title]=\"htmlObj.title\"\r\n        [translate]=\"htmlObj.translate\"\r\n        [download]=\"htmlObj.download\"\r\n        [hreflang]=\"htmlObj.hreflang\"\r\n        [attr.media]=\"htmlObj.media\"\r\n        [ping]=\"htmlObj.ping\"\r\n        [rel]=\"htmlObj.rel\"\r\n        [type]=\"htmlObj.type\"\r\n     >\r\n       {{htmlObj.innererText}}\r\n     </a>\r\n  </span>\r\n\r\n  <span *ngIf=\"htmlObj.tagName=='a' && htmlObj.class !== 'innerA' && htmlObj.istEinInternerLink\"\r\n        [@flyInOut]=\"htmlObj.animationStatus\"\r\n        (@flyInOut.done)=\"animationBeendet($event)\"\r\n        [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n        (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n        (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj);\"\r\n        appHtmlObjektDraggable\r\n        [id]=\"htmlObj.id\"\r\n        [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n        (click)=\"htmlElementAuswaehlen($event,htmlObj)\" >\r\n  <span (click)=ladeSeite(htmlObj.internerLinkAdresse)\r\n        [hidden]=\"htmlObj.hidden\"\r\n        class = \"unterSeiteLink\"\r\n        [dir]=\"htmlObj.dir\"\r\n        [draggable]=\"htmlObj.draggable\"\r\n        [lang]=\"htmlObj.lang\"\r\n        [spellcheck]=\"htmlObj.spellcheck\"\r\n        [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n        [attr.dropzone]=\"htmlObj.dropzone\"\r\n        [attr.accesskey]=\"htmlObj.accesskey\"\r\n        [tabindex]=\"htmlObj.tabindex\"\r\n        [title]=\"htmlObj.title\"\r\n        [translate]=\"htmlObj.translate\"> {{htmlObj.innererText}} </span>\r\n  </span>\r\n\r\n  <ul *ngIf=\"htmlObj.tagName=='ul'\"\r\n      [@flyInOut]=\"htmlObj.animationStatus\"\r\n      (@flyInOut.done)=\"animationBeendet($event)\"\r\n      [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n      (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n      (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj)\"\r\n      appHtmlObjektDraggable\r\n      [id]=\"htmlObj.id\"\r\n      [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n      (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n      app-html-elemente\r\n      [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n      [hidden]=\"htmlObj.hidden\"\r\n      [class]=\"htmlObj.class\"\r\n      [dir]=\"htmlObj.dir\"\r\n      [draggable]=\"htmlObj.draggable\"\r\n      [lang]=\"htmlObj.lang\"\r\n      [spellcheck]=\"htmlObj.spellcheck\"\r\n      [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n      [attr.dropzone]=\"htmlObj.dropzone\"\r\n      [attr.accesskey]=\"htmlObj.accesskey\"\r\n      [tabindex]=\"htmlObj.tabindex\"\r\n      [title]=\"htmlObj.title\"\r\n      [translate]=\"htmlObj.translate\"\r\n      [type]=\"htmlObj.type\">\r\n  </ul>\r\n\r\n  <ol *ngIf=\"htmlObj.tagName=='ol'\"\r\n      [@flyInOut]=\"htmlObj.animationStatus\"\r\n      (@flyInOut.done)=\"animationBeendet($event)\"\r\n      [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n      (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n      (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj)\"\r\n      appHtmlObjektDraggable\r\n      [id]=\"htmlObj.id\"\r\n      [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n      (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n      [type]=\"htmlObj.type\"\r\n      app-html-elemente\r\n      [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n      [hidden]=\"htmlObj.hidden\"\r\n      [class]=\"htmlObj.class\"\r\n      [dir]=\"htmlObj.dir\"\r\n      [draggable]=\"htmlObj.draggable\"\r\n      [lang]=\"htmlObj.lang\"\r\n      [spellcheck]=\"htmlObj.spellcheck\"\r\n      [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n      [attr.dropzone]=\"htmlObj.dropzone\"\r\n      [attr.accesskey]=\"htmlObj.accesskey\"\r\n      [tabindex]=\"htmlObj.tabindex\"\r\n      [title]=\"htmlObj.title\"\r\n      [translate]=\"htmlObj.translate\"\r\n      [reversed]=\"htmlObj.reversed\"\r\n      [start]=\"htmlObj.start\">\r\n  </ol>\r\n\r\n  <li *ngIf=\"htmlObj.tagName=='li'\"\r\n      [@flyInOut]=\"htmlObj.animationStatus\"\r\n      (@flyInOut.done)=\"animationBeendet($event)\"\r\n      [id]=\"htmlObj.id\"\r\n      [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n      [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n      (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n      [hidden]=\"htmlObj.hidden\"\r\n      [class]=\"htmlObj.class\"\r\n      [dir]=\"htmlObj.dir\"\r\n      [draggable]=\"htmlObj.draggable\"\r\n      [lang]=\"htmlObj.lang\"\r\n      [spellcheck]=\"htmlObj.spellcheck\"\r\n      [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n      [attr.dropzone]=\"htmlObj.dropzone\"\r\n      [attr.accesskey]=\"htmlObj.accesskey\"\r\n      [tabindex]=\"htmlObj.tabindex\"\r\n      [title]=\"htmlObj.title\"\r\n      [translate]=\"htmlObj.translate\">\r\n    {{htmlObj.innererText}}\r\n  </li>\r\n\r\n  <dl *ngIf=\"htmlObj.tagName=='dl'\"\r\n      [@flyInOut]=\"htmlObj.animationStatus\"\r\n      (@flyInOut.done)=\"animationBeendet($event)\"\r\n      [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n      (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n      (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj)\"\r\n      appHtmlObjektDraggable\r\n      [id]=\"htmlObj.id\"\r\n      [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n      (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n      app-html-elemente\r\n      [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n      [hidden]=\"htmlObj.hidden\"\r\n      [class]=\"htmlObj.class\"\r\n      [dir]=\"htmlObj.dir\"\r\n      [draggable]=\"htmlObj.draggable\"\r\n      [lang]=\"htmlObj.lang\"\r\n      [spellcheck]=\"htmlObj.spellcheck\"\r\n      [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n      [attr.dropzone]=\"htmlObj.dropzone\"\r\n      [attr.accesskey]=\"htmlObj.accesskey\"\r\n      [tabindex]=\"htmlObj.tabindex\"\r\n      [title]=\"htmlObj.title\"\r\n      [translate]=\"htmlObj.translate\">\r\n  </dl>\r\n\r\n  <dt *ngIf=\"htmlObj.tagName=='dt'\"\r\n      [@flyInOut]=\"htmlObj.animationStatus\"\r\n      (@flyInOut.done)=\"animationBeendet($event)\"\r\n      [id]=\"htmlObj.id\"\r\n      [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n      [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n      (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n      [hidden]=\"htmlObj.hidden\"\r\n      [class]=\"htmlObj.class\"\r\n      [dir]=\"htmlObj.dir\"\r\n      [draggable]=\"htmlObj.draggable\"\r\n      [lang]=\"htmlObj.lang\"\r\n      [spellcheck]=\"htmlObj.spellcheck\"\r\n      [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n      [attr.dropzone]=\"htmlObj.dropzone\"\r\n      [attr.accesskey]=\"htmlObj.accesskey\"\r\n      [tabindex]=\"htmlObj.tabindex\"\r\n      [title]=\"htmlObj.title\"\r\n      [translate]=\"htmlObj.translate\">\r\n    {{htmlObj.innererText}}\r\n  </dt>\r\n\r\n  <dd *ngIf=\"htmlObj.tagName=='dd'\"\r\n      [@flyInOut]=\"htmlObj.animationStatus\"\r\n      (@flyInOut.done)=\"animationBeendet($event)\"\r\n      [id]=\"htmlObj.id\"\r\n      [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n      [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n      (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n      [hidden]=\"htmlObj.hidden\"\r\n      [class]=\"htmlObj.class\"\r\n      [dir]=\"htmlObj.dir\"\r\n      [draggable]=\"htmlObj.draggable\"\r\n      [lang]=\"htmlObj.lang\"\r\n      [spellcheck]=\"htmlObj.spellcheck\"\r\n      [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n      [attr.dropzone]=\"htmlObj.dropzone\"\r\n      [attr.accesskey]=\"htmlObj.accesskey\"\r\n      [tabindex]=\"htmlObj.tabindex\"\r\n      [title]=\"htmlObj.title\"\r\n      [translate]=\"htmlObj.translate\">\r\n    {{htmlObj.innererText}}\r\n  </dd>\r\n\r\n\r\n  <h1 *ngIf=\"htmlObj.tagName=='h1'\"\r\n      [@flyInOut]=\"htmlObj.animationStatus\"\r\n      (@flyInOut.done)=\"animationBeendet($event)\"\r\n      [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n      (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n      (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj);\"\r\n      appHtmlObjektDraggable\r\n      [hidden]=\"htmlObj.hidden\"\r\n      [class]=\"htmlObj.class\"\r\n      [dir]=\"htmlObj.dir\"\r\n      [draggable]=\"htmlObj.draggable\"\r\n      [lang]=\"htmlObj.lang\"\r\n      [spellcheck]=\"htmlObj.spellcheck\"\r\n      [tabindex]=\"htmlObj.tabindex\"\r\n      [title]=\"htmlObj.title\"\r\n      [translate]=\"htmlObj.translate\"\r\n      [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n      [attr.dropzone]=\"htmlObj.dropzone\"\r\n      [attr.accesskey]=\"htmlObj.accesskey\"\r\n      [id]=\"htmlObj.id\"\r\n      [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n      (click)=\"htmlElementAuswaehlen($event,htmlObj)\">\r\n    {{htmlObj.innererText}}\r\n  </h1>\r\n\r\n  <h2 *ngIf=\"htmlObj.tagName=='h2'\"\r\n      [@flyInOut]=\"htmlObj.animationStatus\"\r\n      (@flyInOut.done)=\"animationBeendet($event)\"\r\n      [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n      (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n      (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj);\"\r\n      appHtmlObjektDraggable\r\n      [id]=\"htmlObj.id\"\r\n      [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n      (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n      [hidden]=\"htmlObj.hidden\"\r\n      [class]=\"htmlObj.class\"\r\n      [dir]=\"htmlObj.dir\"\r\n      [draggable]=\"htmlObj.draggable\"\r\n      [lang]=\"htmlObj.lang\"\r\n      [spellcheck]=\"htmlObj.spellcheck\"\r\n      [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n      [attr.dropzone]=\"htmlObj.dropzone\"\r\n      [attr.accesskey]=\"htmlObj.accesskey\"\r\n      [tabindex]=\"htmlObj.tabindex\"\r\n      [title]=\"htmlObj.title\"\r\n      [translate]=\"htmlObj.translate\">\r\n    {{htmlObj.innererText}}\r\n  </h2>\r\n\r\n  <h3 *ngIf=\"htmlObj.tagName=='h3'\"\r\n      [@flyInOut]=\"htmlObj.animationStatus\"\r\n      (@flyInOut.done)=\"animationBeendet($event)\"\r\n      [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n      (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n      (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj);\"\r\n      appHtmlObjektDraggable\r\n      [id]=\"htmlObj.id\"\r\n      [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n      (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n      [hidden]=\"htmlObj.hidden\"\r\n      [class]=\"htmlObj.class\"\r\n      [dir]=\"htmlObj.dir\"\r\n      [draggable]=\"htmlObj.draggable\"\r\n      [lang]=\"htmlObj.lang\"\r\n      [spellcheck]=\"htmlObj.spellcheck\"\r\n      [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n      [attr.dropzone]=\"htmlObj.dropzone\"\r\n      [attr.accesskey]=\"htmlObj.accesskey\"\r\n      [tabindex]=\"htmlObj.tabindex\"\r\n      [title]=\"htmlObj.title\"\r\n      [translate]=\"htmlObj.translate\">\r\n    {{htmlObj.innererText}}\r\n  </h3>\r\n\r\n  <h4 *ngIf=\"htmlObj.tagName=='h4'\"\r\n      [@flyInOut]=\"htmlObj.animationStatus\"\r\n      (@flyInOut.done)=\"animationBeendet($event)\"\r\n      [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n      (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n      (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj);\"\r\n      appHtmlObjektDraggable\r\n      [id]=\"htmlObj.id\"\r\n      [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n      (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n      [hidden]=\"htmlObj.hidden\"\r\n      [class]=\"htmlObj.class\"\r\n      [dir]=\"htmlObj.dir\"\r\n      [draggable]=\"htmlObj.draggable\"\r\n      [lang]=\"htmlObj.lang\"\r\n      [spellcheck]=\"htmlObj.spellcheck\"\r\n      [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n      [attr.dropzone]=\"htmlObj.dropzone\"\r\n      [attr.accesskey]=\"htmlObj.accesskey\"\r\n      [tabindex]=\"htmlObj.tabindex\"\r\n      [title]=\"htmlObj.title\"\r\n      [translate]=\"htmlObj.translate\">\r\n    {{htmlObj.innererText}}\r\n  </h4>\r\n\r\n  <h5 *ngIf=\"htmlObj.tagName=='h5'\"\r\n      [@flyInOut]=\"htmlObj.animationStatus\"\r\n      (@flyInOut.done)=\"animationBeendet($event)\"\r\n      [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n      (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n      (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj);\"\r\n      appHtmlObjektDraggable\r\n      [id]=\"htmlObj.id\"\r\n      [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n      (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n      [hidden]=\"htmlObj.hidden\"\r\n      [class]=\"htmlObj.class\"\r\n      [dir]=\"htmlObj.dir\"\r\n      [draggable]=\"htmlObj.draggable\"\r\n      [lang]=\"htmlObj.lang\"\r\n      [spellcheck]=\"htmlObj.spellcheck\"\r\n      [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n      [attr.dropzone]=\"htmlObj.dropzone\"\r\n      [attr.accesskey]=\"htmlObj.accesskey\"\r\n      [tabindex]=\"htmlObj.tabindex\"\r\n      [title]=\"htmlObj.title\"\r\n      [translate]=\"htmlObj.translate\">\r\n    {{htmlObj.innererText}}\r\n  </h5>\r\n\r\n  <h6 *ngIf=\"htmlObj.tagName=='h6'\"\r\n      [@flyInOut]=\"htmlObj.animationStatus\"\r\n      (@flyInOut.done)=\"animationBeendet($event)\"\r\n      [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n      (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n      (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj);\"\r\n      appHtmlObjektDraggable\r\n      [id]=\"htmlObj.id\"\r\n      [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n      (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n      [hidden]=\"htmlObj.hidden\"\r\n      [class]=\"htmlObj.class\"\r\n      [dir]=\"htmlObj.dir\"\r\n      [draggable]=\"htmlObj.draggable\"\r\n      [lang]=\"htmlObj.lang\"\r\n      [spellcheck]=\"htmlObj.spellcheck\"\r\n      [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n      [attr.dropzone]=\"htmlObj.dropzone\"\r\n      [attr.accesskey]=\"htmlObj.accesskey\"\r\n      [tabindex]=\"htmlObj.tabindex\"\r\n      [title]=\"htmlObj.title\"\r\n      [translate]=\"htmlObj.translate\">\r\n    {{htmlObj.innererText}}\r\n\r\n  </h6>\r\n\r\n  <nav *ngIf=\"htmlObj.tagName=='nav'\"\r\n       [@flyInOut]=\"htmlObj.animationStatus\"\r\n       (@flyInOut.done)=\"animationBeendet($event)\"\r\n       [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n       (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n       (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj)\"\r\n       appHtmlObjektDraggable\r\n       [id]=\"htmlObj.id\"\r\n       [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n       (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n       [hidden]=\"htmlObj.hidden\"\r\n       [class]=\"htmlObj.class\"\r\n       [dir]=\"htmlObj.dir\"\r\n       [draggable]=\"htmlObj.draggable\"\r\n       [lang]=\"htmlObj.lang\"\r\n       [spellcheck]=\"htmlObj.spellcheck\"\r\n       [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n       [attr.dropzone]=\"htmlObj.dropzone\"\r\n       [attr.accesskey]=\"htmlObj.accesskey\"\r\n       [tabindex]=\"htmlObj.tabindex\"\r\n       [title]=\"htmlObj.title\"\r\n       [translate]=\"htmlObj.translate\">\r\n    <ul app-html-elemente [htmlObjekte]=\"htmlObj.innereHTMLObjekte\" *ngIf=\"htmlObj.innereHTMLObjekte\"\r\n        style=\"list-style-type: none;\"></ul>\r\n  </nav>\r\n\r\n  <li *ngIf=\"htmlObj.tagName=='a' && htmlObj.class === 'innerA' && !htmlObj.istEinInternerLink\"\r\n      [@flyInOut]=\"htmlObj.animationStatus\"\r\n      (@flyInOut.done)=\"animationBeendet($event)\"\r\n      [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n      [id]=\"htmlObj.id\"\r\n      [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n      (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n      [hidden]=\"htmlObj.hidden\"\r\n      [class]=\"htmlObj.class\"\r\n      [dir]=\"htmlObj.dir\"\r\n      [draggable]=\"htmlObj.draggable\"\r\n      [lang]=\"htmlObj.lang\"\r\n      [spellcheck]=\"htmlObj.spellcheck\"\r\n      [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n      [attr.dropzone]=\"htmlObj.dropzone\"\r\n      [attr.accesskey]=\"htmlObj.accesskey\"\r\n      [tabindex]=\"htmlObj.tabindex\"\r\n      [title]=\"htmlObj.title\"\r\n      [translate]=\"htmlObj.translate\">\r\n    <a [href]=\"htmlObj.href\">\r\n      {{htmlObj.innererText}}\r\n    </a>\r\n  </li>\r\n\r\n  <li *ngIf=\"htmlObj.tagName=='a' && htmlObj.class === 'innerA' && htmlObj.istEinInternerLink\"\r\n      [@flyInOut]=\"htmlObj.animationStatus\"\r\n      (@flyInOut.done)=\"animationBeendet($event)\"\r\n      [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n      [id]=\"htmlObj.id\"\r\n      [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n      (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n      [hidden]=\"htmlObj.hidden\"\r\n      [class]=\"htmlObj.class\"\r\n      [dir]=\"htmlObj.dir\"\r\n      [draggable]=\"htmlObj.draggable\"\r\n      [lang]=\"htmlObj.lang\"\r\n      [spellcheck]=\"htmlObj.spellcheck\"\r\n      [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n      [attr.dropzone]=\"htmlObj.dropzone\"\r\n      [attr.accesskey]=\"htmlObj.accesskey\"\r\n      [tabindex]=\"htmlObj.tabindex\"\r\n      [title]=\"htmlObj.title\"\r\n      [translate]=\"htmlObj.translate\">\r\n    <span (click)=ladeSeite(htmlObj.internerLinkAdresse) class=\"unterSeiteLink\"> {{htmlObj.innererText}} </span>\r\n  </li>\r\n\r\n  <header *ngIf=\"htmlObj.tagName=='header'\"\r\n          [@flyInOut]=\"htmlObj.animationStatus\"\r\n          (@flyInOut.done)=\"animationBeendet($event)\"\r\n          [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n          (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n          (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj)\"\r\n          appHtmlObjektDraggable\r\n          [id]=\"htmlObj.id\"\r\n          [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n          (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n          app-html-elemente\r\n          [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n          [hidden]=\"htmlObj.hidden\"\r\n          [class]=\"htmlObj.class\"\r\n          [dir]=\"htmlObj.dir\"\r\n          [draggable]=\"htmlObj.draggable\"\r\n          [lang]=\"htmlObj.lang\"\r\n          [spellcheck]=\"htmlObj.spellcheck\"\r\n          [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n          [attr.dropzone]=\"htmlObj.dropzone\"\r\n          [attr.accesskey]=\"htmlObj.accesskey\"\r\n          [tabindex]=\"htmlObj.tabindex\"\r\n          [title]=\"htmlObj.title\"\r\n          [translate]=\"htmlObj.translate\">\r\n    {{htmlObj.innererText}}\r\n  </header>\r\n\r\n  <body *ngIf=\"htmlObj.tagName=='body'\"\r\n        [@flyInOut]=\"htmlObj.animationStatus\"\r\n        (@flyInOut.done)=\"animationBeendet($event)\"\r\n        [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n        (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n        (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj)\"\r\n        appHtmlObjektDraggable\r\n        [id]=\"htmlObj.id\"\r\n        [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n        (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n        app-html-elemente\r\n        [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n        [hidden]=\"htmlObj.hidden\"\r\n        [class]=\"htmlObj.class\"\r\n        [dir]=\"htmlObj.dir\"\r\n        [draggable]=\"htmlObj.draggable\"\r\n        [lang]=\"htmlObj.lang\"\r\n        [spellcheck]=\"htmlObj.spellcheck\"\r\n        [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n        [attr.dropzone]=\"htmlObj.dropzone\"\r\n        [attr.accesskey]=\"htmlObj.accesskey\"\r\n        [tabindex]=\"htmlObj.tabindex\"\r\n        [title]=\"htmlObj.title\"\r\n        [translate]=\"htmlObj.translate\"\r\n        [innerText]=\"htmlObj.innererText\">\r\n  </body>\r\n\r\n  <footer *ngIf=\"htmlObj.tagName=='footer'\"\r\n          [@flyInOut]=\"htmlObj.animationStatus\"\r\n          (@flyInOut.done)=\"animationBeendet($event)\"\r\n          [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n          (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n          (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj)\"\r\n          appHtmlObjektDraggable\r\n          [id]=\"htmlObj.id\"\r\n          [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n          (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n          app-html-elemente\r\n          [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n          [hidden]=\"htmlObj.hidden\"\r\n          [class]=\"htmlObj.class\"\r\n          [dir]=\"htmlObj.dir\"\r\n          [draggable]=\"htmlObj.draggable\"\r\n          [lang]=\"htmlObj.lang\"\r\n          [spellcheck]=\"htmlObj.spellcheck\"\r\n          [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n          [attr.dropzone]=\"htmlObj.dropzone\"\r\n          [attr.accesskey]=\"htmlObj.accesskey\"\r\n          [tabindex]=\"htmlObj.tabindex\"\r\n          [title]=\"htmlObj.title\"\r\n          [translate]=\"htmlObj.translate\"\r\n          [innerText]=\"htmlObj.innererText\">\r\n  </footer>\r\n\r\n  <article *ngIf=\"htmlObj.tagName=='article'\"\r\n           [@flyInOut]=\"htmlObj.animationStatus\"\r\n           (@flyInOut.done)=\"animationBeendet($event)\"\r\n           [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n           (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n           (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj)\"\r\n           appHtmlObjektDraggable\r\n           [id]=\"htmlObj.id\"\r\n           [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n           (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n           app-html-elemente\r\n           [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n           [hidden]=\"htmlObj.hidden\"\r\n           [class]=\"htmlObj.class\"\r\n           [dir]=\"htmlObj.dir\"\r\n           [draggable]=\"htmlObj.draggable\"\r\n           [lang]=\"htmlObj.lang\"\r\n           [spellcheck]=\"htmlObj.spellcheck\"\r\n           [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n           [attr.dropzone]=\"htmlObj.dropzone\"\r\n           [attr.accesskey]=\"htmlObj.accesskey\"\r\n           [tabindex]=\"htmlObj.tabindex\"\r\n           [title]=\"htmlObj.title\"\r\n           [translate]=\"htmlObj.translate\"\r\n           [innerText]=\"htmlObj.innererText\">\r\n  </article>\r\n\r\n  <main *ngIf=\"htmlObj.tagName=='main'\"\r\n        [@flyInOut]=\"htmlObj.animationStatus\"\r\n        (@flyInOut.done)=\"animationBeendet($event)\"\r\n        [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n        (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n        (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj)\"\r\n        appHtmlObjektDraggable\r\n        [id]=\"htmlObj.id\"\r\n        [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n        (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n        app-html-elemente\r\n        [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n        [hidden]=\"htmlObj.hidden\"\r\n        [class]=\"htmlObj.class\"\r\n        [dir]=\"htmlObj.dir\"\r\n        [draggable]=\"htmlObj.draggable\"\r\n        [lang]=\"htmlObj.lang\"\r\n        [spellcheck]=\"htmlObj.spellcheck\"\r\n        [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n        [attr.dropzone]=\"htmlObj.dropzone\"\r\n        [attr.accesskey]=\"htmlObj.accesskey\"\r\n        [tabindex]=\"htmlObj.tabindex\"\r\n        [title]=\"htmlObj.title\"\r\n        [translate]=\"htmlObj.translate\"\r\n        [innerText]=\"htmlObj.innererText\">\r\n  </main>\r\n\r\n  <strong *ngIf=\"htmlObj.tagName=='strong'\"\r\n          [@flyInOut]=\"htmlObj.animationStatus\"\r\n          (@flyInOut.done)=\"animationBeendet($event)\"\r\n          [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n          (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n          (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj);\"\r\n          appHtmlObjektDraggable\r\n          [id]=\"htmlObj.id\"\r\n          [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n          (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n          app-html-elemente\r\n          [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n          [innerText]=\"htmlObj.innererText\"\r\n          [hidden]=\"htmlObj.hidden\"\r\n          [class]=\"htmlObj.class\"\r\n          [dir]=\"htmlObj.dir\"\r\n          [draggable]=\"htmlObj.draggable\"\r\n          [lang]=\"htmlObj.lang\"\r\n          [spellcheck]=\"htmlObj.spellcheck\"\r\n          [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n          [attr.dropzone]=\"htmlObj.dropzone\"\r\n          [attr.accesskey]=\"htmlObj.accesskey\"\r\n          [tabindex]=\"htmlObj.tabindex\"\r\n          [title]=\"htmlObj.title\"\r\n          [translate]=\"htmlObj.translate\">\r\n  </strong>\r\n\r\n  <s *ngIf=\"htmlObj.tagName=='s'\"\r\n     [@flyInOut]=\"htmlObj.animationStatus\"\r\n     (@flyInOut.done)=\"animationBeendet($event)\"\r\n     [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n     (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n     (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj);\"\r\n     appHtmlObjektDraggable\r\n     [id]=\"htmlObj.id\"\r\n     [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n     (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n     app-html-elemente\r\n     [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n     [innerText]=\"htmlObj.innererText\"\r\n     [hidden]=\"htmlObj.hidden\"\r\n     [class]=\"htmlObj.class\"\r\n     [dir]=\"htmlObj.dir\"\r\n     [draggable]=\"htmlObj.draggable\"\r\n     [lang]=\"htmlObj.lang\"\r\n     [spellcheck]=\"htmlObj.spellcheck\"\r\n     [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n     [attr.dropzone]=\"htmlObj.dropzone\"\r\n     [attr.accesskey]=\"htmlObj.accesskey\"\r\n     [tabindex]=\"htmlObj.tabindex\"\r\n     [title]=\"htmlObj.title\"\r\n     [translate]=\"htmlObj.translate\">\r\n  </s>\r\n\r\n  <small *ngIf=\"htmlObj.tagName=='small'\"\r\n         [@flyInOut]=\"htmlObj.animationStatus\"\r\n         (@flyInOut.done)=\"animationBeendet($event)\"\r\n         [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n         (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n         (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj);\"\r\n         appHtmlObjektDraggable\r\n         [id]=\"htmlObj.id\"\r\n         [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n         (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n         app-html-elemente\r\n         [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n         [innerText]=\"htmlObj.innererText\"\r\n         [hidden]=\"htmlObj.hidden\"\r\n         [class]=\"htmlObj.class\"\r\n         [dir]=\"htmlObj.dir\"\r\n         [draggable]=\"htmlObj.draggable\"\r\n         [lang]=\"htmlObj.lang\"\r\n         [spellcheck]=\"htmlObj.spellcheck\"\r\n         [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n         [attr.dropzone]=\"htmlObj.dropzone\"\r\n         [attr.accesskey]=\"htmlObj.accesskey\"\r\n         [tabindex]=\"htmlObj.tabindex\"\r\n         [title]=\"htmlObj.title\"\r\n         [translate]=\"htmlObj.translate\">\r\n  </small>\r\n\r\n  <u *ngIf=\"htmlObj.tagName=='u'\"\r\n     [@flyInOut]=\"htmlObj.animationStatus\"\r\n     (@flyInOut.done)=\"animationBeendet($event)\"\r\n     [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n     (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n     (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj);\"\r\n     appHtmlObjektDraggable\r\n     [id]=\"htmlObj.id\"\r\n     [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n     (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n     app-html-elemente\r\n     [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n     [innerText]=\"htmlObj.innererText\"\r\n     [hidden]=\"htmlObj.hidden\"\r\n     [class]=\"htmlObj.class\"\r\n     [dir]=\"htmlObj.dir\"\r\n     [draggable]=\"htmlObj.draggable\"\r\n     [lang]=\"htmlObj.lang\"\r\n     [spellcheck]=\"htmlObj.spellcheck\"\r\n     [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n     [attr.dropzone]=\"htmlObj.dropzone\"\r\n     [attr.accesskey]=\"htmlObj.accesskey\"\r\n     [tabindex]=\"htmlObj.tabindex\"\r\n     [title]=\"htmlObj.title\"\r\n     [translate]=\"htmlObj.translate\">\r\n  </u>\r\n\r\n  <em *ngIf=\"htmlObj.tagName=='em'\"\r\n      [@flyInOut]=\"htmlObj.animationStatus\"\r\n      (@flyInOut.done)=\"animationBeendet($event)\"\r\n      [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n      (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n      (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj);\"\r\n      appHtmlObjektDraggable\r\n      [id]=\"htmlObj.id\"\r\n      [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n      (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n      app-html-elemente\r\n      [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n      [innerText]=\"htmlObj.innererText\"\r\n      [hidden]=\"htmlObj.hidden\"\r\n      [class]=\"htmlObj.class\"\r\n      [dir]=\"htmlObj.dir\"\r\n      [draggable]=\"htmlObj.draggable\"\r\n      [lang]=\"htmlObj.lang\"\r\n      [spellcheck]=\"htmlObj.spellcheck\"\r\n      [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n      [attr.dropzone]=\"htmlObj.dropzone\"\r\n      [attr.accesskey]=\"htmlObj.accesskey\"\r\n      [tabindex]=\"htmlObj.tabindex\"\r\n      [title]=\"htmlObj.title\"\r\n      [translate]=\"htmlObj.translate\">\r\n  </em>\r\n\r\n  <pre *ngIf=\"htmlObj.tagName=='pre'\"\r\n       [@flyInOut]=\"htmlObj.animationStatus\"\r\n       (@flyInOut.done)=\"animationBeendet($event)\"\r\n       [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n       (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n       (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj);\"\r\n       appHtmlObjektDraggable\r\n       [id]=\"htmlObj.id\"\r\n       [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n       (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n       app-html-elemente\r\n       [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n       [innerText]=\"htmlObj.innererText\"\r\n       [hidden]=\"htmlObj.hidden\"\r\n       [class]=\"htmlObj.class\"\r\n       [dir]=\"htmlObj.dir\"\r\n       [draggable]=\"htmlObj.draggable\"\r\n       [lang]=\"htmlObj.lang\"\r\n       [spellcheck]=\"htmlObj.spellcheck\"\r\n       [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n       [attr.dropzone]=\"htmlObj.dropzone\"\r\n       [attr.accesskey]=\"htmlObj.accesskey\"\r\n       [tabindex]=\"htmlObj.tabindex\"\r\n       [title]=\"htmlObj.title\"\r\n       [translate]=\"htmlObj.translate\">\r\n  </pre>\r\n\r\n  <section *ngIf=\"htmlObj.tagName=='section'\"\r\n           [@flyInOut]=\"htmlObj.animationStatus\"\r\n           (@flyInOut.done)=\"animationBeendet($event)\"\r\n           [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n           (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n           (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj);\"\r\n           appHtmlObjektDraggable\r\n           [id]=\"htmlObj.id\"\r\n           [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n           (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n           app-html-elemente\r\n           [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n           [innerText]=\"htmlObj.innererText\"\r\n           [hidden]=\"htmlObj.hidden\"\r\n           [class]=\"htmlObj.class\"\r\n           [dir]=\"htmlObj.dir\"\r\n           [draggable]=\"htmlObj.draggable\"\r\n           [lang]=\"htmlObj.lang\"\r\n           [spellcheck]=\"htmlObj.spellcheck\"\r\n           [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n           [attr.dropzone]=\"htmlObj.dropzone\"\r\n           [attr.accesskey]=\"htmlObj.accesskey\"\r\n           [tabindex]=\"htmlObj.tabindex\"\r\n           [title]=\"htmlObj.title\"\r\n           [translate]=\"htmlObj.translate\">\r\n  </section>\r\n\r\n  <address *ngIf=\"htmlObj.tagName=='address'\"\r\n           [@flyInOut]=\"htmlObj.animationStatus\"\r\n           (@flyInOut.done)=\"animationBeendet($event)\"\r\n           [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n           (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n           (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj);\"\r\n           appHtmlObjektDraggable\r\n           [id]=\"htmlObj.id\"\r\n           [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n           (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n           app-html-elemente\r\n           [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n           [innerText]=\"htmlObj.innererText\"\r\n           [hidden]=\"htmlObj.hidden\"\r\n           [class]=\"htmlObj.class\"\r\n           [dir]=\"htmlObj.dir\"\r\n           [draggable]=\"htmlObj.draggable\"\r\n           [lang]=\"htmlObj.lang\"\r\n           [spellcheck]=\"htmlObj.spellcheck\"\r\n           [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n           [attr.dropzone]=\"htmlObj.dropzone\"\r\n           [attr.accesskey]=\"htmlObj.accesskey\"\r\n           [tabindex]=\"htmlObj.tabindex\"\r\n           [title]=\"htmlObj.title\"\r\n           [translate]=\"htmlObj.translate\">\r\n  </address>\r\n\r\n  <dialog open *ngIf=\"htmlObj.tagName=='dialog'\"\r\n          [@flyInOut]=\"htmlObj.animationStatus\"\r\n          (@flyInOut.done)=\"animationBeendet($event)\"\r\n          [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n          (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n          (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj);\"\r\n          appHtmlObjektDraggable\r\n          [id]=\"htmlObj.id\"\r\n          [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n          (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n          app-html-elemente\r\n          [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n          [innerText]=\"htmlObj.innererText\"\r\n          [hidden]=\"htmlObj.hidden\"\r\n          [class]=\"htmlObj.class\"\r\n          [dir]=\"htmlObj.dir\"\r\n          [draggable]=\"htmlObj.draggable\"\r\n          [lang]=\"htmlObj.lang\"\r\n          [spellcheck]=\"htmlObj.spellcheck\"\r\n          [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n          [attr.dropzone]=\"htmlObj.dropzone\"\r\n          [attr.accesskey]=\"htmlObj.accesskey\"\r\n          [tabindex]=\"htmlObj.tabindex\"\r\n          [title]=\"htmlObj.title\"\r\n          [translate]=\"htmlObj.translate\">\r\n  </dialog>\r\n\r\n  <hr *ngIf=\"htmlObj.tagName=='hr'\"\r\n      [@flyInOut]=\"htmlObj.animationStatus\"\r\n      (@flyInOut.done)=\"animationBeendet($event)\"\r\n      [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n      (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n      (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj);\"\r\n      appHtmlObjektDraggable\r\n      [id]=\"htmlObj.id\"\r\n      [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n      (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n      app-html-elemente\r\n      [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n      [innerText]=\"\"\r\n      [hidden]=\"htmlObj.hidden\"\r\n      [class]=\"htmlObj.class\"\r\n      [dir]=\"htmlObj.dir\"\r\n      [draggable]=\"\"\r\n      [lang]=\"htmlObj.lang\"\r\n      [spellcheck]=\"htmlObj.spellcheck\"\r\n      [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n      [attr.dropzone]=\"htmlObj.dropzone\"\r\n      [attr.accesskey]=\"htmlObj.accesskey\"\r\n      [tabindex]=\"htmlObj.tabindex\"\r\n      [title]=\"htmlObj.title\"\r\n      [translate]=\"htmlObj.translate\"\r\n  >\r\n\r\n  <blockquote *ngIf=\"htmlObj.tagName=='blockquote'\"\r\n              [@flyInOut]=\"htmlObj.animationStatus\"\r\n              (@flyInOut.done)=\"animationBeendet($event)\"\r\n              [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n              (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n              (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj);\"\r\n              appHtmlObjektDraggable\r\n              [id]=\"htmlObj.id\"\r\n              [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n              (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n              app-html-elemente\r\n              [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n              [innerText]=\"htmlObj.innererText\"\r\n              [hidden]=\"htmlObj.hidden\"\r\n              [class]=\"htmlObj.class\"\r\n              [dir]=\"htmlObj.dir\"\r\n              [draggable]=\"htmlObj.draggable\"\r\n              [lang]=\"htmlObj.lang\"\r\n              [spellcheck]=\"htmlObj.spellcheck\"\r\n              [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n              [attr.dropzone]=\"htmlObj.dropzone\"\r\n              [attr.accesskey]=\"htmlObj.accesskey\"\r\n              [tabindex]=\"htmlObj.tabindex\"\r\n              [title]=\"htmlObj.title\"\r\n              [translate]=\"htmlObj.translate\"\r\n  >\r\n  </blockquote>\r\n\r\n  <progress *ngIf=\"htmlObj.tagName=='progress'\"\r\n            [@flyInOut]=\"htmlObj.animationStatus\"\r\n            (@flyInOut.done)=\"animationBeendet($event)\"\r\n            [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n            (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n            (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj);\"\r\n            appHtmlObjektDraggable\r\n            [id]=\"htmlObj.id\"\r\n            [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n            (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n            app-html-elemente\r\n            [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n            [innerText]=\"\"\r\n            [hidden]=\"htmlObj.hidden\"\r\n            [class]=\"htmlObj.class\"\r\n            [dir]=\"htmlObj.dir\"\r\n            [draggable]=\"htmlObj.draggable\"\r\n            [lang]=\"htmlObj.lang\"\r\n            [spellcheck]=\"htmlObj.spellcheck\"\r\n            [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n            [attr.dropzone]=\"htmlObj.dropzone\"\r\n            [attr.accesskey]=\"htmlObj.accesskey\"\r\n            [tabindex]=\"htmlObj.tabindex\"\r\n            [title]=\"htmlObj.title\"\r\n            [translate]=\"htmlObj.translate\"\r\n            [max]=\"htmlObj.max\"\r\n            [value]=\"htmlObj.value\"\r\n  >\r\n  </progress>\r\n\r\n  <details *ngIf=\"htmlObj.tagName=='details'\"\r\n           [@flyInOut]=\"htmlObj.animationStatus\"\r\n           (@flyInOut.done)=\"animationBeendet($event)\"\r\n           [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n           (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n           (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj)\"\r\n           appHtmlObjektDraggable\r\n           [id]=\"htmlObj.id\"\r\n           [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n           (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n           app-html-elemente\r\n           [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n           [hidden]=\"htmlObj.hidden\"\r\n           [class]=\"htmlObj.class\"\r\n           [dir]=\"htmlObj.dir\"\r\n           [draggable]=\"htmlObj.draggable\"\r\n           [lang]=\"htmlObj.lang\"\r\n           [spellcheck]=\"htmlObj.spellcheck\"\r\n           [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n           [attr.dropzone]=\"htmlObj.dropzone\"\r\n           [attr.accesskey]=\"htmlObj.accesskey\"\r\n           [tabindex]=\"htmlObj.tabindex\"\r\n           [title]=\"htmlObj.title\"\r\n           [translate]=\"htmlObj.translate\">\r\n  </details>\r\n\r\n  <summary *ngIf=\"htmlObj.tagName=='summary'\"\r\n           [@flyInOut]=\"htmlObj.animationStatus\"\r\n           (@flyInOut.done)=\"animationBeendet($event)\"\r\n           [id]=\"htmlObj.id\"\r\n           [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n           [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n           (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n           [hidden]=\"htmlObj.hidden\"\r\n           [class]=\"htmlObj.class\"\r\n           [dir]=\"htmlObj.dir\"\r\n           [draggable]=\"htmlObj.draggable\"\r\n           [lang]=\"htmlObj.lang\"\r\n           [spellcheck]=\"htmlObj.spellcheck\"\r\n           [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n           [attr.dropzone]=\"htmlObj.dropzone\"\r\n           [attr.accesskey]=\"htmlObj.accesskey\"\r\n           [tabindex]=\"htmlObj.tabindex\"\r\n           [title]=\"htmlObj.title\"\r\n           [translate]=\"htmlObj.translate\"\r\n           [innerText]=\"htmlObj.innererText\">\r\n  </summary>\r\n\r\n\r\n  <p *ngIf=\"htmlObj.tagName=='p' && htmlObj.class === 'detailsP'\"\r\n     [@flyInOut]=\"htmlObj.animationStatus\"\r\n     (@flyInOut.done)=\"animationBeendet($event)\"\r\n     [id]=\"htmlObj.id\"\r\n     [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n     [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n     (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n     [hidden]=\"htmlObj.hidden\"\r\n     [class]=\"htmlObj.class\"\r\n     [dir]=\"htmlObj.dir\"\r\n     [draggable]=\"htmlObj.draggable\"\r\n     [lang]=\"htmlObj.lang\"\r\n     [spellcheck]=\"htmlObj.spellcheck\"\r\n     [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n     [attr.dropzone]=\"htmlObj.dropzone\"\r\n     [attr.accesskey]=\"htmlObj.accesskey\"\r\n     [tabindex]=\"htmlObj.tabindex\"\r\n     [title]=\"htmlObj.title\"\r\n     [translate]=\"htmlObj.translate\"\r\n     [innerText]=\"htmlObj.innererText\">\r\n  </p>\r\n\r\n  <meter *ngIf=\"htmlObj.tagName=='meter'\"\r\n         [@flyInOut]=\"htmlObj.animationStatus\"\r\n         (@flyInOut.done)=\"animationBeendet($event)\"\r\n         [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n         (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n         (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj);\"\r\n         appHtmlObjektDraggable\r\n         [id]=\"htmlObj.id\"\r\n         [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n         (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n         app-html-elemente\r\n         [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n         [innerText]=\"\"\r\n         [hidden]=\"htmlObj.hidden\"\r\n         [class]=\"htmlObj.class\"\r\n         [dir]=\"htmlObj.dir\"\r\n         [draggable]=\"htmlObj.draggable\"\r\n         [lang]=\"htmlObj.lang\"\r\n         [spellcheck]=\"htmlObj.spellcheck\"\r\n         [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n         [attr.dropzone]=\"htmlObj.dropzone\"\r\n         [attr.accesskey]=\"htmlObj.accesskey\"\r\n         [tabindex]=\"htmlObj.tabindex\"\r\n         [title]=\"htmlObj.title\"\r\n         [translate]=\"htmlObj.translate\"\r\n         [min]=\"htmlObj.min\"\r\n         [max]=\"htmlObj.max\"\r\n         [value]=\"htmlObj.value\"\r\n         [high]=\"htmlObj.high\"\r\n         [low]=\"htmlObj.low\"\r\n         [optimum]=\"htmlObj.optimum\"\r\n         [innerText]=\"htmlObj.innererText\"\r\n  >\r\n  </meter>\r\n\r\n  <q *ngIf=\"htmlObj.tagName=='q'\"\r\n     [@flyInOut]=\"htmlObj.animationStatus\"\r\n     (@flyInOut.done)=\"animationBeendet($event)\"\r\n     [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n     (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n     (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj);\"\r\n     appHtmlObjektDraggable\r\n     [id]=\"htmlObj.id\"\r\n     [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n     (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n     app-html-elemente\r\n     [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n     [innerText]=\"htmlObj.innererText\"\r\n     [hidden]=\"htmlObj.hidden\"\r\n     [class]=\"htmlObj.class\"\r\n     [dir]=\"htmlObj.dir\"\r\n     [draggable]=\"htmlObj.draggable\"\r\n     [lang]=\"htmlObj.lang\"\r\n     [spellcheck]=\"htmlObj.spellcheck\"\r\n     [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n     [attr.dropzone]=\"htmlObj.dropzone\"\r\n     [attr.accesskey]=\"htmlObj.accesskey\"\r\n     [tabindex]=\"htmlObj.tabindex\"\r\n     [title]=\"htmlObj.title\"\r\n     [translate]=\"htmlObj.translate\"\r\n  >\r\n  </q>\r\n\r\n  <bdo *ngIf=\"htmlObj.tagName=='bdo'\"\r\n       [@flyInOut]=\"htmlObj.animationStatus\"\r\n       (@flyInOut.done)=\"animationBeendet($event)\"\r\n       [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n       (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n       (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj);\"\r\n       appHtmlObjektDraggable\r\n       [id]=\"htmlObj.id\"\r\n       [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n       (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n       app-html-elemente\r\n       [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n       [innerText]=\"htmlObj.innererText\"\r\n       [hidden]=\"htmlObj.hidden\"\r\n       [class]=\"htmlObj.class\"\r\n       [dir]=\"htmlObj.dir\"\r\n       [draggable]=\"htmlObj.draggable\"\r\n       [lang]=\"htmlObj.lang\"\r\n       [spellcheck]=\"htmlObj.spellcheck\"\r\n       [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n       [attr.dropzone]=\"htmlObj.dropzone\"\r\n       [attr.accesskey]=\"htmlObj.accesskey\"\r\n       [tabindex]=\"htmlObj.tabindex\"\r\n       [title]=\"htmlObj.title\"\r\n       [translate]=\"htmlObj.translate\">\r\n  </bdo>\r\n\r\n  <svg *ngIf=\"htmlObj.tagName=='svg'\"\r\n       [@flyInOut]=\"htmlObj.animationStatus\"\r\n       (@flyInOut.done)=\"animationBeendet($event)\"\r\n       [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n       (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n       (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj);\"\r\n       appHtmlObjektDraggable\r\n       [id]=\"htmlObj.id\"\r\n       [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n       (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n       app-html-elemente\r\n       [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n       [innerText]=\"htmlObj.innererText\"\r\n       [hidden]=\"htmlObj.hidden\"\r\n       [dir]=\"htmlObj.dir\"\r\n       [draggable]=\"htmlObj.draggable\"\r\n       [lang]=\"htmlObj.lang\"\r\n       [spellcheck]=\"htmlObj.spellcheck\"\r\n       [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n       [attr.dropzone]=\"htmlObj.dropzone\"\r\n       [attr.accesskey]=\"htmlObj.accesskey\"\r\n       [tabindex]=\"htmlObj.tabindex\"\r\n       [title]=\"htmlObj.title\"\r\n       [translate]=\"htmlObj.translate\">\r\n  </svg>\r\n\r\n  <map *ngIf=\"htmlObj.tagName=='map'\"\r\n       [@flyInOut]=\"htmlObj.animationStatus\"\r\n       (@flyInOut.done)=\"animationBeendet($event)\"\r\n       [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n       (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n       (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj);\"\r\n       appHtmlObjektDraggable\r\n       [id]=\"htmlObj.id\"\r\n       [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n       (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n       app-html-elemente\r\n       [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n       [innerText]=\"htmlObj.innererText\"\r\n       [hidden]=\"htmlObj.hidden\"\r\n       [class]=\"htmlObj.class\"\r\n       [dir]=\"htmlObj.dir\"\r\n       [draggable]=\"htmlObj.draggable\"\r\n       [lang]=\"htmlObj.lang\"\r\n       [spellcheck]=\"htmlObj.spellcheck\"\r\n       [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n       [attr.dropzone]=\"htmlObj.dropzone\"\r\n       [attr.accesskey]=\"htmlObj.accesskey\"\r\n       [tabindex]=\"htmlObj.tabindex\"\r\n       [title]=\"htmlObj.title\"\r\n       [translate]=\"htmlObj.translate\"\r\n       [name]=\"htmlObj.name\">\r\n  </map>\r\n\r\n  <area *ngIf=\"htmlObj.tagName=='area'\"\r\n        [@flyInOut]=\"htmlObj.animationStatus\"\r\n        (@flyInOut.done)=\"animationBeendet($event)\"\r\n        [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n        (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n        (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj);\"\r\n        appHtmlObjektDraggable\r\n        [id]=\"htmlObj.id\"\r\n        [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n        (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n        app-html-elemente\r\n        [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n        [innerText]=\"htmlObj.innererText\"\r\n        [hidden]=\"htmlObj.hidden\"\r\n        [class]=\"htmlObj.class\"\r\n        [dir]=\"htmlObj.dir\"\r\n        [draggable]=\"htmlObj.draggable\"\r\n        [lang]=\"htmlObj.lang\"\r\n        [spellcheck]=\"htmlObj.spellcheck\"\r\n        [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n        [attr.dropzone]=\"htmlObj.dropzone\"\r\n        [attr.accesskey]=\"htmlObj.accesskey\"\r\n        [tabindex]=\"htmlObj.tabindex\"\r\n        [title]=\"htmlObj.title\"\r\n        [translate]=\"htmlObj.translate\"\r\n        [attr.alt]=\"htmlObj.alt\"\r\n        [coords]=\"htmlObj.coords\"\r\n        [download]=\"htmlObj.coords\"\r\n        [href]=\"htmlObj.href\"\r\n        [attr.hreflang]=\"htmlObj.hreflang\"\r\n        [attr.media]=\"htmlObj.media\"\r\n        [rel]=\"htmlObj.rel\"\r\n        [shape]=\"htmlObj.shape\"\r\n        [target]=\"htmlObj.target\"\r\n        [attr.type]=\"htmlObj.type\">\r\n\r\n  <canvas *ngIf=\"htmlObj.tagName=='canvas'\"\r\n          [@flyInOut]=\"htmlObj.animationStatus\"\r\n          (@flyInOut.done)=\"animationBeendet($event)\"\r\n          [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n          (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n          (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj);\"\r\n          appHtmlObjektDraggable\r\n          [id]=\"htmlObj.id\"\r\n          [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n          (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n          app-html-elemente\r\n          [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n          [innerText]=\"htmlObj.innererText\"\r\n          [hidden]=\"htmlObj.hidden\"\r\n          [class]=\"htmlObj.class\"\r\n          [dir]=\"htmlObj.dir\"\r\n          [draggable]=\"htmlObj.draggable\"\r\n          [lang]=\"htmlObj.lang\"\r\n          [spellcheck]=\"htmlObj.spellcheck\"\r\n          [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n          [attr.dropzone]=\"htmlObj.dropzone\"\r\n          [attr.accesskey]=\"htmlObj.accesskey\"\r\n          [tabindex]=\"htmlObj.tabindex\"\r\n          [title]=\"htmlObj.title\"\r\n          [translate]=\"htmlObj.translate\">\r\n  </canvas>\r\n\r\n  <picture *ngIf=\"htmlObj.tagName=='picture'\"\r\n           [@flyInOut]=\"htmlObj.animationStatus\"\r\n           (@flyInOut.done)=\"animationBeendet($event)\"\r\n           [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n           (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n           (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj);\"\r\n           appHtmlObjektDraggable\r\n           [id]=\"htmlObj.id\"\r\n           [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n           (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n           app-html-elemente\r\n           [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n           [innerText]=\"htmlObj.innererText\"\r\n           [hidden]=\"htmlObj.hidden\"\r\n           [class]=\"htmlObj.class\"\r\n           [dir]=\"htmlObj.dir\"\r\n           [draggable]=\"htmlObj.draggable\"\r\n           [lang]=\"htmlObj.lang\"\r\n           [spellcheck]=\"htmlObj.spellcheck\"\r\n           [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n           [attr.dropzone]=\"htmlObj.dropzone\"\r\n           [attr.accesskey]=\"htmlObj.accesskey\"\r\n           [tabindex]=\"htmlObj.tabindex\"\r\n           [title]=\"htmlObj.title\"\r\n           [translate]=\"htmlObj.translate\">\r\n  </picture>\r\n\r\n  <figure *ngIf=\"htmlObj.tagName=='figure'\"\r\n          [@flyInOut]=\"htmlObj.animationStatus\"\r\n          (@flyInOut.done)=\"animationBeendet($event)\"\r\n          [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n          (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n          (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj);\"\r\n          appHtmlObjektDraggable\r\n          [id]=\"htmlObj.id\"\r\n          [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n          (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n          app-html-elemente\r\n          [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n          [innerText]=\"htmlObj.innererText\"\r\n          [hidden]=\"htmlObj.hidden\"\r\n          [class]=\"htmlObj.class\"\r\n          [dir]=\"htmlObj.dir\"\r\n          [draggable]=\"htmlObj.draggable\"\r\n          [lang]=\"htmlObj.lang\"\r\n          [spellcheck]=\"htmlObj.spellcheck\"\r\n          [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n          [attr.dropzone]=\"htmlObj.dropzone\"\r\n          [attr.accesskey]=\"htmlObj.accesskey\"\r\n          [tabindex]=\"htmlObj.tabindex\"\r\n          [title]=\"htmlObj.title\"\r\n          [translate]=\"htmlObj.translate\">\r\n  </figure>\r\n\r\n  <figcaption *ngIf=\"htmlObj.tagName=='figcaption'\"\r\n              [@flyInOut]=\"htmlObj.animationStatus\"\r\n              (@flyInOut.done)=\"animationBeendet($event)\"\r\n              [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n              [id]=\"htmlObj.id\"\r\n              [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n              (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n              [innerText]=\"htmlObj.innererText\"\r\n              [hidden]=\"htmlObj.hidden\"\r\n              [class]=\"htmlObj.class\"\r\n              [dir]=\"htmlObj.dir\"\r\n              [draggable]=\"htmlObj.draggable\"\r\n              [lang]=\"htmlObj.lang\"\r\n              [spellcheck]=\"htmlObj.spellcheck\"\r\n              [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n              [attr.dropzone]=\"htmlObj.dropzone\"\r\n              [attr.accesskey]=\"htmlObj.accesskey\"\r\n              [tabindex]=\"htmlObj.tabindex\"\r\n              [title]=\"htmlObj.title\"\r\n              [translate]=\"htmlObj.translate\">\r\n  </figcaption>\r\n\r\n\r\n  <code *ngIf=\"htmlObj.tagName=='code'\"\r\n        [@flyInOut]=\"htmlObj.animationStatus\"\r\n        (@flyInOut.done)=\"animationBeendet($event)\"\r\n        [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n        (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n        (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj);\"\r\n        appHtmlObjektDraggable\r\n        [id]=\"htmlObj.id\"\r\n        [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n        (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n        app-html-elemente\r\n        [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n        [innerText]=\"htmlObj.innererText\"\r\n        [hidden]=\"htmlObj.hidden\"\r\n        [class]=\"htmlObj.class\"\r\n        [dir]=\"htmlObj.dir\"\r\n        [draggable]=\"htmlObj.draggable\"\r\n        [lang]=\"htmlObj.lang\"\r\n        [spellcheck]=\"htmlObj.spellcheck\"\r\n        [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n        [attr.dropzone]=\"htmlObj.dropzone\"\r\n        [attr.accesskey]=\"htmlObj.accesskey\"\r\n        [tabindex]=\"htmlObj.tabindex\"\r\n        [title]=\"htmlObj.title\"\r\n        [translate]=\"htmlObj.translate\"\r\n  >\r\n  </code>\r\n\r\n  <kbd *ngIf=\"htmlObj.tagName=='kbd'\"\r\n       [@flyInOut]=\"htmlObj.animationStatus\"\r\n       (@flyInOut.done)=\"animationBeendet($event)\"\r\n       [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n       (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n       (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj);\"\r\n       appHtmlObjektDraggable\r\n       [id]=\"htmlObj.id\"\r\n       [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n       (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n       app-html-elemente\r\n       [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n       [innerText]=\"htmlObj.innererText\"\r\n       [hidden]=\"htmlObj.hidden\"\r\n       [class]=\"htmlObj.class\"\r\n       [dir]=\"htmlObj.dir\"\r\n       [draggable]=\"htmlObj.draggable\"\r\n       [lang]=\"htmlObj.lang\"\r\n       [spellcheck]=\"htmlObj.spellcheck\"\r\n       [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n       [attr.dropzone]=\"htmlObj.dropzone\"\r\n       [attr.accesskey]=\"htmlObj.accesskey\"\r\n       [tabindex]=\"htmlObj.tabindex\"\r\n       [title]=\"htmlObj.title\"\r\n       [translate]=\"htmlObj.translate\"\r\n  >\r\n  </kbd>\r\n\r\n  <samp *ngIf=\"htmlObj.tagName=='samp'\"\r\n        [@flyInOut]=\"htmlObj.animationStatus\"\r\n        (@flyInOut.done)=\"animationBeendet($event)\"\r\n        [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n        (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n        (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj);\"\r\n        appHtmlObjektDraggable\r\n        [id]=\"htmlObj.id\"\r\n        [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n        (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n        app-html-elemente\r\n        [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n        [innerText]=\"htmlObj.innererText\"\r\n        [hidden]=\"htmlObj.hidden\"\r\n        [class]=\"htmlObj.class\"\r\n        [dir]=\"htmlObj.dir\"\r\n        [draggable]=\"htmlObj.draggable\"\r\n        [lang]=\"htmlObj.lang\"\r\n        [spellcheck]=\"htmlObj.spellcheck\"\r\n        [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n        [attr.dropzone]=\"htmlObj.dropzone\"\r\n        [attr.accesskey]=\"htmlObj.accesskey\"\r\n        [tabindex]=\"htmlObj.tabindex\"\r\n        [title]=\"htmlObj.title\"\r\n        [translate]=\"htmlObj.translate\"\r\n  >\r\n  </samp>\r\n\r\n  <var *ngIf=\"htmlObj.tagName=='var'\"\r\n       [@flyInOut]=\"htmlObj.animationStatus\"\r\n       (@flyInOut.done)=\"animationBeendet($event)\"\r\n       [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n       (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n       (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj);\"\r\n       appHtmlObjektDraggable\r\n       [id]=\"htmlObj.id\"\r\n       [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n       (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n       app-html-elemente\r\n       [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n       [innerText]=\"htmlObj.innererText\"\r\n       [hidden]=\"htmlObj.hidden\"\r\n       [class]=\"htmlObj.class\"\r\n       [dir]=\"htmlObj.dir\"\r\n       [draggable]=\"htmlObj.draggable\"\r\n       [lang]=\"htmlObj.lang\"\r\n       [spellcheck]=\"htmlObj.spellcheck\"\r\n       [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n       [attr.dropzone]=\"htmlObj.dropzone\"\r\n       [attr.accesskey]=\"htmlObj.accesskey\"\r\n       [tabindex]=\"htmlObj.tabindex\"\r\n       [title]=\"htmlObj.title\"\r\n       [translate]=\"htmlObj.translate\"\r\n  >\r\n  </var>\r\n\r\n  <aside *ngIf=\"htmlObj.tagName=='aside'\"\r\n         [@flyInOut]=\"htmlObj.animationStatus\"\r\n         (@flyInOut.done)=\"animationBeendet($event)\"\r\n         [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n         (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n         (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj);\"\r\n         appHtmlObjektDraggable\r\n         [id]=\"htmlObj.id\"\r\n         [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n         (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n         app-html-elemente\r\n         [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n         [innerText]=\"htmlObj.innererText\"\r\n         [hidden]=\"htmlObj.hidden\"\r\n         [class]=\"htmlObj.class\"\r\n         [dir]=\"htmlObj.dir\"\r\n         [draggable]=\"htmlObj.draggable\"\r\n         [lang]=\"htmlObj.lang\"\r\n         [spellcheck]=\"htmlObj.spellcheck\"\r\n         [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n         [attr.dropzone]=\"htmlObj.dropzone\"\r\n         [attr.accesskey]=\"htmlObj.accesskey\"\r\n         [tabindex]=\"htmlObj.tabindex\"\r\n         [title]=\"htmlObj.title\"\r\n         [translate]=\"htmlObj.translate\"\r\n  >\r\n  </aside>\r\n\r\n    <audio *ngIf=\"htmlObj.tagName=='audio'\"\r\n           controls\r\n           [@flyInOut]=\"htmlObj.animationStatus\"\r\n           (@flyInOut.done)=\"animationBeendet($event)\"\r\n           [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n           (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n           (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj);\"\r\n           appHtmlObjektDraggable\r\n           [id]=\"htmlObj.id\"\r\n           [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n           (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n           app-html-elemente\r\n           [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n           [innerText]=\"htmlObj.innererText\"\r\n           [hidden]=\"htmlObj.hidden\"\r\n           [class]=\"htmlObj.class\"\r\n           [draggable]=\"htmlObj.draggable\"\r\n           [lang]=\"htmlObj.lang\"\r\n           [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n           [attr.dropzone]=\"htmlObj.dropzone\"\r\n           [attr.accesskey]=\"htmlObj.accesskey\"\r\n           [tabindex]=\"htmlObj.tabindex\"\r\n           [title]=\"htmlObj.title\"\r\n           [translate]=\"htmlObj.translate\"\r\n           [src]=\"htmlObj.src\"\r\n           [autoplay]=\"htmlObj.autoplay\"\r\n           [controls]=\"htmlObj.controls\"\r\n           [loop]=\"htmlObj.loop\"\r\n           [muted]=\"htmlObj.muted\"\r\n           [preload]=\"htmlObj.preload\"\r\n    >\r\n    </audio>\r\n\r\n    <video *ngIf=\"htmlObj.tagName=='video'\"\r\n           controls\r\n           [@flyInOut]=\"htmlObj.animationStatus\"\r\n           (@flyInOut.done)=\"animationBeendet($event)\"\r\n           [class.selected]=\"ausgewaehltesObjekt === htmlObj\"\r\n           (change)=\"beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern($event)\"\r\n           (dragGreenSockDraggable)=\"beiDragEndeGetroffenesObjektMarkieren($event,htmlObj);\"\r\n           appHtmlObjektDraggable\r\n           [id]=\"htmlObj.id\"\r\n           [ngStyle]=\"styleSheetFuerDasElementErzeugen(htmlObj)\"\r\n           (click)=\"htmlElementAuswaehlen($event,htmlObj)\"\r\n           app-html-elemente\r\n           [htmlObjekte]=\"htmlObj.innereHTMLObjekte\"\r\n           [innerText]=\"htmlObj.innererText\"\r\n           [hidden]=\"htmlObj.hidden\"\r\n           [class]=\"htmlObj.class\"\r\n           [dir]=\"htmlObj.dir\"\r\n           [draggable]=\"htmlObj.draggable\"\r\n           [lang]=\"htmlObj.lang\"\r\n           [spellcheck]=\"htmlObj.spellcheck\"\r\n           [attr.contenteditable]=\"htmlObj.contenteditable\"\r\n           [attr.dropzone]=\"htmlObj.dropzone\"\r\n           [attr.accesskey]=\"htmlObj.accesskey\"\r\n           [tabindex]=\"htmlObj.tabindex\"\r\n           [title]=\"htmlObj.title\"\r\n           [translate]=\"htmlObj.translate\"\r\n           [src]=\"htmlObj.src\"\r\n           [autoplay]=\"htmlObj.autoplay\"\r\n           [controls]=\"htmlObj.controls\"\r\n           [loop]=\"htmlObj.loop\"\r\n           [muted]=\"htmlObj.muted\"\r\n           [preload]=\"htmlObj.preload\"\r\n           [poster]=\"htmlObj.poster\"\r\n    >\r\n    </video>\r\n\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/dashboard/grid/html-elemente/html-elemente.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/grid/html-elemente/html-elemente.component.ts ***!
  \*************************************************************************/
/*! exports provided: HtmlElementeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlElementeComponent", function() { return HtmlElementeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _html_objekte_HTMLObjekt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../html-objekte/HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
/* harmony import */ var _aufloesung_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../aufloesung.service */ "./src/app/aufloesung.service.ts");
/* harmony import */ var _html_objekt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../html-objekt.service */ "./src/app/dashboard/html-objekt.service.ts");
/* harmony import */ var _grid_objekte_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../grid-objekte.service */ "./src/app/dashboard/grid-objekte.service.ts");
/* harmony import */ var _toolbar_seiten_navi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../toolbar/seiten-navi.service */ "./src/app/dashboard/toolbar/seiten-navi.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HtmlElementeComponent = /** @class */ (function () {
    function HtmlElementeComponent(aufloesungService, // Auflösung des Bildschirms ermitteln
    renderer, // Wird zur DOM-Manipulation benötigt
    htmlObjektService, gridObjekteService, seitenNavService) {
        var _this = this;
        this.aufloesungService = aufloesungService;
        this.renderer = renderer;
        this.htmlObjektService = htmlObjektService;
        this.gridObjekteService = gridObjekteService;
        this.seitenNavService = seitenNavService;
        // An dem HTML-Objekt Service anmelden und über Änderungen informiert werden
        this.htmlObjektService.myMethod$.subscribe(function (data) {
            _this.ausgewaehltesObjekt = data;
        });
    }
    HtmlElementeComponent.prototype.ngOnInit = function () {
        if (this.htmlObjekte == null) {
            this.htmlObjekte = this.gridObjekteService.getGridHtmlObjekte();
        }
        this.seitenNavService.ausgewaehlterButton = 'attribute';
    };
    HtmlElementeComponent.prototype.animationBeendet = function (event) {
        this.gridObjekteService.animationZueruecksetzen();
    };
    HtmlElementeComponent.prototype.beiDragEndeGetroffenesObjektMarkieren = function (drag, dragHTMLObjekt) {
        this.getroffeneObjektID = null;
        if (!isNaN(drag[0].endX) && !isNaN(drag[0].endY)) {
            var elementFromDocument = document.elementFromPoint(drag[0].endX + 11, drag[0].endY + 11);
            if (null != elementFromDocument && !isNaN(parseInt(elementFromDocument.id, 10))) {
                this.getroffeneObjektID = elementFromDocument.id;
            }
        }
    };
    HtmlElementeComponent.prototype.testenObInHTMLObjektGedropptWerdenDarf = function (htmlObjekt) {
        // Verhindern dass das Element in sich selbst gedroppt wird.
        if (this.ausgewaehltesObjekt.id === parseInt(this.getroffeneObjektID, 10)) {
            return false;
        }
        // Verhindern das Elemente in eigene Kind-Elemente eingefügt werden.
        if (this.istGetroffenesElementEinKindElement(parseInt(this.getroffeneObjektID, 10), this.ausgewaehltesObjekt.innereHTMLObjekte)) {
            return false;
        }
        // Es dürfen nur in Div, Span und TD Elemente eingefügt werden
        return htmlObjekt.inDiesesObjektKannGedropptWerden;
    };
    HtmlElementeComponent.prototype.beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern = function (drag) {
        if (null != drag[0]) {
            var varX = drag[0].endX;
            var varY = drag[0].endY;
            this.ausgewaehltesObjekt.position_x = varX + 'px';
            this.ausgewaehltesObjekt.position_y = varY + 'px';
            this.gridObjekteService.abspeichern(this.gridObjekteService.holeAktuelleSeitenId());
            // this.getroffeneObjektID wird ermittelt durch die Methode beiDragEndeGetroffenesObjektMarkieren()
            // beiDragEndeGetroffenesObjektMarkieren() wird wiederrum aufgerufen durch ein Event in html-elemente.component.html
            if (this.getroffeneObjektID != null) {
                var neuGeladenesGetroffenesObjekt = this.gridObjekteService.objektAnhandDerIDHolen(parseInt(this.getroffeneObjektID, 10));
                if (this.testenObInHTMLObjektGedropptWerdenDarf(neuGeladenesGetroffenesObjekt)) {
                    this.inGetroffenesObjektEinfuegenUndAusGridLoeschen(neuGeladenesGetroffenesObjekt);
                }
            }
        }
    };
    HtmlElementeComponent.prototype.istGetroffenesElementEinKindElement = function (id, objekte) {
        if (null != objekte) {
            for (var _i = 0, objekte_1 = objekte; _i < objekte_1.length; _i++) {
                var htmlObjekt = objekte_1[_i];
                if (htmlObjekt.id === id) {
                    return true;
                }
                else if (htmlObjekt.innereHTMLObjekte != null && htmlObjekt.innereHTMLObjekte.length > 0) {
                    var wurdeKindElementGefunden = this.istGetroffenesElementEinKindElement(id, htmlObjekt.innereHTMLObjekte);
                    if (wurdeKindElementGefunden != null) {
                        return (wurdeKindElementGefunden);
                    }
                }
            }
        }
    };
    HtmlElementeComponent.prototype.inGetroffenesObjektEinfuegenUndAusGridLoeschen = function (neuGeladenesGetroffenesObjekt) {
        // Kopie von ausgwählten Objekt erzeugen und dieses static machen, damit es dem natürlichen
        // Flow der Webseite innerhalb eines Elementes folgt.
        var kopwieVonAusgewaehltemHTMLObjekt = Object.assign(new _html_objekte_HTMLObjekt__WEBPACK_IMPORTED_MODULE_1__["HTMLObjekt"](), this.ausgewaehltesObjekt);
        kopwieVonAusgewaehltemHTMLObjekt.position = 'static';
        // Kopie von den inneren Elementen erstellen und diesem das neueElement hinzufügen
        if (null != neuGeladenesGetroffenesObjekt) {
            var kopieVonInnerenObjekten = (Object.assign([], neuGeladenesGetroffenesObjekt.innereHTMLObjekte));
            kopieVonInnerenObjekten.push(kopwieVonAusgewaehltemHTMLObjekt);
            neuGeladenesGetroffenesObjekt.innereHTMLObjekte = kopieVonInnerenObjekten;
            this.gridObjekteService.einzelnesHtmlObjektLoeschen(this.ausgewaehltesObjekt);
        }
        this.getroffeneObjektID = null;
    };
    HtmlElementeComponent.prototype.htmlElementAuswaehlen = function (event, obj) {
        // Verhindern dass das darunter liegende Element ausgewählt wird.
        event.stopImmediatePropagation();
        // Ausgewähltes Objekt an alle angemeldeten Komponenten verteilen
        this.htmlObjektService.htmlObjektVerteilen(obj);
        if (this.seitenNavService.ausgewaehlterButton === 'attribute') {
            this.seitenNavService.menuePunkt = obj.tagName;
        }
    };
    HtmlElementeComponent.prototype.styleSheetFuerDasElementErzeugen = function (htmlObj) {
        if (htmlObj.widthAusschalten || htmlObj.width === '' + 0) {
            return {
                // Allgemein
                'width': 'auto',
                'height': '' + htmlObj.height,
                'background-color': '' + htmlObj.background_color,
                'z-index': '' + htmlObj.z_index,
                'background': '' + htmlObj.background,
                'opacity': '' + htmlObj.opacity,
                'overflow': '' + htmlObj.overflow,
                'visibility': '' + htmlObj.visibility,
                // Text
                'font-style': '' + htmlObj.font_style,
                'font-weight': '' + htmlObj.font_weight,
                'color': '' + htmlObj.color,
                'font-family': '' + htmlObj.font_family,
                'text-align': '' + htmlObj.text_align,
                'word-break': '' + htmlObj.word_break,
                'word-wrap': '' + htmlObj.word_wrap,
                'white-space': '' + htmlObj.white_space,
                'font-size': '' + htmlObj.font_size,
                // Ausrichtung
                'position': '' + htmlObj.position,
                'left': '' + htmlObj.position_x,
                'top': '' + htmlObj.position_y,
                'margin': '' + htmlObj.margin,
                'transform': '' + htmlObj.transform,
                'display': '' + htmlObj.display,
                'float': '' + htmlObj.float,
                'clear': '' + htmlObj.clear,
                // Umrandung
                'border': '' + htmlObj.border,
                'padding': '' + htmlObj.padding,
                'border-color': '' + htmlObj.border_color,
                'border-radius': '' + htmlObj.border_radius,
                'border-style': '' + htmlObj.border_style,
                'outline': '' + htmlObj.outline
            };
        }
        else {
            return {
                // Allgemein
                'width': '' + htmlObj.width,
                'height': '' + htmlObj.height,
                'background-color': '' + htmlObj.background_color,
                'z-index': '' + htmlObj.z_index,
                'background': '' + htmlObj.background,
                'opacity': '' + htmlObj.opacity,
                'overflow': '' + htmlObj.overflow,
                'visibility': '' + htmlObj.visibility,
                // Text
                'font-style': '' + htmlObj.font_style,
                'font-weight': '' + htmlObj.font_weight,
                'color': '' + htmlObj.color,
                'font-family': '' + htmlObj.font_family,
                'text-align': '' + htmlObj.text_align,
                'word-break': '' + htmlObj.word_break,
                'word-wrap': '' + htmlObj.word_wrap,
                'white-space': '' + htmlObj.white_space,
                'font-size': '' + htmlObj.font_size,
                // Ausrichtung
                'position': '' + htmlObj.position,
                'left': '' + htmlObj.position_x,
                'top': '' + htmlObj.position_y,
                'margin': '' + htmlObj.margin,
                'transform': '' + htmlObj.transform,
                'display': '' + htmlObj.display,
                'float': '' + htmlObj.float,
                'clear': '' + htmlObj.clear,
                // Umrandung
                'border': '' + htmlObj.border,
                'padding': '' + htmlObj.padding,
                'border-color': '' + htmlObj.border_color,
                'border-radius': '' + htmlObj.border_radius,
                'border-style': '' + htmlObj.border_style,
                'outline': '' + htmlObj.outline
            };
        }
    };
    // Methoden für Interne Links sind hier !!! @created by Yavuz Bulunmaz --------------------------------------------
    HtmlElementeComponent.prototype.ladeSeite = function (neueId) {
        var valide = this.validiereInput(neueId);
        if (valide === true) {
            var zurzeitVerwendeteId = this.gridObjekteService.holeAktuelleSeitenId();
            this.gridObjekteService.abspeichern(zurzeitVerwendeteId);
            this.gridObjekteService.setzeAktuelleSeitenId(neueId);
            this.speichereAktuelleIdImLC();
            window.location.reload();
        }
    };
    HtmlElementeComponent.prototype.speichereAktuelleIdImLC = function () {
        localStorage.setItem('aktuelleSeitenId', this.gridObjekteService.holeAktuelleSeitenId());
    };
    // test auf valide Eingabe im Input, bestimmt ob eine Seite geladen werden kann
    HtmlElementeComponent.prototype.validiereInput = function (inputId) {
        var istValide;
        istValide = false;
        // Überprüft ob die Seite existiert, Wenn ja wird ein true zurück gegeben
        for (var i = 0; i < this.seitenNavService.seitenListe.length; i++) {
            if (inputId === this.seitenNavService.seitenListe[i]) {
                istValide = true;
            }
        }
        return istValide;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HtmlElementeComponent.prototype, "htmlObjekte", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HtmlElementeComponent.prototype, "innerText", void 0);
    HtmlElementeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[app-html-elemente]',
            template: __webpack_require__(/*! ./html-elemente.component.html */ "./src/app/dashboard/grid/html-elemente/html-elemente.component.html"),
            styles: [__webpack_require__(/*! ./html-elemente.component.css */ "./src/app/dashboard/grid/html-elemente/html-elemente.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('flyInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0, transform: 'scale(0)', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1, transform: 'scale(1)', offset: 1.0 })
                        ]))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => change', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0, transform: 'scale(0)', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1, transform: 'scale(1)', offset: 1.0 })
                        ]))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_aufloesung_service__WEBPACK_IMPORTED_MODULE_2__["AufloesungService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _html_objekt_service__WEBPACK_IMPORTED_MODULE_3__["HtmlObjektService"],
            _grid_objekte_service__WEBPACK_IMPORTED_MODULE_4__["GridObjekteService"],
            _toolbar_seiten_navi_service__WEBPACK_IMPORTED_MODULE_5__["SeitenNaviService"]])
    ], HtmlElementeComponent);
    return HtmlElementeComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/grid/html-objekt-draggable.directive.ts":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/grid/html-objekt-draggable.directive.ts ***!
  \*******************************************************************/
/*! exports provided: HtmlObjektDraggableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlObjektDraggableDirective", function() { return HtmlObjektDraggableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _aufloesung_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../aufloesung.service */ "./src/app/aufloesung.service.ts");
/* harmony import */ var _dashboard_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard-settings.service */ "./src/app/dashboard/dashboard-settings.service.ts");
/* harmony import */ var _dashboard_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard-animations */ "./src/app/dashboard/dashboard-animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HtmlObjektDraggableDirective = /** @class */ (function () {
    function HtmlObjektDraggableDirective(elementRef, aufloesungService, renderer, dashboardSettingsService) {
        var _this = this;
        this.elementRef = elementRef;
        this.aufloesungService = aufloesungService;
        this.renderer = renderer;
        this.dashboardSettingsService = dashboardSettingsService;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dragGreenSockDraggable = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.snapWeite = 1;
        this.span = this.renderer.createElement('span');
        // An SettingsService Anmelden für änderung der Snapoptionen
        this.dashboardSettingsService.myMethod$.subscribe(function (data) {
            _this.settings = data;
        });
    }
    HtmlObjektDraggableDirective.prototype.ngOnInit = function () {
        var self = this;
        // Die Abfrage ob ein Element static ist, verhindert, dass Elemente im Fluss und auch innerhalb von anderen
        // Objekten, verschoben werden können.
        if (this.elementRef.nativeElement.style.position !== 'static') {
            this.drag = Draggable.create(this.elementRef.nativeElement, {
                type: 'top,left',
                bounds: '#dropzoneDashboard',
                onPress: function (e) {
                    e.stopPropagation(); // verhindert das mehrere Elemente gleichzeitig verschoben werden
                },
                onDragStart: function () {
                    _dashboard_animations__WEBPACK_IMPORTED_MODULE_3__["DashboardAnimations"].animiereBeiKlickDrag(self.elementRef.nativeElement);
                    self.setSnapWeite();
                    self.renderer.addClass(self.span, 'zeigerDrop');
                    self.renderer.addClass(self.elementRef.nativeElement, 'markiertesElement');
                    self.renderer.appendChild(self.elementRef.nativeElement, self.span);
                    _dashboard_animations__WEBPACK_IMPORTED_MODULE_3__["DashboardAnimations"].animiereBeiKlickDrag(self.elementRef.nativeElement);
                },
                onDragEnd: function () {
                    _dashboard_animations__WEBPACK_IMPORTED_MODULE_3__["DashboardAnimations"].animiereBeiKlickDrop(self.elementRef.nativeElement);
                    self.renderer.removeClass(self.elementRef.nativeElement, 'zeigerDrop');
                    self.renderer.removeClass(self.elementRef.nativeElement, 'markiertesElement');
                    self.renderer.removeChild(self.elementRef.nativeElement, self.span);
                    var event = new MouseEvent('click', { bubbles: true });
                    self.elementRef.nativeElement.dispatchEvent(event);
                    self.change.emit(self.drag);
                },
                liveSnap: {
                    top: function (endValue) {
                        self.dragGreenSockDraggable.emit(self.drag);
                        return Math.round(endValue / self.snapWeite) * self.snapWeite;
                    },
                    left: function (endValue) {
                        self.dragGreenSockDraggable.emit(self.drag);
                        return Math.round(endValue / self.snapWeite) * self.snapWeite;
                    }
                }
            });
        }
    };
    HtmlObjektDraggableDirective.prototype.setSnapWeite = function () {
        // Legt fest welche Snapweite unten im LiveSnap verwendet wird
        // Variablen geholt über settings Service -> Observable/ für settings
        if (this.settings.snapWeite === 0) {
            this.snapWeite = 1; // Pixelgenau
        }
        else if (this.settings.snapWeite === 1) {
            this.snapWeite = this.aufloesungService.getAufloesung().weiteAufteilungLineal / 10; // grid klein
        }
        else if (this.settings.snapWeite === 2) {
            this.snapWeite = this.aufloesungService.getAufloesung().weiteAufteilungLineal; // grid groß
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], HtmlObjektDraggableDirective.prototype, "change", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], HtmlObjektDraggableDirective.prototype, "dragGreenSockDraggable", void 0);
    HtmlObjektDraggableDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appHtmlObjektDraggable]',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _aufloesung_service__WEBPACK_IMPORTED_MODULE_1__["AufloesungService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _dashboard_settings_service__WEBPACK_IMPORTED_MODULE_2__["DashboardSettingsService"]])
    ], HtmlObjektDraggableDirective);
    return HtmlObjektDraggableDirective;
}());



/***/ }),

/***/ "./src/app/dashboard/html-objekt.service.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/html-objekt.service.ts ***!
  \**************************************************/
/*! exports provided: HtmlObjektService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlObjektService", function() { return HtmlObjektService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _html_objekte_HTMLObjekt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./html-objekte/HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Created by Samuel Werner <samuel.werner@iem.thm.de>  on 21.05.2018
 */
var HtmlObjektService = /** @class */ (function () {
    function HtmlObjektService() {
        this.myMethodSubject = new rxjs_index__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new _html_objekte_HTMLObjekt__WEBPACK_IMPORTED_MODULE_2__["HTMLObjekt"]());
        this.myMethod$ = this.myMethodSubject.asObservable();
    }
    HtmlObjektService.prototype.htmlObjektVerteilen = function (data) {
        // An alle verteilen die sich am Service angemeldet haben
        this.myMethodSubject.next(data);
    };
    HtmlObjektService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HtmlObjektService);
    return HtmlObjektService;
}());



/***/ }),

/***/ "./src/app/dashboard/html-objekte/A.ts":
/*!*********************************************!*\
  !*** ./src/app/dashboard/html-objekte/A.ts ***!
  \*********************************************/
/*! exports provided: A */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return A; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var A = /** @class */ (function (_super) {
    __extends(A, _super);
    function A(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.istEinInternerLink = false;
        _this.tagName = 'a';
        _this.background_color = '';
        _this.width = weite;
        _this.height = hoehe;
        _this.innererText = 'Ich bin ein Link!';
        _this.position = 'absolute';
        _this.innereHTMLObjekte = new Array();
        _this.href = 'https://www.thm.de/site/';
        return _this;
    }
    return A;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/Area.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/html-objekte/Area.ts ***!
  \************************************************/
/*! exports provided: Area */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Area", function() { return Area; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Samuel Werner on 05.06.2018
 */

var Area = /** @class */ (function (_super) {
    __extends(Area, _super);
    function Area(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'area';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = 'transparent';
        _this.border = '1px solid red';
        _this.position = 'static';
        _this.innererText = '';
        _this.inDiesesObjektKannGedropptWerden = false;
        _this.innereHTMLObjekte = [];
        return _this;
    }
    return Area;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/Article.ts":
/*!***************************************************!*\
  !*** ./src/app/dashboard/html-objekte/Article.ts ***!
  \***************************************************/
/*! exports provided: Article */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Sabrina Adam<sabrina.adam@iem.thm.de>  on 13.06.2018
 */

var Article = /** @class */ (function (_super) {
    __extends(Article, _super);
    function Article(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'article';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = '#ff0000';
        _this.border = '';
        _this.border_color = 'black';
        _this.position = 'absolute';
        _this.innererText = '';
        _this.font_style = '';
        _this.inDiesesObjektKannGedropptWerden = true;
        _this.innereHTMLObjekte = [];
        return _this;
    }
    return Article;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/Body.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/html-objekte/Body.ts ***!
  \************************************************/
/*! exports provided: Body */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return Body; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Sabrina Adam<sabrina.adam@iem.thm.de>  on 13.06.2018
 */

var Body = /** @class */ (function (_super) {
    __extends(Body, _super);
    // der Bodytag muss wegen seines verhaltens und seiner einzigartigkeit noch speziell angepasst werden
    // da er aktuell Probleme bei der platzierung macht.
    function Body(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'body';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = '#ff0000';
        _this.border = '';
        _this.border_color = 'black';
        _this.position = 'static';
        _this.innererText = '';
        _this.font_style = '';
        _this.inDiesesObjektKannGedropptWerden = true;
        _this.innereHTMLObjekte = [];
        return _this;
    }
    return Body;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/Canvas.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/html-objekte/Canvas.ts ***!
  \**************************************************/
/*! exports provided: Canvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return Canvas; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Samuel Werner on 05.06.2018
 */

var Canvas = /** @class */ (function (_super) {
    __extends(Canvas, _super);
    function Canvas(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'canvas';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = '#eee';
        _this.position = 'absolute';
        _this.innererText = '';
        _this.inDiesesObjektKannGedropptWerden = false;
        return _this;
    }
    return Canvas;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/Div.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/html-objekte/Div.ts ***!
  \***********************************************/
/*! exports provided: Div */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Div", function() { return Div; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Samuel Werner <samuel.werner@iem.thm.de>  on 21.05.2018
 */

var Div = /** @class */ (function (_super) {
    __extends(Div, _super);
    // Keine speziellen Attribute
    function Div(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'div';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = '#ff0000';
        _this.border = '0.05rem solid';
        _this.border_color = 'black';
        _this.position = 'absolute';
        _this.innererText = '';
        _this.font_style = '';
        _this.inDiesesObjektKannGedropptWerden = true;
        _this.innereHTMLObjekte = [];
        return _this;
    }
    return Div;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/Figcaption.ts":
/*!******************************************************!*\
  !*** ./src/app/dashboard/html-objekte/Figcaption.ts ***!
  \******************************************************/
/*! exports provided: Figcaption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Figcaption", function() { return Figcaption; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Samuel Werner on 05.06.2018
 */

var Figcaption = /** @class */ (function (_super) {
    __extends(Figcaption, _super);
    function Figcaption(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'figcaption';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = '#eee';
        _this.position = 'static';
        _this.innererText = 'In dieses Element img droppen';
        _this.inDiesesObjektKannGedropptWerden = false;
        _this.innereHTMLObjekte = [];
        return _this;
    }
    return Figcaption;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/Figure.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/html-objekte/Figure.ts ***!
  \**************************************************/
/*! exports provided: Figure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Figure", function() { return Figure; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Samuel Werner on 05.06.2018
 */

var Figure = /** @class */ (function (_super) {
    __extends(Figure, _super);
    function Figure(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'figure';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = '#eee';
        _this.position = 'absolute';
        _this.innererText = '';
        _this.inDiesesObjektKannGedropptWerden = true;
        _this.innereHTMLObjekte = [];
        return _this;
    }
    return Figure;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/Footer.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/html-objekte/Footer.ts ***!
  \**************************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Sabrina Adam<sabrina.adam@iem.thm.de>  on 13.06.2018
 */

var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'footer';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = '#ff0000';
        _this.border = '';
        _this.border_color = 'black';
        _this.position = 'absolute';
        _this.innererText = '';
        _this.font_style = '';
        _this.inDiesesObjektKannGedropptWerden = true;
        _this.innereHTMLObjekte = [];
        return _this;
    }
    return Footer;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/HTMLObjekt.ts":
/*!******************************************************!*\
  !*** ./src/app/dashboard/html-objekte/HTMLObjekt.ts ***!
  \******************************************************/
/*! exports provided: HTMLObjekt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLObjekt", function() { return HTMLObjekt; });
/**
 * Created by Samuel Werner <samuel.werner@iem.thm.de> on 21.05.2018
 *
 * Alle HTML-Objekte aus dem html-objekte Verzeichnis erben von diesem Objekt
 * Das Objekt hat alle Attribute aus dem HTML5 Standard, zudem die gängigsten
 * CSS-Attribute.
 *
 * Das HTML-Objekt kann Kind-Elemente aufnehmen die wiederrum ein HTMLObjekt sind.
 * Dadurch können die typischen Verschachtelungen, die man von HTML-Dokumenten
 * kennt, aufgebaut werden.
 */
var HTMLObjekt = /** @class */ (function () {
    function HTMLObjekt() {
        this.innererText = '';
    }
    return HTMLObjekt;
}());



/***/ }),

/***/ "./src/app/dashboard/html-objekte/Header.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/html-objekte/Header.ts ***!
  \**************************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Sabrina Adam<sabrina.adam@iem.thm.de>  on 13.06.2018
 */

var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'header';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = '#ff0000';
        _this.border = '';
        _this.border_color = 'black';
        _this.position = 'absolute';
        _this.innererText = '';
        _this.font_style = '';
        _this.inDiesesObjektKannGedropptWerden = true;
        _this.innereHTMLObjekte = [];
        return _this;
    }
    return Header;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/Headline.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/html-objekte/Headline.ts ***!
  \****************************************************/
/*! exports provided: Headline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headline", function() { return Headline; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Sabrina Adam <samuel.werner@iem.thm.de>  on 11.06.2018
 */

var Headline = /** @class */ (function (_super) {
    __extends(Headline, _super);
    function Headline(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'h1';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = '#ff0000';
        _this.border = '0.1rem solid';
        _this.border_color = 'black';
        _this.position = 'absolute';
        _this.innererText = 'Ich bin eine h1 Headline';
        _this.font_style = '';
        _this.inDiesesObjektKannGedropptWerden = false;
        return _this;
    }
    return Headline;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/Img.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/html-objekte/Img.ts ***!
  \***********************************************/
/*! exports provided: Img */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Img", function() { return Img; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Samuel Werner on 05.06.2018
 */

var Img = /** @class */ (function (_super) {
    __extends(Img, _super);
    function Img(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'img';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = 'black';
        _this.position = 'absolute';
        _this.innererText = '';
        _this.src = './assets/images/Logo.jpg';
        _this.innereHTMLObjekte = [];
        return _this;
    }
    return Img;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/Main.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/html-objekte/Main.ts ***!
  \************************************************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Sabrina Adam<sabrina.adam@iem.thm.de>  on 13.06.2018
 */

var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'main';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = '#ff0000';
        _this.border = '';
        _this.border_color = 'black';
        _this.position = 'absolute';
        _this.innererText = '';
        _this.font_style = '';
        _this.inDiesesObjektKannGedropptWerden = true;
        _this.innereHTMLObjekte = [];
        return _this;
    }
    return Main;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/Map.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/html-objekte/Map.ts ***!
  \***********************************************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Samuel Werner on 05.06.2018
 */

var Map = /** @class */ (function (_super) {
    __extends(Map, _super);
    function Map(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'map';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = 'transparent';
        _this.position = 'static';
        _this.innererText = '';
        _this.inDiesesObjektKannGedropptWerden = false;
        _this.innereHTMLObjekte = [];
        return _this;
    }
    return Map;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/Picture.ts":
/*!***************************************************!*\
  !*** ./src/app/dashboard/html-objekte/Picture.ts ***!
  \***************************************************/
/*! exports provided: Picture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Picture", function() { return Picture; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Samuel Werner on 05.06.2018
 */

var Picture = /** @class */ (function (_super) {
    __extends(Picture, _super);
    function Picture(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'picture';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = '#eee';
        _this.position = 'absolute';
        _this.innererText = 'In dieses Element img droppen';
        _this.inDiesesObjektKannGedropptWerden = true;
        _this.innereHTMLObjekte = [];
        return _this;
    }
    return Picture;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/Strong.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/html-objekte/Strong.ts ***!
  \**************************************************/
/*! exports provided: Strong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Strong", function() { return Strong; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Strong = /** @class */ (function (_super) {
    __extends(Strong, _super);
    function Strong(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'strong';
        _this.background_color = '';
        _this.font_weight = 'bold';
        _this.width = weite;
        _this.height = hoehe;
        _this.innererText = 'strong';
        _this.position = 'absolute';
        _this.innereHTMLObjekte = new Array();
        return _this;
    }
    return Strong;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/Svg.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/html-objekte/Svg.ts ***!
  \***********************************************/
/*! exports provided: Svg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Svg", function() { return Svg; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Samuel Werner on 05.06.2018
 */

var Svg = /** @class */ (function (_super) {
    __extends(Svg, _super);
    function Svg(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'svg';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = '#eee';
        _this.position = 'absolute';
        _this.innererText = '';
        _this.inDiesesObjektKannGedropptWerden = false;
        return _this;
    }
    return Svg;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/address.ts":
/*!***************************************************!*\
  !*** ./src/app/dashboard/html-objekte/address.ts ***!
  \***************************************************/
/*! exports provided: Address */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Bastian Ullrich
 */

var Address = /** @class */ (function (_super) {
    __extends(Address, _super);
    function Address(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'address';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = '#eeeeee';
        _this.position = 'absolute';
        _this.innererText = 'Technische Hochschule Mittelhessen';
        _this.font_style = 'italic';
        _this.display = 'block';
        return _this;
    }
    return Address;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/aside.ts":
/*!*************************************************!*\
  !*** ./src/app/dashboard/html-objekte/aside.ts ***!
  \*************************************************/
/*! exports provided: Aside */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aside", function() { return Aside; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Bastian Ullrich
 */

var Aside = /** @class */ (function (_super) {
    __extends(Aside, _super);
    function Aside(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'aside';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = '#eeeeee';
        _this.position = 'absolute';
        _this.innererText = '';
        _this.font_style = '';
        _this.inDiesesObjektKannGedropptWerden = true;
        return _this;
    }
    return Aside;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/audio.ts":
/*!*************************************************!*\
  !*** ./src/app/dashboard/html-objekte/audio.ts ***!
  \*************************************************/
/*! exports provided: Audio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Audio", function() { return Audio; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Sabrina Adam<sabrina.adam@iem.thm.de>  on 01.07.2018
 */

var Audio = /** @class */ (function (_super) {
    __extends(Audio, _super);
    function Audio(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'audio';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = 'transparent';
        _this.border = '';
        _this.border_color = 'black';
        _this.position = 'absolute';
        _this.innererText = 'Wird nicht unterstützt';
        _this.font_style = '';
        _this.inDiesesObjektKannGedropptWerden = false;
        _this.src = 'http://www.google.com/logos/fnbx/animal_sounds/turkey.mp3';
        _this.controls = 'true';
        return _this;
    }
    return Audio;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/bdo.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/html-objekte/bdo.ts ***!
  \***********************************************/
/*! exports provided: Bdo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bdo", function() { return Bdo; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Bdo = /** @class */ (function (_super) {
    __extends(Bdo, _super);
    function Bdo(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'bdo';
        _this.background_color = '';
        _this.width = weite;
        _this.height = hoehe;
        _this.dir = 'rtl';
        _this.innererText = 'This text will go right-to-left.';
        _this.position = 'absolute';
        _this.innereHTMLObjekte = new Array();
        return _this;
    }
    return Bdo;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/blockquote.ts":
/*!******************************************************!*\
  !*** ./src/app/dashboard/html-objekte/blockquote.ts ***!
  \******************************************************/
/*! exports provided: Blockquote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blockquote", function() { return Blockquote; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Bastian Ullrich
 */

var Blockquote = /** @class */ (function (_super) {
    __extends(Blockquote, _super);
    function Blockquote(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'blockquote';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = '#eeeeee';
        _this.position = 'absolute';
        _this.innererText = 'This is a Blockquote';
        _this.font_style = '';
        _this.cite = 'http://www.thm.de';
        _this.inDiesesObjektKannGedropptWerden = false;
        return _this;
    }
    return Blockquote;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/code.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/html-objekte/code.ts ***!
  \************************************************/
/*! exports provided: Code */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return Code; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Code = /** @class */ (function (_super) {
    __extends(Code, _super);
    function Code(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'code';
        _this.background_color = 'white';
        _this.width = weite;
        _this.height = hoehe;
        _this.innererText = 'This is a piece of computer code';
        _this.position = 'absolute';
        _this.font_family = 'monospace';
        _this.inDiesesObjektKannGedropptWerden = false;
        _this.innereHTMLObjekte = new Array();
        return _this;
    }
    return Code;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/details/details.ts":
/*!***********************************************************!*\
  !*** ./src/app/dashboard/html-objekte/details/details.ts ***!
  \***********************************************************/
/*! exports provided: Details */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Details", function() { return Details; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Bastian Ullrich
 */

var Details = /** @class */ (function (_super) {
    __extends(Details, _super);
    function Details(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'details';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = 'white';
        _this.innererText = '';
        _this.font_style = '';
        _this.position = 'absolute';
        _this.innereHTMLObjekte = new Array();
        return _this;
    }
    return Details;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/details/summary.ts":
/*!***********************************************************!*\
  !*** ./src/app/dashboard/html-objekte/details/summary.ts ***!
  \***********************************************************/
/*! exports provided: Summary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Summary", function() { return Summary; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Bastian Ullrich
 */

var Summary = /** @class */ (function (_super) {
    __extends(Summary, _super);
    function Summary(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'summary';
        _this.innererText = 'ClariFramer - Since 2018';
        _this.display = 'block';
        _this.innereHTMLObjekte = new Array();
        return _this;
    }
    return Summary;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/dialog.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/html-objekte/dialog.ts ***!
  \**************************************************/
/*! exports provided: Dialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return Dialog; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Dialog = /** @class */ (function (_super) {
    __extends(Dialog, _super);
    function Dialog(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'dialog';
        _this.background_color = '';
        _this.width = weite;
        _this.height = hoehe;
        _this.innererText = 'This is an open dialog window';
        _this.position = 'absolute';
        _this.innereHTMLObjekte = new Array();
        _this.inDiesesObjektKannGedropptWerden = false;
        return _this;
    }
    return Dialog;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/em.ts":
/*!**********************************************!*\
  !*** ./src/app/dashboard/html-objekte/em.ts ***!
  \**********************************************/
/*! exports provided: Em */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Em", function() { return Em; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Em = /** @class */ (function (_super) {
    __extends(Em, _super);
    function Em(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'em';
        _this.background_color = '';
        _this.width = weite;
        _this.height = hoehe;
        _this.font_style = 'italic';
        _this.innererText = 'emphasized';
        _this.position = 'absolute';
        _this.innereHTMLObjekte = new Array();
        return _this;
    }
    return Em;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/form/Button.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/html-objekte/form/Button.ts ***!
  \*******************************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Philipp Geier und Samuel Werner
 */

var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'button';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = '#888';
        _this.innereHTMLObjekte = new Array();
        return _this;
    }
    return Button;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/form/Datalist.ts":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/html-objekte/form/Datalist.ts ***!
  \*********************************************************/
/*! exports provided: Datalist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Datalist", function() { return Datalist; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Philipp Geier und Samuel Werner
 */

var Datalist = /** @class */ (function (_super) {
    __extends(Datalist, _super);
    function Datalist() {
        var _this = _super.call(this) || this;
        _this.tagName = 'datalist';
        _this.innereHTMLObjekte = [];
        return _this;
    }
    return Datalist;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/form/Fieldset.ts":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/html-objekte/form/Fieldset.ts ***!
  \*********************************************************/
/*! exports provided: Fieldset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fieldset", function() { return Fieldset; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Philipp Geier und Samuel Werner
 */

var Fieldset = /** @class */ (function (_super) {
    __extends(Fieldset, _super);
    function Fieldset(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'fieldset';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = '#ddd';
        _this.innereHTMLObjekte = new Array();
        return _this;
    }
    return Fieldset;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/form/Form.ts":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/html-objekte/form/Form.ts ***!
  \*****************************************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Philipp Geier und Samuel Werner
 */

var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'form';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = 'white';
        _this.position = 'absolute';
        _this.innereHTMLObjekte = new Array();
        return _this;
    }
    return Form;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/form/Input.ts":
/*!******************************************************!*\
  !*** ./src/app/dashboard/html-objekte/form/Input.ts ***!
  \******************************************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Philipp Geier und Samuel Werner
 */

var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'input';
        _this.width = weite;
        _this.height = hoehe;
        _this.innererText = '';
        _this.background_color = '#EEE';
        _this.innereHTMLObjekte = [];
        _this.size = 20;
        _this.value = 'input';
        return _this;
    }
    return Input;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/form/Label.ts":
/*!******************************************************!*\
  !*** ./src/app/dashboard/html-objekte/form/Label.ts ***!
  \******************************************************/
/*! exports provided: Label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Philipp Geier und Samuel Werner
 */

var Label = /** @class */ (function (_super) {
    __extends(Label, _super);
    function Label(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'label';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = '';
        _this.innereHTMLObjekte = new Array();
        return _this;
    }
    return Label;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/form/Legend.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/html-objekte/form/Legend.ts ***!
  \*******************************************************/
/*! exports provided: Legend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Legend", function() { return Legend; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Philipp Geier und Samuel Werner
 */

var Legend = /** @class */ (function (_super) {
    __extends(Legend, _super);
    function Legend(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'legend';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = '';
        _this.innereHTMLObjekte = new Array();
        return _this;
    }
    return Legend;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/form/Optgroup.ts":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/html-objekte/form/Optgroup.ts ***!
  \*********************************************************/
/*! exports provided: Optgroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Optgroup", function() { return Optgroup; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Philipp Geier und Samuel Werner
 */

var Optgroup = /** @class */ (function (_super) {
    __extends(Optgroup, _super);
    function Optgroup() {
        var _this = _super.call(this) || this;
        _this.tagName = 'optgroup';
        _this.background_color = '#aaa';
        _this.innereHTMLObjekte = [];
        return _this;
    }
    return Optgroup;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/form/Option.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/html-objekte/form/Option.ts ***!
  \*******************************************************/
/*! exports provided: Option */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Philipp Geier und Samuel Werner
 */

var Option = /** @class */ (function (_super) {
    __extends(Option, _super);
    function Option(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'option';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = '#aaa';
        _this.innereHTMLObjekte = new Array();
        return _this;
    }
    return Option;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/form/Output.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/html-objekte/form/Output.ts ***!
  \*******************************************************/
/*! exports provided: Output */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Output", function() { return Output; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Philipp Geier und Samuel Werner
 */

var Output = /** @class */ (function (_super) {
    __extends(Output, _super);
    function Output(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'output';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = '';
        _this.innereHTMLObjekte = [];
        return _this;
    }
    return Output;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/form/Select.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/html-objekte/form/Select.ts ***!
  \*******************************************************/
/*! exports provided: Select */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Philipp Geier und Samuel Werner
 */

var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.anzahlOptionen = 0;
        _this.tagName = 'select';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = '#eee';
        _this.innereHTMLObjekte = [];
        _this.anzahlOptGroups = 0;
        return _this;
    }
    return Select;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/form/Textarea.ts":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/html-objekte/form/Textarea.ts ***!
  \*********************************************************/
/*! exports provided: Textarea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return Textarea; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Philipp Geier und Samuel Werner
 */

var Textarea = /** @class */ (function (_super) {
    __extends(Textarea, _super);
    function Textarea() {
        var _this = _super.call(this) || this;
        _this.tagName = 'textarea';
        _this.background_color = '';
        _this.innereHTMLObjekte = new Array();
        return _this;
    }
    return Textarea;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/hr.ts":
/*!**********************************************!*\
  !*** ./src/app/dashboard/html-objekte/hr.ts ***!
  \**********************************************/
/*! exports provided: Hr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hr", function() { return Hr; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Hr = /** @class */ (function (_super) {
    __extends(Hr, _super);
    function Hr(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'hr';
        _this.background_color = 'black';
        _this.width = weite;
        _this.height = hoehe;
        _this.position = 'absolute';
        _this.display = 'block';
        _this.margin = '0.5em auto';
        _this.inDiesesObjektKannGedropptWerden = false;
        return _this;
    }
    return Hr;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/kbd.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/html-objekte/kbd.ts ***!
  \***********************************************/
/*! exports provided: Kbd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kbd", function() { return Kbd; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Kbd = /** @class */ (function (_super) {
    __extends(Kbd, _super);
    function Kbd(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'kbd';
        _this.background_color = 'white';
        _this.width = weite;
        _this.height = hoehe;
        _this.innererText = 'This is a keyboard input';
        _this.position = 'absolute';
        _this.font_family = 'monospace';
        _this.inDiesesObjektKannGedropptWerden = false;
        _this.innereHTMLObjekte = new Array();
        return _this;
    }
    return Kbd;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/list/dd.ts":
/*!***************************************************!*\
  !*** ./src/app/dashboard/html-objekte/list/dd.ts ***!
  \***************************************************/
/*! exports provided: Dd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dd", function() { return Dd; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Bastian Ullrich
 */

var Dd = /** @class */ (function (_super) {
    __extends(Dd, _super);
    function Dd(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'dd';
        _this.innererText = 'dd';
        _this.font_style = '';
        _this.innereHTMLObjekte = new Array();
        return _this;
    }
    return Dd;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/list/dl.ts":
/*!***************************************************!*\
  !*** ./src/app/dashboard/html-objekte/list/dl.ts ***!
  \***************************************************/
/*! exports provided: Dl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dl", function() { return Dl; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Bastian Ullrich
 */

var Dl = /** @class */ (function (_super) {
    __extends(Dl, _super);
    function Dl(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'dl';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = 'white';
        _this.position = 'absolute';
        _this.padding = '1em 0em 0em 3em';
        _this.innereHTMLObjekte = new Array();
        return _this;
    }
    return Dl;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/list/dt.ts":
/*!***************************************************!*\
  !*** ./src/app/dashboard/html-objekte/list/dt.ts ***!
  \***************************************************/
/*! exports provided: Dt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dt", function() { return Dt; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Bastian Ullrich
 */

var Dt = /** @class */ (function (_super) {
    __extends(Dt, _super);
    function Dt(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'dt';
        _this.innererText = 'dt';
        _this.font_style = '';
        _this.innereHTMLObjekte = new Array();
        return _this;
    }
    return Dt;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/list/li.ts":
/*!***************************************************!*\
  !*** ./src/app/dashboard/html-objekte/list/li.ts ***!
  \***************************************************/
/*! exports provided: Li */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Li", function() { return Li; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Bastian Ullrich
 */

var Li = /** @class */ (function (_super) {
    __extends(Li, _super);
    function Li(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'li';
        _this.innererText = 'li';
        _this.width = weite;
        _this.height = hoehe;
        _this.font_style = '';
        _this.innereHTMLObjekte = new Array();
        return _this;
    }
    return Li;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/list/ol.ts":
/*!***************************************************!*\
  !*** ./src/app/dashboard/html-objekte/list/ol.ts ***!
  \***************************************************/
/*! exports provided: Ol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ol", function() { return Ol; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Bastian Ullrich
 */

var Ol = /** @class */ (function (_super) {
    __extends(Ol, _super);
    function Ol(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'ol';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = 'white';
        _this.position = 'absolute';
        _this.type = '';
        _this.padding = '1em 0em 0em 3em';
        _this.innereHTMLObjekte = new Array();
        _this.start = 1;
        return _this;
    }
    return Ol;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/list/ul.ts":
/*!***************************************************!*\
  !*** ./src/app/dashboard/html-objekte/list/ul.ts ***!
  \***************************************************/
/*! exports provided: Ul */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ul", function() { return Ul; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Bastian Ullrich
 */

var Ul = /** @class */ (function (_super) {
    __extends(Ul, _super);
    function Ul(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'ul';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = 'white';
        _this.position = 'absolute';
        _this.padding = '1em 0em 0em 2em';
        _this.innereHTMLObjekte = new Array();
        return _this;
    }
    return Ul;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/meter.ts":
/*!*************************************************!*\
  !*** ./src/app/dashboard/html-objekte/meter.ts ***!
  \*************************************************/
/*! exports provided: Meter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Meter", function() { return Meter; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Bastian Ullrich
 */

var Meter = /** @class */ (function (_super) {
    __extends(Meter, _super);
    function Meter(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'meter';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = '#eeeeee';
        _this.position = 'absolute';
        _this.innererText = '60%';
        _this.font_style = '';
        _this.high = '1';
        _this.low = '0.1';
        _this.optimum = '0.9';
        _this.min = '0';
        _this.max = '1';
        _this.value = '0.6';
        _this.inDiesesObjektKannGedropptWerden = false;
        return _this;
    }
    return Meter;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/nav.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/html-objekte/nav.ts ***!
  \***********************************************/
/*! exports provided: Nav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
/**
 * Created by Bastian Ullrich
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Nav = /** @class */ (function (_super) {
    __extends(Nav, _super);
    function Nav(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'nav';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = '#ffffff';
        _this.position = 'relative';
        _this.font_style = '';
        _this.padding = '1em 0em 0em 2em';
        _this.innereHTMLObjekte = new Array();
        return _this;
    }
    return Nav;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/p.ts":
/*!*********************************************!*\
  !*** ./src/app/dashboard/html-objekte/p.ts ***!
  \*********************************************/
/*! exports provided: P */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return P; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Bastian Ullrich
 */

var P = /** @class */ (function (_super) {
    __extends(P, _super);
    function P(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'p';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = '#eeeeee';
        _this.position = 'absolute';
        _this.innererText = 'p';
        _this.font_style = '';
        _this.inDiesesObjektKannGedropptWerden = true;
        _this.innereHTMLObjekte = new Array();
        return _this;
    }
    return P;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/pre.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/html-objekte/pre.ts ***!
  \***********************************************/
/*! exports provided: Pre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pre", function() { return Pre; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Bastian Ullrich
 */

var Pre = /** @class */ (function (_super) {
    __extends(Pre, _super);
    function Pre(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'pre';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = '#eeeeee';
        _this.position = 'absolute';
        _this.innererText = 'Text in a pre element';
        _this.font_style = '';
        _this.display = 'block';
        _this.font_family = 'monospace';
        _this.white_space = 'pre';
        _this.margin = '1em 0';
        return _this;
    }
    return Pre;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/progress.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/html-objekte/progress.ts ***!
  \****************************************************/
/*! exports provided: Progress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return Progress; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Bastian Ullrich
 */

var Progress = /** @class */ (function (_super) {
    __extends(Progress, _super);
    function Progress(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'progress';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = '#eeeeee';
        _this.position = 'absolute';
        _this.font_style = '';
        _this.max = 100;
        _this.value = 25;
        _this.inDiesesObjektKannGedropptWerden = false;
        return _this;
    }
    return Progress;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/q.ts":
/*!*********************************************!*\
  !*** ./src/app/dashboard/html-objekte/q.ts ***!
  \*********************************************/
/*! exports provided: Q */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return Q; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Q = /** @class */ (function (_super) {
    __extends(Q, _super);
    function Q(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'q';
        _this.background_color = '';
        _this.width = weite;
        _this.height = hoehe;
        _this.cite = 'https://www.thm.de/';
        _this.innererText = 'Web- und mobile Anwendungen – aus unserem Alltag nicht mehr wegzudenken';
        _this.position = 'absolute';
        _this.innereHTMLObjekte = new Array();
        return _this;
    }
    return Q;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/s.ts":
/*!*********************************************!*\
  !*** ./src/app/dashboard/html-objekte/s.ts ***!
  \*********************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return S; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var S = /** @class */ (function (_super) {
    __extends(S, _super);
    function S(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 's';
        _this.background_color = '';
        _this.width = weite;
        _this.height = hoehe;
        _this.innererText = 'strikethrough';
        _this.position = 'absolute';
        _this.innereHTMLObjekte = new Array();
        return _this;
    }
    return S;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/samp.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/html-objekte/samp.ts ***!
  \************************************************/
/*! exports provided: Samp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Samp", function() { return Samp; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Samp = /** @class */ (function (_super) {
    __extends(Samp, _super);
    function Samp(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'samp';
        _this.background_color = 'white';
        _this.width = weite;
        _this.height = hoehe;
        _this.innererText = 'This is a sample output from a computer program';
        _this.position = 'absolute';
        _this.font_family = 'monospace';
        _this.inDiesesObjektKannGedropptWerden = false;
        _this.innereHTMLObjekte = new Array();
        return _this;
    }
    return Samp;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/section.ts":
/*!***************************************************!*\
  !*** ./src/app/dashboard/html-objekte/section.ts ***!
  \***************************************************/
/*! exports provided: Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Bastian Ullrich
 */

var Section = /** @class */ (function (_super) {
    __extends(Section, _super);
    function Section(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'section';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = '#eeeeee';
        _this.position = 'absolute';
        _this.innererText = '';
        _this.font_style = '';
        _this.inDiesesObjektKannGedropptWerden = true;
        return _this;
    }
    return Section;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/small.ts":
/*!*************************************************!*\
  !*** ./src/app/dashboard/html-objekte/small.ts ***!
  \*************************************************/
/*! exports provided: Small */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Small", function() { return Small; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Small = /** @class */ (function (_super) {
    __extends(Small, _super);
    function Small(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'small';
        _this.background_color = '';
        _this.font_size = 'smaller';
        _this.width = weite;
        _this.height = hoehe;
        _this.innererText = 'small';
        _this.position = 'absolute';
        _this.innereHTMLObjekte = new Array();
        return _this;
    }
    return Small;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/span.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/html-objekte/span.ts ***!
  \************************************************/
/*! exports provided: Span */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Span", function() { return Span; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Samuel Werner <samuel.werner@iem.thm.de>  on 21.05.2018
 */

var Span = /** @class */ (function (_super) {
    __extends(Span, _super);
    // Keine speziellen Attribute
    function Span(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'span';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = '#008000';
        _this.border = '0.05rem solid';
        _this.border_color = 'black';
        _this.position = 'absolute';
        _this.innererText = 'span';
        _this.inDiesesObjektKannGedropptWerden = true;
        return _this;
    }
    return Span;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/table/Caption.ts":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/html-objekte/table/Caption.ts ***!
  \*********************************************************/
/*! exports provided: Caption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Caption", function() { return Caption; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Samuel Werner
 */

var Caption = /** @class */ (function (_super) {
    __extends(Caption, _super);
    // Keine speziellen Attribute
    function Caption() {
        var _this = _super.call(this) || this;
        _this.tagName = 'caption';
        _this.innereHTMLObjekte = new Array();
        _this.innererText = 'Tabellen Überschrift';
        _this.liegtAufDemGrid = true;
        _this.background_color = '#eee';
        return _this;
    }
    return Caption;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/table/Table.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/html-objekte/table/Table.ts ***!
  \*******************************************************/
/*! exports provided: Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Philipp Geier, edited by Bastian Ullrich
 */

var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    // Sonst keine weiteren speziellen Attribute
    function Table(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'table';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = '#FFFFFF';
        _this.position = 'absolute';
        _this.border = '0.7rem solid';
        _this.border_color = '#b5b5b5';
        _this.innererText = '';
        _this.innereHTMLObjekte = new Array();
        _this.anzahlZeilen = 0;
        _this.anzahlSpalten = 0;
        return _this;
    }
    return Table;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/table/Tbody.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/html-objekte/table/Tbody.ts ***!
  \*******************************************************/
/*! exports provided: Tbody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tbody", function() { return Tbody; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Samuel Werner
 */

var Tbody = /** @class */ (function (_super) {
    __extends(Tbody, _super);
    // Keine speziellen Attribute
    function Tbody() {
        var _this = _super.call(this) || this;
        _this.tagName = 'tbody';
        _this.background_color = '#333333';
        _this.innereHTMLObjekte = new Array();
        _this.innererText = '';
        return _this;
    }
    return Tbody;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/table/Td.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/html-objekte/table/Td.ts ***!
  \****************************************************/
/*! exports provided: Td */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Td", function() { return Td; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Philipp Geier und Samuel Werner
 */

var Td = /** @class */ (function (_super) {
    __extends(Td, _super);
    function Td(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'td';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = '#ccc';
        _this.innereHTMLObjekte = new Array();
        _this.innererText = '';
        _this.inDiesesObjektKannGedropptWerden = true;
        return _this;
    }
    return Td;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/table/Tfoot.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/html-objekte/table/Tfoot.ts ***!
  \*******************************************************/
/*! exports provided: Tfoot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tfoot", function() { return Tfoot; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Samuel Werner
 */

var Tfoot = /** @class */ (function (_super) {
    __extends(Tfoot, _super);
    // Keine speziellen Attribute
    function Tfoot() {
        var _this = _super.call(this) || this;
        _this.tagName = 'tfoot';
        _this.background_color = '#555';
        _this.innereHTMLObjekte = new Array();
        _this.innererText = '';
        return _this;
    }
    return Tfoot;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/table/Th.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/html-objekte/table/Th.ts ***!
  \****************************************************/
/*! exports provided: Th */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Th", function() { return Th; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Samuel Werner
 */

var Th = /** @class */ (function (_super) {
    __extends(Th, _super);
    function Th(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'th';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = '#aaa';
        _this.innereHTMLObjekte = new Array();
        _this.innererText = '';
        return _this;
    }
    return Th;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/table/Thead.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/html-objekte/table/Thead.ts ***!
  \*******************************************************/
/*! exports provided: Thead */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Thead", function() { return Thead; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Samuel Werner
 */

var Thead = /** @class */ (function (_super) {
    __extends(Thead, _super);
    // Keine speziellen Attribute
    function Thead() {
        var _this = _super.call(this) || this;
        _this.tagName = 'thead';
        _this.background_color = '#333333';
        _this.innereHTMLObjekte = new Array();
        _this.innererText = '';
        return _this;
    }
    return Thead;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/table/Tr.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/html-objekte/table/Tr.ts ***!
  \****************************************************/
/*! exports provided: Tr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tr", function() { return Tr; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Bastian Ullrich <bastian.ullrich@iem.thm.de> on 05/30/2018
 */

var Tr = /** @class */ (function (_super) {
    __extends(Tr, _super);
    // Keine speziellen Attribute
    function Tr(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'tr';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = 'black';
        _this.innereHTMLObjekte = new Array();
        _this.innererText = '';
        return _this;
    }
    return Tr;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/u.ts":
/*!*********************************************!*\
  !*** ./src/app/dashboard/html-objekte/u.ts ***!
  \*********************************************/
/*! exports provided: U */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return U; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var U = /** @class */ (function (_super) {
    __extends(U, _super);
    function U(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'u';
        _this.background_color = '';
        _this.width = weite;
        _this.height = hoehe;
        _this.innererText = 'underline';
        _this.position = 'absolute';
        _this.innereHTMLObjekte = new Array();
        return _this;
    }
    return U;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/var.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/html-objekte/var.ts ***!
  \***********************************************/
/*! exports provided: Var */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Var", function() { return Var; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Var = /** @class */ (function (_super) {
    __extends(Var, _super);
    function Var(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'var';
        _this.background_color = 'white';
        _this.width = weite;
        _this.height = hoehe;
        _this.innererText = 'This is a variable';
        _this.position = 'absolute';
        _this.font_family = 'italic';
        _this.inDiesesObjektKannGedropptWerden = false;
        _this.innereHTMLObjekte = new Array();
        return _this;
    }
    return Var;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/html-objekte/video.ts":
/*!*************************************************!*\
  !*** ./src/app/dashboard/html-objekte/video.ts ***!
  \*************************************************/
/*! exports provided: Video */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return Video; });
/* harmony import */ var _HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLObjekt */ "./src/app/dashboard/html-objekte/HTMLObjekt.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Sabrina Adam<sabrina.adam@iem.thm.de>  on 01.07.2018
 */

var Video = /** @class */ (function (_super) {
    __extends(Video, _super);
    function Video(weite, hoehe) {
        var _this = _super.call(this) || this;
        _this.tagName = 'video';
        _this.width = weite;
        _this.height = hoehe;
        _this.background_color = '#ff0000';
        _this.border = '';
        _this.border_color = 'black';
        _this.position = 'absolute';
        _this.innererText = '';
        _this.font_style = '';
        _this.inDiesesObjektKannGedropptWerden = true;
        _this.innereHTMLObjekte = [];
        _this.src = 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4';
        _this.controls = 'true';
        return _this;
    }
    return Video;
}(_HTMLObjekt__WEBPACK_IMPORTED_MODULE_0__["HTMLObjekt"]));



/***/ }),

/***/ "./src/app/dashboard/lineale/lineale.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/lineale/lineale.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* @author Samuel Werner <samuel.werner@iem.thm.de> */\r\n\r\n.linealHorizontalHD {\r\n  height: 19px !important;\r\n}\r\n\r\n.linealVertikalHD {\r\n  width: 19px !important;\r\n}\r\n\r\n.linealHorizontalUHD {\r\n  height: 59px !important;\r\n  width: 300px !important;\r\n  font-size: 30px !important;\r\n  left: 39px;\r\n  background-color: #f6f5f6 !important;\r\n}\r\n\r\n.linealHorizontalUHD span {\r\n  margin-top: 10px !important;\r\n  margin-left: 18px !important;\r\n}\r\n\r\n.linealVertikalUHD {\r\n  width: 59px !important;\r\n  height: 300px !important;\r\n  font-size: 30px !important;\r\n  top: 39px;\r\n  background-color: #f6f5f6 !important;\r\n}\r\n\r\n.linealVertikalUHD span {\r\n  margin-top: 40px !important;\r\n}\r\n\r\n.eckeLinealUHD {\r\n  width: 58px !important;\r\n  height: 58px !important;\r\n}\r\n\r\n.linealHorizontalQHD {\r\n  width: 50px !important;\r\n  background-color: #f6f5f6 !important;\r\n}\r\n\r\n.linealVertikalQHD {\r\n  height: 50px !important;\r\n  background-color: #f6f5f6 !important;\r\n}\r\n\r\n#platzhalterHorizontal {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  overflow: hidden;\r\n}\r\n\r\n#platzhalterVertikal {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  overflow: hidden;\r\n}\r\n\r\n#platzhalterVertikalesLineal {\r\n  height: 100%;\r\n  width: 19px;\r\n  position: absolute;\r\n  left: 0;\r\n  z-index: 1;\r\n  margin-top: 19px;\r\n  background-color: #f6f5f6;\r\n}\r\n\r\n#platzhalterVertikalesLineal .vertikalesLinealStriche {\r\n  flex-flow: column;\r\n  width: 19px;\r\n  height: 100px;\r\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAABkCAYAAABkdwu1AAAABGdBTUEAALGPC/xhBQAAAH9JREFUWAntk0EKwCAQxLSvKfiW/v87xV48rwwEajzpYQecbFoLnXuM5wplfTGG1ds8pLNeb2ZNzEVdr+BNA/bKPGRpo9/UgPquRQEYBgPQABiABsAANAAGoAEwAA2AAWgADEADYAAaAAPQABiABsAANAAGoAEwAA2AAWjAnwC8zKkPvVDKX24AAAAASUVORK5CYII=\");\r\n  background-size: auto 100% !important;\r\n  padding-top: 1px;\r\n  word-wrap: break-word;\r\n  text-align: center;\r\n  border-top-width: 1px !important;\r\n}\r\n\r\n#platzhalterVertikalesLineal .vertikalesLinealStriche > span {\r\n  -webkit-transform: rotate(-90deg);\r\n          transform: rotate(-90deg);\r\n  margin-top: 10px;\r\n}\r\n\r\n#eckeLineal {\r\n  width: 18px;\r\n  height: 18px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  z-index: 1;\r\n  overflow: hidden;\r\n  background: #F5F5F6;\r\n  border-bottom: 1px solid rgba(37, 42, 43, 0.3);\r\n  border-right: 1px solid rgba(37, 42, 43, 0.3);\r\n}\r\n\r\n#eckeLineal {\r\n  width: 18px;\r\n  height: 18px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  z-index: 1;\r\n  overflow: hidden;\r\n  background: #F5F5F6;\r\n  border-bottom: 1px solid rgba(37, 42, 43, 0.3);\r\n  border-right: 1px solid rgba(37, 42, 43, 0.3)\r\n}\r\n\r\n#platzhalterHorizontal {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  overflow: hidden\r\n}\r\n\r\n#platzhalterVertikal {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  overflow: hidden\r\n}\r\n\r\n#platzhalterHorizontalesLineal {\r\n  width: 100%;\r\n  height: 19px;\r\n  position: absolute;\r\n  top: 0;\r\n  z-index: 1;\r\n  margin-left: 19px;\r\n  background-color: #f6f5f6;\r\n}\r\n\r\n#platzhalterHorizontalesLineal .horizontalesLinealStriche,\r\n#platzhalterHorizontalesLineal .vertikalesLinealStriche,\r\n#platzhalterVertikalesLineal .horizontalesLinealStriche,\r\n#platzhalterVertikalesLineal .vertikalesLinealStriche {\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  /* display:flex; */\r\n  -ms-align-items: center;\r\n  /* align-items:center; */\r\n  -ms-box-align: center;\r\n  box-align: center;\r\n  -webkit-flex-align: center;\r\n  flex-align: center;\r\n  font-family: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Open Sans\", open-sans, sans-serif;\r\n  font-size: 10px;\r\n  color: #545E65;\r\n  color: rgba(37, 42, 43, 0.3);\r\n  background-color: transparent;\r\n  background-repeat: no-repeat;\r\n  background-position: 100% 100%;\r\n  background-origin: border-box;\r\n  border: 0 solid rgba(37, 42, 43, 0.3);\r\n  position: absolute;\r\n  z-index: 0;\r\n  pointer-events: none;\r\n  box-sizing: border-box;\r\n  float: left;\r\n}\r\n\r\n#platzhalterHorizontalesLineal .horizontalesLinealStriche.selection,\r\n#platzhalterHorizontalesLineal .vertikalesLinealStriche.selection,\r\n#platzhalterVertikalesLineal .horizontalesLinealStriche.selection,\r\n#platzhalterVertikalesLineal .vertikalesLinealStriche.selection {\r\n  position: absolute;\r\n  z-index: 3;\r\n  background-image: none !important;\r\n  background-color: rgba(37, 42, 43, 0.1);\r\n  float: none\r\n}\r\n\r\n#platzhalterHorizontalesLineal .horizontalesLinealStriche {\r\n  width: 100px;\r\n  height: 19px;\r\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAATCAYAAABmxagtAAAABGdBTUEAALGPC/xhBQAAAFpJREFUWAnt08EJACAIBVBrmsBZ2n+dFijwEHh5Hj+K8MQIRYAAAQIECBAgQIAAAQIECBAgQIAAAQIECHQJrMxd2a3vrlR1mfdxaZeAg3TJP/aO6is95sWfBQ59Rwf0G521KQAAAABJRU5ErkJggg==\");\r\n  background-size: 100% auto !important;\r\n  border-left-width: 1px;\r\n  padding: 1px 0 0 5px;\r\n}\r\n\r\n#platzhalterHorizontalesLineal .horizontalesLinealStriche > span {\r\n  margin-top: 0px\r\n}\r\n\r\n#platzhalterVertikalesLineal .vertikalesLinealStriche {\r\n  flex-flow: column;\r\n  -ms-box-orient: vertical;\r\n  box-orient: vertical;\r\n  word-wrap: break-word;\r\n  text-align: center;\r\n}\r\n\r\n#platzhalterVertikalesLineal .vertikalesLinealStriche > span {\r\n  -webkit-transform: rotate(-90deg);\r\n  transform: rotate(-90deg);\r\n  margin-top: 10px\r\n}\r\n\r\n#platzhalterHorizontalesLineal {\r\n  width: 100%;\r\n  height: 19px;\r\n  position: absolute;\r\n  top: 0;\r\n  z-index: 1;\r\n  margin-left: 19px;\r\n  background-color: #f6f5f6;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dashboard/lineale/lineale.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/lineale/lineale.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- @author Samuel Werner <samuel.werner@iem.thm.de -->\r\n\r\n<div id=\"platzhalterHorizontal\" #platzhalterHorizontal>\r\n  <div id=\"platzhalterHorizontalesLineal\" #horizontalesLinealStriche>\r\n  </div>\r\n</div>\r\n<div id=\"platzhalterVertikal\" #platzhalterVertikal>\r\n  <div id=\"platzhalterVertikalesLineal\" #vertikalesLinealStriche>\r\n  </div>\r\n</div>\r\n<div id=\"eckeLineal\" #eckeLineal></div>\r\n\r\n"

/***/ }),

/***/ "./src/app/dashboard/lineale/lineale.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/lineale/lineale.component.ts ***!
  \********************************************************/
/*! exports provided: LinealeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinealeComponent", function() { return LinealeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _aufloesung_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../aufloesung.service */ "./src/app/aufloesung.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
*   Diese Klasse erstellt die Lineale des Dahsboards.
*   Mithilfe des Auflösungsservice werden die Lineale dynamisch an die Auflösung angepasst.
*
*   @author Samuel Werner <samuel.werner@iem.thm.de>
*/
var LinealeComponent = /** @class */ (function () {
    function LinealeComponent(aufloesungService, // Auflösung des Bildschirms ermitteln
    renderer) {
        this.aufloesungService = aufloesungService;
        this.renderer = renderer;
    }
    LinealeComponent.prototype.ngOnInit = function () {
        this.linealeErstellen();
    };
    LinealeComponent.prototype.linealeErstellen = function () {
        // Lineale abhänig von der Auflösung erstellen
        this.vertikalesLinealErstellen();
        this.horizontalesLinealErstellen();
        // Ecke Lineal Stylesheet setzen
        this.renderer.addClass(this.eckeLineal.nativeElement, 'eckeLineal' + this.aufloesungService.getAufloesung().bezeichnung);
    };
    LinealeComponent.prototype.horizontalesLinealErstellen = function () {
        for (var i = 0; i < this.aufloesungService.getAufloesung().aufteilungLineal; i++) {
            var div = this.renderer.createElement('div');
            var span = this.renderer.createElement('span');
            var text = this.renderer.createText(i * this.aufloesungService.getAufloesung().weiteAufteilungLineal + '');
            this.renderer.setStyle(div, 'left', i * this.aufloesungService.getAufloesung().weiteAufteilungLineal + 'px');
            this.renderer.addClass(div, 'horizontalesLinealStriche');
            this.renderer.addClass(div, 'linealHorizontal' + this.aufloesungService.getAufloesung().bezeichnung);
            this.renderer.addClass(this.horizontalesLinealStriche.nativeElement, 'linealHorizontal' + this.aufloesungService.getAufloesung().bezeichnung);
            this.renderer.appendChild(span, text);
            this.renderer.appendChild(div, span);
            this.renderer.appendChild(this.horizontalesLinealStriche.nativeElement, div);
        }
    };
    LinealeComponent.prototype.vertikalesLinealErstellen = function () {
        for (var i = 0; i < this.aufloesungService.getAufloesung().aufteilungLineal; i++) {
            var div = this.renderer.createElement('div');
            var span = this.renderer.createElement('span');
            var text = this.renderer.createText(i * this.aufloesungService.getAufloesung().weiteAufteilungLineal + '');
            this.renderer.setStyle(div, 'top', i * this.aufloesungService.getAufloesung().weiteAufteilungLineal + 'px');
            this.renderer.addClass(div, 'vertikalesLinealStriche');
            this.renderer.addClass(div, 'linealVertikal' + this.aufloesungService.getAufloesung().bezeichnung);
            this.renderer.addClass(this.vertikalesLinealStriche.nativeElement, 'linealVertikal' + this.aufloesungService.getAufloesung().bezeichnung);
            this.renderer.appendChild(span, text);
            this.renderer.appendChild(div, span);
            this.renderer.appendChild(this.vertikalesLinealStriche.nativeElement, div);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('horizontalesLinealStriche'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LinealeComponent.prototype, "horizontalesLinealStriche", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('vertikalesLinealStriche'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LinealeComponent.prototype, "vertikalesLinealStriche", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('eckeLineal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LinealeComponent.prototype, "eckeLineal", void 0);
    LinealeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lineale',
            template: __webpack_require__(/*! ./lineale.component.html */ "./src/app/dashboard/lineale/lineale.component.html"),
            styles: [__webpack_require__(/*! ./lineale.component.css */ "./src/app/dashboard/lineale/lineale.component.css")]
        }),
        __metadata("design:paramtypes", [_aufloesung_service__WEBPACK_IMPORTED_MODULE_1__["AufloesungService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], LinealeComponent);
    return LinealeComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/settings.ts":
/*!***************************************!*\
  !*** ./src/app/dashboard/settings.ts ***!
  \***************************************/
/*! exports provided: settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/**
 * Created by Sabrina Adam <sabrina.adam@iem.thm.de>  on 07.06.2018
 */
var settings = /** @class */ (function () {
    function settings() {
        this.snapWeite = 1;
        this.zeigeGrid = true;
        this.gridFarbe = '#d8d8d8';
    }
    return settings;
}());



/***/ }),

/***/ "./src/app/dashboard/toolbar/code-inspector/code-inspector.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/toolbar/code-inspector/code-inspector.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*---------- 4K Auflösung ----------*/\r\npre {\r\n  height: 95%;\r\n  width: 99%;\r\n  overflow-x: scroll;\r\n  overflow-y: scroll;\r\n  font-size: 35px;\r\n  padding-left: 1%;\r\n}\r\nh2 {\r\n  font-size: 40px;\r\n  padding-left: 15px;\r\n  padding-top: 10px;\r\n}\r\n/deep/ .mat-checkbox-inner-container {\r\n  width: 40px !important;\r\n  height: 34px !important;\r\n  margin-right: 20px !important;\r\n  padding-top: 1%;\r\n}\r\n/deep/ .mat-checkbox-layout .mat-checkbox-label {\r\n  line-height: 35px;\r\n}\r\n/*------------------------------------- für auflösungen bis 2400px --------------------------------------------------*/\r\n@media screen and (max-width: 2400px) {\r\n  pre {\r\n    height: 91%;\r\n    font-size: 16px;\r\n  }\r\n\r\n  h2 {\r\n    font-size: 20px;\r\n  }\r\n\r\n  /deep/ .mat-checkbox-inner-container {\r\n    width: 20px !important;\r\n    height: 18px !important;\r\n    margin-right: 10px !important;\r\n    padding-top: 2px;\r\n  }\r\n}\r\n/*------------------------------------- für auflösungen bis 1600px --------------------------------------------------*/\r\n@media screen and (max-width: 1600px) {\r\n  pre {\r\n    height: 89%;\r\n    font-size: 12px;\r\n  }\r\n\r\n  h2 {\r\n    font-size: 13px;\r\n    padding-left: 5px;\r\n    padding-top: 2px;\r\n  }\r\n\r\n  /deep/ .mat-checkbox-inner-container {\r\n    width: 16px !important;\r\n    height: 14px !important;\r\n    margin-right: 10px !important;\r\n  }\r\n}\r\n/*------------------------------------- für auflösungen bis 1200px --------------------------------------------------*/\r\n@media screen and (max-width: 1200px) {\r\n  pre {\r\n    height: 88%;\r\n    font-size: 11px;\r\n  }\r\n\r\n  h2 {\r\n    font-size: 12px;\r\n  }\r\n\r\n  /deep/ .mat-checkbox-inner-container {\r\n    width: 16px !important;\r\n    height: 14px !important;\r\n    margin-right: 10px !important;\r\n  }\r\n}\r\n/*------------------------------------- für auflösungen bis 900px --------------------------------------------------*/\r\n@media screen and (max-width: 900px) {\r\n\r\n  /deep/ .mat-checkbox-inner-container {\r\n    width: 14px !important;\r\n    height: 12px !important;\r\n    margin-right: 8px !important;\r\n  }\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/dashboard/toolbar/code-inspector/code-inspector.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/dashboard/toolbar/code-inspector/code-inspector.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title> Code\r\n  <mat-checkbox [(ngModel)]=\"css\" (ngModelChange)=\"valueChange()\">Zeige Attribute an</mat-checkbox>\r\n</h2>\r\n\r\n<pre><code>{{content}}</code></pre>\r\n"

/***/ }),

/***/ "./src/app/dashboard/toolbar/code-inspector/code-inspector.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/toolbar/code-inspector/code-inspector.component.ts ***!
  \******************************************************************************/
/*! exports provided: CodeInspectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeInspectorComponent", function() { return CodeInspectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _html_objekt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../html-objekt.service */ "./src/app/dashboard/html-objekt.service.ts");
/* harmony import */ var _grid_objekte_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../grid-objekte.service */ "./src/app/dashboard/grid-objekte.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CodeInspectorComponent = /** @class */ (function () {
    function CodeInspectorComponent(htmlObjektService, gridObjekteService) {
        var _this = this;
        this.htmlObjektService = htmlObjektService;
        this.gridObjekteService = gridObjekteService;
        // An dem HTML-Objekt Service anmelden und über Änderungen informiert werden
        this.htmlObjektService.myMethod$.subscribe(function (data) {
            _this.ausgewaehltesObjekt = data;
        });
    }
    CodeInspectorComponent.prototype.ngOnInit = function () {
        var pretty = __webpack_require__(/*! pretty */ "./node_modules/pretty/index.js");
        this.content = (pretty(this.objektAlsHTML(), { ocd: true }));
    };
    CodeInspectorComponent.prototype.valueChange = function () {
        var pretty = __webpack_require__(/*! pretty */ "./node_modules/pretty/index.js");
        this.content = (pretty(this.objektAlsHTML(), { ocd: true }));
    };
    CodeInspectorComponent.prototype.objektAlsHTML = function () {
        var result = '';
        result += ' <' + this.ausgewaehltesObjekt.tagName + ' ' + this.attributeVonObjektZuString(this.ausgewaehltesObjekt) + '> ' +
            this.ausgewaehltesObjekt.innererText +
            this.objektAlsHTMLRekursiv(this.ausgewaehltesObjekt.innereHTMLObjekte) +
            ' </' + this.ausgewaehltesObjekt.tagName + '> ';
        return result;
    };
    CodeInspectorComponent.prototype.objektAlsHTMLRekursiv = function (objekte) {
        var result = '';
        if (null === objekte) {
            return '';
        }
        for (var _i = 0, objekte_1 = objekte; _i < objekte_1.length; _i++) {
            var htmlObjekt = objekte_1[_i];
            if (htmlObjekt.innereHTMLObjekte == null || htmlObjekt.innereHTMLObjekte.length <= 0) {
                result += ' <' + htmlObjekt.tagName + ' ' + this.attributeVonObjektZuString(htmlObjekt) + '> ' +
                    htmlObjekt.innererText +
                    ' </' + htmlObjekt.tagName + '> ';
            }
            else {
                result += ' <' + htmlObjekt.tagName + ' ' + this.attributeVonObjektZuString(htmlObjekt) + '> ' +
                    htmlObjekt.innererText +
                    this.objektAlsHTMLRekursiv(htmlObjekt.innereHTMLObjekte) +
                    ' </' + htmlObjekt.tagName + '> ';
            }
        }
        return result;
    };
    CodeInspectorComponent.prototype.attributeVonObjektZuString = function (obj) {
        if (!this.css) {
            return '';
        }
        var resultCSS = 'style="';
        var resultAttribute = '';
        for (var _i = 0, _a = Object.entries(obj); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (this.testenObKeinAttribut(key)) {
                continue;
            }
            if (this.testenObCSS(key)) {
                key = key.replace(/_/g, '-');
                key = key.replace(/position-x/g, 'left');
                key = key.replace(/position-y/g, 'top');
                resultCSS += key + ':' + value + ';';
            }
            else {
                key = key.replace(/_/g, '-');
                resultAttribute += ' ' + key + '="' + value + '"';
            }
        }
        return resultAttribute + resultCSS + '"';
    };
    CodeInspectorComponent.prototype.testenObKeinAttribut = function (key) {
        if (key === 'innererText' || key === 'innereHTMLObjekte'
            || key === 'liegtAufDemGrid' || key === 'inDiesesObjektKannGedropptWerden'
            || key === 'tagName' || key === 'anzahlZeilen' || key === 'anzahlSpalten') {
            return true;
        }
        return false;
    };
    CodeInspectorComponent.prototype.testenObCSS = function (key) {
        switch (key) {
            case 'width': return true;
            case 'height': return true;
            case 'background_color': return true;
            case 'display': return true;
            case 'z_index': return true;
            case 'background': return true;
            case 'opacity': return true;
            case 'overflow': return true;
            case 'visibility': return true;
            case 'border': return true;
            case 'border_color': return true;
            case 'border_radius': return true;
            case 'margin': return true;
            case 'padding': return true;
            case 'outline': return true;
            case 'position': return true;
            case 'position_x': return true;
            case 'position_y': return true;
            case 'transform': return true;
            case 'float': return true;
            case 'clear': return true;
            case 'color': return true;
            case 'font_weight': return true;
            case 'font_style': return true;
            case 'font_family': return true;
            case 'text_align': return true;
            case 'vertical_align': return true;
            case 'word_break': return true;
            case 'word_wrap': return true;
            case 'white_space': return true;
            case 'font_size': return true;
        }
        return false;
    };
    CodeInspectorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-code-inspector',
            template: __webpack_require__(/*! ./code-inspector.component.html */ "./src/app/dashboard/toolbar/code-inspector/code-inspector.component.html"),
            styles: [__webpack_require__(/*! ./code-inspector.component.css */ "./src/app/dashboard/toolbar/code-inspector/code-inspector.component.css")]
        }),
        __metadata("design:paramtypes", [_html_objekt_service__WEBPACK_IMPORTED_MODULE_1__["HtmlObjektService"],
            _grid_objekte_service__WEBPACK_IMPORTED_MODULE_2__["GridObjekteService"]])
    ], CodeInspectorComponent);
    return CodeInspectorComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/toolbar/drag-and-drop-toolbox.directive.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/toolbar/drag-and-drop-toolbox.directive.ts ***!
  \**********************************************************************/
/*! exports provided: DragAndDropToolboxDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragAndDropToolboxDirective", function() { return DragAndDropToolboxDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _aufloesung_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../aufloesung.service */ "./src/app/aufloesung.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DragAndDropToolboxDirective = /** @class */ (function () {
    function DragAndDropToolboxDirective(elementRef, aufloesungService) {
        this.elementRef = elementRef;
        this.aufloesungService = aufloesungService;
    }
    DragAndDropToolboxDirective.prototype.ngOnInit = function () {
        this.snapWeite = this.aufloesungService.getAufloesung().weiteAufteilungLineal / 10;
        var self = this;
        this.drag = Draggable.create(this.elementRef.nativeElement, {
            /*  Rastet an die nahest gelegene Stelle von einem Inkrement des angegebenen Pixel-Wertes ein.
            *   Keine Werte kleiner 0 zulassen, damit das Objekt nicht aus dem Dashboardbereich geschoben werden kann.
            */
            zIndexBoost: false,
            trigger: document.getElementById('toolboxText'),
            type: 'top,left',
            bounds: '#dropzoneDashboard',
            onDragEnd: function () {
                // Es wird am Ende des Drags das Draggable versendet. Wird in grid.component.ts behandelt (dragChange).
                var event = new MouseEvent('click', { bubbles: true });
                self.elementRef.nativeElement.dispatchEvent(event);
            },
            liveSnap: {
                top: function (endValue) {
                    if (Math.round(endValue / self.snapWeite) * self.snapWeite < 0) {
                        return 1;
                    }
                    else {
                        return Math.round(endValue / self.snapWeite) * self.snapWeite;
                    }
                },
                left: function (endValue) {
                    return Math.round(endValue / self.snapWeite) * self.snapWeite;
                }
            }
        }).zIndex = 4000;
    };
    DragAndDropToolboxDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDragAndDropToolbox]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _aufloesung_service__WEBPACK_IMPORTED_MODULE_1__["AufloesungService"]])
    ], DragAndDropToolboxDirective);
    return DragAndDropToolboxDirective;
}());



/***/ }),

/***/ "./src/app/dashboard/toolbar/html-objekt-details/html-attribute/html-attribute.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/dashboard/toolbar/html-objekt-details/html-attribute/html-attribute.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".groesseMenue {\r\n  font-size: 30px;\r\n  line-height: 30px;\r\n}\r\n\r\n.menueAbstand {\r\n  margin-bottom: 15px;\r\n  padding-top: 15px;\r\n}\r\n\r\ninput {\r\n  height: 35px;\r\n  font-size: 35px;\r\n}\r\n\r\nmat-select {\r\n  height: 35px;\r\n}\r\n\r\nmat-option {\r\n  font-size: 35px;\r\n}\r\n\r\ntextarea {\r\n  height: 35px;\r\n  font-size: 35px;\r\n}\r\n\r\n/deep/ .mat-form-field-appearance-legacy .mat-form-field-label {\r\n  font-size: 30px;\r\n  color: #F7FFFF;\r\n  line-height: 25px;\r\n}\r\n\r\n/deep/ .anpassenAnToolbox {\r\n  width: 265px;\r\n  margin-left: -17px;\r\n  margin-top: -10px;\r\n}\r\n\r\n/deep/ .anpassenAnToolbox .mat-expansion-panel-body{\r\n  padding: 9px !important;\r\n}\r\n\r\n/deep/ .mat-checkbox-layout {\r\n  margin-left: 8px;\r\n}\r\n\r\n.begrenzungAttribute {\r\n  height: 200px;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.buttonAbstand {\r\n  margin-right: 10px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n/deep/ .mat-raised-button {\r\n  font-size: 35px;\r\n}\r\n\r\n.checkboxAbstand {\r\n  margin-left: 10px;\r\n}\r\n\r\nmat-expansion-panel {\r\n    width: 100%;\r\n    margin-left: 1%;\r\n}\r\n\r\n.tabelleButton {\r\n  width: 400px;\r\n  padding-left: 20px;\r\n  height: 50px;\r\n}\r\n\r\n.tabelleButton .mat-button-wrapper {\r\n  font-size: 150px;\r\n}\r\n\r\n.checkboxAnpassen {\r\n  font-size: 30px;\r\n}\r\n\r\n.customscrollbar::-webkit-scrollbar {\r\n    width: 5px;\r\n}\r\n\r\n/* Track */\r\n\r\n.customscrollbar::-webkit-scrollbar-track {\r\n    background: #555;\r\n    border-radius: 3px;\r\n}\r\n\r\n/* Handle */\r\n\r\n.customscrollbar::-webkit-scrollbar-thumb {\r\n    background: #888;\r\n    border-radius: 3px;\r\n}\r\n\r\n/* Handle on hover */\r\n\r\n.customscrollbar::-webkit-scrollbar-thumb:hover {\r\n    background: #555;\r\n}\r\n\r\n.detailmenu mat-form-field {\r\n    width: 95%;\r\n}\r\n\r\n/*------------------------------------- für auflösungen bis 2400px --------------------------------------------------*/\r\n\r\n@media screen and (max-width: 2400px) {\r\n\r\n  .groesseMenue {\r\n    font-size: 15px;\r\n  }\r\n\r\n  .menueAbstand {\r\n    margin-bottom: 8px;\r\n    padding-top: 0px;\r\n  }\r\n\r\n  input {\r\n    height: 20px;\r\n    font-size: 20px;\r\n  }\r\n\r\n  mat-select {\r\n    height: 20px;\r\n  }\r\n\r\n  mat-option {\r\n    font-size: 20px;\r\n  }\r\n\r\n  textarea {\r\n    height: 20px;\r\n    font-size: 20px;\r\n  }\r\n\r\n  .tabelleButton {\r\n    width: 170px;\r\n    padding-left: 10px;\r\n    height: 40px;\r\n  }\r\n\r\n  .tabelleButton .mat-button-wrapper {\r\n    font-size: 20px;\r\n  }\r\n\r\n  /deep/ .mat-form-field-appearance-legacy .mat-form-field-label {\r\n    font-size: 15px;\r\n    line-height: 12px;\r\n  }\r\n\r\n  .checkboxAnpassen {\r\n    font-size: 15px;\r\n  }\r\n\r\n  /deep/ .mat-raised-button {\r\n    font-size: 18px;\r\n  }\r\n}\r\n\r\n/*------------------------------------- für auflösungen bis 1600px --------------------------------------------------*/\r\n\r\n@media screen and (max-width: 1600px) {\r\n\r\n  .menueAbstand {\r\n    margin-bottom: 5px;\r\n  }\r\n\r\n  input {\r\n    height: 15px;\r\n    font-size: 15px;\r\n  }\r\n\r\n  mat-select {\r\n    height: 15px;\r\n  }\r\n\r\n  mat-option {\r\n    font-size: 15px;\r\n  }\r\n\r\n  textarea {\r\n    height: 15px;\r\n    font-size: 15px;\r\n  }\r\n\r\n  /deep/ .mat-form-field-infix {\r\n    width: 78px !important;\r\n  }\r\n\r\n  /deep/ .mat-form-field-appearance-legacy .mat-form-field-label {\r\n    font-size: 12px !important;\r\n    line-height: 10px;\r\n  }\r\n\r\n  .checkboxAnpassen {\r\n    font-size: 12px;\r\n  }\r\n}\r\n\r\n/*------------------------------------- für auflösungen bis 1200px --------------------------------------------------*/\r\n\r\n@media screen and (max-width: 1200px) {\r\n\r\n  .groesseMenue {\r\n    font-size: 12px;\r\n  }\r\n\r\n  input {\r\n    height: 12px;\r\n    font-size: 12px;\r\n  }\r\n\r\n  mat-select {\r\n    height: 12px;\r\n  }\r\n\r\n  mat-option {\r\n    font-size: 12px;\r\n  }\r\n\r\n  textarea {\r\n    height: 12px;\r\n    font-size: 12px;\r\n  }\r\n\r\n  /deep/ .mat-form-field-infix {\r\n    width: 65px !important;\r\n  }\r\n\r\n  .tabelleButton {\r\n    width: 130px;\r\n    padding-left: 5px;\r\n  }\r\n\r\n  .mat-raised-button {\r\n    font-size: 13px;\r\n  }\r\n}\r\n\r\n/*------------------------------------- für auflösungen bis 900px --------------------------------------------------*/\r\n\r\n@media screen and (max-width: 900px) {\r\n\r\n  .groesseMenue {\r\n    font-size: 10px;\r\n  }\r\n\r\n  /deep/ .mat-form-field-infix {\r\n    width: 53px !important;\r\n  }\r\n\r\n  .tabelleButton {\r\n    width: 120px;\r\n  }\r\n\r\n  .tabelleButton .mat-button-wrapper {\r\n    font-size: 12px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/dashboard/toolbar/html-objekt-details/html-attribute/html-attribute.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/dashboard/toolbar/html-objekt-details/html-attribute/html-attribute.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-accordion>\r\n\r\n  <mat-expansion-panel [expanded]=\"true\" class=\"detailmenuwrapper, anpassenAnToolbox\">\r\n    <mat-expansion-panel-header class=\"menueAbstand\">\r\n      <mat-panel-title class=\"groesseMenue\">\r\n        Attribute & Spezial\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n\r\n    <!-- HEADLINE ELEMENTE ######################################################################################################-->\r\n    <div class=\"customscrollbar detailmenu begrenzungAttribute\"\r\n         *ngIf=\"seitenNavService.menuePunkt=='h1' || seitenNavService.menuePunkt=='h2' ||\r\n              seitenNavService.menuePunkt=='h3' || seitenNavService.menuePunkt=='h4' ||\r\n              seitenNavService.menuePunkt=='h5' || seitenNavService.menuePunkt=='h6'\">\r\n\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"Typ\" [(value)]=\"headlineCast().tagName\">\r\n          <mat-option (click)=\"changeInnerHtml()\" value=\"h1\">h1</mat-option>\r\n          <mat-option (click)=\"changeInnerHtml()\" value=\"h2\">h2</mat-option>\r\n          <mat-option (click)=\"changeInnerHtml()\" value=\"h3\">h3</mat-option>\r\n          <mat-option (click)=\"changeInnerHtml()\" value=\"h4\">h4</mat-option>\r\n          <mat-option (click)=\"changeInnerHtml()\" value=\"h5\">h5</mat-option>\r\n          <mat-option (click)=\"changeInnerHtml()\" value=\"h6\">h6</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n\r\n    </div>\r\n\r\n\r\n    <!-- TABELLEN ELEMENTE ######################################################################################################-->\r\n    <div class=\"customscrollbar detailmenu begrenzungAttribute\"\r\n         *ngIf=\"seitenNavService.menuePunkt == 'table' && ausgewaehltesObjekt.tagName == 'table'\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Zeilen tbody\" (ngModelChange)=\"tabelleErstellen()\" [(ngModel)]=\"tableCast().anzahlZeilen\"\r\n               type=\"number\"\r\n               maxlength=\"2\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Spalten tbody\" (ngModelChange)=\"tabelleErstellen()\"\r\n               [(ngModel)]=\"tableCast().anzahlSpalten\" type=\"number\"\r\n               maxlength=\"2\">\r\n      </mat-form-field> <br>\r\n\r\n       <button class=\"tabelleButton\" id=\"theadErzeuger\" mat-raised-button color=\"primary\" style=\"margin:0.2rem\" (click)=\"tabelleGruppierungAuswaehlen('thead')\" > < thead auswählen </button> <br>\r\n       <button class=\"tabelleButton\" id=\"tbodyErzeuger\" mat-raised-button color=\"warn\" style=\"margin:0.2rem\" (click)=\"tabelleGruppierungAuswaehlen('tbody')\" > < tbody auswählen </button> <br>\r\n       <button class=\"tabelleButton\" id=\"tfootErzeuger\" mat-raised-button color=\"#234a34\" style=\"margin:0.2rem; background-color:green!important;\" (click)=\"tabelleGruppierungAuswaehlen('tfoot')\" > < tfoot auswählen </button>\r\n    </div>\r\n\r\n    <!-- TD ELEMENTE ######################################################################################################-->\r\n\r\n    <div class=\"customscrollbar detailmenu begrenzungAttribute\" *ngIf=\"seitenNavService.menuePunkt == 'td'\">\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"colspan\" [(ngModel)]=\"tdCast().colspan\" type=\"number\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"rowspan\" [(ngModel)]=\"tdCast().rowspan\" type=\"number\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"headers\" [(ngModel)]=\"tdCast().headers\" type=\"text\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <!-- TH ELEMENTE ######################################################################################################-->\r\n\r\n    <div class=\"customscrollbar detailmenu begrenzungAttribute\" *ngIf=\"seitenNavService.menuePunkt == 'th'\">\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"colspan\" [(ngModel)]=\"thCast().colspan\" type=\"number\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"headers\" [(ngModel)]=\"thCast().headers\" type=\"text\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <!-- IMAGE ELEMENTE ######################################################################################################-->\r\n\r\n    <div class=\"customscrollbar detailmenu begrenzungAttribute\" *ngIf=\"seitenNavService.menuePunkt == 'img'\">\r\n\r\n\r\n      <button id=\"mapAreaErzeuger\" *ngIf=\"imgCast().usemap == null\" matTooltip=\"Es wird am linken Rand eine Klickbare map mit area eingefügt\" class=\"buttonAbstand\" (click)=\"erzeugeMapAreaElementFuerImage()\" mat-raised-button>\r\n        < map < area\r\n      </button>\r\n      <button class=\"buttonAbstand\" id=\"areaErzeuger\" *ngIf=\"imgCast().usemap != null\" mat-raised-button color=\"primary\" style=\"margin:0.2rem\" (click)=\"areaInImageAuswaehlen()\" > < area auswahlen </button>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"src\" [(ngModel)]=\"imgCast().src\" type=\"text\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"alt\" [(ngModel)]=\"imgCast().alt\" type=\"text\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"crossorigin\" [(ngModel)]=\"imgCast().crossorigin\" type=\"text\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"ismap\" [(ngModel)]=\"imgCast().ismap\" type=\"text\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"longdesc\" [(ngModel)]=\"imgCast().longdesc\" type=\"text\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"sizes\" [(ngModel)]=\"imgCast().sizes\" type=\"text\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"srcset\" [(ngModel)]=\"imgCast().srcset\" type=\"text\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"usemap\" [(ngModel)]=\"imgCast().usemap\" type=\"text\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"width\" [(ngModel)]=\"imgCast().width\" type=\"text\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"height\" [(ngModel)]=\"imgCast().height\" type=\"text\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <!-- AREA ELEMENT ######################################################################################################-->\r\n    <div class=\"customscrollbar detailmenu begrenzungAttribute\" *ngIf=\"seitenNavService.menuePunkt == 'area'\">\r\n\r\n\r\n      <mat-form-field>\r\n        <input matTooltip=\"z.B. 90,58,3 für circle\" matInput placeholder=\"coords\" [(ngModel)]=\"areaCast().coords\"\r\n               type=\"text\" maxlength=\"20\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"shape\" [(value)]=\"areaCast().shape\">\r\n          <mat-option value=\"default\">default</mat-option>\r\n          <mat-option value=\"rect\">rect</mat-option>\r\n          <mat-option value=\"circle\">circle</mat-option>\r\n          <mat-option value=\"poly\">poly</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"target\" [(ngModel)]=\"areaCast().target\"\r\n               type=\"text\" maxlength=\"20\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"download\" [(ngModel)]=\"areaCast().download\"\r\n               type=\"text\" maxlength=\"20\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"href\" [(ngModel)]=\"areaCast().href\"\r\n               type=\"text\" maxlength=\"20\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"hreflang\" [(ngModel)]=\"areaCast().hreflang\"\r\n               type=\"text\" maxlength=\"20\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"media\" [(ngModel)]=\"areaCast().media\"\r\n               type=\"text\" maxlength=\"20\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"alt\" [(ngModel)]=\"areaCast().alt\"\r\n               type=\"text\" maxlength=\"20\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"rel\" [(value)]=\"areaCast().rel\">\r\n          <mat-option value=\"alternate\">alternate</mat-option>\r\n          <mat-option value=\"author\">author</mat-option>\r\n          <mat-option value=\"bookmark\">bookmark</mat-option>\r\n          <mat-option value=\"external\">external</mat-option>\r\n          <mat-option value=\"help\">help</mat-option>\r\n          <mat-option value=\"license\">license</mat-option>\r\n          <mat-option value=\"next\">next</mat-option>\r\n          <mat-option value=\"nofollow\">nofollow</mat-option>\r\n          <mat-option value=\"noreferrer\">noreferrer</mat-option>\r\n          <mat-option value=\"noopener\">noopener</mat-option>\r\n          <mat-option value=\"prev\">prev</mat-option>\r\n          <mat-option value=\"search\">search</mat-option>\r\n          <mat-option value=\"tag\">tag</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"type\" [(ngModel)]=\"areaCast().type\"\r\n               type=\"text\" maxlength=\"20\">\r\n      </mat-form-field>\r\n\r\n    </div>\r\n\r\n    <!-- FORM ELEMENTE ######################################################################################################-->\r\n    <div class=\"customscrollbar detailmenu begrenzungAttribute\" *ngIf=\"seitenNavService.menuePunkt == 'form'\">\r\n\r\n      <button class=\"buttonAbstand\" id=\"fieldsetErzeuger\" (click)=\"erzeugeFieldsetElementFuerForm()\" mat-raised-button>\r\n        < fieldset\r\n      </button>\r\n      <button class=\"buttonAbstand\" id=\"buttonErzeuger\" (click)=\"erzeugeButtonElementFuerForm()\" mat-raised-button>\r\n        < button\r\n      </button>\r\n\r\n      <br>\r\n      <button class=\"buttonAbstand\" id=\"inputErzeuger\" (click)=\"erzeugeInputElementFuerForm()\" mat-raised-button>\r\n        < input\r\n      </button>\r\n      <button class=\"buttonAbstand\" id=\"outputErzeuger\" (click)=\"erzeugeOutputElementFuerForm()\" mat-raised-button>\r\n        < output\r\n      </button>\r\n\r\n      <br>\r\n\r\n      <button class=\"buttonAbstand\" id=\"selectErzeuger\" (click)=\"erzeugeSelectElementFuerForm()\" mat-raised-button>\r\n        < select\r\n      </button>\r\n      <button class=\"buttonAbstand\" id=\"textareaErzeuger\" (click)=\"erzeugeTextareaElementFuerForm()\" mat-raised-button>\r\n        < textarea\r\n      </button>\r\n\r\n\r\n      <br>\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"Method\" [(value)]=\"formCast().method\">\r\n          <mat-option value=\"get\">get</mat-option>\r\n          <mat-option value=\"post\">post</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"action\" maxlength=\"40\" [(ngModel)]=\"formCast().action\" type=\"text\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"autocomplete\" maxlength=\"40\" [(ngModel)]=\"formCast().autocomplete\" type=\"text\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"enctype\" maxlength=\"40\" [(ngModel)]=\"formCast().enctype\" type=\"text\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"target\" maxlength=\"40\" [(ngModel)]=\"formCast().target\" type=\"text\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <!-- FIELDSET ELEMENTE ######################################################################################################-->\r\n    <div class=\"customscrollbar detailmenu begrenzungAttribute\" *ngIf=\"seitenNavService.menuePunkt == 'fieldset'\">\r\n      <button class=\"buttonAbstand\" id=\"inputErzeuger\" (click)=\"erzeugeInputElementFuerForm()\" mat-raised-button>\r\n        < input\r\n      </button>\r\n      <button class=\"buttonAbstand\" id=\"button1Erzeuger\" (click)=\"erzeugeButtonElementFuerForm()\" mat-raised-button>\r\n        < button\r\n      </button>\r\n\r\n      <br>\r\n\r\n      <button class=\"buttonAbstand\" id=\"selectErzeuger\" (click)=\"erzeugeSelectElementFuerForm()\" mat-raised-button>\r\n        < select\r\n      </button>\r\n      <button class=\"buttonAbstand\" id=\"textareaErzeuger\" (click)=\"erzeugeTextareaElementFuerForm()\" mat-raised-button>\r\n        < textarea\r\n      </button>\r\n\r\n      <br>\r\n\r\n      <button class=\"buttonAbstand\" id=\"outputErzeuger\" (click)=\"erzeugeOutputElementFuerForm()\" mat-raised-button>\r\n        < output\r\n      </button>\r\n\r\n      <br>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"form\" maxlength=\"40\" [(ngModel)]=\"fieldsetCast().form\" type=\"text\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"name\" maxlength=\"40\" [(ngModel)]=\"fieldsetCast().name\" type=\"text\">\r\n      </mat-form-field>\r\n\r\n      <mat-checkbox class=\"checkboxAbstand\" [(ngModel)]=\"fieldsetCast().disabled\">\r\n        disabled\r\n      </mat-checkbox>\r\n    </div>\r\n\r\n\r\n    <!-- SELECT ELEMENTE ######################################################################################################-->\r\n    <div class=\"customscrollbar detailmenu\" *ngIf=\"seitenNavService.menuePunkt == 'select'\">\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Anzahl Option\" (ngModelChange)=\"erzeugeOptionElementFuerForm()\"\r\n               [(ngModel)]=\"selectCast().anzahlOptionen\" type=\"number\" maxlength=\"2\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Anzahl Gruppierungen\" (ngModelChange)=\"erzeugeOptionElementFuerForm()\"\r\n               [(ngModel)]=\"selectCast().anzahlOptGroups\" type=\"number\" maxlength=\"1\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"Multiple\" (ngModelChange)=\"erzeugeOptionElementFuerForm()\"\r\n                    [(value)]=\"selectCast().multiple\">\r\n          <mat-option value=\"An\">An</mat-option>\r\n          <mat-option value=\"Aus\">Aus</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"name\" [(ngModel)]=\"selectCast().name\" type=\"text\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"size\" [(ngModel)]=\"selectCast().size\" type=\"text\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"form\" [(ngModel)]=\"selectCast().form\" type=\"text\">\r\n      </mat-form-field>\r\n\r\n      <br>\r\n\r\n      <mat-checkbox class=\"checkboxAbstand\" [(ngModel)]=\"selectCast().required\">\r\n        required\r\n      </mat-checkbox>\r\n\r\n      <mat-checkbox class=\"checkboxAbstand\" [(ngModel)]=\"selectCast().autofocus\">\r\n        autofocus\r\n      </mat-checkbox>\r\n\r\n      <mat-checkbox class=\"checkboxAbstand\" [(ngModel)]=\"selectCast().disabled\">\r\n        disabled\r\n      </mat-checkbox>\r\n\r\n    </div>\r\n\r\n    <!-- TEXTAREA ELEMENTE ######################################################################################################-->\r\n    <div class=\"customscrollbar detailmenu begrenzungAttribute\" *ngIf=\"seitenNavService.menuePunkt == 'textarea'\">\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"rows\" [(ngModel)]=\"textareaCast().rows\" type=\"number\" maxlength=\"2\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"cols\" [(ngModel)]=\"textareaCast().cols\" type=\"number\" maxlength=\"2\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"dirname\" [(ngModel)]=\"textareaCast().dirname\" type=\"text\" >\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"form\" [(ngModel)]=\"textareaCast().form\" type=\"text\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"maxlength\" [(ngModel)]=\"textareaCast().maxlength\" type=\"text\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"name\" [(ngModel)]=\"textareaCast().name\" type=\"text\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"placeholder\" [(ngModel)]=\"textareaCast().placeholder\" type=\"text\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"readonly\" [(ngModel)]=\"textareaCast().readonly\" type=\"text\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"wrap\" [(value)]=\"textareaCast().wrap\">\r\n          <mat-option value=\"hard\">hard</mat-option>\r\n          <mat-option value=\"soft\">soft</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <br/>\r\n      <mat-checkbox class=\"checkboxAbstand\" [(ngModel)]=\"textareaCast().required\">\r\n        required\r\n      </mat-checkbox>\r\n      <mat-checkbox class=\"checkboxAbstand\" [(ngModel)]=\"textareaCast().autofocus\">\r\n        autofocus\r\n      </mat-checkbox>\r\n      <mat-checkbox class=\"checkboxAbstand\" [(ngModel)]=\"textareaCast().disabled\">\r\n        disabled\r\n      </mat-checkbox>\r\n    </div>\r\n\r\n    <!-- INPUT ELEMENTE ######################################################################################################-->\r\n    <div class=\"customscrollbar detailmenu begrenzungAttribute\" *ngIf=\"seitenNavService.menuePunkt == 'input'\">\r\n\r\n      <button class=\"buttonAbstand\" (click)=\"erzeugeDatalistFuerInput()\" mat-raised-button>\r\n        < datalist\r\n      </button>\r\n\r\n      <br>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"pattern\" [(ngModel)]=\"inputCast().pattern\" type=\"text\"\r\n               maxlength=\"100\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"type\" [(ngModel)]=\"inputCast().type\" type=\"text\"\r\n               maxlength=\"10\">\r\n      </mat-form-field>\r\n\r\n      <br>\r\n\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"type\" [(value)]=\"inputCast().type\">\r\n          <mat-option value=\"button\">button</mat-option>\r\n          <mat-option value=\"checkbox\">checkbox</mat-option>\r\n          <mat-option value=\"color\">color</mat-option>\r\n          <mat-option value=\"date\">date</mat-option>\r\n          <mat-option value=\"datetime-local\">datetime-local</mat-option>\r\n          <mat-option value=\"email\">email</mat-option>\r\n          <mat-option value=\"file\">file</mat-option>\r\n          <mat-option value=\"hidden\">hidden</mat-option>\r\n          <mat-option value=\"image\">image</mat-option>\r\n          <mat-option value=\"month\">month</mat-option>\r\n          <mat-option value=\"number\">number</mat-option>\r\n          <mat-option value=\"password\">password</mat-option>\r\n          <mat-option value=\"radio\">radio</mat-option>\r\n          <mat-option value=\"range\">range</mat-option>\r\n          <mat-option value=\"reset\">reset</mat-option>\r\n          <mat-option value=\"search\">search</mat-option>\r\n          <mat-option value=\"submit\">submit</mat-option>\r\n          <mat-option value=\"tel\">tel</mat-option>\r\n          <mat-option value=\"text\">text</mat-option>\r\n          <mat-option value=\"time\">time</mat-option>\r\n          <mat-option value=\"url\">url</mat-option>\r\n          <mat-option value=\"week\">week</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"name\" [(ngModel)]=\"inputCast().name\" type=\"text\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"value\" [(ngModel)]=\"inputCast().value\" type=\"text\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"accept\" [(ngModel)]=\"inputCast().accept\" type=\"text\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"alt\" [(ngModel)]=\"inputCast().alt\" type=\"text\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"autocomplete\" [(value)]=\"inputCast().autocomplete\">\r\n          <mat-option value=\"on\">on</mat-option>\r\n          <mat-option value=\"off\">off</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"dirname\" [(ngModel)]=\"inputCast().dirname\" type=\"text\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"list\" [(ngModel)]=\"inputCast().list\" type=\"text\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"max\" [(ngModel)]=\"inputCast().max\" type=\"text\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"maxlength\" [(ngModel)]=\"inputCast().maxlength\" type=\"text\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"min\" [(ngModel)]=\"inputCast().min\" type=\"text\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"height\" [(ngModel)]=\"inputCast().height\" type=\"text\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"width\" [(ngModel)]=\"inputCast().width\" type=\"text\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"placeholder\" [(ngModel)]=\"inputCast().placeholder\" type=\"text\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"size\" [(ngModel)]=\"inputCast().size\" type=\"number\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matTooltip=\"nur für type='image'\" matInput placeholder=\"src\" [(ngModel)]=\"inputCast().src\" type=\"number\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input  matInput placeholder=\"step\" [(ngModel)]=\"inputCast().step\" type=\"number\">\r\n      </mat-form-field>\r\n\r\n      <br>\r\n      <mat-checkbox class=\"checkboxAbstand\" [(ngModel)]=\"inputCast().multiple\">\r\n        multiple\r\n      </mat-checkbox>\r\n      <mat-checkbox class=\"checkboxAbstand\" [(ngModel)]=\"inputCast().checked\">\r\n        checked\r\n      </mat-checkbox>\r\n      <mat-checkbox class=\"checkboxAbstand\" [(ngModel)]=\"inputCast().required\">\r\n        required\r\n      </mat-checkbox>\r\n      <mat-checkbox class=\"checkboxAbstand\" [(ngModel)]=\"inputCast().autofocus\">\r\n        autofocus\r\n      </mat-checkbox>\r\n      <mat-checkbox class=\"checkboxAbstand\" [(ngModel)]=\"inputCast().disabled\">\r\n        disabled\r\n      </mat-checkbox>\r\n    </div>\r\n\r\n\r\n    <!-- BUTTON #############################################################################################################-->\r\n    <div class=\"customscrollbar detailmenu begrenzungAttribute\" *ngIf=\"seitenNavService.menuePunkt == 'button'\">\r\n\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"Type\" [(value)]=\"buttonCast().type\">\r\n          <mat-option value=\"button\">button</mat-option>\r\n          <mat-option value=\"submit\">submit</mat-option>\r\n          <mat-option value=\"reset\">reset</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"value\" [(ngModel)]=\"buttonCast().value\" type=\"text\"\r\n               maxlength=\"10\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"form\" [(ngModel)]=\"buttonCast().form\" type=\"text\"\r\n               maxlength=\"10\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"name\" [(ngModel)]=\"buttonCast().name\" type=\"text\"\r\n               maxlength=\"10\">\r\n      </mat-form-field>\r\n\r\n      <br>\r\n\r\n      <mat-checkbox class=\"checkboxAbstand\" [(ngModel)]=\"buttonCast().disabled\">\r\n        disabled\r\n      </mat-checkbox>\r\n      <mat-checkbox class=\"checkboxAbstand\" [(ngModel)]=\"buttonCast().autofocus\">\r\n        autofocus\r\n      </mat-checkbox>\r\n    </div>\r\n\r\n    <!-- OUTPUT #############################################################################################################-->\r\n    <div class=\"customscrollbar detailmenu begrenzungAttribute\" *ngIf=\"seitenNavService.menuePunkt == 'output'\">\r\n\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"for\" [(ngModel)]=\"outputCast().for\" type=\"text\"\r\n               maxlength=\"10\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"form\" [(ngModel)]=\"outputCast().form\" type=\"text\"\r\n               maxlength=\"10\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"name\" [(ngModel)]=\"outputCast().name\" type=\"text\"\r\n               maxlength=\"10\">\r\n      </mat-form-field>\r\n\r\n    </div>\r\n\r\n\r\n    <!-- A Element #############################################################################################################-->\r\n    <div class=\"customscrollbar detailmenu begrenzungAttribute\" *ngIf=\"seitenNavService.menuePunkt == 'a'\">\r\n\r\n\r\n      <mat-checkbox matTooltip=\"Interner Link um zwischen den Seiten zu wechseln. Ziel kann aus der Seitenliste gewählt werden\"\r\n                    class=\"checkboxAnpassen\" [(ngModel)]=\"aCast().istEinInternerLink\">\r\n        Interner Link\r\n      </mat-checkbox>\r\n      <mat-form-field>\r\n        <mat-select [disabled]=\"!aCast().istEinInternerLink\" placeholder=\"Seitenliste\" [(value)]=\"aCast().internerLinkAdresse\">\r\n          <mat-option *ngFor=\"let seite of this.seitenNavService.seitenListe\" [value]=\"seite\">\r\n            <span class=\"seitenElement\"> {{seite}} </span>\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <br/>\r\n\r\n      <mat-form-field>\r\n        <input [disabled]=\"aCast().istEinInternerLink\" matInput placeholder=\"href\" [(ngModel)]=\"aCast().href\"\r\n               type=\"text\" maxlength=\"100\" id=\"inputLink\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"target\" [(ngModel)]=\"aCast().target\"\r\n               type=\"text\" maxlength=\"20\">\r\n      </mat-form-field>\r\n\r\n\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"download\" [(ngModel)]=\"aCast().download\"\r\n               type=\"text\" maxlength=\"20\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"hreflang\" [(ngModel)]=\"aCast().hreflang\"\r\n               type=\"text\" maxlength=\"20\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"media\" [(ngModel)]=\"aCast().media\"\r\n               type=\"text\" maxlength=\"20\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"ping\" [(ngModel)]=\"aCast().ping\"\r\n               type=\"text\" maxlength=\"20\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"rel\" [(value)]=\"aCast().rel\">\r\n          <mat-option value=\"alternate\">alternate</mat-option>\r\n          <mat-option value=\"author\">author</mat-option>\r\n          <mat-option value=\"bookmark\">bookmark</mat-option>\r\n          <mat-option value=\"external\">external</mat-option>\r\n          <mat-option value=\"help\">help</mat-option>\r\n          <mat-option value=\"license\">license</mat-option>\r\n          <mat-option value=\"next\">next</mat-option>\r\n          <mat-option value=\"nofollow\">nofollow</mat-option>\r\n          <mat-option value=\"noreferrer\">noreferrer</mat-option>\r\n          <mat-option value=\"noopener\">noopener</mat-option>\r\n          <mat-option value=\"prev\">prev</mat-option>\r\n          <mat-option value=\"search\">search</mat-option>\r\n          <mat-option value=\"tag\">tag</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"type\" [(ngModel)]=\"aCast().type\"\r\n               type=\"text\" maxlength=\"20\">\r\n      </mat-form-field>\r\n\r\n    </div>\r\n\r\n    <!-- LIST ELEMENTE ######################################################################################################-->\r\n    <div class=\"customscrollbar detailmenu begrenzungAttribute\"\r\n         *ngIf=\"seitenNavService.menuePunkt == 'ul' || seitenNavService.menuePunkt == 'ol'\">\r\n\r\n\r\n      <button class=\"buttonAbstand\" id=\"liErzeuger\" (click)=\"erzeugeLiElement()\" mat-raised-button>\r\n        < li\r\n      </button>\r\n\r\n      <mat-form-field *ngIf=\"seitenNavService.menuePunkt == 'ol'\">\r\n        <mat-select placeholder=\"ol type\" [(value)]=\"olCast().type\">\r\n          <mat-option value=\"1\">1</mat-option>\r\n          <mat-option value=\"A\">A</mat-option>\r\n          <mat-option value=\"a\">a</mat-option>\r\n          <mat-option value=\"I\">I</mat-option>\r\n          <mat-option value=\"i\">i</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field *ngIf=\"seitenNavService.menuePunkt == 'ul'\">\r\n        <mat-select placeholder=\"type\" [(value)]=\"ulCast().type\">\r\n          <mat-option value=\"none\">none</mat-option>\r\n          <mat-option value=\"circle\">circle</mat-option>\r\n          <mat-option value=\"disc\">disc</mat-option>\r\n          <mat-option value=\"inherit\">inherit</mat-option>\r\n          <mat-option value=\"square\">square</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field *ngIf=\"seitenNavService.menuePunkt == 'ol'\">\r\n        <input matTooltip=\"Gibt an ab wann die Liste geordnet sein soll\"\r\n               matInput placeholder=\"start\" [(ngModel)]=\"olCast().start\"\r\n               type=\"number\">\r\n      </mat-form-field>\r\n      <br>\r\n      <mat-checkbox *ngIf=\"seitenNavService.menuePunkt == 'ol'\" [(ngModel)]=\"olCast().reversed\">reversed</mat-checkbox>\r\n    </div>\r\n\r\n\r\n    <!-- NAV ELEMENT ######################################################################################################-->\r\n    <div class=\"customscrollbar detailmenu begrenzungAttribute\" *ngIf=\"seitenNavService.menuePunkt == 'nav'\">\r\n      <button class=\"buttonAllein\" id=\"liAErzeuger\" (click)=\"erzeugeNavAElement()\" mat-raised-button>\r\n        < li < a\r\n      </button>\r\n    </div>\r\n\r\n    <!-- DESCRIPTION LIST ELEMENTE ######################################################################################################-->\r\n    <div class=\"customscrollbar detailmenu begrenzungAttribute\" *ngIf=\"seitenNavService.menuePunkt == 'dl'\">\r\n      <button class=\"buttonAbstand\" id=\"dtErzeuger\" (click)=\"erzeugeDtElement()\" mat-raised-button>\r\n        < dt\r\n      </button>\r\n      <button class=\"buttonAbstand\" id=\"ddErzeuger\" (click)=\"erzeugeDdElement()\" mat-raised-button>\r\n        < dd\r\n      </button>\r\n    </div>\r\n\r\n    <!-- BLOCKQUOTE ELEMENTE ######################################################################################################-->\r\n    <div class=\"customscrollbar detailmenu begrenzungAttribute\" *ngIf=\"seitenNavService.menuePunkt == 'blockquote'\">\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"cite\" [(ngModel)]=\"blockquoteCast().cite\" type=\"text\">\r\n    </mat-form-field>\r\n    </div>\r\n\r\n    <!-- PROGRESS ELEMENTE ######################################################################################################-->\r\n    <div class=\"customscrollbar detailmenu begrenzungAttribute\" *ngIf=\"seitenNavService.menuePunkt == 'progress'\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Max\" [(ngModel)]=\"progressCast().max\" type=\"number\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Value\" [(ngModel)]=\"progressCast().value\" type=\"number\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <!-- DETAILS ELEMENTE ######################################################################################################-->\r\n    <div class=\"customscrollbar detailmenu begrenzungAttribute\" *ngIf=\"seitenNavService.menuePunkt == 'details'\">\r\n      <button class=\"buttonAbstand\" id=\"summaryErzeuger\" (click)=\"erzeugeSummaryElement()\" mat-raised-button>\r\n        < summary\r\n      </button>\r\n      <button class=\"buttonAbstand\" id=\"detailsPErzeuger\" (click)=\"erzeugeDetailsPElement()\" mat-raised-button>\r\n        < p\r\n      </button>\r\n    </div>\r\n\r\n    <!-- METER ELEMENTE ######################################################################################################-->\r\n    <div class=\"customscrollbar detailmenu begrenzungAttribute\" *ngIf=\"seitenNavService.menuePunkt == 'meter'\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Min\" [(ngModel)]=\"meterCast().min\" type=\"text\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Max\" [(ngModel)]=\"meterCast().max\" type=\"text\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Value\" [(ngModel)]=\"meterCast().value\" type=\"text\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"High\" [(ngModel)]=\"meterCast().high\" type=\"text\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Low\" [(ngModel)]=\"meterCast().low\" type=\"text\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Optimum\" [(ngModel)]=\"meterCast().optimum\" type=\"text\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <!-- Q ELEMENTE ######################################################################################################-->\r\n    <div class=\"customscrollbar detailmenu begrenzungAttribute\" *ngIf=\"seitenNavService.menuePunkt == 'q'\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Cite\" [(ngModel)]=\"qCast().cite\" type=\"text\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <!-- AUDIO ELEMENTE ######################################################################################################-->\r\n    <div class=\"customscrollbar detailmenu begrenzungAttribute\" *ngIf=\"seitenNavService.menuePunkt == 'audio'\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"src\" [(ngModel)]=\"audioCast().src\" type=\"text\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"preload\" [(ngModel)]=\"audioCast().preload\">\r\n          <mat-option value=\"auto\">auto</mat-option>\r\n          <mat-option value=\"metadata\">metadata</mat-option>\r\n          <mat-option value=\"none\">none</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <mat-checkbox class=\"checkboxAnpassen\" [(ngModel)]=\"audioCast().autoplay\">autoplay</mat-checkbox>\r\n      <br/>\r\n      <mat-checkbox class=\"checkboxAnpassen\" [(ngModel)]=\"audioCast().controls\">controls</mat-checkbox>\r\n      <br/>\r\n      <mat-checkbox class=\"checkboxAnpassen\" [(ngModel)]=\"audioCast().loop\">loop</mat-checkbox>\r\n      <br/>\r\n      <mat-checkbox class=\"checkboxAnpassen\" [(ngModel)]=\"audioCast().muted\">muted</mat-checkbox>\r\n      <br/>\r\n    </div>\r\n\r\n    <!-- VIDEO ELEMENTE ######################################################################################################-->\r\n    <div class=\"customscrollbar detailmenu begrenzungAttribute\" *ngIf=\"seitenNavService.menuePunkt == 'video'\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"src\" [(ngModel)]=\"videoCast().src\" type=\"text\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"poster\" [(ngModel)]=\"videoCast().poster\" type=\"text\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"preload\" [(ngModel)]=\"videoCast().preload\">\r\n          <mat-option value=\"auto\">auto</mat-option>\r\n          <mat-option value=\"metadata\">metadata</mat-option>\r\n          <mat-option value=\"none\">none</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <mat-checkbox class=\"checkboxAnpassen\" [(ngModel)]=\"videoCast().autoplay\">autoplay</mat-checkbox>\r\n      <br/>\r\n      <mat-checkbox class=\"checkboxAnpassen\" [(ngModel)]=\"videoCast().controls\">controls</mat-checkbox>\r\n      <br/>\r\n      <mat-checkbox class=\"checkboxAnpassen\" [(ngModel)]=\"videoCast().loop\">loop</mat-checkbox>\r\n      <br/>\r\n      <mat-checkbox class=\"checkboxAnpassen\" [(ngModel)]=\"videoCast().muted\">muted</mat-checkbox>\r\n      <br/>\r\n    </div>\r\n\r\n  </mat-expansion-panel>\r\n\r\n  <mat-expansion-panel class=\"detailmenuwrapper, anpassenAnToolbox\">\r\n    <mat-expansion-panel-header class=\"menueAbstand\">\r\n      <mat-panel-title class=\"groesseMenue\">\r\n        Globale Attribute\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n\r\n    <div style=\"height:200px; overflow-y: scroll\" class=\"customscrollbar\">\r\n      <mat-form-field>\r\n        <input matTooltip=\"Wird von Clariframer genutzt, darf nicht verändert werden\"\r\n               matInput placeholder=\"id\" [(ngModel)]=\"ausgewaehltesObjekt.id\"\r\n               type=\"text\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"class\" [(ngModel)]=\"ausgewaehltesObjekt.class\" type=\"text\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"dir\" [(ngModel)]=\"ausgewaehltesObjekt.dir\">\r\n          <mat-option value=\"auto\">auto</mat-option>\r\n          <mat-option value=\"ltr\">ltr</mat-option>\r\n          <mat-option value=\"rtl\">rtl</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"draggable\" [(ngModel)]=\"ausgewaehltesObjekt.draggable\">\r\n          <mat-option value=\"auto\">auto</mat-option>\r\n          <mat-option value=\"ltr\">true</mat-option>\r\n          <mat-option value=\"rtl\">false</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"dropzone\" [(ngModel)]=\"ausgewaehltesObjekt.dropzone\">\r\n          <mat-option value=\"copy\">copy</mat-option>\r\n          <mat-option value=\"move\">move</mat-option>\r\n          <mat-option value=\"link\">link</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matTooltip=\"z.B. de für Deutschland\" matInput placeholder=\"lang\" [(ngModel)]=\"ausgewaehltesObjekt.lang\"\r\n               type=\"text\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matTooltip=\"Muss eine Nummer sein.\" matInput placeholder=\"tabindex\" [(ngModel)]=\"ausgewaehltesObjekt.tabindex\" type=\"text\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"title\" [(ngModel)]=\"ausgewaehltesObjekt.title\" type=\"text\">\r\n      </mat-form-field>\r\n      <br/>\r\n\r\n      <mat-checkbox class=\"checkboxAnpassen\" [(ngModel)]=\"ausgewaehltesObjekt.contenteditable\">contenteditable</mat-checkbox>\r\n      <br/>\r\n\r\n      <mat-checkbox class=\"checkboxAnpassen\" matTooltip=\"contenteditable muss dafür aktiviert werden\" [(ngModel)]=\"ausgewaehltesObjekt.spellcheck\">spellcheck</mat-checkbox>\r\n      <br/>\r\n\r\n      <mat-checkbox class=\"checkboxAnpassen\" [(ngModel)]=\"ausgewaehltesObjekt.hidden\">hidden</mat-checkbox>\r\n    </div>\r\n  </mat-expansion-panel>\r\n\r\n</mat-accordion>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/dashboard/toolbar/html-objekt-details/html-attribute/html-attribute.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/dashboard/toolbar/html-objekt-details/html-attribute/html-attribute.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: HtmlAttributeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlAttributeComponent", function() { return HtmlAttributeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _html_objekt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../html-objekt.service */ "./src/app/dashboard/html-objekt.service.ts");
/* harmony import */ var _seiten_navi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../seiten-navi.service */ "./src/app/dashboard/toolbar/seiten-navi.service.ts");
/* harmony import */ var _grid_objekte_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../grid-objekte.service */ "./src/app/dashboard/grid-objekte.service.ts");
/* harmony import */ var _toolbar_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../toolbar-animations */ "./src/app/dashboard/toolbar/toolbar-animations.ts");
/* harmony import */ var _html_objekte_form_Textarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../html-objekte/form/Textarea */ "./src/app/dashboard/html-objekte/form/Textarea.ts");
/* harmony import */ var _html_objekte_form_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../html-objekte/form/Button */ "./src/app/dashboard/html-objekte/form/Button.ts");
/* harmony import */ var _html_objekte_form_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../html-objekte/form/Select */ "./src/app/dashboard/html-objekte/form/Select.ts");
/* harmony import */ var _html_objekte_form_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../html-objekte/form/Input */ "./src/app/dashboard/html-objekte/form/Input.ts");
/* harmony import */ var _html_objekte_A__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../html-objekte/A */ "./src/app/dashboard/html-objekte/A.ts");
/* harmony import */ var _html_objekte_table_Tr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../html-objekte/table/Tr */ "./src/app/dashboard/html-objekte/table/Tr.ts");
/* harmony import */ var _html_objekte_table_Td__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../html-objekte/table/Td */ "./src/app/dashboard/html-objekte/table/Td.ts");
/* harmony import */ var _html_objekte_form_Fieldset__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../html-objekte/form/Fieldset */ "./src/app/dashboard/html-objekte/form/Fieldset.ts");
/* harmony import */ var _html_objekte_form_Legend__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../html-objekte/form/Legend */ "./src/app/dashboard/html-objekte/form/Legend.ts");
/* harmony import */ var _html_objekte_list_li__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../html-objekte/list/li */ "./src/app/dashboard/html-objekte/list/li.ts");
/* harmony import */ var _html_objekte_form_Label__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../html-objekte/form/Label */ "./src/app/dashboard/html-objekte/form/Label.ts");
/* harmony import */ var _html_objekte_Div__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../html-objekte/Div */ "./src/app/dashboard/html-objekte/Div.ts");
/* harmony import */ var _html_objekte_form_Option__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../html-objekte/form/Option */ "./src/app/dashboard/html-objekte/form/Option.ts");
/* harmony import */ var _html_objekte_list_dt__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../html-objekte/list/dt */ "./src/app/dashboard/html-objekte/list/dt.ts");
/* harmony import */ var _html_objekte_list_dd__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../html-objekte/list/dd */ "./src/app/dashboard/html-objekte/list/dd.ts");
/* harmony import */ var _html_objekte_table_Th__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../html-objekte/table/Th */ "./src/app/dashboard/html-objekte/table/Th.ts");
/* harmony import */ var _html_objekte_table_Tbody__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../html-objekte/table/Tbody */ "./src/app/dashboard/html-objekte/table/Tbody.ts");
/* harmony import */ var _html_objekte_table_Tfoot__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../html-objekte/table/Tfoot */ "./src/app/dashboard/html-objekte/table/Tfoot.ts");
/* harmony import */ var _html_objekte_table_Thead__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../html-objekte/table/Thead */ "./src/app/dashboard/html-objekte/table/Thead.ts");
/* harmony import */ var _html_objekte_table_Caption__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../html-objekte/table/Caption */ "./src/app/dashboard/html-objekte/table/Caption.ts");
/* harmony import */ var _html_objekte_details_summary__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../html-objekte/details/summary */ "./src/app/dashboard/html-objekte/details/summary.ts");
/* harmony import */ var _html_objekte_p__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../html-objekte/p */ "./src/app/dashboard/html-objekte/p.ts");
/* harmony import */ var _html_objekte_Map__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../html-objekte/Map */ "./src/app/dashboard/html-objekte/Map.ts");
/* harmony import */ var _html_objekte_Area__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../html-objekte/Area */ "./src/app/dashboard/html-objekte/Area.ts");
/* harmony import */ var _html_objekte_form_Output__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../html-objekte/form/Output */ "./src/app/dashboard/html-objekte/form/Output.ts");
/* harmony import */ var _html_objekte_form_Datalist__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../html-objekte/form/Datalist */ "./src/app/dashboard/html-objekte/form/Datalist.ts");
/* harmony import */ var _html_objekte_form_Optgroup__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../html-objekte/form/Optgroup */ "./src/app/dashboard/html-objekte/form/Optgroup.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
































var HtmlAttributeComponent = /** @class */ (function () {
    function HtmlAttributeComponent(htmlObjektService, seitenNavService, gridObjekteService) {
        var _this = this;
        this.htmlObjektService = htmlObjektService;
        this.seitenNavService = seitenNavService;
        this.gridObjekteService = gridObjekteService;
        // An dem HTML-Objekt Service anmelden und über Änderungen informiert werden
        this.htmlObjektService.myMethod$.subscribe(function (data) {
            _this.ausgewaehltesObjekt = data;
        });
    }
    HtmlAttributeComponent.prototype.ngOnInit = function () {
    };
    /*
      Fieldset und Legend Element wird erzeugt.
      Legend wird in das Fieldset Element gelegt.
    */
    HtmlAttributeComponent.prototype.erzeugeFieldsetElementFuerForm = function () {
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_4__["ToolbarAnimations"].animiereButtonKlick('fieldset');
        var fieldset = new _html_objekte_form_Fieldset__WEBPACK_IMPORTED_MODULE_12__["Fieldset"]('auto', 'auto');
        var legend = new _html_objekte_form_Legend__WEBPACK_IMPORTED_MODULE_13__["Legend"]('40px', '20px');
        fieldset.liegtAufDemGrid = true;
        legend.liegtAufDemGrid = true;
        legend.innererText = 'Legend';
        fieldset.innereHTMLObjekte.push(legend);
        this.ausgewaehltesObjekt.innereHTMLObjekte.push(fieldset);
        this.gridObjekteService.htmlObjektGlobalIDFuerInnereElementeErzeugen(this.ausgewaehltesObjekt);
        this.gridObjekteService.abspeichern(this.gridObjekteService.holeAktuelleSeitenId());
    };
    /*
    Input und Label Element wird erzeugt.
    Input wird in das Label Element gelegt.
    Attribut "for" von Label wird der ID von Input Element zugewiesen. Fuer Abhaengigkeit!
     */
    HtmlAttributeComponent.prototype.erzeugeInputElementFuerForm = function () {
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_4__["ToolbarAnimations"].animiereButtonKlick('input');
        var input = new _html_objekte_form_Input__WEBPACK_IMPORTED_MODULE_8__["Input"]('50px', '20px');
        var label = new _html_objekte_form_Label__WEBPACK_IMPORTED_MODULE_15__["Label"]('20px', '20px');
        var div = new _html_objekte_Div__WEBPACK_IMPORTED_MODULE_16__["Div"]('auto', 'auto');
        div.background_color = 'transparent';
        div.position = 'static';
        div.border = 'none';
        div.liegtAufDemGrid = true;
        input.pattern = '[A-Za-z0-9]+';
        input.value = 'input';
        input.liegtAufDemGrid = true;
        input.margin = '20px 0px 0px 0px';
        label.liegtAufDemGrid = true;
        div.innereHTMLObjekte.push(label);
        div.innereHTMLObjekte.push(input);
        this.ausgewaehltesObjekt.innereHTMLObjekte.push(div);
        this.gridObjekteService.htmlObjektGlobalIDFuerInnereElementeErzeugen(this.ausgewaehltesObjekt);
        input.name = 'name' + input.id;
        label.for = '' + input.id;
        label.innererText = 'Label:';
        this.gridObjekteService.abspeichern(this.gridObjekteService.holeAktuelleSeitenId());
    };
    HtmlAttributeComponent.prototype.erzeugeDatalistFuerInput = function () {
        var datalist = new _html_objekte_form_Datalist__WEBPACK_IMPORTED_MODULE_30__["Datalist"]();
        for (var i = 1; i <= 5; i++) {
            var option = new _html_objekte_form_Option__WEBPACK_IMPORTED_MODULE_17__["Option"]('auto', 'auto');
            option.innererText = 'Option ' + i;
            datalist.innereHTMLObjekte.push(option);
        }
        this.inputCast().pattern = '.*';
        this.inputCast().value = '';
        this.ausgewaehltesObjekt.innereHTMLObjekte.push(datalist);
        this.gridObjekteService.htmlObjektGlobalIDFuerInnereElementeErzeugen(this.ausgewaehltesObjekt);
        this.gridObjekteService.abspeichern(this.gridObjekteService.holeAktuelleSeitenId());
        this.inputCast().list = '' + datalist.id;
    };
    HtmlAttributeComponent.prototype.erzeugeButtonElementFuerForm = function () {
        var button = new _html_objekte_form_Button__WEBPACK_IMPORTED_MODULE_6__["Button"]('90px', '30px');
        button.innererText = 'Click Me!';
        button.type = 'button';
        button.display = 'block';
        button.liegtAufDemGrid = true;
        this.ausgewaehltesObjekt.innereHTMLObjekte.push(button);
        this.gridObjekteService.htmlObjektGlobalIDFuerInnereElementeErzeugen(this.ausgewaehltesObjekt);
        this.gridObjekteService.abspeichern(this.gridObjekteService.holeAktuelleSeitenId());
    };
    HtmlAttributeComponent.prototype.erzeugeSelectElementFuerForm = function () {
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_4__["ToolbarAnimations"].animiereButtonKlick('select');
        var select = new _html_objekte_form_Select__WEBPACK_IMPORTED_MODULE_7__["Select"]('90px', '60px');
        select.display = 'block';
        select.liegtAufDemGrid = true;
        this.ausgewaehltesObjekt.innereHTMLObjekte.push(select);
        this.gridObjekteService.htmlObjektGlobalIDFuerInnereElementeErzeugen(this.ausgewaehltesObjekt);
        this.gridObjekteService.abspeichern(this.gridObjekteService.holeAktuelleSeitenId());
        select.name = 'select' + select.id;
    };
    HtmlAttributeComponent.prototype.erzeugeOptionElementFuerForm = function () {
        this.ausgewaehltesObjekt.innereHTMLObjekte = [];
        if (this.selectCast().anzahlOptGroups > 0) {
            for (var j = 1; j <= this.selectCast().anzahlOptGroups; j++) {
                var optgroup = new _html_objekte_form_Optgroup__WEBPACK_IMPORTED_MODULE_31__["Optgroup"]();
                optgroup.label = 'Gruppe ' + j;
                for (var i = 1; i <= this.selectCast().anzahlOptionen; i++) {
                    var option = new _html_objekte_form_Option__WEBPACK_IMPORTED_MODULE_17__["Option"]('70px', '10px');
                    option.innererText = 'Option ' + i;
                    optgroup.innereHTMLObjekte.push(option);
                }
                this.ausgewaehltesObjekt.innereHTMLObjekte.push(optgroup);
            }
        }
        else {
            for (var i = 1; i <= this.selectCast().anzahlOptionen; i++) {
                var option = new _html_objekte_form_Option__WEBPACK_IMPORTED_MODULE_17__["Option"]('70px', '10px');
                this.ausgewaehltesObjekt.innereHTMLObjekte.push(option);
                option.innererText = 'Option ' + i;
            }
        }
        this.gridObjekteService.htmlObjektGlobalIDFuerInnereElementeErzeugen(this.ausgewaehltesObjekt);
        this.gridObjekteService.abspeichern(this.gridObjekteService.holeAktuelleSeitenId());
    };
    HtmlAttributeComponent.prototype.erzeugeTextareaElementFuerForm = function () {
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_4__["ToolbarAnimations"].animiereButtonKlick('textarea');
        var textarea = new _html_objekte_form_Textarea__WEBPACK_IMPORTED_MODULE_5__["Textarea"]();
        textarea.liegtAufDemGrid = true;
        textarea.cols = 30;
        textarea.rows = 8;
        this.ausgewaehltesObjekt.innereHTMLObjekte.push(textarea);
        this.gridObjekteService.htmlObjektGlobalIDFuerInnereElementeErzeugen(this.ausgewaehltesObjekt);
        this.gridObjekteService.abspeichern(this.gridObjekteService.holeAktuelleSeitenId());
    };
    HtmlAttributeComponent.prototype.erzeugeOutputElementFuerForm = function () {
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_4__["ToolbarAnimations"].animiereButtonKlick('output');
        var output = new _html_objekte_form_Output__WEBPACK_IMPORTED_MODULE_29__["Output"]('auto', 'auto');
        output.innererText = 'output';
        this.ausgewaehltesObjekt.innereHTMLObjekte.push(output);
        this.gridObjekteService.htmlObjektGlobalIDFuerInnereElementeErzeugen(this.ausgewaehltesObjekt);
        this.gridObjekteService.abspeichern(this.gridObjekteService.holeAktuelleSeitenId());
    };
    HtmlAttributeComponent.prototype.erzeugeLiElement = function () {
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_4__["ToolbarAnimations"].animiereButtonKlick('li');
        var li = new _html_objekte_list_li__WEBPACK_IMPORTED_MODULE_14__["Li"]('auto', 'auto');
        li.liegtAufDemGrid = true;
        this.ausgewaehltesObjekt.innereHTMLObjekte.push(li);
        this.gridObjekteService.htmlObjektGlobalIDFuerInnereElementeErzeugen(this.ausgewaehltesObjekt);
        this.gridObjekteService.abspeichern(this.gridObjekteService.holeAktuelleSeitenId());
    };
    HtmlAttributeComponent.prototype.erzeugeNavAElement = function () {
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_4__["ToolbarAnimations"].animiereButtonKlick('liA');
        var a = new _html_objekte_A__WEBPACK_IMPORTED_MODULE_9__["A"]('150px', '30px');
        a.liegtAufDemGrid = true;
        a.class = 'innerA';
        a.position = 'relative';
        this.ausgewaehltesObjekt.innereHTMLObjekte.push(a);
        this.gridObjekteService.htmlObjektGlobalIDFuerInnereElementeErzeugen(this.ausgewaehltesObjekt);
        this.gridObjekteService.abspeichern(this.gridObjekteService.holeAktuelleSeitenId());
    };
    // verändert bei den H-Tags den Text auf u.g. wenn noch keiner gesetzt wurde
    HtmlAttributeComponent.prototype.changeInnerHtml = function () {
        if (this.ausgewaehltesObjekt.innererText.startsWith('Ich bin eine h')
            && this.ausgewaehltesObjekt.innererText.length === 24
            && this.ausgewaehltesObjekt.innererText.endsWith(' Headline')) {
            this.ausgewaehltesObjekt.innererText = 'Ich bin eine ' + this.ausgewaehltesObjekt.tagName + ' Headline';
        }
    };
    HtmlAttributeComponent.prototype.tabelleErstellen = function () {
        var tabelle = this.ausgewaehltesObjekt;
        tabelle.innereHTMLObjekte = [];
        var thead = new _html_objekte_table_Thead__WEBPACK_IMPORTED_MODULE_23__["Thead"]();
        var tbody = new _html_objekte_table_Tbody__WEBPACK_IMPORTED_MODULE_21__["Tbody"]();
        var tfooter = new _html_objekte_table_Tfoot__WEBPACK_IMPORTED_MODULE_22__["Tfoot"]();
        var caption = new _html_objekte_table_Caption__WEBPACK_IMPORTED_MODULE_24__["Caption"]();
        thead.outline = '1px solid blue';
        tbody.outline = '1px solid red';
        tfooter.outline = '1px solid green';
        var zeile;
        zeile = this.tabelleSpaltenElementeErzeugen(tabelle, 'th'); // THeader
        thead.innereHTMLObjekte.push(zeile);
        for (var i = 0; i <= tabelle.anzahlZeilen; i++) {
            if (i === tabelle.anzahlZeilen) {
                zeile = this.tabelleSpaltenElementeErzeugen(tabelle, 'td');
                tfooter.innereHTMLObjekte.push(zeile);
            }
            else {
                zeile = this.tabelleSpaltenElementeErzeugen(tabelle, 'td');
                tbody.innereHTMLObjekte.push(zeile);
            }
        }
        this.ausgewaehltesObjekt.innereHTMLObjekte.push(caption);
        this.ausgewaehltesObjekt.innereHTMLObjekte.push(thead);
        this.ausgewaehltesObjekt.innereHTMLObjekte.push(tbody);
        this.ausgewaehltesObjekt.innereHTMLObjekte.push(tfooter);
        this.gridObjekteService.htmlObjektGlobalIDFuerInnereElementeErzeugen(this.ausgewaehltesObjekt);
        // Speichert die Seite über die aktuelle SeitenID (wegen Mehrseitigkeit)
        this.gridObjekteService.abspeichern(this.gridObjekteService.holeAktuelleSeitenId());
    };
    HtmlAttributeComponent.prototype.tabelleGruppierungAuswaehlen = function (gruppierung) {
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_4__["ToolbarAnimations"].animiereButtonKlick(gruppierung);
        for (var _i = 0, _a = this.ausgewaehltesObjekt.innereHTMLObjekte; _i < _a.length; _i++) {
            var obj = _a[_i];
            if (obj.tagName === gruppierung) {
                this.ausgewaehltesObjekt = obj;
                this.htmlObjektService.htmlObjektVerteilen(obj);
                break;
            }
        }
    };
    HtmlAttributeComponent.prototype.areaInImageAuswaehlen = function () {
        var _this = this;
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_4__["ToolbarAnimations"].animiereButtonKlick('area');
        setTimeout(function () {
            for (var _i = 0, _a = _this.ausgewaehltesObjekt.innereHTMLObjekte; _i < _a.length; _i++) {
                var obj = _a[_i];
                console.log(obj.tagName);
                if (obj.tagName === 'map') {
                    _this.ausgewaehltesObjekt = obj.innereHTMLObjekte[0];
                    _this.htmlObjektService.htmlObjektVerteilen(obj.innereHTMLObjekte[0]);
                    if (_this.seitenNavService.ausgewaehlterButton === 'attribute') {
                        _this.seitenNavService.menuePunkt = 'area';
                    }
                    break;
                }
            }
        }, 500);
    };
    HtmlAttributeComponent.prototype.erzeugeDtElement = function () {
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_4__["ToolbarAnimations"].animiereButtonKlick('dt');
        var dt = new _html_objekte_list_dt__WEBPACK_IMPORTED_MODULE_18__["Dt"]('90px', '60px');
        dt.liegtAufDemGrid = true;
        this.ausgewaehltesObjekt.innereHTMLObjekte.push(dt);
        this.gridObjekteService.htmlObjektGlobalIDFuerInnereElementeErzeugen(this.ausgewaehltesObjekt);
        this.gridObjekteService.abspeichern(this.gridObjekteService.holeAktuelleSeitenId());
    };
    HtmlAttributeComponent.prototype.erzeugeDdElement = function () {
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_4__["ToolbarAnimations"].animiereButtonKlick('dd');
        var dd = new _html_objekte_list_dd__WEBPACK_IMPORTED_MODULE_19__["Dd"]('90px', '60px');
        dd.liegtAufDemGrid = true;
        this.ausgewaehltesObjekt.innereHTMLObjekte.push(dd);
        this.gridObjekteService.htmlObjektGlobalIDFuerInnereElementeErzeugen(this.ausgewaehltesObjekt);
        this.gridObjekteService.abspeichern(this.gridObjekteService.holeAktuelleSeitenId());
    };
    HtmlAttributeComponent.prototype.erzeugeSummaryElement = function () {
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_4__["ToolbarAnimations"].animiereButtonKlick('summary');
        var summary = new _html_objekte_details_summary__WEBPACK_IMPORTED_MODULE_25__["Summary"]('90px', '30px');
        summary.liegtAufDemGrid = true;
        this.ausgewaehltesObjekt.innereHTMLObjekte.push(summary);
        this.gridObjekteService.htmlObjektGlobalIDFuerInnereElementeErzeugen(this.ausgewaehltesObjekt);
        this.gridObjekteService.abspeichern(this.gridObjekteService.holeAktuelleSeitenId());
    };
    HtmlAttributeComponent.prototype.erzeugeDetailsPElement = function () {
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_4__["ToolbarAnimations"].animiereButtonKlick('detailsP');
        var p = new _html_objekte_p__WEBPACK_IMPORTED_MODULE_26__["P"]('100%', '20px');
        p.liegtAufDemGrid = true;
        p.class = 'detailsP';
        p.display = 'block';
        p.background_color = '';
        p.position = 'static';
        p.innererText = 'Details in P-Tag';
        this.ausgewaehltesObjekt.innereHTMLObjekte.push(p);
        this.gridObjekteService.htmlObjektGlobalIDFuerInnereElementeErzeugen(this.ausgewaehltesObjekt);
        this.gridObjekteService.abspeichern(this.gridObjekteService.holeAktuelleSeitenId());
    };
    HtmlAttributeComponent.prototype.erzeugeMapAreaElementFuerImage = function () {
        var _this = this;
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_4__["ToolbarAnimations"].animiereButtonKlick('mapArea');
        setTimeout(function () {
            var map = new _html_objekte_Map__WEBPACK_IMPORTED_MODULE_27__["Map"]('auto', 'auto');
            map.name = 'map' + _this.ausgewaehltesObjekt.id;
            var area = new _html_objekte_Area__WEBPACK_IMPORTED_MODULE_28__["Area"]('auto', 'auto');
            area.coords = '0,0,82,126';
            area.shape = 'rect';
            area.alt = 'Beispiel alt';
            area.href = 'http://thm.de';
            area.title = 'Hier ist area zum Klicken';
            map.innereHTMLObjekte.push(area);
            _this.imgCast().usemap = 'map' + _this.ausgewaehltesObjekt.id;
            _this.ausgewaehltesObjekt.innereHTMLObjekte.push(map);
            _this.gridObjekteService.htmlObjektGlobalIDFuerInnereElementeErzeugen(_this.ausgewaehltesObjekt);
            _this.gridObjekteService.abspeichern(_this.gridObjekteService.holeAktuelleSeitenId());
        }, 500);
    };
    HtmlAttributeComponent.prototype.thCast = function () {
        return this.ausgewaehltesObjekt;
    };
    HtmlAttributeComponent.prototype.formCast = function () {
        return this.ausgewaehltesObjekt;
    };
    HtmlAttributeComponent.prototype.fieldsetCast = function () {
        return this.ausgewaehltesObjekt;
    };
    HtmlAttributeComponent.prototype.tdCast = function () {
        return this.ausgewaehltesObjekt;
    };
    HtmlAttributeComponent.prototype.tabelleSpaltenElementeErzeugen = function (tabelle, zelle) {
        var neueZelle;
        var zeile = new _html_objekte_table_Tr__WEBPACK_IMPORTED_MODULE_10__["Tr"]('200px', '30px');
        zeile.liegtAufDemGrid = true;
        for (var j = 0; j < tabelle.anzahlSpalten; j++) {
            if (zelle === 'td') {
                neueZelle = new _html_objekte_table_Td__WEBPACK_IMPORTED_MODULE_11__["Td"]('22px', '22px');
            }
            else if (zelle === 'th') {
                neueZelle = new _html_objekte_table_Th__WEBPACK_IMPORTED_MODULE_20__["Th"]('22px', '22px');
            }
            neueZelle.liegtAufDemGrid = true;
            zeile.innereHTMLObjekte.push(neueZelle);
        }
        return zeile;
    };
    HtmlAttributeComponent.prototype.buttonCast = function () {
        return this.ausgewaehltesObjekt;
    };
    HtmlAttributeComponent.prototype.outputCast = function () {
        return this.ausgewaehltesObjekt;
    };
    HtmlAttributeComponent.prototype.inputCast = function () {
        return this.ausgewaehltesObjekt;
    };
    HtmlAttributeComponent.prototype.selectCast = function () {
        return this.ausgewaehltesObjekt;
    };
    HtmlAttributeComponent.prototype.imgCast = function () {
        return this.ausgewaehltesObjekt;
    };
    HtmlAttributeComponent.prototype.olCast = function () {
        return this.ausgewaehltesObjekt;
    };
    HtmlAttributeComponent.prototype.ulCast = function () {
        return this.ausgewaehltesObjekt;
    };
    HtmlAttributeComponent.prototype.headlineCast = function () {
        return this.ausgewaehltesObjekt;
    };
    HtmlAttributeComponent.prototype.tableCast = function () {
        return this.ausgewaehltesObjekt;
    };
    HtmlAttributeComponent.prototype.textareaCast = function () {
        return this.ausgewaehltesObjekt;
    };
    HtmlAttributeComponent.prototype.aCast = function () {
        return this.ausgewaehltesObjekt;
    };
    HtmlAttributeComponent.prototype.blockquoteCast = function () {
        return this.ausgewaehltesObjekt;
    };
    HtmlAttributeComponent.prototype.progressCast = function () {
        return this.ausgewaehltesObjekt;
    };
    HtmlAttributeComponent.prototype.meterCast = function () {
        return this.ausgewaehltesObjekt;
    };
    HtmlAttributeComponent.prototype.qCast = function () {
        return this.ausgewaehltesObjekt;
    };
    HtmlAttributeComponent.prototype.areaCast = function () {
        return this.ausgewaehltesObjekt;
    };
    HtmlAttributeComponent.prototype.audioCast = function () {
        return this.ausgewaehltesObjekt;
    };
    HtmlAttributeComponent.prototype.videoCast = function () {
        return this.ausgewaehltesObjekt;
    };
    HtmlAttributeComponent.prototype.sourceCast = function () {
        return this.ausgewaehltesObjekt;
    };
    HtmlAttributeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-html-attribute',
            template: __webpack_require__(/*! ./html-attribute.component.html */ "./src/app/dashboard/toolbar/html-objekt-details/html-attribute/html-attribute.component.html"),
            styles: [__webpack_require__(/*! ./html-attribute.component.css */ "./src/app/dashboard/toolbar/html-objekt-details/html-attribute/html-attribute.component.css")],
        }),
        __metadata("design:paramtypes", [_html_objekt_service__WEBPACK_IMPORTED_MODULE_1__["HtmlObjektService"],
            _seiten_navi_service__WEBPACK_IMPORTED_MODULE_2__["SeitenNaviService"],
            _grid_objekte_service__WEBPACK_IMPORTED_MODULE_3__["GridObjekteService"]])
    ], HtmlAttributeComponent);
    return HtmlAttributeComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/toolbar/html-objekt-details/html-objekt-details.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/dashboard/toolbar/html-objekt-details/html-objekt-details.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* @author Yavuz Bulunmaz / Struktur durch Kommentare*/\r\n/*------------------------ Default Auflösung / optimiert für 4K (ab 2400px) -----------------------------------------*/\r\ninput {\r\n  height: 35px;\r\n  font-size: 35px;\r\n}\r\nmat-select {\r\n  height: 35px;\r\n}\r\nmat-option {\r\n  font-size: 35px;\r\n}\r\ntextarea {\r\n  height: 35px;\r\n  font-size: 35px;\r\n}\r\n/deep/ .detailmenuwrapper .mat-form-field-infix {\r\n  width: 280px !important;\r\n  height: 40px;\r\n}\r\n/deep/ .detailmenuwrapper .mat-expansion-panel-body {\r\n  padding: 10px 4px 5px 0px !important;\r\n}\r\n/deep/ .mat-form-field-appearance-legacy .mat-form-field-label {\r\n  font-size: 30px;\r\n  color: #F7FFFF;\r\n  line-height: 35px;\r\n}\r\n#hauptPanel {\r\n  font-size: 35px;\r\n}\r\n/*---------- detailMenü /4K----------*/\r\n.detailmenuwrapper {\r\n  margin: 3% !important;\r\n  background-color: #303030;\r\n  border-radius: 5px;\r\n}\r\n.detailMenuHead mat-button-toggle:first-child {\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n}\r\n.detailMenuHead mat-button-toggle {\r\n  margin: 0px auto;\r\n}\r\n.detailMenuHead {\r\n  display: flex;\r\n  background-color: #2e2e2e;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  margin: -10px 11px 0px 0;\r\n  align-items: center;\r\n  position: absolute;\r\n  width: 94%;\r\n  left: 3%;\r\n  border-radius: 5px;\r\n}\r\n.detailmenu {\r\n  margin: 0 2px 0 2px;\r\n  padding-top: 50px;\r\n}\r\n.detailMenuHead mat-button-toggle-group {\r\n  width: 100%;\r\n}\r\n.detailMenuHead mat-button-toggle-group mat-button-toggle {\r\n  width: 20%;\r\n  text-align: center;\r\n}\r\n.erstesPanel {\r\n  margin: 0px 6px !important;\r\n}\r\n.label {\r\n  font-weight: 400;\r\n  color: rgb(145, 145, 145);\r\n}\r\n.w100 {\r\n  width: 100%;\r\n}\r\n.mat-icon {\r\n  height: 40px;\r\n}\r\n.auswahlCSS {\r\n  line-height: 40px !important;\r\n  padding-top: 10px;\r\n}\r\n#auswahlSpeziell {\r\n  padding-top: 5px;\r\n}\r\n/*---------- Letzte Reihe /4K----------*/\r\n.mat-toolbar-multiple-rows {\r\n  min-height: 30px;\r\n}\r\n.innererTextToolbox {\r\n  width: 100% !important;\r\n}\r\n.werkzeugReihe {\r\n  width: 460px;\r\n  display: inline;\r\n}\r\n.menue {\r\n  font-family: \"Lato\", sans-serif;\r\n  font-weight: lighter;\r\n  color: #F7FFFF;\r\n  font-size: 30px;\r\n  cursor: pointer;\r\n  margin-bottom: 10px;\r\n}\r\n.toolbarButton {\r\n  background-color: #0E4A7E;\r\n  width: 460px;\r\n  margin-top: 15px;\r\n  margin-left: 15px;\r\n  padding: 5px 0;\r\n}\r\n.buttonBild {\r\n  background-color: #363636;\r\n  position: absolute;\r\n  width: 66px;\r\n  height: 54px;\r\n  border-radius: 10px;\r\n  text-align: center;\r\n  padding-top: 10px;\r\n  padding-left: 1px;\r\n  margin-right: 0px !important;\r\n  margin-bottom: 5px;\r\n  cursor: pointer;\r\n}\r\n.buttonBild:hover {\r\n  background-color: #424242;\r\n}\r\n.buttonBild img {\r\n  width: 42px;\r\n}\r\n#saveButton {\r\n  margin-left: 85px;\r\n}\r\n/deep/ .mat-form-field-wrapper {\r\n  margin-left: 30px;\r\n}\r\n.toggleGridPosition {\r\n  font-size: 35px;\r\n  padding-top: 13px;\r\n  padding-bottom: 13px;\r\n  margin-left: 175px;\r\n  background-color: #343834;\r\n}\r\n/*---------- Seitenverwaltung /4K----------*/\r\n.toolbar {\r\n  background-color: #363636;\r\n  border-radius: 8px;\r\n  width: 655px;\r\n  margin-top: 10px;\r\n  margin-left: 20px;\r\n  padding: 5px 0;\r\n}\r\n#seitenListe {\r\n  margin-top: 32px;\r\n}\r\n/deep/ .seitenElement {\r\n  font-family: \"Lato\", sans-serif;\r\n  font-weight: lighter;\r\n  color: #F7FFFF;\r\n  font-size: 35px;\r\n  margin-left: 10px;\r\n  margin-bottom: 5px;\r\n  padding-left: 8px;\r\n  padding-right: 8px;\r\n  cursor: pointer;\r\n}\r\n/deep/ .selected {\r\n  background-color: #00C4FF;\r\n  color: #363636;\r\n  border-radius: 5px;\r\n}\r\n#seitenName {\r\n  height: 50px;\r\n  font-size: 35px;\r\n}\r\n/deep/ .mat-form-field-infix{\r\n  height: auto;\r\n}\r\n#erstellenButton {\r\n  margin-left: 30px;\r\n  font-size: 30px;\r\n  padding: 5px 15px;\r\n}\r\n/deep/ .loeschenButton {\r\n  float: right;\r\n  cursor: pointer;\r\n}\r\n/deep/ .loeschenButton img {\r\n  width: 23px;\r\n  height: 23px;\r\n}\r\n.checkboxAbstand {\r\n  margin-left: 20px;\r\n}\r\n#seitenverwaltungSchliessen {\r\n  font-size: 32px;\r\n  font-family: \"Lato\", sans-serif;\r\n  font-weight: lighter;\r\n  color: #F7FFFF;\r\n  width: 650px;\r\n  margin: 18px 0;\r\n  padding-left: 30px;\r\n}\r\n#seitenverwaltungSchliessen span img {\r\n  width: 26px;\r\n  height: 26px;\r\n  cursor: pointer;\r\n  float: right;\r\n  margin-top: 3px;\r\n  margin-right: 20px;\r\n}\r\n#checkboxGrid {\r\n  font-size: 30px;\r\n}\r\n/*------------------------------------- für auflösungen bis 2400px --------------------------------------------------*/\r\n@media screen and (max-width: 2400px) {\r\n\r\n  /deep/ .mat-form-field-infix{\r\n    height: 10px;\r\n  }\r\n\r\n  input {\r\n    height: 20px;\r\n    font-size: 20px;\r\n  }\r\n\r\n  mat-select {\r\n    height: 20px;\r\n  }\r\n\r\n  mat-option {\r\n    font-size: 20px;\r\n  }\r\n\r\n  textarea {\r\n    height: 20px;\r\n    font-size: 20px;\r\n  }\r\n\r\n  /deep/ .detailmenuwrapper .mat-form-field-infix {\r\n    width: 123px !important;\r\n    padding-top: 0 !important;\r\n    height: 18px;\r\n  }\r\n\r\n  /deep/ .mat-form-field-appearance-legacy .mat-form-field-label {\r\n    font-size: 15px;\r\n    line-height: 10px;\r\n  }\r\n\r\n  #hauptPanel {\r\n    font-size: 18px;\r\n  }\r\n\r\n  /*---------- detailMenü /2400px----------*/\r\n  .detailmenuwrapper {\r\n    margin-bottom: 0;\r\n  }\r\n\r\n  .mat-icon {\r\n    height: 35px;\r\n  }\r\n\r\n  .auswahlCSS {\r\n    line-height: 24px !important;\r\n    padding-top: 8px;\r\n  }\r\n\r\n  #auswahlSpeziell {\r\n    padding-top: 4px;\r\n  }\r\n\r\n  /*---------- Letzte Reihe /2400px----------*/\r\n  .menue {\r\n    font-size: 20px;\r\n    margin-bottom: 8px;\r\n  }\r\n\r\n  #dashboardMenue {\r\n    font-size: 18px;\r\n  }\r\n\r\n  /deep/ .mat-form-field-wrapper {\r\n    margin-left: 30px;\r\n  }\r\n\r\n  .toolbarButton {\r\n    width: 280px;\r\n    margin-top: 15px;\r\n    margin-left: 15px;\r\n    padding: 5px 0;\r\n  }\r\n\r\n  .werkzeugReihe {\r\n    width: 280px;\r\n    height: 40px;\r\n    padding-left: 0;\r\n  }\r\n\r\n  .buttonBild {\r\n    width: 45px;\r\n    height: 35px;\r\n    padding-top: 8px;\r\n  }\r\n\r\n  .buttonBild img {\r\n    width: 24px;\r\n  }\r\n\r\n  #saveButton {\r\n    margin-left: 55px;\r\n  }\r\n\r\n  .toggleGridPosition {\r\n    margin-left: 110px;\r\n    font-size: 16px;\r\n    padding-top: 0px;\r\n    padding-bottom: 0px;\r\n  }\r\n\r\n  /*---------- Seitenverwaltung /2400px----------*/\r\n  .toolbar {\r\n    width: 279px;\r\n    margin-top: 10px;\r\n    margin-left: 10px;\r\n    padding: 0 0;\r\n  }\r\n\r\n  #seitenListe {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  /deep/ .loeschenButton img {\r\n    width: 10px;\r\n    height: 10px;\r\n  }\r\n\r\n  /deep/ .seitenElement {\r\n    font-size: 15px;\r\n    margin-left: 10px;\r\n    margin-bottom: 0px;\r\n    cursor: pointer;\r\n  }\r\n\r\n  /deep/ .mat-form-field-wrapper {\r\n    margin-left: 10px;\r\n  }\r\n\r\n  #seitenName {\r\n    height: 25px;\r\n    font-size: 20px;\r\n  }\r\n\r\n  #erstellenButton {\r\n    margin-left: 30px;\r\n    font-size: 15px;\r\n    padding: 0;\r\n  }\r\n\r\n  .checkboxAbstand {\r\n    margin-left: 8px;\r\n  }\r\n\r\n  #seitenverwaltungSchliessen {\r\n    font-size: 18px;\r\n    width: 279px;\r\n    margin: 14px 0;\r\n    padding-left: 18px;\r\n  }\r\n\r\n  #seitenverwaltungSchliessen span img {\r\n    width: 14px;\r\n    height: 14px;\r\n    margin-top: 4px;\r\n    margin-right: 20px;\r\n  }\r\n\r\n  #checkboxGrid {\r\n    font-size: 15px;\r\n  }\r\n}\r\n/*------------------------------------- für auflösungen bis 1600px --------------------------------------------------*/\r\n@media screen and (max-width: 1600px) {\r\n\r\n  input {\r\n    height: 15px;\r\n    font-size: 15px;\r\n  }\r\n\r\n  mat-select {\r\n    height: 15px;\r\n  }\r\n\r\n  mat-option {\r\n    font-size: 15px;\r\n  }\r\n\r\n  textarea {\r\n    height: 15px;\r\n    font-size: 15px;\r\n  }\r\n\r\n  /deep/ .detailmenuwrapper .mat-form-field-infix {\r\n    width: 100px !important;\r\n  }\r\n\r\n  /deep/ .mat-form-field-appearance-legacy .mat-form-field-label {\r\n    font-size: 12px !important;\r\n    line-height: 15px !important;\r\n  }\r\n\r\n  #hauptPanel {\r\n    font-size: 15px;\r\n  }\r\n\r\n  /*---------- detailMenü /1600px----------*/\r\n  /*---------- Letzte Reihe /1600px----------*/\r\n  .toolbarButton {\r\n    width: 230px;\r\n    margin-top: 5px;\r\n    margin-left: 12px;\r\n  }\r\n\r\n  .werkzeugReihe {\r\n    width: 230px;\r\n    height: 35px;\r\n    padding-left: 0;\r\n  }\r\n\r\n  .buttonBild {\r\n    width: 35px;\r\n    height: 30px;\r\n    padding-top: 3px;\r\n  }\r\n\r\n  .buttonBild img {\r\n    width: 20px;\r\n  }\r\n\r\n  #saveButton {\r\n    margin-left: 40px;\r\n  }\r\n\r\n  .toggleGridPosition {\r\n    margin-left: 81px;\r\n    font-size: 12px;\r\n    height: 30px;\r\n  }\r\n\r\n  /*---------- Seitenverwaltung /1600px----------*/\r\n  .menue {\r\n    font-size: 17px;\r\n    padding-top: 8px;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  #dashboardMenue {\r\n    font-size: 15px;\r\n  }\r\n\r\n  .toolbar {\r\n    width: 230px;\r\n    margin-top: 10px;\r\n    margin-left: 10px;\r\n  }\r\n\r\n  #seitenListe {\r\n    margin-top: 10px;\r\n  }\r\n\r\n  #seitenListe:last-child {\r\n    margin-bottom: 4px;\r\n  }\r\n\r\n  #seitenName {\r\n    height: 25px;\r\n    font-size: 20px;\r\n    width: 130px !important;\r\n  }\r\n\r\n  #erstellenButton {\r\n    margin-left: 8px;\r\n  }\r\n\r\n  /deep/ .loeschenButton img {\r\n    width: 10px;\r\n    height: 10px;\r\n  }\r\n\r\n  /deep/ .seitenElement {\r\n    font-size: 15px;\r\n    margin-left: 10px;\r\n  }\r\n\r\n  #seitenverwaltungSchliessen {\r\n    font-size: 14px;\r\n    width: 230px;\r\n    margin: 12px 0;\r\n  }\r\n\r\n  #seitenverwaltungSchliessen span img {\r\n    width: 12px;\r\n    height: 12px;\r\n    margin-top: 2px;\r\n  }\r\n\r\n  .checkboxAbstand {\r\n    margin-left: 8px;\r\n  }\r\n\r\n  #checkboxGrid {\r\n    font-size: 12px;\r\n  }\r\n}\r\n/*------------------------------------- für auflösungen bis 1200px --------------------------------------------------*/\r\n@media screen and (max-width: 1200px) {\r\n\r\n  input {\r\n    height: 12px;\r\n    font-size: 12px;\r\n  }\r\n\r\n  mat-select {\r\n    height: 12px;\r\n  }\r\n\r\n  mat-option {\r\n    font-size: 12px;\r\n  }\r\n\r\n  textarea {\r\n    height: 12px;\r\n    font-size: 12px;\r\n  }\r\n\r\n  /deep/ .detailmenuwrapper .mat-form-field-infix {\r\n    width: 82px !important;\r\n  }\r\n\r\n  /*---------- detailMenü /1200px----------*/\r\n  /*---------- Letzte Reihe /1200px----------*/\r\n  .toolbarButton {\r\n    width: 190px;\r\n    margin-top: 0px;\r\n    margin-left: 12px;\r\n  }\r\n\r\n  .werkzeugReihe {\r\n    width: 190px;\r\n    height: 70px;\r\n  }\r\n\r\n  .buttonBild {\r\n    width: 32px;\r\n    height: 30px;\r\n    padding-top: 1px;\r\n  }\r\n\r\n  .buttonBild img {\r\n    width: 18px;\r\n  }\r\n\r\n  #saveButton {\r\n    margin-left: 40px;\r\n  }\r\n\r\n  .toggleGridPosition {\r\n    margin-top: 38px;\r\n    margin-left: 0px;\r\n    font-size: 11px;\r\n    height: 28px;\r\n  }\r\n\r\n  /*---------- Seitenverwaltung /1200px----------*/\r\n  .menue {\r\n    font-size: 15px;\r\n  }\r\n\r\n  #dashboardMenue {\r\n    font-size: 14px;\r\n  }\r\n\r\n  .toolbar {\r\n    width: 190px;\r\n  }\r\n\r\n  #seitenListe {\r\n    margin-top: 8px;\r\n  }\r\n\r\n  #seitenListe:last-child {\r\n    margin-bottom: 3px;\r\n  }\r\n\r\n  #seitenName {\r\n    height: 22px;\r\n    font-size: 18px;\r\n    width: 100px !important;\r\n  }\r\n\r\n  #erstellenButton {\r\n    margin-bottom: 5px;\r\n  }\r\n\r\n  #seitenverwaltungSchliessen {\r\n    font-size: 12px;\r\n    width: 195px;\r\n  }\r\n\r\n  #seitenverwaltungSchliessen span img {\r\n    margin-top: 1px;\r\n  }\r\n\r\n}\r\n/*------------------------------------- für auflösungen bis 900px --------------------------------------------------*/\r\n@media screen and (max-width: 900px) {\r\n\r\n  /deep/ .detailmenuwrapper .mat-form-field-infix {\r\n    width: 69px !important;\r\n  }\r\n\r\n  /deep/ .innerText .mat-form-field-infix {\r\n    width: 50px;\r\n  }\r\n\r\n  /*---------- detailMenü /900px----------*/\r\n  /*---------- Letzte Reihe /900px----------*/\r\n  .toolbarButton {\r\n    width: 160px;\r\n    margin-top: 0px;\r\n  }\r\n\r\n  .werkzeugReihe {\r\n    width: 160px;\r\n    height: 66px;\r\n  }\r\n\r\n  .toggleGridPosition {\r\n    margin-top: 36px;\r\n  }\r\n\r\n  .buttonBild {\r\n    padding-left: 0;\r\n  }\r\n\r\n  .detailMenuHead mat-button-toggle-group .mat-button-toggle-label-content:first-child {\r\n    font-size: 0.9em;\r\n  }\r\n\r\n  .detailMenuHead mat-button-toggle-group mat-button-toggle mat-icon {\r\n    padding-top: 0.5em;\r\n    font-size: 0.9em;\r\n  }\r\n\r\n  /*---------- Seitenverwaltung /900px----------*/\r\n  .menue {\r\n    font-size: 12px;\r\n  }\r\n\r\n  #dashboardMenue {\r\n    font-size: 11px;\r\n  }\r\n\r\n  .toolbar {\r\n    width: 160px;\r\n  }\r\n\r\n  #seitenListe {\r\n    margin-top: 7px;\r\n  }\r\n\r\n  #seitenListe:last-child {\r\n    margin-bottom: 2px;\r\n  }\r\n\r\n  #seitenName {\r\n    height: 20px;\r\n    font-size: 16px;\r\n  }\r\n\r\n  #erstellenButton {\r\n    margin-bottom: 5px;\r\n  }\r\n\r\n  #seitenverwaltungSchliessen {\r\n    font-size: 10px;\r\n    width: 170px;\r\n    margin: 9px 0;\r\n    padding-left: 14px;\r\n  }\r\n\r\n  #seitenverwaltungSchliessen span img {\r\n    width: 11px;\r\n    height: 11px;\r\n    margin-top: 0px;\r\n  }\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/dashboard/toolbar/html-objekt-details/html-objekt-details.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/dashboard/toolbar/html-objekt-details/html-objekt-details.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel *ngIf=\"ausgewaehltesObjekt && !seitenNavService.navMenue\" class=\"detailmenuwrapper\">\r\n  <mat-expansion-panel-header (click)=\"zeigeObjektDetails(ausgewaehltesObjekt.tagName)\">\r\n    <mat-panel-title id=\"hauptPanel\">\r\n      < {{ausgewaehltesObjekt.tagName}}\r\n    </mat-panel-title>\r\n  </mat-expansion-panel-header>\r\n  <div class=\"detailMenuHead\">\r\n    <mat-button-toggle-group #group=\"matButtonToggleGroup\" [value]=\"seitenNavService.ausgewaehlterButton\"\r\n                             (change)=\"aufValueAenderungenImToggleButtonMenueReagieren(group.value)\">\r\n      <mat-button-toggle class=\"auswahlCSS\" value=\"attribute\" mat-icon-button matTooltipPosition=\"above\"\r\n                         matTooltip=\"Attribute & Einstellungen\"\r\n                         id=\"auswahlSpeziell\" (click)=\"zeigeObjektDetails(ausgewaehltesObjekt.tagName)\">\r\n        < / >\r\n      </mat-button-toggle>\r\n      <mat-button-toggle value=\"allgemein\" mat-icon-button matTooltipPosition=\"above\" matTooltip=\"CSS Allgemein\"\r\n                         class=\"auswahlCSS\" (click)=\"zeigeObjektDetails('allgemein')\">\r\n        <mat-icon>settings</mat-icon>\r\n      </mat-button-toggle>\r\n      <mat-button-toggle value=\"umrandung\" mat-icon-button matTooltipPosition=\"above\" matTooltip=\"CSS Umrandung\"\r\n                         class=\"auswahlCSS\" (click)=\"zeigeObjektDetails('umrandung')\">\r\n        <mat-icon>rounded_corner</mat-icon>\r\n      </mat-button-toggle>\r\n      <mat-button-toggle value=\"ausrichtung\" mat-icon-button matTooltipPosition=\"above\" matTooltip=\"CSS Ausrichtung\"\r\n                         class=\"auswahlCSS\" (click)=\"zeigeObjektDetails('ausrichtung')\">\r\n        <mat-icon>dashboard</mat-icon>\r\n      </mat-button-toggle>\r\n      <mat-button-toggle value=\"text\" mat-icon-button matTooltipPosition=\"above\" matTooltip=\"CSS Text\"\r\n                         class=\"auswahlCSS\" (click)=\"zeigeObjektDetails('text')\">\r\n        <mat-icon>text_fields</mat-icon>\r\n      </mat-button-toggle>\r\n    </mat-button-toggle-group>\r\n  </div>\r\n  <!-- CSS Allgemein  ###############################################################################################################-->\r\n  <div class=\"detailmenu\" *ngIf=\"seitenNavService.menuePunkt=='allgemein'\">\r\n    <mat-form-field>\r\n      <input matTooltip=\"Die Zahl plus eine Einheit (z.B. 15px)\" matInput placeholder=\"width\"\r\n             [(ngModel)]=\"ausgewaehltesObjekt.width\" type=\"text\" maxlength=\"6\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matTooltip=\"Die Zahl plus eine Einheit (z.B. 15px)\" matInput placeholder=\"height\"\r\n             [(ngModel)]=\"ausgewaehltesObjekt.height\" type=\"text\" maxlength=\"6\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"background-color\" [(ngModel)]=\"ausgewaehltesObjekt.background_color\" type=\"color\"\r\n             maxlength=\"7\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matTooltip=\"Positive ganze Zahlen\" matInput placeholder=\"z-index\" [(ngModel)]=\"ausgewaehltesObjekt.z_index\"\r\n             type=\"number\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matTooltip=\"Werte zwischen 0 und 1 (z.B. 0.7)\" matInput placeholder=\"opacity\"\r\n             [(ngModel)]=\"ausgewaehltesObjekt.opacity\" type=\"number\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"overflow\" [(ngModel)]=\"ausgewaehltesObjekt.overflow\">\r\n        <mat-option value=\"auto\">auto</mat-option>\r\n        <mat-option value=\"scroll\">scroll</mat-option>\r\n        <mat-option value=\"visible\">visible</mat-option>\r\n        <mat-option value=\"hidden\">hidden</mat-option>\r\n        <mat-option value=\"no-display\">no-display</mat-option>\r\n        <mat-option value=\"no-content\">no-content</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"visibility\" [(ngModel)]=\"ausgewaehltesObjekt.visibility\">\r\n        <mat-option value=\"visible\">visible</mat-option>\r\n        <mat-option value=\"hidden\">hidden</mat-option>\r\n        <mat-option value=\"collapse\">collapse</mat-option>\r\n        <mat-option value=\"initial\">initial</mat-option>\r\n        <mat-option value=\"inherit\">inherit</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>\r\n  <!-- CSS Umrandung ###############################################################################################################-->\r\n  <div class=\"detailmenu\" *ngIf=\"seitenNavService.menuePunkt=='umrandung'\">\r\n    <mat-form-field>\r\n      <input matTooltip=\"z.B. 1px solid black\" matInput placeholder=\"border\" [(ngModel)]=\"ausgewaehltesObjekt.border\"\r\n             type=\"text\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"border-color\" [(ngModel)]=\"ausgewaehltesObjekt.border_color\" type=\"color\"\r\n             maxlength=\"7\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"border-style\" [(ngModel)]=\"ausgewaehltesObjekt.border_style\">\r\n        <mat-option value=\"none\">none</mat-option>\r\n        <mat-option value=\"hidden\">hidden</mat-option>\r\n        <mat-option value=\"dotted\">dotted</mat-option>\r\n        <mat-option value=\"dashed\">dashed</mat-option>\r\n        <mat-option value=\"solid\">solid</mat-option>\r\n        <mat-option value=\"double\">double</mat-option>\r\n        <mat-option value=\"groove\">groove</mat-option>\r\n        <mat-option value=\"ridge\">ridge</mat-option>\r\n        <mat-option value=\"inset\">inset</mat-option>\r\n        <mat-option value=\"outset\">outset</mat-option>\r\n        <mat-option value=\"initial\">initial</mat-option>\r\n        <mat-option value=\"inherit\">inherit</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matTooltip=\"z.B. 30px\" matInput placeholder=\"border-radius\" [(ngModel)]=\"ausgewaehltesObjekt.border_radius\"\r\n             type=\"text\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matTooltip=\"z.B. 10px 10px 10px 10px\" matInput placeholder=\"margin\"\r\n             [(ngModel)]=\"ausgewaehltesObjekt.margin\" type=\"text\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matTooltip=\"z.B. 10px 10px 10px 10px\" matInput placeholder=\"padding\"\r\n             [(ngModel)]=\"ausgewaehltesObjekt.padding\" type=\"text\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matTooltip=\"z.B. 5px solid black\" matInput placeholder=\"outline\" [(ngModel)]=\"ausgewaehltesObjekt.outline\"\r\n             type=\"text\">\r\n    </mat-form-field>\r\n  </div>\r\n  <!-- CSS Ausrichtung ###############################################################################################################-->\r\n  <div class=\"detailmenu\" *ngIf=\"seitenNavService.menuePunkt=='ausrichtung'\">\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"position\" [(ngModel)]=\"ausgewaehltesObjekt.position\">\r\n        <mat-option value=\"absolute\">absolute</mat-option>\r\n        <mat-option value=\"fixed\">fixed</mat-option>\r\n        <mat-option value=\"relative\">relative</mat-option>\r\n        <mat-option value=\"static\">static</mat-option>\r\n        <mat-option value=\"sticky\">sticky</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matTooltip=\"z.B. translate3d(0px, 0px, 0px)\" matInput placeholder=\"transform\"\r\n             [(ngModel)]=\"ausgewaehltesObjekt.transform\" type=\"text\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matTooltip=\"z.B. 100px\" matInput placeholder=\"top\" [(ngModel)]=\"ausgewaehltesObjekt.position_y\"\r\n             type=\"text\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matTooltip=\"z.B. 100px\" matInput placeholder=\"left\" [(ngModel)]=\"ausgewaehltesObjekt.position_x\"\r\n             type=\"text\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"float\" [(ngModel)]=\"ausgewaehltesObjekt.float\">\r\n        <mat-option value=\"none\">none</mat-option>\r\n        <mat-option value=\"left\">left</mat-option>\r\n        <mat-option value=\"right\">right</mat-option>\r\n        <mat-option value=\"inherit\">inherit</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"clear\" [(ngModel)]=\"ausgewaehltesObjekt.clear\">\r\n        <mat-option value=\"none\">none</mat-option>\r\n        <mat-option value=\"left\">left</mat-option>\r\n        <mat-option value=\"right\">right</mat-option>\r\n        <mat-option value=\"right\">both</mat-option>\r\n        <mat-option value=\"inherit\">inherit</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"display\" [(ngModel)]=\"ausgewaehltesObjekt.display\">\r\n        <mat-option value=\"inline\">inline</mat-option>\r\n        <mat-option value=\"block\">block</mat-option>\r\n        <mat-option value=\"contents\">contents</mat-option>\r\n        <mat-option value=\"flex\">flex</mat-option>\r\n        <mat-option value=\"grid\">grid</mat-option>\r\n        <mat-option value=\"inline-block\">inline-block</mat-option>\r\n        <mat-option value=\"inline-flex\">inline-flex</mat-option>\r\n        <mat-option value=\"inline-grid\">inline-grid</mat-option>\r\n        <mat-option value=\"inline-table\">inline-table</mat-option>\r\n        <mat-option value=\"list-item\">list-item</mat-option>\r\n        <mat-option value=\"run-in\">run-in</mat-option>\r\n        <mat-option value=\"table\">table</mat-option>\r\n        <mat-option value=\"none\">none</mat-option>\r\n        <mat-option value=\"initial\">initial</mat-option>\r\n        <mat-option value=\"inherit\">inherit</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>\r\n  <!-- CSS Text ###############################################################################################################-->\r\n  <div class=\"detailmenu\" *ngIf=\"seitenNavService.menuePunkt=='text'\">\r\n    <mat-form-field matTooltip=\"Der Text zwischen dem öffnenden und schließenden Tag\" class=\"innererTextToolbox\">\r\n        <textarea matInput placeholder=\"inner-text\" [(ngModel)]=\"ausgewaehltesObjekt.innererText\" type=\"text\"\r\n                  id=\"innerText\">\r\n        </textarea>\r\n    </mat-form-field>\r\n    <br/>\r\n\r\n    <mat-form-field>\r\n      <input matTooltip=\"z.B. 15px\" matInput placeholder=\"font-size\" [(ngModel)]=\"ausgewaehltesObjekt.font_size\"\r\n             type=\"text\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matTooltip=\"z.B. Verdana\" matInput placeholder=\"font-family\" [(ngModel)]=\"ausgewaehltesObjekt.font_family\"\r\n             type=\"text\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"text-align\" [(ngModel)]=\"ausgewaehltesObjekt.text_align\">\r\n        <mat-option value=\"left\">left</mat-option>\r\n        <mat-option value=\"right\">right</mat-option>\r\n        <mat-option value=\"center\">center</mat-option>\r\n        <mat-option value=\"justify\">justify</mat-option>\r\n        <mat-option value=\"initial\">initial</mat-option>\r\n        <mat-option value=\"inherit\">inherit</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Farbe\" [(ngModel)]=\"ausgewaehltesObjekt.color\" type=\"color\"\r\n             maxlength=\"7\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"word-wrap\" [(ngModel)]=\"ausgewaehltesObjekt.word_wrap\">\r\n        <mat-option value=\"normal\">normal</mat-option>\r\n        <mat-option value=\"break-word\">break-word</mat-option>\r\n        <mat-option value=\"initial\">initial</mat-option>\r\n        <mat-option value=\"inherit\">inherit</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"word-break\" [(ngModel)]=\"ausgewaehltesObjekt.word_break\">\r\n        <mat-option value=\"normal\">normal</mat-option>\r\n        <mat-option value=\"break-all\">break-all</mat-option>\r\n        <mat-option value=\"keep-all\">keep-all</mat-option>\r\n        <mat-option value=\"break-word\">break-word</mat-option>\r\n        <mat-option value=\"initial\">initial</mat-option>\r\n        <mat-option value=\"inherit\">inherit</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"white-space\" [(value)]=\"ausgewaehltesObjekt.white_space\">\r\n        <mat-option value=\"normal\">normal</mat-option>\r\n        <mat-option value=\"nowrap\">nowrap</mat-option>\r\n        <mat-option value=\"pre\">pre</mat-option>\r\n        <mat-option value=\"pre-line\">pre-line</mat-option>\r\n        <mat-option value=\"pre-wrap\">pre-wrap</mat-option>\r\n        <mat-option value=\"initial\">initial</mat-option>\r\n        <mat-option value=\"inherit\">inherit</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"font-style\" [(value)]=\"ausgewaehltesObjekt.font_style\">\r\n        <mat-option value=\"normal\">normal</mat-option>\r\n        <mat-option value=\"italic\">italic</mat-option>\r\n        <mat-option value=\"oblique\">oblique</mat-option>\r\n        <mat-option value=\"initial\">initial</mat-option>\r\n        <mat-option value=\"inherit\">inherit</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"font-weight\" [(value)]=\"ausgewaehltesObjekt.font_weight\">\r\n        <mat-option value=\"normal\">normal</mat-option>\r\n        <mat-option value=\"bold\">bold</mat-option>\r\n        <mat-option value=\"bolder\">bolder</mat-option>\r\n        <mat-option value=\"lighter\">lighter</mat-option>\r\n        <mat-option value=\"number\">number</mat-option>\r\n        <mat-option value=\"initial\">initial</mat-option>\r\n        <mat-option value=\"inherit\">inherit</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"detailmenu\"\r\n       *ngIf=\"seitenNavService.menuePunkt!='allgemein' && seitenNavService.menuePunkt!='umrandung' &&\r\n              seitenNavService.menuePunkt!='ausrichtung' && seitenNavService.menuePunkt!='text'\">\r\n    <app-html-attribute></app-html-attribute>\r\n  </div>\r\n</mat-expansion-panel>\r\n\r\n\r\n<!-- Seitenverwaltung (für die Mehrseitigkeit) @created by Yavuz Bulunmaz ###########################################-->\r\n<!-- das [expanded]=\"true\" wirft in der Browserkonsole einen Fehler auf, dies kann man entfernen indem man den\r\n        Produktions-Modus aktiviert. Dies wird aber hier noch nicht getan, da der Produktions-Modus nur bei fertiger\r\n         Anwendung aktiviert wird -->\r\n\r\n<ng-container *ngIf=\"seitenNavService.navMenue\" class=\"erstesPanel\">\r\n\r\n  <div id=\"seitenverwaltungSchliessen\">\r\n    <span>Seitenverwaltung schließen</span>\r\n    <span (click)=\"schliesseSeitenverwaltung()\"> <img src=\"assets/images/cancel-weiss.svg\"> </span>\r\n  </div>\r\n  <mat-expansion-panel id=\"seitenverwaltung\" class=\"toolbar\" [expanded]=\"true\">\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title class=\"menue\">\r\n        Seitenverwaltung\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n\r\n    <mat-form-field>\r\n      <input id=\"seitenName\" matInput placeholder=\"Seitenname\" type=\"text\" maxlength=\"23\">\r\n    </mat-form-field>\r\n\r\n    <button id=\"erstellenButton\" mat-raised-button (click)=\"erstelleSeite()\">Erstellen</button>\r\n\r\n    <div id=\"seitenListe\" *ngFor=\"let seite of this.seitenNavService.seitenListe\">\r\n      <div class=\"elementSammler\">\r\n        <span class=\"seitenElement\" (click)=ladeSeite(seite)\r\n              [class.selected]=\"seite == this.gridObjekteService.holeAktuelleSeitenId()\"> {{seite}} </span>\r\n        <span *ngIf=\"seite !== 'homepage'\" class=\"loeschenButton\"\r\n              (click)=\"loescheSeitePasseSeitenListeAnLadeHomepage(seite)\"> <img src=\"assets/images/cancel.svg\">\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </mat-expansion-panel>\r\n  <mat-expansion-panel class=\"toolbar\">\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title id=\"dashboardMenue\" class=\"menue\">\r\n        Dashboard Einstellungen\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n\r\n    <!--Expansion Panel für Grideinstellungen @created by Sabrina Adam-->\r\n    <p class=\"label\">Ausrichten an:</p>\r\n    <mat-select [(ngModel)]=\"ausgewaehlteSnapWeite\" (ngModelChange)=\"OptionenVerteilen()\">\r\n      <mat-option *ngFor=\"let op of snapWeiteOptionen\" [value]=\"op.id\">\r\n        {{ op.viewValue }}\r\n      </mat-option>\r\n    </mat-select>\r\n\r\n    <p class=\"label\">Sonstige:</p>\r\n    <p>\r\n      <mat-checkbox id=\"checkboxGrid\" [(ngModel)]=\"gridAnzeigen\" (ngModelChange)=\"OptionenVerteilen()\">Grid\r\n        anzeigen\r\n      </mat-checkbox>\r\n    </p>\r\n    <mat-form-field class=\"w100\">\r\n      <input matInput placeholder=\"Farbe\" [(ngModel)]=\"gridFarbe\" (ngModelChange)=\"OptionenVerteilen()\" type=\"color\"\r\n             maxlength=\"7\">\r\n    </mat-form-field>\r\n\r\n\r\n  </mat-expansion-panel>\r\n</ng-container>\r\n\r\n<!-- BUTTONS ######################################################################################################-->\r\n<ng-container *ngIf=\"ausgewaehltesObjekt\">\r\n  <mat-toolbar class=\"toolbarButton\">\r\n    <mat-toolbar-row class=\"werkzeugReihe\">\r\n\r\n        <span class=\"buttonBild\" id=\"trashCan\" (click)=\"htmlObjektLoeschen()\" matTooltip=\"Löscht das aktuell gewählte Element\">\r\n          <img src=\"./assets/images/garbage.svg\">\r\n        </span>\r\n\r\n      <span class=\"buttonBild\" id=\"saveButton\" (click)=\"speicherSeite()\" matTooltip=\"Speichert die komplette Seite\">\r\n          <img src=\"./assets/images/save-icon.svg\">\r\n        </span>\r\n\r\n      <mat-button-toggle-group\r\n        matTooltip=\"Wirkt sich auf alle Grid Elemente aus. Die Weite der Elemente wird für static deaktiviert.\"\r\n        name=\"gridPosition\"\r\n        aria-label=\"Grid Position\"\r\n        class=\"toggleGridPosition\">\r\n        <mat-button-toggle (change)=\"positionAllerObjekteAufDemGridVeraendern('absolute', false)\" value=\"bold\" id=\"absoluteErzeuger\">\r\n          Absolute\r\n        </mat-button-toggle>\r\n        <mat-button-toggle (change)=\"positionAllerObjekteAufDemGridVeraendern('static', true)\" value=\"static\" id=\"staticErzeuger\">Static\r\n        </mat-button-toggle>\r\n      </mat-button-toggle-group>\r\n    </mat-toolbar-row>\r\n  </mat-toolbar>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/dashboard/toolbar/html-objekt-details/html-objekt-details.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/dashboard/toolbar/html-objekt-details/html-objekt-details.component.ts ***!
  \****************************************************************************************/
/*! exports provided: HTMLObjektDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLObjektDetailsComponent", function() { return HTMLObjektDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _html_objekt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../html-objekt.service */ "./src/app/dashboard/html-objekt.service.ts");
/* harmony import */ var _grid_objekte_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../grid-objekte.service */ "./src/app/dashboard/grid-objekte.service.ts");
/* harmony import */ var _seiten_navi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../seiten-navi.service */ "./src/app/dashboard/toolbar/seiten-navi.service.ts");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../settings */ "./src/app/dashboard/settings.ts");
/* harmony import */ var _dashboard_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dashboard-settings.service */ "./src/app/dashboard/dashboard-settings.service.ts");
/* harmony import */ var _toolbar_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../toolbar-animations */ "./src/app/dashboard/toolbar/toolbar-animations.ts");
/* harmony import */ var _dashboard_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dashboard-animations */ "./src/app/dashboard/dashboard-animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Created by Samuel Werner <samuel.werner@iem.thm.de>  on 21.05.2018
 * Edited by Sabrina Adam <sabrina.adam@iem.thm.de>  on 07.06.2018
 * Edited by Bastian Ullrich <bastian.ullrich@iem.thm.de>  on 12.06.2018
 */
var HTMLObjektDetailsComponent = /** @class */ (function () {
    function HTMLObjektDetailsComponent(htmlObjektService, gridObjekteService, seitenNavService, componentFactoryResolver, dashboardSettingsService) {
        var _this = this;
        this.htmlObjektService = htmlObjektService;
        this.gridObjekteService = gridObjekteService;
        this.seitenNavService = seitenNavService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.dashboardSettingsService = dashboardSettingsService;
        /*########################### Variablen für Dashboard Einstellungen##################################*/
        this.ausgewaehlteSnapWeite = 0;
        this.snapWeiteOptionen = [
            { id: 0, name: 'pixelgenau', viewValue: 'Pixelgenau' },
            { id: 1, name: 'gridklein', viewValue: 'Grid klein' },
            { id: 2, name: 'gridgroß', viewValue: 'Grid groß' },
        ];
        this.gridAnzeigen = true;
        this.gridFarbe = '#d8d8d8';
        this.zeigeMenue = false;
        this.seitenNavService.seitenListe = [];
        // An dem HTML-Objekt Service anmelden und über Änderungen informiert werden
        this.htmlObjektService.myMethod$.subscribe(function (data) {
            _this.ausgewaehltesObjekt = data;
        });
    }
    HTMLObjektDetailsComponent.prototype.ngOnInit = function () {
        this.OptionenVerteilen();
        if (localStorage.getItem('seitenListe') === null) {
            this.ertselleHomepage();
        }
        else {
            this.ladeSeitenListe();
        }
    };
    /*
      ** Der Timeout in der Funktion htmlObjektLoeschen sorgt dafür, dass erst die
      ** Animation zu ende läuft und anschließend erst das Objekt vom Dashboard gelöscht wird. Wird die Animation verändert
      ** in der Laufzeit, so muss dies auch in dem setTimeout angepasst werden.
      */
    HTMLObjektDetailsComponent.prototype.htmlObjektLoeschen = function () {
        var _this = this;
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_6__["ToolbarAnimations"].animiereMuelleimer();
        _dashboard_animations__WEBPACK_IMPORTED_MODULE_7__["DashboardAnimations"].animiereLoeschendesObjekt();
        setTimeout(function () {
            _this.gridObjekteService.einzelnesHtmlObjektLoeschen(_this.ausgewaehltesObjekt);
            _this.htmlObjektService.htmlObjektVerteilen(null);
        }, 500);
    };
    HTMLObjektDetailsComponent.prototype.positionAllerObjekteAufDemGridVeraendern = function (position, widthAusschalten) {
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_6__["ToolbarAnimations"].animiereButtonKlick(position);
        this.gridObjekteService.positionAllerObjekteAufDemGridVeraendern(position, widthAusschalten);
    };
    /*
    * Wird als (ngModelChange) Event aufgerufen um bei jeder Änderung der Einstellungen diese an die jeweilig
    * betroffende Komponente die sich am Service angemeldet hat zu verteilen.
    * */
    HTMLObjektDetailsComponent.prototype.OptionenVerteilen = function () {
        var set = new _settings__WEBPACK_IMPORTED_MODULE_4__["settings"]();
        set.snapWeite = this.ausgewaehlteSnapWeite;
        set.zeigeGrid = this.gridAnzeigen;
        set.gridFarbe = this.gridFarbe;
        this.dashboardSettingsService.settingsVerteilen(set);
    };
    HTMLObjektDetailsComponent.prototype.speicherSeite = function () {
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_6__["ToolbarAnimations"].animiereSpeicherButton();
        var aktuelleSeite = this.gridObjekteService.holeAktuelleSeitenId();
        this.gridObjekteService.abspeichern(aktuelleSeite);
    };
    HTMLObjektDetailsComponent.prototype.zeigeObjektDetails = function (menuePunkt) {
        this.seitenNavService.menuePunkt = menuePunkt;
    };
    HTMLObjektDetailsComponent.prototype.aufValueAenderungenImToggleButtonMenueReagieren = function (val) {
        this.seitenNavService.ausgewaehlterButton = val;
    };
    // Methoden für die Mehrseitigkeit sind hier !!! @created by Yavuz Bulunmaz --------------------------------------------
    // Homepage als Default Element ngOnInit erstellt
    HTMLObjektDetailsComponent.prototype.ertselleHomepage = function () {
        this.gridObjekteService.setzeAktuelleSeitenId('homepage');
        this.gridObjekteService.abspeichern('homepage');
        this.neueSeiteInListe();
        this.speichereAktuelleIdImLC();
    };
    // Klick-Event, wobei die Seite gewechselt wird
    HTMLObjektDetailsComponent.prototype.ladeSeite = function (neueId) {
        var zurzeitVerwendeteId = this.gridObjekteService.holeAktuelleSeitenId();
        this.gridObjekteService.abspeichern(zurzeitVerwendeteId);
        this.gridObjekteService.setzeAktuelleSeitenId(neueId);
        this.speichereAktuelleIdImLC();
        window.location.reload();
    };
    HTMLObjektDetailsComponent.prototype.erstelleSeite = function () {
        var inputId = document.getElementById('seitenName').value;
        var istValide = this.validiereInput();
        if (istValide === true) {
            this.gridObjekteService.setzeAktuelleSeitenId(inputId);
            this.gridObjekteService.htmlObjekteLoeschen();
            this.gridObjekteService.abspeichern(inputId);
            this.neueSeiteInListe();
            this.speichereAktuelleIdImLC();
        }
    };
    // test auf valide Eingabe im Input, bestimmt ob die erstellung der Seite abgebrochen oder fortgeführt wird
    HTMLObjektDetailsComponent.prototype.validiereInput = function () {
        var inputId = document.getElementById('seitenName').value;
        var istValide;
        // testet ob der eingegebene Wert leer/null ist
        // wenn ja gibt es ein false zurück und die erstellung der Seite wird abgebrochen
        if (inputId === null || inputId === '') {
            istValide = false;
        }
        else {
            // testet hier ob der eingegebene Wert schon für eine Seite benutzt wurde
            // wenn ja wird auch hier die erstellung der Seite abgebrochen
            for (var i = 0; i < this.seitenNavService.seitenListe.length; i++) {
                if (inputId === this.seitenNavService.seitenListe[i]) {
                    istValide = false;
                }
                else {
                    // Input Eingabe ist valide und die Seite kann erstellt werden
                    istValide = true;
                }
            }
        }
        return istValide;
    };
    // speichert Array im localStorage ab um es onInit wieder erstellen zu können
    HTMLObjektDetailsComponent.prototype.neueSeiteInListe = function () {
        this.seitenNavService.seitenListe.push(this.gridObjekteService.holeAktuelleSeitenId());
        this.speicherArrayInLocalStorage();
    };
    HTMLObjektDetailsComponent.prototype.speicherArrayInLocalStorage = function () {
        localStorage.setItem('seitenListe', JSON.stringify(this.seitenNavService.seitenListe));
    };
    HTMLObjektDetailsComponent.prototype.loescheSeitePasseSeitenListeAnLadeHomepage = function (gewaehlteSeite) {
        // es wird im Array nach der Stelle gesucht in der der Seitenname drin ist, dieser wird dann aus dem Array rausgeschnitten
        for (var i = 0; i < this.seitenNavService.seitenListe.length; i++) {
            if (gewaehlteSeite === this.seitenNavService.seitenListe[i]) {
                var index = this.seitenNavService.seitenListe.indexOf(gewaehlteSeite);
                if (index !== -1) {
                    this.seitenNavService.seitenListe.splice(index, 1);
                }
                localStorage.removeItem(gewaehlteSeite);
                this.speicherArrayInLocalStorage();
                // Wenn die aktuelle Seite gelöscht werden soll, wird die homepage Seite geladen
                if (this.gridObjekteService.holeAktuelleSeitenId() === gewaehlteSeite) {
                    this.gridObjekteService.setzeAktuelleSeitenId('homepage');
                    this.speichereAktuelleIdImLC();
                    window.location.reload();
                }
            }
        }
    };
    // wird onInit das Array mit dem gespeicherten Inhalt befüllen
    HTMLObjektDetailsComponent.prototype.ladeSeitenListe = function () {
        var liste = localStorage.getItem('seitenListe');
        this.seitenNavService.seitenListe = JSON.parse(liste);
    };
    // Die aktuelleId soll onInit dem Service übergeben werden, da er sonst nicht gespeichert wird
    HTMLObjektDetailsComponent.prototype.speichereAktuelleIdImLC = function () {
        localStorage.setItem('aktuelleSeitenId', this.gridObjekteService.holeAktuelleSeitenId());
    };
    HTMLObjektDetailsComponent.prototype.schliesseSeitenverwaltung = function () {
        this.seitenNavService.entferneNavMenue();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('grid', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", Object)
    ], HTMLObjektDetailsComponent.prototype, "gridComponentHost", void 0);
    HTMLObjektDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-html-objekt-details',
            template: __webpack_require__(/*! ./html-objekt-details.component.html */ "./src/app/dashboard/toolbar/html-objekt-details/html-objekt-details.component.html"),
            styles: [__webpack_require__(/*! ./html-objekt-details.component.css */ "./src/app/dashboard/toolbar/html-objekt-details/html-objekt-details.component.css")]
        }),
        __metadata("design:paramtypes", [_html_objekt_service__WEBPACK_IMPORTED_MODULE_1__["HtmlObjektService"],
            _grid_objekte_service__WEBPACK_IMPORTED_MODULE_2__["GridObjekteService"],
            _seiten_navi_service__WEBPACK_IMPORTED_MODULE_3__["SeitenNaviService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _dashboard_settings_service__WEBPACK_IMPORTED_MODULE_5__["DashboardSettingsService"]])
    ], HTMLObjektDetailsComponent);
    return HTMLObjektDetailsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/toolbar/import-json/import-json.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/toolbar/import-json/import-json.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n  font-size: 32px;\r\n  -webkit-margin-before: 10px !important;\r\n  -webkit-margin-after: 25px  !important;\r\n  text-align: center;\r\n}\r\n\r\n#inputJSON {\r\n  font-size: 25px;\r\n  margin-left: 15px;\r\n}\r\n\r\n#buttonJSON {\r\n  font-size: 25px;\r\n  margin-left: 15px;\r\n}\r\n\r\n@media screen and (max-width: 2400px) {\r\n  h2 {\r\n    font-size: 24px;\r\n    -webkit-margin-before: 15px !important;\r\n    -webkit-margin-after: 15px  !important;\r\n  }\r\n\r\n  #inputJSON {\r\n    font-size: 16px;\r\n    margin-left: 0px;\r\n  }\r\n\r\n  #buttonJSON {\r\n    font-size: 16px;\r\n    margin-left: 0px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1600px) {\r\n  h2 {\r\n    font-size: 22px;\r\n    -webkit-margin-before: 12px !important;\r\n    -webkit-margin-after: 16px  !important;\r\n  }\r\n\r\n  #inputJSON {\r\n    font-size: 13px;\r\n  }\r\n\r\n  #buttonJSON {\r\n    font-size: 13px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n  h2 {\r\n    font-size: 20px;\r\n    -webkit-margin-before: 10px !important;\r\n    -webkit-margin-after: 14px  !important;\r\n  }\r\n\r\n  #buttonJSON {\r\n    margin-top: 14px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n  h2 {\r\n    font-size: 18px;\r\n    -webkit-margin-before: 10px !important;\r\n    -webkit-margin-after: 10px  !important;\r\n  }\r\n\r\n  #inputJSON {\r\n    font-size: 15px;\r\n  }\r\n\r\n  #buttonJSON {\r\n    font-size: 15px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/dashboard/toolbar/import-json/import-json.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/toolbar/import-json/import-json.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title> JSON Datei importieren</h2>\r\n\r\n<input id=\"inputJSON\" matInput type=\"file\" maxlength=\"6\" (change)=\"neuesDokumentEingegeben($event)\"> <br/>\r\n\r\n<button id=\"buttonJSON\" type=\"button\" class=\"btn btn-primary\"\r\n        (click)=\"JSONDokumentLadenUndGridNeuAufbauen()\">Hochladen\r\n</button>\r\n"

/***/ }),

/***/ "./src/app/dashboard/toolbar/import-json/import-json.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/toolbar/import-json/import-json.component.ts ***!
  \************************************************************************/
/*! exports provided: ImportJSONComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportJSONComponent", function() { return ImportJSONComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _grid_objekte_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../grid-objekte.service */ "./src/app/dashboard/grid-objekte.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImportJSONComponent = /** @class */ (function () {
    function ImportJSONComponent(dialog, gridObjekteService) {
        this.dialog = dialog;
        this.gridObjekteService = gridObjekteService;
    }
    ImportJSONComponent.prototype.ngOnInit = function () {
    };
    ImportJSONComponent.prototype.neuesDokumentEingegeben = function (e) {
        this.file = e.target.files[0];
    };
    ImportJSONComponent.prototype.JSONDokumentLadenUndGridNeuAufbauen = function () {
        var _this = this;
        var fileReader = new FileReader();
        fileReader.onload = function () {
            _this.gridObjekteService.JSONInGridLaden(fileReader.result);
        };
        fileReader.readAsText(this.file);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('grid', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", Object)
    ], ImportJSONComponent.prototype, "gridComponentHost", void 0);
    ImportJSONComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-import-json',
            template: __webpack_require__(/*! ./import-json.component.html */ "./src/app/dashboard/toolbar/import-json/import-json.component.html"),
            styles: [__webpack_require__(/*! ./import-json.component.css */ "./src/app/dashboard/toolbar/import-json/import-json.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _grid_objekte_service__WEBPACK_IMPORTED_MODULE_2__["GridObjekteService"]])
    ], ImportJSONComponent);
    return ImportJSONComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/toolbar/import-xml/import-xml.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/toolbar/import-xml/import-xml.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n  font-size: 32px;\r\n  -webkit-margin-before: 10px !important;\r\n  -webkit-margin-after: 25px  !important;\r\n  text-align: center;\r\n}\r\n\r\n#inputXML {\r\n  font-size: 25px;\r\n  margin-left: 15px;\r\n}\r\n\r\n#buttonXML {\r\n  font-size: 25px;\r\n  margin-left: 15px;\r\n}\r\n\r\n@media screen and (max-width: 2400px) {\r\n  h2 {\r\n    font-size: 24px;\r\n    -webkit-margin-before: 15px !important;\r\n    -webkit-margin-after: 15px  !important;\r\n  }\r\n\r\n  #inputXML {\r\n    font-size: 16px;\r\n    margin-left: 0px;\r\n  }\r\n\r\n  #buttonXML {\r\n    font-size: 16px;\r\n    margin-left: 0px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1600px) {\r\n  h2 {\r\n    font-size: 22px;\r\n    -webkit-margin-before: 12px !important;\r\n    -webkit-margin-after: 16px  !important;\r\n  }\r\n\r\n  #inputXML {\r\n    font-size: 13px;\r\n  }\r\n\r\n  #buttonXML {\r\n    font-size: 13px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n  h2 {\r\n    font-size: 20px;\r\n    -webkit-margin-before: 10px !important;\r\n    -webkit-margin-after: 14px  !important;\r\n  }\r\n\r\n  #buttonXML {\r\n    margin-top: 14px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n  h2 {\r\n    font-size: 18px;\r\n    -webkit-margin-before: 10px !important;\r\n    -webkit-margin-after: 10px  !important;\r\n  }\r\n\r\n  #inputXML {\r\n    font-size: 15px;\r\n  }\r\n\r\n  #buttonXML {\r\n    font-size: 15px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/dashboard/toolbar/import-xml/import-xml.component.html":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/toolbar/import-xml/import-xml.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title> XML Datei importieren</h2>\r\n\r\n<input id=\"inputXML\" matInput type=\"file\" maxlength=\"6\" (change)=\"neuesDokumentEingegeben($event)\"> <br/>\r\n\r\n<button id=\"buttonXML\" type=\"button\" class=\"btn btn-primary\"\r\n        (click)=\"xmlDokumentLadenUndGridNeuAufbauen()\">Hochladen\r\n</button>\r\n"

/***/ }),

/***/ "./src/app/dashboard/toolbar/import-xml/import-xml.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/toolbar/import-xml/import-xml.component.ts ***!
  \**********************************************************************/
/*! exports provided: ImportXmlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportXmlComponent", function() { return ImportXmlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _grid_objekte_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../grid-objekte.service */ "./src/app/dashboard/grid-objekte.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImportXmlComponent = /** @class */ (function () {
    function ImportXmlComponent(dialog, gridObjekteService) {
        this.dialog = dialog;
        this.gridObjekteService = gridObjekteService;
    }
    ImportXmlComponent.prototype.ngOnInit = function () {
    };
    ImportXmlComponent.prototype.neuesDokumentEingegeben = function (e) {
        this.file = e.target.files[0];
    };
    ImportXmlComponent.prototype.xmlDokumentLadenUndGridNeuAufbauen = function () {
        var _this = this;
        var fileReader = new FileReader();
        fileReader.onload = function () {
            _this.gridObjekteService.xmlInJSONumwandelnUndInGridLaden(fileReader.result);
        };
        fileReader.readAsText(this.file);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('grid', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", Object)
    ], ImportXmlComponent.prototype, "gridComponentHost", void 0);
    ImportXmlComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-import-xml',
            template: __webpack_require__(/*! ./import-xml.component.html */ "./src/app/dashboard/toolbar/import-xml/import-xml.component.html"),
            styles: [__webpack_require__(/*! ./import-xml.component.css */ "./src/app/dashboard/toolbar/import-xml/import-xml.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _grid_objekte_service__WEBPACK_IMPORTED_MODULE_2__["GridObjekteService"]])
    ], ImportXmlComponent);
    return ImportXmlComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/toolbar/seiten-navi.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/toolbar/seiten-navi.service.ts ***!
  \**********************************************************/
/*! exports provided: SeitenNaviService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeitenNaviService", function() { return SeitenNaviService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SeitenNaviService = /** @class */ (function () {
    function SeitenNaviService() {
        this.navMenue = false;
    }
    SeitenNaviService.prototype.zeigeNavMenue = function () {
        this.navMenue = true;
    };
    SeitenNaviService.prototype.entferneNavMenue = function () {
        this.navMenue = false;
    };
    SeitenNaviService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SeitenNaviService);
    return SeitenNaviService;
}());



/***/ }),

/***/ "./src/app/dashboard/toolbar/toolbar-animations.ts":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/toolbar/toolbar-animations.ts ***!
  \*********************************************************/
/*! exports provided: ToolbarAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarAnimations", function() { return ToolbarAnimations; });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/esm/index.js");
/**
 * Created by Bastian Ullrich
 */



var ToolbarAnimations = /** @class */ (function () {
    function ToolbarAnimations() {
    }
    // Methode zum Animieren des Button-Klicks
    ToolbarAnimations.animiereButtonKlick = function (element) {
        var erzeuger = element + 'Erzeuger';
        var elementId = document.getElementById(erzeuger);
        gsap__WEBPACK_IMPORTED_MODULE_0__["TweenMax"].from(elementId, 0.2, {
            scale: 0.5,
            opacity: 0.5,
        });
    };
    // Methode zum Animieren des Mülleimers
    ToolbarAnimations.animiereMuelleimer = function () {
        var tl = new gsap__WEBPACK_IMPORTED_MODULE_0__["TimelineMax"]();
        var elementId = document.getElementById('trashCan');
        for (var i = 0; i < 2; i++) {
            tl.add(gsap__WEBPACK_IMPORTED_MODULE_0__["TweenMax"].to(elementId, 0.1, {
                rotation: 30,
                transformOrigin: '50 50',
                repeat: 1,
                yoyo: true,
            }));
            tl.add(gsap__WEBPACK_IMPORTED_MODULE_0__["TweenMax"].to(elementId, 0.1, {
                rotation: -30,
                transformOrigin: '50 50',
                repeat: 1,
                yoyo: true
            }));
        }
    };
    // Methode zum Animieren des Speicher-Buttons
    ToolbarAnimations.animiereSpeicherButton = function () {
        var animation = new gsap__WEBPACK_IMPORTED_MODULE_0__["TimelineMax"]();
        var id = document.getElementById('saveButton');
        animation.to(id, 0.25, { css: { opacity: '0.5', scale: '0.5' }, ease: gsap__WEBPACK_IMPORTED_MODULE_0__["SlowMo"].ease });
        animation.from(id, 0.25, { css: { opacity: '1.0', scale: '0.5', backgroundColor: '#00C4FF' }, ease: gsap__WEBPACK_IMPORTED_MODULE_0__["SlowMo"].ease });
    };
    return ToolbarAnimations;
}());



/***/ }),

/***/ "./src/app/dashboard/toolbar/toolbar.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/toolbar/toolbar.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* @author Yavuz Bulunmaz / Struktur durch Kommentare*/\r\n/* Push von Yavuz Bulunmaz am 18.05.2018 wurde durch manuellen Pull aus Log entfernt */\r\n@media print {\r\n  #no-print {\r\n    display: none;\r\n  }\r\n\r\n  .nichtdrucken {\r\n    display: none;\r\n  }\r\n\r\n  ::ng-deep .mat-menu-panel {\r\n    display: none;\r\n  }\r\n}\r\n/*------------------------ Default Auflösung / optimiert für 4K (ab 2400px) -----------------------------------------*/\r\n/*---------- Import Dialoge /4K----------*/\r\n/deep/ .mat-dialog-container {\r\n  font-family: \"Lato\", sans-serif;\r\n  padding: 15px 0 18px 5px !important;\r\n  overflow: hidden !important;\r\n}\r\n/deep/ .mat-dialog-container button {\r\n  margin-top: 20px;\r\n  cursor: pointer;\r\n  font-size: 23px;\r\n}\r\n/deep/ .mat-dialog-container input {\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n}\r\n/deep/ .mat-menu-item {\r\n  font-size: 30px;\r\n  height: 60px !important;\r\n}\r\n/deep/ .mat-option-text {\r\n  font-size: 30px;\r\n}\r\n/*---------- Toolbox -> Auwahl-Menü /4K----------*/\r\n.toolbox {\r\n  background-color: #0E4A7E;\r\n  color: #F7FFFF;\r\n  position: relative;\r\n  width: 700px;\r\n  border-radius: 10px;\r\n  float: right;\r\n  top: 4rem;\r\n  right: 4rem;\r\n  margin: 4rem;\r\n  box-shadow: 0em 6px 20px #363636;\r\n  padding-bottom: 15px;\r\n  display: block;\r\n  z-index: 5000;\r\n}\r\n.menueIcon {\r\n  font-size: 35px;\r\n  font-family: \"Lato\", sans-serif;\r\n}\r\n#zusatzFunktionen {\r\n  float: left;\r\n  margin-top: 20px;\r\n  margin-left: 30px;\r\n}\r\n#toolboxText {\r\n  font-size: 60px;\r\n  font-family: \"Lato\", sans-serif;\r\n  font-stretch: extra-expanded;\r\n  float: right;\r\n  margin: 34px 255px 10px 0;\r\n}\r\n.expansionPanel {\r\n  margin-top: 120px !important;\r\n}\r\n.menue {\r\n  font-family: \"Lato\", sans-serif;\r\n  font-weight: lighter;\r\n  color: #F7FFFF;\r\n  font-size: 35px;\r\n  cursor: pointer;\r\n}\r\n.btn-clear {\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n#domBausteinAuswahl {\r\n  width: 100%;\r\n}\r\n/*---------- Toolbar mit Button /4K----------*/\r\n.toolbar {\r\n  background-color: #363636;\r\n  border-radius: 8px;\r\n  width: 650px;\r\n  margin-top: 10px;\r\n  margin-left: -5px;\r\n}\r\n/deep/ .mat-select-value {\r\n  font-size: 30px;\r\n}\r\n/deep/ .mat-form-field-infix {\r\n  height: 30px;\r\n}\r\n.mat-expansion-panel {\r\n  background-color: #353735;\r\n}\r\n.buttonReihe {\r\n  color: #363636;\r\n  margin-top: 130px;\r\n  margin-bottom: 30px;\r\n  margin-left: 6px;\r\n  box-sizing: unset;\r\n  padding-left: 4px;\r\n}\r\n.buttonReihe:last-child {\r\n  margin-bottom: 80px;\r\n}\r\n.button {\r\n  font-size: 32px;\r\n  color: #363636;\r\n  font-family: \"Lato\", sans-serif;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  background-color: #F7FFFF;\r\n  line-height: 210px;\r\n  width: 210px;\r\n  height: 210px;\r\n  border-radius: 8px;\r\n  margin-right: 8px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.buttonReihe:first-child {\r\n  margin-top: 55px;\r\n}\r\n.button:hover {\r\n  background-color: #00C4FF;\r\n}\r\n.selected {\r\n  background-color: #00C4FF !important;\r\n}\r\n.disabled {\r\n  background-color: #a8a8a8;\r\n  color: #686868;\r\n}\r\n.disabled:hover {\r\n  background-color: #a8a8a8;\r\n  color: #686868;\r\n  cursor: default;\r\n}\r\n/*---------- Zusatz für alle ----------*/\r\n.minifyToolbar {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 0;\r\n  border-top: 10px solid;\r\n  border-color: #0e3d6f;\r\n  border-radius: 10px 10px 0px 0px;\r\n  margin: 0px auto;\r\n  padding: 0px auto;\r\n  box-shadow: 0px 1px 8px #0d2142;\r\n}\r\n/*------------------------------------- für auflösungen bis 2400px --------------------------------------------------*/\r\n@media screen and (max-width: 2400px) {\r\n\r\n  /*---------- Import Dialoge ----------*/\r\n  /deep/ .mat-dialog-container {\r\n    padding: 8px 0 12px 15px !important;\r\n  }\r\n\r\n  /deep/ .mat-dialog-container button {\r\n    margin-top: 15px;\r\n    font-size: 15px;\r\n  }\r\n\r\n  /deep/ .mat-dialog-container input {\r\n    font-size: 15px;\r\n  }\r\n\r\n  /deep/ .mat-menu-item {\r\n    font-size: 15px !important;\r\n    height: auto !important;\r\n  }\r\n\r\n  /deep/ .mat-option-text {\r\n    font-size: 15px;\r\n  }\r\n\r\n  /*---------- Toolbox -> Auwahl-Menü /2400px----------*/\r\n  .toolbox {\r\n    width: 300px;\r\n    right: 0.2rem;\r\n    top: 1rem;\r\n    margin: 1rem;\r\n    padding-bottom: 10px;\r\n  }\r\n\r\n  /deep/ .mat-select-value {\r\n    font-size: 14px;\r\n  }\r\n\r\n  /deep/ .mat-form-field-infix {\r\n    height: 14px;\r\n  }\r\n\r\n  .expansionPanel {\r\n    margin-top: 64px !important;\r\n  }\r\n\r\n  .menueIcon {\r\n    font-size: 14px;\r\n  }\r\n\r\n  .menue {\r\n    font-size: 15px;\r\n  }\r\n\r\n  #zusatzFunktionen {\r\n    font-size: 12px;\r\n    margin-top: 6px;\r\n    margin-left: 15px;\r\n  }\r\n\r\n  #toolboxText {\r\n    font-size: 34px;\r\n    margin: 15px 94px 5px 0;\r\n  }\r\n\r\n  /*---------- Toolbar mit Button /2400px----------*/\r\n  .toolbar {\r\n    width: 280px;\r\n    margin-top: -11px;\r\n    margin-left: -13px;\r\n  }\r\n\r\n  .buttonReihe:first-child {\r\n    margin-top: 23px;\r\n  }\r\n\r\n  .buttonReihe {\r\n    width: 280px;\r\n    margin: 18px 0 8px 0;\r\n    padding-left: 8px;\r\n  }\r\n\r\n  .buttonReihe:last-child {\r\n    margin-bottom: 14px;\r\n  }\r\n\r\n  .button {\r\n    font-size: 15px;\r\n    line-height: 84px;\r\n    width: 84px;\r\n    height: 84px;\r\n    margin-right: 6px;\r\n  }\r\n\r\n  .wortZuLang {\r\n    font-size: 12px;\r\n  }\r\n\r\n    #offCanvasMenuButton {\r\n        position: fixed;\r\n        right: 1.2vw;\r\n        bottom: 1.2vw;\r\n        background-color: #a3a3a4;\r\n        color: #686868;\r\n        opacity: 0.5;\r\n        transition: 0.3s;\r\n        -webkit-transform: scale(1) !important;\r\n                transform: scale(1) !important;\r\n    }\r\n\r\n    #offCanvasMenuButton:hover {\r\n        transition: 0.3s;\r\n        opacity: 1;\r\n        -webkit-transform: scale(1.1) !important;\r\n                transform: scale(1.1) !important;\r\n    }\r\n\r\n}\r\n/*------------------------------------- für auflösungen bis 1600px --------------------------------------------------*/\r\n@media screen and (max-width: 1600px) {\r\n  /*---------- Import Dialoge ----------*/\r\n  /deep/ .mat-dialog-container {\r\n    padding: 8px 0 12px 24px !important;\r\n  }\r\n\r\n  /deep/ .mat-dialog-container button {\r\n    margin-top: 15px;\r\n    font-size: 10px;\r\n  }\r\n\r\n  /deep/ .mat-dialog-container input {\r\n    font-size: 10px;\r\n  }\r\n\r\n  /deep/ .mat-menu-item {\r\n    font-size: 12px !important;\r\n  }\r\n\r\n  /deep/ .mat-option-text {\r\n    font-size: 12px;\r\n  }\r\n\r\n  /*---------- Toolbox -> Auwahl-Menü /1600px----------*/\r\n  .toolbox {\r\n    width: 250px;\r\n    padding-bottom: 8px;\r\n  }\r\n\r\n  /deep/ .mat-select-value {\r\n    font-size: 10px;\r\n  }\r\n\r\n  /deep/ .mat-form-field-infix {\r\n    height: 10px;\r\n  }\r\n\r\n  .expansionPanel {\r\n    margin-bottom: 5px;\r\n    margin-top: 62px !important;\r\n  }\r\n\r\n  .menueIcon {\r\n    font-size: 12px;\r\n    margin-bottom: 0;\r\n  }\r\n\r\n  .menue {\r\n    font-size: 12px;\r\n  }\r\n\r\n  .mat-expansion-panel-header {\r\n    height: 42px !important;\r\n  }\r\n\r\n  #zusatzFunktionen {\r\n    font-size: 5px;\r\n    margin-top: 6px;\r\n    margin-left: 15px;\r\n  }\r\n\r\n  #toolboxText {\r\n    font-size: 30px;\r\n    margin: 23px 70px 0px 0;\r\n  }\r\n\r\n  /*---------- Toolbar mit Button /1600px----------*/\r\n  .toolbar {\r\n    width: 230px;\r\n  }\r\n\r\n  /deep/ .mat-select-value {\r\n    font-size: 12px;\r\n  }\r\n\r\n  /deep/ .mat-form-field-infix {\r\n    height: 12px;\r\n  }\r\n\r\n  /deep/ .mat-expansion-panel-body {\r\n    padding-left: 28px !important;\r\n    padding-bottom: 5px !important;\r\n  }\r\n\r\n  .buttonReihe {\r\n    width: 230px;\r\n    padding-right: 0px;\r\n    margin-top: 0px;\r\n    margin-bottom: 5px;\r\n  }\r\n\r\n  .buttonReihe:first-child {\r\n    margin-top: 8px;\r\n  }\r\n\r\n  .buttonReihe:last-child {\r\n    margin-bottom: 5px;\r\n  }\r\n\r\n  .button {\r\n    font-size: 13px;\r\n    line-height: 65px;\r\n    width: 65px;\r\n    height: 65px;\r\n  }\r\n\r\n  .wortZuLang {\r\n    font-size: 10px;\r\n  }\r\n}\r\n/*------------------------------------- für auflösungen bis 1200px --------------------------------------------------*/\r\n@media screen and (max-width: 1200px) {\r\n  /*---------- Import Dialoge ----------*/\r\n  /deep/ .mat-dialog-container {\r\n    padding-left: 15px !important;\r\n  }\r\n\r\n  /deep/ .mat-dialog-container button {\r\n    margin-top: 10px;\r\n    font-size: 10px;\r\n  }\r\n\r\n  /deep/ .mat-dialog-container input {\r\n    font-size: 10px;\r\n  }\r\n\r\n  /deep/ .mat-option-text {\r\n    font-size: 11px !important;\r\n  }\r\n\r\n  /*---------- Toolbox -> Auwahl-Menü /1200px----------*/\r\n  .toolbox {\r\n    width: 210px;\r\n    padding-bottom: 2px;\r\n  }\r\n\r\n  .expansionPanel {\r\n    margin-top: 50px !important;\r\n  }\r\n\r\n  .mat-expansion-panel-header {\r\n    height: 40px !important;\r\n  }\r\n\r\n  #zusatzFunktionen {\r\n    margin-top: 2px;\r\n    margin-left: 12px;\r\n  }\r\n\r\n  #toolboxText {\r\n    font-size: 25px;\r\n    margin: 20px 60px 0px 0;\r\n  }\r\n\r\n  /*---------- Toolbar mit Button /1200px----------*/\r\n  .toolbar {\r\n    width: 190px;\r\n  }\r\n\r\n  /deep/ .mat-select-value {\r\n    font-size: 10px;\r\n  }\r\n\r\n  /deep/ .mat-form-field-infix {\r\n    height: 10px;\r\n  }\r\n\r\n  /deep/ .mat-expansion-panel-body {\r\n    padding-left: 18px !important;\r\n    padding-bottom: 3px !important;\r\n  }\r\n\r\n  .buttonReihe {\r\n    width: 190px;\r\n    margin-bottom: 0;\r\n    height: 61px;\r\n  }\r\n\r\n  .buttonReihe:first-child {\r\n    margin-top: 2px;\r\n  }\r\n\r\n  .buttonReihe:last-child {\r\n    margin-bottom: 3px;\r\n  }\r\n\r\n  .button {\r\n    font-size: 10px;\r\n    line-height: 57px;\r\n    width: 57px;\r\n    height: 57px;\r\n  }\r\n\r\n  .wortZuLang {\r\n    font-size: 9px;\r\n  }\r\n}\r\n/*------------------------------------- für auflösungen bis 900px --------------------------------------------------*/\r\n@media screen and (max-width: 900px) {\r\n\r\n  /*---------- Import Dialoge ----------*/\r\n  /* Hat die >1200px Einstellungen übernommen*/\r\n\r\n  /*---------- Toolbox -> Auwahl-Menü /900px----------*/\r\n  .toolbox {\r\n    width: 180px;\r\n  }\r\n\r\n  .expansionPanel {\r\n    margin-top: 46px !important;\r\n  }\r\n\r\n  #zusatzFunktionen {\r\n    margin-left: 8px;\r\n  }\r\n\r\n  #toolboxText {\r\n    font-size: 20px;\r\n    margin: 20px 54px 0px 0;\r\n  }\r\n\r\n  .menueIcon {\r\n    font-size: 10px;\r\n  }\r\n\r\n  .menue {\r\n    font-size: 10px;\r\n  }\r\n\r\n  /*---------- Toolbar mit Button /900px----------*/\r\n  .toolbar {\r\n    width: 170px;\r\n  }\r\n\r\n  /deep/ .mat-select-value {\r\n    font-size: 10px;\r\n  }\r\n\r\n  /deep/ .mat-form-field-infix {\r\n    height: 10px;\r\n  }\r\n\r\n  /deep/ .mat-expansion-panel-body {\r\n    padding-left: 14px !important;\r\n  }\r\n\r\n  .buttonReihe {\r\n    width: 170px;\r\n    height: 54px;\r\n  }\r\n\r\n  .buttonReihe:first-child {\r\n    margin-top: 1px;\r\n  }\r\n\r\n  .buttonReihe:last-child {\r\n    margin-bottom: 2px;\r\n  }\r\n\r\n  .button {\r\n    font-size: 9px;\r\n    line-height: 50px;\r\n    width: 50px;\r\n    height: 50px;\r\n  }\r\n\r\n  .wortZuLang {\r\n    font-size: 8px;\r\n  }\r\n\r\n  #offCanvasMenuButton {\r\n    -webkit-transform: scale(1) !important;\r\n            transform: scale(1) !important;\r\n    bottom: 2vw;\r\n    right: 2vw;\r\n  }\r\n\r\n  #offCanvasMenuButton:hover {\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n  }\r\n\r\n}\r\n#offCanvasMenuButton {\r\n  position: fixed;\r\n  right: 1.2vw;\r\n  bottom: 1.2vw;\r\n  background-color: #a3a3a4;\r\n  color: #686868;\r\n  opacity: 0.5;\r\n  transition: 0.3s;\r\n  -webkit-transform: scale(1.5);\r\n          transform: scale(1.5);\r\n}\r\n#offCanvasMenuButton:hover {\r\n  transition: 0.3s;\r\n  opacity: 1;\r\n  -webkit-transform: scale(1.7);\r\n          transform: scale(1.7);\r\n}\r\n.offCanvasMenuButtonToggle {\r\n  color: #00C4FF !important;\r\n  background-color: #363636 !important;\r\n}\r\n.toolbarVerbergen {\r\n  display: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dashboard/toolbar/toolbar.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/toolbar/toolbar.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-fab id=\"offCanvasMenuButton\" (click)=\"toggleToolbar()\"\r\n        [ngClass]=\"{'offCanvasMenuButtonToggle' : toolbarVerbergen}\">\r\n  <mat-icon>build</mat-icon>\r\n</button>\r\n<div class=\"toolbox\" appDragAndDropToolbox ID=\"no-print\" [ngClass]=\"{'toolbarVerbergen': toolbarVerbergen}\">\r\n  <!-- Balken zum minimieren der Toolbar-->\r\n  <div class=\"minifyToolbar\" (click)=\"minimiereToolbar()\"></div>\r\n\r\n  <div id=\"ersteReihe\">\r\n    <div id=\"zusatzFunktionen\" *ngIf=\"toolbarMinimieren\">\r\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\" class=\"menueIcon\">Menu</button>\r\n      <mat-menu #menu=\"matMenu\">\r\n        <button class=\"nichtdrucken\" mat-menu-item (click)=\"zeigeNavSeite()\">Seitenverwaltung</button>\r\n        <button class=\"nichtdrucken\" mat-menu-item (click)=\"alleHtmlObjekteLoeschen()\">Seite leeren</button>\r\n        <button class=\"nichtdrucken\" mat-menu-item [matMenuTriggerFor]=\"subMenuImport\">Import</button>\r\n        <button class=\"nichtdrucken\" mat-menu-item [matMenuTriggerFor]=\"subMenuExport\">Export</button>\r\n        <button class=\"nichtdrucken\" mat-menu-item (click)=\"drucken()\">Drucken</button>\r\n        <button class=\"nichtdrucken\" mat-menu-item (click)=\"openCodeAnzeigendialog()\">\r\n          Zeige Code\r\n        </button>\r\n      </mat-menu>\r\n\r\n      <mat-menu #subMenuExport=\"matMenu\">\r\n        <a class=\"nichtdrucken btn-clear\" mat-menu-item (click)=\"generiereDownloadJsonUri()\"\r\n           title=\"Download JSON\"\r\n           [href]=\"downloadJsonHref\"\r\n           download=\"Clariframer.json\">\r\n          Export JSON\r\n        </a>\r\n\r\n        <a class=\"nichtdrucken btn-clear\" mat-menu-item title=\"Download JSON\"\r\n           [href]=\"generiereDownloadXMLUri()\"\r\n           download=\"Clariframer.xml\">\r\n          Export XML\r\n        </a>\r\n        <a class=\"nichtdrucken\" id=\"exportPNG\" mat-menu-item title=\"Export PNG\"\r\n           [href]=\"\" download=\"Clariframer.PNG\"\r\n           (click)=\"generierePNG()\">\r\n          Export PNG\r\n        </a>\r\n      </mat-menu>\r\n\r\n      <mat-menu #subMenuImport=\"matMenu\">\r\n        <button class=\"nichtdrucken\" mat-menu-item (click)=\"openImportJSONdialog()\">\r\n          Import JSON\r\n        </button>\r\n        <button class=\"nichtdrucken\" mat-menu-item (click)=\"openImportXMLdialog()\">\r\n          Import XML\r\n        </button>\r\n      </mat-menu>\r\n\r\n    </div>\r\n    <span id=\"toolboxText\">Toolbox</span>\r\n  </div>\r\n\r\n  <!--+++++++++++++++++++++++++++++++Auswahl Menü+++++++++++++++++++++++++++++++++++-->\r\n  <mat-accordion *ngIf=\"toolbarMinimieren\">\r\n    <mat-expansion-panel class=\"expansionPanel\" [expanded]=\"true\">\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title class=\"menue\">\r\n          HTML Objekte\r\n        </mat-panel-title>\r\n      </mat-expansion-panel-header>\r\n      <!--https://www.w3schools.com/Tags/default.asp-->\r\n      <mat-form-field id=\"domBausteinAuswahl\">\r\n          <mat-select placeholder=\"DOM Elemente\" [(value)]=\"ausgewaehlteDOMBausteinArt\">\r\n          <mat-option value=\"av\">Audio & Video</mat-option>\r\n          <mat-option value=\"basic\">Basic</mat-option>\r\n          <mat-option value=\"format1\">Formatierung A-P</mat-option>\r\n          <mat-option value=\"format2\">Formatierung Q-Z</mat-option>\r\n          <mat-option value=\"framesUndImages\">Frames & Images</mat-option>\r\n          <mat-option value=\"linksUndListen\">Links & Listen</mat-option>\r\n          <mat-option value=\"stylesUndSemantics\">Styles & Semantics</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <!--+++++++++++++++++++++++++++++++DOM ELEMENTE+++++++++++++++++++++++++++++++++++-->\r\n      <!-- TODO, wenn am Ende ein Menüpunkt zuviele Button hat (ab 4-5 reihen) sollen die Button verkleinert werden\r\n           Somit sind in dem Fall 4 Button in einer Reihe, das wird aber erst am Ende gemacht, da\r\n           noch nicht bekannt ist wie viele Elemente zur verfügung stehen werden\r\n           @author Yavuz Bulunmaz-->\r\n      <!-- TODO, Elemente die nicht implementiert wurden am Ende aus dem Menü entfernen!-->\r\n\r\n      <!---------------------------------Audio & Video------------------------------------->\r\n      <!--TODO: Audio/Video Tag fertig stellen -->\r\n      <mat-toolbar class=\"toolbar\" *ngIf=\"ausgewaehlteDOMBausteinArt=='av'\">\r\n        <mat-toolbar-row class=\"buttonReihe\">\r\n          <span [class.selected]=\"ausgewaehltesObjekt === audioObjekt\" id=\"audioErzeuger\"\r\n                class=\"button\" (click)=\"objektAuswaehlen(audioObjekt)\">< audio</span>\r\n          <span [class.selected]=\"ausgewaehltesObjekt === videoObjekt\" id=\"videoErzeuger\"\r\n                class=\"button\" (click)=\"auswaehlenUndZufaelligeFarbeZuweisen(videoObjekt)\">< video</span>\r\n        </mat-toolbar-row>\r\n      </mat-toolbar>\r\n      <!------------------------------------Basic------------------------------------------>\r\n      <mat-toolbar class=\"toolbar\" *ngIf=\"ausgewaehlteDOMBausteinArt=='basic'\">\r\n        <mat-toolbar-row class=\"buttonReihe\">\r\n          <span [class.selected]=\"ausgewaehltesObjekt === bodyObjekt\" id=\"bodyErzeuger\"\r\n                class=\"button\" (click)=\"auswaehlenUndZufaelligeFarbeZuweisen(bodyObjekt)\">< body</span>\r\n          <span [class.selected]=\"ausgewaehltesObjekt === formObjekt\" id=\"formErzeuger\"\r\n                class=\"button\" (click)=\"neuesFormObjektErzeugen()\">< form</span>\r\n          <span [class.selected]=\"ausgewaehltesObjekt === headlineObjekt\" id=\"h1Erzeuger\"\r\n                class=\"button\" (click)=\"auswaehlenUndZufaelligeFarbeZuweisen(headlineObjekt)\">< headline</span>\r\n        </mat-toolbar-row>\r\n        <mat-toolbar-row class=\"buttonReihe\">\r\n          <span [class.selected]=\"ausgewaehltesObjekt === hrObjekt\" id=\"hrErzeuger\"\r\n                class=\"button\" (click)=\"neuesHrObjektErstellen()\">< hr</span>\r\n          <span [class.selected]=\"ausgewaehltesObjekt === pObjekt\" id=\"pErzeuger\" class=\"button\"\r\n                (click)=\"auswaehlenUndZufaelligeFarbeZuweisen(pObjekt)\">< p</span>\r\n          <span [class.selected]=\"ausgewaehltesObjekt === tableObjekt\" id=\"tableErzeuger\"\r\n                class=\"button\" (click)=\"neuesTabellenObjektErzeugen()\">< table</span>\r\n        </mat-toolbar-row>\r\n      </mat-toolbar>\r\n      <!---------------------------------Formatierung 1--------------------------------------->\r\n      <mat-toolbar class=\"toolbar\" *ngIf=\"ausgewaehlteDOMBausteinArt=='format1'\">\r\n        <mat-toolbar-row class=\"buttonReihe\">\r\n          <span [class.selected]=\"ausgewaehltesObjekt === addressObjekt\" id=\"addressErzeuger\"\r\n                class=\"button\" (click)=\"neuesAddressObjektErstellen()\">< address</span>\r\n          <span  [class.selected]=\"ausgewaehltesObjekt === bdoObjekt\"\r\n                 id=\"bdoErzeuger\" class=\"button\" (click)=\"neuesBdoObjektErzeugen()\">< bdo</span>\r\n          <span  [class.selected]=\"ausgewaehltesObjekt === blockquoteObjekt\"\r\n                 id=\"blockquoteErzeuger\" class=\"button wortZuLang\" (click)=\"neuesBlockquoteObjektErzeugen()\">< blockquote</span>\r\n        </mat-toolbar-row>\r\n        <mat-toolbar-row class=\"buttonReihe\">\r\n          <span  [class.selected]=\"ausgewaehltesObjekt === codeObjekt\"\r\n                 id=\"codeErzeuger\" class=\"button\" (click)=\"neuesCodeObjektErstellen()\">< code</span>\r\n          <span [class.selected]=\"ausgewaehltesObjekt === emObjekt\" id=\"emErzeuger\"\r\n                class=\"button\" (click)=\"neuesEmObjektErstellen()\">< em</span>\r\n          <span  [class.selected]=\"ausgewaehltesObjekt === kbdObjekt\"\r\n                 id=\"kbdErzeuger\" class=\"button\" (click)=\"neuesKbdObjektErstellen()\">< kbd</span>\r\n        </mat-toolbar-row>\r\n        <mat-toolbar-row class=\"buttonReihe\">\r\n          <span [class.selected]=\"ausgewaehltesObjekt === meterObjekt\" id=\"meterErzeuger\"\r\n                class=\"button\" (click)=\"neuesMeterObjektErzeugen()\">< meter</span>\r\n          <span [class.selected]=\"ausgewaehltesObjekt === preObjekt\" id=\"preErzeuger\"\r\n                class=\"button\" (click)=\"neuesPreObjektErstellen()\">< pre</span>\r\n          <span [class.selected]=\"ausgewaehltesObjekt === progressObjekt\" id=\"progressErzeuger\"\r\n                class=\"button\" (click)=\"neuesProgressObjektErzeugen()\">< progress</span>\r\n        </mat-toolbar-row>\r\n      </mat-toolbar>\r\n      <!---------------------------------Formatierung 2--------------------------------------->\r\n      <mat-toolbar class=\"toolbar\" *ngIf=\"ausgewaehlteDOMBausteinArt=='format2'\">\r\n        <mat-toolbar-row class=\"buttonReihe\">\r\n          <span [class.selected]=\"ausgewaehltesObjekt === qObjekt\" id=\"qErzeuger\"\r\n                class=\"button\" (click)=\"neuesQObjektErzeugen()\">< q</span>\r\n          <span [class.selected]=\"ausgewaehltesObjekt === sObjekt\" id=\"sErzeuger\"\r\n                class=\"button\" (click)=\"neuesSObjektErstellen()\">< s</span>\r\n          <span [class.selected]=\"ausgewaehltesObjekt === sampObjekt\" id=\"sampErzeuger\"\r\n                class=\"button\" (click)=\"neuesSampObjektErstellen()\">< samp</span>\r\n        </mat-toolbar-row>\r\n        <mat-toolbar-row class=\"buttonReihe\">\r\n          <span [class.selected]=\"ausgewaehltesObjekt === smallObjekt\" id=\"smallErzeuger\"\r\n                class=\"button\" (click)=\"neuesSmallObjektErstellen()\">< small</span>\r\n          <span [class.selected]=\"ausgewaehltesObjekt === strongObjekt\" id=\"strongErzeuger\"\r\n                class=\"button\" (click)=\"neuesStrongObjektErstellen()\">< strong</span>\r\n          <span [class.selected]=\"ausgewaehltesObjekt === uObjekt\" id=\"uErzeuger\"\r\n                class=\"button\" (click)=\"neuesUObjektErstellen()\">< u</span>\r\n        </mat-toolbar-row>\r\n        <mat-toolbar-row class=\"buttonReihe\">\r\n          <span [class.selected]=\"ausgewaehltesObjekt === varObjekt\" id=\"varErzeuger\"\r\n                class=\"button\" (click)=\"neuesVarObjektErstellen()\">< var</span>\r\n        </mat-toolbar-row>\r\n      </mat-toolbar>\r\n\r\n      <!---------------------------------Frames & Images------------------------------------->\r\n      <mat-toolbar class=\"toolbar\" *ngIf=\"ausgewaehlteDOMBausteinArt=='framesUndImages'\">\r\n        <mat-toolbar-row class=\"buttonReihe\">\r\n          <span [class.selected]=\"ausgewaehltesObjekt === canvasObjekt\" id=\"canvasErzeuger\"\r\n                class=\"button\" (click)=\"objektAuswaehlen(canvasObjekt)\">< canvas</span>\r\n          <span [class.selected]=\"ausgewaehltesObjekt === figureObjekt\" id=\"figureErzeuger\"\r\n                class=\"button\" (click)=\"neuesFigureObjektErzeugen()\">< figure</span>\r\n          <span [class.selected]=\"ausgewaehltesObjekt === imgObjekt\" id=\"imgErzeuger\"\r\n                class=\"button\" (click)=\"auswaehlenUndZufaelligeFarbeZuweisen(imgObjekt)\">< img</span>\r\n        </mat-toolbar-row>\r\n        <mat-toolbar-row class=\"buttonReihe\">\r\n          <span [class.selected]=\"ausgewaehltesObjekt === pictureObjekt\" id=\"pictureErzeuger\"\r\n                class=\"button\" (click)=\"auswaehlenUndZufaelligeFarbeZuweisen(pictureObjekt)\">< picture</span>\r\n          <span [class.selected]=\"ausgewaehltesObjekt === svgObjekt\" id=\"svgErzeuger\"\r\n                class=\"button\" (click)=\"objektAuswaehlen(svgObjekt)\"> < svg</span>\r\n        </mat-toolbar-row>\r\n      </mat-toolbar>\r\n      <!-------------------------------Links & Listen--------------------------------------------->\r\n      <mat-toolbar class=\"toolbar\" *ngIf=\"ausgewaehlteDOMBausteinArt=='linksUndListen'\">\r\n        <mat-toolbar-row class=\"buttonReihe\">\r\n                   <span [class.selected]=\"ausgewaehltesObjekt === aObjekt\" id=\"aErzeuger\"\r\n                         class=\"button\" (click)=\"neuesAElementErstellen()\">< a</span>\r\n          <span [class.selected]=\"ausgewaehltesObjekt === navObjekt\" id=\"navErzeuger\"\r\n                class=\"button\" (click)=\"neuesNavObjektErzeugen()\">< nav</span>\r\n        </mat-toolbar-row>\r\n        <mat-toolbar-row class=\"buttonReihe\">\r\n          <span [class.selected]=\"ausgewaehltesObjekt === dlObjekt\" id=\"dlErzeuger\"\r\n                class=\"button\" (click)=\"neuesDlObjektErzeugen()\">< dl</span>\r\n          <span [class.selected]=\"ausgewaehltesObjekt === olObjekt\" id=\"olErzeuger\"\r\n                class=\"button\" (click)=\"neuesOlObjektErzeugen()\">< ol</span>\r\n          <span [class.selected]=\"ausgewaehltesObjekt === ulObjekt\" id=\"ulErzeuger\"\r\n                class=\"button\" (click)=\"neuesUlObjektErzeugen()\">< ul</span>\r\n        </mat-toolbar-row>\r\n      </mat-toolbar>\r\n      <!---------------------------------Styles & Semantics---------------------------------->\r\n      <mat-toolbar class=\"toolbar\" *ngIf=\"ausgewaehlteDOMBausteinArt=='stylesUndSemantics'\">\r\n        <mat-toolbar-row class=\"buttonReihe\">\r\n          <span [class.selected]=\"ausgewaehltesObjekt === articleObjekt\" id=\"articleErzeuger\"\r\n                class=\"button\" (click)=\"auswaehlenUndZufaelligeFarbeZuweisen(articleObjekt)\">< article</span>\r\n          <span [class.selected]=\"ausgewaehltesObjekt === asideObjekt\" id=\"asideErzeuger\"\r\n                class=\"button\" (click)=\"neuesAsideObjektErstellen()\">< aside</span>\r\n          <span [class.selected]=\"ausgewaehltesObjekt === detailsObjekt\" id=\"detailsErzeuger\"\r\n                class=\"button\" (click)=\"neuesDetailsObjektErzeugen()\">< details</span>\r\n        </mat-toolbar-row>\r\n        <mat-toolbar-row class=\"buttonReihe\">\r\n          <span [class.selected]=\"ausgewaehltesObjekt === dialogObjekt\" id=\"dialogErzeuger\"\r\n                class=\"button\" (click)=\"neuesDialogObjektErstellen()\">< dialog</span>\r\n          <span [class.selected]=\"ausgewaehltesObjekt === divObjekt\" id=\"divErzeuger\"\r\n                class=\"button\" (click)=\"auswaehlenUndZufaelligeFarbeZuweisen(divObjekt)\">< div</span>\r\n          <span [class.selected]=\"ausgewaehltesObjekt === footerObjekt\" id=\"footerErzeuger\"\r\n                class=\"button\" (click)=\"auswaehlenUndZufaelligeFarbeZuweisen(footerObjekt)\">< footer</span>\r\n        </mat-toolbar-row>\r\n        <mat-toolbar-row class=\"buttonReihe\">\r\n          <span [class.selected]=\"ausgewaehltesObjekt === headerObjekt\" id=\"headerErzeuger\"\r\n                class=\"button\" (click)=\"auswaehlenUndZufaelligeFarbeZuweisen(headerObjekt)\">< header</span>\r\n          <span [class.selected]=\"ausgewaehltesObjekt === mainObjekt\" id=\"mainErzeuger\"\r\n                class=\"button\" (click)=\"auswaehlenUndZufaelligeFarbeZuweisen(mainObjekt)\">< main</span>\r\n          <span [class.selected]=\"ausgewaehltesObjekt === sectionObjekt\" id=\"sectionErzeuger\"\r\n                class=\"button\" (click)=\"neuesSectionObjektErstellen()\">< section</span>\r\n        </mat-toolbar-row>\r\n        <mat-toolbar-row class=\"buttonReihe\">\r\n          <span [class.selected]=\"ausgewaehltesObjekt === spanObjekt\" id=\"spanErzeuger\"\r\n                class=\"button\" (click)=\"auswaehlenUndZufaelligeFarbeZuweisen(spanObjekt)\">< span</span>\r\n        </mat-toolbar-row>\r\n      </mat-toolbar>\r\n    </mat-expansion-panel>\r\n\r\n    <!-- Hier wird die Box erstellt, die die css-eigenschaften anzeigt-->\r\n    <app-html-objekt-details></app-html-objekt-details>\r\n  </mat-accordion>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/toolbar/toolbar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/toolbar/toolbar.component.ts ***!
  \********************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _import_json_import_json_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import-json/import-json.component */ "./src/app/dashboard/toolbar/import-json/import-json.component.ts");
/* harmony import */ var _html_objekt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../html-objekt.service */ "./src/app/dashboard/html-objekt.service.ts");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../grid/grid.component */ "./src/app/dashboard/grid/grid.component.ts");
/* harmony import */ var _grid_objekte_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../grid-objekte.service */ "./src/app/dashboard/grid-objekte.service.ts");
/* harmony import */ var _seiten_navi_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./seiten-navi.service */ "./src/app/dashboard/toolbar/seiten-navi.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _import_xml_import_xml_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./import-xml/import-xml.component */ "./src/app/dashboard/toolbar/import-xml/import-xml.component.ts");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _code_inspector_code_inspector_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./code-inspector/code-inspector.component */ "./src/app/dashboard/toolbar/code-inspector/code-inspector.component.ts");
/* harmony import */ var _toolbar_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./toolbar-animations */ "./src/app/dashboard/toolbar/toolbar-animations.ts");
/* harmony import */ var _aufloesung_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../aufloesung.service */ "./src/app/aufloesung.service.ts");
/* harmony import */ var _bildschirm_qhd_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../bildschirm-qhd.enum */ "./src/app/bildschirm-qhd.enum.ts");
/* harmony import */ var _bildschirm_hd_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../bildschirm-hd.enum */ "./src/app/bildschirm-hd.enum.ts");
/* harmony import */ var _bildschirm_uhd_enum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../bildschirm-uhd.enum */ "./src/app/bildschirm-uhd.enum.ts");
/* harmony import */ var _html_objekte_Div__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../html-objekte/Div */ "./src/app/dashboard/html-objekte/Div.ts");
/* harmony import */ var _html_objekte_span__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../html-objekte/span */ "./src/app/dashboard/html-objekte/span.ts");
/* harmony import */ var _html_objekte_table_Table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../html-objekte/table/Table */ "./src/app/dashboard/html-objekte/table/Table.ts");
/* harmony import */ var _html_objekte_form_Form__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../html-objekte/form/Form */ "./src/app/dashboard/html-objekte/form/Form.ts");
/* harmony import */ var _html_objekte_Img__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../html-objekte/Img */ "./src/app/dashboard/html-objekte/Img.ts");
/* harmony import */ var _html_objekte_p__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../html-objekte/p */ "./src/app/dashboard/html-objekte/p.ts");
/* harmony import */ var _html_objekte_Headline__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../html-objekte/Headline */ "./src/app/dashboard/html-objekte/Headline.ts");
/* harmony import */ var _html_objekte_list_ul__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../html-objekte/list/ul */ "./src/app/dashboard/html-objekte/list/ul.ts");
/* harmony import */ var _html_objekte_list_ol__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../html-objekte/list/ol */ "./src/app/dashboard/html-objekte/list/ol.ts");
/* harmony import */ var _html_objekte_A__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../html-objekte/A */ "./src/app/dashboard/html-objekte/A.ts");
/* harmony import */ var _html_objekte_nav__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../html-objekte/nav */ "./src/app/dashboard/html-objekte/nav.ts");
/* harmony import */ var _html_objekte_Header__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../html-objekte/Header */ "./src/app/dashboard/html-objekte/Header.ts");
/* harmony import */ var _html_objekte_Footer__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../html-objekte/Footer */ "./src/app/dashboard/html-objekte/Footer.ts");
/* harmony import */ var _html_objekte_Body__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../html-objekte/Body */ "./src/app/dashboard/html-objekte/Body.ts");
/* harmony import */ var _html_objekte_Article__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../html-objekte/Article */ "./src/app/dashboard/html-objekte/Article.ts");
/* harmony import */ var _html_objekte_Main__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../html-objekte/Main */ "./src/app/dashboard/html-objekte/Main.ts");
/* harmony import */ var _html_objekte_list_dl__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../html-objekte/list/dl */ "./src/app/dashboard/html-objekte/list/dl.ts");
/* harmony import */ var _html_objekte_Strong__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../html-objekte/Strong */ "./src/app/dashboard/html-objekte/Strong.ts");
/* harmony import */ var _html_objekte_s__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../html-objekte/s */ "./src/app/dashboard/html-objekte/s.ts");
/* harmony import */ var _html_objekte_small__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../html-objekte/small */ "./src/app/dashboard/html-objekte/small.ts");
/* harmony import */ var _html_objekte_u__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../html-objekte/u */ "./src/app/dashboard/html-objekte/u.ts");
/* harmony import */ var _html_objekte_em__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../html-objekte/em */ "./src/app/dashboard/html-objekte/em.ts");
/* harmony import */ var _html_objekte_pre__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../html-objekte/pre */ "./src/app/dashboard/html-objekte/pre.ts");
/* harmony import */ var _html_objekte_section__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../html-objekte/section */ "./src/app/dashboard/html-objekte/section.ts");
/* harmony import */ var _html_objekte_address__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../html-objekte/address */ "./src/app/dashboard/html-objekte/address.ts");
/* harmony import */ var _html_objekte_dialog__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../html-objekte/dialog */ "./src/app/dashboard/html-objekte/dialog.ts");
/* harmony import */ var _html_objekte_hr__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../html-objekte/hr */ "./src/app/dashboard/html-objekte/hr.ts");
/* harmony import */ var _html_objekte_blockquote__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../html-objekte/blockquote */ "./src/app/dashboard/html-objekte/blockquote.ts");
/* harmony import */ var _html_objekte_progress__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../html-objekte/progress */ "./src/app/dashboard/html-objekte/progress.ts");
/* harmony import */ var _html_objekte_details_details__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../html-objekte/details/details */ "./src/app/dashboard/html-objekte/details/details.ts");
/* harmony import */ var _html_objekte_meter__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../html-objekte/meter */ "./src/app/dashboard/html-objekte/meter.ts");
/* harmony import */ var _html_objekte_q__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../html-objekte/q */ "./src/app/dashboard/html-objekte/q.ts");
/* harmony import */ var _html_objekte_bdo__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../html-objekte/bdo */ "./src/app/dashboard/html-objekte/bdo.ts");
/* harmony import */ var _html_objekte_code__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../html-objekte/code */ "./src/app/dashboard/html-objekte/code.ts");
/* harmony import */ var _html_objekte_kbd__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../html-objekte/kbd */ "./src/app/dashboard/html-objekte/kbd.ts");
/* harmony import */ var _html_objekte_samp__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../html-objekte/samp */ "./src/app/dashboard/html-objekte/samp.ts");
/* harmony import */ var _html_objekte_var__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../html-objekte/var */ "./src/app/dashboard/html-objekte/var.ts");
/* harmony import */ var _html_objekte_aside__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../html-objekte/aside */ "./src/app/dashboard/html-objekte/aside.ts");
/* harmony import */ var _html_objekte_Svg__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../html-objekte/Svg */ "./src/app/dashboard/html-objekte/Svg.ts");
/* harmony import */ var _html_objekte_Map__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../html-objekte/Map */ "./src/app/dashboard/html-objekte/Map.ts");
/* harmony import */ var _html_objekte_Canvas__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../html-objekte/Canvas */ "./src/app/dashboard/html-objekte/Canvas.ts");
/* harmony import */ var _html_objekte_Picture__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../html-objekte/Picture */ "./src/app/dashboard/html-objekte/Picture.ts");
/* harmony import */ var _html_objekte_Figure__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../html-objekte/Figure */ "./src/app/dashboard/html-objekte/Figure.ts");
/* harmony import */ var _html_objekte_Figcaption__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../html-objekte/Figcaption */ "./src/app/dashboard/html-objekte/Figcaption.ts");
/* harmony import */ var _html_objekte_audio__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../html-objekte/audio */ "./src/app/dashboard/html-objekte/audio.ts");
/* harmony import */ var _html_objekte_video__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ../html-objekte/video */ "./src/app/dashboard/html-objekte/video.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






























































var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(htmlObjektService, gridObjekteService, dialog, seitenNaviService, sanitizer, aufloesungService) {
        var _this = this;
        this.htmlObjektService = htmlObjektService;
        this.gridObjekteService = gridObjekteService;
        this.dialog = dialog;
        this.seitenNaviService = seitenNaviService;
        this.sanitizer = sanitizer;
        this.aufloesungService = aufloesungService;
        // Anpassungsvariablen für die Toolbox
        this.ausgewaehlteDOMBausteinArt = 'basic'; // select der DOM Kategorie
        this.toolbarMinimieren = true;
        this.toolbarVerbergen = false;
        this.divObjekt = new _html_objekte_Div__WEBPACK_IMPORTED_MODULE_16__["Div"]('200px', '200px');
        this.spanObjekt = new _html_objekte_span__WEBPACK_IMPORTED_MODULE_17__["Span"]('100px', '100px');
        this.tableObjekt = new _html_objekte_table_Table__WEBPACK_IMPORTED_MODULE_18__["Table"]('300px', '100px');
        this.imgObjekt = new _html_objekte_Img__WEBPACK_IMPORTED_MODULE_20__["Img"]('200px', '200px');
        this.pObjekt = new _html_objekte_p__WEBPACK_IMPORTED_MODULE_21__["P"]('100%', '200px');
        this.formObjekt = new _html_objekte_form_Form__WEBPACK_IMPORTED_MODULE_19__["Form"]('0px', '0px');
        this.ulObjekt = new _html_objekte_list_ul__WEBPACK_IMPORTED_MODULE_23__["Ul"]('0px', '0px');
        this.olObjekt = new _html_objekte_list_ol__WEBPACK_IMPORTED_MODULE_24__["Ol"]('0px', '0px');
        this.aObjekt = new _html_objekte_A__WEBPACK_IMPORTED_MODULE_25__["A"]('200px', '50px');
        this.headlineObjekt = new _html_objekte_Headline__WEBPACK_IMPORTED_MODULE_22__["Headline"]('400px', '50px');
        this.navObjekt = new _html_objekte_nav__WEBPACK_IMPORTED_MODULE_26__["Nav"]('0px', '0px');
        this.headerObjekt = new _html_objekte_Header__WEBPACK_IMPORTED_MODULE_27__["Header"]('800px', '50px');
        this.bodyObjekt = new _html_objekte_Body__WEBPACK_IMPORTED_MODULE_29__["Body"]('800px', '100px');
        this.footerObjekt = new _html_objekte_Footer__WEBPACK_IMPORTED_MODULE_28__["Footer"]('800px', '100px');
        this.articleObjekt = new _html_objekte_Article__WEBPACK_IMPORTED_MODULE_30__["Article"]('300px', '200px');
        this.mainObjekt = new _html_objekte_Main__WEBPACK_IMPORTED_MODULE_31__["Main"]('300px', '300px');
        this.dlObjekt = new _html_objekte_list_dl__WEBPACK_IMPORTED_MODULE_32__["Dl"]('0px', '0px');
        this.blockquoteObjekt = new _html_objekte_blockquote__WEBPACK_IMPORTED_MODULE_43__["Blockquote"]('0px', '0px');
        this.progressObjekt = new _html_objekte_progress__WEBPACK_IMPORTED_MODULE_44__["Progress"]('0px', '0px');
        this.detailsObjekt = new _html_objekte_details_details__WEBPACK_IMPORTED_MODULE_45__["Details"]('0px', '0px');
        this.svgObjekt = new _html_objekte_Svg__WEBPACK_IMPORTED_MODULE_54__["Svg"]('300px', '300px');
        this.mapObjekt = new _html_objekte_Map__WEBPACK_IMPORTED_MODULE_55__["Map"]('auto', 'auto');
        this.canvasObjekt = new _html_objekte_Canvas__WEBPACK_IMPORTED_MODULE_56__["Canvas"]('400px', '400px');
        this.pictureObjekt = new _html_objekte_Picture__WEBPACK_IMPORTED_MODULE_57__["Picture"]('400px', '400px');
        this.videoObjekt = new _html_objekte_video__WEBPACK_IMPORTED_MODULE_61__["Video"]('auto', 'auto');
        this.audioObjekt = new _html_objekte_audio__WEBPACK_IMPORTED_MODULE_60__["Audio"]('300px', '50px');
        // An dem HTML-Objekt Service anmelden und über Änderungen informiert werden
        this.htmlObjektService.myMethod$.subscribe(function (data) {
            _this.ausgewaehltesObjekt = data;
        });
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent.prototype.auswaehlenUndZufaelligeFarbeZuweisen = function (obj) {
        this.ausgewaehltesObjekt = obj;
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_11__["ToolbarAnimations"].animiereButtonKlick(obj.tagName);
        this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
        this.seitenNaviService.entferneNavMenue();
        obj.background_color = this.zufaelligeFarbeGenerierenHex();
    };
    ToolbarComponent.prototype.objektAuswaehlen = function (obj) {
        this.ausgewaehltesObjekt = obj;
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_11__["ToolbarAnimations"].animiereButtonKlick(obj.tagName);
        this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
        this.seitenNaviService.entferneNavMenue();
    };
    ToolbarComponent.prototype.neuesAElementErstellen = function () {
        this.aObjekt = new _html_objekte_A__WEBPACK_IMPORTED_MODULE_25__["A"]('200px', '50px');
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_11__["ToolbarAnimations"].animiereButtonKlick('a');
        this.ausgewaehltesObjekt = this.aObjekt;
        this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
        this.seitenNaviService.entferneNavMenue();
    };
    ToolbarComponent.prototype.neuesTabellenObjektErzeugen = function () {
        this.tableObjekt = new _html_objekte_table_Table__WEBPACK_IMPORTED_MODULE_18__["Table"]('300px', '100px');
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_11__["ToolbarAnimations"].animiereButtonKlick('table');
        this.ausgewaehltesObjekt = this.tableObjekt;
        this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
        this.seitenNaviService.entferneNavMenue();
    };
    ToolbarComponent.prototype.neuesFormObjektErzeugen = function () {
        this.formObjekt = new _html_objekte_form_Form__WEBPACK_IMPORTED_MODULE_19__["Form"]('300px', '600px');
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_11__["ToolbarAnimations"].animiereButtonKlick('form');
        this.formObjekt.action = 'http://httpbin.org/post';
        this.formObjekt.method = 'post';
        this.ausgewaehltesObjekt = this.formObjekt;
        this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
        this.seitenNaviService.entferneNavMenue();
    };
    ToolbarComponent.prototype.neuesUlObjektErzeugen = function () {
        this.ulObjekt = new _html_objekte_list_ul__WEBPACK_IMPORTED_MODULE_23__["Ul"]('300px', '300px');
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_11__["ToolbarAnimations"].animiereButtonKlick('ul');
        this.ausgewaehltesObjekt = this.ulObjekt;
        this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
        this.seitenNaviService.entferneNavMenue();
    };
    ToolbarComponent.prototype.neuesOlObjektErzeugen = function () {
        this.olObjekt = new _html_objekte_list_ol__WEBPACK_IMPORTED_MODULE_24__["Ol"]('300px', '300px');
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_11__["ToolbarAnimations"].animiereButtonKlick('ol');
        this.ausgewaehltesObjekt = this.olObjekt;
        this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
        this.seitenNaviService.entferneNavMenue();
    };
    ToolbarComponent.prototype.neuesNavObjektErzeugen = function () {
        this.navObjekt = new _html_objekte_nav__WEBPACK_IMPORTED_MODULE_26__["Nav"]('200px', '400px');
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_11__["ToolbarAnimations"].animiereButtonKlick('nav');
        this.ausgewaehltesObjekt = this.navObjekt;
        this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
        this.seitenNaviService.entferneNavMenue();
    };
    ToolbarComponent.prototype.neuesDlObjektErzeugen = function () {
        this.dlObjekt = new _html_objekte_list_dl__WEBPACK_IMPORTED_MODULE_32__["Dl"]('300px', '300px');
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_11__["ToolbarAnimations"].animiereButtonKlick('dl');
        this.ausgewaehltesObjekt = this.dlObjekt;
        this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
        this.seitenNaviService.entferneNavMenue();
    };
    ToolbarComponent.prototype.neuesStrongObjektErstellen = function () {
        this.strongObjekt = new _html_objekte_Strong__WEBPACK_IMPORTED_MODULE_33__["Strong"]('200px', '');
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_11__["ToolbarAnimations"].animiereButtonKlick('strong');
        this.ausgewaehltesObjekt = this.strongObjekt;
        this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
        this.seitenNaviService.entferneNavMenue();
    };
    ToolbarComponent.prototype.neuesSObjektErstellen = function () {
        this.sObjekt = new _html_objekte_s__WEBPACK_IMPORTED_MODULE_34__["S"]('200px', '');
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_11__["ToolbarAnimations"].animiereButtonKlick('s');
        this.ausgewaehltesObjekt = this.sObjekt;
        this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
        this.seitenNaviService.entferneNavMenue();
    };
    ToolbarComponent.prototype.neuesSmallObjektErstellen = function () {
        this.smallObjekt = new _html_objekte_small__WEBPACK_IMPORTED_MODULE_35__["Small"]('200px', '');
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_11__["ToolbarAnimations"].animiereButtonKlick('small');
        this.ausgewaehltesObjekt = this.smallObjekt;
        this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
        this.seitenNaviService.entferneNavMenue();
    };
    ToolbarComponent.prototype.neuesUObjektErstellen = function () {
        this.uObjekt = new _html_objekte_u__WEBPACK_IMPORTED_MODULE_36__["U"]('200px', '');
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_11__["ToolbarAnimations"].animiereButtonKlick('u');
        this.ausgewaehltesObjekt = this.uObjekt;
        this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
        this.seitenNaviService.entferneNavMenue();
    };
    ToolbarComponent.prototype.neuesEmObjektErstellen = function () {
        this.emObjekt = new _html_objekte_em__WEBPACK_IMPORTED_MODULE_37__["Em"]('200px', '');
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_11__["ToolbarAnimations"].animiereButtonKlick('em');
        this.ausgewaehltesObjekt = this.emObjekt;
        this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
        this.seitenNaviService.entferneNavMenue();
    };
    ToolbarComponent.prototype.neuesPreObjektErstellen = function () {
        this.preObjekt = new _html_objekte_pre__WEBPACK_IMPORTED_MODULE_38__["Pre"]('200px', '200px');
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_11__["ToolbarAnimations"].animiereButtonKlick('pre');
        this.ausgewaehltesObjekt = this.preObjekt;
        this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
        this.seitenNaviService.entferneNavMenue();
    };
    ToolbarComponent.prototype.neuesSectionObjektErstellen = function () {
        this.sectionObjekt = new _html_objekte_section__WEBPACK_IMPORTED_MODULE_39__["Section"]('400px', '200px');
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_11__["ToolbarAnimations"].animiereButtonKlick('section');
        this.ausgewaehltesObjekt = this.sectionObjekt;
        this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
        this.seitenNaviService.entferneNavMenue();
    };
    ToolbarComponent.prototype.neuesAddressObjektErstellen = function () {
        this.addressObjekt = new _html_objekte_address__WEBPACK_IMPORTED_MODULE_40__["Address"]('300px', '100px');
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_11__["ToolbarAnimations"].animiereButtonKlick('address');
        this.ausgewaehltesObjekt = this.addressObjekt;
        this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
        this.seitenNaviService.entferneNavMenue();
    };
    ToolbarComponent.prototype.neuesDialogObjektErstellen = function () {
        this.dialogObjekt = new _html_objekte_dialog__WEBPACK_IMPORTED_MODULE_41__["Dialog"]('', '');
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_11__["ToolbarAnimations"].animiereButtonKlick('dialog');
        this.ausgewaehltesObjekt = this.dialogObjekt;
        this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
        this.seitenNaviService.entferneNavMenue();
    };
    ToolbarComponent.prototype.neuesHrObjektErstellen = function () {
        this.hrObjekt = new _html_objekte_hr__WEBPACK_IMPORTED_MODULE_42__["Hr"]('100%', '1px');
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_11__["ToolbarAnimations"].animiereButtonKlick('hr');
        this.ausgewaehltesObjekt = this.hrObjekt;
        this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
        this.seitenNaviService.entferneNavMenue();
    };
    ToolbarComponent.prototype.neuesBlockquoteObjektErzeugen = function () {
        this.blockquoteObjekt = new _html_objekte_blockquote__WEBPACK_IMPORTED_MODULE_43__["Blockquote"]('300px', '300px');
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_11__["ToolbarAnimations"].animiereButtonKlick('blockquote');
        this.ausgewaehltesObjekt = this.blockquoteObjekt;
        this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
        this.seitenNaviService.entferneNavMenue();
    };
    ToolbarComponent.prototype.neuesProgressObjektErzeugen = function () {
        this.progressObjekt = new _html_objekte_progress__WEBPACK_IMPORTED_MODULE_44__["Progress"]('100px', '30px');
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_11__["ToolbarAnimations"].animiereButtonKlick('progress');
        this.ausgewaehltesObjekt = this.progressObjekt;
        this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
        this.seitenNaviService.entferneNavMenue();
    };
    ToolbarComponent.prototype.neuesDetailsObjektErzeugen = function () {
        this.detailsObjekt = new _html_objekte_details_details__WEBPACK_IMPORTED_MODULE_45__["Details"]('300px', '300px');
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_11__["ToolbarAnimations"].animiereButtonKlick('details');
        this.ausgewaehltesObjekt = this.detailsObjekt;
        this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
        this.seitenNaviService.entferneNavMenue();
    };
    ToolbarComponent.prototype.neuesMeterObjektErzeugen = function () {
        this.meterObjekt = new _html_objekte_meter__WEBPACK_IMPORTED_MODULE_46__["Meter"]('200px', '30px');
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_11__["ToolbarAnimations"].animiereButtonKlick('meter');
        this.ausgewaehltesObjekt = this.meterObjekt;
        this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
        this.seitenNaviService.entferneNavMenue();
    };
    ToolbarComponent.prototype.neuesQObjektErzeugen = function () {
        this.qObjekt = new _html_objekte_q__WEBPACK_IMPORTED_MODULE_47__["Q"]('300px', '50px');
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_11__["ToolbarAnimations"].animiereButtonKlick('q');
        this.ausgewaehltesObjekt = this.qObjekt;
        this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
        this.seitenNaviService.entferneNavMenue();
    };
    ToolbarComponent.prototype.neuesBdoObjektErzeugen = function () {
        this.bdoObjekt = new _html_objekte_bdo__WEBPACK_IMPORTED_MODULE_48__["Bdo"]('200px', '30px');
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_11__["ToolbarAnimations"].animiereButtonKlick('bdo');
        this.ausgewaehltesObjekt = this.bdoObjekt;
        this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
        this.seitenNaviService.entferneNavMenue();
    };
    ToolbarComponent.prototype.neuesFigureObjektErzeugen = function () {
        this.figureObjekt = new _html_objekte_Figure__WEBPACK_IMPORTED_MODULE_58__["Figure"]('400px', '300px');
        var figcaption = new _html_objekte_Figcaption__WEBPACK_IMPORTED_MODULE_59__["Figcaption"]('auto', 'auto');
        figcaption.innererText = 'Bildbeschriftung - In figure muss noch Bild gedroppt werden';
        figcaption.liegtAufDemGrid = true;
        this.figureObjekt.innereHTMLObjekte.push(figcaption);
        this.ausgewaehltesObjekt = this.figureObjekt;
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_11__["ToolbarAnimations"].animiereButtonKlick('figure');
        this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
        this.seitenNaviService.entferneNavMenue();
    };
    ToolbarComponent.prototype.neuesCodeObjektErstellen = function () {
        this.codeObjekt = new _html_objekte_code__WEBPACK_IMPORTED_MODULE_49__["Code"]('250px', '');
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_11__["ToolbarAnimations"].animiereButtonKlick('code');
        this.ausgewaehltesObjekt = this.codeObjekt;
        this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
        this.seitenNaviService.entferneNavMenue();
    };
    ToolbarComponent.prototype.neuesKbdObjektErstellen = function () {
        this.kbdObjekt = new _html_objekte_kbd__WEBPACK_IMPORTED_MODULE_50__["Kbd"]('200px', '');
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_11__["ToolbarAnimations"].animiereButtonKlick('kbd');
        this.ausgewaehltesObjekt = this.kbdObjekt;
        this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
        this.seitenNaviService.entferneNavMenue();
    };
    ToolbarComponent.prototype.neuesSampObjektErstellen = function () {
        this.sampObjekt = new _html_objekte_samp__WEBPACK_IMPORTED_MODULE_51__["Samp"]('350px', '');
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_11__["ToolbarAnimations"].animiereButtonKlick('samp');
        this.ausgewaehltesObjekt = this.sampObjekt;
        this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
        this.seitenNaviService.entferneNavMenue();
    };
    ToolbarComponent.prototype.neuesVarObjektErstellen = function () {
        this.varObjekt = new _html_objekte_var__WEBPACK_IMPORTED_MODULE_52__["Var"]('200px', '');
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_11__["ToolbarAnimations"].animiereButtonKlick('var');
        this.ausgewaehltesObjekt = this.varObjekt;
        this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
        this.seitenNaviService.entferneNavMenue();
    };
    ToolbarComponent.prototype.neuesAsideObjektErstellen = function () {
        this.asideObjekt = new _html_objekte_aside__WEBPACK_IMPORTED_MODULE_53__["Aside"]('300px', '300px');
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_11__["ToolbarAnimations"].animiereButtonKlick('aside');
        this.ausgewaehltesObjekt = this.asideObjekt;
        this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
        this.seitenNaviService.entferneNavMenue();
    };
    ToolbarComponent.prototype.neuesAudioObjektErstellen = function () {
        this.audioObjekt = new _html_objekte_audio__WEBPACK_IMPORTED_MODULE_60__["Audio"]('800px', '500px');
        _toolbar_animations__WEBPACK_IMPORTED_MODULE_11__["ToolbarAnimations"].animiereButtonKlick('audio');
        this.ausgewaehltesObjekt = this.audioObjekt;
        this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
        this.seitenNaviService.entferneNavMenue();
    };
    ToolbarComponent.prototype.alleHtmlObjekteLoeschen = function () {
        this.gridObjekteService.htmlObjekteLoeschen();
        this.htmlObjektService.htmlObjektVerteilen(null);
    };
    ToolbarComponent.prototype.openImportJSONdialog = function () {
        var aufloesung = this.aufloesungService.getAufloesung();
        if (aufloesung === _bildschirm_qhd_enum__WEBPACK_IMPORTED_MODULE_13__["BildschirmQHD"]) {
            this.dialog.open(_import_json_import_json_component__WEBPACK_IMPORTED_MODULE_2__["ImportJSONComponent"], {
                width: '50%'
            });
        }
        if (aufloesung === _bildschirm_hd_enum__WEBPACK_IMPORTED_MODULE_14__["BildschirmHD"]) {
            this.dialog.open(_import_json_import_json_component__WEBPACK_IMPORTED_MODULE_2__["ImportJSONComponent"], {
                width: '30%'
            });
        }
        if (aufloesung === _bildschirm_uhd_enum__WEBPACK_IMPORTED_MODULE_15__["BildschirmUHD"]) {
            this.dialog.open(_import_json_import_json_component__WEBPACK_IMPORTED_MODULE_2__["ImportJSONComponent"], {
                width: '15%'
            });
        }
    };
    ToolbarComponent.prototype.openImportXMLdialog = function () {
        var aufloesung = this.aufloesungService.getAufloesung();
        if (aufloesung === _bildschirm_qhd_enum__WEBPACK_IMPORTED_MODULE_13__["BildschirmQHD"]) {
            this.dialog.open(_import_xml_import_xml_component__WEBPACK_IMPORTED_MODULE_8__["ImportXmlComponent"], {
                width: '50%'
            });
        }
        if (aufloesung === _bildschirm_hd_enum__WEBPACK_IMPORTED_MODULE_14__["BildschirmHD"]) {
            this.dialog.open(_import_xml_import_xml_component__WEBPACK_IMPORTED_MODULE_8__["ImportXmlComponent"], {
                width: '30%'
            });
        }
        if (aufloesung === _bildschirm_uhd_enum__WEBPACK_IMPORTED_MODULE_15__["BildschirmUHD"]) {
            this.dialog.open(_import_xml_import_xml_component__WEBPACK_IMPORTED_MODULE_8__["ImportXmlComponent"], {
                width: '15%'
            });
        }
    };
    ToolbarComponent.prototype.openCodeAnzeigendialog = function () {
        this.dialog.open(_code_inspector_code_inspector_component__WEBPACK_IMPORTED_MODULE_10__["CodeInspectorComponent"], {
            width: '85%',
            height: '85%',
            maxWidth: '85%',
            maxHeight: '85%'
        });
    };
    ToolbarComponent.prototype.zeigeNavSeite = function () {
        this.seitenNaviService.zeigeNavMenue();
    };
    ToolbarComponent.prototype.generiereDownloadJsonUri = function () {
        var dieJSON = JSON.stringify(this.gridObjekteService.htmlObjekte);
        var blob = new Blob([dieJSON], { type: 'text/json' });
        var url = window.URL.createObjectURL(blob);
        this.downloadJsonHref = this.sanitizer.bypassSecurityTrustUrl(url);
    };
    ToolbarComponent.prototype.generiereDownloadXMLUri = function () {
        var xml = this.gridObjekteService.alleElementeAlsXML();
        var blob = new Blob([xml], { type: 'text/xml' });
        var url = window.URL.createObjectURL(blob);
        return this.sanitizer.bypassSecurityTrustUrl(url);
    };
    ToolbarComponent.prototype.zufaelligeFarbeGenerierenHex = function () {
        var zeichen = '0123456789ABCDEF'.split('');
        var farbe = '#';
        for (var i = 0; i < 6; i++) {
            farbe += zeichen[Math.floor(Math.random() * 16)];
        }
        return farbe;
    };
    ToolbarComponent.prototype.drucken = function () {
        window.print();
    };
    ToolbarComponent.prototype.generierePNG = function () {
        html2canvas__WEBPACK_IMPORTED_MODULE_9___default()(document.querySelector('#dropzoneDashboard')).then(function (canvas) {
            var avar = document.createElement('a');
            avar.href = canvas.toDataURL('image/png');
            avar.download = ('Clariframer.png');
            document.body.appendChild(avar);
            avar.click();
            document.body.removeChild(avar);
        });
    };
    // Methode zum minimieren der Toolbar am oberen Rand & Toolbar verbergen
    ToolbarComponent.prototype.minimiereToolbar = function () {
        if (!this.toolbarMinimieren) {
            this.toolbarMinimieren = true;
        }
        else {
            this.toolbarMinimieren = false;
        }
    };
    ToolbarComponent.prototype.toggleToolbar = function () {
        if (this.toolbarVerbergen) {
            this.toolbarVerbergen = false;
        }
        else {
            this.toolbarVerbergen = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_grid_grid_component__WEBPACK_IMPORTED_MODULE_4__["GridComponent"]),
        __metadata("design:type", _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__["GridComponent"])
    ], ToolbarComponent.prototype, "grid", void 0);
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/dashboard/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.css */ "./src/app/dashboard/toolbar/toolbar.component.css")]
        }),
        __metadata("design:paramtypes", [_html_objekt_service__WEBPACK_IMPORTED_MODULE_3__["HtmlObjektService"],
            _grid_objekte_service__WEBPACK_IMPORTED_MODULE_5__["GridObjekteService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _seiten_navi_service__WEBPACK_IMPORTED_MODULE_6__["SeitenNaviService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"],
            _aufloesung_service__WEBPACK_IMPORTED_MODULE_12__["AufloesungService"]])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\email\Desktop\MPM\Clariframer\teamR2\Clariframer\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map