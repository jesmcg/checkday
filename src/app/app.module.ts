import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsPage, HomePage, LoginPage, HistoryPage, ChartPage, UsersPage, SaveScreenPage } from '../pages/page.index';
import { LoginProvider } from '../providers/login/login';
import { UserProvider } from '../providers/user/user';

// plugins
import { HttpModule } from '@angular/http'
import { IonicStorageModule } from '@ionic/storage';
import { Device } from '@ionic-native/device';
import { Geolocation } from '@ionic-native/geolocation';
import { Geofence } from '@ionic-native/geofence';
// Provides
import { CheckdayProvider } from '../providers/checkday/checkday';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    LoginPage,
    HistoryPage,
    ChartPage,
    UsersPage,
    SaveScreenPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    LoginPage,
    HistoryPage,
    ChartPage,
    UsersPage,
    SaveScreenPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Geofence,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    UserProvider,
    Device,
    CheckdayProvider
  ]
})
export class AppModule {}
