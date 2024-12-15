import { Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GuestComponent } from './components/guest/guest.component';
import { RegistrationComponent } from './components/registration/registration.component';

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
    path: 'rooms',
    loadChildren: () =>
      import('./modules/rooms/rooms.module').then((m) => m.RoomsModule),
  },
  {
    path: 'prices',
    loadChildren: () =>
      import('./modules/prices/prices.module').then((m) => m.PricesModule),
  },
  { path: '', component: DashboardComponent, title: 'Dashboard' },
];
