import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentLocationsPage } from './student-locations';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { PipesModule } from './../../../pipes/pipes.module';
@NgModule({
  declarations: [
    StudentLocationsPage,
  ],
  imports: [
    TranslateModule,PipesModule,
    IonicPageModule.forChild(StudentLocationsPage),
  ],
  exports: [
    StudentLocationsPage
  ]
})
export class StudentLocationsPageModule {}
