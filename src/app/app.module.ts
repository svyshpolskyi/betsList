import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MatchesListComponent } from './main/matches-list/matches-list.component';
import { BetListComponent } from './main/bet-list/bet-list.component';
import { HeaderComponent } from './header/header.component';
import { HighlightDirective } from './directives/highlight.directive';
import { MenuHighlightDirective } from './directives/highlightMenuItem.directive';
import { MatchesService } from './main/matches-list/matches-list.service';
import { ToggleBlockDirective } from './directives/toggleBlock.directive';
import { CompetitionComponent } from './main/matches-list/competition/competition.component';
import { CompetitionLogoDirective } from './directives/competLogo.directive';
import { LogosService } from './shared/logos.service';
import { Routes, RouterModule } from '@angular/router';
import { UserinfoComponent } from './main/userinfo/userinfo.component';
import { MainComponent } from './main/main.component';
import { UserinfoService } from './main/userinfo/userinfo.service';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'userinfo', component: UserinfoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MatchesListComponent,
    CompetitionComponent,
    BetListComponent,
    HeaderComponent,
    UserinfoComponent,
    HighlightDirective,
    MenuHighlightDirective,
    ToggleBlockDirective,
    CompetitionLogoDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MatchesService,
              LogosService,
              UserinfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
