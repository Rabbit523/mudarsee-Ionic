import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StuChatPage } from '../stu-chat/stu-chat';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

@NgModule({
  declarations: [
    StuChatPage,
  ],
  imports: [
    TranslateModule,
    IonicPageModule.forChild(StuChatPage),
  ],
  exports: [
    StuChatPage
  ]
})
export class StuChatPageModule {}
