import { Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GuestComponent } from './components/guest/guest.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SettingsComponent } from './modules/settings/settings.component';

export const routes: Routes = [
  {
    path: 'registration',
    component: RegistrationComponent,
    title: 'Registration Panel',
  },
  {
    path: 'guest',
    component: GuestComponent,
    title: 'Guest Registration',
  },
  {
    path: 'prices',
    loadChildren: () =>
      import('./modules/prices/prices.module').then((m) => m.PricesModule),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./modules/settings/settings.component').then(
        (m) => m.SettingsComponent
      ),
    title: 'Settings',
  },
  { path: '', component: DashboardComponent, title: 'Dashboard' },
];
