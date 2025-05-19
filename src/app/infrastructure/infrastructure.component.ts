import { Component, ElementRef, ViewChild } from '@angular/core';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-infrastructure',
  standalone: true,
  imports: [ImageModule],
  templateUrl: './infrastructure.component.html',
  styleUrl: './infrastructure.component.scss'
})
export class InfrastructureComponent {
  
}
