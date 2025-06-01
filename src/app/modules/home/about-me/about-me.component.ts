import { Component } from '@angular/core';
import { CoppyTextComponent } from "../../shared/coppy-text/coppy-text.component";

@Component({
  selector: 'app-about-me',
  imports: [CoppyTextComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {}
