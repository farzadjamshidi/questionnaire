import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'success',
    loadChildren: () => import('./main/success/success.module').then(m => m.SuccessModule)
  },
  {
    path: 'questions',
    loadChildren: () => import('./main/questions/questions.module').then(m => m.QuestionsModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./main/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
