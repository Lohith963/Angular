import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{AboutComponent} from './about/about.component';
import{HomeComponent} from './home/home.component';
import{DashboardComponent}from'./dashboard/dashboard.component';
import { ExpComponent } from './dashboard/exp/exp.component';
import { ContactsComponent } from './dashboard/contacts/contacts.component';
import { PersonalComponent } from './dashboard/personal/personal.component';
import { SkilsComponent } from './dashboard/skils/skils.component';





const routes: Routes = [
  {path:"Home",component:HomeComponent},
  {path:"About",component:AboutComponent},
  {path:"Dash",component:DashboardComponent,
    children:[
      {path:"exp",component:ExpComponent},
      {path:"con",component:ContactsComponent},
      {path:"per",component:PersonalComponent},
      {path:"ski",component:SkilsComponent}
    ]
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents=[
  ContactsComponent,
  ExpComponent
]