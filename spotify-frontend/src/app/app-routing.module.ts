import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FieldCheckerGuard } from 'src/field-checker.guard';
import { LoginCheckerGuard } from 'src/login-checker.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SongplayComponent } from './songplay/songplay.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {
    path:"signupView",
    component:SignupComponent,
    canDeactivate:[FieldCheckerGuard]
  },
  {path:"loginView", component:LoginComponent},
  {path:"adminView",component:AdminDashboardComponent,canActivate:[LoginCheckerGuard]},
  {path:"userView", component:UserDashboardComponent,canActivate:[LoginCheckerGuard]},
  {path:"song", component:SongplayComponent},
  {path:"**",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
