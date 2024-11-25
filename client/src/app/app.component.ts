import { Component } from '@angular/core';
import { NavListComponent } from './components/nav-list/nav-list.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [NavListComponent, RouterOutlet, NavbarComponent],
})
export class AppComponent {}
