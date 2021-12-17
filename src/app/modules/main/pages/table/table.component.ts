import { ConstantsService, Group } from './../../../../services/constants.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/services/constants.service';
import { CurrencyService } from 'src/app/services/currency.service';
import {MatDialog} from '@angular/material/dialog';
import { EmailComponent } from '../email/email.component';
import { ProgresComponent } from '../progres/progres.component';
import { HistoryLetteComponent } from '../history-lette/history-lette.component';
import { CreationUpdateGroupComponent } from '../creation-update-group/creation-update-group.component';
import { DisplaygroypComponent } from '../displaygroyp/displaygroyp.component';
import { CreationUpdateUserComponent } from '../creation-update-user/creation-updateuser.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  users!: User[];

  constructor(public dialog: MatDialog, public constantsService: ConstantsService, private currencyService:CurrencyService){}

  ngOnInit(): void {
    this.getKnowUsers();
    this.onDisplayGroups();
  }

  getKnowUsers() {
    this.constantsService.users = [];
    this.currencyService.getUsersAll()
    .subscribe((result : any) => {
      for (let item of result) {
        this.constantsService.users.push({
          id: item.id,
          name: item.name,
          surname: item.surname,
          email: item.email
        });
      };
      this.onDisplayUsers(0);
    });

  }

  onDisplayUsers(id:number) {
    this.users =[];

    if(id == 0){
      for (let item of this.constantsService.users) {
          this.users.push({
            id: item.id,
            name: item.name,
            surname: item.surname,
            email: item.email
          });
      };
    }
    else{
      let Id = 0;
      for (let i of this.constantsService.groups) {
        if(i.id == id){
          // user = this.constantsService.users.find(item => item.id == i);
          for (let index = 0; index < this.constantsService.users.length; index++) {
            if(this.constantsService.users[index].id == i.usersId[Id]){
              this.users.push({
                id: this.constantsService.users[index].id,
                name: this.constantsService.users[index].name,
                surname: this.constantsService.users[index].surname,
                email: this.constantsService.users[index].email
              });
              Id++;
            }
          }
          break;
        }
      };
    }

  }

  onDisplayGroups() {
    this.constantsService.groups = [];
    this.constantsService.groups.push({
      id: 0,
      name: "All",
      usersId: [],
    });

    this.currencyService.getGroupAll()
    .subscribe((result : any) => {
      for (let item of result) {
        this.constantsService.groups.push({
          id: item.id,
          name: item.name,
          usersId: item.usersId.sort(function(a: number, b: number) {
            return a - b;
          }),
        });
      };

    });
  }

  viewHistory(user:User){
    this.currencyService.getHistoryLette(user)
    .subscribe((result : any) => {
      for (let item of result) {
        this.constantsService.dispatchs.push({
          id: item.id,
          departureDate: (item.departureDate).split('T')[0]+ ' ' +((item.departureDate).split('T')[1]).split('.')[0],
          // departureDate: new Date ((item.departureDate).split('T')[0]+ ' ' +((item.departureDate).split('T')[1]).split('.')[0]),
          status: item.status,
          userId: item.userId,
          letterId:item.letterId
        });
      };
    });
    this.dialog.open(HistoryLetteComponent)
    .afterClosed().subscribe(result => {
      this.constantsService.dispatchs = [];
    });

  }

  userDelete(id:number){
    this.currencyService.deleteUser(id)
    .subscribe((result : any) => {
      this.getKnowUsers();
    });
  }

  sendLetterToEveryone(){
    this.sendLetter(this.users);
  }

  sendLetterToId(user:User){
    this.sendLetter([user]);
  }

  sendLetter(users:User[]){
    this.constantsService.usersWithLetters = users;
    this.dialog.open(EmailComponent)
    .afterClosed().subscribe(result => {
        this.constantsService.textBody = "";
        this.constantsService.textSubject = "";
        this.constantsService.usersWithLetters = [];
    });
  }

  userAdd(){
    this.dialog.open(CreationUpdateUserComponent)
    .afterClosed().subscribe(result => {
      this.getKnowUsers();
    });

  }

  userEditing(user:User){
    this.constantsService.user = user;
    this.dialog.open(CreationUpdateUserComponent)
    .afterClosed().subscribe(result => {
      this.getKnowUsers();
    });
  }

  groupEditing(){
    this.dialog.open(DisplaygroypComponent)
    .afterClosed().subscribe(result => {
      this.ngOnInit();
      // this.onDisplayUsers(0);
      // this.onDisplayGroups();
    });
  }

}



