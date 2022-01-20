import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';

const BASE_MODULES = [
  RouterModule,
  ReactiveFormsModule,
  CommonModule
];
const COMPONENTS = [HeaderComponent];
const MATERIAL_MODULES = [MatIconModule];

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
    ...BASE_MODULES,
    ...COMPONENTS
  ]
})
export class HeaderModule { }
