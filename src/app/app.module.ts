
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { AuthGuard,UnsearchedTermGuard } from './_guards';

import { AppComponent } from './app.component';
import { AlertComponent } from './_directives';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { AboutService } from './about/about.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AlertService, AuthInterceptor,AuthService,UserService } from './_services';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './dashboard/dashboard.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,   
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,    
    ContactComponent, DashboardComponent, HeaderComponent, FooterComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, {provide: APP_BASE_HREF, useValue: '/'},
    AuthGuard, UnsearchedTermGuard, AlertService, AboutService, AuthService,UserService,DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
