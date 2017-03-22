import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'home',
    template: `

    Welcome to Idea Paas <a routerLink="/listforms">Forms</a>
  `
})
export class HomeComponent {

}
