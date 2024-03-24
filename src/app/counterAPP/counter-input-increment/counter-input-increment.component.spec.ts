import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterInputIncrementComponent } from './counter-input-increment.component';

describe('CounterInputIncrementComponent', () => {
  let component: CounterInputIncrementComponent;
  let fixture: ComponentFixture<CounterInputIncrementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterInputIncrementComponent]
    });
    fixture = TestBed.createComponent(CounterInputIncrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
