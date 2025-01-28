import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCarouselComponent } from '../image-carousel/image-carousel.component';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, ImageCarouselComponent],
  templateUrl: './hero-section.component.html'
})
export class HeroSectionComponent {
  images: any = [];


  constructor(private apiSrvce: ApiService) {

    this.apiSrvce.getImages().subscribe({
      next: (res) => {
        this.images = res[`data`];
        console.log(this.images, "=====");

      }
    });

  }







}
