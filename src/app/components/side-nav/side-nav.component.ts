import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  networking: boolean = false;
  rewards: boolean = false;
  gamification: boolean = false;
  feedback: boolean = false;
  desk: boolean = false;
  timeTraking: boolean = false;
  carPooling: boolean = false;

  constructor(public router: Router) {}
  ngOnInit(): void {
    console.log(this.router.url);
    if (this.router.url === '/networking') {
      console.log('networking');
      this.networking = true;
    }
    this.networking = true;
    this.router.navigate(['/networking']);
  }

  navigate(route: any) {
    this.router.navigate([route]);
    switch (route) {
      case 'networking':
        this.networking = true;
        this.rewards = false;
        this.gamification = false;
        this.feedback = false;
        this.desk = false;
        this.timeTraking = false;
        this.carPooling = false;
        break;
      case 'rewards':
        this.networking = false;
        this.rewards = true;
        this.gamification = false;
        this.feedback = false;
        this.desk = false;
        this.timeTraking = false;
        this.carPooling = false;
        break;
      case 'gamification':
        this.networking = false;
        this.rewards = false;
        this.gamification = true;
        this.feedback = false;
        this.desk = false;
        this.timeTraking = false;
        this.carPooling = false;
        break;
      case 'feedback':
        this.networking = false;
        this.rewards = false;
        this.gamification = false;
        this.feedback = true;
        this.desk = false;
        this.timeTraking = false;
        this.carPooling = false;
        break;
      case 'desk':
        this.networking = false;
        this.rewards = false;
        this.gamification = false;
        this.feedback = false;
        this.desk = true;
        this.timeTraking = false;
        this.carPooling = false;
        break;
      case 'time-traking':
        this.networking = false;

        this.rewards = false;
        this.gamification = false;
        this.feedback = false;
        this.desk = false;
        this.timeTraking = true;
        this.carPooling = false;
        break;
      case 'car-pooling':
        this.networking = false;
        this.rewards = false;
        this.gamification = false;
        this.feedback = false;
        this.desk = false;
        this.timeTraking = false;
        this.carPooling = true;
        break;

      default:
        break;
    }
  }
}
