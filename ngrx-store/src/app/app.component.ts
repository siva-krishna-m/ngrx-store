import { Observable } from 'rxjs';
import { getLoading } from './store/shared.selector';
import { AppState } from './store/app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-store';
  showLoading$!: Observable<any>;
  constructor(private store: Store<AppState>) {}


ngOnInit() {
  this.showLoading$ = this.store.select(getLoading);
}
}
