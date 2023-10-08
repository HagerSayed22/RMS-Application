import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {FormGroup } from '@angular/forms';
import { ICustomer } from 'src/app/interfaces/icustomer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  addCustomer(customer:any):Observable<FormGroup>{
    return this.http.post<FormGroup>('http://41.65.11.55:8050/customer',customer);
  }
}
