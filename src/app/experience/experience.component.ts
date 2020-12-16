import { Component, OnInit } from '@angular/core';
import jsonData from '../../assets/data.json';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  public epitome = jsonData[0].experiencePage.epitome;
  public experienceList = jsonData[0].experiencePage.experienceList;
  constructor() { }

  ngOnInit() {
  }

}
