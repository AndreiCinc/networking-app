import { MOCK_EVENT_DATA } from './../../shared/event-card-constants';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent {


  opened: boolean = true;
  mockData = MOCK_EVENT_DATA;


  handleOpen(): void {
    this.opened = !this.opened;
  }
}
