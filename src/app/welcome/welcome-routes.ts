import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: WelcomeComponent },
];
