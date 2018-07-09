import { BetsService } from './../../shared/bets.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent implements OnInit {
  bets;
  dates;

  constructor(private betsService: BetsService,
              private router: Router
            ) {
            }

  ngOnInit() {
    this.bets = this.betsService.getAllBets();
    this.betsService.betSubmitted
    .subscribe(
      (bets) => {
        this.bets = bets;
      }
    );
  }

  returnToMain() {
    this.router.navigate(['/']);
  }





}
