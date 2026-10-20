import { Injectable, signal } from '@angular/core';
import { ICounter } from '../models/icounter';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter = signal<ICounter>({
    value: 0,
    lastUpdated: 'Not updated yet'
  });

  increase(): void {
    this.counter.update(counter => ({
      value: counter.value + 1,
      lastUpdated: new Date().toLocaleTimeString()
    }));
  }

  decrease(): void {
    this.counter.update(counter => ({
      value: counter.value - 1,
      lastUpdated: new Date().toLocaleTimeString()
    }));
  }
}