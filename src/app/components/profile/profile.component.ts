import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public user: User = {};
  public personalInfo: FormGroup;
  public editPersonalInfoFlag: boolean =false;
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
    // this.initializeForms();
    this.personalInfo = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      fatherName: new FormControl(),
      motherName: new FormControl(''),
      mothersPlace: new FormControl('')
    });
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any)=>{
      if (params.id) {
        this.user = this.userService.getUser(params.id);
        this.initializeForms();
      }
    })
  }

  initializeForms() {
    this.personalInfo = new FormGroup({
      firstName: new FormControl(this.user.firstName),
      lastName: new FormControl(this.user.lastName),
      fatherName: new FormControl(this.user.fatherName),
      motherName: new FormControl(this.user.motherName),
      mothersPlace: new FormControl(this.user.mothersPlace)
    });
  }

  editPersonalInfo() {
    this.editPersonalInfoFlag = true;
  }
  updatePersonalInfo() {
    console.log(this.personalInfo);
    this.editPersonalInfoFlag = false;
    this.userService.updateUser(this.user.id||'', this.personalInfo.value)
  }
}
