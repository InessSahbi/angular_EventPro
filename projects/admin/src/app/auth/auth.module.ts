import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    LoginComponent
  ]

})
export class AuthModule { }
