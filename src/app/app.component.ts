import { Component } from '@angular/core';

import { BetItem } from './core/interfaces/bet-item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  betData: BetItem[] = [];

  onBetSubmitted(betData): void {
    this.betData = betData;
  }

}
