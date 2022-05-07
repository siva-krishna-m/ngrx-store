import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { counterState } from '../state/counter.state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter!: number;
  counter$!: Observable<counterState>;

  constructor(private store: Store<{counter: counterState}>) { }

  ngOnInit() {
   this.counter$ = this.store.select('counter')
  }

}
