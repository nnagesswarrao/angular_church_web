import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface PrayerRequest {
  name: string;
  location: string;
  contact: string;
  problem: string;
}

@Component({
  selector: 'app-prayer-request-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prayer-request-section.component.html',
})
export class PrayerRequestSectionComponent {
  prayerRequest: PrayerRequest = {
    name: '',
    location: '',
    contact: '',
    problem: ''
  };

  onSubmit() {
    // Handle form submission here
    console.log('Prayer request submitted:', this.prayerRequest);
    // Reset form
    this.prayerRequest = {
      name: '',
      location: '',
      contact: '',
      problem: ''
    };
  }
}
