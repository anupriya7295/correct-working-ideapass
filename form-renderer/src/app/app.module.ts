import { NgModule} from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";
import { FormioModule } from '../../node_modules/ng2-formio/dist/index.js';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';
import { App } from './app';
import { AppComponent } from './appcomponent/component/app.component';
import { HomeComponent } from './homecomponent/component/home.component';
import { ListFormComponent } from './listAllForm/component/listform.component';


import { AppRoutes } from './app.routes';

@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule, FormioModule, HttpModule,  RouterModule.forRoot(AppRoutes), Angular2FontAwesomeModule],
  declarations: [ App, AppComponent, HomeComponent, ListFormComponent ],
  bootstrap: [ App ]
})
export class AppModule { }
