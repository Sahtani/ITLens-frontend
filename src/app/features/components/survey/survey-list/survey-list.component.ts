import { Component, OnInit } from '@angular/core';
import { Survey } from '../../../models/survey.model';
import { SurveyService } from '../../../services/survey.service';
import { NgForOf } from '@angular/common';
import { PageResponse } from '../../../../core/interfaces/pagination.interface';
import { ButtonComponent } from '../../../../shared/button/button.component';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  standalone: true,
  imports: [NgForOf, ButtonComponent],
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {
  surveys: Survey[] = [];
  currentPage = 0;
  pageSize = 3;
  totalPages = 0;
  totalElements = 0;
  newSurvey: Survey = {
    id: 0 ,
    title: '',
    description: '',
    owner: {
      id: 0 ,
      name: ''

    }
  };

  constructor(private surveyService: SurveyService) {}

  ngOnInit(): void {
    this.loadSurveys();
  }

  loadSurveys() {
    this.surveyService.getSurveys(this.currentPage, this.pageSize).subscribe({
      next: (response: PageResponse<Survey>) => {
        this.surveys = response.content;
        this.totalPages = response.totalPages;
        this.totalElements = response.totalElements;
        this.currentPage = response.pageNumber;
      },
      error: (error) => {
        console.error('Error fetching surveys:', error);
      }
    });
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadSurveys();
    }
  }

  // Méthode pour ajouter survey
  addSurvey(): void {
    this.surveyService.addSurvey(this.newSurvey).subscribe({
      next: () => {

        this.loadSurveys();
        this.resetNewSurvey();
      },
      error: (error) => {
        console.error('Error adding survey:', error);
      }
    });
  }

  private resetNewSurvey(): void {
    this.newSurvey = {
      id: 0 ,
      title: '',
      description: '',
      owner: {
        name: '',
        id: 0
      }
    };
  }
}
