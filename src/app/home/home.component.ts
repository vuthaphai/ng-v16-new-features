import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/component/header/header.component';
import { RouterModule } from '@angular/router';

interface UserInterface {
  id: string;
  name: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, RouterModule, HeaderComponent],
})
export class HomeComponent implements OnInit {
  title = signal('');

  users = signal<UserInterface[]>([]);
  // title: string = '';

  changeTitle(event: Event) {
    const title = (event.target as HTMLInputElement).value;
    this.title.set(title);
    // this.title = title;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.users.set([{ id: '1', name: 'Foo' }]);
      console.log(this.users());
    }, 2000);
  }
}
