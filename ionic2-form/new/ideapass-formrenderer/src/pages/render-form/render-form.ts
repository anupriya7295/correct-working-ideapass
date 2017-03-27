import { Component ,OnInit ,ViewEncapsulation} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Response} from '@angular/http';

@Component({
  selector: 'page-render-form',
  templateUrl: 'render-form.html',
  encapsulation: ViewEncapsulation.None
})
export class RenderFormIonic implements OnInit{
  selectedItem: any;
  form:any;
  renderForm:any;
  data:any;

  ngOnInit(){
      this.selectedItem = this.navParams.get('name');
      this.http.get('assets/json/'+this.selectedItem+'.json')
      .map((res: Response) => res.json())
      .subscribe((res: Response) => {
        console.log(res);
           this.data=res;
          //  this.setStyles(this.data.css);
           this.form = this.data;
           console.log(this.form);
           this.renderForm = true;
      },
      (err) => {
        console.log("Error in service",err);
      },
      () => {
        console.log("getData function loaded correctl");
      }
      );
      //this.src="http://localhost/assets/json/"+this.selectedItem+".json"

  }

  constructor(public navCtrl: NavController, public navParams: NavParams,public http : Http) {
  }
  setStyles(cssText: any) {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.setAttribute('scoped', 'true');
    style.appendChild(document.createTextNode(cssText));
    console.log(  document.getElementById('form-renderer-outer-div'));
    document.getElementById('form-renderer-outer-div').appendChild(style);
  }

}
