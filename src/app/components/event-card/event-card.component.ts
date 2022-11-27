import { MOCK_EVENT_DATA } from './../../shared/event-card-constants';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { expand } from 'rxjs';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {


  opened: boolean = false;
  openedS: boolean = true;
  mockDataA = MOCK_EVENT_DATA;
  color: ThemePalette = 'accent';
  
  ngOnInit(){

  }

  handleOpen(): void {
    this.opened = !this.opened;
  }

  handleOpenS() {
    this.openedS = !this.openedS;
  }
}
