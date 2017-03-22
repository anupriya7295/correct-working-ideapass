import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'home',
    template: `

    Welcome to Idea Paas <a routerLink="/list-forms">Forms</a>
  `
})
export class HomeComponent {

}
