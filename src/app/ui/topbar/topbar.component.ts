import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { LayoutState } from '../../core/layout-state.service';

@Component({
  standalone: true,
  selector: 'app-topbar',
  imports: [ButtonModule],
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent {
  constructor(public state: LayoutState) {}
  toggle() {
    this.state.toggle();
  }
}
