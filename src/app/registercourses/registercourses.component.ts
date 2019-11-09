import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectItem } from 'primeng/api';

import swal from 'sweetalert2';

import { RestApiService } from "../rest-api.service";
import { Router } from '@angular/router';
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


  constructor(public restApi: RestApiService, public router: Router) { }

  ngOnInit() {

    this.sortOptions = [
      { label: 'Highest Quota', value: '!quota' },
      { label: 'Smallest Quota', value: 'quota' }
    ];


    let crsaccount = JSON.parse(localStorage.getItem('crsaccount'));

    if (crsaccount === null) {
      this.router.navigate(['/login']);
    } else {
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



  }



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
              'You have registered for the course. If the course is full, the administrator will have to approve the request. If he rejects the request, you will be allocated another course.',
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
