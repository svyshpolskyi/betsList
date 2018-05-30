import * as _ from 'lodash';

export class MatchesService {
  private matches = {
    'Champions League': [
      { matchId: 1, team1: 'Tottenham', team2: 'Juventus', results: { t1: false, d: false, t2: false } },
      { matchId: 2, team1: 'Manchester United', team2: 'Sevilla', results: { t1: false, d: false, t2: false } },
      { matchId: 3, team1: 'AS Roma', team2: 'Shakhtar Donetsk', results: { t1: false, d: false, t2: false } }
    ],
    'Premier League': [
      { matchId: 4, team1: 'Crystal Palace', team2: 'Liverpool', results: { t1: false, d: false, t2: false } },
      { matchId: 5, team1: 'Brighton', team2: 'Leicester', results: { t1: false, d: false, t2: false } },
      { matchId: 6, team1: 'Stoke', team2: 'Newcastle', results: { t1: false, d: false, t2: false } }
    ],
    'Europa League': [
      { matchId: 7, team1: 'Marseille', team2: 'Salzburg', results: { t1: false, d: false, t2: false } },
      { matchId: 8, team1: 'Arsenal', team2: 'Atletico Madrid', results: { t1: false, d: false, t2: false } },
    ]
  };
  getMatches() {
    return _.cloneDeep(this.matches);
  }
}
