import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreditTransHistoryPage } from './credit-trans-history';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { PipesModule } from './../../../pipes/pipes.module';
@NgModule({
  declarations: [
    CreditTransHistoryPage,
  ],
  imports: [
    TranslateModule,PipesModule,
    IonicPageModule.forChild(CreditTransHistoryPage),
  ],
  exports: [
    CreditTransHistoryPage
  ]
})
export class CreditTransHistoryPageModule {}
