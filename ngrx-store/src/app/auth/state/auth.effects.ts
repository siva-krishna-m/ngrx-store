import { setLoadingSpinner, setErrorMessage } from './../../store/shared.actions';
import { AppState } from './../../store/app.state';
import { AuthService } from './../../services/auth.service';
import { loginStart, loginSuccess } from './auth.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private auth: AuthService, private store: Store<AppState>) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.auth.login(action.email, action.password).pipe(
          map((data) => {
            const user = this.auth.formatUser(data);
            this.store.dispatch(setLoadingSpinner({status: false}));
            return loginSuccess({ user });
          }),
          catchError((err: any) => {
            this.store.dispatch(setLoadingSpinner({status: false}));
            const errorMessage = this.auth.getErrorMessage(err.error.error.message);
            return of(setErrorMessage({message: errorMessage}))
          })
        );
      })
    );
  });
}
