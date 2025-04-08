import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showMenu = false;
  
  isSticky: boolean = false;

  constructor(private router: Router) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.scrollY;
    this.isSticky = currentScroll > 150;
  }

  scrollTo(elementId: string) {
    this.router.navigate([''], { fragment: elementId })
  }
}