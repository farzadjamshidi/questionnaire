import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private router: Router,
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

    const currentQuestion = this.questionnaire.questions[this.activeQuestionIndex];
    const currentQuestionAnswer = this.activeQuestionFormControl.value;

    if (currentQuestion.jumps?.length > 0 && currentQuestionAnswer)
    {

      const nextQuestionIdentifire = currentQuestion.jumps.find(
        jump => jump.conditions.some(condition => condition.value === currentQuestionAnswer)
      )?.destination.id;

      if (nextQuestionIdentifire)
      {
        const prevIndex = this.activeQuestionIndex;
        this.activeQuestionIndex = this.questionnaire.questions.findIndex(question =>
          question.identifier === nextQuestionIdentifire
        );
        this.activeQuestion = this.questionnaire.questions[this.activeQuestionIndex];
        this.activeQuestion.prev_index = prevIndex;
      }
      else
      {
        this.activeQuestionIndex++;
        this.activeQuestion = this.questionnaire.questions[this.activeQuestionIndex];
      }

    }
    else
    {
      this.activeQuestionIndex++;
      this.activeQuestion = this.questionnaire.questions[this.activeQuestionIndex];
    }

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

    if (this.activeQuestion.prev_index)
    {
      this.activeQuestionIndex = this.activeQuestion.prev_index;
      this.activeQuestion.prev_index = undefined;
    }
    else
    {
      this.activeQuestionIndex--;
    }

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
    this.router.navigate(['/success']);
  }

  ngOnDestroy(): void
  {
    this.subscriptions.unsubscribe();
  }
}
