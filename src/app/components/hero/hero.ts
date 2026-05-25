import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  imports: [TranslateModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit, OnDestroy {
  activeSlide = signal(0);
  private intervalId: ReturnType<typeof setInterval> | null = null;

  slides = [
    'images/slide-1.jpeg',
    'images/slide-2.jpeg',
    'images/slide-3.jpeg',
    'images/slide-4.jpeg',
    'images/slide-5.jpeg',
    'images/slide-7.jpeg',
  ];

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.activeSlide.update((i) => (i + 1) % this.slides.length);
    }, 5000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  scrollTo(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
