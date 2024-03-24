import { Component, OnInit } from '@angular/core';
import { counterState } from '../CounterStore/counter.state';
import { Store } from '@ngrx/store';
import { InputIncrementAction } from '../CounterStore/counter.actions';

@Component({
  selector: 'app-counter-input-increment',
  templateUrl: './counter-input-increment.component.html',
  styleUrls: ['./counter-input-increment.component.css'],
})
export class CounterInputIncrementComponent implements OnInit {
  public incrementBy: number = 0;
  constructor(public store: Store<{ counter: counterState }>) {}
  ngOnInit(): void {}

  IncrementBy() {
    this.store.dispatch(InputIncrementAction({ value: this.incrementBy }));
  }
}
