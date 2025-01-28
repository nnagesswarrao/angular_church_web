import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Community Outreach Program',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum erat sed dui dignissim, vel facilisis nunc facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vehicula magna eget elit tincidunt, in mattis lorem vehicula. Suspendisse potenti. Sed auctor urna sit amet enim pellentesque, eu faucibus nunc tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis sagittis dolor vitae nunc hendrerit, eget tincidunt nunc tincidunt. Nulla facilisi. Nunc consectetur fringilla tellus, nec ultrices nisi malesuada at.',
      imageUrl: 'assets/images/gallery.jpg'
    },
    {
      title: 'Youth Development Initiative',
      description: 'Vestibulum tincidunt quam eu efficitur pulvinar. Nullam volutpat, neque vel condimentum efficitur, tortor neque facilisis lectus, nec vestibulum ligula nisi vel nunc. Phasellus consectetur tellus vitae lectus tincidunt, id viverra nunc pulvinar. Suspendisse potenti. Nulla facilisi. Integer semper turpis vel nulla tincidunt, vel tincidunt nisl venenatis. Sed ullamcorper magna vitae dolor malesuada, vel fermentum nunc tincidunt. Proin vehicula consectetur enim, eget tincidunt nisl ultrices in.',
      imageUrl: 'assets/images/gallery.jpg'
    },
    {
      title: 'Educational Support Program',
      description: 'Maecenas consectetur ultricies felis, vel efficitur nunc tincidunt vel. Suspendisse potenti. Sed auctor urna sit amet enim pellentesque, eu faucibus nunc tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis sagittis dolor vitae nunc hendrerit, eget tincidunt nunc tincidunt. Nulla facilisi. Nunc consectetur fringilla tellus, nec ultrices nisi malesuada at.',
      imageUrl: 'assets/images/gallery.jpg'
    },
    {
      title: 'Health and Wellness Initiative',
      description: 'Phasellus at sem ut purus facilisis faucibus. Sed dictum magna non dui cursus, vitae aliquam nisi tincidunt. Morbi vestibulum, lectus id congue facilisis, nisi lorem varius nunc, vitae tincidunt nunc nisi vel nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed auctor urna sit amet enim pellentesque, eu faucibus nunc tincidunt.',
      imageUrl: 'assets/images/gallery.jpg'
    },
    {
      title: 'Senior Care Program',
      description: 'Nullam volutpat, neque vel condimentum efficitur, tortor neque facilisis lectus, nec vestibulum ligula nisi vel nunc. Phasellus consectetur tellus vitae lectus tincidunt, id viverra nunc pulvinar. Suspendisse potenti. Nulla facilisi. Integer semper turpis vel nulla tincidunt, vel tincidunt nisl venenatis. Sed ullamcorper magna vitae dolor malesuada, vel fermentum nunc tincidunt.',
      imageUrl: 'assets/images/gallery.jpg'
    },
    {
      title: 'Arts and Culture Initiative',
      description: 'Curabitur ultricies magna vitae dolor malesuada, vel fermentum nunc tincidunt. Proin vehicula consectetur enim, eget tincidunt nisl ultrices in. Maecenas consectetur ultricies felis, vel efficitur nunc tincidunt vel. Suspendisse potenti. Sed auctor urna sit amet enim pellentesque, eu faucibus nunc tincidunt.',
      imageUrl: 'assets/images/gallery.jpg'
    },
    {
      title: 'Environmental Protection',
      description: 'Vestibulum tincidunt quam eu efficitur pulvinar. Nullam volutpat, neque vel condimentum efficitur, tortor neque facilisis lectus, nec vestibulum ligula nisi vel nunc. Phasellus consectetur tellus vitae lectus tincidunt, id viverra nunc pulvinar. Suspendisse potenti. Nulla facilisi. Integer semper turpis vel nulla tincidunt.',
      imageUrl: 'assets/images/gallery.jpg'
    },
    {
      title: 'Food Security Program',
      description: 'Sed dictum magna non dui cursus, vitae aliquam nisi tincidunt. Morbi vestibulum, lectus id congue facilisis, nisi lorem varius nunc, vitae tincidunt nunc nisi vel nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed auctor urna sit amet enim pellentesque.',
      imageUrl: 'assets/images/gallery.jpg'
    },
    {
      title: 'Community Housing Project',
      description: 'Integer semper turpis vel nulla tincidunt, vel tincidunt nisl venenatis. Sed ullamcorper magna vitae dolor malesuada, vel fermentum nunc tincidunt. Proin vehicula consectetur enim, eget tincidunt nisl ultrices in. Maecenas consectetur ultricies felis, vel efficitur nunc tincidunt vel.',
      imageUrl: 'assets/images/gallery.jpg'
    },
    {
      title: 'Mental Health Support',
      description: 'Praesent vestibulum erat sed dui dignissim, vel facilisis nunc facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vehicula magna eget elit tincidunt, in mattis lorem vehicula. Suspendisse potenti. Sed auctor urna sit amet enim pellentesque.',
      imageUrl: 'assets/images/gallery.jpg'
    },
    {
      title: 'Digital Literacy Program',
      description: 'Curabitur ultricies magna vitae dolor malesuada, vel fermentum nunc tincidunt. Proin vehicula consectetur enim, eget tincidunt nisl ultrices in. Maecenas consectetur ultricies felis, vel efficitur nunc tincidunt vel. Suspendisse potenti. Sed auctor urna sit amet enim pellentesque.',
      imageUrl: 'assets/images/gallery.jpg'
    },
    {
      title: 'Sports and Recreation',
      description: 'Phasellus at sem ut purus facilisis faucibus. Sed dictum magna non dui cursus, vitae aliquam nisi tincidunt. Morbi vestibulum, lectus id congue facilisis, nisi lorem varius nunc, vitae tincidunt nunc nisi vel nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
      imageUrl: 'assets/images/gallery.jpg'
    }
  ];
}
