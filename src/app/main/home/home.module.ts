import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
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
const MATERIAL_MODULES = [
  MatButtonModule,
  MatCardModule
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...MATERIAL_MODULES,
    ...BASE_MODULES
  ],
  exports: [
    ...MATERIAL_MODULES,
    ...COMPONENTS
  ]
})
export class HomeModule { }
