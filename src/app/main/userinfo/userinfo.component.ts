import { BetsService } from './../../shared/bets.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent implements OnInit {
  bets;
  dates;

  constructor(private betsService: BetsService) { }

  ngOnInit() {
    this.bets = this.betsService.getAllBets();
    this.betsService.betSubmitted
    .subscribe(
      (bets) => {
        this.bets = bets;
      }
    );
  }

}
