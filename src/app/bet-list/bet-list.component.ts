import { Component, Input } from '@angular/core';

import { BetItem } from '../core/interfaces/bet-item.interface';

@Component({
  selector: 'app-bet-list',
  templateUrl: './bet-list.component.html',
  styleUrls: ['./bet-list.component.css']
})
export class BetListComponent {
  @Input() betData: BetItem[];

}
