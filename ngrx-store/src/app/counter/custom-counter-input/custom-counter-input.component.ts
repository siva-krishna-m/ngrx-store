import { changeName, customIncrement } from './../state/counter.actions';
import { counterState } from './../state/counter.state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {

  value!: number;
  name!: string;

  constructor(private store: Store<{counter: counterState}>) { }

  ngOnInit() {
  }

  addValue() {
    this.store.dispatch(customIncrement({value: this.value}));
  }

  changeName() {
    this.store.dispatch(changeName({ name: this.name }));
  }

}
