import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public data: any[];
  constructor(private router: Router) {
    this.data = [];
   }

  ngOnInit(): void {
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
    ]
  }

  viewProfile(id: string) {
    this.router.navigate(['profile'])
  }
  shortlist() {
    this.router.navigate(['shortlist'])
  }
  sendMessage() {
    this.router.navigate(['chat'])
  }
}
