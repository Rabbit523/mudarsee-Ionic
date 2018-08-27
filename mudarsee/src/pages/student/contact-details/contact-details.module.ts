import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactDetailsPage } from './contact-details';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { PipesModule } from './../../../pipes/pipes.module';
@NgModule({
  declarations: [
    ContactDetailsPage,
  ],
  imports: [
    TranslateModule,PipesModule,
    IonicPageModule.forChild(ContactDetailsPage),
  ],
  exports: [
    ContactDetailsPage
  ]
})
export class ContactDetailsPageModule {}
