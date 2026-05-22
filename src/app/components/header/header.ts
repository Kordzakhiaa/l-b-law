import { Component, HostListener, signal } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isScrolled = signal(false);
  mobileMenuOpen = signal(false);
  currentLang = signal('en');

  constructor(private translate: TranslateService) {
    this.translate.use('en');
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
