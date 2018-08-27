import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TermsConditionsPage } from './terms-conditions';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
  declarations: [
    TermsConditionsPage,
  ],
  imports: [
    TranslateModule,PipesModule,
    IonicPageModule.forChild(TermsConditionsPage),
  ],
  exports: [
    TermsConditionsPage
  ]
})
export class TermsConditionsPageModule {}
