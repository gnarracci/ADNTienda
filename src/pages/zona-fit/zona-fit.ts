import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-zona-fit',
  templateUrl: 'zona-fit.html',
})
export class ZonaFitPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private InAppBrowser: InAppBrowser) {
  }

  openApp29() {
    this.InAppBrowser.create("https://www.adntienda.com/shop/category/zona-fit-143","_self");
  }

  openApp30() {
    this.InAppBrowser.create("https://www.adntienda.com/shop/category/zona-fit-otros-productos-botellas-hidratacion-149","_self");
  }

  openApp31() {
    this.InAppBrowser.create("https://www.adntienda.com/shop/category/tecnologia-para-tu-vehiculo-62","_self");
  }

}
