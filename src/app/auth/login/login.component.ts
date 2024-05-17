import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/AppStore/app.state';
import { loginAction } from '../authStore/auth.actions';
import { activateSpinnerAction } from 'src/app/AppStore/Shared/shared.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  loginForm!: FormGroup;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmitLoginForm(form: FormGroup) {
    this.store.dispatch(activateSpinnerAction({ showSpinner: true }));

    this.store.dispatch(
      loginAction({
        id: form.value.email,
        password: form.value.password,
      })
    );
  }
}
