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
        location: 'Pune'

      },
      {
        id: '2',
        firstName: 'Rahul',
        lastName: 'Patil',
        age: '30',
        occupation: 'Software Engineer',
        location: 'Pune' 
      },
      {
        id: '3',
        firstName: 'Om',
        lastName: 'Patil',
        age: '30',
        occupation: 'Software Engineer',
        location: 'Pune' 
      },
      {
        id: '4',
        firstName: 'Om',
        lastName: 'Patil',
        age: '30',
        occupation: 'Software Engineer',
        location: 'Pune' 
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
          user.firstName = userData.firstName
          user.lastName = userData.lastName
        }
     });
     setTimeout(() => {
      //  this.spinner.hideSpinner();
     }, 1000);
    }
}
