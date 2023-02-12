import { Component } from '@angular/core';
import { Menu } from './model/menu.model';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss'],
})
export class NavListComponent {
  menu: Menu[] = [
    { name: 'home', description: 'Home', icon: 'home' },
    { name: 'reg', description: 'Registration', icon: 'app_registration' },
    { name: 'guest', description: 'Guest', icon: 'person' },
    { name: 'settings', description: 'Settings', icon: 'settings' },
  ];
  subMenu: Menu[] = [
    { name: 'rooms', description: 'Rooms', icon: 'meeting_room' },
    { name: 'prices', description: 'Prices', icon: 'price_change' },
  ];

  selectedMenuOpt: string = 'home';
  selectedSubMenuOpt: string = 'rooms';

  setMenu(opt: string) {
    this.selectedMenuOpt = opt;
  }

  setSubMenu(opt: string) {
    this.selectedSubMenuOpt = opt;
  }
}
