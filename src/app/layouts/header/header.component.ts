import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../../services/translation.service';
import { SettingsComponent } from '../../components/settings/settings.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    TranslateModule,
    SettingsComponent
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  private translationService = inject(TranslationService);
  private translate = inject(TranslateService);
  isMenuOpen = false;
  showSettings = false;

  constructor(
    private router: Router
  ) {}

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

  toggleSettings(isMobile: boolean = false) {
    if (isMobile) {
      this.router.navigate(['/home/settings']);
      this.toggleMenu();
    } else {
      this.showSettings = !this.showSettings;
    }
  }

  getLanguageText(): string {
    return this.currentLanguage === 'en' ? 'తెలుగు' : 'English';
  }
}
