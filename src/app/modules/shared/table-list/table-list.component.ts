import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-list',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './table-list.component.html',
  styleUrl: './table-list.component.css'
})
export class TableListComponent {
  items = [
    { name: "Ana López", email: "ana.lopez@example.com", status: true, id: 1 },
    { name: "Carlos Pérez", email: "carlos.perez@example.com", status: false, id: 2 },
    { name: "María Gómez", email: "maria.gomez@example.com", status: true, id: 3 },
    { name: "Luis Martínez", email: "luis.martinez@example.com", status: false, id: 4 },
    { name: "Laura Torres", email: "laura.torres@example.com", status: true, id: 5 },
    { name: "Pedro Sánchez", email: "pedro.sanchez@example.com", status: false, id: 6 },
    { name: "Sofía Romero", email: "sofia.romero@example.com", status: true, id: 7 },
    { name: "Diego Ruiz", email: "diego.ruiz@example.com", status: false, id: 8 },
    { name: "Isabel Mendoza", email: "isabel.mendoza@example.com", status: true, id: 9 },
    { name: "Javier Castro", email: "javier.castro@example.com", status: false, id: 10 }
  ];

  selectedItems: Set<number> = new Set<number>();

  toggleUserSelection(userId: number): void {
    if (this.isSelected(userId)) {
      this.selectedItems.delete(userId);
    } else {
      this.selectedItems.add(userId);
    }
  }

  isSelected(userId: number): boolean {
    return this.selectedItems.has(userId);
  }

  toggleSelectAll() {
    if (this.items?.length === this.selectedItems.size) {
      this.selectedItems.clear()
    } else {
      this.items?.forEach(user => {
        this.selectedItems.add(user.id)
      });
    }
  }
}
