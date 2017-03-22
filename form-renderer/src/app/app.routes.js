"use strict";
var app_component_1 = require("./appcomponent/component/app.component");
var home_component_1 = require("./homecomponent/component/home.component");
var listform_component_1 = require("./listAllForm/component/listform.component");
exports.AppRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'renderer/:entityType', component: app_component_1.AppComponent },
    { path: 'renderer/:entityType/:id', component: app_component_1.AppComponent },
    { path: 'list-forms', component: listform_component_1.ListFormComponent }
];
//# sourceMappingURL=app.routes.js.map