import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@IonicPage()
@Component({
  selector: 'page-zona-gamer',
  templateUrl: 'zona-gamer.html',
})
export class ZonaGamerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private InAppBrowser: InAppBrowser) {
  }

openApp26() {
  this.InAppBrowser.create("https://www.adntienda.com/shop/category/zona-gamer-consolas-68","_self");
}

openApp27() {
  this.InAppBrowser.create("https://www.adntienda.com/shop/category/tecnologia-pantallas-pantallas-283","_self");
}

openApp28() {
  this.InAppBrowser.create("https://www.adntienda.com/shop/category/tecnologia-top-audifonos-185","_self");
}

}
