import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule, Routes } from '@angular/router';
import { MultiCheckBoxFormModule } from 'src/app/components/multi-checkbox-form/multi-checkbox-form.module';
import { LocalStorage_v0_Question_Repo } from 'src/app/core/repository/localStorage/v0/question_repo.service';
import { QuestionsComponent } from './questions.component';


const routes: Routes = [
  { path: '', component: QuestionsComponent }
];

const COMPONENT = [QuestionsComponent];

const MATERIAL_MODULES = [
  MatIconModule,
  MatTooltipModule,
  MatProgressBarModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatRadioModule,
  MatFormFieldModule
];
@NgModule({
  declarations: [...COMPONENT],
  imports: [
    MultiCheckBoxFormModule,
    ReactiveFormsModule,
    CommonModule,
    ...MATERIAL_MODULES,
    RouterModule.forChild(routes)
  ],
  exports: [
    MultiCheckBoxFormModule,
    RouterModule,
    ...MATERIAL_MODULES,
    ...COMPONENT
  ],
  providers: [
    { provide: 'IQuestionRepo', useClass: LocalStorage_v0_Question_Repo }
  ]
})
export class QuestionsModule { }
