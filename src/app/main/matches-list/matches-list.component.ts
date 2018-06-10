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
  selectedMatches2 = {};

  constructor(private matchesService: MatchesService,
    private betsService: BetsService) {
  }

  ngOnInit() {
    this.matches = this.matchesService.getMatches();
    this.competitions = _.keys(this.matches);
  }

  clearSelection() {
    this.matches = this.matchesService.getMatches();
  }

  // onResultSelected(match: Match) {
  //   if (this.selectedMatches.length === 0) {
  //     this.selectedMatches.push(match);
  //   } else {
  //     const newMatch = this.selectedMatches.find(
  //       (selectedMatch, index) => {
  //         if (selectedMatch.matchId === match.matchId) {
  //           if (!(match.results.t1 || match.results.d || match.results.t2)) {
  //             this.selectedMatches.splice(index, 1);
  //             return selectedMatch.matchId === match.matchId;
  //           } else {
  //             this.selectedMatches.splice(index, 1, match);
  //             return selectedMatch.matchId === match.matchId;
  //           }
  //         } else if (index === (this.selectedMatches.length - 1)) {
  //           this.selectedMatches.push(match);
  //           return true;
  //         }
  //       }
  //     );
  //   }
  // }

  onResultSelected($event) {
    const array = this.selectedMatches.filter(
      (item) => item.matchId === $event.matchId
    );
    if (array.length === 0) {
      this.selectedMatches = [... this.selectedMatches, $event];
    } else {
      this.selectedMatches = ($event.results.t1 || $event.results.d || $event.results.t2) ?
        [... this.selectedMatches.filter((item) => item.matchId !== $event.matchId), $event] :
        [... this.selectedMatches.filter((item) => item.matchId !== $event.matchId)];
    }

    console.log(this.selectedMatches);
    this.selectedMatches2 = {
      ... this.selectedMatches2,
      [$event.id]: $event.selectedResult,
    };
  }

    submitBet(): void {
      this.betsService.addNewBet(_.cloneDeep(this.selectedMatches));
      this.selectedMatches = [];
    }

  }
