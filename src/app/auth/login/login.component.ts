import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/AppStore/app.state';
import { loginAction, signupAction } from '../authStore/auth.actions';
import { activateSpinnerAction } from 'src/app/AppStore/Shared/shared.actions';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private activatedRouter: ActivatedRoute
  ) {}

  loginForm!: FormGroup;
  isSignupForm: boolean = false;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });

    this.activatedRouter.params.subscribe((params) => {
      console.log(params);
      if (params['signup']) {
        this.isSignupForm = true;
      }
    });
  }

  onSubmitLoginForm(form: FormGroup) {
    this.store.dispatch(activateSpinnerAction({ showSpinner: true }));
    if (this.isSignupForm) {
      this.store.dispatch(
        signupAction({
          id: form.value.email,
          password: form.value.password,
        })
      );
    } else {
      this.store.dispatch(
        loginAction({
          id: form.value.email,
          password: form.value.password,
        })
      );
    }
  }
}
