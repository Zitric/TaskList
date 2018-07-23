import { Component } from "@angular/core";
import { TaskListService } from "../../providers/task-list.service";
import { List } from "../../models";
import { NavParams } from "ionic-angular";

@Component({
  selector: 'page-add',
  templateUrl: 'add.component.html'
})

export class AddComponent {

  list: List;

  constructor( public service: TaskListService,
               private navParams: NavParams ) {

    console.log(this.navParams.get('name'));

    this.list = new List( this.navParams.get( 'name' ) );

  }



}
