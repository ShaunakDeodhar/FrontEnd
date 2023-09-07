import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { ScheduleMeetingComponent } from './schedule-meeting/schedule-meeting.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewClientsComponent } from './view-clients/view-clients.component';
import { ViewMeetingsComponent } from './view-meetings/view-meetings.component';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { RegisterComponent } from './register/register.component';

const routes : Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'createClient', component: CreateClientComponent},
  {path: 'scheduleMeeting', component: ScheduleMeetingComponent},
  {path: 'viewClient', component: ViewClientsComponent},
  {path: 'viewMeeting', component: ViewMeetingsComponent},
  {path: 'register', component: RegisterComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CreateClientComponent,
    ScheduleMeetingComponent,
    LoginComponent,
    HeaderComponent,
    ViewClientsComponent,
    ViewMeetingsComponent,
    LoginHeaderComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
