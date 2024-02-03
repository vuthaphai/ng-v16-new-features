import { Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { SignalsComponent } from './signals/signals.component';

export const routes: Routes = [
  { path: '', redirectTo: 'default', pathMatch: 'full' },
  { path: 'default', component: DefaultComponent },
  { path: 'signals', component: SignalsComponent },
];
