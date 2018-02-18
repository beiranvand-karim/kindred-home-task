import {Criterion} from './criterion';
import {BetOfferType} from './bet-offer-type';
import {Outcome} from './outcome';


export class MainBetOffer {


  id: number;
  eventId: number;
  main: boolean;
  live: boolean;
  startingPrice: boolean;
  criterion: Criterion;
  betOfferType: BetOfferType;
  outcomes: Outcome[];
  prematch: boolean;
  cashOutStatus: string;

}
