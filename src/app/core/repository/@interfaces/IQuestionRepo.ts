import { Observable } from 'rxjs';
import { GetAllQuestionsRequest, GetAllQuestionsResponse } from 'src/app/models/question.model';

export interface IQuestionRepo
{
  list(request: GetAllQuestionsRequest): Observable<GetAllQuestionsResponse>;
}
