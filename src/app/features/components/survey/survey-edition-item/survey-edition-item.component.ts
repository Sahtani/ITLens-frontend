import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SurveyEdition} from '../../../models/survey-edition.model';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-survey-edition-item',
  templateUrl: './survey-edition-item.component.html',
  imports: [CommonModule],
  standalone: true,
  styleUrl: './survey-edition-item.component.css'
})
export class SurveyEditionItemComponent {
  @Input() edition!: SurveyEdition;
  @Output() viewEdition = new EventEmitter<SurveyEdition>();

  onEditionClick(): void {
    this.viewEdition.emit(this.edition)
  }
}
