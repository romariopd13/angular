import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArrayPipe'
})
export class FiltroArrayPipePipe implements PipeTransform {

  transform(value: any, args: any): any {
    if (value.length === 0 || args === undefined) {
      return value;
    }
    let filter = args.toLowerCase();
    return value.filter(x => x.toLowerCase().indexOf(filter) != -1)
  }

}
