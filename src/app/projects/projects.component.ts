import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetailDialogComponent } from '.././project-detail-dialog/project-detail-dialog.component';
import jsonData from '../../assets/data.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projectList=jsonData[0].projectPage.projectList;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openProjectDialog(projectName: string){
    this.dialog.open(ProjectDetailDialogComponent,
    {width: '250vw', data: {projectName: projectName}});
  }

}
