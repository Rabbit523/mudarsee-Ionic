import { NgModule } from "@angular/core"

import { CasePipe } from '../pipes/case/case';
import { AgeFilter } from '../pipes/age-filter/age-filter';
import { FilterPipe } from './filter/filter.pipe';


@NgModule({
  declarations: [CasePipe,AgeFilter,FilterPipe],
  exports: [CasePipe,AgeFilter,FilterPipe],
  imports: []
})
export class PipesModule {
}