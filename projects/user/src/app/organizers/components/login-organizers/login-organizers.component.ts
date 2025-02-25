import { Component, OnInit } from '@angular/core';
import { OrganizersService } from '../../services/organizers.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login-organizers.component.html',
  styleUrl: './login-organizers.component.css'
})
export class LoginOrganizersComponent implements OnInit{
constructor(private service:OrganizersService,private toastr:ToastrService, private router:Router){}
ngOnInit(): void {
  // throw new Error('Method not implemented.');
}
userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  onlogin(){
    if (this.userForm.valid) {
      console.log('Form Submitted!', this.userForm.value.email);
    }
    const m=this.userForm.value
    this.service.login(m).subscribe(res=>{
      this.toastr.success("success","Login Success")
      const token = res.token;
      localStorage.setItem('auth_token', token);
      this.router.navigate(["/organizer-dashboard"])
    },
    (error) => {
      if (error.status === 401) {
        this.toastr.error(error.error.message," Login Error")        
      } else {
        this.toastr.error('An unexpected error occurred.'," Login Error")
      }
    }
  )
  }
}
