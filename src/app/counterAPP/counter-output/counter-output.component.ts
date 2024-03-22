import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit {
  counter: number = 0;
  constructor(private Store: Store<{ counter: { counter: number } }>) {}
  ngOnInit(): void {
    this.Store.select('counter').subscribe((counterState) => {
      this.counter = counterState.counter;
    });
  }
}
