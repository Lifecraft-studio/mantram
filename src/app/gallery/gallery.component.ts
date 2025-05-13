import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, GalleriaModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  images = [
    {
      itemImageSrc: '/assets/infrastructure/gallery-image1.JPG',
      thumbnailImageSrc: '/assets/infrastructure/gallery-image1.JPG',
      alt: 'Image 1'
    },
    {
      itemImageSrc: '/assets/infrastructure/gallery-image2.JPG',
      thumbnailImageSrc: '/assets/infrastructure/gallery-image2.JPG',
      alt: 'Image 2'
    },
    {
      itemImageSrc: '/assets/infrastructure/gallery-image3.JPG',
      thumbnailImageSrc: '/assets/infrastructure/gallery-image3.JPG',
      alt: 'Image 3'
    },
    {
      itemImageSrc: '/assets/infrastructure/gallery-image4.JPG',
      thumbnailImageSrc: '/assets/infrastructure/gallery-image4.JPG',
      alt: 'Image 4'
    }
  ];

  responsiveOptions = [
    {
      breakpoint: '2800px',
      numVisible: 7,
      numScroll: 3
    },
    {
      breakpoint: '1200px',
      numVisible: 5,
      numScroll: 2
    },
    {
      breakpoint: '992px',
      numVisible: 4,
      numScroll: 2
    },
    {
      breakpoint: '768px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '576px',
      numVisible: 2,
      numScroll: 1
    }
  ];
}