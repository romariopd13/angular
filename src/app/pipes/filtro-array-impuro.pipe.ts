import { Pipe, PipeTransform } from '@angular/core';
import { FiltroArrayPipePipe } from './filtro-array-pipe.pipe';

@Pipe({
  name: 'filtroArrayImpuro',
  pure: false
})
export class FiltroArrayImpuroPipe extends FiltroArrayPipePipe {



}
