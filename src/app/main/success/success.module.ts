import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { SuccessComponent } from './success.component';

const routes: Routes = [
  { path: '', component: SuccessComponent }
];

const BASE_MODULES = [
  CommonModule
];
const COMPONENTS = [SuccessComponent];

const MATERIAL_MODULES = [
  MatButtonModule,
  MatCardModule
];
@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    RouterModule.forChild(routes),
    ...MATERIAL_MODULES,
    ...BASE_MODULES
  ],
  exports: [
    ...MATERIAL_MODULES,
    ...BASE_MODULES,
    ...COMPONENTS
  ]
})
export class SuccessModule { }
