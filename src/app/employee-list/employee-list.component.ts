import { Component } from '@angular/core';
import { EmployeeService } from 'src/_services/employee.service';
import { Employee } from 'src/_Models/employee';
import faCoffee  from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  public facoffee = facoffee;
  public EmpList : Employee[] | any;

  constructor(private emp : EmployeeService){
        this.emp.getData().subscribe((data) => {
            this.EmpList = data;
            console.log(data);
        }); 
  }
}
