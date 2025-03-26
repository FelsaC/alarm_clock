import { Injectable } from '@angular/core';
import { IAlarm } from './app.Interfaces';

@Injectable({
  providedIn: 'root',
})
export class AlarmsService {
  alarmsList: Array<IAlarm>;

  constructor() {
    this.alarmsList = [
      {
        timeToRing: new Date(Date.now() + 7 * (60 * 60 * 1000)),
        name: 'janta',
      },
      {
        timeToRing: new Date(Date.now() + 2 * (60 * 60 * 1000)),
        name: 'almoço',
      },
    ];
  }

  addAlarm(timeToRing: Date, name: string) {
    this.alarmsList.push({ timeToRing, name });
    this.alarmsList = this.alarmsList.sort(
      (a, b) => a.timeToRing.getTime() - b.timeToRing.getTime()
    );
  }

  removeAlarm (index: number) {
    this.alarmsList.splice(index, 1);
  }

  
}
