import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SuccessComponent } from './success.component';

const BASE_MODULES = [
  CommonModule
];
const COMPONENTS = [SuccessComponent];

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
export class SuccessModule { }
