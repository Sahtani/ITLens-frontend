import {Component, EventEmitter, Input, numberAttribute, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SurveyEdition} from '../../../models/survey-edition.model';
import {Chapter} from '../../../models/chapter.model';

@Component({
  selector: 'app-survey-tree-view',
  imports: [CommonModule],
  templateUrl: './chapter-tree-view.component.html',
  standalone: true,
  styleUrl: './chapter-tree-view.component.css'
})
export class ChapterTreeViewComponent {
  @Input() edition!: SurveyEdition;
  @Input() nodes: Chapter[] = [];
  @Output() back = new EventEmitter<void>();


  expandedChapters: { [key: number]: boolean } = {};
  onBackClick(): void {
    this.back.emit();
    console.log(this.expandedChapters);
  }
  toggleChapter(chapterId: number): void {
    this.expandedChapters[chapterId] = !this.expandedChapters[chapterId];

    console.log('Chapter toggled:', chapterId, this.expandedChapters[chapterId]);

  }


}
