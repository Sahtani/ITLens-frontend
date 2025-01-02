import {Question} from './question.model';

export interface SubChapter {
  id: number;
  title: string;
  questions: Question[];
}
