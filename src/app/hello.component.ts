import { Component, Input, OnInit } from '@angular/core';
import { Employee } from './employee/employee.proxy';
import { EmployeeProxy } from './employee/employee.proxy';

@Component({
  selector: 'hello',
  template: `<h1>Employee Name : {{employee?.name}}</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit {
  @Input() id: number = 1;
  
  employee: Employee;

  constructor(private employeeProxy: EmployeeProxy) { }

  ngOnInit() {
    this.employeeProxy.getEmployeeStream(this.id).subscribe(employeeData => this.employee = employeeData);
  }
}
