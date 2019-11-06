import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

import swal from 'sweetalert2';

import { RestApiService } from "../rest-api.service";
@Component({
  selector: 'app-viewcourses',
  templateUrl: './viewcourses.component.html',
  styleUrls: ['./viewcourses.component.css']
})
export class ViewcoursesComponent implements OnInit {
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

  accountid: any;
  constructor(public restApi: RestApiService) { }

  ngOnInit() {
    this.sortOptions = [
      // { label: 'Newest First', value: '!supportTicketId' },
      // { label: 'Oldest First', value: 'supportTicketId' },
      { label: 'Highest Quota', value: '!quota' },
      { label: 'Smallest Quota', value: 'quota' }
    ];



    let crsaccount = JSON.parse(localStorage.getItem('crsaccount'));
    this.accountid = crsaccount.accountid;



    this.restApi.retrieveMyStudentCourses(crsaccount).subscribe(
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
