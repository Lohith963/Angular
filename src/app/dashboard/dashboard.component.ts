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
export class DashboardComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    a:String
    $(document).ready(function () {

      var navListItems = $('div.setup-panel div a'),
          allWells = $('.setup-content'),
          allNextBtn = $('.nextBtn');
  
      allWells.hide();
  
      navListItems.click(function (e) {
          e.preventDefault();
          var $target = $($(this).attr('href')),
              $item = $(this);
  
          if (!$item.hasClass('disabled')) {
              navListItems.removeClass('btn-success').addClass('btn-default');
              $item.addClass('btn-success');
              allWells.hide();
              $target.show();
              $target.find('input:eq(0)').focus();
          }
      });
  
      allNextBtn.click(function () {
          var curStep = $(this).closest(".setup-content"),
              curStepBtn = curStep.attr("id"),
              nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
              curInputs = curStep.find("input[type='text'],input[type='url']"),
              isValid = true;
  
          $(".form-group").removeClass("has-error");
          for (var i = 0; i < curInputs.length; i++) {
              if (!curInputs[i].validity.valid) {
                  isValid = false;
                  $(curInputs[i]).closest(".form-group").addClass("has-error");
              }
          }
  
          if (isValid) nextStepWizard.removeAttr('disabled').trigger('click');
      });
  
      $('div.setup-panel div a.btn-success').trigger('click');
  });
    
  }
  showcontacts()
    {
    this.router.navigate(['con'],{relativeTo: this.route})
    }

    showexp()
    {
    this.router.navigate(['exp'],{relativeTo: this.route})
    }
    showper()
    {
    this.router.navigate(['per'],{relativeTo: this.route})
    }
    showski()
    {
    this.router.navigate(['ski'],{relativeTo: this.route})
    }
    
}
