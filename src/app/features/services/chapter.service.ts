
import {environment} from '../../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PageResponse} from '../../core/interfaces/pagination.interface';
import {Survey} from '../models/survey.model';
import {Chapter} from '../models/chapter.model';
@Injectable({
  providedIn: "root"
})

export class ChapterService {
  private readonly apiUrl = `${environment.apiUrl}/subjects`;
  constructor(private http: HttpClient) {}

  getSubjectsByEdition(page: number = 0, size: number = 3): Observable<PageResponse<Chapter>> {
    const url = `${this.apiUrl}?page=${page}&size=${size}`;
    return this.http.get<PageResponse<Chapter>>(url);
  }
  createSubject(subject: Omit<Chapter, 'id'>): Observable<Chapter> {
    return this.http.post<Chapter>(this.apiUrl, subject);
  }

  updateSubject(id: number, subject: Partial<Chapter>): Observable<Chapter> {
    return this.http.put<Chapter>(`${this.apiUrl}/${id}`, subject);
  }

  deleteSubject(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }



}
