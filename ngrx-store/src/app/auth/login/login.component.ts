import { setLoadingSpinner } from './../../store/shared.actions';
import { getLoading } from './../../store/shared.selector';
import { loginStart } from './../state/auth.actions';
import { AppState } from './../../store/app.state';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private store: Store<AppState>) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
   }

  ngOnInit() {
  }

  login() {
    this.store.dispatch(setLoadingSpinner({status: true}));
    this.store.dispatch(loginStart(this.loginForm.value))
  }

}
