import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@IonicPage()
@Component({
  selector: 'page-hogar',
  templateUrl: 'hogar.html',
})
export class HogarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private InAppBrowser: InAppBrowser) {
  }

  openApp35() {
    this.InAppBrowser.create("https://www.adntienda.com/shop/category/hogar-cocina-licuadoras-y-batidoras-248","_self");
  }

  openApp36() {
    this.InAppBrowser.create("https://www.adntienda.com/shop/category/hogar-cocina-parrillas-256","_self");
  }

  openApp37() {
    this.InAppBrowser.create("https://www.adntienda.com/shop/category/hogar-cocina-ollas-250","_self");
  }

}
