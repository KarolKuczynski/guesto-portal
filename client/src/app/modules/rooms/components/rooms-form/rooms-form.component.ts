import { Component } from '@angular/core';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'app-rooms-form',
  templateUrl: './rooms-form.component.html',
  styleUrls: ['./rooms-form.component.scss'],
  imports: [ButtonComponent],
})
export class RoomsFormComponent {}
