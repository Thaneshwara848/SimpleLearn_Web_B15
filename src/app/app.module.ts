import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalaryComponent } from './galary/galary.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DepartmentComponent } from './department/department.component';
import { DevelopemtComponent } from './developemt/developemt.component';
import { TesteingComponent } from './testeing/testeing.component';
import { ServicessComponent } from './servicess/servicess.component';
import { EventdemoComponent } from './eventdemo/eventdemo.component';
import { DirectivesdemoComponent } from './directivesdemo/directivesdemo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalaryComponent,
    SignupComponent,
    LoginComponent,
    DepartmentComponent,
    DevelopemtComponent,
    TesteingComponent,
    ServicessComponent,
    EventdemoComponent,
    DirectivesdemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
