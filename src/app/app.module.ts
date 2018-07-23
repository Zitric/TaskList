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

// Servicies
import { TaskListService } from "../providers/task-list.service";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ToDoComponent,
    CompletedComponent
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
    CompletedComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TaskListService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
