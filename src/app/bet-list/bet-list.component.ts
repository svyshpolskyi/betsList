import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-bet-list',
  templateUrl: './bet-list.component.html',
  styleUrls: ['./bet-list.component.css']
})
export class BetListComponent implements OnInit {
  betList: any;
  @Input() betData;
  constructor() { }
  ngOnInit() {
    this.betList = _.values(this.betData);
  }

}
