import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service';
import * as signalR from '@microsoft/signalr';
import { NotificationCountResult, NotificationResult } from '../Notification/notification';
import { NotificationService } from '../Notification/notification.service';
import { environment } from 'src/environments/environment';
import { CertificationService } from './certification.service';
import { Employee } from './employee';


@Component({
  selector: 'app-certificationprogress',
  templateUrl: './certificationprogress.component.html',
  styleUrls: ['./certificationprogress.component.css']
})
export class CertificationprogressComponent implements OnInit {
  
  pageTitle = 'Employee List';
  filteredEmployees: Employee[] = [];
  employees: Employee[] = [];
  errorMessage = '';
  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredEmployees = this.listFilter ? this.performFilter(this.listFilter) : this.employees;
  }

  constructor(private employeeService: CertificationService, private modalService: ModalService) { }
  performFilter(filterBy: string): Employee[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.employees.filter((employee: Employee) =>
      employee.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    this.getEmployeeData();

    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(environment.baseUrl + 'notify')
      .build();

    connection.start().then(function () {
      console.log('SignalR Connected!');
    }).catch(function (err) {
      return console.error(err.toString());
    });

    connection.on("BroadcastMessage", () => {
      this.getEmployeeData();
    });
  }

  getEmployeeData() {
    this.employeeService.getEmployees().subscribe(
      employees => {
        this.employees = employees;
        this.filteredEmployees = this.employees;
      },
      error => this.errorMessage = <any>error
    );
  }

  deleteEmployee(id: string, name: string): void {
    if (id === '') {
      this.onSaveComplete();
    } else {
      if (confirm(`Are you sure want to delete this Employee: ${name}?`)) {
        this.employeeService.deleteEmployee(id)
          .subscribe(
            () => this.onSaveComplete(),
            (error: any) => this.errorMessage = <any>error
          );
      }
    }
  }

  onSaveComplete(): void {
    this.employeeService.getEmployees().subscribe(
      employees => {
        this.employees = employees;
        this.filteredEmployees = this.employees;
      },
      error => this.errorMessage = <any>error
    );
  }

}  