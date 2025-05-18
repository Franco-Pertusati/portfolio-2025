import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastComponent } from "./modules/shared/toast/toast.component";
import { HomeComponent } from "./modules/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToastComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
