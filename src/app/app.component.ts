import {Component, OnInit} from '@angular/core';
import {DataService} from './services/data.service';
import {Observable} from 'rxjs/Observable';
import {LiveEvents} from './classes/live-events';
import {Feeds} from './classes/feeds';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  liveEvents$: Observable<LiveEvents[]>;

  constructor(
    private dataService: DataService
  ) {

  }


  ngOnInit(): void {

    this.dataService.getFeeds();
    this.liveEvents$ = this.dataService.feeds$.skip(1).map((feeds: Feeds) => feeds.liveEvents);
  }

}
