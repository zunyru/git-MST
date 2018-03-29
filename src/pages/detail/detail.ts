import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  data : any;
  title_route : string[];
  image_route : string[];
  items: Array<{title: string,route : string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams,private modalCtrl: ModalController,private screenOrientation: ScreenOrientation) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.data = this.navParams.get('data');

    if(this.data == "1"){
     this.title_route = ['ตลาดเกษตร', 'วิทยลัยพละ', 'ม.ราชภัฎ','ห้างเสริมไทย','มมส.เก่า','ห้าแยก','3 แยกกาฬสินธุ์','หน้าไทยสมุทร','ผดุงนารี','ตลาด','บขส.','รร.ตักศิลา','บูรพา','อาชีวะ','บ้านนางใย','บ้านส่อง','เรือนจำ'];
     this.image_route = ['a001', 'a002','a003','a004','a005','a006','a007','a008','a009','a010','a011','a012','a013','a014','a015','a016','a017'];
    }else if(this.data == "3"){
     this.title_route = ['มมส.เก่า(ข้างคณะวัฒนธรรมฯ)','ม.ราชภัฎ','รร.เทศบาลศรีสวัสดิ์วิทยา','รร.อนุบาลมหาสารคาม','สารคามพิทยาคม','ผดุงนารี','ตลาด','ธ.กรุงเทพ, ธ.ไทยพาณิชย์, ธ.กรุงศรี','บขส.','ธ.กรุงไทย, ธ.ออมสิน, ธกส.','อาชีวะ','ศาลากลางใหม่', ];
     this.image_route = ['b001','b002','b003','b004','b005','b006','b007','b008', 'b09', 'b010','b011','b012', ];
    }else if(this.data == "4"){
     this.title_route = ['มมส.ใหม่(ข้างเรียง)','ท่าขอนยาง','บ้านดินดำ','บ้านทุ่งนาเรา','4 แยกวิทยาลัยพละ','ม.ราชภัฎ','ห้างเสริมไทย','มมส.เก่า',];
     this.image_route = ['c001','c002','c003','c004','c005','c006','c007','c008',];
    }else if(this.data == "4660"){
     this.title_route = ['บขส.','ผดุงนารี','หอนาฬิกา','หลักเมือง','3 แยกกาฬสินธุ์','แขวงการทาง','คณะกรรมการโรงแรมฯ','Big C','บ้านดินดำ','สะพานชี','ท่าขอนยาง','มมส.ใหม่',];
     this.image_route = ['d001','d002','d003','d004','d005','d006','d007','d008','d009','d010','d011','d012',];
    }

    this.items = [];
    for (let i = 0; i < this.title_route.length; i++) {
      this.items.push({
        title: this.title_route[i],
        route: this.image_route[i],
      });

    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
    
  }

  presentModal(titelmap,data) {
    console.log(titelmap.title);
    console.log(data);


    let modal = this.modalCtrl.create(ModalPage,{ imagepath: './assets/imgs/'+titelmap.route+".png",title: titelmap.title,data: data });
    modal.present();
  }


}
