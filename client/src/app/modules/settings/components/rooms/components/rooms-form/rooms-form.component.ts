import { Component } from '@angular/core';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'app-rooms-form',
  imports: [ButtonComponent],
  templateUrl: './rooms-form.component.html',
  styleUrl: './rooms-form.component.scss',
})
export class RoomsFormComponent {}
