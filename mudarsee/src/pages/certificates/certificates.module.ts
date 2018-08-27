import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CertificatesPage } from './certificates';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
  declarations: [
    CertificatesPage,
  ],
  imports: [
    PipesModule,TranslateModule,
    IonicPageModule.forChild(CertificatesPage),
  ],
})
export class CertificatesPageModule {}
