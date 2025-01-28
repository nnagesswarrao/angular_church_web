import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('preferredLanguage') as 'en' | 'te';
      if (savedLang) {
        this.translate.use(savedLang);
      }
    }
  }
}
