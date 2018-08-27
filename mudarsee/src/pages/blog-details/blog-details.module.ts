import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlogDetailsPage } from './blog-details';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
  declarations: [
    BlogDetailsPage,
  ],
  imports: [
    TranslateModule,PipesModule,
    IonicPageModule.forChild(BlogDetailsPage),
  ],
})
export class BlogDetailsPageModule {}
