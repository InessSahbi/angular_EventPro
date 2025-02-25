import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder){}


  loginForm!:FormGroup

  ngOnInit(): void {
    
  }

  // createForm(){
  //   this.loginForm=this.fb.group({

  //   })
  // }

}
