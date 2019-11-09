import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

import swal from 'sweetalert2';

import { RestApiService } from "../rest-api.service";
import { Router } from '@angular/router';
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

  crsaccount: any;

  constructor(public restApi: RestApiService, public router: Router) { }

  ngOnInit() {

    this.sortOptions = [
      { label: 'Highest Priority', value: '!priority' },
      { label: 'Lowest Priority', value: 'priority' }
    ];

    this.crsaccount = JSON.parse(localStorage.getItem('crsaccount'));
    if (this.crsaccount === null) {
      this.router.navigate(['/login']);
    } else {
      this.accountid = this.crsaccount.accountid;
      this.restApi.retrieveBypassRequests(this.crsaccount).subscribe(
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




  }


  acceptRequest(event: Event, bypassReq: any) {
    console.log("HERE")

    this.selectedBypassReq = bypassReq;


    swal.fire({
      title: 'Accept or Reject?',
      text: "Student ID: " + this.selectedBypassReq.studentid + " Module: " + this.selectedBypassReq.modulecode,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Accept Bypass Request',
      cancelButtonText: 'Reject Bypass Request'
    }).then((result) => {
      if (result.value) {
        let bypassReqParams = { "studentid": this.selectedBypassReq.studentid, "isBypassed": true, "modulecode": this.selectedBypassReq.modulecode };
        this.restApi.updateBypassRequest(bypassReqParams).subscribe(
          res => {
            console.log(res);



            swal.fire(
              'Accepted!',
              'Bypass request has been accepted.',
              'success'
            )


            this.restApi.retrieveBypassRequests(this.crsaccount).subscribe(
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

          },
          error => {
            console.log(error);

            swal.fire({
              type: 'error',
              title: 'Oops...',
              text: 'Error updating bypass request!',

            }).then(() => {

              // this.dialog.closeAll();
            }

            )
          }
        );

      } else if (result.dismiss === swal.DismissReason.cancel) {
        let bypassReqParams = { "studentid": this.selectedBypassReq.studentid, "isBypassed": false, "modulecode": this.selectedBypassReq.modulecode };
        this.restApi.updateBypassRequest(bypassReqParams).subscribe(
          res => {
            console.log(res);



            swal.fire(
              'Rejected!',
              'Bypass request has been rejected.',
              'error'
            )



            this.restApi.retrieveBypassRequests(this.crsaccount).subscribe(
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

          },
          error => {
            console.log(error);

            swal.fire({
              type: 'error',
              title: 'Oops...',
              text: 'Error updating bypass request!',

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
    this.selectedBypassReq = null;
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
