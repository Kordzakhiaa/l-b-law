import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-lawyers',
  imports: [TranslateModule],
  templateUrl: './lawyers.html',
  styleUrl: './lawyers.css',
})
export class Lawyers {
  lawyers = [
    {
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop',
      nameKey: 'LAWYERS.LAWYER_1.NAME',
      roleKey: 'LAWYERS.LAWYER_1.ROLE',
      descKey: 'LAWYERS.LAWYER_1.DESCRIPTION',
    },
    {
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop',
      nameKey: 'LAWYERS.LAWYER_2.NAME',
      roleKey: 'LAWYERS.LAWYER_2.ROLE',
      descKey: 'LAWYERS.LAWYER_2.DESCRIPTION',
    },
    {
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop',
      nameKey: 'LAWYERS.LAWYER_3.NAME',
      roleKey: 'LAWYERS.LAWYER_3.ROLE',
      descKey: 'LAWYERS.LAWYER_3.DESCRIPTION',
    },
  ];
}
