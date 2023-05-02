import { createAction, props } from '@ngrx/store';
import { Poll } from 'src/app/poll/models/poll.model';

// Load polls
export const loadPolls = createAction('[All Polls Component] load polls');

export const loadPollsSuccess = createAction(
  '[All Polls Component] load polls succeses',
  props<{ polls: Poll[] }>()
);

export const loadPollsFailure = createAction(
  '[All Polls Component] load polls failure',
  props<{ error: string }>()
);

// Load only active polls
export const loadActivePolls = createAction(
  '[All Poll Component] load active polls'
);

export const loadActivePollsSuccess = createAction(
  '[All Polls Component] load active polls succeses',
  props<{ activePolls: Poll[] }>()
);

export const loadActivePollsFailure = createAction(
  '[All Polls Component] load active polls failure',
  props<{ error: string }>()
);

// Add poll
export const addPoll = createAction(
  '[Add Poll Component] add poll ',
  props<{ poll: Poll }>()
);

export const addPollSuccess = createAction(
  '[Add Poll Component] add poll success',
  props<{ poll: Poll }>()
);

export const addPollFailure = createAction(
  '[Add Poll Component] add poll failure',
  props<{ error: string }>()
);

// Change poll status
export const changeStatus = createAction(
  '[All Poll Component] change poll status',
  props<{ poll: Poll }>()
);

export const changeStatusSuccess = createAction(
  '[All Poll Component] change poll status success',
  props<{ poll: Poll }>()
);

export const changeStatusFailure = createAction(
  '[All Poll Component] change poll status failure',
  props<{ error: string }>()
);

// Vote
export const vote = createAction(
  '[Active Poll Component] vote',
  props<{ poll: Poll; optionId: number }>()
);

export const voteSuccess = createAction(
  '[Active Poll Component] vote success',
  props<{ poll: Poll }>()
);

export const voteFailure = createAction(
  '[Active Poll Component] vote failure',
  props<{ error: string }>()
);
