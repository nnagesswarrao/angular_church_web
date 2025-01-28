import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryItem {
  type: 'image' | 'video';
  url: string;
  date: Date;
  place: string;
  thumbnail?: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gellary.component.html',
  styleUrls: ['./gellary.component.scss']
})
export class GalleryComponent {
  activeTab: 'images' | 'videos' = 'images';

  images: GalleryItem[] = Array.from({ length: 50 }, () => ({
    type: 'image',
    url: 'assets/images/gallery.jpg',
    date: new Date('2024-01-15'),
    place: 'Church Hall'
  }));

  // [

  //   // Add more images as needed
  // ];

  videos: GalleryItem[] = Array.from({ length: 50 }, () => ({
    type: 'video',
    url: 'https://www.youtube.com/embed/VIDEO_ID',
    date: new Date('2024-01-10'),
    place: 'Sunday Service',
    thumbnail: '/assets/images/video-thumb1.jpg'
  }));


  setActiveTab(tab: 'images' | 'videos') {
    this.activeTab = tab;
  }
}
