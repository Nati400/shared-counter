import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CounterService {
  count: number = 0;

  increase(): void {
    this.count++;
  }

  decrease(): void {
    this.count--;
  }
}