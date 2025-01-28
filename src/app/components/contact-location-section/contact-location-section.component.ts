import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-location-section',
  templateUrl: './contact-location-section.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class ContactLocationSectionComponent {
  mapUrl: SafeResourceUrl;
  contactInfo = {
    address: '123 Church Street, City Name, State 12345',
    phone: '+1 (555) 123-4567',
    email: 'info@yourchurch.com',
    schedule: [
      'Sunday Services: 9:00 AM & 11:00 AM',
      'Wednesday Bible Study: 7:00 PM',
      'Youth Ministry: Friday 6:00 PM'
    ]
  };

  constructor(private sanitizer: DomSanitizer) {
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAPS_EMBED_URL'
    );
  }
}
