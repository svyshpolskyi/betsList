import { Component, OnInit } from '@angular/core';
import { UserinfoService } from './userinfo.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  userBets = [];

  constructor(private userinfoService: UserinfoService) { }

  ngOnInit() {
    this.userinfoService.betSubmitted
      .subscribe(
        (bet) =>  {
          this.userBets.push(bet);
        }
      );
  }

}
