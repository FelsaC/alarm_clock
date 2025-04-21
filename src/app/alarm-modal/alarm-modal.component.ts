import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AlarmsService } from '../alarms.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

const alarmClockStyling = {
  dial: {
    dialBackgroundColor: 'var(--background)',
  },
  clockFace: {
    clockFaceBackgroundColor: 'var(--background)',
    clockHandColor: 'var(--danger)',
    clockFaceTimeInactiveColor: '#fff',
  },
  container: {
    bodyBackgroundColor: 'var(--background)',
    buttonColor: '#AAA',
  },
};

@Component({
  selector: 'app-alarm-modal',
  templateUrl: './alarm-modal.component.html',
  styleUrls: ['./alarm-modal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlarmModalComponent {
  alarmsService = inject(AlarmsService);
  selectedDay: Date | null;
  hoursTime: Date = new Date;
  alarmClock = alarmClockStyling;
  applyAlarm = new FormGroup({
    time: new FormControl(),
    name: new FormControl(),
  });

  constructor(public dialogRef: MatDialogRef<AlarmModalComponent>) {
    this.selectedDay = new Date();
    this.selectedDay.setHours(0);
    this.selectedDay.setMinutes(0);
    this.selectedDay.setSeconds(0);
  }

  newAlarm() {
    const timeDate = new Date(Date.parse(`1970-01-01T${this.applyAlarm.value.time}:00Z`));
    const timeDayDate = new Date(Number(timeDate) + Number(this.selectedDay));
    
    this.alarmsService.addAlarm(
      timeDayDate,
      this.applyAlarm.value.name
    )
    this.dialogRef.close();
  }
}
