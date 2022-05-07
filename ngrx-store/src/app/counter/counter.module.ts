import { counterReducer } from './state/counter.reducer';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomCounterInputComponent } from './custom-counter-input/custom-counter-input.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterComponent } from './counter/counter.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { COUNTER_STATE } from './state/counter.selectors';

const routes: Routes = [
  { path: '', component: CounterComponent }
]

@NgModule({
  declarations: [
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    CustomCounterInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(COUNTER_STATE, counterReducer)
  ]
})
export class CounterModule { }
