import { Component, Input } from '@angular/core';
import { Room } from '../../models/room.model';
import { CheckComponent } from 'src/app/shared/components/check/check.component';

@Component({
  selector: 'app-rooms-list',
  imports: [CheckComponent],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
})
export class RoomsListComponent {
  @Input() rooms: Room[] = [];

  columns: string[] = ['Name', 'RoomNo', 'Adults', 'Children', 'Active'];

  loadRoom(room: Room) {}
}
