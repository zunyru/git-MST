import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';

/**
 * Generated class for the SearchbarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @Component({
 	selector: 'page-searchbar',
 	templateUrl: 'searchbar.html',
 })
 export class SearchbarPage {

 	searchQuery: string = '';
 	items: string[];
 	image_map:string ='';
  line :string ='';

 	constructor(public navCtrl: NavController, public navParams: NavParams,private modalCtrl: ModalController) {
 		this.initializeItems();
 	}

 	
 	ionViewDidLoad() {
 		console.log('ionViewDidLoad SearchbarPage');
 	}

 	initializeItems() {
 		this.items = [
 		'ตลาดเกษตร', 'วิทยลัยพละ', 'ม.ราชภัฎ','ห้างเสริมไทย','มมส.เก่า','ห้าแยก','3 แยกกาฬสินธุ์','หน้าไทยสมุทร','ผดุงนารี','ตลาด','บขส.','รร.ตักศิลา','บูรพา','อาชีวะ','บ้านนางใย','บ้านส่อง','เรือนจำ',
 		'มมส.เก่า(ข้างคณะวัฒนธรรมฯ)','รร.เทศบาลศรีสวัสดิ์วิทยา','รร.อนุบาลมหาสารคาม','สารคามพิทยาคม','ธ.กรุงเทพ, ธ.ไทยพาณิชย์, ธ.กรุงศรี','ธ.กรุงไทย, ธ.ออมสิน, ธกส.','ศาลากลางใหม่',
 		'มมส.ใหม่(ข้างเรียง)','ท่าขอนยาง','บ้านดินดำ','บ้านทุ่งนาเรา','4 แยกวิทยาลัยพละ',
 		'หอนาฬิกา','หลักเมือง','แขวงการทาง','คณะกรรมการโรงแรมฯ','Big C','สะพานชี','มมส.ใหม่',
 		];
 		this.items.sort();
 	}

 	getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
    	this.items = this.items.filter((item) => {
    		return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
    	})
    }
}

presentModal(titelmap) {
	console.log(titelmap);
    if(titelmap == 'ตลาดเกษตร'){
       this.image_map = 'a001';
       this.line = '1';
    }else if(titelmap == 'วิทยลัยพละ'){
       this.image_map = 'a002';	
       this.line = '1'; 
    }else if(titelmap == 'ม.ราชภัฎ'){
       this.image_map = 'a003';
       this.line = '1';	 
    }else if(titelmap == 'ห้างเสริมไทย'){
       this.image_map = 'a004';
       this.line = '1';	 
    }else if(titelmap == 'มมส.เก่า'){
       this.image_map = 'a005';
       this.line = '1';	 
    }else if(titelmap == 'ห้าแยก'){
       this.image_map = 'a006';
       this.line = '1';	 
    }else if(titelmap == '3 แยกกาฬสินธุ์'){
       this.image_map = 'a007';
       this.line = '1';	 
    }else if(titelmap == 'หน้าไทยสมุทร'){
       this.image_map = 'a008';
       this.line = '1';	 
    }else if(titelmap == 'ผดุงนารี'){
       this.image_map = 'a009';
       this.line = '1';	 
    }else if(titelmap == 'ตลาด'){
       this.image_map = 'a010';
       this.line = '1';	 
    }else if(titelmap == 'บขส.'){
       this.image_map = 'a011';
       this.line = '1';	 
    }else if(titelmap == 'รร.ตักศิลา'){
       this.image_map = 'a012';
       this.line = '1';	 
    }else if(titelmap == 'บูรพา'){
       this.image_map = 'a013';
       this.line = '1';	 
    }else if(titelmap == 'อาชีวะ'){
       this.image_map = 'a014';
       this.line = '1';	 
    }else if(titelmap == 'บ้านนางใย'){
       this.image_map = 'a015';
       this.line = '1';	 
    }else if(titelmap == 'บ้านส่อง'){
       this.image_map = 'a016';
       this.line = '1';	 
    }else if(titelmap == 'เรือนจำ'){
       this.image_map = 'a017';
       this.line = '1';	 
    }else if(titelmap == 'มมส.เก่า(ข้างคณะวัฒนธรรมฯ)'){
       this.image_map = 'b001';
       this.line = '3';	
    }else if(titelmap == 'รร.เทศบาลศรีสวัสดิ์วิทยา'){
       this.image_map = 'b003';
       this.line = '3';	 
    }else if(titelmap == 'รร.อนุบาลมหาสารคาม'){
       this.image_map = 'b004';
       this.line = '3';	 
    }else if(titelmap == 'สารคามพิทยาคม'){
       this.image_map = 'b005';
       this.line = '3';  	 
    }else if(titelmap == 'ธ.กรุงเทพ, ธ.ไทยพาณิชย์, ธ.กรุงศรี'){
       this.image_map = 'b008';
       this.line = '3';  	 
    }else if(titelmap == 'ธ.กรุงไทย, ธ.ออมสิน, ธกส.'){
       this.image_map = 'b010';	
       this.line = '3';   
    }else if(titelmap == 'ศาลากลางใหม่'){
       this.image_map = 'b012';
       this.line = '3';  	 
    }else if(titelmap == 'มมส.ใหม่(ข้างเรียง)'){
       this.image_map = 'c001';
       this.line = '4';  	 
    }else if(titelmap == 'ท่าขอนยาง'){
       this.image_map = 'c002';
       this.line = '4';	 
    }else if(titelmap == 'บ้านดินดำ'){
       this.image_map = 'c003';
       this.line = '4';	 
    }else if(titelmap == 'บ้านทุ่งนาเรา'){
       this.image_map = 'c004';
       this.line = '4';	 
    }else if(titelmap == '4 แยกวิทยาลัยพละ'){
       this.image_map = 'c005';
       this.line = '4';	 
    }else if(titelmap == 'หอนาฬิกา'){
       this.image_map = 'd003';
       this.line = '4660';	 
    }else if(titelmap == 'หลักเมือง'){
       this.image_map = 'd004';
       this.line = '4660';	 
    }else if(titelmap == 'แขวงการทาง'){
       this.image_map = 'd006';
       this.line = '4660';	 
    }else if(titelmap == 'คณะกรรมการโรงแรมฯ'){
       this.image_map = 'd007';
       this.line = '4660';	 
    }else if(titelmap == 'Big C'){
       this.image_map = 'd008';
       this.line = '4660';	 
    }else if(titelmap == 'สะพานชี'){
       this.image_map = 'd010';
       this.line = '4660';	 
    }else if(titelmap == 'มมส.ใหม่'){
       this.image_map = 'd012';
       this.line = '4660';	 
    }

	let modal = this.modalCtrl.create(ModalPage,{ imagepath: './assets/imgs/'+this.image_map+".png",title: titelmap,data : this.line });
	modal.present();
}

}


