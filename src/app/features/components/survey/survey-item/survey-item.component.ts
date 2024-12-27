import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Survey} from '../../../models/survey.model';

@Component({
  selector: 'app-survey-item',
  templateUrl: './survey-item.component.html',
  styleUrl: './survey-item.component.css'
})
export class SurveyItemComponent {
  @Input() survey!: Survey;
  constructor() {
  }
  @Output() onAddSurvey = new EventEmitter<void>();
  @Output() onDeleteSurvey = new EventEmitter<number>();

  addSurvey(): void {
    this.onAddSurvey.emit();
  }

  deleteSurvey(): void {
    this.onDeleteSurvey.emit(this.survey.id);
  }

}
