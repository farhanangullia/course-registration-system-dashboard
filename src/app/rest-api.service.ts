import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  apiURL = 'http://localhost:5000';

  constructor(private httpClient: HttpClient) { }



  postLogin(credentials: any): Observable<any> {

    return this.httpClient.post<any>(this.apiURL + "/login", credentials, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  retrieveCoursesForRegistration(crsaccount: any): Observable<any> {

    return this.httpClient.post<any>(this.apiURL + "/retrieveCoursesForRegistration", crsaccount, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  registerCourse(regCourseParams: any): Observable<any> {

    return this.httpClient.post<any>(this.apiURL + "/registerCourse", regCourseParams, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  retrieveMyStudentCourses(crsaccount: any): Observable<any> {

    return this.httpClient.post<any>(this.apiURL + "/retrieveMyStudentCourses", crsaccount, httpOptions).pipe(
      catchError(this.handleError)
    );
  }



  retrieveBypassRequests(crsaccount: any): Observable<any> {

    return this.httpClient.post<any>(this.apiURL + "/retrieveBypassRequests", crsaccount, httpOptions).pipe(
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An unknown error has occurred:", error.error.message);
    } else {
      console.error(
        " A HTTP error has occurred: " +
        `HTTP ${error.status}: ${error.error.message}`
      );
    }

    return throwError(error);
  }
}
