import { Component, Input, OnInit } from '@angular/core';
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
    constructor(private logoService: LogosService) {}
    ngOnInit() {
        this.logo = this.logoService.selectLogo(this.competition);
    }

    addBet(match: {team1: string, team2: string, results: {t1: boolean, d: boolean, t2: boolean}}, selectedResult: string): void {
        for (const result in match.results) {
          if (result === selectedResult) {
            match.results[result] = !match.results[result];
          } else {
            match.results[result] = false;
          }
        }
      }

}
