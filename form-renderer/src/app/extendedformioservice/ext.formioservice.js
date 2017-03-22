"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Formio = require('formiojs');
var formio_service_js_1 = require("../../../node_modules/ng2-formio/dist/formio.service.js");
var Observable_1 = require("rxjs/Observable");
var ExtFormioService = (function (_super) {
    __extends(ExtFormioService, _super);
    function ExtFormioService(src) {
        var _this = _super.call(this, src) || this;
        _this.src = src;
        return _this;
    }
    ExtFormioService.prototype.loadForm = function () {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            _this.formio.loadForm().then(function (form) {
                console.log(form);
                _this.setStyles(form.entities[0].css);
                observer.next(form.entities[0]);
                observer.complete();
            });
        });
    };
    ExtFormioService.prototype.loadSubmission = function () {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            try {
                _this.formio.loadSubmission().then(function (submission) {
                    observer.next(submission.entities[0]);
                    observer.complete();
                }).catch(function (err) { return observer.error(err); });
            }
            catch (err) {
                observer.error(err);
            }
        });
    };
    ExtFormioService.prototype.setStyles = function (css) {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.setAttribute('scoped', 'true');
        style.appendChild(document.createTextNode(css));
        document.getElementById('form-renderer-outer-div').appendChild(style);
    };
    return ExtFormioService;
}(formio_service_js_1.FormioService));
exports.ExtFormioService = ExtFormioService;
//# sourceMappingURL=ext.formioservice.js.map