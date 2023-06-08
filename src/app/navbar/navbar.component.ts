import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() {
    $(document).ready(()=>{

      $("#mobnav").click(function(){
        $('body').addClass('noscroll');
        $('#cross').show();
        $('#mobnav').hide();
        $("header nav").animate({'left' : '0'});
      });
    
      $("#cross").click(function(){
        $('body').removeClass('noscroll');
        $('#cross').hide();
        $('#mobnav').show();
        $("header nav").animate({'left' : '-100%'});
      });
    
      // submenu
      $(document).on('click','#top li .down-icon',function(){
        $(this).prev().slideToggle(); 
      });
    
      // Remove svg from menu
      $('#top li.menu-item-has-children a svg').remove();
      $('#top li.menu-item-has-children').append('<span class="down-icon"></span>');
    
    
    }); 
   }

  ngOnInit(): void {
  }
  


}
