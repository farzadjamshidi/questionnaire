import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';


const BASE_MODULES = [
  ReactiveFormsModule,
  CommonModule
];
const COMPONENTS = [HomeComponent];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...BASE_MODULES
  ],
  exports: [
    ...BASE_MODULES,
    ...COMPONENTS
  ]
})
export class HomeModule { }
