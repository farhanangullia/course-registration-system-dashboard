import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

import swal from 'sweetalert2';

import { RestApiService } from "../rest-api.service";

@Component({
  selector: 'app-bypasscourses',
  templateUrl: './bypasscourses.component.html',
  styleUrls: ['./bypasscourses.component.css']
})
export class BypasscoursesComponent implements OnInit {

  listOfBypassRequests: any[];

  selectedBypassReq: any;

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
      { label: 'Highest Priority', value: '!priority' },
      { label: 'Lowest Priority', value: 'priority' }
    ];

    let crsaccount = JSON.parse(localStorage.getItem('crsaccount'));
    this.accountid = crsaccount.accountid;


    this.restApi.retrieveBypassRequests(crsaccount).subscribe(
      res => {
        console.log(res);

        this.listOfBypassRequests = res;


      },
      error => {
        console.log(error);

        swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Error retrieving bypass requests!',

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
