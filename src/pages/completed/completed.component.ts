import { Component } from "@angular/core";
import { TaskListService } from "../../providers/task-list.service";
import { List } from "../../models";

@Component({
  selector: 'page-completed',
  templateUrl: 'completed.component.html'
})

export class CompletedComponent {

  constructor( private service: TaskListService ) { }

  listSelected( list: List ) {

    console.log('List ', list);

  }

}
