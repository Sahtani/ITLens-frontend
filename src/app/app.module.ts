import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {SurveyListComponent} from './features/components/survey/survey-list/survey-list.component';
import {SurveyItemComponent} from './features/components/survey/survey-item/survey-item.component';
import {
  SurveyEditionsListComponent
} from './features/components/survey/survey-editions-list/survey-editions-list.component';
import {
  SurveyEditionItemComponent
} from './features/components/survey/survey-edition-item/survey-edition-item.component';
import {AppRoutingModule} from './app.routes';
import {HttpClientModule} from '@angular/common/http';
import {ChapterComponent} from './features/components/chapter/chapter/chapter.component';
import {ButtonComponent} from './shared/button/button.component';



@NgModule({
  declarations: [
    AppComponent,
    SurveyListComponent,
    SurveyItemComponent,
    SurveyEditionsListComponent,
    SurveyEditionItemComponent,
    ChapterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonComponent
  ],
  providers: [


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
