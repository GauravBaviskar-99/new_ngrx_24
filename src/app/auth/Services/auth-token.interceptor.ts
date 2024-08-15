import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, exhaustMap, map, mergeMap, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/AppStore/app.state';
import { getToken, getUser } from '../authStore/auth.selectors';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return this.store.select(getToken).pipe(
      take(1),
      exhaustMap((token) => {
        if (token) {
          let modifiedRequest = request.clone({
            params: request.params.append('auth', token),
          });
          return next.handle(modifiedRequest);
        }
        return next.handle(request);
      })
    );
  }
}
