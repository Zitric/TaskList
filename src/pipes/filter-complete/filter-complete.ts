import { Pipe, PipeTransform } from '@angular/core';
import { List } from "../../models";

@Pipe({
  name: 'filterComplete',
  pure: false
})
export class FilterCompletePipe implements PipeTransform {

  transform( lists: List[], completed: boolean ) {

    return lists.filter( list => {
      return list.completed === completed;
    });

  }
}
