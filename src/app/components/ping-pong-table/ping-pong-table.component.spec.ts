import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PingPongTableComponent } from './ping-pong-table.component';

describe('PingPongTableComponent', () => {
  let component: PingPongTableComponent;
  let fixture: ComponentFixture<PingPongTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PingPongTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PingPongTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
