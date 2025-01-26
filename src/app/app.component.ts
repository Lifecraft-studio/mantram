import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { LandingComponent } from "./landing/landing.component";
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
//import { CarouselModule } from 'ngx-owl-carousel-o';  // Import CarouselModule
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./footer/footer.component"; // Import CommonModule



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LandingComponent, CarouselModule, CommonModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mantram';
}
