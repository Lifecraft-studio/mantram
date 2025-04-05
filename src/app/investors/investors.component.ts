import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GeneralDetailsComponent } from './general-details/general-details.component';

@Component({
  selector: 'app-investors',
  standalone: true,
  imports: [RouterLink,RouterOutlet,GeneralDetailsComponent],
  templateUrl: './investors.component.html',
  styleUrl: './investors.component.scss'
})
export class InvestorsComponent {

}
