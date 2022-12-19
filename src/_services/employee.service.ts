import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Employee } from 'src/_Models/employee';
import  employees  from '../assets/employee.json';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  emp = [];
  constructor(private http : HttpClient) {
        
   }

   public getData() : Observable<Employee[]> { 
        return this.http.get<Employee[]>('../assets/employee.json');
   }
}
