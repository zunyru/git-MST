import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { TimerdetailPage } from "../timerdetail/timerdetail";

@Component({
	selector: 'page-timer',
	templateUrl: 'timer.html',
})
export class TimerPage {
	selectedItem: any;
	root : string[];
	title_name : string[];
	strats :string[];
	ends :string[];
	img_maps: string[];
	img_icobs:string[];
	stations:string[];
	items: Array<{title: string, strat: string,end : string, map: string,station : string ,rol :string,icons :string}>;


	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.selectedItem = navParams.get('item');

		this.root = ['1', '3','4', '4660'];
		this.title_name = ['ตลาดเกษตร - เรือนจำ', 'ม.ราชภัฏ - ศาลากลางใหม่', 'มมส.เก่า - มมส.ใหม่','บขส. - มมส.ใหม่'];
		this.strats = ['ตลาดเกษตร','ม.ราชภัฏ','มมส.เก่า','บขส.'];
		this.ends = ['เรือนจำ','ศาลากลางใหม่','มมส.ใหม่','มมส.ใหม่'];
		this.img_icobs = ['icon1.png','icon3.png','icon4.png','icon4660.png'];
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
	}

	itemTapped(event, item) {
		// That's right, we're pushing to ourselves!
		this.navCtrl.push(TimerdetailPage, {
			item: item
		});
	}

}
