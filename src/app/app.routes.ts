import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { ProductsComponent } from './products/products.component';
import { AerialCableComponent } from './products/aerial-cable/aerial-cable.component';
import { TransmissionConductorComponent } from './products/transmission-conductor/transmission-conductor.component';
import { PowerCableComponent } from './products/power-cable/power-cable.component';
import { AcsrComponent } from './products/transmission-conductor/acsr/acsr.component';
import { AaaComponent } from './products/transmission-conductor/aaa/aaa.component';
import { AaComponent } from './products/transmission-conductor/aa/aa.component';
import { InvestorsComponent } from './investors/investors.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';

export const routes: Routes = [

    {
        path: '', component: LandingComponent, pathMatch: 'full'
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'investors', component: InvestorsComponent
    },
    {
        path: 'infrastructure', component: InfrastructureComponent
    },
    {
        path: 'products/:id', component: ProductsComponent
    },
    {
        path: 'products', redirectTo : 'products/aerial', pathMatch:'full'
    },
];
