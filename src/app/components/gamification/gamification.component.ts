import { Component } from '@angular/core';

interface Games {
  value: string;
  viewValue: string;
}

interface Months {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-gamification',
  templateUrl: './gamification.component.html',
  styleUrls: ['./gamification.component.scss']
})
export class GamificationComponent {
  lastGameEvents: boolean = true;
  pingPong: boolean = false;
  pool: boolean = false;

  selectedValue= '';
  selectedCar: string | undefined;

  games: Games[] = [
    {value: 'ping-pong-0', viewValue: 'Ping Pong'},
    {value: 'footsball-1', viewValue: 'FootsBall'},
    {value: 'darts-2', viewValue: 'Darts'},
  ];

  months: Months[] = [
    {value: 'january', viewValue: 'January'},
    {value: 'february', viewValue: 'February'},
    {value: 'march', viewValue: 'March'},
    {value: 'april', viewValue: 'April'},
    {value: 'may', viewValue: 'May'},
    {value: 'june', viewValue: 'June'},
    {value: 'july', viewValue: 'July'},
    {value: 'august', viewValue: 'August'},
    {value: 'september', viewValue: 'September'},
    {value: 'octomber', viewValue: 'Octomber'},
    {value: 'november', viewValue: 'November'},
    {value: 'december', viewValue: 'December'},
  ];

  changeGameEvents(table: any) {
    switch (table) {
      case 'lastGameEvents':
        this.lastGameEvents = true;
        this.pingPong = false;
        this.pool = false;
        break;
      case 'pingPong':
        this.lastGameEvents = false;
        this.pingPong = true;
        this.pool = false;
        break;
      case 'pool':
        this.lastGameEvents = false;
        this.pingPong = false;
        this.pool = true;
        break;
      default:
        break;

    }
  }
}