import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
