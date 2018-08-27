import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentTeachingTypesPage } from './student-teaching-types';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { PipesModule } from './../../../pipes/pipes.module';
@NgModule({
  declarations: [
    StudentTeachingTypesPage,
  ],
  imports: [
    PipesModule,TranslateModule,
    IonicPageModule.forChild(StudentTeachingTypesPage),
  ],
  exports: [
    StudentTeachingTypesPage
  ]
})
export class StudentTeachingTypesPageModule {}
