import {Chapter} from './chapter.model';
import {QuestionType} from './question-type.enum';
import {Answer} from './answer.model';


export interface Question {
  id: number;
  text: string;
  type: QuestionType;
  chapter: Chapter;
  answers: Answer[];
}
