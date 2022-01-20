import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';

const BASE_MODULES = [
  ReactiveFormsModule,
  CommonModule
];
const COMPONENTS = [HeaderComponent];

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
export class HeaderModule { }
