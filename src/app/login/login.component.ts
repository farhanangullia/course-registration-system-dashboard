import { Component, OnInit } from '@angular/core';

import { RestApiService } from "../rest-api.service";
import { Router } from '@angular/router';
import swal from 'sweetalert2';


import {
  NgForm,
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    accountid: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });

  isLogin: boolean;
  firstName: string;
  lastName: string;
  submitted: boolean;
  username: string;
  password: string;
  loginErrorMessage: string;

  constructor(public restApi: RestApiService, public router: Router) {
    this.isLogin = false;
    this.firstName = "";
    this.lastName = "";
    this.submitted = false;
    this.username = "";
    this.password = "";
    this.loginErrorMessage = null;
  }

  ngOnInit() {
  }


  clear() {
    this.username = "";
    this.password = "";
  }

  submitLoginForm() {
    console.log("thisloginformvalue", this.loginForm.value);
    this.restApi.postLogin(this.loginForm.value).subscribe(
      res => {
        console.log(res);


        localStorage.setItem("crsaccount", JSON.stringify(res));

        this.router.navigate(['/home']);
      },
      error => {
        console.log(error);

        swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Invalid Credentials!',

        }).then(() => {

          // this.dialog.closeAll();
        }

        )
      }
    );
  }


}
