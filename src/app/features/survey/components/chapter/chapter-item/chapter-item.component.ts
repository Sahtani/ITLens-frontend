import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Chapter} from '../../../models/chapter.model';
import {QuestionListComponent} from '../question-list/question-list.component';
import {QuestionService} from '../../../services/question.service';

@Component({
  selector: 'app-chapter-item',
  imports: [CommonModule, QuestionListComponent],
  templateUrl: './chapter-item.component.html',
  standalone: true,
  styleUrl: './chapter-item.component.css'
})
export class ChapterItemComponent {
  @Input() chapter: Chapter | null = null;
  expanded: boolean = false;
  showQuestionList: boolean = false;
  constructor(private questionService: QuestionService) {}  toggle(): void {
    this.expanded = !this.expanded;
  }
  showQuestions() {
    // Émet le chapitre sélectionné via le service
    this.questionService.setSelectedChapter(this.chapter);
    /*this.showQuestionList = !this.showQuestionList;*/
  }
 /* showQuestions() {
    this.showQuestionList = !this.showQuestionList;
  }*/


}
