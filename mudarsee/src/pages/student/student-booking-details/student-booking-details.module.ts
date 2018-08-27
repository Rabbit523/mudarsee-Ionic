import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentBookingDetailsPage } from './student-booking-details';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { PipesModule } from './../../../pipes/pipes.module';

@NgModule({
  declarations: [
    StudentBookingDetailsPage,
  ],
  imports: [
    TranslateModule,
    PipesModule,
    IonicPageModule.forChild(StudentBookingDetailsPage),
  ],
  exports: [
    StudentBookingDetailsPage
  ]
})
export class StudentBookingDetailsPageModule {}
