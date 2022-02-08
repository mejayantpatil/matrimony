import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private data: any[];
  constructor() {
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
        firstName: 'Om',
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
}
