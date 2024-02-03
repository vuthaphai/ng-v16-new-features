import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/controls/button/button.component';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [ButtonComponent],
})
export class HomeComponent {}
