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
var http_1 = require("@angular/http");
var global_constant = require("../../globalconstant/app.settings");
var ListFormComponent = (function () {
    function ListFormComponent(http) {
        this.http = http;
        this.formList = [];
        this.response = [];
    }
    ListFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.request(global_constant.UserGrid_URL + "/forms?&access_token=" + global_constant.ACCESS_TOKEN)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            _this.response = res.entities;
            for (var _i = 0, _a = _this.response; _i < _a.length; _i++) {
                var form = _a[_i];
                _this.formList.push({
                    "id": form.uuid,
                    "name": form.name
                });
            }
        }, function (err) {
            console.log("Error in service", JSON.stringify(err));
        }, function () {
            console.log("getData function loaded correctly");
        });
    };
    return ListFormComponent;
}());
ListFormComponent = __decorate([
    core_1.Component({
        selector: 'list-forms',
        template: "\n    <pre class=\"title-text bg-info\"><h5>Forms</h5></pre>\n  <section>\n<a href=''><button class=\"btn btn-primary actionButton\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i>Home</button></a>\n  <div class=\"col-sm-12\">\n      <ul>\n        <li *ngFor=\"let form of formList\">\n            <a href=\"#\" [routerLink]=\"['/renderer',form.name]\">\n          {{form.name}}\n          </a>\n        </li>\n      </ul>\n  </div>\n  </section>\n  "
    }),
    __metadata("design:paramtypes", [http_1.Http])
], ListFormComponent);
exports.ListFormComponent = ListFormComponent;
//# sourceMappingURL=listform.component.js.map