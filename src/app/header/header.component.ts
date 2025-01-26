import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showMenu = false;

  isSticky: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.scrollY;
    this.isSticky = currentScroll > 150;
  }
}