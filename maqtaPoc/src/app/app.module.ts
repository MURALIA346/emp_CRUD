import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { MaterialExampleModule } from './material-module'
import { GlobalInterceptor } from './interceptor/global.interceptor';
import { GenderPipe } from './pipe/gender.pipe';
import { AddemployeeComponent } from './add/addemployee.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeesComponent,
    GenderPipe,
    AddemployeeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialExampleModule
  ],
  
  providers: [
    {provide: HTTP_INTERCEPTORS,
      useClass: GlobalInterceptor,
      multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
