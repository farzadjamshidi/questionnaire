import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule, Routes } from '@angular/router';
import { QuestionModule } from 'src/app/components/question/question.module';
import { LocalStorage_v0_Question_Repo } from 'src/app/core/repository/localStorage/v0/question_repo.service';
import { QuestionsComponent } from './questions.component';


const routes: Routes = [
  { path: '', component: QuestionsComponent }
];

const COMPONENT = [QuestionsComponent];

@NgModule({
  declarations: [...COMPONENT],
  imports: [
    QuestionModule,
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    QuestionModule,
    RouterModule,
    MatButtonModule,
    ...COMPONENT
  ],
  providers: [
    { provide: 'IQuestionRepo', useClass: LocalStorage_v0_Question_Repo }
  ]
})
export class QuestionsModule { }
