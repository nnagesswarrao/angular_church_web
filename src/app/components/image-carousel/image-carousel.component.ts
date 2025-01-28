import { Component, Input, OnInit, OnDestroy, NgZone, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-image-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-carousel.component.html'
})
export class ImageCarouselComponent implements OnInit, OnDestroy {
  @Input() images: any[] = [];
  currentIndex = 0;
  private autoSlideInterval: any;
  private isBrowser: boolean;

  constructor(
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.startAutoSlide();
    }
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      this.stopAutoSlide();
    }
  }

  nextImage(): void {
    if (!this.images.length) return;
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.resetAutoSlide();
  }

  previousImage(): void {
    if (!this.images.length) return;
    this.currentIndex = this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
    this.resetAutoSlide();
  }

  private startAutoSlide(): void {
    this.ngZone.runOutsideAngular(() => {
      this.autoSlideInterval = setInterval(() => {
        this.ngZone.run(() => {
          this.nextImage();
        });
      }, 5000);
    });
  }

  private stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    }
  }

  private resetAutoSlide(): void {
    if (this.isBrowser) {
      this.stopAutoSlide();
      this.startAutoSlide();
    }
  }
}
