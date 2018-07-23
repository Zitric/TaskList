import { Injectable } from "@angular/core";
import { List } from '../models/list.model';

@Injectable()
export class TaskListService {

  List: list[] = [];

  constructor() {


    console.log('Task List Services start');
  }

}
