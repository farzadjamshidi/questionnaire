import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MultiCheckBoxFormComponent } from './multi-checkbox-form.component';


const COMPONENT = [MultiCheckBoxFormComponent];
const BASE_MODULES = [
  FormsModule,
  ReactiveFormsModule,
  CommonModule
];
const MATERIAL_MODULES = [
  MatCheckboxModule
];

@NgModule({
  declarations: [...COMPONENT],
  imports: [
    ...BASE_MODULES,
    ...MATERIAL_MODULES
  ],
  exports: [
    ...BASE_MODULES,
    ...MATERIAL_MODULES,
    ...COMPONENT
  ]
})
export class MultiCheckBoxFormModule { }
