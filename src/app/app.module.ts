import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MatchesListComponent } from './matches-list/matches-list.component';
import { BetListComponent } from './bet-list/bet-list.component';
import { HeaderComponent } from './header/header.component';
import { HighlightDirective } from './directives/highlight.directive';
import { MenuHighlightDirective } from './directives/highlightMenuItem.directive';


@NgModule({
  declarations: [
    AppComponent,
    MatchesListComponent,
    BetListComponent,
    HeaderComponent,
    HighlightDirective,
    MenuHighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
