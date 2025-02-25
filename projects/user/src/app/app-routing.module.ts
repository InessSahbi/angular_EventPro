import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { RegisterOrganizersComponent } from './organizers/components/register-organizers/register-organizers.component';
import { LoginOrganizersComponent } from './organizers/components/login-organizers/login-organizers.component';
import { OrganizerDashboardComponent } from './organizers/components/organizer-dashboard/organizer-dashboard.component';
import { LoginParticipantComponent } from './participants/components/login-participant/login-participant.component';

const routes: Routes = [
  {path: 'register',component:RegisterOrganizersComponent},
  {path: 'login',component:LoginOrganizersComponent},
  {path: 'home',component:HomeComponent},
  {path: 'organizer-dashboard',component:OrganizerDashboardComponent},
  {path: 'loginParticipant',component:LoginParticipantComponent},
  // { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/home' },
  { path: 'organizers', loadChildren: () => import('./organizers/organizers.module').then(m => m.OrganizersModule) },
  { path: 'participants', loadChildren: () => import('./participants/participants.module').then(m => m.ParticipantsModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
