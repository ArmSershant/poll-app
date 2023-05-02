import { Component } from '@angular/core';
import { Poll } from '../../models/poll.model';
import { IState } from 'src/app/store/state/state';
import { Store } from '@ngrx/store';
import { addPoll } from 'src/app/store/pollStore/poll.actions';

@Component({
  selector: 'app-addpoll',
  templateUrl: './addpoll.component.html',
  styleUrls: ['./addpoll.component.css'],
})
export class AddpollComponent {
  constructor(private store: Store<IState>) {}
  onAddPoll(newPoll: any) {
    let poll = new Poll(
      0,
      newPoll.question,
      [
        {
          id: 0,
          option: newPoll.answer1,
          voteCount: 0,
          pollId: 0,

        },
        {
          id: 0,
          option: newPoll.answer2,
          voteCount: 0,
          pollId: 0,

        },
        {
          id: 0,
          option: newPoll.answer3,
          voteCount: 0,
          pollId: 0,

        },
      ],
      false,
      false,

    );
    this.store.dispatch(addPoll({ poll }));
  }
}
