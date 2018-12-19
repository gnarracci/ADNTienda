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

  openApp1() {
    this.InAppBrowser.create("https://www.adntienda.com/web/login","_self");
  }

  openApp2() {
    this.InAppBrowser.create("https://www.adntienda.com/shop/category/zona-gamer-consolas-68","_self");
  }

  openApp3() {
    this.InAppBrowser.create("https://www.adntienda.com/shop/category/celulares-378","_self");
  }

  openApp4() {
    this.InAppBrowser.create("https://www.adntienda.com/shop/category/hogar-126","_self");
  }

  openApp5() {
    this.InAppBrowser.create("https://www.adntienda.com/shop/category/moda-y-accesorios-526","_self");
  }

  openApp6() {
    this.InAppBrowser.create("https://www.adntienda.com/shop/category/celulares-378","_self");
  }

  openApp7() {
    this.InAppBrowser.create("https://www.adntienda.com/shop/category/celulares-marcas-397","_self");
  }

  openApp8() {
    this.InAppBrowser.create("https://www.adntienda.com/shop/category/celulares-accesorios-395","_self");
  }

  openApp9() {
    this.InAppBrowser.create("https://www.adntienda.com/shop/category/zona-gamer-consolas-68","_self");
  }

  openApp10() {
    this.InAppBrowser.create("https://www.adntienda.com/shop/category/ofertas-951","_self");
  }

  openApp11() {
    this.InAppBrowser.create("https://www.adntienda.com/shop/category/hogar-hogar-seguridad-camaras-914","_self");
  }

  openApp12() {
    this.InAppBrowser.create("https://www.adntienda.com/shop/category/zona-fit-143","_self");
  }

  openApp13() {
    this.InAppBrowser.create("https://www.adntienda.com/shop/category/tecnologia-top-audifonos-185","_self");
  }

  openApp14() {
    this.InAppBrowser.create("https://www.adntienda.com/shop/category/moda-y-accesorios-ninos-y-ninas-560","_self");
  }

  openApp15() {
    this.InAppBrowser.create("https://www.adntienda.com/shop/category/tecnologia-para-tu-vehiculo-62","_self");
  }

  openApp16() {
    this.InAppBrowser.create("https://www.adntienda.com/shop/category/hogar-perfumeria-136","_self");
  }

  openApp17() {
    this.InAppBrowser.create("https://www.adntienda.com/shop/category/computacion-laptops-laptops-282","_self");
  }

  openApp18() {
    this.InAppBrowser.create("https://www.adntienda.com/shop/category/tecnologia-pantallas-pantallas-283","_self");
  }

  openApp19() {
    this.InAppBrowser.create("https://www.adntienda.com/page/nosotros-adn-tienda","_self");
  }

  openApp20() {
    this.InAppBrowser.create("https://www.adntienda.com/page/como-comprar","_self");
  }

  openApp21() {
    this.InAppBrowser.create("https://www.adntienda.com/shop/category/ofertas-951","_self");
  }

  openApp22() {
    this.InAppBrowser.create("https://www.adntienda.com/page/garantia","_self");
  }

}
