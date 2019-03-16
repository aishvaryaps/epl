import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'matchByDate'
})
export class MatchByDatePipe implements PipeTransform {
  transform(value: any, args?: any): any {

    if (args) {
      console.log(args.jsdate)
      let filteredData = value.filter(match => {
        match.date.setHours(0,0,0,0)
        if (match.date.getTime() == new Date(args.jsdate).getTime()) {
          return match
        }
      })
      return filteredData;
    }
    else {
      return value;
    }
  }

}
