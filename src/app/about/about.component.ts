import { Component , OnInit} from '@angular/core';
//import { CarouselModule } from 'ngx-owl-carousel-o';  // Import CarouselModule
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
//import { OwlModule } from 'ngx-owl-carousel-o';
import { trigger, state, style, transition, animate } from '@angular/animations';
//import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
//import { TimelineModule } from 'primeng/timeline';
//import { OverlayPanelModule } from 'primeng/overlaypanel';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common'; // Import CommonModule
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CarouselModule,FooterComponent,CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {


  carouselOptions = {
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay:true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    },
    navText: ['<', '>']
  };

  constructor() { }

  ngOnInit(): void {
    //console.log('Carousel initialized with options:', this.carouselOptions);
  }
  
}
