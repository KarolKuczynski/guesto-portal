import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms.component';
import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsListComponent } from './components/rooms-list/rooms-list.component';
import { RoomsFormComponent } from './components/rooms-form/rooms-form.component';

import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [RoomsComponent, RoomsListComponent, RoomsFormComponent],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
})
export class RoomsModule {}
