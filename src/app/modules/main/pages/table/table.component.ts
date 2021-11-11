import { ConstantsService, Group } from './../../../../services/constants.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/services/constants.service';
import { CurrencyService } from 'src/app/services/currency.service';
import {MatDialog} from '@angular/material/dialog';
import { EmailComponent } from '../email/email.component';

let idGroup: number = 0;
// let textMessage: String ="";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent implements OnInit {

  users!: User[];
  groups! : Group[];

  // constructor(public dialog: MatDialog, public emailComponent: EmailComponent, private currencyService:CurrencyService){}
  constructor(public dialog: MatDialog, public constantsService: ConstantsService, private currencyService:CurrencyService){}

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

  sendLetterToEveryone(){
    this.users;
    this.dialog.open(EmailComponent)
    .afterClosed().subscribe(result => {
      if(this.constantsService.isSend == true){
        // let time : string[]=[];
        // for (let index = 0; index < this.users.length; index++) {
        //   time[index] = this.users[index].email;
        // }
        this.currencyService.sendLetter(this.constantsService.textMessage, this.users)
        .subscribe((result : any) => {
          this.constantsService.textMessage = "";
          this.constantsService.isSend = false;
        });
      }
    });
  }

  sendLetterToId(user:User){
    this.dialog.open(EmailComponent)
    .afterClosed().subscribe(result => {
      if(this.constantsService.isSend == true){
        // let time : string[] = [user.email];
        this.currencyService.sendLetter(this.constantsService.textMessage, [user])
        .subscribe((result : any) => {

        });
      }
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



