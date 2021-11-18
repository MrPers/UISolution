import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ConstantsService, Dispatch } from 'src/app/services/constants.service';
import { CurrencyService } from 'src/app/services/currency.service';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-history-lette',
  templateUrl: './history-lette.component.html',
  styleUrls: ['./history-lette.component.css']
})

export class HistoryLetteComponent implements OnInit {

  dispatchs!: Dispatch[];

  constructor(public tableComponent: MatDialogRef<TableComponent>, private currencyService:CurrencyService, private constantsService:ConstantsService) { }

  ngOnInit(): void {
    this.dispatchs = this.constantsService.dispatchs
  }

}
