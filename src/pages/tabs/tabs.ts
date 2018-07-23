import { Component } from '@angular/core';

import { ToDoComponent } from "../to-do/to-do.component";
import { CompletedComponent } from "../completed/completed.component";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ToDoComponent;
  tab2Root = CompletedComponent;

  constructor() {

  }
}
