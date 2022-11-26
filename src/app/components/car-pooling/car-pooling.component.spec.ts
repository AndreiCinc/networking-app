import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPoolingComponent } from './car-pooling.component';

describe('CarPoolingComponent', () => {
  let component: CarPoolingComponent;
  let fixture: ComponentFixture<CarPoolingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarPoolingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarPoolingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
