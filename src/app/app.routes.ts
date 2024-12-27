import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SurveyListComponent} from './features/components/survey/survey-list/survey-list.component';
import {
  SurveyEditionItemComponent
} from './features/components/survey/survey-edition-item/survey-edition-item.component';

const routes: Routes = [
  { path: 'surveys', component: SurveyListComponent },
  { path: 'survey-edition/:id', component: SurveyEditionItemComponent },
  { path: '', redirectTo: 'surveys', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
