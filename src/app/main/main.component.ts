import { Component } from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
  })

export class MainComponent {
    betData = [];
  onBetSubmitted(betData) {
    this.betData = betData;
  }
}
