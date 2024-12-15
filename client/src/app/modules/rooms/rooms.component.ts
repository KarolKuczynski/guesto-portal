import { Component } from '@angular/core';
import { RoomsListComponent } from './components/rooms-list/rooms-list.component';
import { RoomsFormComponent } from './components/rooms-form/rooms-form.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  imports: [RoomsListComponent, RoomsFormComponent],
})
export class RoomsComponent {
  ngOnInit() {}
}
