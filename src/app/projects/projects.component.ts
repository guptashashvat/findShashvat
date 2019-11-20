import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetailDialogComponent } from '.././project-detail-dialog/project-detail-dialog.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openProjectDialog(projectName: string){
    this.dialog.open(ProjectDetailDialogComponent,
    {width: '250vw', height: '100vh', data: {projectName: projectName}});
  }

}
