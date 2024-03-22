import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  DecrementAction,
  IncrementAction,
  ResetAction,
} from '../CounterStore/counter.actions';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css'],
})
export class CounterButtonsComponent {
  constructor(private store: Store<{ counter: { counter: number } }>) {}

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
