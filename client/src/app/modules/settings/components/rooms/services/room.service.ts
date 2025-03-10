import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Room } from '../models/room.model';

@Injectable()
export class RoomService {
  selectedRoom$ = new BehaviorSubject<Room | null>(null);

  constructor() {}

  selectRoom(room: Room) {
    this.selectedRoom$.next(room);
  }

  unselectRoom() {
    this.selectedRoom$.next(null);
  }
}
