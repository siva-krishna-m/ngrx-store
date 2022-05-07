import { AuthModule } from './auth/auth.module';
import { CounterModule } from './counter/counter.module';
import { environment } from './../environments/environment';
import { HeaderComponent } from './shared/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './store/app.state';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production
    }),
    FormsModule,
    ReactiveFormsModule,
    CounterModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
