import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {NewPersonPage} from '../pages/new-person/new-person';
import {PersonProvider} from '../providers/person.provider';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {IonicStorageModule} from '@ionic/storage';
import {AvatarModule} from "ng2-avatar";
import {CallNumber} from '@ionic-native/call-number';
import {DatePicker} from '@ionic-native/date-picker';
import {EditPersonPage} from '../pages/edit-person/edit-person';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewPersonPage,
    EditPersonPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    IonicStorageModule.forRoot({
      name: '__angendanny',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    IonicModule.forRoot(MyApp),
    AvatarModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewPersonPage, EditPersonPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PersonProvider,
    CallNumber,
    DatePicker
  ]
})
export class AppModule {
}
