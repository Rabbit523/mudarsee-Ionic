import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentDashboardChatPage } from './student-dashboard-chat';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { PipesModule } from './../../../pipes/pipes.module';
@NgModule({
  declarations: [
    StudentDashboardChatPage,
  ],
  imports: [
    PipesModule,TranslateModule,
    IonicPageModule.forChild(StudentDashboardChatPage),
  ],
})
export class StudentDashboardChatPageModule {}
