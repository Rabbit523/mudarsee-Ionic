import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentBookingsPage } from './student-bookings';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { PipesModule } from './../../../pipes/pipes.module';


@NgModule({
  declarations: [
    StudentBookingsPage,
  ],
  imports: [
    TranslateModule,
    PipesModule,
    IonicPageModule.forChild(StudentBookingsPage),
  ],
  exports: [
    StudentBookingsPage
  ]
})
export class StudentBookingsPageModule {}
