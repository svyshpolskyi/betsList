import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bet-list',
  templateUrl: './bet-list.component.html',
  styleUrls: ['./bet-list.component.css']
})
export class BetListComponent implements OnInit {
  @Input() betData;
  constructor() { }

  ngOnInit() {
  }

}
