import { Component, Input, OnDestroy } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { Room } from '../../models/room.model';
import { RoomService } from '../../services/room.service';
import { Subscription } from 'rxjs';
import { RoomApiService } from 'src/app/modules/settings/services/room.api.service';
import { CreateRoom } from '../../models/create.room.model';

@Component({
  selector: 'app-rooms-form',
  imports: [ButtonComponent, ReactiveFormsModule],
  templateUrl: './rooms-form.component.html',
  styleUrl: './rooms-form.component.scss',
})
export class RoomsFormComponent implements OnDestroy {
  headerText: string = '';
  roomForm = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    roomNo: new FormControl<string>('', [Validators.required]),
    adultsMaxNo: new FormControl<number>(1, [
      Validators.required,
      Validators.min(1),
      Validators.max(8),
    ]),
    childrenMaxNo: new FormControl<number>(1, [
      Validators.required,
      Validators.min(1),
      Validators.max(3),
    ]),
  });

  selectedRoomSubscribe: Subscription | null = null;

  room: Room | null = null;

  constructor(
    private roomService: RoomService,
    private roomApiService: RoomApiService
  ) {}

  ngOnInit() {
    this.selectedRoomSubscribe = this.roomService.selectedRoom$.subscribe(
      (selectedRoom) => {
        this.room = selectedRoom;

        this.setupHeaderText();
        this.setupForm();
      }
    );
  }

  ngOnDestroy(): void {
    if (this.selectedRoomSubscribe != null) {
      this.selectedRoomSubscribe.unsubscribe();
      this.selectedRoomSubscribe = null;
    }
  }

  setupHeaderText() {
    if (this.room == null) this.headerText = 'Add new room';
    else this.headerText = 'Update room';
  }

  setupForm() {
    this.roomForm.patchValue({
      ...this.room,
      adultsMaxNo: this.room?.adults,
      childrenMaxNo: this.room?.children,
    });
  }

  submitForm() {
    this.roomApiService
      .addRoom(<CreateRoom>this.roomForm.value)
      .subscribe(() => {
        this.roomForm.reset();
        this.roomService.unselectRoom();
      });
  }
}
