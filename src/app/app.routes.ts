import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./core/components/user/user.routes').then(m => m.routes),
      }
];
