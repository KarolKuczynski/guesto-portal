import { Component, Input } from '@angular/core';
import { Room } from '../../models/room.model';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
})
export class RoomsListComponent {
  @Input() rooms: Room[] = [];

  columns: string[] = ['Id', 'Name', 'RoomNo', 'Adults', 'Children'];
}
