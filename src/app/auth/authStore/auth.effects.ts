import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../Services/auth.service';
import {
  LOGIN_ACTION_START,
  loginAction,
  loginSucess,
  signupAction,
} from './auth.actions';
import { catchError, exhaustMap, map, mergeMap, of, tap } from 'rxjs';
import { authResponse } from 'src/app/models/authResponse.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/AppStore/app.state';
import {
  activateSpinnerAction,
  showErrorMessageAction,
} from 'src/app/AppStore/Shared/shared.actions';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginAction),
      exhaustMap((action) => {
        return this.authService.login(action.id, action.password).pipe(
          map((data: authResponse) => {
            this.store.dispatch(activateSpinnerAction({ showSpinner: false }));
            this.store.dispatch(showErrorMessageAction({ errorMessage: '' }));
            console.log(data);
            const user = this.authService.formatUser(data);
            this.authService.setUserToLocalStorage(user);
            return loginSucess({ user });
          }),
          catchError((error) => {
            this.store.dispatch(activateSpinnerAction({ showSpinner: false }));
            console.log(error);
            return of(
              showErrorMessageAction({
                errorMessage: error.error.error.message,
              })
            );
          })
        );
      })
    );
  });

  $loginSuccess = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loginSucess),
        tap((action) => {
          this.router.navigate(['/']);
        })
      );
    },
    { dispatch: false }
  );

  $signupEffect = createEffect(() => {
    return this.actions$.pipe(
      ofType(signupAction),
      exhaustMap((action) => {
        return this.authService.signUp(action.id, action.password).pipe(
          map((response) => {
            this.store.dispatch(activateSpinnerAction({ showSpinner: false }));
            this.store.dispatch(showErrorMessageAction({ errorMessage: '' }));
            this.authService.setUserToLocalStorage(
              this.authService.formatUser(response)
            );

            return loginSucess({ user: this.authService.formatUser(response) });
          }),
          catchError((error) => {
            this.store.dispatch(activateSpinnerAction({ showSpinner: false }));
            console.log(error);
            return of(
              showErrorMessageAction({
                errorMessage: error.error.error.message,
              })
            );
          })
        );
      })
    );
  });
}
