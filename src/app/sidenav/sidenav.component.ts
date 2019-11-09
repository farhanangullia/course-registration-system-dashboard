import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  location = '';
  constructor(private router: Router) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.location = event.url
    })
  }

  ngOnInit() {
    console.log(this.location);
  }

  isExpanded = false;
  element: HTMLElement;

  logout(event: any) {
    // clear account cookie
    localStorage.removeItem("crsaccount");
    this.router.navigateByUrl('/login');
  }



}
