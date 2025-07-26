import { Component, inject, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { APIResponseModel, EmployeeList } from '../../modal/employee.model';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  employeesrv = inject(EmployeeService)

  employeeList: EmployeeList[] = [];
  ngOnInit(): void {
    this.getEmployees();
  }
  getEmployees() {
    this.employeesrv.getAllEmployess().subscribe({
      next: (Response: APIResponseModel) => {
        this.employeeList = Response.data
      },
      error: () => {

      }
    },)
  }
}
