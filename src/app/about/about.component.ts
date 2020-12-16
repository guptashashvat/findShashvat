import { Component, OnInit } from '@angular/core';
import jsonData from '../../assets/data.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  public aboutData = jsonData[0].about;
  ngOnInit() {
  }

}
