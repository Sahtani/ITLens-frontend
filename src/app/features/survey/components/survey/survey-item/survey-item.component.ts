import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Survey} from '../../../models/survey.model';
import {CommonModule} from '@angular/common';
import {SurveyEditionsListComponent} from '../survey-editions-list/survey-editions-list.component';
import {SurveyEdition} from '../../../models/survey-edition.model';

@Component({
  selector: 'app-survey-item',
  templateUrl: './survey-item.component.html',
  standalone: true,
  imports: [CommonModule, SurveyEditionsListComponent],
  styleUrl: './survey-item.component.css'
})
export class SurveyItemComponent {
  @Input() survey!: Survey;
  constructor() {
  }


  @Output() editionSelected = new EventEmitter<SurveyEdition>();
  @Output() onAddSurvey = new EventEmitter<void>();
  @Output() onDeleteSurvey = new EventEmitter<number>();

  onEditionSelected(edition: SurveyEdition): void {
    this.editionSelected.emit(edition);
  }
  addSurvey(): void {
    this.onAddSurvey.emit();
  }

  deleteSurvey(): void {
    this.onDeleteSurvey.emit(this.survey.id);
  }

}
