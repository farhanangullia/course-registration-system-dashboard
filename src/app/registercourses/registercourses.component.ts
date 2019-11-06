import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-registercourses',
  templateUrl: './registercourses.component.html',
  styleUrls: ['./registercourses.component.css']
})
export class RegistercoursesComponent implements OnInit {
  listOfCoursesToRegister: any[];

  selectedRegCourse: any;

  dialogVisible: boolean;

  currentProject: any;

  displayDialog: boolean;

  sortOptions: SelectItem[];


  sortKey: string;

  sortField: string;

  sortOrder: number;

  checked: boolean = false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.sortOptions = [
      // { label: 'Newest First', value: '!supportTicketId' },
      // { label: 'Oldest First', value: 'supportTicketId' },
      { label: 'Highest Quota', value: 'quota' },
      { label: 'Smallest Quota', value: '!quota' }
    ];

    this.listOfCoursesToRegister = [{
      "adminid": "a003",
      "currentsize": 70,
      "isgraduatecourse": false,
      "modulecode": "CS101",
      "name": "Intro to Programming",
      "quota": 90
    },
    {
      "adminid": "a003",
      "currentsize": 70,
      "isgraduatecourse": false,
      "modulecode": "CS102",
      "name": "Intermediate Programming",
      "quota": 80
    }];
  }


  // selectUserStory(event: Event, userStory: any) {
  //   this.selectedUserStory = userStory;
  //   this.displayDialog = true;
  //   event.preventDefault();
  // }

  registerCourse(event: Event, regCourse: any) {
    this.selectedRegCourse = regCourse;
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
