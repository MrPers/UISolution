import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CurrencyService } from 'src/app/services/currency.service';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-progres',
  templateUrl: './progres.component.html',
  styleUrls: ['./progres.component.css']
})

export class ProgresComponent implements OnInit {

  constructor(public tableComponent: MatDialogRef<TableComponent>, private currencyService:CurrencyService) { }

  status: number = 0;

  ngOnInit(): void {
    this.currencyService.statusLetter()
      .subscribe((result : any) => {
        this.status = result;
      });

      console.log(this.status);

      setTimeout(
      ()=>{
        if(this.status == 100){
          this.tableComponent.close()
        }
        else{
          this.ngOnInit()
        }
      }, 500);
  }

}
