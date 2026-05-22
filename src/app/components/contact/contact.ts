import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [TranslateModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  formData = signal({ name: '', email: '', phone: '', message: '' });
  submitted = signal(false);

  onSubmit() {
    this.submitted.set(true);
    setTimeout(() => this.submitted.set(false), 3000);
    this.formData.set({ name: '', email: '', phone: '', message: '' });
  }
}
