import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(@Inject(DOCUMENT) document) {
    
 }
 ngOnInit(){
   AOS.init();
 }
 activateLink(elemId) {
  document.getElementsByClassName('activeLink')[0].classList.remove("activeLink");
  document.getElementById(elemId).classList.add("activeLink");
 }
  @HostListener('window:scroll', ['$event']) 
    scrollHandler(event) {
      if (window.pageYOffset > document.getElementById('menuBar').offsetTop) {
        document.getElementById('menuBar').classList.add("sticky");
      } else {
        document.getElementById('menuBar').classList.remove("sticky");
      }
      
    }
}
