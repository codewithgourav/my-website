import { Component, OnInit,AfterViewInit  } from '@angular/core';
import { ElementRef } from '@angular/core'; 
import { FormControl, FormGroup } from '@angular/forms';
import { MailserviceService } from '../services/mailservice.service'; 
 import './owl.d.ts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  contactForm!: FormGroup;
  emails: string[] = ['gc6290108200@gmail.com'];
  constructor(private mailservice : MailserviceService) { 
    const carouselText = [
      {text: " Front-End Developer", color: "#cdd9f2"},
      {text: " Painter", color: "#cdd9f2"},
      {text: " Traveller", color: "#cdd9f2"}
    ]
    
    $( document ).ready(async function() {
      carousel(carouselText, "#feature-text")
    });
    
    async function typeSentence(sentence:any, eleRef: any, delay = 100) {
      const letters = sentence.split("");
      let i = 0;
      while(i < letters.length) {
        await waitForMs(delay);
        $(eleRef).append(letters[i]);
        i++
      }
      return;
    }
    
    async function deleteSentence(eleRef: any) {
      const sentence = $(eleRef).html();
      const letters = sentence.split("");
      let i = 0;
      while(letters.length > 0) {
        await waitForMs(100);
        letters.pop();
        $(eleRef).html(letters.join(""));
      }
    }
    
    async function carousel(carouselList: string | any[], eleRef: string) {
        var i = 0;
        while(true) {
          updateFontColor(eleRef, carouselList[i].color)
          await typeSentence(carouselList[i].text, eleRef);
          await waitForMs(1500);
          await deleteSentence(eleRef);
          await waitForMs(500);
          i++
          if(i >= carouselList.length) {i = 0;}
        }
    }
    
    function updateFontColor(eleRef: string, color: string | number | ((this: any, index: number, value: string) => string | number | void | undefined)) {
      $(eleRef).css('color', color);
    }
    
    function waitForMs(ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }

    $(document).ready(() => {
      $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
      });
    });
    
    $(document).ready(() => {
      $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 4
          }
        }
      });
    });
   
  }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      firstname : new FormControl(''),
      lastname : new FormControl(''),
      phoneNumber : new FormControl(''),
      email: new FormControl(''),
      msg : new FormControl(''),
    }) 
  }

  submit(){
    this.mailservice.sendEmail(this.contactForm.value).subscribe(res=>{
      this.contactForm.reset()
    })  
  }
}
