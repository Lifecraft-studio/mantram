import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { AerialCableComponent } from "./aerial-cable/aerial-cable.component";
import { TransmissionConductorComponent } from "./transmission-conductor/transmission-conductor.component";
import { AcsrComponent } from "./transmission-conductor/acsr/acsr.component";
import { AaaComponent } from "./transmission-conductor/aaa/aaa.component";
import { AaComponent } from "./transmission-conductor/aa/aa.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterOutlet, RouterLink, AerialCableComponent, TransmissionConductorComponent, AcsrComponent, AaaComponent, AaComponent],
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
    // {
    //   id: 'transmission',
    //   name: 'Aluminium Conductor',
    //   img: 'assets/aluminium-hero.jpg'
    // },
    {
      id: 'acsr',
      name: 'Stranded Bare Aluminium Conductor Steel Reinforced (ACSR)',
      img: 'assets/aluminium-hero.jpg'
    },
    {
      id: 'aaa',
      name: 'All Aluminum Alloy Conductors (AAA)',
      img: 'assets/aluminium-hero.jpg'
    },
    {
      id: 'aa',
      name: 'All Aluminium Conductors (AAC)',
      img: 'assets/aluminium-hero.jpg'
    }
  ]
  constructor(private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      if(param['id']) {
        this.product = this.products.find(product => product.id === param['id']);
      } else {
        this.product = this.products[0];
      }
    })
  }

}
