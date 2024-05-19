import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './AppStore/app.state';
import {
  getErrorMessage,
  getSpinnerState,
} from './AppStore/Shared/shared.selectors';
import { autoLoginAction } from './auth/authStore/auth.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth/Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'new_ngrx_24';
  spinnerStatus!: Observable<boolean>;
  errorMessage!: Observable<string>;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const userData = localStorage.getItem('userData');
    if (userData) {
      let user = JSON.parse(userData);
      this.authService.scheduleLogout(user);
      this.store.dispatch(autoLoginAction({ user: JSON.parse(userData) }));
    } else {
      this.router.navigate(['/auth']);
    }

    this.spinnerStatus = this.store.select(getSpinnerState);
    this.errorMessage = this.store.select(getErrorMessage);
  }
}
