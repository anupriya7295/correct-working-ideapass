var Formio = require('formiojs');
import {FormioService} from '../../../node_modules/ng2-formio/dist/formio.service.js';
import {FormioForm} from '../../../node_modules/ng2-formio/dist/formio.common.js';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import global_constant = require('../globalconstant/app.settings');

import { UUID } from 'angular2-uuid';

export class ExtFormioService extends FormioService{
    constructor(public src: string) {
      super(src);
    }
    loadForm(): Observable<any> {
        return Observable.create((observer:Observer<any>) => {
            this.formio.loadForm().then((form: any) => {
                console.log(form);
                this.setStyles(form.entities[0].css);
                observer.next(form.entities[0]);
                observer.complete();
            });
        });
    }

    loadSubmission(): Observable<{}> {
        return Observable.create((observer:Observer<{}>) => {
            try {
                this.formio.loadSubmission().then((submission : any) => {
                    observer.next(submission.entities[0]);
                    observer.complete();
                }).catch((err: any) => observer.error(err));
            }
            catch (err) {
                observer.error(err);
            }
        });
    }

    setStyles(css: string) {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.setAttribute('scoped', 'true');
        style.appendChild(document.createTextNode(css));
        document.getElementById('form-renderer-outer-div').appendChild(style);
    }
}
