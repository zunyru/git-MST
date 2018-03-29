import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MapPage} from "../map/map";

/**
 * Generated class for the TimerdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-timerdetail',
  templateUrl: 'timerdetail.html',
})
export class TimerdetailPage {

  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.data = this.navParams.get('item');
  	console.log(this.data);
  }

  ionViewDidLoad() {
    console.log(this.data);
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(MapPage, {
      item: item
    });
  }

}