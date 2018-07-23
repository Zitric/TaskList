import { ItemList } from "./item-list.model";

export class List {

  id: number;
  title: string;
  created: Date;
  completedAt: Date;
  completed: boolean;
  items: ItemList[];

  constructor( title: string ) {

    this.title = title;

    this.completed = false;
    this.created = new Date();
    this.items = [];

    this.id = new Date().getTime();
  }

}
