export class GetAllQuestionsRequest
{
}

export class GetAllQuestionsResponse
{
  questionnaire!: Questionnaire;
}

export class Questionnaire
{
  id!: number;
  identifier!: string;
  name!: string;
  questions!: Question[];
  description!: string;
  category_name_hyphenated!: string;
}

export class Question
{
  question_type!: QuestionType;
  identifier!: string;
  headline!: string;
  description!: string;
  required!: boolean;
  multiple?: MultipleType;
  multiline?: MultilineType;
  choices?: Choice[];
  jumps!: Jump[];
  //FE attribute
  prev_index?: number;
}

export type QuestionType = 'multiple-choice' | 'text';
export type MultipleType = 'false' | 'true';
export type MultilineType = 'false' | 'true';

export class Choice
{
  label!: string;
  value!: string;
  selected!: boolean;
}

export class Jump
{
  conditions!: Condition[];
  destination!: {
    id: string;
  };
}

export class Condition
{
  field!: string;
  value!: string;
}
