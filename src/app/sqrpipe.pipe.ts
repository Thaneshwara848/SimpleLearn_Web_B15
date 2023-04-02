import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqrpipe'
})
export class SqrpipePipe implements PipeTransform {

  transform(value: any): unknown {
    return value * value;
  }

}
