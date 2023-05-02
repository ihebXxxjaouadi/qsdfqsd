import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './frontOffice/body-user/body-user.component';

import { AddReclamationComponent } from './views/client/add-reclamation/add-reclamation.component';
import { LoginFormComponent } from './views/admin/login/login-form/login-form.component';
import { DashboardComponent } from './views/admin/dashboard/dashboard/dashboard.component';
import { LoginUserComponent } from './views/client/login/login-user/login-user.component';


const routes: Routes = [

  { path: 'adddv', component: AddReclamationComponent },
  { path: 'dvadmin', component: LoginFormComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginUserComponent },
  {
    path: 'admin',
    component: AllTemplateAdminComponent,
    children: [
      {
        path: 'admin',
        component: BodyAdminComponent,
      },
    ],
  },
  {
    path: 'user',
    component: AllTemplateUserComponent,
    children: [
      {
        path: 'user',
        component: BodyUserComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
