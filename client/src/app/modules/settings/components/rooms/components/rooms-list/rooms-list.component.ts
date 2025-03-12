import { Component, Input } from '@angular/core';
import { Room } from '../../models/room.model';
import { CheckComponent } from 'src/app/shared/components/check/check.component';
import { RoomService } from '../../services/room.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rooms-list',
  imports: [CheckComponent, CommonModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
})
export class RoomsListComponent {
  @Input() rooms: Room[] = [];
  selectedRoomId: number | null = null;

  columns: string[] = ['Name', 'RoomNo', 'Adults', 'Children', 'Active'];

  selectedRoomSubscribe: Subscription | null = null;

  constructor(private roomService: RoomService) {}

  ngOnInit() {
    this.selectedRoomSubscribe = this.roomService.selectedRoom$.subscribe(
      (selectedRoom) => {
        this.selectedRoomId = selectedRoom ? selectedRoom.id : null;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.selectedRoomSubscribe != null) {
      this.selectedRoomSubscribe.unsubscribe();
      this.selectedRoomSubscribe = null;
    }
  }

  loadRoom(room: Room) {
    this.roomService.selectRoom(room);
  }
}
