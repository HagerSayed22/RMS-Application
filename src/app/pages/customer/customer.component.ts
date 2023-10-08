import { Component } from '@angular/core';
import {Validators,FormBuilder } from '@angular/forms';
import { CustomerService } from '../../core/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styles:['mat-form-field{width: 100%}','.btn-submit{display:flex;justify-content:center}']
})
export class CustomerComponent {
  errorMessage:string="";
  constructor(private customerService:CustomerService,private formBuilder:FormBuilder){}
  addCustomerForm=this.formBuilder.group({
    fullName:[''],
    version:[''],
    nickName:[''],
    nationalId:['',[Validators.required,Validators.minLength(14),Validators.pattern("^[0-9]*$")]],
    primaryPhoneNo:['',[Validators.required,Validators.minLength(10),Validators.pattern("^[0-9]*$")]],
    secondaryPhoneNo:['',[Validators.required,Validators.minLength(10),Validators.pattern("^[0-9]*$")]],
    address:[''],
    customerCode:[''],
    trustReceiptNo:[]
  })

  get nationalId(){
    return this.addCustomerForm.get('nationalId')
  }
  get primaryPhoneNo(){
    return this.addCustomerForm.get('primaryPhoneNo')
  }
  get secondaryPhoneNo(){
    return this.addCustomerForm.get('secondaryPhoneNo')
  }
  addCustomer(){
   this.customerService.addCustomer(this.addCustomerForm.value).subscribe({
    next:data=>data,
    error:error=>this.errorMessage=error
    }) 
  }
  
}
