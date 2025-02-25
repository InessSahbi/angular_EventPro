import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
