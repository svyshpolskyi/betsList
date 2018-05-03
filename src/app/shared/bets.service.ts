import { Bet } from './bet.model';
import { EventEmitter } from '@angular/core';

export class BetsService {
    betSubmitted = new EventEmitter<{}>();
    private bets = [];

    getAllBets() {
        return this.bets;
    }

    getLastBet() {
        return this.bets[this.bets.length - 1];
    }

    addNewBet(date, bet) {
        const finalBet = {};
        finalBet[date] = bet;
        this.bets.push(finalBet);
        this.betSubmitted.emit(this.bets.slice());
        console.log(this.bets);
    }

}
