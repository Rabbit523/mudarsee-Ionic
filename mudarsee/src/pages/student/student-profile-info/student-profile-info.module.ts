import { PipesModule } from './../../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentProfileInfoPage } from './student-profile-info';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
@NgModule({
  declarations: [
    StudentProfileInfoPage,
  ],
  imports: [
    TranslateModule,PipesModule,
    IonicPageModule.forChild(StudentProfileInfoPage),
  ],
  exports: [
    StudentProfileInfoPage
  ]
})
export class StudentProfileInfoPageModule {}
