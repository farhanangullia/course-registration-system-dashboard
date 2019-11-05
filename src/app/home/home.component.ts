import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  opened: boolean;

  accountType: string;

  constructor() { }

  ngOnInit() {
    this.accountType = JSON.parse(localStorage.getItem("crsaccount")).type;
  }

}
