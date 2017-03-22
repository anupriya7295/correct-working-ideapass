import { Component ,ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<router-outlet></router-outlet>',
    encapsulation: ViewEncapsulation.None
})
export class App {
}
