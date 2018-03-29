import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from  '@ionic-native/barcode-scanner';
import { MapPage} from "../map/map";

/**
 * Generated class for the ScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html',
})
export class ScannerPage {
  params: Object;
  root : string[];
  title_name : string[];
  strats :string[];
  ends :string[];
  img_maps: string[];
  img_icobs:string[];
  stations:string[];
  items: Array<{title: string, strat: string,end : string, map: string,station : string ,rol :string,icons :string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public barcodeScanner: BarcodeScanner) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScannerPage');
    this.barcodeScanner.scan().then((barcodeData) => {

      this.root = ['1', '3','4', '4660'];
      this.title_name = ['ตลาดเกษตร - เรือนจำ', 'ม.ราชภัฏ - ศาลากลางใหม่', 'มมส.เก่า - มมส.ใหม่','บขส. - มมส.ใหม่'];
      this.strats = ['ตลาดเกษตร','ม.ราชภัฏ','มมส.เก่า','บขส.'];
      this.ends = ['เรือนจำ','ศาลากลางใหม่','มมส.ใหม่','มมส.ใหม่'];
      this.img_icobs = ['icon1.png','icon2.png','icon3.png','icon4.png'];
      this.img_maps = ['r1.png','r3.png','r4.png','r4660.png'];
      this.stations = ['root01.png','root03.png','root04.png','root4660.png'];

      this.items = [];
      for (let i = 0; i < 4; i++) {
        this.items.push({
          title: this.title_name[i],
          strat : this.strats[i],
          end : this.ends[i],
          map: this.img_maps[i],
          icons : this.img_icobs[i],
          station : this.stations[i],
          rol :this.root[i],
        });

      }

      if(barcodeData.cancelled){
         alert("ยกเลิกการสแกน");
      }else{
        //alert(barcodeData.text);
        if(barcodeData.text == "route 1"){
           this.navCtrl.push(MapPage, {
              item: this.items[0],
           });
        }else if(barcodeData.text == "route 3"){
           this.navCtrl.push(MapPage, {
              item: this.items[1],
           });
        }else if(barcodeData.text == "route 4"){
           this.navCtrl.push(MapPage, {
              item: this.items[2],
           });
        }else if(barcodeData.text == "route 4660"){
           this.navCtrl.push(MapPage, {
              item: this.items[3],
           });
        }else{
          alert("Qr code ไม่มีข้อมูลของเส้นทางนี้");
        }

      }
      
    }, (err) => {
      // An error occurred
      alert(err.text);
    });
  }

  scannerclick() {
       this.barcodeScanner.scan().then((barcodeData) => {

         this.root = ['1', '3','4', '4660'];
         this.title_name = ['ตลาดเกษตร - เรือนจำ', 'ม.ราชภัฏ - ศาลากลางใหม่', 'มมส.เก่า - มมส.ใหม่','บขส. - มมส.ใหม่'];
         this.strats = ['ตลาดเกษตร','ม.ราชภัฏ','มมส.เก่า','บขส.'];
         this.ends = ['เรือนจำ','ศาลากลางใหม่','มมส.ใหม่','มมส.ใหม่'];
         this.img_icobs = ['icon1.png','icon2.png','icon3.png','icon4.png'];
         this.img_maps = ['r1.png','r3.png','r4.png','r4660.png'];
         this.stations = ['root01.png','root03.png','root04.png','root4660.png'];

         this.items = [];
         for (let i = 0; i < 4; i++) {
           this.items.push({
             title: this.title_name[i],
             strat : this.strats[i],
             end : this.ends[i],
             map: this.img_maps[i],
             icons : this.img_icobs[i],
             station : this.stations[i],
             rol :this.root[i],
           });
         }

         if(barcodeData.cancelled){
            alert("ยกเลิกการสแกน");
         }else{
           //alert(barcodeData.text);
           if(barcodeData.text == "route 1"){
              this.navCtrl.push(MapPage, {
                 item: this.items[0],
              });
           }else if(barcodeData.text == "route 3"){
              this.navCtrl.push(MapPage, {
                 item: this.items[1],
              });
           }else if(barcodeData.text == "route 4"){
              this.navCtrl.push(MapPage, {
                 item: this.items[2],
              });
           }else if(barcodeData.text == "route 4660"){
              this.navCtrl.push(MapPage, {
                 item: this.items[3],
              });
           }else{
             alert("Qr code ไม่มีข้อมูลของเส้นทางนี้");
           }

         }
         
       }, (err) => {
         // An error occurred
         alert(err.text);
       });
  }  


}
