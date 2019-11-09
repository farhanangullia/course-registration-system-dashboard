import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { RestApiService } from "../rest-api.service";
@Component({
  selector: 'app-viewcompletedcourses',
  templateUrl: './viewcompletedcourses.component.html',
  styleUrls: ['./viewcompletedcourses.component.css']
})
export class ViewcompletedcoursesComponent implements OnInit {
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

  // accountid: any;
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

      this.restApi.retrieveStudentCompletedModules(crsaccount).subscribe(
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
