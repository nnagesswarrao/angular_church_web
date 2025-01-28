import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html'
})
export class TestimonialsComponent {

  testimonials: Testimonial[] = [];


  constructor(private apiSrvce: ApiService) {
    this.apiSrvce.getTestmonials().subscribe({
      next: (res) => {
        this.testimonials = res[`data`]

      }
    });
  }
}
