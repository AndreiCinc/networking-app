import { Component } from '@angular/core';

interface Games {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-gamification',
  templateUrl: './gamification.component.html',
  styleUrls: ['./gamification.component.scss']
})
export class GamificationComponent {

  selectedValue= '';
  selectedCar: string | undefined;

  games: Games[] = [
    {value: 'ping-pong-0', viewValue: 'Ping Pong'},
    {value: 'footsball-1', viewValue: 'FootsBall'},
    {value: 'darts-2', viewValue: 'Darts'},
  ];

  cars: Car[] = [
    {value: 'volvo', viewValue: 'Volvo'},
    {value: 'saab', viewValue: 'Saab'},
    {value: 'mercedes', viewValue: 'Mercedes'},
  ];
}
