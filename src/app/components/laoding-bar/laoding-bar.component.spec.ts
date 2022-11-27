import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaodingBarComponent } from './laoding-bar.component';

describe('LaodingBarComponent', () => {
  let component: LaodingBarComponent;
  let fixture: ComponentFixture<LaodingBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaodingBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaodingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
