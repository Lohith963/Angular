import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';


import{PersonalComponent} from './personal/personal.component'
import { SkilsComponent } from './skils/skils.component';
import { ExpComponent } from './exp/exp.component';
import { ContactsComponent } from './contacts/contacts.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  

})
export class DashboardComponent {
    email:string="";
    password:string="";
    address:string="";
    city:string="";
    state:string="";
    msg:string="";
    login()
    {
       if (this.email=="lohith@gmail.com"&& this.password=="lohith")
       {
          this.msg="successful"
       }  
       else{
           this.msg="not successful"
       }     
    }
     

    
}
