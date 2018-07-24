import { Injectable } from "@angular/core";
import { List } from '../models/list.model';

@Injectable()
export class TaskListService {

  lists: List[] = [];

  constructor() {

    this.loadStorage();

  }

  addList( list: List ) {
    this.lists.push( list );
    this.saveStorage();
  }

  deleteList( list: List ) {
    this.lists = this.lists.filter( res => {
      return res.id !== list.id;
    });
  }

  saveStorage() {
    localStorage.setItem('data', JSON.stringify( this.lists ));
  }

  loadStorage() {

    if( localStorage.getItem( 'data' )) {
      this.lists = JSON.parse( localStorage.getItem( 'data' ));
    }
  }
}
