import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ClockComponent } from './clock/clock.component';
import { RingingListComponent } from './ringing-list/ringing-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import { AlarmModalComponent } from './alarm-modal/alarm-modal.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ClockComponent,
    RingingListComponent,
    AlarmModalComponent,
    CalendarComponent,
    TimePickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
