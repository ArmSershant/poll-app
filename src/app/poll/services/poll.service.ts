import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Poll } from '../models/poll.model';

@Injectable({
  providedIn: 'root',
})
export class PollService {
  constructor(private http: HttpClient) {}
  private url = 'http://localhost:3000/polls';

  getPolls(): Observable<Poll[]> {
    return this.http.get<Poll[]>(`${this.url}`);
  }

  getActivePolls(): Observable<Poll[]> {
    return this.http.get<Poll[]>(`${this.url}/activepolls`);
  }

  createPoll(poll: Poll) {
    return this.http.post(`${this.url}/create`, poll);
  }

  changeStatus(poll: Poll) {
    return this.http.put<Poll>(`${this.url}/change/${poll.id}`, poll);
  }

  vote(poll: Poll, optionId: number) {
    return this.http.put<Poll>(
      `${this.url}/change/${poll.id}/vote/${optionId}`,
      poll
    );
  }
}
