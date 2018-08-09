import {Injectable} from '@angular/core';
import {Event} from '../model/Event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() {
  }

  get(): Promise<Event[]> {
    return Promise.resolve([
      {id: '1', start_date: '2018-08-01 00:00', end_date: '2018-08-01 13:00', text: 'Event 1'},
      {id: '2', start_date: '2018-08-03 00:00', end_date: '2018-08-03 13:00', text: 'Event 2'},
    ]);
  }
}
