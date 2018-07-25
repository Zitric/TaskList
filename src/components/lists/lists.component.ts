import { Component, Input } from "@angular/core";
import { TaskListService } from "../../providers/task-list.service";
import { List } from "../../models";
import { AddComponent } from "../../pages/add/add.component";
import { AlertController, ItemSliding, NavController } from "ionic-angular";

@Component({
  selector: 'app-lists',
  templateUrl: 'lists.component.html'
})

export class ListsComponent {

  @Input() completed: boolean = false;

  constructor( public service: TaskListService,
               private navCtrl: NavController,
               private alertCtrl: AlertController ) { }


  listSelected( list: List ) {
    console.log('List',list);
    this.navCtrl.push( AddComponent, {
      name: list.name,
      list: list
    });
  }

  deleteList( list: List ) {
    this.service.deleteList( list );

  }

  editList( list: List, slidingItem: ItemSliding ) {

    slidingItem.close();

    const alert = this.alertCtrl.create({
      title: 'Edit name',
      message: 'Edit the name of the list',
      inputs: [{
        name: 'name',
        placeholder: 'Name of the list',
        value: list.name
      }],
      buttons: [{
        text: 'Cancel'
      }, {
        text: 'Save',
        handler: data => {
          if ( data.name.length > 0 ) {
            list.name = data.name;
            this.service.saveStorage();
          }
        }
      }
      ]

    });
    alert.present();
  }
}

