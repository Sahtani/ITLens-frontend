import {Component, EventEmitter, Input, Output} from '@angular/core';
import {QuestionItemComponent} from '../question-item/question-item.component';
import {CommonModule} from '@angular/common';
import {Question} from '../../../models/question.model';
import {AnswerListComponent} from '../answer-list/answer-list.component';

@Component({
  selector: 'app-question-list',
  imports: [CommonModule, QuestionItemComponent, AnswerListComponent],
  templateUrl: './question-list.component.html',
  standalone: true,
  styleUrl: './question-list.component.css'
})
export class QuestionListComponent {
  @Input() questions?: Question[] | null = null;
  selectedQuestion: Question | null = null;

  onShowAnswers(question: Question) {
    this.selectedQuestion = question;
  }

  hideAnswers() {
    this.selectedQuestion = null;
  }
/*//pour child
 /!* @Input() question!: Question ;
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
  }*!/*/
}
