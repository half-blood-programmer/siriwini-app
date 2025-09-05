import { Injectable, signal, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class LayoutState {
  collapsed = signal<boolean>(false);

  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  constructor() {
    if (this.isBrowser) {
      const saved = localStorage.getItem('sidebar:collapsed');
      if (saved !== null) this.collapsed.set(saved === '1');

      effect(() => {
        localStorage.setItem('sidebar:collapsed', this.collapsed() ? '1' : '0');
      });
    }
  }

  toggle() {
    this.collapsed.update((v) => !v);
  }
  set(v: boolean) {
    this.collapsed.set(v);
  }
}
