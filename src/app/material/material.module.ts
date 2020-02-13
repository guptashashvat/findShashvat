import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {AtomSpinnerModule} from 'angular-epic-spinners'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    AtomSpinnerModule
  ],
  exports: [
    MatDialogModule,
    MatButtonModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    AtomSpinnerModule]
})
export class MaterialModule { }
