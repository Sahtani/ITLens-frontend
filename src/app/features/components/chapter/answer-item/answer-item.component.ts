import {Component, Input} from '@angular/core';
import {Answer} from '../../../models/answer.model';

@Component({
  selector: 'app-answer-item',
  imports: [],
  templateUrl: './answer-item.component.html',
  standalone: true,
  styleUrl: './answer-item.component.css'
})
export class AnswerItemComponent {
  @Input() answer!: Answer;

}
