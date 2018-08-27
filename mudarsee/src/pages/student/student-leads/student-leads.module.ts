import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentLeadsPage } from './student-leads';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { PipesModule } from './../../../pipes/pipes.module';
@NgModule({
  declarations: [
    StudentLeadsPage,
  ],
  imports: [
    TranslateModule,PipesModule,
    IonicPageModule.forChild(StudentLeadsPage),
  ],
  exports: [
    StudentLeadsPage
  ]
})
export class StudentLeadsPageModule {}
