import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-alarm-modal',
  templateUrl: './alarm-modal.component.html',
  styleUrls: ['./alarm-modal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlarmModalComponent {
  selectedDay: Date | null;

  constructor() {
    this.selectedDay = new Date();
    this.selectedDay.setHours(0);
    this.selectedDay.setMinutes(0);
    this.selectedDay.setSeconds(0);
  }

}
