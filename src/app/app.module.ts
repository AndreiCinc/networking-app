import { ContentComponent } from './components/content/content.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NetworkingComponent } from './components/networking/networking.component';
import { RewardsComponent } from './components/rewards/rewards.component';
import { GamificationComponent } from './components/gamification/gamification.component';
import { TimeTrakingComponent } from './components/time-traking/time-traking.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { CarPoolingComponent } from './components/car-pooling/car-pooling.component';
import { DeskComponent } from './components/desk/desk.component';

import {MatMenuModule} from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EventsComponent } from './components/events/events.component';
@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    NavBarComponent,
    ContentComponent,
    NetworkingComponent,
    RewardsComponent,
    GamificationComponent,
    TimeTrakingComponent,
    FeedbackComponent,
    CarPoolingComponent,
    DeskComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
