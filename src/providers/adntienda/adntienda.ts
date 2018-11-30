import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/*
  Generated class for the AdntiendaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AdntiendaProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AdntiendaProvider Provider');
  }

}
