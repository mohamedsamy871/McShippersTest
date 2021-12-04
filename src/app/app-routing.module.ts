import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './Authentication/login/login.component';
const routes: Routes = [
  {
    component: HomePageComponent,
    path:''
  },
  {
    component: LoginComponent,
    path:'login'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
