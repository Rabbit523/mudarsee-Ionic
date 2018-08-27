import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentDashboardQuestionsPage } from './student-dashboard-questions';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { PipesModule } from './../../../pipes/pipes.module';
@NgModule({
  declarations: [
    StudentDashboardQuestionsPage,
  ],
  imports: [ PipesModule,TranslateModule,
    IonicPageModule.forChild(StudentDashboardQuestionsPage),
  ],
})
export class StudentDashboardQuestionsPageModule {}
