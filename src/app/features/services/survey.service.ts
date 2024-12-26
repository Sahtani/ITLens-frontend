import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Survey} from '../models/survey.model';
import {Injectable} from '@angular/core';
import {PageResponse} from '../../core/interfaces/pagination.interface';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class  SurveyService{
  private apiUrl= 'http://localhost:8080/api/v1' ;

  constructor(private http: HttpClient) {}
  getSurveys(page: number = 0, size: number = 3): Observable<PageResponse<Survey>> {
    return this.http.get<PageResponse<Survey>>
    (`${this.apiUrl}/surveys?page=${page}&size=${size}`);
  }
  getSurveyById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`)

  }
  addSurvey(newSurvey: Survey): Observable<Survey> {
    return this.http.post<Survey>(`${this.apiUrl}/surveys`, newSurvey);
  }

}
