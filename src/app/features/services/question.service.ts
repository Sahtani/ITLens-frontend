import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Question} from '../models/question.model';
import {Chapter} from '../models/chapter.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private chapters: Chapter[] | null = null;
  getChapters(): Chapter[] | null {
    return this.chapters;
  }
  private selectedChapterSubject = new BehaviorSubject<any>(null);
  selectedChapter$ = this.selectedChapterSubject.asObservable();
  setSelectedChapter(chapter: any) {
    this.selectedChapterSubject.next(chapter);
  }
 /* getChapterQuestions(chapterId: number): Question[] {
    // @ts-ignore
    const chapter = this.chapters.find(c => c.id === chapterId);
    return chapter?.questions || [];
  }

  getSubChapterQuestions(chapterId: number, subChapterId: number): Question[] {
    // @ts-ignore
    const chapter = this.chapters.find(c => c.id === chapterId);
    const subChapter = chapter?.subChapters?.find(s => s.id === subChapterId);
    return subChapter?.questions || [];
  }*/
}
