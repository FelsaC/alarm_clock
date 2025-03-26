import { Component, inject } from '@angular/core';
import { AlarmsService } from '../alarms.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
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
}
