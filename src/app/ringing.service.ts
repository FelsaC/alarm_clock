import { Injectable } from '@angular/core';
import { IAlarm } from './app.Interfaces';

@Injectable({
  providedIn: 'root',
})
export class RingingService {
  ringingList: Array<IAlarm>;
  constructor() {
    this.ringingList = [];
  }
  addRingingAlarm (alarms: Array<IAlarm>) {
    this.ringingList = this.ringingList.concat(alarms);
  }

  clearAll () {
    this.ringingList = [];
  }

  dismissAlarm (index: number) {
    this.ringingList.splice(index, 1)
  }
}
