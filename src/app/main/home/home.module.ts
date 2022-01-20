import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
];
const BASE_MODULES = [
  RouterModule.forChild(routes),
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
    ...COMPONENTS
  ]
})
export class HomeModule { }
