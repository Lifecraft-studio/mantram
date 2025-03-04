import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-infrastructure',
  standalone: true,
  imports: [ImageModule],
  templateUrl: './infrastructure.component.html',
  styleUrl: './infrastructure.component.scss'
})
export class InfrastructureComponent {
  images = Array.from({ length: 12 }, (_, i) => `/assets/infrastructure/image ${i+1}.jpg`);

  selectedImage: string | null = null;

  openImage(imageUrl: string) {
    this.selectedImage = imageUrl;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
