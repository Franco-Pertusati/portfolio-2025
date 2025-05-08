import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img-carrousell',
  standalone: true,
  imports: [],
  templateUrl: './img-carrousell.component.html',
  styleUrl: './img-carrousell.component.css'
})
export class ImgCarrousellComponent {
  @Input() imgsList: string[] | undefined = []
  selectedImg = false

  toggleImg() {
    this.selectedImg = !this.selectedImg
  }
}
