export class Match {
    constructor(public matchId: number,
        public team1: string,
        public team2: string,
        public results: {
            t1: boolean,
            d: boolean,
            t2: boolean
        }) {}
}
