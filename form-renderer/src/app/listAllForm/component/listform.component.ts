import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Http, Response} from '@angular/http';

import {ExtFormioService} from '../../extendedformioservice/ext.formioservice';
import global_constant = require('../../globalconstant/app.settings');

@Component({
    selector: 'list-forms',
    template: `
    <pre class="title-text bg-info"><h5>Forms</h5></pre>
  <section>
<a href=''><button class="btn btn-primary actionButton"><i class="fa fa-home" aria-hidden="true"></i>Home</button></a>
  <div class="col-sm-12">
      <ul>
        <li *ngFor="let form of formList">
            <a href="#" [routerLink]="['/renderer',form.name]">
          {{form.name}}
          </a>
        </li>
      </ul>
  </div>
  </section>
  `
})
export class ListFormComponent {
    formList: any = [];
    response: any = [];
    constructor(private http: Http) {
    }
    ngOnInit() {
        this.http.request(global_constant.UserGrid_URL + "/forms?&access_token=" + global_constant.ACCESS_TOKEN)
            .map((res: Response) => res.json())
            .subscribe((res: any) => {
                this.response = res.entities;
                for (let form of this.response) {
                    this.formList.push({
                        "id": form.uuid,
                        "name": form.name
                    });
                }
            },
            (err) => {
                console.log("Error in service", JSON.stringify(err));
            },
            () => {
                console.log("getData function loaded correctly");
            }
            );
    }
}
