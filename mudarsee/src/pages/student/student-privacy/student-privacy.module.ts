import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentPrivacyPage } from './student-privacy';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { PipesModule } from './../../../pipes/pipes.module';
@NgModule({
  declarations: [
    StudentPrivacyPage,
  ],
  imports: [
    PipesModule,TranslateModule,
    IonicPageModule.forChild(StudentPrivacyPage),
  ],
  exports: [
    StudentPrivacyPage
  ]
})
export class StudentPrivacyPageModule {}
