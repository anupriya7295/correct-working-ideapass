import {Component, Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';

import {ExtFormioService} from '../../extendedformioservice/ext.formioservice';
import global_constant = require('../../globalconstant/app.settings');
@Component({
    selector: 'renderer',
    templateUrl: '../views/app.component.html',
    styleUrls: ['../css/app.component.css'],
})
export class AppComponent implements OnInit {
    @Input() src: string;
    @Input() service: ExtFormioService;
    @Input() submission: any;

    ngOnInit() {
        var ql = "ql=select * where name = 'sample'";
        this.src = global_constant.UserGrid_URL + "/forms?ql=select * where name = '" + this.route.snapshot.params['entityType'] + "'&access_token=" + global_constant.ACCESS_TOKEN;
        // this.src = global_constant.UserGrid_URL + "/forms/d3379274-03e8-11e7-a276-3b259ac087dd?&access_token=" +global_constant.ACCESS_TOKEN;
        this.service = new ExtFormioService(this.src);
        this.service.formio.submissionUrl = global_constant.UserGrid_URL + '/' + this.route.snapshot.params['entityType'];
        console.log(this.service.formio.submissionUrl);
        this.service.formio.submissionsUrl = global_constant.UserGrid_URL + '/' + this.route.snapshot.params['entityType'];
        if (this.route.snapshot.params['id']) {
            var submissionId = this.route.snapshot.params['id'];
            this.service.formio.submissionId = submissionId;
            this.service.formio.submissionUrl += '/' + submissionId;
        }
    }
    constructor(private route: ActivatedRoute) {
    }
}
