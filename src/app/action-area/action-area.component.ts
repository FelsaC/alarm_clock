import { Component , inject} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlarmModalComponent } from '../alarm-modal/alarm-modal.component';
import { FormControl, FormGroup } from '@angular/forms';
import { RingingService } from '../ringing.service';

@Component({
  selector: 'app-action-area',
  templateUrl: './action-area.component.html',
  styleUrls: ['./action-area.component.css']
})
export class ActionAreaComponent {
  ringingService = inject(RingingService);
  readonly dialog = inject(MatDialog);
  applyAlarm = new FormGroup({
  });
  openDialog() {
    const dialogRef = this.dialog.open(AlarmModalComponent, {minWidth: '300px', maxWidth: '400px'});
  }

  clear() {
    this.ringingService.clearAll();
  }
}
