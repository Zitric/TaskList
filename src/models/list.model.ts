import { ItemList } from "./item-list.model";

export class List {

  id: number;
  name: string;
  created: Date;
  completedAt: Date;
  completed: boolean;
  items: ItemList[];

  constructor( name: string ) {

    this.name = name;

    this.completed = false;
    this.created = new Date();
    this.items = [];

    this.id = new Date().getTime();
  }

}
