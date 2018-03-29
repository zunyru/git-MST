import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule  } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { BarcodeScanner } from  '@ionic-native/barcode-scanner';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MapPage } from '../pages/map/map';
import { DetailPage } from '../pages/detail/detail';
import { ModalPage } from '../pages/modal/modal';
import { BusPage } from '../pages/bus/bus';
import { ScannerPage } from '../pages/scanner/scanner';
import { TimerPage } from '../pages/timer/timer';
import { TimerdetailPage } from '../pages/timerdetail/timerdetail';
import { SearchbarPage } from '../pages/searchbar/searchbar';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DetailPage,
    MapPage,
    ModalPage,
    BusPage,
    ScannerPage,
    TimerPage,
    TimerdetailPage,
    SearchbarPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: 'ย้อนกลับ',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabbarPlacement: 'bottom',
      pageTransition: 'ios',
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DetailPage,
    MapPage,
    ModalPage,
    BusPage,
    ScannerPage,
    TimerPage,
    TimerdetailPage,
    SearchbarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    ScreenOrientation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
