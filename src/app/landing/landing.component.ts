import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ButtonModule, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit, AfterViewInit {

  @ViewChild('product') productEl!: ElementRef;
  @ViewChild('imageVideo') imageVideoEl!: ElementRef;
  @ViewChild('counter') counterEl!: ElementRef;

  showContactForm: Boolean = false;
  showVideoPopup: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpClient) { }

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
      threshold: 0.1 // Trigger when 30% of the element is visible
    });

    observer.observe(this.productEl.nativeElement);
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

  playVideo() {
    this.showVideoPopup = !this.showVideoPopup;
    const video = this.imageVideoEl.nativeElement;
    // if(this.showVideoPopup){
    //   document.body.classList.add('no-scroll')
    // }
  }

  formData = {
    name: '',
    contact: '',
    email: '',
    message: ''
  };

  onSubmit(form: NgForm) {
    this.http.post('http://localhost:8000/phpmailer.php', this.formData).subscribe(
      (res: any) => {
        form.resetForm();
        this.formData = {
          name: '',
          contact: '',
          email: '',
          message: ''
        };
        this.showContactForm = false;
      },
      (err) => {
        console.error('Error:', err);
      }
    );
  }
}
