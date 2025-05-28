import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'change-detection',
    loadComponent: () => import('./pages/change-detection/change-detection.component').then(m => m.ChangeDetectionComponent)
  },
  {
    path: 'form-validation',
    loadComponent: () => import('./pages/form-validation/form-validation.component').then(m => m.FormValidationComponent)
  },
  {
    path: 'rxjs-subscription',
    loadComponent: () => import('./pages/rxjs-subscription/rxjs-subscription.component').then(m => m.RxjsSubscriptionComponent)
  },
  {
    path: 'component-communication',
    loadComponent: () => import('./pages/component-communication/component-communication.component').then(m => m.ComponentCommunicationComponent)
  },
  {
    path: 'data-management',
    loadComponent: () => import('./pages/data-management/data-management.component').then(m => m.DataManagementComponent)
  },
  {
    path: '',
    redirectTo: 'memory-leak',
    pathMatch: 'full'
  }
];
