import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit, AfterViewInit {

  @ViewChild('product') productEl!: ElementRef;
  @ViewChild('product2') productEl2!: ElementRef;
  @ViewChild('imageVideo') imageVideoEl!: ElementRef;
  @ViewChild('counter') counterEl!: ElementRef;

  contactForm: Boolean = false;

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
    observer.observe(this.productEl2.nativeElement);
    observer.observe(this.imageVideoEl.nativeElement);
    observer.observe(this.counterEl.nativeElement);
  }

  scrollTo(fragment: string): void {
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  routeToProducts(path: string) {
    this.router.navigate([`products/${path}`], { relativeTo: this.activatedRoute });
  }
}
