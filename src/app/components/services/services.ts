import { Component, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-services',
  imports: [TranslateModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  services = [
    { icon: 'financial', titleKey: 'SERVICES.FINANCIAL_AUDIT.TITLE', descKey: 'SERVICES.FINANCIAL_AUDIT.DESCRIPTION', fullKey: 'SERVICES.FINANCIAL_AUDIT.FULL' },
    { icon: 'tax', titleKey: 'SERVICES.TAX_AUDIT.TITLE', descKey: 'SERVICES.TAX_AUDIT.DESCRIPTION', fullKey: 'SERVICES.TAX_AUDIT.FULL' },
    { icon: 'property', titleKey: 'SERVICES.PROPERTY_VALUATION.TITLE', descKey: 'SERVICES.PROPERTY_VALUATION.DESCRIPTION', fullKey: 'SERVICES.PROPERTY_VALUATION.FULL' },
    { icon: 'legal', titleKey: 'SERVICES.LEGAL.TITLE', descKey: 'SERVICES.LEGAL.DESCRIPTION', fullKey: 'SERVICES.LEGAL.FULL' },
    { icon: 'training', titleKey: 'SERVICES.TRAINING.TITLE', descKey: 'SERVICES.TRAINING.DESCRIPTION', fullKey: 'SERVICES.TRAINING.FULL' },
    { icon: 'expertise', titleKey: 'SERVICES.EXPERTISE.TITLE', descKey: 'SERVICES.EXPERTISE.DESCRIPTION', fullKey: 'SERVICES.EXPERTISE.FULL' },
    { icon: 'tender', titleKey: 'SERVICES.TENDER.TITLE', descKey: 'SERVICES.TENDER.DESCRIPTION', fullKey: 'SERVICES.TENDER.FULL' },
    { icon: 'business', titleKey: 'SERVICES.BUSINESS_PLAN.TITLE', descKey: 'SERVICES.BUSINESS_PLAN.DESCRIPTION', fullKey: 'SERVICES.BUSINESS_PLAN.FULL' },
    { icon: 'mediation', titleKey: 'SERVICES.MEDIATION.TITLE', descKey: 'SERVICES.MEDIATION.DESCRIPTION', fullKey: 'SERVICES.MEDIATION.FULL' },
  ];

  activeService = signal<{ icon: string; titleKey: string; descKey: string; fullKey: string } | null>(null);

  openService(service: { icon: string; titleKey: string; descKey: string; fullKey: string }) {
    this.activeService.set(service);
  }

  closeService() {
    this.activeService.set(null);
  }
}
