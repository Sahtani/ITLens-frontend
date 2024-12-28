import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SurveyListComponent} from './features/components/survey/survey-list/survey-list.component';
import {
  SurveyEditionItemComponent
} from './features/components/survey/survey-edition-item/survey-edition-item.component';

export const routes: Routes = [
  { path: '', component: SurveyListComponent },
  { path: 'survey-edition/:id', component: SurveyEditionItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
