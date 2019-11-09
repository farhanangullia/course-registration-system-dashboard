import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

import swal from 'sweetalert2';

import { RestApiService } from "../rest-api.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewadmincourses',
  templateUrl: './viewadmincourses.component.html',
  styleUrls: ['./viewadmincourses.component.css']
})
export class ViewadmincoursesComponent implements OnInit {
  listOfMyCourses: any[];

  selectedRegCourse: any;

  dialogVisible: boolean;

  currentProject: any;

  displayDialog: boolean;

  sortOptions: SelectItem[];


  sortKey: string;

  sortField: string;

  sortOrder: number;

  checked: boolean = false;
  constructor(public restApi: RestApiService, public router: Router) { }

  ngOnInit() {
    this.sortOptions = [

      { label: 'Descending Module Code', value: '!modulecode' },
      { label: 'Ascending Module Code', value: 'modulecode' }
    ];

    let crsaccount = JSON.parse(localStorage.getItem('crsaccount'));
    if (crsaccount === null) {
      this.router.navigate(['/login']);
    } else {
      this.restApi.retrieveAdminCourses(crsaccount).subscribe(
        res => {
          console.log(res);

          this.listOfMyCourses = res;


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
