import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ConstantsService } from 'src/app/services/constants.service';
import { CurrencyService } from 'src/app/services/currency.service';
import { HistoryLetteComponent } from '../history-lette/history-lette.component';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit {
  textSubject!: string;
  textBody!: string;

  constructor(public historyLetteComponent: MatDialogRef<HistoryLetteComponent>, private currencyService:CurrencyService, private constantsService:ConstantsService) { }

  ngOnInit(): void {
    // debugger;
    this.textSubject = this.constantsService.textSubject;
    this.textBody = this.constantsService.textBody;
    console.log(this.textBody);
  }

}
