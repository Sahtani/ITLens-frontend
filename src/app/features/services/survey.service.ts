import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Survey} from '../models/survey.model';


export class  SurveyService{
  private apiUrl= 'http://localhost:8080/api/v1/surveys' ;

  constructor(private http: HttpClient) {
  }
  getSurveys():Observable<Survey[]>{
    return  this.http.get<Survey[]>(this.apiUrl);
  }
  getSurveyById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`)


  }

}
