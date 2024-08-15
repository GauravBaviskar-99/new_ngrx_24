import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/AppStore/app.state';
import { getUser } from '../authStore/auth.selectors';
import { map } from 'rxjs';

export const authguardGuard: CanActivateFn = (route, state) => {
  const store = inject(Store<AppState>);
  const router = inject(Router);

  return store.select(getUser).pipe(
    map((isAuthenticated: boolean) => {
      if (isAuthenticated) {
        return true;
      } else {
        router.navigate(['/auth'], {
          queryParams: {
            retrunUrl: state.url,
          },
        });

        return false;
      }
    })
  );
};
