import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teamSearch'
})
export class TeamSearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args !== ""){
      return value.filter(team => {
        return team.name.toLowerCase().includes(args.toLowerCase())
      });
    }
    else{
      return value
    }
  }

}
