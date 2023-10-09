import { ResourceService } from 'src/app/core/services/resource.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICustomer } from './models/customer';
@Injectable({
  providedIn: 'root',
})
export class CustomersRepository extends ResourceService<ICustomer> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'customer';
  }
}