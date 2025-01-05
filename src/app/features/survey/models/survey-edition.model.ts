import {Survey} from './survey.model';
import {Chapter} from './chapter.model';


export interface SurveyEdition{
  id: number;
  creationDate: Date;
  startDate: Date;
  year: Date;
  chapters: Chapter[]

}
