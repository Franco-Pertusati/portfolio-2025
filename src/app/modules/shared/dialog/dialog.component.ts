import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NodemailerService } from '../../../core/services/nodemailer.service';

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

  constructor(private fb: FormBuilder, private mailer: NodemailerService) {
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
        console.log('Éxito:', response);
        alert('Mensaje enviado correctamente');
      },
      error: (error) => {
        console.error('Error:', error);
        alert('Hubo un error al enviar el mensaje');
      },
    });
  }
}
