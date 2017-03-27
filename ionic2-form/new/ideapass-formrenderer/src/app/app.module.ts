import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FormioModule } from 'ng2-formio';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListFormsIonic } from '../pages/list-forms/list-forms';
import { RenderFormIonic } from '../pages/render-form/render-form';


@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ListFormsIonic,
    RenderFormIonic
  ],
  imports: [
    IonicModule.forRoot(MyApp),FormioModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ListFormsIonic,
    RenderFormIonic
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
