import { createReducer, on } from '@ngrx/store';
import { PollState } from '../state/pollState';
import {
  loadActivePollsSuccess,
  loadPollsSuccess,
  voteSuccess,
} from './poll.actions';
import { Poll } from 'src/app/poll/models/poll.model';

export const initialState: PollState = {
  poll: {} as Poll,
  polls: [],
  activePolls: [],
};

export const PollReducer = createReducer(
  initialState,
  on(loadPollsSuccess, (state, { polls }) => ({ ...state, polls })),
  on(loadActivePollsSuccess, (state, { activePolls }) => ({
    ...state,
    activePolls,
  })),
  on(voteSuccess, (state, { poll }) => {
    return {
      ...state,
      activePolls: state.activePolls.map((el) => {
        if (el.id == poll.id) {
          let obj = { ...el };
          obj.voted = true;
          return obj;
        }
        return el;
      }),
    };
  })
);
