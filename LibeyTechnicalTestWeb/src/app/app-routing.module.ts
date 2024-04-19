import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsercardsComponent } from './User/user/usercards/usercards.component';
import { UserlistComponent } from './User/user/userlist/userlist.component';
import { UsermaintenanceComponent } from './User/user/usermaintenance/usermaintenance.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/user',
    pathMatch: 'full',
  },
  {
    path: 'user',
    component: UserlistComponent,
    // children: [
    //   { path: 'card', component: UsercardsComponent },
    //   { path: 'maintenance', component: UsermaintenanceComponent },
    // ],
  },
  {
    path: 'user/card',
    component: UsercardsComponent,
  },
  {
    path: 'user/maintenance',
    component: UsermaintenanceComponent,
  },
  {
    path: 'user/maintenance/:documentNumber',
    component: UsermaintenanceComponent,
  },
  { path: '**', component: AppComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
