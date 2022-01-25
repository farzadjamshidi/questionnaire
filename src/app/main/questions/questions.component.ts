import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IQuestionRepo } from 'src/app/core/repository/@interfaces/IQuestionRepo';
import { GetAllQuestionsRequest, GetAllQuestionsResponse, Question, Questionnaire } from 'src/app/models/question.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit, OnDestroy
{
  subscriptions: Subscription = new Subscription();
  questionnaire: Questionnaire = new Questionnaire();
  form: FormGroup = new FormGroup({});
  activeQuestionIndex: number = 0;
  activeQuestionFormControl: FormControl = new FormControl('');
  loading: boolean = true;
  isShowAnimation: boolean = false;
  isTransitionToNext: boolean = false;
  isTransitionToPrev: boolean = false;
  activeQuestion: Question = new Question();

  constructor(
    @Inject('IQuestionRepo') private questionService: IQuestionRepo
  ) { }

  ngOnInit(): void
  {

    const request: GetAllQuestionsRequest = {
    };

    this.subscriptions.add(this.questionService.list(request).subscribe(
      {
        next: (res: GetAllQuestionsResponse) =>
        {
          this.questionnaire = res.questionnaire;
          this.activeQuestion = this.questionnaire.questions[this.activeQuestionIndex];
          this.createForm();
          this.selectActiveQuestion();
          this.loading = false;
          setTimeout(() =>
          {
            this.isShowAnimation = true;
          }, 50);
        },
        error: () =>
        {
          this.loading = false;
          setTimeout(() =>
          {
            this.isShowAnimation = true;
          }, 50);
        }
      }
    ));
  }


  createForm()
  {

    const questionFormArray = new FormArray([]);

    this.questionnaire.questions.forEach((question) =>
    {

      const questionFormControl = new FormControl(
        question.question_type === 'multiple-choice' && question.multiple === 'true' ? question.choices : ''
      );

      if (question.required)
        questionFormControl.setValidators(Validators.required);

      questionFormArray.push(questionFormControl);
    });

    this.form = new FormGroup(
      {
        questionFormArray: questionFormArray
      }
    );
  }

  selectActiveQuestion()
  {
    this.activeQuestionFormControl = ((this.form.controls.questionFormArray as FormArray).at(this.activeQuestionIndex) as FormControl);
  }

  goToNextQuestion(): void
  {
    this.isShowAnimation = false;
    this.isTransitionToNext = true;

    this.activeQuestionIndex++;
    this.activeQuestion = this.questionnaire.questions[this.activeQuestionIndex];

    this.selectActiveQuestion();

    setTimeout(() =>
    {
      this.isShowAnimation = true;
      this.isTransitionToNext = false;
    }, 50);
  }

  goToPrevQuestion(): void
  {
    this.isShowAnimation = false;
    this.isTransitionToPrev = true;

    this.activeQuestionIndex--;
    this.activeQuestion = this.questionnaire.questions[this.activeQuestionIndex];

    this.selectActiveQuestion();

    setTimeout(() =>
    {
      this.isShowAnimation = true;
      this.isTransitionToPrev = false;
    }, 50);
  }

  submit(): void
  {
    console.log(this.form.controls.questionFormArray.value);
  }

  ngOnDestroy(): void
  {
    this.subscriptions.unsubscribe();
  }
}
