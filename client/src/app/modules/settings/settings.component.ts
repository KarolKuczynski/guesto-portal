import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RoomsComponent } from './components/rooms/rooms.component';

@Component({
  selector: 'app-settings',
  imports: [CommonModule, RoomsComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  options: string[] = ['Rooms', 'Option A', 'Option B', 'Option C', 'Option D'];
  selectedOptionIdx: number = 0;

  selectOption(index: number) {
    this.selectedOptionIdx = index;
  }
}
