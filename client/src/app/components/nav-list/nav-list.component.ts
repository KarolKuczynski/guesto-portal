import { Component } from '@angular/core';
import { Menu } from './model/menu.model';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss'],
})
export class NavListComponent {
  menu: Menu[] = [
    { name: 'home', description: 'Home', icon: 'home', link: '' },
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
      link: 'rooms',
    },
  ];
  subMenu: Menu[] = [
    {
      name: 'rooms',
      description: 'Rooms',
      icon: 'meeting_room',
      link: 'rooms',
    },
    {
      name: 'prices',
      description: 'Prices',
      icon: 'price_change',
      link: 'prices',
    },
  ];

  selectedMenuOpt: string = 'home';
  selectedSubMenuOpt: string = 'rooms';

  setMenu(opt: string) {
    this.selectedMenuOpt = opt;

    if (opt === 'settings') this.selectedSubMenuOpt = 'rooms';
  }

  setSubMenu(opt: string) {
    this.selectedSubMenuOpt = opt;
  }
}
