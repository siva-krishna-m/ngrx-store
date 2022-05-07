import { AuthService } from './../../services/auth.service';
import { loginStart, loginSuccess } from './auth.actions';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs';

@Injectable()

export class AuthEffects {

  constructor(private actions$: Actions, private auth: AuthService) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(ofType(loginStart),
    exhaustMap((action) => {
      return this.auth.login(action.email, action.password).pipe(
        map((data) => {
          return loginSuccess()
        })
      )
    })
    )
  })
}
