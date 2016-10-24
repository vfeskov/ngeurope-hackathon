import { Component } from '@angular/core';
import {ApiService} from '../shared';

@Component({
  selector: 'my-new-record',
  templateUrl: './new-record.component.html',
  styleUrls: ['./new-record.component.scss'],
})
export class NewRecordComponent {
	private record;
	constructor(private apiService:ApiService) {
		this.record = {};
	}
	submit($event) {
		$event.preventDefault();
		this.apiService.getElevationData().push(this.record).then(() => {
			this.record = {};
		});
	}
}