import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  images = [
    { src: 'assets/home-curosel/home-curosel-1.jpg', alt: 'Image 1' },
    { src: 'assets/home-curosel/home-curosel-2.jpg', alt: 'Image 2' },
    { src: 'assets/home-curosel/home-curosel-3.jpg', alt: 'Image 3' },
    { src: 'assets/home-curosel/home-curosel-4.jpg', alt: 'Image 3' }

  ];

  constructor() { }

  getImages() {
    return of({ data: this.images, status: 200 });
  }

  getTestmonials() {

    return of({
      data: [{
        name: 'John Smith',
        role: 'Church Member',
        quote: 'This church has become my second family. The community here is truly amazing and welcoming.',
        image: 'assets/avatar/avatar-m.jpg'
      },
      {
        name: 'Sarah Johnson',
        role: 'Youth Group Leader',
        quote: 'Ive seen incredible transformations in our youth through the churchs programs and guidance.',
        image: 'assets/avatar/avatar-m.jpg'

      },
      {
        name: 'Michael Davis',
        role: 'Volunteer',
        quote: 'Serving in this church has given me a new purpose and deepened my faith journey.',
        image: 'assets/avatar/avatar-m.jpg'

      }
      ], status: 200
    });

  }
}
