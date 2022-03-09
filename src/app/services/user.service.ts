import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private data: any[];
  constructor(private spinner: SpinnerService) {
    this.data = [
      {
        id: '1',
        firstName: 'Om',
        lastName: 'Patil',
        age: '30',
        occupation: 'Software Engineer',
        fatherName: '',
        motherName: '',
        mothersPlace:'',
        location: 'Pune',
        currentAddress: {
          city: 'Pune',
          tehsil: 'Mulshi',
          district: 'Pune',
          state: 'Maha',
          country: 'India'
        },
        permanentAddress: {
          city: 'Pune',
          tehsil: 'Mulshi',
          state: 'Maha',
          country: 'India'
        }
      },
      {
        id: '2',
        firstName: 'Rahul',
        lastName: 'Patil',
        age: '30',
        occupation: 'Software Engineer',
        location: 'Pune',
        currentAddress: {},
        permanentAddress: {} 
      },
      {
        id: '3',
        firstName: 'Om',
        lastName: 'Patil',
        age: '30',
        occupation: 'Software Engineer',
        location: 'Pune',
        currentAddress: {},
        permanentAddress: {}  
      },
      {
        id: '4',
        firstName: 'Om',
        lastName: 'Patil',
        age: '30',
        occupation: 'Software Engineer',
        location: 'Pune', 
        currentAddress: {},
        permanentAddress: {} 
      }
    ];
   }

   
   getUsers() {
      return this.data;
   }

   getUser(id: string) {
     return this.data.find(user=>user.id === id);
   }

   updateUser(id: string, userData: User) {
    this.spinner.showSpinner();
     this.data.map((user,index)=>{
        if(user.id === id) {
          this.data[index] = userData
        }
     });
     setTimeout(() => {
       this.spinner.hideSpinner();
     }, 1000);
    }
}
