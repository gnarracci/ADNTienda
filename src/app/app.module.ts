import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {TecnologiaPage} from '../pages/tecnologia/tecnologia';
import { ZonaGamerPage } from '../pages/zona-gamer/zona-gamer';
import { ZonaFitPage } from '../pages/zona-fit/zona-fit';
import { AudioyVideoPage } from '../pages/audioy-video/audioy-video';
import { HogarPage } from '../pages/hogar/hogar';
import { ModayAccesoriosPage } from '../pages/moday-accesorios/moday-accesorios';
import { MasPage } from '../pages/mas/mas';
import { AdnPage } from '../pages/adn/adn';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TecnologiaPage,
    ZonaGamerPage,
    ZonaFitPage,
    AudioyVideoPage,
    HogarPage,
    ModayAccesoriosPage,
    MasPage,
    AdnPage    
  ],
  imports: [
  BrowserModule,
  IonicModule.forRoot(MyApp)
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TecnologiaPage,
    ZonaGamerPage,
    ZonaFitPage,
    AudioyVideoPage,
    HogarPage,
    ModayAccesoriosPage,
    MasPage,
    AdnPage
  ],
  providers: [
    InAppBrowser,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
