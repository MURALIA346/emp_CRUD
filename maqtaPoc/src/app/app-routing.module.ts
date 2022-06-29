
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { AddemployeeComponent } from './add/addemployee.component'

const routes: Routes = [
   
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'add-employee',
      component: AddemployeeComponent
    },
    {
      path: 'employeelist',
      component: EmployeesComponent
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
