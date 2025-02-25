import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-organizer-dashboard',
  standalone: false,
  
  templateUrl: './organizer-dashboard.component.html',
  styleUrl: './organizer-dashboard.component.css'
})
export class OrganizerDashboardComponent implements OnInit{
  constructor(private service:SharedService){}
  type!: string;
  events_externes_conf:any[]=[];
  events_externes_salon: any[]=[];
  events_externes_jpo: any;
  
  ngOnInit(): void {
    this.getEventsExternes()
  }

  getEventsExternes(){
    this.service.getAllEventsExternesByType('salons').subscribe((res:any) =>{
      this.events_externes_salon=res},(error)=>{console.log(error.error.message)})
      
    this.service.getAllEventsExternesByType('conférences').subscribe((res:any) =>{
      this.events_externes_conf=res},(error)=>{console.log(error.error.message)})
  
    this.service.getAllEventsExternesByType('journées portes ouvertes').subscribe((res:any) =>{
      this.events_externes_jpo=res},(error)=>{console.log(error.error.message)})
  }
  
  
}
