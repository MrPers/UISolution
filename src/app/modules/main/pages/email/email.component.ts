import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConstantsService } from 'src/app/services/constants.service';
import { TableComponent } from '../table/table.component';
import { AngularEditorConfig } from '@kolkov/angular-editor';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})

export class EmailComponent {
  constructor(public constantsService: ConstantsService) { }

  public htmlContent: any;

  ngOnInit(): void {
  }

  send(){
    // debugger;
    this.constantsService.isSend = true;
  }

}
