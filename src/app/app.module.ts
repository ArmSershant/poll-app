import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PollModule } from './poll/poll.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { PollEffects } from './store/pollStore/poll.effects';
import { PollReducer } from './store/pollStore/poll.reducers';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({
      polls: PollReducer,
    }),
    EffectsModule.forRoot([PollEffects]),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [PollModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
