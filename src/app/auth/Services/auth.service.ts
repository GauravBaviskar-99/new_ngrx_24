import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/AppStore/app.state';
import { authResponse } from 'src/app/models/authResponse.model';
import { User } from 'src/app/models/user.model';
import { logoutAction } from '../authStore/auth.actions';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  expirationTimeInterval!: any;
  constructor(
    private http: HttpClient,
    private store: Store<AppState>,
    private router: Router
  ) {}

  login(email: string, password: string): Observable<authResponse> {
    return this.http.post<authResponse>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBUf0d-Yvq35PkxpGbwDhiVetDDpRIWsgY`,
      {
        email,
        password,
        returnSecureToken: true,
      }
    );
  }

  formatUser(res: authResponse): User {
    const expirationDate = new Date(
      new Date().getTime() + +res.expiresIn * 1000
    ).toLocaleString();
    const user = new User(res.email, res.idToken, res.localId, expirationDate);
    return user;
  }

  signUp(email: string, password: string): Observable<authResponse> {
    return this.http.post<authResponse>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBUf0d-Yvq35PkxpGbwDhiVetDDpRIWsgY`,
      {
        email,
        password,
        returnSecureToken: true,
      }
    );
  }

  setUserToLocalStorage(user: User) {
    localStorage.setItem('userData', JSON.stringify(user));
    this.scheduleLogout(user);
  }

  scheduleLogout(user: User) {
    const todayDate = new Date().getTime();
    const expirationDate = new Date(user.expirationDate).getTime();
    const expirationPeriod = expirationDate - todayDate;

    this.expirationTimeInterval = setTimeout(() => {
      //Logout or refresh token
      this.logout();
    }, expirationPeriod);
  }
  logout() {
    localStorage.removeItem('userData');
    this.store.dispatch(logoutAction());
    this.router.navigate(['/auth']);
  }
}
