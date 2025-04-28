import { Component, inject } from '@angular/core';
import { AlarmsService } from '../alarms.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  readonly dialog = inject(MatDialog);

  alarmsService = inject(AlarmsService);


  delete(index: number) {
    this.alarmsService.removeAlarm(index);
  }


}
