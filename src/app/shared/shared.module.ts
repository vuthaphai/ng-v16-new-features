import { NgModule } from '@angular/core';

import { HighlightDirective } from './highlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HighlightDirective, HeaderComponent],
  imports: [RouterModule],
  exports: [HighlightDirective, HeaderComponent],
})
export class SharedModule {}
