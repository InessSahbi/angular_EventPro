import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginParticipantComponent } from './components/login-participant/login-participant.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    LoginParticipantComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    ToastrModule.forRoot(),
    FormsModule,
    HttpClientModule,
    RouterModule,
  ]
})
export class ParticipantsModule { }
