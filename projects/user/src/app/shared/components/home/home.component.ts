import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  constructor(private serve:SharedService){}
  

}
