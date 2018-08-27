import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentDashboardPage } from './student-dashboard';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { PipesModule } from './../../../pipes/pipes.module';
@NgModule({
  declarations: [
    StudentDashboardPage,
  ],
  imports: [
    PipesModule,TranslateModule,
    IonicPageModule.forChild(StudentDashboardPage),
  ],
  exports: [
    StudentDashboardPage
  ]
})
export class StudentDashboardPageModule {}
