import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseFileModalPage } from './choose-file-modal';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { PipesModule } from './../../pipes/pipes.module';
@NgModule({
  declarations: [
    ChooseFileModalPage,
  ],
  imports: [
    TranslateModule,PipesModule,
    IonicPageModule.forChild(ChooseFileModalPage),
  ],
})
export class ChooseFileModalPageModule {}
