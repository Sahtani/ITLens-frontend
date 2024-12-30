import {SubChapter} from './subchapter.model';

export interface Chapter {
   id: number;
   title: string;
  subChapters?: SubChapter[];
}
