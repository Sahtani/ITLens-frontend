import {SubChapter} from './subchapter.model';
import {Question} from './question.model';

export interface Chapter {
   id: number;
   title: string;
  subChapters?: SubChapter[];
  questions: Question[];
}
