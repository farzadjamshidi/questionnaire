import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IQuestionRepo } from 'src/app/core/repository/@interfaces/IQuestionRepo';
import { GetAllQuestionsRequest, GetAllQuestionsResponse } from 'src/app/models/question.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit, OnDestroy
{
  subscriptions: Subscription = new Subscription();

  constructor(
    @Inject('IQuestionRepo') private questionService: IQuestionRepo
  ) { }

  ngOnInit(): void
  {

    const request: GetAllQuestionsRequest = {
    };

    this.subscriptions.add(this.questionService.list(request).subscribe((res: GetAllQuestionsResponse) =>
    {
      console.log(res.questionnaire);
    })
    );

  }

  ngOnDestroy(): void
  {
    this.subscriptions.unsubscribe();
  }


}
