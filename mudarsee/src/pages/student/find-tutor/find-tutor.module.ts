import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindTutorPage } from './find-tutor';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { PipesModule } from './../../../pipes/pipes.module';
@NgModule({
  declarations: [
    FindTutorPage,
  ],
  imports: [
    TranslateModule,PipesModule,
    IonicPageModule.forChild(FindTutorPage),
  ],
  exports: [
    FindTutorPage
  ]
})
export class FindTutorPageModule {}
