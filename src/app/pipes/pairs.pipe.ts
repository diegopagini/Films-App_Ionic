import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Pairs',
})
export class PairsPipe implements PipeTransform {
  transform(arr: any[]): any[] {
    const pairs = arr.reduce((result, value, index, array) => {
      if (index % 2 === 0) {
        result.push(array.slice(index, index + 2));
      }
      return result;
    }, []);

    return pairs;
  }
}
