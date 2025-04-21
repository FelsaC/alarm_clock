import { Component, inject } from '@angular/core';
import { AlarmsService } from '../alarms.service';
import { FormControl, FormGroup} from '@angular/forms';
import { AlarmModalComponent } from '../alarm-modal/alarm-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  readonly dialog = inject(MatDialog);

  alarmsService = inject(AlarmsService);

  applyAlarm = new FormGroup({
    name: new FormControl(),
    time: new FormControl(),
  });

  newAlarm() {
    this.alarmsService.addAlarm(
      new Date(this.applyAlarm.value.time),
      this.applyAlarm.value.name
    );
  }

  delete(index: number) {
    this.alarmsService.removeAlarm(index);
  }

  openDialog() {
    const dialogRef = this.dialog.open(AlarmModalComponent, {minWidth: '300px'});
  }
}
