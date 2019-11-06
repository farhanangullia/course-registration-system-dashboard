import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RegistercoursesComponent } from './registercourses/registercourses.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: "",
    component: SidenavComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'registercourses', component: RegistercoursesComponent }
    ]
  },
  // SHould have one block here containing homecomponent path

  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
