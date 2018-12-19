import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-tecnologia',
  templateUrl: 'tecnologia.html',
})
export class TecnologiaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private InAppBrowser: InAppBrowser) {
  }

  openApp23() {
    this.InAppBrowser.create("https://www.adntienda.com/shop/category/celulares-378","_self");
  }

  openApp24() {
    this.InAppBrowser.create("https://www.adntienda.com/shop/category/celulares-mas-vendidos-45","_self");
  }

  openApp25() {
    this.InAppBrowser.create("https://www.adntienda.com/shop/category/celulares-tablet-428","_self");
  }

}
