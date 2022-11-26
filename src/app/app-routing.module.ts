import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarPoolingComponent } from './components/car-pooling/car-pooling.component';
import { DeskComponent } from './components/desk/desk.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { GamificationComponent } from './components/gamification/gamification.component';
import { NetworkingComponent } from './components/networking/networking.component';
import { RewardsComponent } from './components/rewards/rewards.component';
import { TimeTrakingComponent } from './components/time-traking/time-traking.component';

const routes: Routes = [
  { path: 'networking', component: NetworkingComponent },
  { path: 'rewards', component: RewardsComponent },
  { path: 'gamification', component: GamificationComponent },
  { path: 'time-traking', component: TimeTrakingComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'car-pooling', component: CarPoolingComponent },
  { path: 'desk', component: DeskComponent },
  { path: '', redirectTo: '/networking', pathMatch: 'full' },
  { path: '**', redirectTo: '/networking', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      enableTracing: false,
      onSameUrlNavigation: 'reload',
      useHash: true,
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
