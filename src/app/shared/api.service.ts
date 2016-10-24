import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { AngularFire } from 'angularfire2';

@Injectable()
export class ApiService {
	constructor(private af:AngularFire) {
    }

    public getElevationData():Observable<any[]> {
        return this.af.database.list('/');
    }
}
