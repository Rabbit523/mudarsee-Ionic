import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentPostLeadPage } from './student-post-lead';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { PipesModule } from './../../../pipes/pipes.module';
@NgModule({
  declarations: [
    StudentPostLeadPage,
  ],
  imports: [
    TranslateModule,PipesModule,
    IonicPageModule.forChild(StudentPostLeadPage),
  ],
  exports: [
    StudentPostLeadPage
  ]
})
export class StudentPostLeadPageModule {}
