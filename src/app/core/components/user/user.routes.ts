import { Routes } from "@angular/router";
import { UserListComponent } from "./user-list/user-list.component";
import { NotFoundComponent } from "../../../shared/not-found/not-found.component";

export const routes: Routes = [
    {
      path: '',
      redirectTo: '/user',
      pathMatch: 'full'
    },
    {
      path: 'user',
      component: UserListComponent,
    },
    {
      path: 'not-found',
      component: NotFoundComponent,
    },
    {
        path:'**',
        redirectTo:'not-found'
    }
  ];