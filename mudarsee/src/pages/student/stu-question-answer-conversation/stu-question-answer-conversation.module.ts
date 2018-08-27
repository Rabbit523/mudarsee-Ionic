import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StuQuestionAnswerConversationPage } from '../stu-question-answer-conversation/stu-question-answer-conversation';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { PipesModule } from './../../../pipes/pipes.module';
@NgModule({
  declarations: [
    StuQuestionAnswerConversationPage,
  ],
  imports: [
    TranslateModule,PipesModule,
    IonicPageModule.forChild(StuQuestionAnswerConversationPage),
  ],
})
export class StuQuestionAnswerConversationPageModule {}
