import { Component, computed, Signal } from '@angular/core';
import { ToastService } from '../../../core/services/toast.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [NgClass],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
  toastList = computed(() => this.toastService.toastList());

  constructor(private toastService: ToastService) { }
}
