import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PollService } from 'src/app/poll/services/poll.service';
import {
  addPoll,
  addPollFailure,
  addPollSuccess,
  changeStatus,
  changeStatusFailure,
  changeStatusSuccess,
  loadActivePolls,
  loadActivePollsFailure,
  loadActivePollsSuccess,
  loadPolls,
  loadPollsFailure,
  loadPollsSuccess,
  vote,
  voteFailure,
  voteSuccess,
} from './poll.actions';
import { switchMap, map, catchError, of, mergeMap } from 'rxjs';
import { Poll } from 'src/app/poll/models/poll.model';

@Injectable()
export class PollEffects {
  constructor(private actions$: Actions, private pollService: PollService) {}

  loadPolls$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPolls),
      switchMap(() =>
        this.pollService.getPolls().pipe(
          map((polls) => loadPollsSuccess({ polls })),
          catchError((error) => of(loadPollsFailure(error)))
        )
      )
    )
  );

  loadActivePolls$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadActivePolls),
      switchMap(() =>
        this.pollService.getActivePolls().pipe(
          map((activePolls) => loadActivePollsSuccess({ activePolls })),
          catchError((error) => of(loadActivePollsFailure(error)))
        )
      )
    )
  );

  createPoll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addPoll),
      mergeMap((action) =>
        this.pollService.createPoll(action.poll).pipe(
          map((response) => addPollSuccess({ poll: response as Poll })),
          catchError((error) => of(addPollFailure(error)))
        )
      ),
      map(() => loadPolls())
    )
  );

  changeStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(changeStatus),
      switchMap((action) =>
        this.pollService.changeStatus(action.poll).pipe(
          map((poll) => changeStatusSuccess({ poll })),
          catchError((error) => of(changeStatusFailure(error)))
        )
      ),
      map(() => loadPolls())
    )
  );

  vote$ = createEffect(() =>
    this.actions$.pipe(
      ofType(vote),
      switchMap((action) =>
        this.pollService.vote(action.poll, action.optionId).pipe(
          map((poll) => {
            return loadActivePolls(), voteSuccess({ poll });
          }),
          catchError((error) => of(voteFailure(error)))
        )
      )
    )
  );
}
