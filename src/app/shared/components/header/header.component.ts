import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/AppStore/app.state';
import { getUser } from 'src/app/auth/authStore/auth.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  isloggedIn!: Observable<boolean>;
  ngOnInit(): void {
    this.isloggedIn = this.store.select(getUser);
  }
}
