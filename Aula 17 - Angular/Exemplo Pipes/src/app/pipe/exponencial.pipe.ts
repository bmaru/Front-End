import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponencial'
})
export class ExponencialPipe implements PipeTransform {

  transform(value: number, exponencial?: number): number {
    //console.log(`Value: ${value}\n Exponencial: ${exponencial}`);
    return Math.pow(value, isNaN(exponencial) ? 1 : exponencial );
  }

}
