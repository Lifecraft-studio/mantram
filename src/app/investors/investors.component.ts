import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-investors',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './investors.component.html',
  styleUrl: './investors.component.scss'
})
export class InvestorsComponent {

  @ViewChild('investorsSection') investorsSection!: ElementRef;

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      if (window.innerWidth <= 768 && this.investorsSection) {
        setTimeout(() => {
          this.investorsSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    });
  }
}
