import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkMode = new BehaviorSubject<boolean>(false);
  private primaryColor = new BehaviorSubject<string>('#4F46E5'); // Default indigo color

  isDarkMode$ = this.isDarkMode.asObservable();
  primaryColor$ = this.primaryColor.asObservable();

  toggleDarkMode() {
    const newValue = !this.isDarkMode.value;
    document.documentElement.classList.toggle('dark', newValue);
    this.isDarkMode.next(newValue);
  }

  setPrimaryColor(color: string) {
    document.documentElement.style.setProperty('--primary-color', color);
    this.primaryColor.next(color);
  }
}
