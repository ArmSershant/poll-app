import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllpollComponent } from './poll/components/allpoll/allpoll.component';
import { AddpollComponent } from './poll/components/addpoll/addpoll.component';
import { ActivepollComponent } from './poll/components/activepoll/activepoll.component';

const routes: Routes = [
  { path: '', redirectTo: '/all-poll', pathMatch: 'full' },
  { path: 'all-poll', component: AllpollComponent },
  { path: 'add-poll', component: AddpollComponent },
  { path: 'active-poll', component: ActivepollComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
