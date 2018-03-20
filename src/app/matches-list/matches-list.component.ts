import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-matches-list',
  templateUrl: './matches-list.component.html',
  styleUrls: ['./matches-list.component.css']
})
export class MatchesListComponent {

  matches = {
    ChampionsLeague: [
      {team1: 'Tottenham', team2: 'Juventus', results: { t1: false, d: false, t2: false }},
      {team1: 'Manchester United', team2: 'Sevilla', results: { t1: false, d: false, t2: false }},
      {team1: 'AS Roma', team2: 'Shakhtar Donetsk', results: { t1: false, d: false, t2: false }}
    ],
    PremiereLeague: [
      {team1: 'Crystal Palace', team2: 'Liverpool', results: { t1: false, d: false, t2: false }},
      {team1: 'Brighton', team2: 'Leicester', results: { t1: false, d: false, t2: false }},
      {team1: 'Newcastle', team2: 'Newcastle', results: { t1: false, d: false, t2: false }}
    ]
  };

  @Output() betSubmitted = new EventEmitter<{}>();

  addBet(match: {team1: string, team2: string, results: {t1: boolean, d: boolean, t2: boolean}}, selectedResult: string): void {
    for (const result in match.results) {
      if (result === selectedResult) {
        match.results[result] = !match.results[result];
      } else {
        match.results[result] = false;
      }
    }
  }

  submitBet(): void {
    const clonedMatches = _.cloneDeep(this.matches);
    this.betSubmitted.emit(clonedMatches);
  }
  constructor() { }

}
