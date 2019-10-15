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
  @HostListener('window:scroll', ['$event']) 
    scrollHandler(event) {
      // if (window.pageYOffset > document.getElementById('test').offsetTop) {
      //   document.getElementById('test').classList.add("sticky");
      // } else {
      //   document.getElementById('test').classList.remove("sticky");
      // }
      
    }
}
