import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyCoursePurchasesPage } from './my-course-purchases';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { PipesModule } from './../../../pipes/pipes.module';
@NgModule({
  declarations: [
    MyCoursePurchasesPage,
  ],
  imports: [
    PipesModule,TranslateModule,
    IonicPageModule.forChild(MyCoursePurchasesPage),
  ],
  exports: [
    MyCoursePurchasesPage
  ]
})
export class MyCoursePurchasesPageModule {}
