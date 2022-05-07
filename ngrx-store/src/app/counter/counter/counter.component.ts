import { getName } from './../state/counter.selectors';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCounter } from '../state/counter.selectors';
import { counterState } from '../state/counter.state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter!: number;
  counter$!: Observable<number>;
  name$!: Observable<string>;

  constructor(private store: Store<{counter: counterState}>) { }

  ngOnInit() {
   this.counter$ = this.store.select(getCounter);
   this.name$ = this.store.select(getName)
  }

}
