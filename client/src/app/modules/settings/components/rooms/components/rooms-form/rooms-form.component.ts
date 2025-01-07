import { Component, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { Room } from '../../models/room.model';

@Component({
  selector: 'app-rooms-form',
  imports: [ButtonComponent, ReactiveFormsModule],
  templateUrl: './rooms-form.component.html',
  styleUrl: './rooms-form.component.scss',
})
export class RoomsFormComponent {
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

  @Input() room: Room | null = null;

  ngOnInit() {
    this.setupHeaderText();
  }

  setupHeaderText() {
    if (this.room == null) this.headerText = 'Add new room';
    else this.headerText = 'Update room';
  }

  submitForm() {
    console.log('FORM', this.roomForm);
  }
}
