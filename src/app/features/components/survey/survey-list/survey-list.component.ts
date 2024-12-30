import { Component, OnInit } from '@angular/core';
import { Survey } from '../../../models/survey.model';
import { SurveyService } from '../../../services/survey.service';
import { PageResponse } from '../../../../core/interfaces/pagination.interface';
import { ButtonComponent } from '../../../../shared/button/button.component';
import {SurveyItemComponent} from '../survey-item/survey-item.component';
import {CommonModule} from '@angular/common';
import {ChapterTreeViewComponent} from '../../chapter/chapter-tree-view/chapter-tree-view.component';
import {SurveyEdition} from '../../../models/survey-edition.model';
import {Chapter} from '../../../models/chapter.model';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css'],
  standalone: true,
  imports: [CommonModule, SurveyItemComponent, ChapterTreeViewComponent]
})
export class SurveyListComponent implements OnInit {
  surveys: Survey[] = [];
  currentPage = 0;
  pageSize = 3;
  totalPages = 0;
  totalElements = 0;

  // variable pour edition selection :



  newSurvey: { owner: { name: string; id: number }; description: string; id: number; title: string } = {
    id: 0,
    title: '',
    description: '',
    owner: {
      id: 0,
      name: '',
    },
  };
  selectedEdition: SurveyEdition | null = null;
  constructor(private surveyService: SurveyService) {}
  get chapters(): Chapter[] {
    return this.selectedEdition?.chapters || [];
  }


  ngOnInit(): void {
    this.loadSurveys();
    console.log(this.surveys)
  }
  onEditionSelected(edition: SurveyEdition): void {
    this.selectedEdition = edition;
  }

  backToSurveys(): void {
    this.selectedEdition = null;
  }

  loadSurveys(): void {
    this.surveyService.getSurveys(this.currentPage, this.pageSize).subscribe({
      next: (response: PageResponse<Survey>) => {
        this.surveys = response.content;
        this.totalPages = response.totalPages;
        this.totalElements = response.totalElements;
        this.currentPage = response.pageNumber;
      },
      error: (error) => {
        console.error('Error fetching surveys:', error);
      },
    });
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page - 1;
      this.loadSurveys();
    }
  }

  /*addSurvey(): void {
    this.surveyService.addSurvey(this.newSurvey).subscribe({
      next: () => {
        this.loadSurveys();
        this.resetNewSurvey();
      },
      error: (error) => {
        console.error('Error adding survey:', error);
      },
    });
  }

  private resetNewSurvey(): void {
    this.newSurvey = {
      id: 0,
      title: '',
      description: '',
      owner: {
        id: 0,
        name: '',
      },
    };
  }*/
  chapterTree: any;
  addSurvey(): void {
    console.log('Add survey clicked!');
  }

  deleteSurvey(surveyId: number): void {
    console.log(`Delete survey with ID: ${surveyId}`);
  }
}
