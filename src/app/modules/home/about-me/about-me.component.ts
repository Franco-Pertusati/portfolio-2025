import { Component } from '@angular/core';
import { CoppyTextComponent } from "../../shared/coppy-text/coppy-text.component";
import { ContactBtnComponent } from "../../shared/contact-btn/contact-btn.component";

@Component({
  selector: 'app-about-me',
  imports: [CoppyTextComponent, ContactBtnComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})

export class AboutMeComponent {}
