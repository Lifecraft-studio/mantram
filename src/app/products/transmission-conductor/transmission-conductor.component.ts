import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transmission-conductor',
  standalone: true,
  imports: [],
  templateUrl: './transmission-conductor.component.html',
  styleUrl: './transmission-conductor.component.scss'
})
export class TransmissionConductorComponent {
  @ViewChild('product') productEl!: ElementRef;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  routeToProducts(path: string) {
    this.router.navigate([`../${path}`], { relativeTo: this.activatedRoute });
  }
}
