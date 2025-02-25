import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEventInternesComponent } from './components/create-event-internes/create-event-internes.component';
import { CreateEventExternesComponent } from './components/create-event-externes/create-event-externes.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { LoginOrganizersComponent } from './components/login-organizers/login-organizers.component';
import { RegisterOrganizersComponent } from './components/register-organizers/register-organizers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbaregistreComponent } from './components/navbaregistre/navbaregistre.component';
import { OrganizerDashboardComponent } from './components/organizer-dashboard/organizer-dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    CreateEventInternesComponent,
    CreateEventExternesComponent,
    ProfileComponent,
    EditProfileComponent,
    LoginOrganizersComponent,
    NavbarComponent,
    RegisterOrganizersComponent,
    NavbaregistreComponent,
    OrganizerDashboardComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  exports:[
    // LoginOrganizersComponent
  ]
})
export class OrganizersModule { }
