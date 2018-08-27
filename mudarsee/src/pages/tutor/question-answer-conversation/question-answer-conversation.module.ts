import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionAnswerConversationPage } from './question-answer-conversation';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { PipesModule } from './../../../pipes/pipes.module';
@NgModule({
  declarations: [
    QuestionAnswerConversationPage,
  ],
  imports: [
    TranslateModule,PipesModule,
    IonicPageModule.forChild(QuestionAnswerConversationPage),
  ],
})
export class QuestionAnswerConversationPageModule {}
