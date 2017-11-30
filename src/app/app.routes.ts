import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';

const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: BlogComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'login-email',
        component: EmailComponent
    }
]

export const AppRoutes = RouterModule.forRoot(appRoutes);