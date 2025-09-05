import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { BadgeModule } from 'primeng/badge';
import { LayoutState } from '../../core/layout-state.service';
import { NAV_ITEMS } from './nav-items';

@Component({
  standalone: true,
  selector: 'app-sidebar',
  imports: [
    CommonModule,
    RouterModule,
    RippleModule,
    TooltipModule,
    BadgeModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  // ✅ make items available to the template
  public readonly items = NAV_ITEMS;

  constructor(private state: LayoutState) {}

  // ✅ Fix1: getter avoids “used before initialization”
  get collapsed() {
    return this.state.collapsed; // returns a Signal<boolean>
  }
}
