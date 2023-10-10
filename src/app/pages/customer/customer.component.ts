import { Component, OnInit } from '@angular/core';
import {Validators,FormBuilder, FormGroup } from '@angular/forms';
import { CustomersRepository } from 'src/app/domain/customer/customer.repository';
import { ICustomer } from 'src/app/domain/customer/models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styles:['mat-form-field{width: 100%}','.btn-submit{display:flex;justify-content:center}']
})
export class CustomerComponent implements OnInit {
  addCustomerForm!:FormGroup;
  errorMessage:string="";
  ngOnInit(): void {
    this.formAddCustomer();
  }
  constructor(private customerRepository:CustomersRepository,private formBuilder:FormBuilder){}
  formAddCustomer(){
  this.addCustomerForm=this.formBuilder.group({
    id:[''],
    version:[''],
    fullName:[''],
    nickName:[''],
    nationalId:['',[Validators.required,Validators.minLength(14),Validators.pattern("^[0-9]*$")]],
    primaryPhoneNo:['',[Validators.required,Validators.minLength(10),Validators.pattern("^[0-9]*$")]],
    secondaryPhoneNo:['',[Validators.required,Validators.minLength(10),Validators.pattern("^[0-9]*$")]],
    address:[''],
    customerCode:[''],
    trustReceiptNo:['']
  })
  }
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
   this.customerRepository.add(this.addCustomerForm.value).subscribe({
    next:data=>data,
    error:error=>this.errorMessage=error
    })  
  }
  
}
