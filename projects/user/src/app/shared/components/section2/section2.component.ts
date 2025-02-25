import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-section2',
  standalone: false,
  
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.css'
})
export class Section2Component implements OnInit {
  

  type!: string;
events_externes_conf:any[]=[];
  events_externes_salon: any[]=[];
  events_externes_jpo: any;
constructor(private service:SharedService){}

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
