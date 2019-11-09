import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CardModule } from 'primeng/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatIconModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RegistercoursesComponent } from './registercourses/registercourses.component';
import { ViewcoursesComponent } from './viewcourses/viewcourses.component';
import { ViewclassesComponent } from './viewclasses/viewclasses.component';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BypasscoursesComponent } from './bypasscourses/bypasscourses.component';
import { ViewadmincoursesComponent } from './viewadmincourses/viewadmincourses.component';
import { ViewteachercourseComponent } from './viewteachercourse/viewteachercourse.component';
import { ViewcompletedcoursesComponent } from './viewcompletedcourses/viewcompletedcourses.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidenavComponent,
    RegistercoursesComponent,
    ViewcoursesComponent,
    ViewclassesComponent,
    BypasscoursesComponent,
    ViewadmincoursesComponent,
    ViewteachercourseComponent,
    ViewcompletedcoursesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CardModule,
    MatGridListModule,
    HttpClientModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatTooltipModule,
    DataViewModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
