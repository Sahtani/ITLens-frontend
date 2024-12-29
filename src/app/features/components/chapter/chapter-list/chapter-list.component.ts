import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChapterItemComponent} from '../chapter-item/chapter-item.component';
import {Chapter} from '../../../models/chapter.model';

@Component({
  selector: 'app-chapter-list',
  imports: [CommonModule, ChapterItemComponent],
  templateUrl: './chapter-list.component.html',
  standalone: true,
  styleUrl: './chapter-list.component.css'
})
export class ChapterListComponent {
  @Input() chapters: Chapter[] = [];

}
