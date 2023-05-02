import { Component } from '@angular/core';
import { Poll } from '../../models/poll.model';
import { Observable } from 'rxjs/internal/Observable';
import { IState } from 'src/app/store/state/state';
import { Store } from '@ngrx/store';
import { selectAllPolls } from 'src/app/store/pollStore/poll.selectors';
import { changeStatus, loadPolls } from 'src/app/store/pollStore/poll.actions';

@Component({
  selector: 'app-allpoll',
  templateUrl: './allpoll.component.html',
  styleUrls: ['./allpoll.component.css'],
})
export class AllpollComponent {
  polls$: Observable<Poll[]>;

  constructor(private store: Store<IState>) {
    this.polls$ = this.store.select(selectAllPolls);
  }

  ngOnInit() {
    this.store.dispatch(loadPolls());
  }

  toggleStatus(poll: Poll) {
    this.store.dispatch(changeStatus({ poll }));
  }
}
