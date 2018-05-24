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

  submitBet(): void {
    const clonedMatches = _.cloneDeep(this.matches);
    const flattenedMatches = (_.values(clonedMatches)).reduce((acc, cur) => acc.concat(cur));
    this.betsService.addNewBet(new Date, flattenedMatches);
  }

}
