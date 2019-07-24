import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import{PersonalComponent} from './dashboard/personal/personal.component'
import { SkilsComponent } from './dashboard/skils/skils.component';
import { ExpComponent } from './dashboard/exp/exp.component';
import { ContactsComponent } from './dashboard/contacts/contacts.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PersonalComponent,
    DashboardComponent,
  ContactsComponent,
    SkilsComponent,
    ExpComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
