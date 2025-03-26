import { Injectable, OnInit, inject } from '@angular/core';
import { AlarmsService } from './alarms.service';
import { RingingService } from './ringing.service';

@Injectable({
  providedIn: 'root',
})
export class TimeKeepingService {
  alarmsService = inject(AlarmsService);
  rigingService = inject(RingingService);
  date = new Date();

  constructor() {
    setInterval(() => {
      this.date = new Date();
      this.checkAlarms();
    }, 1000);
  }

  getDate() {
    return this.date;
  }

  async checkAlarms() {
    let indexToRing = -1;
    const alarmsList = this.alarmsService.alarmsList;
    for (let index = 0; index < alarmsList.length; index++) {
      const timeDiference =
        alarmsList[index].timeToRing.getTime() - this.date.getTime();
      if (timeDiference <= 0) {
        indexToRing = index;
      } else {
        break;
      }
    }
    //if (indexToRing > -1) {
      const alarmsToRing = this.alarmsService.alarmsList.splice(0, indexToRing+1);
      this.rigingService.addRingingAlarm(alarmsToRing);
    //}
  }
}
