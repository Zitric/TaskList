import { Component } from "@angular/core";
import { TaskListService } from "../../providers/task-list.service";
import { AlertController, NavController } from "ionic-angular";
import { AddComponent } from "../add/add.component";

@Component({
  selector: 'page-todo',
  templateUrl: 'to-do.component.html'
})

export class ToDoComponent {

  constructor( private service: TaskListService,
               private navCtrl: NavController,
               private alertCtrl: AlertController) { }

  addList() {

    const alert = this.alertCtrl.create({
      title: 'New List',
      message: 'Name of the new list',
      inputs: [{
        name: 'name',
        placeholder: 'Name of the list'
      }],
      buttons: [{
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked', data );
          }
        }, {
          text: 'Save',
          handler: data => {
            if ( data.name.length > 0 ) {
              console.log('Saved clicked', data );
              this.navCtrl.push( AddComponent, {
                name: data.name
              });
            }
          }
        }
      ]

    });
    alert.present();
  }
}
