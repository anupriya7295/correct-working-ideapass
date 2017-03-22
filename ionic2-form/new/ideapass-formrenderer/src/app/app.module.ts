import { NgModule } from '@angular/core';
import { IonicApp, IonicModule} from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { ListFormsIonic } from '../pages/list-forms/list-forms';
import { RenderFormIonic } from '../pages/render-form/render-form';
import { FormioModule } from 'ng2-formio';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
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
    ItemDetailsPage,
    ListPage,
    ListFormsIonic,
    RenderFormIonic
  ],
  providers: []
})
export class AppModule {}
