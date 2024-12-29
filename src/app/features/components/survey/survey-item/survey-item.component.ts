import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Survey} from '../../../models/survey.model';
import {CommonModule} from '@angular/common';
import {SurveyEditionsListComponent} from '../survey-editions-list/survey-editions-list.component';

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
  @Output() onAddSurvey = new EventEmitter<void>();
  @Output() onDeleteSurvey = new EventEmitter<number>();
/*  @Output() editionSelected = new EventEmitter<any>();
  onViewEdition(edition: any): void {
    this.editionSelected.emit(edition);
  }*/
  onEditionSelected(edition: any): void {
    console.log('Selected Edition:', edition);
    // Ajoutez une logique spécifique ici
  }
  addSurvey(): void {
    this.onAddSurvey.emit();
  }

  deleteSurvey(): void {
    this.onDeleteSurvey.emit(this.survey.id);
  }

}
