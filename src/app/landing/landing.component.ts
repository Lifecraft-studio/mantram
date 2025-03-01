import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit, AfterViewInit{

  @ViewChild('product') productEl! : ElementRef;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  
  
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activatedRoute.fragment.subscribe(fragment => {
          if (fragment) {
            this.scrollTo(fragment);
          }
        });
      }
    });
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target); // Stop observing after animation
        }
      });
    }, {
      threshold: 0.4 // Trigger when 30% of the element is visible
    });

    observer.observe(this.productEl.nativeElement);
  }

  scrollTo(fragment: string): void {
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  routeToProducts(path : string) {
    this.router.navigate([`products/${path}`], {relativeTo: this.activatedRoute});
  }
}
