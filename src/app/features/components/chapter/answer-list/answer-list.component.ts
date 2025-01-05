import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Answer} from '../../../models/answer.model';
import {AnswerItemComponent} from '../answer-item/answer-item.component';

@Component({
  selector: 'app-answer-list',
  imports: [CommonModule, AnswerItemComponent],
  templateUrl: './answer-list.component.html',
  standalone: true,
  styleUrl: './answer-list.component.css'
})
export class AnswerListComponent {
  @Input() answers: Answer[] = [];
  @Input() questionText: string = '';
  @Output() close = new EventEmitter<void>();

  closeAnswers() {
    this.close.emit();
  }

}
