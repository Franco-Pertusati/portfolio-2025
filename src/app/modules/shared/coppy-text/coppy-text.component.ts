import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-coppy-text',
  imports: [],
  templateUrl: './coppy-text.component.html',
  styleUrl: './coppy-text.component.css'
})
export class CoppyTextComponent {
  @Input() contentToCopy: string = ''

  copyContent() {}
}
