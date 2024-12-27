import {Component, Input} from '@angular/core';
import {SurveyEdition} from '../../../models/survey-edition.model';

@Component({
  selector: 'app-survey-edition-item',
  templateUrl: './survey-edition-item.component.html',
  styleUrl: './survey-edition-item.component.css'
})
export class SurveyEditionItemComponent {
  @Input() edition!: SurveyEdition;
}
