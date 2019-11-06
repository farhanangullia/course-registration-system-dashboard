import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectItem } from 'primeng/api';

import swal from 'sweetalert2';

import { RestApiService } from "../rest-api.service";

@Component({
  selector: 'app-registercourses',
  templateUrl: './registercourses.component.html',
  styleUrls: ['./registercourses.component.css']
})
export class RegistercoursesComponent implements OnInit {
  listOfCoursesToRegister: any[];

  selectedRegCourse: any;

  dialogVisible: boolean;


  displayDialog: boolean;

  sortOptions: SelectItem[];


  sortKey: string;

  sortField: string;

  sortOrder: number;

  checked: boolean = false;

  accountid: any;


  constructor(public restApi: RestApiService) { }

  ngOnInit() {

    this.sortOptions = [
      // { label: 'Newest First', value: '!supportTicketId' },
      // { label: 'Oldest First', value: 'supportTicketId' },
      { label: 'Highest Quota', value: '!quota' },
      { label: 'Smallest Quota', value: 'quota' }
    ];

    // this.listOfCoursesToRegister = [{
    //   "adminid": "a003",
    //   "currentsize": 70,
    //   "isgraduatecourse": false,
    //   "modulecode": "CS101",
    //   "name": "Intro to Programming",
    //   "quota": 90
    // },
    // {
    //   "adminid": "a003",
    //   "currentsize": 70,
    //   "isgraduatecourse": false,
    //   "modulecode": "CS102",
    //   "name": "Intermediate Programming",
    //   "quota": 80
    // }];

    let crsaccount = JSON.parse(localStorage.getItem('crsaccount'));
    this.accountid = crsaccount.accountid;



    this.restApi.retrieveCoursesForRegistration(crsaccount).subscribe(
      res => {
        console.log(res);

        this.listOfCoursesToRegister = res;


      },
      error => {
        console.log(error);

        swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Error retrieving courses!',

        }).then(() => {

          // this.dialog.closeAll();
        }

        )
      }
    );


  }


  // selectUserStory(event: Event, userStory: any) {
  //   this.selectedUserStory = userStory;
  //   this.displayDialog = true;
  //   event.preventDefault();
  // }

  registerCourse(event: Event, regCourse: any) {
    this.selectedRegCourse = regCourse;

    console.log(this.selectedRegCourse.modulecode);

    let regCourseParams = { "modulecode": this.selectedRegCourse.modulecode, "accountid": this.accountid };

    console.log(regCourseParams);

    swal.fire({
      title: regCourse.modulecode,
      text: 'Confirm registration for module?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm Registration!'
    }).then((result) => {
      if (result.value) {

        // Call rest api


        this.restApi.registerCourse(regCourseParams).subscribe(
          res => {
            console.log(res);
            // if rest api success?
            swal.fire(
              'Registered!',
              'You have enrolled for the course.',
              'success'
            )

          },
          error => {
            console.log(error);

            swal.fire({
              type: 'error',
              title: 'Oops...',
              text: 'You have already registered for this course!',

            }).then(() => {

              // this.dialog.closeAll();
            }

            )
          }
        );

      }
    })

    event.preventDefault();
  }

  onDialogHide() {
    this.selectedRegCourse = null;
  }

  onSortChange(event) {

    console.log('asdsa');
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

}
