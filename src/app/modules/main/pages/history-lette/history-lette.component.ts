import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConstantsService, Dispatch } from 'src/app/services/constants.service';
import { CurrencyService } from 'src/app/services/currency.service';
import { LetterComponent } from '../letter/letter.component';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-history-lette',
  templateUrl: './history-lette.component.html',
  styleUrls: ['./history-lette.component.css']
})

export class HistoryLetteComponent implements OnInit {

  dispatchs!: Dispatch[];

  constructor(public dialog: MatDialog, public tableComponent: MatDialogRef<TableComponent>, private currencyService:CurrencyService, private constantsService:ConstantsService) { }

  ngOnInit(): void {
    this.dispatchs = this.constantsService.dispatchs
  }

  viewLette(id:number){
    this.currencyService.getLette(id)
    .subscribe((result : any) => {
      this.dialog.open(LetterComponent)
      .afterClosed().subscribe(result => {

        this.constantsService.textSubject = "";
        this.constantsService.textBody = "";
      });

      this.constantsService.textSubject = result.textSubject;
      this.constantsService.textBody = result.textBody;

      this.tableComponent.close();

    });


  }

}
