import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard, UnsearchedTermGuard } from './_guards';

const appRoutes: Routes = [
    // redirect to home page by default
    {
        path: '',
        component: LoginLayoutComponent,
        children: [            
            { path: '', component: HomeComponent },
            { path: 'login', component: LoginComponent },
            { path: 'home', component: HomeComponent },
          //  { path: 'home', component: HomeComponent, canDeactivate:[UnsearchedTermGuard] },
            { path: 'about', component: AboutComponent },
            { path: 'contact', component: ContactComponent },
            // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent }
        ]
    },
    {
        path: '',
        component: HomeLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent                
            },
            {
                path: 'user-profile',
                component: UserProfileComponent
            }
        ]
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);