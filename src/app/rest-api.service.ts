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

  updateBypassRequest(bypassReqParams: any): Observable<any> {

    return this.httpClient.post<any>(this.apiURL + "/updateBypassRequest", bypassReqParams, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  retrieveStudentProfile(crsaccount: any): Observable<any> {

    return this.httpClient.post<any>(this.apiURL + "/retrieveStudentProfile", crsaccount, httpOptions).pipe(
      catchError(this.handleError)
    );
  }


  retrieveStudentClasses(crsaccount: any): Observable<any> {

    return this.httpClient.post<any>(this.apiURL + "/retrieveStudentClasses", crsaccount, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  retrieveStudentCompletedModules(crsaccount: any): Observable<any> {

    return this.httpClient.post<any>(this.apiURL + "/retrieveStudentCompletedModules", crsaccount, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  retrieveAdminProfile(crsaccount: any): Observable<any> {

    return this.httpClient.post<any>(this.apiURL + "/retrieveAdminProfile", crsaccount, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  retrieveAdminCourses(crsaccount: any): Observable<any> {

    return this.httpClient.post<any>(this.apiURL + "/retrieveAdminCourses", crsaccount, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  retrieveTeacherProfile(crsaccount: any): Observable<any> {

    return this.httpClient.post<any>(this.apiURL + "/retrieveTeacherProfile", crsaccount, httpOptions).pipe(
      catchError(this.handleError)
    );
  }


  retrieveTeacherCourses(crsaccount: any): Observable<any> {

    return this.httpClient.post<any>(this.apiURL + "/retrieveTeacherCourses", crsaccount, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  updateCurrentAY(): Observable<any> {

    return this.httpClient.post<any>(this.apiURL + "/updateCurrentAY", httpOptions).pipe(
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
