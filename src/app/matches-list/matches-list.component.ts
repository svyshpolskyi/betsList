import { Component, EventEmitter, Output} from '@angular/core';

import { BetItem } from '../core/interfaces/bet-item.interface';

@Component({
  selector: 'app-matches-list',
  templateUrl: './matches-list.component.html',
  styleUrls: ['./matches-list.component.css']
})
export class MatchesListComponent {
  matches: BetItem[] = [
    {team1: 'Tottenham', team2: 'Juventus', bids: { t1: false, d: false, t2: false }},
    {team1: 'Manchester United', team2: 'Sevilla', bids: { t1: false, d: false, t2: false }},
    {team1: 'AS Roma', team2: 'Shakhtar Donetsk', bids: { t1: false, d: false, t2: false }}];
  selectedMatches: BetItem[] = [];

  @Output() betSubmitted = new EventEmitter<BetItem[]>();

  addBet(match: BetItem, res: string): void {
    for (const mat in match.bids ) {
      if (mat === res) {
        match.bids[mat] = !match.bids[mat];
      } else {
        match.bids[mat] = false;
      }
    }

  }

  submitBet(): void {
    this.matches.forEach(el => {
      if (Object.values(el.bids).some(bid => bid)) {
        this.selectedMatches.push(JSON.parse(JSON.stringify(el)));
      }
    });
    this.betSubmitted.emit(this.selectedMatches);
    this.selectedMatches = [];
  }

}
