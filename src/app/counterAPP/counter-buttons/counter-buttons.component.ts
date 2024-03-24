import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  DecrementAction,
  IncrementAction,
  ResetAction,
} from '../CounterStore/counter.actions';
import { counterState } from '../CounterStore/counter.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css'],
})
export class CounterButtonsComponent {
  constructor(private store: Store<{ counter: counterState }>) {}

  onIncrement() {
    this.store.dispatch(IncrementAction());
  }

  onDecrement() {
    this.store.dispatch(DecrementAction());
  }

  onReset() {
    this.store.dispatch(ResetAction());
  }
}
