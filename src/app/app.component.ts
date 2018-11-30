import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TecnologiaPage } from '../pages/tecnologia/tecnologia';
import { ZonaGamerPage } from '../pages/zona-gamer/zona-gamer';
import { ZonaFitPage } from '../pages/zona-fit/zona-fit';
import { AudioyVideoPage } from '../pages/audioy-video/audioy-video';
import { HogarPage } from '../pages/hogar/hogar';
import { ModayAccesoriosPage } from '../pages/moday-accesorios/moday-accesorios';
import { MasPage } from '../pages/mas/mas';
import { AdnPage } from '../pages/adn/adn';


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild('NAV') nav: Nav;
  rootPage:any = HomePage;

  public pages:Array<{ titulo:string, component:any, icon:string }>

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    this.pages = [
      { titulo: 'Inicio', component: HomePage, icon: 'home' },
      { titulo: 'Tecnología', component: TecnologiaPage, icon: 'wifi' },
      { titulo: 'Zona Gamer', component: ZonaGamerPage, icon: 'logo-snapchat' },
      { titulo: 'Zona Fit', component: ZonaFitPage, icon: 'mail' },
      { titulo: 'Audio y Video', component: AudioyVideoPage, icon: 'planet' },
      { titulo: 'Hogar', component: HogarPage, icon: 'alarm' },
      { titulo: 'Moda y Accesorios', component: ModayAccesoriosPage, icon: 'arrow-forward' },
      { titulo: 'Más', component: MasPage, icon: 'aperture' },
      { titulo: 'ADN', component: AdnPage, icon: 'add-circle' }

    ]

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToPage(page){
    this.nav.setRoot(page);
  }
}

