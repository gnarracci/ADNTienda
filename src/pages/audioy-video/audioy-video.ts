import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-audioy-video',
  templateUrl: 'audioy-video.html',
})
export class AudioyVideoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private InAppBrowser: InAppBrowser) {
  }

  openApp32() {
    this.InAppBrowser.create("https://www.adntienda.com/shop/category/tecnologia-top-audifonos-185","_self");
  }

  openApp33() {
    this.InAppBrowser.create("https://www.adntienda.com/shop/category/tecnologia-pantallas-pantallas-283","_self");
  }

  openApp34() {
    this.InAppBrowser.create("https://www.adntienda.com/shop/category/tecnologia-para-tu-vehiculo-62","_self");
  }

}
