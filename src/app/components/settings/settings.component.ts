import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../../services/translation.service';
import { ThemeService } from '../../services/theme.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, TranslateModule, FormsModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  private translationService = inject(TranslationService);
  private translate = inject(TranslateService);
  private themeService = inject(ThemeService);

  isDarkMode$ = this.themeService.isDarkMode$;
  primaryColor$ = this.themeService.primaryColor$;

  fontSizeOptions = ['small', 'medium', 'large'];
  selectedFontSize = 'medium';

  colorThemes = [
    { name: 'Indigo', value: '#4F46E5' },
    { name: 'Red', value: '#EF4444' },
    { name: 'Green', value: '#10B981' },
    { name: 'Blue', value: '#3B82F6' },
    { name: 'Purple', value: '#8B5CF6' }
  ];

  // ...existing language methods...

  toggleLanguage() {
    const newLang = this.currentLanguage === 'en' ? 'te' : 'en';
    this.translationService.setLanguage(newLang);
    this.translate.use(newLang);
  }

  get currentLanguage() {
    return this.translationService.getCurrentLang();
  }

  getLanguageText(): string {
    return this.currentLanguage === 'en' ? 'తెలుగు' : 'English';
  }

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }

  setThemeColor(color: string) {
    this.themeService.setPrimaryColor(color);
  }

  setFontSize(size: string) {
    document.documentElement.setAttribute('data-font-size', size);
    this.selectedFontSize = size;
  }
}
