import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentLeadDetailsPage } from './student-lead-details';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { PipesModule } from './../../../pipes/pipes.module';
@NgModule({
  declarations: [
    StudentLeadDetailsPage,
  ],
  imports: [
    TranslateModule,PipesModule,
    IonicPageModule.forChild(StudentLeadDetailsPage),
  ],
  exports: [
    StudentLeadDetailsPage
  ]
})
export class StudentLeadDetailsPageModule {}
