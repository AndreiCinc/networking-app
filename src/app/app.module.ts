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
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';


import {MatSelectModule} from '@angular/material/select';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EventsComponent } from './components/events/events.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { LaodingBarComponent } from './components/laoding-bar/laoding-bar.component';
import { ArrowComponent } from './components/arrow/arrow.component';
import { TableComponent } from './components/table/table.component';
import { PingPongTableComponent } from './components/ping-pong-table/ping-pong-table.component';
import { PoolTableComponent } from './components/pool-table/pool-table.component';
import { DialogContentExample, DialogContentExampleDialog } from './components/add-event-modal/add-event-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialExampleModule } from './material.module';


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
    EventsComponent,
    EventCardComponent,
    LaodingBarComponent,
    ArrowComponent,
    TableComponent,
    PingPongTableComponent,
    PoolTableComponent,
    DialogContentExample,
    DialogContentExampleDialog
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatSelectModule,
    MatProgressBarModule,      
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatProgressBarModule,
    MatTableModule,
    MatChipsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
