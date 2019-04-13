import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teamSearch'
})
export class TeamSearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (args !== "") {
      let teamRegex = new RegExp('^' + args, 'i')
      return value.filter(team => teamRegex.test(team.name));
    }
    else {
      return value
    }
  }

}
