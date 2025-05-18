import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-to-do-card',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './to-do-card.component.html',
  styleUrl: './to-do-card.component.css'
})
export class ToDoCardComponent {
  @Input() title: string = 'Task title';
  @Input() complete: boolean = false;
  @Input() deadLine: number | null = null;
  @Output() completeChange = new EventEmitter<boolean>();
  @Output() delete = new EventEmitter<void>();

  showMenu: boolean = false;

  toggleComplete() {
    this.completeChange.emit(this.complete);
  }

  onDelete() {
    this.delete.emit();
  }

  formatDeadline(): string {
    if (!this.deadLine) return '';

    const now = new Date();
    const deadlineDate = new Date(this.deadLine * 1000); // Convert from timestamp

    if (deadlineDate.toDateString() === now.toDateString()) {
      return 'Today';
    }

    return deadlineDate.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  }
}
