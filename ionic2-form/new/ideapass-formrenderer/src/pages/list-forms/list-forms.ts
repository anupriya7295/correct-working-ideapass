import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RenderFormIonic } from '../render-form/render-form';

@Component({
  selector: 'page-list-forms',
  templateUrl: 'list-forms.html'
})
export class ListFormsIonic implements OnInit {
  selectedItem: any;
  forms:any =['Medpass-oasis','sample'];
  ngOnInit(){
    this.selectedItem = this.navParams.get('name');
    console.log(this.selectedItem);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  itemTapped(form) {
    console.log("listForm",form);
    this.navCtrl.push(RenderFormIonic,{name:form});
  }


}
