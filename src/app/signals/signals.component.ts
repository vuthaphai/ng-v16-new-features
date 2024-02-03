import { NgFor } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
  actions = signal<string[]>([]); //create Signals
  counter = signal(0); //create Signals

  //computed: to produce new value
  doubleCounter = computed(() => this.counter() * 2);

  constructor() {
    //effect: to run code when signals value change
    effect(() => console.log(this.counter()));
  }

  increment() {
    //Update Signals
    // this.counter.update((oldCounter) => oldCounter + 1);
    this.counter.set(this.counter() + 1);
    this.actions.mutate((oldActions) => {
      oldActions.push('INCREMENT');
    });
  }

  decrement() {
    // this.counter.update((oldCounter) => oldCounter - 1);
    this.counter.set(this.counter() - 1);
    this.actions.update((oldActions) => [...oldActions, 'DECREMENT']);
  }
}
