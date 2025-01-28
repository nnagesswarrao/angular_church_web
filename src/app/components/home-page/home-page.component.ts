import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { PrayerVideoSectionComponent } from '../prayer-video-section/prayer-video-section.component';
import { SocialMediaSectionComponent } from '../social-media-section/social-media-section.component';
import { ContactLocationSectionComponent } from '../contact-location-section/contact-location-section.component';
import { PrayerRequestSectionComponent } from '../prayer-request-section/prayer-request-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    TestimonialsComponent,
    PrayerVideoSectionComponent,
    SocialMediaSectionComponent,
    ContactLocationSectionComponent,
    PrayerRequestSectionComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent { }
