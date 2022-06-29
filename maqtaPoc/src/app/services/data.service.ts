import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { EmployeeModel } from '../model/employee'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly baseUrl = 'https://retoolapi.dev/DV6x5A';

  dataChange: BehaviorSubject<EmployeeModel[]> = new BehaviorSubject<EmployeeModel[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;

  constructor(private httpClient: HttpClient) {}

  get data(): EmployeeModel[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS AllEmployees list*/
  getAllEmployees() {
    const endpoint = `${this.baseUrl}/employees`;
    return this.httpClient.get(endpoint).pipe(catchError(this.handleError));
  }

  /**Adding employee*/
  addEmployee(empobject:any){
    const endpoint = `${this.baseUrl}/employees`;
    return this.httpClient.post(endpoint, JSON.stringify ({ empobject })).pipe(catchError(this.handleError)); 
  }

  /**Filter user list*/
  filterEmployeeslist(searchValue: string) {
    const endpoint = `${this.baseUrl}/employees?fullName=${searchValue}`;
    return this.httpClient.get(endpoint);
  }

  /**Delete user list*/
  deleteEmployees(empId:any){
    const endpoint = `${this.baseUrl}/employees/${empId}`;
    return this.httpClient.delete(endpoint);
  }

   /**Error handling */
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}

