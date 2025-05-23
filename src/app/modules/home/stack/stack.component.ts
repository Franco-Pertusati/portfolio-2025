import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [NgClass],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.css'
})
export class StackComponent {
  isOpen: boolean = false;

  toggleState() {
    this.isOpen = !this.isOpen
  }
}
