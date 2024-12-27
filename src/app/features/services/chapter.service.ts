
import {environment} from '../../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PageResponse} from '../../core/interfaces/pagination.interface';
import {Subject} from '../../subject.model';
import {Survey} from '../models/survey.model';
@Injectable({
  providedIn: "root"
})

export class ChapterService {
  private readonly apiUrl = `${environment.apiUrl}/subjects`;
  constructor(private http: HttpClient) {}

  getSubjectsByEdition(page: number = 0, size: number = 3): Observable<PageResponse<Subject>> {
    const url = `${this.apiUrl}?page=${page}&size=${size}`;
    return this.http.get<PageResponse<Subject>>(url);
  }
  createSubject(subject: Omit<Subject, 'id'>): Observable<Subject> {
    return this.http.post<Subject>(this.apiUrl, subject);
  }

  updateSubject(id: number, subject: Partial<Subject>): Observable<Subject> {
    return this.http.put<Subject>(`${this.apiUrl}/${id}`, subject);
  }

  deleteSubject(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }



}
