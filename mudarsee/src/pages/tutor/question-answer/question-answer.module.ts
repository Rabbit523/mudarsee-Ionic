import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionAnswerPage } from './question-answer';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { PipesModule } from './../../../pipes/pipes.module';
@NgModule({
  declarations: [
    QuestionAnswerPage,
  ],
  imports: [
    TranslateModule,PipesModule,
    IonicPageModule.forChild(QuestionAnswerPage),
  ],
  exports: [
    QuestionAnswerPage
  ]
})
export class QuestionAnswerPageModule {}
