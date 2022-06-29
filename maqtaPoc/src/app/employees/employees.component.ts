import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service'
import { EmployeeModel } from '../model/employee'
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export interface PeriodicElement {
  id: number;
  fullName: string;
  dob: string
  email: string
  phone: number
  gender: boolean
  company: string
  position: string
}
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {
  constructor(private apiService: DataService) {

  }
  @ViewChild(MatPaginator, { static: true }) public paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  //employees: PeriodicElement[] = [];
  displayedColumns: string[] = ['id', 'fullName', 'dob', 'email', 'phone', 'gender', 'company', 'position','deleteEmployee'];
  // dataSource = this.employees;
  dataSource: MatTableDataSource<PeriodicElement>;

  ngOnInit(): void {

    this.apiService.getAllEmployees().subscribe((data: any) => {
      // this.employees = data;
      // this.dataSource = this.employees;
      // this.dataSource.paginator = this.paginator;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  delete(element:any){
    this.apiService.deleteEmployees(element.id).subscribe((data: any) => {
      window.location.reload();
      alert("Emp details deleted successfully")
    })
   }

  applyFilter(event:any) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    // if(event.key.value >3 ){
    //   this.apiService.filterEmployeeslist(event.key).subscribe((data: any) => {
    //     let val =data;
    //   })
    // }
  }
} 
