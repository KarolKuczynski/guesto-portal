import { Component } from '@angular/core';
import { Room } from './models/room.model';

@Component({
    selector: 'app-rooms',
    templateUrl: './rooms.component.html',
    styleUrls: ['./rooms.component.scss'],
    standalone: false
})
export class RoomsComponent {
  rooms: Room[] = [
    { id: 1, name: 'Room 1', roomNo: '1', adults: 2, children: 0 },
    { id: 2, name: 'Room 2A', roomNo: '2A', adults: 1, children: 0 },
    { id: 3, name: 'Room 2B', roomNo: '2B', adults: 1, children: 0 },
    { id: 4, name: 'Room 3', roomNo: '3', adults: 2, children: 0 },
    { id: 5, name: 'Room 4', roomNo: '4', adults: 2, children: 0 },
    { id: 6, name: 'Room 5', roomNo: '5', adults: 2, children: 0 },
    { id: 7, name: 'Room 6', roomNo: '6', adults: 2, children: 0 },
    { id: 8, name: 'Room 7', roomNo: '7', adults: 2, children: 2 },
    { id: 9, name: 'Room 8', roomNo: '8', adults: 2, children: 2 },
    { id: 10, name: 'Room 9A', roomNo: '9A', adults: 4, children: 2 },
    { id: 11, name: 'Room 9B', roomNo: '9B', adults: 4, children: 2 },
  ];

  ngOnInit() {}
}
