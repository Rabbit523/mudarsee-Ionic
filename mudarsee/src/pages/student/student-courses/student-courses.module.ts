import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentCoursesPage } from './student-courses';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { PipesModule } from './../../../pipes/pipes.module';
@NgModule({
  declarations: [
    StudentCoursesPage,
  ],
  imports: [
    TranslateModule,PipesModule,
    IonicPageModule.forChild(StudentCoursesPage),
  ],
  exports: [
    StudentCoursesPage
  ]
})
export class StudentCoursesPageModule {}
