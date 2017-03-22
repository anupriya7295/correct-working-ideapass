import { AppComponent } from './appcomponent/component/app.component';
import { HomeComponent } from './homecomponent/component/home.component';
import { ListFormComponent }from './listAllForm/component/listform.component'

export const AppRoutes = [
    { path: '', component: HomeComponent },
    { path: 'renderer/:entityType', component: AppComponent },
    { path: 'renderer/:entityType/:id', component: AppComponent },
    { path: 'list-forms', component: ListFormComponent }
];
