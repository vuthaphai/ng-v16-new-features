import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [DashboardComponent, AboutComponent, HomeComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
