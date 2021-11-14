import { ConstantsService, Group } from './../../../../services/constants.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/services/constants.service';
import { CurrencyService } from 'src/app/services/currency.service';
import {MatDialog} from '@angular/material/dialog';
import { EmailComponent } from '../email/email.component';
import { ProgresComponent } from '../progres/progres.component';
import { CreationUpdateUserComponent } from '../creation-update/creation-updateuser.component';
import { HistoryLetteComponent } from '../history-lette/history-lette.component';

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
  groupId! : number;

  constructor(public dialog: MatDialog, public constantsService: ConstantsService, private currencyService:CurrencyService){}

  ngOnInit(): void {
    this.onDisplayUsers(idGroup);
    this.onDisplayGroups();
  }

  onDisplayUsers(id:number) {
    this.users =[];
    this.groupId = id;
    this.currencyService.getUsers(id)
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
    this.sendLetter(this.users);
  }

  sendLetterToId(user:User){
    this.sendLetter([user]);
  }

  sendLetter(users:User[]){
    this.dialog.open(EmailComponent)
    .afterClosed().subscribe(result => {
      if(this.constantsService.isSend == true){
        this.currencyService.sendLetter(this.constantsService.textBody, this.constantsService.textSubject, users)
        .subscribe((result : any) => {
        });

        this.constantsService.textBody = "";
        this.constantsService.textSubject = "";
        this.constantsService.isSend = false;

        if(users.length > 1){
          setTimeout(()=>this.dialog.open(ProgresComponent), 500);
        }
      }
    });
  }

  groupSelection(id:number){
    if(idGroup !== id)
      this.onDisplayUsers(id);
    idGroup = id;
  }

  userDelete(id:number = 0){
    this.currencyService.deleteUser(id)
    .subscribe((result : any) => {
      this.onDisplayUsers(this.groupId);
    });
  }

  userAdd(){
    this.dialog.open(CreationUpdateUserComponent)
    .afterClosed().subscribe(result => {
      this.currencyService.addUser(this.constantsService.user)
      .subscribe((result : any) => {
        this.onDisplayUsers(this.groupId);
      });
      this.constantsService.user = new User();
    });

  }

  userEditing(user:User){
    this.constantsService.user = user;
    this.dialog.open(CreationUpdateUserComponent)
    .afterClosed().subscribe(result => {
      this.currencyService.updateUser(this.constantsService.user)
      .subscribe((result : any) => {
        this.onDisplayUsers(this.groupId);
      });

      this.constantsService.isSend = false;
      this.constantsService.user = new User();
    });

  }

  viewHistory(user:User){
    // this.constantsService.user = user;
    this.currencyService.getHistoryLette(user)
    .subscribe((result : any) => {
      for (let item of result) {
        this.constantsService.dispatchs.push({
          id: 1,
          departureDate: (item.departureDate).split('T')[0]+ ' ' +((item.departureDate).split('T')[1]).split('.')[0],
          // departureDate: new Date ((item.departureDate).split('T')[0]+ ' ' +((item.departureDate).split('T')[1]).split('.')[0]),
          status: item.status,
          UserId: 1
        });
      };

      // for (var i = (this.currentPage - 1)* 10; i < result.; i++) {
      //   this.allResultData.push({
      //     position: this.resultData[i].position,
      //     buy: this.resultData[i].buy,
      //     sale: this.resultData[i].sale,
      //     data: this.resultData[i].data
      //   });
      // };
    });
    this.dialog.open(HistoryLetteComponent)
    .afterClosed().subscribe(result => {
      // this.currencyService.updateUser(this.constantsService.user)
      // .subscribe((result : any) => {
      //   this.onDisplayUsers(this.groupId);
      // });

      // this.constantsService.user = new User();

    });

  }

  groupEditing(){

  }

}



