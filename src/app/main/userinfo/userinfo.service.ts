import { EventEmitter } from '@angular/core';

export class UserinfoService {
    userBets = [];

    getBets() {
        return this.userBets;
    }
    addBet(bet, date) {
        const finalBet = {};
        finalBet[date] = bet;
        this.userBets.push(finalBet);
        console.log(this.userBets);
    }
}
