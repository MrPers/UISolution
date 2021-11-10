import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConstantsService } from 'src/app/services/constants.service';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  constructor(public constantsService: ConstantsService) { }

  ngOnInit(): void {
  }

  send(){
    // debugger;
    this.constantsService.isSend = true;
  }

}
