import { Component } from "@angular/core";
import { TaskListService } from "../../providers/task-list.service";
import { ItemList, List } from "../../models";
import { NavParams } from "ionic-angular";

@Component({
  selector: 'page-add',
  templateUrl: 'add.component.html'
})

export class AddComponent {

  list: List;
  nameItem: string = '';

  constructor( public service: TaskListService,
               private navParams: NavParams ) {

    if ( this.navParams.get( 'list' )) {
      this.list = this.navParams.get( 'list' );
    } else {
      this.list = new List( this.navParams.get( 'name' ) );
      this.service.addList( this.list );
    }
  }

  addItem() {
    if ( this.nameItem.length > 0 ) {
      const newItem = new ItemList( this.nameItem );
      this.list.items.push( newItem );
      this.nameItem = '';
      this.service.saveStorage();
    }
  }

  updateItem( item: ItemList ) {

    item.completed = !item.completed;

    const toDo = this.list.items.filter( itemData => {
      return !itemData.completed;
    }).length;

    console.log('numero de items por completar',toDo);

    if ( toDo === 0 ) {
      this.list.completed = true;
      this.list.completedAt = new Date();
    } else {
      this.list.completed = false;
      this.list.completedAt = null;
    }

    this.service.saveStorage();
  }

  removeItem( index: number ) {
    this.list.items.splice( index, 1);
    this.service.saveStorage();
  }
}
