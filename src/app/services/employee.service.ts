import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  //---baseUrl = 'http://localhost:3000/posts';
  //baseUrl = 'https://my-json-server.typicode.com/Ridrirox/Lanches/posts';
  baseUrl = 'https://my-json-server.typicode.com/Ridrirox/alunos/posts';
   //  baseUrl ='https://garras-db.herokuapp.com/posts';

  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  postEmployee(employee: Employee) {
    return this.http.post<Employee>(this.baseUrl, employee);
  }

  deleteEmployee(id: string) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
