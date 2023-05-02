import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PollRoutingModule } from './poll-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AllpollComponent } from './components/allpoll/allpoll.component';
import { AddpollComponent } from './components/addpoll/addpoll.component';
import { ActivepollComponent } from './components/activepoll/activepoll.component';

@NgModule({
  declarations: [AllpollComponent, AddpollComponent, ActivepollComponent],
  imports: [FormsModule, CommonModule, PollRoutingModule, HttpClientModule],
})
export class PollModule {}
