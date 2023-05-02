import { createSelector } from '@ngrx/store';
import { IState } from '../state/state';
import { PollState } from '../state/pollState';

const selectPolls = (state: IState) => state.polls;
export const selectAllPolls = createSelector(
  selectPolls,
  (state: PollState) => {
    return state.polls;
  }
);

export const selectAllActivePolls = createSelector(
  selectPolls,
  (state: PollState) => {
    return state.activePolls;
  }
);
