import { Component } from '@angular/core';

import { Wakanda } from './wakanda.service';

import '../style/app.scss';

@Component({
  selector: 'my-app', // <my-app></my-app>
  providers: [Wakanda],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'https://github.com/preboot/angular2-webpack';
  public wakandaClientVersion: string;

  constructor(public wakanda: Wakanda) {
    this.wakandaClientVersion = this.wakanda.wakandaClientVersion;
  }
}
