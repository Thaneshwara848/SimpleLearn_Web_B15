import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cubepipe'
})
export class CubepipePipe implements PipeTransform {

  transform(value: any): unknown {

    return value * value * value;
  }

}
