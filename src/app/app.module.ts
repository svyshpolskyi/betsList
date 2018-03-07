import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MatchesListComponent } from './matches-list/matches-list.component';
import { BetListComponent } from './bet-list/bet-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MatchesListComponent,
    BetListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
