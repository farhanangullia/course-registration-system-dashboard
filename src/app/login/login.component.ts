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
    username: new FormControl("", [Validators.required]),
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

        // // when we successfully login, store the value in sessionstorage
        // sessionStorage.setItem("username", this.loginForm.value.username);
        // sessionStorage.setItem("isLogin", "true");

        // // store the whole user object
        // sessionStorage.setItem("user", JSON.stringify(res));

        // route the user
        // window.location.href = "/home";
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




  // updateSupportTicket(event: Event, supportTicket: SupportTicketEntity) {
  //   if (!this.checkRights("UPDATE")) {
  //     this.messageService.add({ key: 'supportDetails', severity: 'error', summary: 'Error', detail: "You do not have the rights to update support ticket!" });
  //     return;
  //   }
  //   //restful update method to set checked value
  //   this.supportTicketService.updateSupportTicketResolution(supportTicket).subscribe(
  //     response => {
  //       this.selectedSupportTicket = response.supportTicketEntity;
  //       if (this.unresolvedTickets === false) {
  //         this.supportTickets = null;
  //         this.retrieveAllResolvedTickets();
  //         this.messageService.add({ severity: 'success', summary: 'Success', detail: this.selectedSupportTicket.ticketCode + ' successfully unresolved.' });
  //       } else {
  //         this.supportTickets = null;
  //         this.retrieveAllUnresolvedTickets();
  //         this.messageService.add({ severity: 'success', summary: 'Success', detail: this.selectedSupportTicket.ticketCode + ' successfully resolved.' });
  //       }
  //       this.displayDialog = false;
  //       // this.restaurantEntities[this.selectedRowIndex] = this.restaurantEntity;
  //       // this.resetData();
  //     }, error => {
  //       this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
  //       //this.messageService.add({ key: 'editRestaurant', severity: 'error', summary: 'Error', detail: this.errorMessage });
  //     }
  //   )




  //   event.preventDefault();
  // }
}
