import { Component } from '@angular/core';
import { CounterService } from '../../services/counter';

@Component({
  selector: 'app-increase',
  imports: [],
  templateUrl: './increase.html'
})
export class IncreaseComponent {
  constructor(public counterService: CounterService) {}
}