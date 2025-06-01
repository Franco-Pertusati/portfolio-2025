import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-coppy-text',
  imports: [],
  templateUrl: './coppy-text.component.html',
  styleUrl: './coppy-text.component.css'
})
export class CoppyTextComponent {
  @Input() contentToCopy: string = ''

  copyContent() {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(this.contentToCopy).then(() => {
        console.log('Texto copiado al portapapeles:', this.contentToCopy);
      }).catch(err => {
        console.error('Error al copiar el texto:', err);
      });
    } else {
      // Fallback para navegadores que no soportan Clipboard API
      const textarea = document.createElement('textarea');
      textarea.value = this.contentToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        console.log('Texto copiado al portapapeles (fallback):', this.contentToCopy);
      } catch (err) {
        console.error('Error al copiar el texto (fallback):', err);
      }
      document.body.removeChild(textarea);
    }
  }
}
