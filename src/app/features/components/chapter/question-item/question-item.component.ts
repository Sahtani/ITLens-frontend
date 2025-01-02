import {Component, Input} from '@angular/core';
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
  @Input() question!: Question;

}
