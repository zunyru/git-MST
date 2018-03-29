import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
import { ScreenOrientation } from '@ionic-native/screen-orientation';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	

  constructor(public navCtrl: NavController,private modalCtrl: ModalController,private screenOrientation: ScreenOrientation) {

  	this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

  }

  ionViewDidLoad() {

  }

   presentModal() {
    let modal = this.modalCtrl.create(ModalPage,{ imagepath: './assets/imgs/mapsectioncopy.png',title:'แผนที่ระบบขนส่งสาธารณธมหาสารคาม' });
    modal.present();
  }

 
}
