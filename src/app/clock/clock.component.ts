import { Component, inject } from '@angular/core';
import { TimeKeepingService } from '../time-keeping.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent {
  timeKeeping = inject(TimeKeepingService);
  constructor() {
  }

}
