import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Feeds} from '../classes/feeds';
import {Http, RequestOptions, URLSearchParams} from '@angular/http';
import {environment} from '../../environments/environment';

@Injectable()
export class DataService {

  public static V1_FEEDS_SPORTSBOOK_EVENT_LIVE_JSONP = 'v1/feeds/sportsbook/event/live.jsonp';


  private feedsSubject = new BehaviorSubject<Feeds>(null);
  feeds$ = this.feedsSubject.asObservable();

  constructor(
    private http: Http
  ) { }


  getFeeds() {


    const params: URLSearchParams = new URLSearchParams();
    params.set('app_id', 'ca7871d7');
    params.set('app_key', '5371c125b8d99c8f6b5ff9a12de8b85a');

    const options = new RequestOptions();
    options.params = params;

    this.http.get(environment.serverUrl + DataService.V1_FEEDS_SPORTSBOOK_EVENT_LIVE_JSONP, options)
      .map(data => data.json())
      .subscribe((feeds: Feeds) => {

        console.log(feeds);
          this.feedsSubject.next(feeds);

      });


  }

}
