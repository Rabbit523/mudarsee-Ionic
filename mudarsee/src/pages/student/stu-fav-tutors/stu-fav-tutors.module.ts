import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StuFavTutorsPage } from './stu-fav-tutors';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { PipesModule } from './../../../pipes/pipes.module';
@NgModule({
  declarations: [
    StuFavTutorsPage,
  ],
  imports: [
    TranslateModule,PipesModule,
    IonicPageModule.forChild(StuFavTutorsPage),
  ],
  exports: [
    StuFavTutorsPage
  ]
})
export class StuFavTutorsPageModule {}
