import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LocalStorage_v0_Question_Repo } from 'src/app/core/repository/localStorage/v0/question_repo.service';
import { QuestionsComponent } from './questions.component';


const routes: Routes = [
  { path: '', component: QuestionsComponent }
];

const COMPONENT = [QuestionsComponent];

@NgModule({
  declarations: [...COMPONENT],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    ...COMPONENT
  ],
  providers: [
    { provide: 'IQuestionRepo', useClass: LocalStorage_v0_Question_Repo }
  ]
})
export class QuestionsModule { }
