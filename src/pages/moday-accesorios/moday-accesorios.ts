import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-moday-accesorios',
  templateUrl: 'moday-accesorios.html',
})
export class ModayAccesoriosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private InAppBrowser: InAppBrowser) {
  }

  openApp38() {
    this.InAppBrowser.create("https://www.adntienda.com/shop/category/hogar-cuidado-personal-planchas-para-cabello-264","_self");
  }

  openApp39() {
    this.InAppBrowser.create("https://www.adntienda.com/shop/category/hogar-cuidado-personal-para-ellas-133","_self");
  }

  openApp40() {
    this.InAppBrowser.create("https://www.adntienda.com/shop/category/hogar-cuidado-personal-secadoras-266","_self");
  }

}
