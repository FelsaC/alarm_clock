import { Component, inject } from '@angular/core';
import { RingingService } from '../ringing.service';

@Component({
  selector: 'app-ringing-list',
  templateUrl: './ringing-list.component.html',
  styleUrls: ['./ringing-list.component.css']
})
export class RingingListComponent {
  ringingService = inject(RingingService);

  clear() {
    this.ringingService.clearAll();
  }

  dismiss(index: number) {
    this.ringingService.dismissAlarm(index)
  }
}
