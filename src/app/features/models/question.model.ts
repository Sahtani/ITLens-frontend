import {Chapter} from './chapter.model';
import {QuestionType} from './question-type.enum';


export interface Question {
  id: number;
  text: string;
  type: QuestionType;
  chapter: Chapter;
}
