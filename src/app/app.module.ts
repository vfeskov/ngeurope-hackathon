import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';

import { AgGridModule } from 'ag-grid-ng2/main';

import { AppComponent } from './app.component';
import { RecordsComponent } from './records/records.component';
import { NewRecordComponent } from './new-record/new-record.component';
import { ElevationComponent } from "./elevation/elevation.component";
import { ApiService } from "./shared";
import { routing } from './app.routing';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AngularFireModule.initializeApp({
      	apiKey: "AIzaSyC4FGOWef745exzE9ollgVDUY1RuJcMM-w",
		authDomain: "ng-europe-hackathon.firebaseapp.com",
		databaseURL: "https://ng-europe-hackathon.firebaseio.com",
		storageBucket: "ng-europe-hackathon.appspot.com"
    }),
    AgGridModule.withNg2ComponentSupport(),
    routing
  ],
  declarations: [
    AppComponent,
    RecordsComponent,
    NewRecordComponent,
    ElevationComponent
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
