import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  childPath = '';
  product: any;

  products = [
    {
      id: 'aerial',
      name: 'LT XLPE Aerial Bunched Cables',
      img: 'assets/aerial-hero.jpg'
    },
    {
      id: 'transmission',
      name: 'Aluminium Conductor',
      img: 'assets/aluminium-hero.jpg'
    },
    {
      id: 'acsr',
      name: 'Stranded Bare Aluminium Conductor Steel Reinforced (ACSR)',
      img: 'assets/aluminium-hero.jpg'
    },
    {
      id: 'aaa',
      name: 'AAA',
      img: 'assets/aluminium-hero.jpg'
    },
    {
      id: 'aa',
      name: 'AA',
      img: 'assets/aluminium-hero.jpg'
    }
  ]
  constructor(private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    // Check for the first child route
    const childRoute = this.activatedRoute.firstChild;

    if (childRoute) {
      // Subscribe to URL segments
      this.activatedRoute.firstChild?.url.subscribe((segments) => {
        this.childPath = segments.map((segment) => segment.path).join('/');
        this.product = this.products.find(product => product.id === this.childPath);
      });
    }
  }

}
