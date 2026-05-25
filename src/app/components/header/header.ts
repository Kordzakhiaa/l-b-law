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

  onPrimaryColorChange(hex: string) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const shades: Record<string, [number, number, number]> = {
      '50':  [Math.min(r + 180, 255), Math.min(g + 180, 255), Math.min(b + 180, 255)],
      '100': [Math.min(r + 150, 255), Math.min(g + 150, 255), Math.min(b + 150, 255)],
      '200': [Math.min(r + 115, 255), Math.min(g + 115, 255), Math.min(b + 115, 255)],
      '300': [Math.min(r + 80, 255), Math.min(g + 80, 255), Math.min(b + 80, 255)],
      '400': [Math.min(r + 45, 255), Math.min(g + 45, 255), Math.min(b + 45, 255)],
      '500': [r, g, b],
      '600': [Math.round(r * 0.85), Math.round(g * 0.85), Math.round(b * 0.85)],
      '700': [Math.round(r * 0.7), Math.round(g * 0.7), Math.round(b * 0.7)],
      '800': [Math.round(r * 0.55), Math.round(g * 0.55), Math.round(b * 0.55)],
      '900': [Math.round(r * 0.38), Math.round(g * 0.38), Math.round(b * 0.38)],
      '950': [Math.round(r * 0.22), Math.round(g * 0.22), Math.round(b * 0.22)],
    };
    const root = document.documentElement;
    for (const [shade, [sr, sg, sb]] of Object.entries(shades)) {
      root.style.setProperty(`--color-primary-${shade}`, `#${sr.toString(16).padStart(2,'0')}${sg.toString(16).padStart(2,'0')}${sb.toString(16).padStart(2,'0')}`);
    }
  }
}
