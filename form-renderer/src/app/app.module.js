"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var index_js_1 = require("../../node_modules/ng2-formio/dist/index.js");
var angular2_font_awesome_1 = require("angular2-font-awesome/angular2-font-awesome");
var app_1 = require("./app");
var app_component_1 = require("./appcomponent/component/app.component");
var home_component_1 = require("./homecomponent/component/home.component");
var listform_component_1 = require("./listAllForm/component/listform.component");
var app_routes_1 = require("./app.routes");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, index_js_1.FormioModule, http_1.HttpModule, router_1.RouterModule.forRoot(app_routes_1.AppRoutes), angular2_font_awesome_1.Angular2FontAwesomeModule],
        declarations: [app_1.App, app_component_1.AppComponent, home_component_1.HomeComponent, listform_component_1.ListFormComponent],
        bootstrap: [app_1.App]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map