import {Component, Input} from '@angular/core';
import {Subject} from '../../../../subject.model';
import {SurveyEdition} from '../../../models/survey-edition.model';

@Component({
  selector: 'app-survey-editions-list',
  templateUrl: './survey-editions-list.component.html',
  styleUrl: './survey-editions-list.component.css'
})
export class SurveyEditionsListComponent {
  @Input() editions: SurveyEdition[] = [];
}
