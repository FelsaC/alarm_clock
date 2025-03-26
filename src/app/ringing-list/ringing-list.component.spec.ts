import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RingingListComponent } from './ringing-list.component';

describe('RingingListComponent', () => {
  let component: RingingListComponent;
  let fixture: ComponentFixture<RingingListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RingingListComponent]
    });
    fixture = TestBed.createComponent(RingingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
