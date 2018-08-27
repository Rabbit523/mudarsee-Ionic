import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlogPage } from './blog';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
  declarations: [
    BlogPage,
  ],
  imports: [
    TranslateModule,PipesModule,
    IonicPageModule.forChild(BlogPage),
  ],
})
export class BlogPageModule {}
