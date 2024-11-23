import { Component } from '@angular/core';
import { NavListComponent } from './components/nav-list/nav-list.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [NavListComponent, RouterOutlet]
})
export class AppComponent {}
