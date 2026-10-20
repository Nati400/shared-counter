import { Component } from '@angular/core';
import { CounterService } from '../../services/counter';

@Component({
  selector: 'app-decrease',
  imports: [],
  templateUrl: './decrease.html'
})
export class DecreaseComponent {
  constructor(public counterService: CounterService) {}
}