import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/store/state/state';
import { Poll } from '../../models/poll.model';
import { Observable } from 'rxjs/internal/Observable';
import { loadActivePolls, vote, voteSuccess } from 'src/app/store/pollStore/poll.actions';
import { selectAllActivePolls } from 'src/app/store/pollStore/poll.selectors';

@Component({
  selector: 'app-activepoll',
  templateUrl: './activepoll.component.html',
  styleUrls: ['./activepoll.component.css'],
})
export class ActivepollComponent {
  activePolls$: Observable<Poll[]>;
  showResults: boolean = false;
  constructor(private store: Store<IState>) {
    this.activePolls$ = this.store.select(selectAllActivePolls);
  }

  ngOnInit() {
    this.store.dispatch(loadActivePolls());
  }

  onVote(poll: Poll, optionId: any) {
    this.store.dispatch(vote({ poll, optionId }));
  }
}
