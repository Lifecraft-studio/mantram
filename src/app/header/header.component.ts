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
  private lastScrollPosition = 0;
  private scrollThreshold = 50; // minimum scroll amount to trigger menu close

  constructor(private router: Router) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.scrollY;

    // Check if sticky header should be shown
    this.isSticky = currentScroll > 150;

    // Calculate scroll difference
    const scrollDifference = Math.abs(currentScroll - this.lastScrollPosition);

    // Close menu if user has scrolled more than the threshold
    if (scrollDifference > this.scrollThreshold && this.showMenu) {
      this.closeMenu();
    }

    // Update last scroll position
    this.lastScrollPosition = currentScroll;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  closeMenu() {
    this.showMenu = false;
    // Also close any open submenus
    const submenus = document.querySelectorAll('.submenu.show');
    submenus.forEach(submenu => submenu.classList.remove('show'));
  }

  toggleSubmenu(event: Event) {
    event.preventDefault();
    // Only toggle submenu on mobile
    if (window.innerWidth < 768) {
      const submenu = (event.target as HTMLElement).closest('.has-submenu')?.querySelector('.submenu');
      if (submenu) {
        submenu.classList.toggle('show');
      }
    }
  }

  scrollTo(elementId: string) {
    this.router.navigate([''], { fragment: elementId });
    this.closeMenu();
  }
}