import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TutorDashboardQuestionsPage } from './tutor-dashboard-questions';
import { TranslateModule} from 'ng2-translate';
import { PipesModule } from './../../../pipes/pipes.module';
@NgModule({
  declarations: [
    TutorDashboardQuestionsPage,
  ],
  imports: [
    TranslateModule,PipesModule,
    IonicPageModule.forChild(TutorDashboardQuestionsPage),
  ],
})
export class TutorDashboardQuestionsPageModule {}
