import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';


@IonicPage()
@Component({
	selector: 'page-modal',
	templateUrl: 'modal.html',
})
export class ModalPage {
	images :any;
	title :any;

	constructor(private view: ViewController , public navParams: NavParams,private screenOrientation: ScreenOrientation) {

		this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

		this.images = navParams.get('imagepath');
		this.title = navParams.get('title');

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ModalPage');

	}

	closeModal(){
		this.view.dismiss();
		this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
	}



}
