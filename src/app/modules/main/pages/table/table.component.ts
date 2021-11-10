import { Group } from './../../../../services/constants.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/services/constants.service';
import { CurrencyService } from 'src/app/services/currency.service';
import {MatDialog} from '@angular/material/dialog';
import { EmailComponent } from '../email/email.component';

let idGroup: number = 0;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent implements OnInit {

  users! : User[];
  groups! : Group[];

  constructor(public dialog: MatDialog, private currencyService:CurrencyService ){}

  ngOnInit(): void {
    this.onDisplayUsers(idGroup);
    this.onDisplayGroups();
  }

  onDisplayUsers(id:number) {
    this.users =[];

    this.currencyService.getUser(id)
    .subscribe((result : any) => {
      for (let item of result) {
        this.users.push({
          id: item.id,
          name: item.name,
          surname: item.surname,
          email: item.email
        });
      };
    });
  }

  onDisplayGroups() {
    this.groups = [];
    this.groups.push({
      id: 0,
      name: "All",
    });

    this.currencyService.getGroupAll()
    .subscribe((result : any) => {
      for (let item of result) {
        this.groups.push({
          id: item.id,
          name: item.name,
        });
      };
    });
  }

  sendlettertoeveryone(){
    debugger;
    this.users;
  }


  sendlettertoid(user:User){
    // debugger;
    const dialogRef = this.dialog.open(EmailComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log({result});
    });
  }

  groupSelection(id:number){
    if(idGroup !== id)
      this.onDisplayUsers(id);
    idGroup = id;
  }

  userEditing(id:number){

  }

  groupEditing(){

  }

}



