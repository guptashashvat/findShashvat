import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import jsonData from '../../assets/data.json';

@Component({
  selector: 'app-project-detail-dialog',
  templateUrl: './project-detail-dialog.component.html',
  styleUrls: ['./project-detail-dialog.component.css']
})
export class ProjectDetailDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ProjectDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {projectName: string}
    ) { }
    public projectData=jsonData[0].projectDialog[this.data.projectName];
    
  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
