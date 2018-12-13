import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../dashboard/dashboard.service'
import {AlertService} from '../_services';
import { ParamsComponent } from '../dashboard/params.component';

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
    { headerName: 'FirstName', field: 'firstName', width :100 },
    { headerName: 'LastName', field: 'lastName', width :100 },
    { headerName: 'UserName', field: 'userName', width :100 },    
    { headerName: 'Created Date', field: 'createdDate', width :170 },
    { headerName: 'Active', field: 'isActive', width :80},
    { headerName: 'Edit', field: 'id', cellRendererFramework: ParamsComponent, width :80 }    
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
