import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StuQuestionAnswerPage } from './stu-question-answer';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

@NgModule({
  declarations: [
    StuQuestionAnswerPage,
  ],
  imports: [
    TranslateModule,
    IonicPageModule.forChild(StuQuestionAnswerPage),
  ],
  exports: [
    StuQuestionAnswerPage
  ]
})
export class StuQuestionAnswerPageModule {}
