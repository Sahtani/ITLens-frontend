import { Component } from '@angular/core';
import { SurveyListComponent } from './features/components/survey/survey-list/survey-list.component';

@Component({
  selector: 'app-root',
  imports: [SurveyListComponent],
  template: `<app-survey-list></app-survey-list>`,
  standalone: true,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'ITLens-frontend';
}
