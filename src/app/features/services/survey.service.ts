import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Survey } from '../models/survey.model';
import { PageResponse } from '../../core/interfaces/pagination.interface';
import { SurveyDTO } from '../../dto/survey.dto';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  private readonly apiUrl = 'http://localhost:8080/api/v1/surveys';

  constructor(private http: HttpClient) {}

  getSurveys(page: number = 0, size: number = 3): Observable<PageResponse<Survey>> {
    const url = `${this.apiUrl}?page=${page}&size=${size}`;
    return this.http.get<PageResponse<Survey>>(url);
  }

  getSurveyById(id: number): Observable<Survey> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Survey>(url);
  }

  addSurvey(newSurvey: {
    owner: { name: string; id: number };
    description: string;
    id: number;
    title: string
  }): Observable<Survey> {
    return this.http.post<Survey>(this.apiUrl, newSurvey);
  }
}
