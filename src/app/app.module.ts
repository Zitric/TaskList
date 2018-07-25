import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Components
import { ToDoComponent } from "../pages/to-do/to-do.component";
import { CompletedComponent } from "../pages/completed/completed.component";
import { AddComponent } from "../pages/add/add.component";
import { ListsComponent } from "../components/lists/lists.component";

// Servicies
import { TaskListService } from "../providers/task-list.service";

// Pipes
import { FilterCompletePipe } from "../pipes/filter-complete/filter-complete";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ToDoComponent,
    CompletedComponent,
    AddComponent,
    FilterCompletePipe,
    ListsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ToDoComponent,
    CompletedComponent,
    AddComponent,
    ListsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TaskListService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
