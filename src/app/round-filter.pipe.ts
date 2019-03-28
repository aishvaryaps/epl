import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundFilter'
})
export class RoundFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let matchListArr = []

    if (args !== "All") {
      matchListArr.push(value.find(elem => elem.name === args))
      return matchListArr;
    }
    else {
      return value;
    }
  }

}
