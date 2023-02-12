import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GuestComponent } from './components/guest/guest.component';
import { PricesComponent } from './components/prices/prices.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RoomsComponent } from './components/rooms/rooms.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'guest', component: GuestComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'prices', component: PricesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
