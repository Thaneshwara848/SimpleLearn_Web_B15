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
import { AttrubutedirectveComponent } from './attrubutedirectve/attrubutedirectve.component';
import { LoanComponent } from './loan/loan.component';
import { EduComponent } from './loan/edu/edu.component';
import { PersonalComponent } from './loan/personal/personal.component';
import { GoldComponent } from './loan/gold/gold.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { SqrpipePipe } from './sqrpipe.pipe';
import { CubepipePipe } from './cubepipe.pipe';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { ReactivedrivenfromComponent } from './reactivedrivenfrom/reactivedrivenfrom.component';
import { CommonservComponent } from './commonserv/commonserv.component';
import { Serv1Component } from './serv1/serv1.component';
import { Serv2Component } from './serv2/serv2.component';
import { Serv3Component } from './serv3/serv3.component';
import { HttpintegrationComponent } from './httpintegration/httpintegration.component';
import { HttpClientModule } from '@angular/common/http';

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
    DirectivesdemoComponent,
    AttrubutedirectveComponent,
    LoanComponent,
    EduComponent,
    PersonalComponent,
    GoldComponent,
    PipedemoComponent,
    SqrpipePipe,
    CubepipePipe,
    FormsDemoComponent,
    ReactivedrivenfromComponent,
    CommonservComponent,
    Serv1Component,
    Serv2Component,
    Serv3Component,
    HttpintegrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
