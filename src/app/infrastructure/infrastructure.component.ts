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
  images = Array.from({ length: 12 }, (_, i) => `/assets/infrastructure/image ${i + 1}.jpg`);

  selectedImage: string | null = null;
  currentIndex: number = 0;

  openImage(imageUrl: string) {
    this.selectedImage = imageUrl;
    this.currentIndex = this.images.indexOf(imageUrl);
  }

  closeImage() {
    this.selectedImage = null;
  }

  prevImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--; 
    } else {
      this.currentIndex = this.images.length - 1;
    }
  }
  
  nextImage() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; 
    }
  }
  
}
