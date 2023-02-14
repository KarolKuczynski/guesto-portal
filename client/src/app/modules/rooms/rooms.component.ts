import { Component } from '@angular/core';
import { Room } from './models/room.model';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent {
  rooms: Room[] = [
    { id: 1, name: 'Room 1', badge: '1', adults: 2, children: 0 },
    { id: 2, name: 'Room 2A', badge: '2A', adults: 1, children: 0 },
    { id: 3, name: 'Room 2B', badge: '2B', adults: 1, children: 0 },
    { id: 4, name: 'Room 3', badge: '3', adults: 2, children: 0 },
    { id: 5, name: 'Room 4', badge: '4', adults: 2, children: 0 },
    { id: 6, name: 'Room 5', badge: '5', adults: 2, children: 0 },
    { id: 7, name: 'Room 6', badge: '6', adults: 2, children: 0 },
    { id: 8, name: 'Room 7', badge: '7', adults: 2, children: 2 },
    { id: 9, name: 'Room 8', badge: '8', adults: 2, children: 2 },
    { id: 10, name: 'Room 9A', badge: '9A', adults: 4, children: 2 },
    { id: 11, name: 'Room 9B', badge: '9B', adults: 4, children: 2 },
  ];

  ngOnInit() {}
}
