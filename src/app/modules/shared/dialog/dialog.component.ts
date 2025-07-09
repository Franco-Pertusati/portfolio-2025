import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NodemailerService } from '../../../core/services/nodemailer.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-dialog',
  imports: [ReactiveFormsModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  @Output() dialogState: EventEmitter<boolean> = new EventEmitter<boolean>()

  closeDialog() {
    this.dialogState.emit(false)
  }

  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private mailer: NodemailerService, private toast: ToastService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      company: [''],
      subject: ['', Validators.required],
      text: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.sendForm(this.contactForm.value)
    } else {
      console.warn('Form is invalid');
    }
  }

  sendForm(data: any) {
    this.mailer.sendMessage(data).subscribe({
      next: (response) => {
        this.toast.error("Message sent successfully.")
      },
      error: (error) => {
        this.toast.succes("Error sending message, try again.")
      },
    });
  }
}
