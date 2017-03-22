import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListFormsIonic } from '../list-forms/list-forms';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  itemTapped(event) {
    console.log("home");
    this.navCtrl.push(ListFormsIonic,{"name":"List of Forms"});
  }
}
