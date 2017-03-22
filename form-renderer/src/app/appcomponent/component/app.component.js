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
var router_1 = require("@angular/router");
var ext_formioservice_1 = require("../../extendedformioservice/ext.formioservice");
var global_constant = require("../../globalconstant/app.settings");
var AppComponent = (function () {
    function AppComponent(route) {
        this.route = route;
    }
    AppComponent.prototype.ngOnInit = function () {
        var ql = "ql=select * where name = 'sample'";
        this.src = global_constant.UserGrid_URL + "/forms?ql=select * where name = '" + this.route.snapshot.params['entityType'] + "'&access_token=" + global_constant.ACCESS_TOKEN;
        this.service = new ext_formioservice_1.ExtFormioService(this.src);
        this.service.formio.submissionUrl = global_constant.UserGrid_URL + '/' + this.route.snapshot.params['entityType'];
        console.log(this.service.formio.submissionUrl);
        this.service.formio.submissionsUrl = global_constant.UserGrid_URL + '/' + this.route.snapshot.params['entityType'];
        if (this.route.snapshot.params['id']) {
            var submissionId = this.route.snapshot.params['id'];
            this.service.formio.submissionId = submissionId;
            this.service.formio.submissionUrl += '/' + submissionId;
        }
    };
    return AppComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AppComponent.prototype, "src", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", ext_formioservice_1.ExtFormioService)
], AppComponent.prototype, "service", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AppComponent.prototype, "submission", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'renderer',
        templateUrl: '../views/app.component.html',
        styleUrls: ['../css/app.component.css'],
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map