import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    {
      images: ['assets/service1-1.jpg', 'assets/service1-2.jpg', 'assets/service1-3.jpg'],
      description: {
        english: 'Lorem ipsum dolor sit amet...',
        telugu: 'తెలుగు వచనం...'
      }
    },
    // ...Add more services data here
  ];
}
