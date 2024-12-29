import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SurveyEdition} from '../../../models/survey-edition.model';

@Component({
  selector: 'app-survey-tree-view',
  imports: [CommonModule],
  templateUrl: './survey-tree-view.component.html',
  standalone: true,
  styleUrl: './survey-tree-view.component.css'
})
export class SurveyTreeViewComponent {
  @Input() edition!: SurveyEdition;
  expandedChapters: { [ Key: number]: boolean} = {};

  toggleChapter(chapterId: number) {
    this.expandedChapters[chapterId] = !this.expandedChapters[chapterId];
  }

  goBack() {
    window.history.back();
  }


}
