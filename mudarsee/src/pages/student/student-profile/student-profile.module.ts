import { PipesModule } from './../../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentProfilePage } from './student-profile';
import { TranslateModule } from 'ng2-translate';

@NgModule({
  declarations: [
    StudentProfilePage,
  ],
  imports: [
    TranslateModule,PipesModule,
    IonicPageModule.forChild(StudentProfilePage),
  ],
  exports: [
    StudentProfilePage
  ]
})
export class StudentProfilePageModule {}
