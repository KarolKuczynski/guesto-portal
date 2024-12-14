import { Component } from '@angular/core';
import { Menu } from './model/menu.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss'],
  imports: [RouterLink, CommonModule],
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

  selectedOption: string = 'home';

  setMenu(opt: string) {
    this.selectedOption = opt;
  }
}
