import { Routes } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      // example landing route
      {
        path: '',
        loadComponent: () =>
          import('./stub-dashboard/stub-dashboard.component').then(
            (m) => m.StubDashboardComponent
          ),
      },
      {
        path: 'skm',
        loadComponent: () =>
          import('./views/dash-skm/dash-skm/dash-skm.component').then(
            (m) => m.DashSkmComponent
          ),

        title: 'skm',
      },
      {
        path: 'manrisk',
        loadComponent: () =>
          import(
            './views/dash-manrisk/dash-manrisk/dash-manrisk.component'
          ).then((m) => m.DashManriskComponent),

        title: 'manrisk',
      },
    ],
  },
];
