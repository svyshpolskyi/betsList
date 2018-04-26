import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { MatchesService } from './matches-list.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-matches-list',
  templateUrl: './matches-list.component.html',
  styleUrls: ['./matches-list.component.css']
})
export class MatchesListComponent implements OnInit {
  matches;
  competitions;
  @Output() betSubmitted = new EventEmitter<{}>();

  constructor(private matchesService: MatchesService) {
  }

  ngOnInit() {
    this.matches = this.matchesService.getMatches();
    this.competitions = _.keys(this.matches);
  }

  addBet(match: {team1: string, team2: string, results: {t1: boolean, d: boolean, t2: boolean}}, selectedResult: string): void {
    for (const result in match.results) {
      if (result === selectedResult) {
        match.results[result] = !match.results[result];
      } else {
        match.results[result] = false;
      }
    }
  }

  clearSelection() {
    this.matches =  this.matchesService.getMatches();
  }

  submitBet(): void {
    const clonedMatches = _.cloneDeep(this.matches);
    this.betSubmitted.emit(_.values(clonedMatches));
  }

}
