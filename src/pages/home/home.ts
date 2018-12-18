import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    private InAppBrowser: InAppBrowser) { }

  openApp() {
    this.InAppBrowser.create("https://www.adntienda.com/web/login","_self");
  }


}
