import { Component } from '@angular/core';
import { Menu } from './model/menu.model';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss'],
  imports: [RouterLink, RouterLinkActive],
})
export class NavListComponent {
  constructor() {}

  menu: Menu[] = [
    { name: 'home', description: 'Dashboard', icon: 'home', link: '' },
    {
      name: 'reg',
      description: 'Registration',
      icon: 'app_registration',
      link: 'registration',
    },
    { name: 'guest', description: 'Guest', icon: 'person', link: 'guest' },
    {
      name: 'settings',
      description: 'Settings',
      icon: 'settings',
      link: 'settings',
    },
  ];
}
