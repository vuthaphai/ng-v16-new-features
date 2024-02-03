import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { DetailsComponent } from './details/details.component';
import { WelcomeComponent } from './welcome.component';

@NgModule({
  declarations: [WelcomeComponent, DetailsComponent],
  imports: [CommonModule, WelcomeRoutingModule],
})
export class WelcomeModule {}
