import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  private translationService = inject(TranslationService);
  private translate = inject(TranslateService);
  isMenuOpen = false;

  churchName = "Calvary Church Srungavaram"

  get currentLanguage() {
    return this.translationService.getCurrentLang();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleLanguage() {
    const newLang = this.currentLanguage === 'en' ? 'te' : 'en';
    this.translationService.setLanguage(newLang);
    this.translate.use(newLang); // Add this line to actually switch the language
  }

  getLanguageText(): string {
    return this.currentLanguage === 'en' ? 'తెలుగు' : 'English';
  }
}
