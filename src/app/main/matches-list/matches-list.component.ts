import { Match } from './../../shared/match.model';
import { BetsService } from './../../shared/bets.service';
import { Component, OnInit } from '@angular/core';
import { MatchesService } from './matches-list.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-matches-list',
  templateUrl: './matches-list.component.html',
  styleUrls: ['./matches-list.component.scss']
})
export class MatchesListComponent implements OnInit {
  matches;
  competitions;
  selectedMatches = [];

  constructor(private matchesService: MatchesService,
              private betsService: BetsService) {
  }

  ngOnInit() {
    this.matches = this.matchesService.getMatches();
    this.competitions = _.keys(this.matches);
  }

  clearSelection() {
    this.matches =  this.matchesService.getMatches();
  }

  onResultSelected(match: Match) {
    if (this.selectedMatches.length > 0) {
    for (let i = 0; i < this.selectedMatches.length; i++) {
      if (this.selectedMatches[i].matchId === match.matchId) {
        this.selectedMatches.splice(i, 1);
      } else {
        this.selectedMatches.push(match);
      }
    }
  } else {this.selectedMatches.push(match); }
    console.log(this.selectedMatches);


  }

  submitBet(): void {
    const clonedMatches = _.cloneDeep(this.matches);
    const flattenedMatches = (_.values(clonedMatches)).reduce((acc, cur) => acc.concat(cur));
    console.log(flattenedMatches);
    this.betsService.addNewBet(new Date, flattenedMatches);
  }

}
