import { Injectable } from "@angular/core";
import { List } from '../models/list.model';

@Injectable()
export class TaskListService {

  lists: List[] = [];

  constructor() {

    const stonesList = new List('Get the infinity stones' );
    const heroesList = new List( 'Heroes to defeat' );

    this.lists.push( stonesList, heroesList );
    console.log( this.lists );


  }

}
