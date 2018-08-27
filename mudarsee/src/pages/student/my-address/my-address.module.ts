import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyAddressPage } from './my-address';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { PipesModule } from './../../../pipes/pipes.module';
@NgModule({
  declarations: [
    MyAddressPage,
  ],
  imports: [
    PipesModule,TranslateModule,
    IonicPageModule.forChild(MyAddressPage),
  ],
  exports: [
    MyAddressPage
  ]
})
export class MyAddressPageModule {}
