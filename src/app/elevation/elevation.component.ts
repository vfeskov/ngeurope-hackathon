import {Component,OnDestroy} from '@angular/core';
import {CommonModule} from "@angular/common"

import {AgRendererComponent} from 'ag-grid-ng2/main';
import {GridOptions} from 'ag-grid/main';
import {LicenseManager} from 'ag-grid-enterprise/main';

import '../../../node_modules/ag-grid/dist/styles/ag-grid.css';
import '../../../node_modules/ag-grid/dist/styles/theme-fresh.css';

import {ApiService} from '../shared';

// only import this if you are using the ag-Grid-Enterprise
import 'ag-grid-enterprise/main';

@Component({
    selector: 'ag-elevation',
    templateUrl: './elevation.component.html'
})
export class ElevationComponent {
    private gridOptions:GridOptions;

    constructor(private apiService:ApiService) {
        LicenseManager.setLicenseKey("Ag-Grid_ag-Grid_Devs_21_November_2016__MTQ3OTY4NjQwMDAwMA==e1c9c3094696b86e3e1e067cd8cbe3e2");

        this.gridOptions = <GridOptions>{
        	rowSelection: 'single'
        };
        this.gridOptions.columnDefs = [
            {headerName: "Category", field: "Category", enableRowGroup: true, enablePivot: true},
            {headerName: "Date", field: "Date", enableRowGroup: true, enablePivot: true},
            {headerName: "Day Of Week", field: "DayOfWeek", enableRowGroup: true, enablePivot: true},
            {headerName: "Description", field: "Descript"},
            {headerName: "Elevation", field: "Elevation"},
            {headerName: "Incident Number", field: "IncidntNum"},
            {headerName: "Location", field: "Location", enableRowGroup: true, enablePivot: true},
            {headerName: "PD District", field: "PdDistrict", enableRowGroup: true, enablePivot: true},
            {headerName: "Resolution", field: "Resolution", enableRowGroup: true, enablePivot: true},
            {headerName: "Time", field: "Time"},
            {headerName: "X", field: "X"},
            {headerName: "Y", field: "Y"}
        ];
    }

    private onGridReady(event) {
        this.gridOptions.api.sizeColumnsToFit();
    }

    ngOnInit() {
        this.apiService.getElevationData().subscribe(data => {
        	this.gridOptions.api.setRowData(data);
        });
    }
}