import { Component, HostListener, OnDestroy, OnInit, signal } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit, OnDestroy {
  isScrolled = signal(false);
  mobileMenuOpen = signal(false);
  currentLang = signal('ka');
  activeSection = signal('hero');

  private observer: IntersectionObserver | null = null;

  constructor(private translate: TranslateService) {
    this.translate.use('ka');
  }

  ngOnInit() {
    const sections = ['hero', 'about', 'lawyers', 'services', 'contact'];
    const visibleRatios = new Map<string, number>();

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibleRatios.set(entry.target.id, entry.intersectionRatio);
        }
        let best = '';
        let bestRatio = 0;
        for (const [id, ratio] of visibleRatios) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        }
        if (best) this.activeSection.set(best);
      },
      { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
    );

    setTimeout(() => {
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) this.observer!.observe(el);
      }
    });
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update((v) => !v);
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }

  switchLanguage(lang: string) {
    this.currentLang.set(lang);
    this.translate.use(lang);
  }

  scrollTo(sectionId: string) {
    this.closeMobileMenu();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
