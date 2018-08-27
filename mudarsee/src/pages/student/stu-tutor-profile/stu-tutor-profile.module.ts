import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StuTutorProfilePage } from './stu-tutor-profile';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { PipesModule } from './../../../pipes/pipes.module';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    StuTutorProfilePage,
  ],
  imports: [
    TranslateModule,PipesModule,Ionic2RatingModule,
    IonicPageModule.forChild(StuTutorProfilePage),
  ],
  exports: [
    StuTutorProfilePage
  ]
})
export class StuTutorProfilePageModule {}
