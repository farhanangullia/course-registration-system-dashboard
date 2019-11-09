import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../rest-api.service";

import swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  opened: boolean;

  accountType: string;

  displayStudentProfile: boolean = false;
  displayAdminProfile: boolean = false;
  displayTeacherProfile: boolean = false;

  student: any;
  admin: any;
  teacher: any;

  constructor(public restApi: RestApiService, public router: Router) { }

  ngOnInit() {
    let crsaccount = JSON.parse(localStorage.getItem('crsaccount'));
    if (crsaccount === null) {
      this.router.navigate(['/login']);
    } else {
      this.accountType = crsaccount.type;
    }



    console.log(crsaccount);
    this.student = {};
    this.admin = {};
    this.teacher = {};



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

  viewAdminProfile() {
    let crsaccount = JSON.parse(localStorage.getItem('crsaccount'));
    this.restApi.retrieveAdminProfile(crsaccount).subscribe(
      res => {
        console.log(res);
        this.admin = res;

      },
      error => {
        console.log(error);

        swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Error retrieving admin profile!',

        }).then(() => {

          // this.dialog.closeAll();
        }

        )
      }
    );

    this.displayAdminProfile = true;


  }


  viewTeacherProfile() {
    let crsaccount = JSON.parse(localStorage.getItem('crsaccount'));
    this.restApi.retrieveTeacherProfile(crsaccount).subscribe(
      res => {
        console.log(res);
        this.teacher = res;

      },
      error => {
        console.log(error);

        swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Error retrieving teacher profile!',

        }).then(() => {

          // this.dialog.closeAll();
        }

        )
      }
    );

    this.displayTeacherProfile = true;


  }

  updateCurrentAY() {
    console.log("H");

    this.restApi.updateCurrentAY().subscribe(
      res => {
        console.log(res);
        // if rest api success?


        swal.fire({
          title: 'Done!',
          type: 'success',
          text: 'Current academic year and semester changed!'
        });

        this.displayAdminProfile = false;
      },
      error => {
        console.log(error);

        swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Error updating current AY!',

        }).then(() => {

          // this.dialog.closeAll();
        }

        )
      }
    );
    console.log(this.teacher);
    // swal.mixin({
    //   input: 'text',
    //   confirmButtonText: 'Next &rarr;',
    //   showCancelButton: true,
    //   progressSteps: ['1', '2']
    // }).queue([
    //   {
    //     title: 'AY?',
    //     text: 'Enter the current academic year'
    //   },
    //   {
    //     title: 'Semester?',
    //     text: 'Enter the current semester'
    //   }
    // ]).then((result) => {
    //   if (result.value) {
    //     let updateCurrentAYParams = { "ay": result.value[0], "semester": result.value[1] };
    //     console.log(updateCurrentAYParams);
    //     // Call api and if success >> fire else >>fire error

    //     this.restApi.updateCurrentAY(updateCurrentAYParams).subscribe(
    //       res => {
    //         console.log(res);
    //         // if rest api success?


    //         swal.fire({
    //           title: 'Done!',
    //           type: 'success',
    //           text: 'Current academic year and semester changed!'
    //         });
    //       },
    //       error => {
    //         console.log(error);

    //         swal.fire({
    //           type: 'error',
    //           title: 'Oops...',
    //           text: 'Error updating current AY!',

    //         }).then(() => {

    //           // this.dialog.closeAll();
    //         }

    //         )
    //       }
    //     );




    //   }
    // });
  }



  createCourse() {
    let crsaccount = JSON.parse(localStorage.getItem('crsaccount'));

    swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2', '3', '4', '5', '6', '7']
    }).queue([
      {
        title: 'Module Code?',
        text: 'Enter the module code'
      },
      {
        title: 'Module Name?',
        text: 'Enter the module name'
      },
      {
        title: 'Department?',
        text: 'Enter the department id (make sure the department exists)'
      },
      {
        title: 'Graduate or Undergraduate Course?',
        text: 'Enter graduate or undergraduate'
      },
      {
        title: 'Quota?',
        text: 'Enter the quota'
      },
      {
        title: 'Prerequisite?',
        text: 'Enter the module prerequisite code (Make sure modulecode exists - CASE SENSITIVE)'
      },
      {
        title: 'Teacher ID?',
        text: 'Enter the teacher id (make sure teacher id exists - CASE SENSITIVE)'
      }
    ]).then((result) => {
      if (result.value) {
        let createCourseParams = { "modulecode": result.value[0], "modulename": result.value[1], "departmentid": result.value[2], "isgraduatecourse": result.value[3], "quota": result.value[4], "prerequisite": result.value[5], "teacherid": result.value[6], "accountid": crsaccount.accountid };
        console.log(createCourseParams);
        // Call api and if success >> fire else >>fire error

        this.restApi.createCourse(createCourseParams).subscribe(
          res => {
            console.log(res);
            // if rest api success?


            swal.fire({
              title: 'Done!',
              type: 'success',
              text: 'Course created!'
            });
          },
          error => {
            console.log(error);

            swal.fire({
              type: 'error',
              title: 'Oops...',
              text: 'Error creating course!',

            }).then(() => {

              // this.dialog.closeAll();
            }

            )
          }
        );




      }
    });

  }
}
