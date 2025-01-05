import {Component, EventEmitter, Input, numberAttribute, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SurveyEdition} from '../../../models/survey-edition.model';
import {Chapter} from '../../../models/chapter.model';
import {ChapterItemComponent} from '../chapter-item/chapter-item.component';
import {Question} from '../../../models/question.model';
import {QuestionService} from '../../../services/question.service';
import {QuestionListComponent} from '../question-list/question-list.component';

@Component({
  selector: 'app-survey-tree-view',
  imports: [CommonModule, ChapterItemComponent, QuestionListComponent],
  templateUrl: './chapter-tree-view.component.html',
  standalone: true,
  styleUrl: './chapter-tree-view.component.css'
})
export class ChapterTreeViewComponent {
  @Input() nodes: Chapter[] = [];
  @Input() edition: SurveyEdition | null  = null;
  @Output() chapterSelected = new EventEmitter<any>();
  @Output() subChapterSelected = new EventEmitter<{chapterId: number, subChapterId: number}>();
  @Output() questionsRequested = new EventEmitter<number>();
  @Output() subChapterQuestionsRequested = new EventEmitter<{chapterId: number, subChapterId: number}>();
  showQuestionList: boolean = false;
  expandedChapters: { [key: number]: boolean } = {};

  toggleChapter(chapterId: number): void {
    this.expandedChapters[chapterId] = !this.expandedChapters[chapterId];
  }

  selectChapter(chapter: any) {
    this.chapterSelected.emit(chapter);
  }

  onSubChapterSelect(chapterId: number, subChapterId: number): void {
    this.subChapterSelected.emit({ chapterId, subChapterId });
  }


  showSubChapterQuestions(chapterId: number, subChapterId: number): void {
    this.subChapterQuestionsRequested.emit({ chapterId, subChapterId });
  }
}
