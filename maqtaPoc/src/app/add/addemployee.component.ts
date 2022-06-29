import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MustMatch } from '../email.validator';
import { DataService} from '../services/data.service'

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  genders=['male','female'];

  constructor(private formBuilder: FormBuilder,
              private apiService: DataService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      gender: ['', Validators.required],  
      dob:['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: ['', [Validators.required, Validators.minLength(6)]],
      position: ['', Validators.required]
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }else{
        this.apiService.addEmployee(this.registerForm.value).subscribe((data: any) => {
          debugger;
          let a = data;
          this.registerForm.reset(this.registerForm.value);
          alert('Employee adding SUCCESS!')
        })
      }
  } 
}