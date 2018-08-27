import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TutorDashboardChatPage } from './tutor-dashboard-chat';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { PipesModule } from './../../../pipes/pipes.module';
@NgModule({
  declarations: [
    TutorDashboardChatPage,
  ],
  imports: [
    TranslateModule,PipesModule, 
    IonicPageModule.forChild(TutorDashboardChatPage),
  ],
})
export class TutorDashboardChatPageModule {}
