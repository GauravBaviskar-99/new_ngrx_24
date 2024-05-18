import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './AppStore/app.state';
import {
  getErrorMessage,
  getSpinnerState,
} from './AppStore/Shared/shared.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'new_ngrx_24';
  spinnerStatus!: Observable<boolean>;
  errorMessage!: Observable<string>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.spinnerStatus = this.store.select(getSpinnerState);
    this.errorMessage = this.store.select(getErrorMessage);
  }
}
