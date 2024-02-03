import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { DetailsComponent } from './details/details.component';
import { WelcomeComponent } from './welcome.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [WelcomeComponent, DetailsComponent],
  imports: [CommonModule, WelcomeRoutingModule, SharedModule],
})
export class WelcomeModule {}
