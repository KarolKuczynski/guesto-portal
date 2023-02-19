import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GuestComponent } from './components/guest/guest.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'guest', component: GuestComponent },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
