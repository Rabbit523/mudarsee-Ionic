import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutUsPage } from './about-us';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
  declarations: [
    AboutUsPage,
  ],
  imports: [
    TranslateModule,PipesModule,
    IonicPageModule.forChild(AboutUsPage),
  ],
  exports: [
    AboutUsPage
  ]
})
export class AboutUsPageModule {}
