import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  imports: [TranslateModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  formData = signal({ name: '', email: '', phone: '', message: '' });
  submitted = signal(false);
  sending = signal(false);
  error = signal(false);

  updateField(field: string, value: string) {
    this.formData.update((data) => ({ ...data, [field]: value }));
  }

  async onSubmit() {
    if (this.sending()) return;
    this.sending.set(true);
    this.error.set(false);

    try {
      await emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        {
          name: this.formData().name,
          email: this.formData().email,
          time: new Date().toLocaleString(),
          message: this.formData().message,
          phone: this.formData().phone,
        },
        environment.emailjs.publicKey,
      );
      this.submitted.set(true);
      this.formData.set({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => this.submitted.set(false), 5000);
    } catch {
      this.error.set(true);
      setTimeout(() => this.error.set(false), 5000);
    } finally {
      this.sending.set(false);
    }
  }
}
