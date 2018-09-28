import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MasPage } from './mas';

@NgModule({
  declarations: [
    MasPage,
  ],
  imports: [
    IonicPageModule.forChild(MasPage),
  ],
})
export class MasPageModule {}
