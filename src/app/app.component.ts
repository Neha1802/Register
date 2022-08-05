import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { UserServiceService } from './user-service.service';
import { Userss } from './userss.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Register Here';

  users: any

  public signUpForm !: FormGroup;



  constructor(private userData: UserServiceService,
    private formBuilder: FormBuilder
  ) {

    this.userData.getUsers().subscribe((data: any) => {
      console.log("data", data)
      this.users = data;
    });

    this.signUpForm = this.formBuilder.group({

      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      mob: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]

    })

  }

  get m() {
    return this.signUpForm.controls;
  }

  signup(data: Userss) {


    this.userData.saveUser(data)
      .subscribe(res => {
        alert("Registration Successfull")
        this.signUpForm.reset();

      }, err => {
        alert("Something went wrong!!!")
      }
      )
  }


}
