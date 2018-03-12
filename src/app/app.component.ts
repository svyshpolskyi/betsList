import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  betData = [];
  selectedItem = 'matchesList';
  onNavigate(selectedItem: string) {
    this.selectedItem = selectedItem;
    console.log(selectedItem);
  }
  onBetSubmitted(betData) {
    this.betData = betData;
    console.log(betData);
  }
}
