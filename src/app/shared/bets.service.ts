import { Bet } from './bet.model';
import { EventEmitter } from '@angular/core';
import * as _ from 'lodash';

export class BetsService {
    betSubmitted = new EventEmitter<any>();
    private bets: {}[] = [];

    getAllBets() {
        return this.bets;
    }

    getLastBet() {
        return this.bets[this.bets.length - 1] ? this.bets[this.bets.length - 1] : {};
    }

    addNewBet(date, bet) {
        let finalBet = {};
        const selectedMatches = _.filter(bet, (match) => match.results.t1 || match.results.d || match.results.t2);
        finalBet = { 'date': date, 'bet': selectedMatches };
        this.bets.push(finalBet);
        this.betSubmitted.emit(this.bets);
    }

}
