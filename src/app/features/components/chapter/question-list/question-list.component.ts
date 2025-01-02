import {Component, Input} from '@angular/core';
import {QuestionItemComponent} from '../question-item/question-item.component';
import {CommonModule} from '@angular/common';
import {Question} from '../../../models/question.model';

@Component({
  selector: 'app-question-list',
  imports: [CommonModule, QuestionItemComponent],
  templateUrl: './question-list.component.html',
  standalone: true,
  styleUrl: './question-list.component.css'
})
export class QuestionListComponent {
  @Input() questions?: Question[] | null = null;
}
