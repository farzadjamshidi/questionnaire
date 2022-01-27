import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllQuestionsRequest, GetAllQuestionsResponse } from 'src/app/models/question.model';
import * as data from '../../../../../assets/static-files/questionnaire.json';
import { IQuestionRepo } from '../../@interfaces/IQuestionRepo';

@Injectable({
  providedIn: 'root'
})
export class LocalStorage_v0_Question_Repo implements IQuestionRepo
{

  list(request: GetAllQuestionsRequest): Observable<GetAllQuestionsResponse>
  {
    return new Observable<GetAllQuestionsResponse>(observer =>
    {
      observer.next(
        data as unknown as GetAllQuestionsResponse
      );
    });
  }
}
