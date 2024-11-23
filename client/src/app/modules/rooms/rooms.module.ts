import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms.component';
import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsListComponent } from './components/rooms-list/rooms-list.component';
import { RoomsFormComponent } from './components/rooms-form/rooms-form.component';

@NgModule({
  declarations: [RoomsComponent, RoomsListComponent, RoomsFormComponent],
  imports: [CommonModule, RoomsRoutingModule],
})
export class RoomsModule {}
