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
  constructor(private betsService: BetsService) { }

  ngOnInit() {
    this.newBet = this.betsService.getLastBet();
    console.log(this.newBet);
  }

}
