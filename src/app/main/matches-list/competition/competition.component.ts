import { Match } from './../../../shared/match.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { LogosService } from '../../../shared/logos.service';
@Component ({
    selector: 'app-competition',
    templateUrl: './competition.component.html',
    styleUrls: ['./competition.component.scss']
})
export class CompetitionComponent implements OnInit {
    logo: string;
    @Input() matches;
    @Input() competition;
    @Output() resultSelected = new EventEmitter<any>();
    constructor(private logoService: LogosService) {}
    ngOnInit() {
        this.logo = this.logoService.selectLogo(this.competition);
    }

    // addBet(match: Match, selectedResult: string): void {
    //     for (const result in match.results) {
    //       if (result === selectedResult) {
    //         match.results[result] = !match.results[result];
    //       } else {
    //         match.results[result] = false;
    //       }
    //     }
    //     this.resultSelected.emit(match);
    //   }

    addBet(data: {matchId: number, selectedResult: string}): void {
      // for (const result in match.results) {
      //   if (result === selectedResult) {
      //     match.results[result] = !match.results[result];
      //   } else {
      //     match.results[result] = false;
      //   }
      // }
      // console.log(data.matchId, data.selectedResult);
      this.resultSelected.emit({matchId: data.matchId, selectedResult: data.selectedResult} );
    }

}
