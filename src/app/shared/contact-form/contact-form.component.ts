import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogService } from '../../core/services/dialog.service';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../core/services/toast.service';
import { mailerService } from '../../core/services/mailer.service';
import { text } from 'body-parser';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  fb = inject(FormBuilder)
  router = inject(Router)
  dialog = inject(DialogService)
  toast = inject(ToastService)
  mailer = inject(mailerService)

  portfolioMessage = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    subject: ['', [Validators.required]], // Añadí el required
    text: ['', [Validators.required, Validators.minLength(3)]]
  })

  onSubmit() {
    if (this.portfolioMessage.valid) {
      const { name, subject, text, } = this.portfolioMessage.getRawValue()
      this.submit(name!, subject!, text!)
    } else {
      this.portfolioMessage.markAllAsTouched()
    }
  }

  async submit(name: string, subject: string, text: string) {
    try {
      await this.mailer.sendMessage(name, subject, text);

      this.dialog.closeDialog();
      this.toast.success('Message sent successfully.');
    } catch (error: any) {
      this.toast.error('A problem occurred while sending the message.');
      console.error('Error sending message:', error);
    }
  }
}

