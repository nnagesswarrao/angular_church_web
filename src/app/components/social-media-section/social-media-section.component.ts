import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface YoutubeVideo {
  embedUrl: SafeResourceUrl;
  title: string;
  description: string;
}

interface FacebookPost {
  author: string;
  authorImage: string;
  date: string;
  content: string;
  image?: string;
  imageAlt?: string;
}

@Component({
  selector: 'app-social-media-section',
  templateUrl: './social-media-section.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class SocialMediaSectionComponent implements OnInit {
  youtubeVideos: YoutubeVideo[] = [];
  facebookPosts: FacebookPost[] = [];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.loadYoutubeVideos();
    this.loadFacebookPosts();
  }

  private loadYoutubeVideos(): void {
    // Sample YouTube video data
    const videoIds = [
      '2mgUPt2KI08',
      'VIDEO_ID_2',
      'VIDEO_ID_3'
    ];

    this.youtubeVideos = videoIds.map(id => ({
      embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${id}`
      ),
      title: 'Sunday Service - Living in Faith',
      description: 'Join us for our weekly Sunday service as we explore the power of faith in our daily lives.'
    }));
  }

  private loadFacebookPosts(): void {
    // Sample Facebook post data
    this.facebookPosts = [
      {
        author: 'Church Name',
        authorImage: '/assets/images/church-logo.png',
        date: '2 hours ago',
        content: 'Join us this Sunday for a special worship service! We\'ll be exploring the theme of "Grace and Gratitude" with special musical performances.',
        image: '/assets/images/worship-service.jpg',
        imageAlt: 'Worship service announcement'
      },
      {
        author: 'Church Name',
        authorImage: '/assets/images/church-logo.png',
        date: '1 day ago',
        content: 'Thank you to everyone who participated in our community outreach program this weekend. Together we served over 200 meals to those in need! 🙏❤️'
      },
      {
        author: 'Church Name',
        authorImage: '/assets/images/church-logo.png',
        date: '2 days ago',
        content: 'Join our Bible study group every Wednesday at 7 PM. This week we\'ll be studying the Book of Psalms.',
        image: '/assets/images/bible-study.jpg',
        imageAlt: 'Bible study group'
      }
    ];
  }
}
