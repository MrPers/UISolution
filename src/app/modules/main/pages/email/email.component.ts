import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConstantsService, MailLetter } from 'src/app/services/constants.service';
import { TableComponent } from '../table/table.component';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { CurrencyService } from 'src/app/services/currency.service';
import { ProgresComponent } from '../progres/progres.component';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})

export class EmailComponent {

  constructor(
    public dialog: MatDialog,
    public constantsService: ConstantsService,
    private currencyService:CurrencyService
    ) { }


  ngOnInit(): void {
  }

  send(){
    let mailLetter: MailLetter = {
      textBody: this.constantsService.textBody,
      textSubject: this.constantsService.textSubject,
      users: this.constantsService.usersWithLetters
    };

    this.currencyService.sendLetter(mailLetter)
    .subscribe((result : any) => {
    });

    if(this.constantsService.usersWithLetters.length > 1){
      this.dialog.open(ProgresComponent);
    }
  }

}
