import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdnPage } from './adn';

@NgModule({
  declarations: [
    AdnPage,
  ],
  imports: [
    IonicPageModule.forChild(AdnPage),
  ],
})
export class AdnPageModule {}
