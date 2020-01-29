import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpUtil } from './http.util';
import {Employee } from './employee.model';
import employee from '../../assets/employee.json';

@Injectable({ providedIn: 'root' })
export class EmployeeProxy {

    private isMockMode: boolean = true;

    constructor(private httpUtil: HttpUtil) {}

    public getEmployeeStream(employeeId: number): Observable<Employee> {

        if (this.isMockMode) {
            return this.httpUtil.doMockGetStronglyTyped(employee, 2000);
        } else {
           // call real service
        }
    }
}
