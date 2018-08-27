import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TutorContactDetailsPage } from './tutor-contact-details';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { PipesModule } from '../../../pipes/pipes.module';
@NgModule({
  declarations: [
    TutorContactDetailsPage,
  ],
  imports: [
    TranslateModule,PipesModule,
    IonicPageModule.forChild(TutorContactDetailsPage),
  ],
  exports: [
    TutorContactDetailsPage
  ]
})
export class TutorContactDetailsPageModule {}
