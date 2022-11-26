import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTrakingComponent } from './time-traking.component';

describe('TimeTrakingComponent', () => {
  let component: TimeTrakingComponent;
  let fixture: ComponentFixture<TimeTrakingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeTrakingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeTrakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
