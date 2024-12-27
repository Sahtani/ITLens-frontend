import {SurveyEditionDTO} from './SurveyEditionDTO.dto';

export interface SurveyDTO {
  id: number;
  title: string;
  description: string;
  editions: SurveyEditionDTO[];
}
