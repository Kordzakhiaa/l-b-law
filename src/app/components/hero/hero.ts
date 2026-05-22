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
    'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1521791055366-0d553872125f?w=1920&h=1080&fit=crop',
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
}
