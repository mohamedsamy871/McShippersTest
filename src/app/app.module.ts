import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './Authentication/login/login.component';
import { RegisterComponent } from './Authentication/register/register.component';
import { ChangePasswordComponent } from './Authentication/change-password/change-password.component';
import { ForgetPasswordComponent } from './Authentication/forget-password/forget-password.component';
import { ActivateEmailComponent } from './Authentication/activate-email/activate-email.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { PostJobComponent } from './Authentication/employer/post-job/post-job.component';
import { EmployerInfoComponent } from './Authentication/employer/employer-info/employer-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ChangePasswordComponent,
    ForgetPasswordComponent,
    ActivateEmailComponent,
    PostJobComponent,
    EmployerInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
