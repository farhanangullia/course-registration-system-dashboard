import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RegistercoursesComponent } from './registercourses/registercourses.component';
import { ViewcoursesComponent } from './viewcourses/viewcourses.component';
import { BypasscoursesComponent } from './bypasscourses/bypasscourses.component';
import { ViewclassesComponent } from './viewclasses/viewclasses.component';
import { ViewadmincoursesComponent } from './viewadmincourses/viewadmincourses.component';
import { ViewteachercourseComponent } from './viewteachercourse/viewteachercourse.component';
import { ViewcompletedcoursesComponent } from './viewcompletedcourses/viewcompletedcourses.component';
const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: "",
    component: SidenavComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'registercourses', component: RegistercoursesComponent },
      { path: 'viewcourses', component: ViewcoursesComponent },
      { path: 'bypasscourses', component: BypasscoursesComponent },
      { path: 'viewclasses', component: ViewclassesComponent },
      { path: 'viewadmincourses', component: ViewadmincoursesComponent },
      { path: 'viewteachercourses', component: ViewteachercourseComponent },
      { path: 'viewcompletedcourses', component: ViewcompletedcoursesComponent }
    ]
  },
  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
