import { Component } from '@angular/core';
import { Employee } from './employee/employee.model';
import employee from '../assets/employee.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {
  name = 'Angular';
  myEmployee: Employee = employee;
}
