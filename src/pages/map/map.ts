import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
import { DetailPage} from "../detail/detail";

import { ScreenOrientation } from '@ionic-native/screen-orientation';


@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  data: any;
  selectedItem: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private modalCtrl: ModalController,private screenOrientation: ScreenOrientation) {

    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

    this.data = this.navParams.get('item');
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad MapPage');
  }

  presentModal(img,datarol) {
    let modal = this.modalCtrl.create(ModalPage,{ imagepath: './assets/imgs/'+img,title: "สายที่ "+datarol });
    modal.present();
  }

  openmapdetail(route){
     console.log(route);
     this.navCtrl.push(DetailPage,
     {
       data : route,
     });

  }

}
