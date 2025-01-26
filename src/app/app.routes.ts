import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { ProductsComponent } from './products/products.component';
import { AerialCableComponent } from './products/aerial-cable/aerial-cable.component';
import { TransmissionConductorComponent } from './products/transmission-conductor/transmission-conductor.component';
import { PowerCableComponent } from './products/power-cable/power-cable.component';

export const routes: Routes = [

    {
        path: '', component: LandingComponent, pathMatch: 'full'
    },
    {
        path:'about' , component:AboutComponent
    },
    {
        path:'products' , component:ProductsComponent, children : 
        [
            {

                path : 'aerial', component : AerialCableComponent
            },
            {

                path : 'aluminium', component : PowerCableComponent 
            }
        ]
    }
];
