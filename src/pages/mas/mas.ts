import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-mas',
  templateUrl: 'mas.html',
})
export class MasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private InAppBrowser: InAppBrowser) {
  }

  openApp41() {
    this.InAppBrowser.create("https://www.adntienda.com/shop/category/tecnologia-audio-y-video-parlantes-bluetooth-59","_self");
  }

  openApp42() {
    this.InAppBrowser.create("https://www.adntienda.com/shop/category/hogar-hogar-128","_self");
  }

  openApp43() {
    this.InAppBrowser.create("https://www.adntienda.com/shop/category/hogar-cocina-coffeemaker-247","_self");
  }

}
