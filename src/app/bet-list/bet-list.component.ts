import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-bet-list',
  templateUrl: './bet-list.component.html',
  styleUrls: ['./bet-list.component.css']
})
export class BetListComponent {
  @Input() betList;
  // betList: any = _.values(this.betData);
  constructor() { }

}
