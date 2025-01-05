import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SurveyEdition} from '../../../models/survey-edition.model';
import {CommonModule} from '@angular/common';
import {SurveyEditionItemComponent} from '../survey-edition-item/survey-edition-item.component';

@Component({
  selector: 'app-survey-editions-list',
  templateUrl: './survey-editions-list.component.html',
  standalone: true,
  imports: [CommonModule, SurveyEditionItemComponent],
  styleUrl: './survey-editions-list.component.css'
})
export class SurveyEditionsListComponent {
  @Input() editions: SurveyEdition[] = [];
  @Output() editionSelected = new EventEmitter<SurveyEdition>();

  onEditionSelected(edition: SurveyEdition): void {
    this.editionSelected.emit(edition);
  }
}
