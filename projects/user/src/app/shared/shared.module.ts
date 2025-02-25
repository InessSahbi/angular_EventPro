import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { Section1Component } from './components/section1/section1.component';
import { Section2Component } from './components/section2/section2.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SectionRechComponent } from './components/section-rech/section-rech.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrganizersModule } from '../organizers/organizers.module';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    Section1Component,
    Section2Component,
    SectionRechComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    
  ],
  
})
export class SharedModule { }
