import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { counterState } from '../CounterStore/counter.state';
import { getCounterSelector } from '../CounterStore/counter.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit {
  counter$!: Observable<number>;
  constructor(private Store: Store<{ counter: counterState }>) {}
  ngOnInit(): void {
    this.counter$ = this.Store.select(getCounterSelector);
  }
}
