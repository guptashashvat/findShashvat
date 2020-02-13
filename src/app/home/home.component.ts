import { Component, OnInit } from '@angular/core';
import homeData from '../../assets/data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public skillSet:{skill:string,value:number}[]=homeData[0].skillSet;
   
  constructor() {
    
   }
  ngOnInit() {
  }
  templateParams = {
    name: 'James',
    notes: 'Check this out!'
};  
  
}
