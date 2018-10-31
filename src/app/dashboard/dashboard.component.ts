import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../dashboard/dashboard.service'
import {AlertService} from '../_services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isDisabled = 0;
  private values; 
  private summaries;
  private users; 
  public rowData;
  constructor(private _dashboardService: DashboardService, private alertService: AlertService) { }

  columnDefs = [
    {headerName: 'FirstName', field: 'firstName'},
    {headerName: 'LastName', field: 'lastName'},
    {headerName: 'UserName', field: 'userName'},    
    {headerName: 'Created Date', field: 'createdDate'},
    {headerName: 'Active', field: 'isActive'}
];



  ngOnInit() {
    this.getValues();
    this.getUsers();
  }

  getValues() {
    this._dashboardService.getValues().subscribe(
      data => {
        this.values = data;
        this.summaries = data;
      },
      error => {
        let err = error.error.error_description || error.error.message;
        this.alertService.error(err);
      },
      () => console.log('done loading values')
    );
  }
  getUsers() {
    this._dashboardService.getUsers().subscribe(
      data => {
        this.users = data;  
        this.rowData = data;       
      },
      error => {
        let err = error.error.error_description || error.error.message;
        this.alertService.error(err);
      },
      () => console.log('done loading values')
    );
  }

  changeDropdown(val: any) {
    if (val == "0")
      this.values = this.summaries;
    else
      this.values = this.summaries.filter((item) => item.id == val);
  }

}
