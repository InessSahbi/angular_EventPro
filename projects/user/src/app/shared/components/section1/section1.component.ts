import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-section1',
  standalone: false,
  
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.css'
})
export class Section1Component implements OnInit,OnDestroy {
toSearch='';

 events_externes_search:any[]=[];
  constructor(private serv:SharedService){}

  search(event:any){
    this.toSearch=event.target.value
}

getEventSearch() {
  this.serv.clicked=true
  this.serv.getEventSearch(this.toSearch).subscribe((res:any) =>{
    this.events_externes_search=res},(error)=>{console.log(error.message)})
}
  images: string[] = [
    'assets/imagesSlider/eventshub_evergreen_opengraph_1200x630_2x.jpg',
    'assets/imagesSlider/MICF-gala-audience-credit-Jim-Lee.jpg',
    'assets/imagesSlider/R.jpg',
  ]; 
  currentImage: string = this.images[0];
  private imageIndex: number = 0;
  private intervalId: any;

  ngOnInit(): void {
    this.startImageRotation();
    this.getEventSearch();
  }

  ngOnDestroy(): void {
    this.stopImageRotation();
  }

  startImageRotation(): void {
    this.intervalId = setInterval(() => {
      this.imageIndex = (this.imageIndex + 1) % this.images.length;
      this.currentImage = this.images[this.imageIndex];
    }, 2000); // Change toutes les 2 secondes
  }

  stopImageRotation(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
