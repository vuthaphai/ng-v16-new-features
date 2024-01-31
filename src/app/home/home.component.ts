import { Component, OnInit, computed, effect, signal } from '@angular/core';
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
  // title: string = ''; //normal variable
  titleChangeEffect = effect(() => {
    console.log('titleChangeEffect', this.title());
  });

  totalUsers = computed(() => this.users().length);

  changeTitle(event: Event) {
    const title = (event.target as HTMLInputElement).value;
    this.title.set(title);
    // this.title = title;
  }

  ngOnInit(): void {
    setTimeout(() => {
      // this.users.set([{ id: '1', name: 'Foo' }]); // first way to assing values to users
      // this.users.update((prevUsers) => [
      //   ...prevUsers,
      //   { id: '1', name: 'Foo' },
      // ]); // second way to assing values to users

      this.users.mutate((currentUsers) =>
        currentUsers.push({ id: '1', name: 'Foo' })
      );

      console.log(this.users());
    }, 2000);
  }
}
