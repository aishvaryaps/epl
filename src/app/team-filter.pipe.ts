import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teamFilter', pure: false
})
export class TeamFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let filtered = []
    if (value) {

      if (args.length) {
        args.map(team => {
          value.map(match => {
            if (match.team1.name == team || match.team2.name == team) {
              filtered.push(match)
            }
          })
        })
        return filtered;
      }
      else {
        return value;
      }
    }
  }

}
