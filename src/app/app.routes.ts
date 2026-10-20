import { Routes } from '@angular/router';
import { IncreaseComponent } from '../components/increase/increase';
import { DecreaseComponent } from '../components/decrease/decrease';

export const routes: Routes = [
  { path: 'increase', component: IncreaseComponent },
  { path: 'decrease', component: DecreaseComponent },
  { path: '', redirectTo: 'increase', pathMatch: 'full' }
];