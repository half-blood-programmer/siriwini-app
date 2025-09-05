import { Component, HostBinding, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TopbarComponent } from '../topbar/topbar.component';
import { LayoutState } from '../../core/layout-state.service';

@Component({
  standalone: true,
  selector: 'app-layout',
  imports: [RouterOutlet, SidebarComponent, TopbarComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  constructor(public state: LayoutState) {}

  @HostBinding('class.sidebar-collapsed')
  get collapsedClass() {
    return this.state.collapsed();
  }
}
