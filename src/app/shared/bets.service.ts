import { Match } from './match.model';
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

    // addNewBet(bet) {
    //     let finalBet = {};
    //     const selectedMatches = _.filter(bet, (match) => match.results.t1 || match.results.d || match.results.t2);
    //     finalBet = { 'date': date, 'bet': selectedMatches };
    //     this.bets.push(finalBet);
    //     this.betSubmitted.emit(this.bets);
    // }

    addNewBet(matches: Match[]): void {
        this.bets.push({ 'date': new Date, 'bet': matches });
        this.betSubmitted.emit(this.bets);
        console.log(this.bets);
        
    }

}


