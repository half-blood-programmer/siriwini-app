import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonModule, CardModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'siriwini-app';
  dark = false;

  toggleMode() {
    this.dark = !this.dark;
    document.body.classList.toggle('dark', this.dark);
    // console.log('dark?', this.dark, document.body.className);
  }
}
