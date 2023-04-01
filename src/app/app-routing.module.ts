import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalaryComponent } from './galary/galary.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DepartmentComponent } from './department/department.component';
import { DevelopemtComponent } from './developemt/developemt.component';
import { TesteingComponent } from './testeing/testeing.component';
import { ServicessComponent } from './servicess/servicess.component';
import { EventdemoComponent } from './eventdemo/eventdemo.component';

const routes: Routes = [
  {
  path:'home',component:HomeComponent
  },
  {
    path:'galary',component:GalaryComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'eventdemo',component:EventdemoComponent
  },
  {
    path:"dept",component:DepartmentComponent,
    // children: [
    //   { path: 'dev', component:DevelopemtComponent },
    //   { path: 'test', component: TesteingComponent },
    //   { path: 'service', component: ServicessComponent }
    // ]
  },
  {
    path:"dept/dev",component:DevelopemtComponent
  },
  {
    path:"dept/test",component:TesteingComponent
  },
  {
    path:"dept/service",component:ServicessComponent
  }
  // {
  //   path:'',component:LoginComponent
  // }
  // {
  //   path:'**',component:LoginComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
