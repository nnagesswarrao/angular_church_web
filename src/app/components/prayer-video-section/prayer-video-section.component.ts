import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';

@Component({
  selector: 'app-prayer-video-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prayer-video-section.component.html',
  styleUrls: ['./prayer-video-section.component.scss']
})
export class PrayerVideoSectionComponent {
  prayers: string[] = [
    '"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. For God did not send his Son into the world to condemn the world, but to save the world through him." - John 3:16-17. Let us pray to embrace this divine love and share it with others.',
    
    '"Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus." - Philippians 4:6-7. Let us find peace in prayer.',
    
    '"Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight. Do not be wise in your own eyes; fear the Lord and shun evil." - Proverbs 3:5-7. Guide us to trust in Your wisdom.'
  ];
  videoUrl: string = 'https://www.youtube.com/embed/your-video-id';
}
