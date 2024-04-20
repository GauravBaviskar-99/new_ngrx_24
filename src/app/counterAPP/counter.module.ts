import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { CounterInputIncrementComponent } from './counter-input-increment/counter-input-increment.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterComponent } from './counter/counter.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './CounterStore/counter.reducer';

const routes: Routes = [
  {
    path: '',
    component: CounterComponent,
  },
];
@NgModule({
  declarations: [
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    CounterInputIncrementComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('counter', counterReducer),
  ],
})
export class counterModule {}
