import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './Authentication/login/login.component';
import { ForgetPasswordComponent } from './Authentication/forget-password/forget-password.component';
import { RegisterComponent } from './Authentication/register/register.component';
import { ChangePasswordComponent } from './Authentication/change-password/change-password.component';
import { ActivateEmailComponent } from './Authentication/activate-email/activate-email.component';
import { PostJobComponent } from './Authentication/employer/post-job/post-job.component';
import { EmployerInfoComponent } from './Authentication/employer/employer-info/employer-info.component';
const routes: Routes = [
  {
    component: HomePageComponent,
    path:''
  },
  {
    component: LoginComponent,
    path:'login'
  },
  {
    component: ForgetPasswordComponent,
    path:'forget'
  },
  {
    component: RegisterComponent,
    path:'register'
  },
  {
    component: ChangePasswordComponent,
    path:'change-password'
  },
  {
    component: ActivateEmailComponent,
    path:'activate-email'
  },
  {
    component: PostJobComponent,
    path:'post-job'
  },
  {
    component: EmployerInfoComponent,
    path:'employer-info'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
