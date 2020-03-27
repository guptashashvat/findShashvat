import { Component, OnInit } from '@angular/core';
import jsonData from '../../assets/data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public skillSet=jsonData[0].homePage.skillSet;
   
  constructor() {
    
   }
  ngOnInit() {
  }
  templateParams = {
    name: 'James',
    notes: 'Check this out!'
};  
  
}
