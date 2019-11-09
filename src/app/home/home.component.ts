import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../rest-api.service";

import swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  opened: boolean;

  accountType: string;

  displayStudentProfile: boolean = false;


  student: any;

  constructor(public restApi: RestApiService) { }

  ngOnInit() {
    let crsaccount = JSON.parse(localStorage.getItem('crsaccount'));
    this.accountType = crsaccount.type;

    console.log(crsaccount);
    this.student = {};

  }


  viewStudentProfile() {
    let crsaccount = JSON.parse(localStorage.getItem('crsaccount'));
    this.restApi.retrieveStudentProfile(crsaccount).subscribe(
      res => {
        console.log(res);
        this.student = res;

      },
      error => {
        console.log(error);

        swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Error retrieving student profile!',

        }).then(() => {

          // this.dialog.closeAll();
        }

        )
      }
    );

    this.displayStudentProfile = true;


  }

}
