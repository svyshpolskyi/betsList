import { BetsService } from './../../shared/bets.service';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-bet-list',
  templateUrl: './bet-list.component.html',
  styleUrls: ['./bet-list.component.scss']
})
export class BetListComponent implements OnInit {
  newBet: {} = {};

  constructor(private betsService: BetsService) { }

  ngOnInit() {
    this.newBet = this.betsService.getLastBet();
    this.betsService.betSubmitted
      .subscribe(
        (bets) => {
          this.newBet = bets[bets.length - 1];
        }
      );
  }

}
