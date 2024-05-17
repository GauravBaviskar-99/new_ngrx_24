import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { authResponse } from 'src/app/models/authResponse.model';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

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
}
