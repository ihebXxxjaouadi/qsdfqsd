import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { FooterAdminComponent } from './backOffice/footer-admin/footer-admin.component';
import { HeaderAdminComponent } from './backOffice/header-admin/header-admin.component';
import { SideAdminComponent } from './backOffice/side-admin/side-admin.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './frontOffice/body-user/body-user.component';
import { FooterUserComponent } from './frontOffice/footer-user/footer-user.component';
import { HeaderUserComponent } from './frontOffice/header-user/header-user.component';

import { AddReclamationComponent } from './views/client/add-reclamation/add-reclamation.component';
import { LoginFormComponent } from './views/admin/login/login-form/login-form.component';
import { DashboardComponent } from './views/admin/dashboard/dashboard/dashboard.component';
import { FooterComponent } from './views/footer/footer/footer.component';
import { MainComponent } from './views/admin/dashboard/components/main/main.component';
import { HeaderComponent } from './views/admin/dashboard/components/header/header.component';
import { NavbarComponent } from './views/admin/dashboard/components/navbar/navbar.component';
import { ReclatmationComponent } from './views/admin/dashboard/components/reclatmation/reclatmation.component';
import { PieChartComponent } from './views/admin/dashboard/doneght/doneght.component';
import { AdminComponent } from './views/admin/admin/admin.component';
import { HttpClientModule } from '@angular/common/http'
import axios from 'axios';
import { LoginUserComponent } from './views/client/login/login-user/login-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AllTemplateAdminComponent,
    BodyAdminComponent,
    FooterAdminComponent,
    HeaderAdminComponent,
    SideAdminComponent,
    AllTemplateUserComponent,
    BodyUserComponent,
    FooterUserComponent,
    HeaderUserComponent,
    AppComponent,
    AddReclamationComponent,
    LoginFormComponent,
    DashboardComponent,
    FooterComponent,
    MainComponent,
    HeaderComponent,
    NavbarComponent,
    ReclatmationComponent,
    PieChartComponent,
    AdminComponent,
    LoginUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
