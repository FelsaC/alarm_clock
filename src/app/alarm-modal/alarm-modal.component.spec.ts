import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmModalComponent } from './alarm-modal.component';

describe('AlarmModalComponent', () => {
  let component: AlarmModalComponent;
  let fixture: ComponentFixture<AlarmModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlarmModalComponent]
    });
    fixture = TestBed.createComponent(AlarmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
