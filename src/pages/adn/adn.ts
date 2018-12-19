import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@IonicPage()
@Component({
  selector: 'page-adn',
  templateUrl: 'adn.html',
})
export class AdnPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private InAppBrowser: InAppBrowser) {
  }

  openApp44() {
    this.InAppBrowser.create("https://www.adntienda.com/page/nosotros-adn-tienda","_self");
  }

  openApp45() {
    this.InAppBrowser.create("https://www.adntienda.com/page/nosotros-adn-tienda","_self");
  }

}
