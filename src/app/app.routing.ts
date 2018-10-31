import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthGuard,UnsearchedTermGuard } from './_guards';

const appRoutes: Routes = [
    // redirect to home page by default
    { path: '', component: HomeComponent },  
    { path: 'home', component: HomeComponent }, 
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
       
   

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);