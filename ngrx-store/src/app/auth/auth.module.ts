import { AuthEffects } from './state/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AUTH_STATE_NAME } from './state/auth.selectors';
import { AuthReducer } from './state/auth.reducer';

const routes: Routes = [
  { path: '', children: [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: "login", component: LoginComponent }
  ] }
]

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature(AUTH_STATE_NAME, AuthReducer),
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
