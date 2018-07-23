import { Component } from "@angular/core";
import { TaskListService } from "../../providers/task-list.service";

@Component({
  selector: 'page-todo',
  templateUrl: 'to-do.component.html'
})

export class ToDoComponent {

  constructor( private service: TaskListService ) {}

}
