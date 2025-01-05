import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Question} from '../../../models/question.model';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './question-item.component.css'
})
export class QuestionItemComponent {
  @Input() question!: Question ;
  @Input() questions?: Question[] | null = null;
  @Output() showAnswersEvent = new EventEmitter<Question>();
  isSelected = false;

  toggleAnswers() {
    this.isSelected = !this.isSelected;
    if (this.isSelected) {
      this.showAnswersEvent.emit(this.question);
    } else {
      // @ts-ignore
      this.showAnswersEvent.emit(null)
    }
  }
}
