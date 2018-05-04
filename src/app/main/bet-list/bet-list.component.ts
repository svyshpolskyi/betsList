import { BetsService } from './../../shared/bets.service';
import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-bet-list',
  templateUrl: './bet-list.component.html',
  styleUrls: ['./bet-list.component.css']
})
export class BetListComponent implements OnInit {
  // @Input() betList;
  // betList: any = _.values(this.betData);
  newBet;
  renderedBet;

  constructor(private betsService: BetsService) { }

  ngOnInit() {
    // this.renderedBet = [{'team1': '', 'team2': '', 'results': {'t1': false, 'd': false, 't2': false}}];
    this.newBet = this.betsService.getLastBet();
    this.renderedBet = _.values(this.newBet)[0] ? _.values(this.newBet)[0] : [];
    console.log(this.newBet);
    this.betsService.betSubmitted
    .subscribe(
      (bets) => {
        this.newBet = bets[bets.length - 1];
      }
    );
    console.log(this.renderedBet);
  }

}
