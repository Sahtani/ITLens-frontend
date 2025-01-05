import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuestionListComponent} from '../question-list/question-list.component';
import {Chapter} from '../../../models/chapter.model';
import {QuestionService} from '../../../services/question.service';

@Component({
  selector: 'app-question-viewer',
  imports: [CommonModule, QuestionListComponent],
  templateUrl: './question-viewer.component.html',
  standalone: true,
  styleUrl: './question-viewer.component.css'
})
export class QuestionViewerComponent implements OnInit {
  @Input() chapter: Chapter | null = null;
  showQuestionList: boolean = false;
  selectedChapter: any;
  constructor(private questionService: QuestionService) {}
  showQuestions() {
    this.showQuestionList = !this.showQuestionList;
  }
  ngOnInit() {
    this.questionService.selectedChapter$.subscribe(chapter => {
      this.selectedChapter = chapter;
    });
  }

}
