import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms.component';
import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsListComponent } from './components/rooms-list/rooms-list.component';
import { RoomsFormComponent } from './components/rooms-form/rooms-form.component';

@NgModule({
    imports: [CommonModule, RoomsRoutingModule, RoomsComponent, RoomsListComponent, RoomsFormComponent],
})
export class RoomsModule {}
