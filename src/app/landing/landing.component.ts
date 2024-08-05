import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

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

  scrollTo(fragment: string): void {
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
