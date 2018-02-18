import {MatchClock} from './match-clock';
import {Score} from './score';
import {Statistics} from './statistics';


export class LiveData {

  eventId: number;
  open: boolean;
  matchClock: MatchClock;
  score: Score;
  statistics: Statistics;

}
