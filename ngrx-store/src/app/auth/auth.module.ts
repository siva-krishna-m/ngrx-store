import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
