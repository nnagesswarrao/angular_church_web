import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLang = new BehaviorSubject<'en' | 'te'>('en');
  currentLang$ = this.currentLang.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.initializeLanguage();
  }

  setLanguage(lang: 'en' | 'te') {
    this.currentLang.next(lang);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('preferredLanguage', lang);
    }
  }

  getCurrentLang() {
    return this.currentLang.value;
  }

  initializeLanguage() {
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('preferredLanguage') as 'en' | 'te';
      if (savedLang) {
        this.setLanguage(savedLang);
      }
    }
  }
}
