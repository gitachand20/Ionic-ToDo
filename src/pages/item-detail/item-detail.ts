import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
 
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
 
  nama;
  notelp;
  email;
 
  constructor(public navParams: NavParams){
 
  }
 
  ionViewDidLoad() {
    this.nama = this.navParams.get('item').nama;
    this.notelp = this.navParams.get('item').notelp;
    this.email = this.navParams.get('item').email;
  }
 
}