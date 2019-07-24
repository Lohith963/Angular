import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webpage';
    email:string="";
    password:string="";
    address:string="";
    city:string="";
    state:string="";
    msg:string="";
    login(txt1)
    {
       if (this.email=="lohith" && this.password=="lohith")
       {
          this.msg="successful";
       }  
       else{
           this.msg="not successful";
           txt1.focus();
       }     
    }
}
