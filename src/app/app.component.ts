import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BusPage } from '../pages/bus/bus';
import { ScannerPage } from '../pages/scanner/scanner';
import { TimerPage } from '../pages/timer/timer';

import { SearchbarPage } from '../pages/searchbar/searchbar';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  activePage : any;
  pages: Array<{title: string, component: any ,icon :any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'ข้อมูลเส้นทาง', component: ListPage ,icon: 'logo1.png' },
      { title: 'QR Code Scan', component: ScannerPage ,icon: 'logo3.png'  },
      { title: 'อัตราค่าโดยสาร', component: BusPage ,icon: 'logo4.png'  },
      { title: 'ตารางเวลา', component: TimerPage ,icon: 'logo5.png'  },
      { title: 'ค้นหาสถานที่', component: SearchbarPage ,icon: 'logo6.png'  },
    ];

    this.activePage = this.pages[0];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activePage = page;
  }

  checkActive(page){
    return page == this.activePage;
  }

  openmainpage(){
    this.nav.push(HomePage);
    this.activePage = HomePage;
  }
}
