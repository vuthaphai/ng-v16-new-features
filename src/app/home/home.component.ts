import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/component/header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, RouterModule, HeaderComponent],
})
export class HomeComponent {
  title = signal('');
  changeTitle(event: Event) {
    const title = (event.target as HTMLInputElement).value;
    this.title.set(title);
  }
}
