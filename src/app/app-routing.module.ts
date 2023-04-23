import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskModelComponent } from './task-model/task-model.component';

const routes: Routes = [
  { path: '', component:LoginComponent },
  { path:"register",component :RegisterComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"taksModel",component:TaskModelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
