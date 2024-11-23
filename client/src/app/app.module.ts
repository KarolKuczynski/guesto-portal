import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { NavListComponent } from './components/nav-list/nav-list.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { GuestComponent } from './components/guest/guest.component';

@NgModule({
  declarations: [
    AppComponent,
    NavListComponent,
    DashboardComponent,
    RegistrationComponent,
    GuestComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NoopAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
