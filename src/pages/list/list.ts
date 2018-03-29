import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MapPage} from "../map/map";
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  img_maps: string[];
  root : string[];
  strats :string[];
  ends :string[];
  title_name : string[];
  stations :  string[];
  items: Array<{title: string, strat: string,end : string, map: string,station : string ,rol :string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams ,private screenOrientation: ScreenOrientation) {

    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.root = ['1', '3','4', '4660'];
    this.title_name = ['ตลาดเกษตร - เรือนจำ', 'ม.ราชภัฏ - ศาลากลางใหม่', 'มมส.เก่า - มมส.ใหม่','บขส. - มมส.ใหม่'];
    this.strats = ['ตลาดเกษตร','ม.ราชภัฏ','มมส.เก่า','บขส.'];
    this.ends = ['เรือนจำ','ศาลากลางใหม่','มมส.ใหม่','มมส.ใหม่'];
    this.img_maps = ['r1.png','r3.png','r4.png','r4660.png'];
    this.stations = ['root01.png','root03.png','root04.png','root4660.png'];

    this.items = [];
    for (let i = 0; i < 4; i++) {
      this.items.push({
        title: this.title_name[i],
        strat : this.strats[i],
        end : this.ends[i],
        map: this.img_maps[i],
        station : this.stations[i],
        rol :this.root[i],
      });

    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    
    this.navCtrl.push(MapPage, {
      item: item
    });
    
  }
}
