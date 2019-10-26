import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // SHould have one block here containing homecomponent path

  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
