import { Component } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-v16-new-features';
}
