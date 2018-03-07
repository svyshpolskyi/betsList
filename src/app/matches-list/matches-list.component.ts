import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-matches-list',
  templateUrl: './matches-list.component.html',
  styleUrls: ['./matches-list.component.css']
})
export class MatchesListComponent implements OnInit {
  @Output() betSubmitted = new EventEmitter<{}>();
  matches = [{team1: 'Tottenham', team2: 'Juventus'},
            {team1: 'Manchester United', team2: 'Sevilla'},
            {team1: 'AS Roma', team2: 'Shakhtar Donetsk'}];

bets = [];
result = '';

addBet(event, match, firstTeam, draw, secondTeam) {
  const resultsArr = [firstTeam, draw, secondTeam];
  resultsArr.map(element => {
    if (element === event.target) {
      element.setAttribute('selected', '');
    } else {
      element.removeAttribute('selected');
    }
  });
  this.result = 'test';
  this.bets.push({
    match: `${match.team1} - ${match.team2}`,
    selectedResult: event.target.innerText
  });
}

submitBet() {
  console.log(this.bets);
  this.betSubmitted.emit(this.bets);
  this.bets = [];
}
  constructor() { }

  ngOnInit() {
  }

}
