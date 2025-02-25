import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { OrganizersService } from '../../services/organizers.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  
  templateUrl: './register-organizers.component.html',
  styleUrl: './register-organizers.component.css'
})
export class RegisterOrganizersComponent implements OnInit{
  constructor(private service:OrganizersService,private toastr:ToastrService, private router:Router){}
  userForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required]),
  },
    {validators: this.passwordMatchValidator}
  ); 

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const group = control as FormGroup;
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password !== confirmPassword ? { passwordMismatch: true } : null;
  }
  registOrgs:any[]=[]

  onSubmit() {
    {
      if (this.userForm.valid) {
        console.log('Form Submitted!', this.userForm.value.email);
      }
      const m=this.userForm.value
      this.service.createOrg(m).subscribe(res=>{
        this.toastr.success("success","Register Success")
        this.router.navigate(["/login"])},
      (error) => {
        if (error.status === 401) {
          this.toastr.error(error.error.message," Register Error")        
        } else {
          this.toastr.error('An unexpected error occurred.'," Login Error")
        }
      })
    }
  }
  

  
  ngOnInit(): void {

  }


}
